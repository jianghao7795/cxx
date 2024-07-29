## `_.property` 路径函数, 有助于实现`regroup` `sortBy`

- 路径函数,声明了如何拿对象中属性的路径
- 注意，这个属性两种写法 `string` / `array` , 但`array` 写法不好用

> 实现 regroup 的例子, 以下三种写法等价

```js
js复制代码var objects = [
  { 'a': { 'b': 2 } },
  { 'a': { 'b': 1 } }
];
_.map(objects, _.property('a.b')); // 指明了从a.b中拿数据并重新分组

_.map(objects, value=>value.a.b); 

_.map(objects, 'a.b'); // 也是指明了从a.b中拿数据并重新分组
// => [2, 1]
```

> 以下是配合sort使用的例子,

```js
js复制代码var objects = [
  { 'user':{'name':'fred',   'age': 48 }},
  { 'user':{'name':'barney', 'age': 36 }},
  { 'user':{'name':'barney',  'age': 40 }},
  { 'user':{'name':'fred', 'age': 34 }}
];
_.sortBy(objects, _.property(['user', 'age'])) // 指明了根据user.age中的数据进行排序

var objects = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'barney',  'age': 40 },
  { 'user': 'fred', 'age': 34 }
];
_.sortBy(objects, ['user', 'age'])  // 指出先按user排序再按age排序
```

## 数组

### `_.sortBy` 排序

```js
js复制代码var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'barney',   'age': 40 },
  { 'user': 'fred', 'age': 34 }
];

var result=_.sortBy(users, function(o) { return o.age; }); // 正序
var result1=_.sortBy(users, function(o) { return -o.age; }); // 倒序
var result2=_.sortBy(users, 'user', function(o) { return Math.floor(o.age / 10);}); // 按照特定条件排序
var result3=_.sortBy(users, ['user', 'age']); // 先按照user排序再按照age排序
var result4=_.sortBy(users, ['age', 'user']); // 先按照age排序再按照user排序
console.log(result,result1,result2,result3,result4);
```

### `_.orderBy` 更复杂的排序

### `_.last` `_.nth` 获取第几个

### `_.chunk` 切块

### `_.slice` 切片

### 并集，交集，差集

- [集合中的交并差补，网图，概念图](https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fwizblack%2Farticle%2Fdetails%2F78796557)
- `_.union`
- `_.intersection`
- `_.difference` 差集是存在单个作用主体的，difference的语义是"集合A相对与其他集合的差集", 所以得到的值必定是传入的第一个参数数组(即集合A)中的元素，如果集合A是其他集合的子集，那么得到的值必定为空数组。

### `_.uniq` 简单去重

```js
js

复制代码_.uniq([2, 1, 2]);
```

### `_.uniqBy` 适用于数组嵌套对象情况

```js
js

复制代码_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], item => item.x);
```

### `_.uniqWith` 适用于数组嵌套对象情况

```js
js复制代码var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```

### `_.range` 初始化一组数组 由数字组成

### `_.flattenDepth` 数组扁平化

- 另外还有两个`_.flatten` , `_.flattenDeep`
- 但只有 `_.flattenDepth` 才是重要的
- `_.flattenDepth` 的第二个参数决定了减少嵌套的层数

```js
js复制代码var array = [1, [2, [3, [4]], 5]];
 
_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
 
_.flattenDepth(array, 2);
```

## 对象

### `_.pick` 从对象中根据 `key` 选择 `keyValue pairs`

```js
js复制代码var object = { 'a': 1, 'b': '2', 'c': 3 };
_.pick(object, ['a', 'c']);
```

### `_.omit` 反向版pick

```css
css复制代码var object = { 'a': 1, 'b': '2', 'c': 3 };
_.omit(object, ['a', 'c']);
```

### `_.mapValues` 遍历处理value，保持key不动，将value变成你要想要的

```js
js复制代码var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};

let newArr = _.mapValues(users, value => { return value.age; });
console.log(newArr) // { 'fred': 40, 'pebbles': 1 }
```

### `_.mapKeys` 遍历处理key， 保持value不动， 将key变成你想要的

```js
js复制代码let result = _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
console.log(result)
// => { 'a1': 1, 'b2': 2 }
```

### `_.findKey`

```js
js复制代码var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

_.findKey(users, function(o) { return o.age < 40; });
// => 'barney' 

_.findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'
```

## 集合 表示数组或对象都支持 甚至字符串

### `_.map` 遍历

```js
js复制代码function square(n) {
  return n * n;
}

// 遍历数组
_.map([4, 8], square);
// => [16, 64]

// 遍历对象
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] 
```

### `_.includes`

```js
js复制代码// 集合中是否包含1
_.includes([1, 2, 3], 1);
// => true

// 集合下标为2的位置是否等于1
_.includes([1, 2, 3], 1, 2);
// => false

// 对象中是否包含value=fred
_.includes({ 'user': 'fred', 'age': 40 }, 'fred');
// => true

// 字符串中是否包含 eb 这2个连续的字母
_.includes('pebbles', 'eb');
// => true
```

## Util 工具箱

### `_.property` 返回一个由value组成的数组

```js
js复制代码var objects = [
  { 'a': { 'b': { 'c': 2 } } },
  { 'a': { 'b': { 'c': 1 } } }
];

_.map(objects, _.property('a.b.c'));
// => [2, 1]
```

### `_.cloneDeep` 深拷贝

```js
js复制代码var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = _.cloneDeep(objects);

// 深拷贝后数组中的对象已经不是同一个
console.log(deep[0] === objects[0]);
// => false
```

### `_.isEmpty` 判断空

> 注意：该方法主要适用于Collection 或 Object，不适用于Number、Boolean等值

```js
js复制代码_.isEmpty(null);
// => true

_.isEmpty(undefined);
// => true

_.isEmpty([]);
// => true

_.isEmpty({});
// => true

_.isEmpty("");
// => true

_.isEmpty([1, 2, 3]);
// => false

_.isEmpty({ 'a': 1 });
// => false
```

