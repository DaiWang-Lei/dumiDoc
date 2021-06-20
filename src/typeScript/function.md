---
order: 0.5
---

# function 函数

## 函数声明

#### _可选参数必须放在最后_

```ts
function add(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}
let res = add(1, 2, 3);
```

## 函数表达式

```ts
const add = function (x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
};
let res = add(1, 2, 3);
const add2: (x: number, y: number, z?: number) => number = add;
```
