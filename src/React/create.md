## 创建一个 React

- 使用官方脚手架 `create-react-app`(命令行的工具)
- 脚手架地址：http://github.com/facebook/create-react-app

```ts
npx create-react-app ts-with-react --typescript
```

## 运行项目

```ts
cd ts-with-react //你所创建的项目名称
yarn start
```

## npx 是什么？

### npm5.2 以上才有 npx

#### 优势：

- 避免安装全局模块
  - npx create-react-app ts-with-react --typescript ，是 npx 将`create-react-app`下载到一个临时目录，用完后就删除掉了
- 调用项目内部安装的模块
  - 一般项目中安装的包，只能在`package.json`的`scripts`脚本中使用
  - 命令行调用：node_modules/.bin/xxxx --version
  - npx 调用：npx xxxx --version
