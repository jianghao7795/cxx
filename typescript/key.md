## ts(TypeScript)常用语法

比如有一个联系人列表

```typescript
typescript

 代码解读
复制代码export interface Contact{
  name: string; // 姓名
  phone?: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}
```

### 1.Omit去除类型中某些项（官方提供）

现在需要定义一个新的数据类型，新的联系人列表没有邮箱项 可以使用**Omit**，其源码如下

```scala
scala

 代码解读
复制代码/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

Omit会**构造一个除类型K外具有T性质的类型** 可以看出需Omit要两个参数，Omit<type,string>： 参数：第一个为继承的type类型，第二个为想要的key的字符串，多个字符串用|分开 使用也很简单： **去除单个**，原始类型为联系人列表，新数据数据为没有邮箱项的联系人列表

```ini
ini

 代码解读
复制代码export type OmitEmailContact = Omit<Contact, 'email' >;
OmitEmailContact{
  name: string;
  phone?: string; 
  avatar: string;
  userid: string;
}
```

**去除多个**，原始类型为联系人列表，新数据数据为没有邮箱项与头像的联系人列表

```ini
ini

 代码解读
复制代码export type OmitEmailAvatarContact = Omit<Contact, 'email' | 'avatar'>;
OmitEmailAvatarContact {
  name: string;
  phone?: string; 
  userid: string;
}
```

### 2.Pick选取类型中指定类型（官方提供）

现在联系人列表只要姓名电话即可 从T中选择一组属性，将它们在K中联合

```scala
scala

 代码解读
复制代码type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

使用如下

```go
go

 代码解读
复制代码export interface ContactPick extends Pick<Contact, 'name' | 'phone'> {}
ContactPick {
  name: string;
  phone?: string; 
}
```

### 3.给类型加上指定类型（自定义）

已经定义好了数据类型，现在需要给其中一些加上id这个类型

```bash
bash

 代码解读
复制代码export type WithId<T, P = string> = T & { id: P };
```

使用如下

```ini
ini

 代码解读
复制代码export interface ContactWithId = WithId<Contact>
```

### 4.Partial将类型中所有选项变为可选，即加上？（官方提供）

可以使用**Partial**，其源码如下

```r
r

 代码解读
复制代码/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

使用如下

```typescript
typescript

 代码解读
复制代码export interface PartialContact= Partial<Contact>
PartialContact{
  name?: string; // 姓名
  phone?: string; // 手机号
  email?: string; // 邮箱
  avatar?: string; // 头像
  userid?: string; // id
}
```

### 5.Required将类型中所有选项变为必选，去除所有？（官方提供）

可以使用**Required**，其源码如下

```r
r

 代码解读
复制代码/**
 * Make all properties in T required
 */
type Required<T> = {
    [P in keyof T]-?: T[P];
};
```

使用如下

```typescript
typescript

 代码解读
复制代码export interface RequiredContact= Required<Contact>
RequiredContact{
  name: string; // 姓名
  phone: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}
```