```javascript
// Prompt
// 提供一个用户离开页面时的提示选择。

import {
  Prompt
} from 'umi';
export default () => {
  return (
    <div>
      <Prompt message="你确定离开吗？"></Prompt>

      <Prompt message={
        location => {
          return location.pathname !== '/' ? true : '您确定要跳转到首页么？';
        }
      }></Prompt>

      <Prompt when={formIsHalfFilledOut} message="您确定半途而废么？" />
    </div>
  );
}

// withRouter
// 高阶组件，可以通过 withRouter 获取到 history、location、match 对象
import { withRouter } from "umi";
export default withRouter(({ history, location, match }) => {
  return (
    <div>
      <ul>
        <li>history: {history.action}</li>
        <li>location: {location.pathname}</li>
        <li>match: {`${match.isExact}`}</li>
      </ul>
    </div>
  );
});

//useLocation
// hooks，获取 location 对象
import { useLocation } from "umi";
export default () => {
  const location = useLocation()
  return (
    <div>
      <ul>
        <li>location: {location.pathname}</li>
      </ul>
    </div>
  );
};

// useParams
// hooks，获取 params 对象。 params 对象为动态路由（例如：/users/:id）里的参数键值对。


import { useParams } from "umi";
export default () => {
  const params = useParams()
  return (
    <div>
      <ul>
        <li>params: {JSON.stringify(params)}</li>
      </ul>
    </div>
  );
};

// useRouteMatch
// 获取当前路由的匹配信息。


import { useRouteMatch } from "umi";
export default () => {
  const match = useRouteMatch()
  return (
    <div>
      <ul>
        <li>match: {JSON.stringify(match.params)}</li>
      </ul>
    </div>
  );
};
```