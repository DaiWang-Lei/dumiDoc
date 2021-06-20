---
order: 3
---

## enum 枚举

## enum 基本用法

- 如果不赋值，默认从 0 开始递增

* 如果赋值为数字，则从赋值的那位数字开始递增

```ts
enum Direction {
  Up = 11,
  Down,
  Left,
  Right,
}
console.log(Direction.Up); //11
// 可以根据值，去反向映射
console.log(Direction[12]); //Down
```

## 常量枚举

- 在枚举前加`const`关键字，会生成常量枚举(可提升性能)

* 枚举值分为：
  - 常量值
  - 计算值
* 只有常量值的枚举，可以使用常量枚举

```ts
const enum XXX {
  One = 'ONE',
  two = 'TWO',
}
```
