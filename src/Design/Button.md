---
order: 2
---

## Button 组件

## 1、新建按钮类型`ButtonSize`enum

```ts
export enum ButtonSize {
  noraml = 'normal',
  Large = 'lg',
  Small = 'sm',
}
```

## 2、新建按钮类型`ButtonType`enum

```ts
export enum ButtonType {
  Link = 'Link',
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
}
```

## 3、创建`IBaseButtonProps`接口

- 限制使用`Button`组件时传递过来的属性

```ts
interface IBaseButtonProps {
  className?: string;
  size?: ButtonSize;
  btnType?: ButtonType;
  disabled?: boolean;
  href?: string;
  children: React.ReactNode;
}
```

## 4、创建`Button`

- `npm i classnames @types/classnames`安装 className 插件
- `classNames` 任意门 🚪 'https://github.com/JedWatson/classnames'
