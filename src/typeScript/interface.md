## interface 接口

- 可以用来约束，概念上可能毫不相关的内容

## 接口的使用

- 有一个`Car`类，和一个`Iphone`类，他们都拥有`switchRaido`方法，但找不到一个公共的父类，这个时候就抽取出来一个公共接口。
- 使用`implements`关键字，使用接口。
- 一个类有多个接口时，用`,`隔开。

```ts
interface Radio {
  switchRadio(): void;
}
interface Battery {
  checkBatteryStatus(): void;
}
// 使用接口
class Car implements Radio {
  switchRadio() {}
}
// 使用多个接口
class Iphone implements Radio, Battery {
  switchRadio() {}
  checkBatteryStatus() {}
}
```

## 接口的继承

- 使用`extends`关键字继承父接口

```ts
// 父接口
interface Radio {
  switchRadio(): void;
}
// 接口的继承
interface BatterWithRadio extends Radio {
  checkBatteryStatus(): void;
}
class Car implements Radio {
  switchRadio() {}
}

// Battery里就有 switchRadio && checkBatteryStatus
class Iphone implements BatterWithRadio {
  switchRadio() {}
  checkBatteryStatus() {}
}
```
