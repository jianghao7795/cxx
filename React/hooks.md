# [自定义Hooks：四个典型的使用场景](https://www.cnblogs.com/qiaozhiming123/p/15919537.html)

一、如何用好hook

　　要用好 React Hooks，很重要的一点，就是要能够从 Hooks 的角度去思考问题。要做到这一点其实也不难，就是在遇到一个功能开发的需求时，首先问自己一个问题：这个功能中的哪些逻辑可以抽出来成为独立的 Hooks？

　　这样问的目的，是为了让我们尽可能的吧业务陆奥及拆分成独立的Hooks，这样有助于实现代码的模块化和解耦，同时也方便后面的维护。hooks的连个核心的优点：

1.是方便进行逻辑复用

2.是帮助关注分离

　**如何创建自定义Hooks**

自定义Hooks在形式上其实非常简单，就是声明一个名字以use开头的函数，比如useCounter。这个函数在形式上和普通函数没有区别，你可以传递任意参数给这个Hooks。但是要注意，Hooks和普通函数在语义化上是由区别的，就在于函数没有用到其他Hooks。什么意思呢？就是说如果你创建了一个 useXXX 的函数，但是内部并没有用任何其它 Hooks，那么这个函数就不是一个 Hook，而只是一个普通的函数。但是如果用了其它 Hooks ，那么它就是一个 Hook。

　　举一个简单的例子，一个简单计数器的实现，当时把业务逻辑都写在了函数组件内部，但其实是可以把业务逻辑提取出来成为一个 Hook。比如下面的代码：

```react
import { useState, useCallback }from 'react';
 
function useCounter() {
  // 定义 count 这个 state 用于保存当前数值
  const [count, setCount] = useState(0);
  // 实现加 1 的操作
  const increment = useCallback(() => setCount(count + 1), [count]);
  // 实现减 1 的操作
  const decrement = useCallback(() => setCount(count - 1), [count]);
  // 重置计数器
  const reset = useCallback(() => setCount(0), []);
  
  // 将业务逻辑的操作 export 出去供调用者使用
  return { count, increment, decrement, reset };
}
```

有了这个 Hook，我们就可以在组件中使用它，比如下面的代码：

```react
import React from 'react';

function Counter() {
  // 调用自定义 Hook
  const { count, increment, decrement, reset } = useCounter();

  // 渲染 UI
  return (
    <div>
      <button onClick={decrement}> - </button>
      <p>{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={reset}> reset </button>
    </div>
  );
}
```

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

在这段代码中，我们把原来在函数组件中实现的逻辑提取了出来，成为一个单独的 Hook，**一方面能让这个逻辑得到重用，另外一方面也能让代码更加语义化，并且易于理解和维护。**

从这个例子，我们可以看出自定义Hooks的两个特点：

1.名字一定是以use开头的函数，这样react才能知道这个函数是一个Hooks;

2.函数内部一定调用了其他的Hooks，可以是内置的Hooks，也可以是自定义Hooks。这样才能够让组件刷新，或者去产生副作用。

　　**封装通用逻辑：useAsync**

在组件的开发过程中，有一些常用的通用逻辑。过去可能应为逻辑重用比较繁琐，而经常在每个组件中去自己实现，造成维护的困难。但现有了Hooks，就可以将更多的通用逻辑通过Hooks的形式进行封装，方便被不同的组件重用。

比如说，在日常UI的开发中，有一个最常b见的需求：发起异步请求获取数据并显示在界面上。在这个过程中，我们不仅要关心请求正常返回时UI如何战术数据；还需要处理请求出错，以及惯出loding状态在UI上如何显示。

　　我们可以重新看下在第 1 讲中看到的异步请求的例子，从 Server 端获取用户列表，并显示在界面上：

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```react
import React from "react";

export default function UserList() {
  // 使用三个 state 分别保存用户列表，loading 状态和错误状态
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // 定义获取用户的回调函数
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      // 请求成功后将用户数据放入 state
      setUsers(json.data);
    } catch (err) {
      // 请求失败将错误状态放入 state
      setError(err);
    }
    setLoading(false);
  };

  return (
    <div className="user-list">
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Show Users"}
      </button>
      {error && 
        <div style={{ color: "red" }}>Failed: {String(error)}</div>
      }
      <br />
      <ul>
        {users && users.length > 0 &&
          users.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
      </ul>
    </div>
  );
}
```

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

在这里，我们定义了users、loading和error三个状态。如果我们在异步请求的不同阶段去设置不同的转台，这样Ui最终能够根据这些状态展示出来，在每个需要异步请求的组件中，其实都需要重复的逻辑。

事实上，在处理这类请求的时候，模式都是类似的，通常都会遵循下面步骤：

1.创建data，loding，error这3个state;

2.请求发出后，设置loading state为true;

3.请求成功后，将返回的数据放到某个state中，并将loading state设置false;

4.请求失败后，设置error state为true，并将loading state设为false。

最后，基于data、loading、error这3个state的数据，ui就可以正确的显示数据，或者loading、error这些反馈给客户了。

