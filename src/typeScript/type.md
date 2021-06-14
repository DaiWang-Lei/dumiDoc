## type

## type aliases 类型别名

- 使用`type`关键字创建类型别名
- 可以使用`|`来创建联合类型

```ts
//type aliases
type PlusType = (x: number, y: number) => number;
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: PlusType = sum;

type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}
```

## type assertion 类型断言

- 使用`as`关键字进行类型断言
- 当要使用某个确认的属性时，但是`TS`又推断不出来时，使用类型断言。（你比 TS 更了解代码时）

```ts
function getLength(input: string | number): number {
  //    类型断言写法一：
  // const str = input as String
  // if (str.length) {
  //     return str.length;
  // } else {
  //     const number = input as Number;
  //     return number.toString().length
  // }

  // 类型断言写法二：
  if (<string>input) {
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}
```
