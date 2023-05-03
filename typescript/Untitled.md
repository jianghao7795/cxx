### **三、泛型类**

使用 `<T, ...>` 的语法定义任意多个类型变量

```typescript
interface GenericInterface<U> {
  value: U
  getIdentity: () => U
}

class IdentityClass<T> implements GenericInterface<T> {
  value: T

  constructor(value: T) {
    this.value = value
  }

  getIdentity(): T {
    return this.value
  }

}

const myNumberClass = new IdentityClass<Number>(68);
console.log(myNumberClass.getIdentity()); // 68
```

### **四、泛型约束**

### **4.1 确保属性存在**

```typescript
function identity<T>(arg: T): T {
  console.log(arg.length); // Error 没有length
  return arg;
}

interface Length {
  length: number;
}

function identity<T extends Length>(arg: T): T {
  console.log(arg.length); // 可以获取length属性
  return arg;
}
```

### **4.2 检查对象上的键是否存在**

**「`keyof` 操作符是在 TypeScript 2.1 版本引入的，该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。」**

```typescript
interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[];  // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person };  // string | number

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### **五、泛型参数默认类型**

```typescript
interface A<T=string> {
  name: T;
}

const strA: A = { name: "Semlinker" };
const numB: A<number> = { name: 101 };
```

https://pic4.zhimg.com/80/v2-7a4e3c96b57bd4f739647526cef2da53_720w.webp



**declare** 声明全局变量 声明全局函数、全局类或全局枚举类型等