所以，通过创建一个自定义Hook,可以很好的将这样的逻辑提取出来，成为一个可重用的模块。比如代码可以这样实现：

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```react
import React from "react";

export default function UserList() {
  // 使用三个 state 分别保存用户列表，loading 状态和错误状态
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // 定义获取用户的回调函数
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      // 请求成功后将用户数据放入 state
      setUsers(json.data);
    } catch (err) {
      // 请求失败将错误状态放入 state
      setError(err);
    }
    setLoading(false);
  };

  return (
    <div className="user-list">
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Show Users"}
      </button>
      {error && 
        <div style={{ color: "red" }}>Failed: {String(error)}</div>
      }
      <br />
      <ul>
        {users && users.length > 0 &&
          users.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
      </ul>
    </div>
  );
}
```

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

那么有了这个 Hook，我们在组件中就只需要关心与业务逻辑相关的部分。比如代码可以简化成这样的形式：

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```react
import React from "react";
import useAsync from './useAsync';

export default function UserList() {
  // 通过 useAsync 这个函数，只需要提供异步逻辑的实现
  const {
    execute: fetchUsers,
    data: users,
    loading,
    error,
  } = useAsync(async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    return json.data;
  });
  
  return (
    // 根据状态渲染 UI...
  );
}
```

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

不过这里可能有一个疑问：这种类型的封装我写一个工具类不就可以了？为啥一定要通过Hooks进行封装呢？

答案很容易就能想到。应为在Hooks中，你可以管理当前组件的state，从而将更多的逻辑写在可重用的Hooks中。但是要知道，在普通的工具类中时无法直接修改组件的state的，那么也就无法在数据改变的时候触发组件的重新渲染。

　　**监听浏览器状态：useScroll**

虽然React组件基本上不需要关心太多的浏览器API,但是有时候却是必须的：

1.界面需要根据窗口重新布局；

2.在页面滚动时，需要根据滚动位置来决定是否显示一个”返回顶部“的按钮。

这都需要用到浏览器的api来监听这些状态的变化。那么我们就可以滚动条位置的场景为例，来看看因该如何用Hooks优雅的监听浏览器状态。

正如Hooks的字面意思时”钩子“，他带来的好处就是**可以让React的组件绑定在任何可能的数据源上。这样当数据源发生变化时，组件能够自动刷新。**把这个好处对应到滚动条这个场景就是：组件需要绑定到滚动条的位置数据上。

虽然这个逻辑在函数组件中能直接实现，但是把这个逻辑实现为一个独立的Hooks，既可以达到逻辑重用，在语义化也更加清晰。这和上面的useAsync的作用非常类似的。

我们可以直接来看这个Hooks因该如何实现：

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```react
import { useState, useEffect } from 'react';

// 获取横向，纵向滚动条位置
const getPosition = () => {
  return {
    x: document.body.scrollLeft,
    y: document.body.scrollTop,
  };
};
const useScroll = () => {
  // 定一个 position 这个 state 保存滚动条位置
  const [position, setPosition] = useState(getPosition());
  useEffect(() => {
    const handler = () => {
      setPosition(getPosition(document));
    };
    // 监听 scroll 事件，更新滚动条位置
    document.addEventListener("scroll", handler);
    return () => {
      // 组件销毁时，取消事件监听
      document.removeEventListener("scroll", handler);
    };
  }, []);
  return position;
};
```

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

有了这个 Hook，你就可以非常方便地监听当前浏览器窗口的滚动条位置了。比如下面的代码就展示了“返回顶部”这样一个功能的实现：

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```react
import React, { useCallback } from 'react';
import useScroll from './useScroll';

function ScrollTop() {
  const { y } = useScroll();

  const goTop = useCallback(() => {
    document.body.scrollTop = 0;
  }, []);

  const style = {
    position: "fixed",
    right: "10px",
    bottom: "10px",
  };
  // 当滚动条位置纵向超过 300 时，显示返回顶部按钮
  if (y > 300) {
    return (
      <button onClick={goTop} style={style}>
        Back to Top
      </button>
    );
  }
  // 否则不 render 任何 UI
  return null;
}
```

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 通过这个例子，我们看到了如何将浏览器状态变成可被 React 组件绑定的数据源，从而在使用上更加便捷和直观。当然，除了窗口大小、滚动条位置这些状态，还有其它一些数据也可以这样操作，比如 cookies，localStorage, URL，等等。你都可以通过这样的方法来实现。

　　**拆分复杂组件**

怎样能使函数组件不会太冗余呢？做法很简单，**就是尽量将相关的逻辑做成独立的Hooks，然后再函数组件中使用这些Hooks，通过参数传递和返回值让Hooks之间完成交互**。

为了让你对这一点有更直观的感受，我们来看一个例子。设想现在有这样一个需求：我们需要展示一个博客文章的列表，并且有一列要显示文章的分类。同时，我们还需要提供表格过滤功能，以便能够只显示某个分类的文章。为了支持过滤功能，后端提供了两个 API：一个用于获取文章的列表，另一个用于获取所有的分类。这就需要我们在前端将文章列表返回的数据分类 ID 映射到分类的名字，以便显示在列表里。

