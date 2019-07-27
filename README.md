# 移动端项目搭建模板

## 1. 介绍

基于Framework7的移动版项目搭建模板

## 2. Features

- 支持Framework7
- 支持Typescript
- 支持React Redux
- 支持React Router
- 支持tslint
- 支持基于react-intl的国际化
- 支持less
- 支持基于vw的移动端适配
- 使用了[react-app-rewired](https://github.com/timarney/react-app-rewired)和[customize-cra
](https://github.com/arackaf/customize-cra), 避免eject配置文件, 升级`webpack`, `babel`更方便, 只需要升级`react-scripts`即可
- 引入封装好的[ajax](https://gitlab.nie.netease.com/sedan/ajax), 简单的基于fetch的封装
- 引入[beehive组件库](https://gitlab.nie.netease.com/common-component-dev-group/beehive)
- 引入封装好的[redux-promise](https://gitlab.nie.netease.com/sedan/redux-promise), 一个支持`redux-thunk`和异步多状态的redux middware
- 引入封装好的[beehive-utils
](https://gitlab.nie.netease.com/sedan/beehive-utils), 封装了平时常用的一些方法

## 3. 使用方法

```sh
# 1. 删除.git目录
rm -rf .git

# 2. 修改项目名

# 3.安装
npm i

# 4. 启动
npm start

```

## 4. 基于vw的移动端适配

### 4.1. 原理

定义了一个less的插件函数`vw`(在`style/plugins/plugins.js`下), 如果GUI给的是1倍图, 则不用修改`plugins.js`, 如果给的是2倍图, 则修改`vm`函数为:

```js
functions.add("vw", function(num) {
  return (num.value / 7.5).toFixed(5) + "vw";
});
```

使用时在less文件引入`@import "~style/index"`, 然后使用:

```less
// 以1倍图为例
font-size: vm(16);
```

### 4.2. 参考

[利用视口单位实现适配布局](https://aotu.io/notes/2017/04/28/2017-4-28-CSS-viewport-units/index.html)