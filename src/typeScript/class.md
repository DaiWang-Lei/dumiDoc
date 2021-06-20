---
order: 1
---

# Class 类

- 类(Class):定义了一切事物的抽象特点
- 对象(Object):类的实例
- 面向对象(OOP)三大特性:封装、继承、多态

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}

const dog = new Animal('dog');
console.log(dog.run());
```

## 继承

```ts
class Cat extends Animal {
  bark() {
    return `${this.name} is barking `;
  }
}
const helloCat = new Cat('加菲');
console.log(helloCat.bark());
```

## 方法的重写

- 重写构造函数，需要在子类的`constructor`中调用`super`关键字
- 调用父类的方法使用`super`关键字.`xxx()`

```ts
class Bear extends Animal {
  constructor(name: string) {
    super(name);
  }
  // 重写父类run方法
  run() {
    // 调用父类的方法使用super关键字.xxx()
    return `aOOOO,${super.run()}`;
  }
}
const xiongda = new Bear('熊大');
console.log(xiongda.run());
```

## 修饰符

- `public` 默认都是 public 公共的，可以修改的。
- `protected`受保护的，外部不可以修改，子类可以修改（只有我和我的子女可以访问修改）
- `private`私有的，不可修改的。只能在类里面进行访问，子类不可以访问
- `readonly`只读，不可以修改
- `static`静态属性，或者方法，不用实例化，直接可以通过类获取

```ts
class Animal {
  name: string;
  // 静态属性
  static categoies: string[] = ['mammal', 'angerBird'];
  // 静态方法
  static isAnimal(a) {
    return a instanceof Animal;
  }
  constructor(name: string) {
    this.name = name;
  }
}
```