　　还是老生常谈的那句话，改变这个状况的关键仍然在于开发思路的转变。我们要真正把 Hooks 就看成普通的函数，能隔离的尽量去做隔离，从而让代码更加模块化，更易于理解和维护。那么针对这样一个功能，我们甚至可以将其拆分成 4 个 Hooks，每一个 Hook 都尽量小，代码如下：

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```react
import React, { useEffect, useCallback, useMemo, useState } from "react";
import { Select, Table } from "antd";
import _ from "lodash";
import useAsync from "./useAsync";

const endpoint = "https://myserver.com/api/";
const useArticles = () => {
  // 使用上面创建的 useAsync 获取文章列表
  const { execute, data, loading, error } = useAsync(
    useCallback(async () => {
      const res = await fetch(`${endpoint}/posts`);
      return await res.json();
    }, []),
  );
  // 执行异步调用
  useEffect(() => execute(), [execute]);
  // 返回语义化的数据结构
  return {
    articles: data,
    articlesLoading: loading,
    articlesError: error,
  };
};
const useCategories = () => {
  // 使用上面创建的 useAsync 获取分类列表
  const { execute, data, loading, error } = useAsync(
    useCallback(async () => {
      const res = await fetch(`${endpoint}/categories`);
      return await res.json();
    }, []),
  );
  // 执行异步调用
  useEffect(() => execute(), [execute]);

  // 返回语义化的数据结构
  return {
    categories: data,
    categoriesLoading: loading,
    categoriesError: error,
  };
};
const useCombinedArticles = (articles, categories) => {
  // 将文章数据和分类数据组合到一起
  return useMemo(() => {
    // 如果没有文章或者分类数据则返回 null
    if (!articles || !categories) return null;
    return articles.map((article) => {
      return {
        ...article,
        category: categories.find(
          (c) => String(c.id) === String(article.categoryId),
        ),
      };
    });
  }, [articles, categories]);
};
const useFilteredArticles = (articles, selectedCategory) => {
  // 实现按照分类过滤
  return useMemo(() => {
    if (!articles) return null;
    if (!selectedCategory) return articles;
    return articles.filter((article) => {
      console.log("filter: ", article.categoryId, selectedCategory);
      return String(article?.category?.name) === String(selectedCategory);
    });
  }, [articles, selectedCategory]);
};

const columns = [
  { dataIndex: "title", title: "Title" },
  { dataIndex: ["category", "name"], title: "Category" },
];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // 获取文章列表
  const { articles, articlesError } = useArticles();
  // 获取分类列表
  const { categories, categoriesError } = useCategories();
  // 组合数据
  const combined = useCombinedArticles(articles, categories);
  // 实现过滤
  const result = useFilteredArticles(combined, selectedCategory);

  // 分类下拉框选项用于过滤
  const options = useMemo(() => {
    const arr = _.uniqBy(categories, (c) => c.name).map((c) => ({
      value: c.name,
      label: c.name,
    }));
    arr.unshift({ value: null, label: "All" });
    return arr;
  }, [categories]);

  // 如果出错，简单返回 Failed
  if (articlesError || categoriesError) return "Failed";

  // 如果没有结果，说明正在加载
  if (!result) return "Loading...";

  return (
    <div>
      <Select
        value={selectedCategory}
        onChange={(value) => setSelectedCategory(value)}
        options={options}
        style={{ width: "200px" }}
        placeholder="Select a category"
      />
      <Table dataSource={result} columns={columns} />
    </div>
  );
}
```

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

通过这样的方式，我们就把一个较为复杂的逻辑拆分成一个个独立的 Hook 了，不仅隔离了业务逻辑，也让代码在语义上更加明确。比如说有 useArticles、useCategories 这样与业务相关的名字，就非常易于理解。虽然这个例子中抽取出来的 Hooks 都非常简单，甚至看上去没有必要。但是实际的开发场景一定是比这个复杂的，比如对于 API 返回的数据需要做一些数据的转换，进行数据的缓存，等等。那么这时就要避免把这些逻辑都放到一起，而是就要拆分到独立的 Hooks，以免产生过于复杂的组件。到时候你也就更能更体会到 Hooks 带给你的惊喜了。

　　**小结：**

好了，这篇文章要给你介绍了自定义 Hooks 的概念，以及典型的四个使用场景：

　　1.抽离业务逻辑层；

　　2.封装通用逻辑

　　3.监听浏览器状态

　　4.拆分复杂组件。

其中，我通过四个案例来帮助你真正理解 Hooks ，并熟练掌握自定义 Hooks 的用法。应始终记得，要用 Hooks 的思路去解决问题，发挥 Hooks 的最大价值，就是要经常去思考哪些逻辑应该封装到一个独立的 Hook，保证每个 Hook 的短小精悍，从而让代码更加清晰，易于理解和维护。