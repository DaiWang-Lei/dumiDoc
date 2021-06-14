## generics 泛型

## 为什么要有泛型？

- 封装函数的时候，不设置类型。由使用者去规定类型。
- 希望有正确的类型推断

```ts
function echo(arg){
    return arg;
}
const res = echo(123); //res 是any类型并不能推断出是number类型
// 但是，我们并不能采取如下写法:
// 因为这样res的类型仍然是any
function echo(arg：any):any{
    return arg;
}

```

## 泛型基本使用

- 使用`<T>`去规定泛型
- 这里的`T`只是大部分人的习惯

```ts
function echo<T>(arg: T): T {
  return arg;
}
const res = echo('123'); //这样就能正确推断出res的类型了
```

## 泛型传入多个值

- 在`<>`内用`,`隔开

```ts
// 有一个元组。在经过swap函数后，返回值调用元组中的位置，第0位和第1位调换位置
function swap<T, U>(arg: [T, U]): [U, T] {
  return [arg[1], arg[0]];
}
const res = swap(['123', 1]); //res的类型为：[number,string]
```

## 约束泛型

- 只要拥有共同属性就可以用`interface`去约束

```ts
interface IWithLength {
  length: number;
}
// 只要有参数中有length属性，都可以调用此函数
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length); //不加约束时，T不存在length，会报错
  return arg;
}

const arr = echoWithLength([1, 2, 3]);
const str = echoWithLength('asd');
const obj = echoWithLength({ length: 10 });
```

## 类中使用泛型

```ts
// 制作一个队列，先进先出
class Queue<T> {
  private data: T[] = [];
  push(item: T) {
    return this.data.push(item);
  }
  //由于空数组调用shift返回值为undefined,所以返回类型需加上undefined
  pop(): T | undefined {
    return this.data.shift();
  }
}
const queue = new Queue<number>();
queue.push(1);
console.log(queue.pop()?.toFixed());

const strQueueu = new Queue<string>();
strQueueu.push('123');
console.log(strQueueu.pop()?.length);
```

## interface 中使用泛型

```ts
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 12, value: '123' };
let kp2: KeyPair<string, number> = { key: '123', value: 123 };

let arr: number[] = [12, 2, 3];
let arr2: Array<number> = [12, 2, 3];
```

## 函数中使用泛型

```ts
interface IPlus<T> {
  (a: T, b: T): T;
}

function plus(a: number, b: number): number {
  return a + b;
}
function connect(a: string, b: string): string {
  return a + b;
}

const a: IPlus<number> = plus;
const b: IPlus<string> = connect;
```
