# 微信小程序脚手架

-- 版本 0.1.4

## 全局安装wxmagic-cli脚手架

```$xslt
npm install wxmagic-cli -g
```

## 创建项目

```
wxmagic create wxapp  		//初始化项目

cd wxapp     		       	//进入到该项目

npm install           		//安装依赖

wxmagic build       		// 构建小程序项目（dist目录）

```

## 项目目录结构

```sh
wxapp                # 项目根目录
├── .labrador        # wxmaigc项目配置文件
├── .babelrc         # babel配置文件
├── .build/          # wxmagic编译临时目录
├── package.json
├── dist/            # 编译目录（小程序）
├── node_modules/
└── src/             # 源码目录
    ├── app.js
    ├── app.json
    ├── app.less
    ├── components/  # 通用组件目录
    ├── pages/       # 页面目录
    └── utils/

```

> **注意** dist目录中的所有文件是由wxmagic命令编译生成，请勿直接修改


## 配置开发工具

项目初始化后使用WebStorm或Sublime等你习惯的IDE打开项目根目录。然后打开 微信web开发者工具 新建项目，本地开发目录选择 dist 目标目录。

## wxmagic-cli的命令列表

- name：名称
- type：类型（page 或者 component）

> 初始化项目

```
wxmagic create <name> 
```

> 创建新组件以及页面

```
wxmagic generate <type> <name>
```

> 构建

```
wxmagic build  构建但不压缩   

wxmagic build -m 构建压缩代码

wxmagic build -f 强制构建，不使用缓存 
```

> 实施监听

```
wxmagic watch   编译当前项目并检测文件改动
```

## 开发流程

- 在项目中运行 `wxmagic watch`
- 在WebStorm中编码，保存
- 切换到 *微信web开发者工具* 中调试、预览
- 再回到WebStorm中编码


## 关于labrador 库

`labrador` 库对全局的 `wx` 变量进行了封装，将所有 `wx` 对象中的异步方法进行了Promise支持， 除了同步的方法，这些方法往往以 `on*`、`create*`、`stop*`、`pause*`、`close*` 开头或以 `*Sync` 结尾。在如下代码中使用 `labrador` 库。

```js
import wx, { Component, PropTypes } from 'labrador';

wx.wx;          // 原始的全局 wx 对象
wx.app;         // 和全局的 getApp() 函数效果一样，代码风格不建议粗暴地访问全局对象和方法
wx.currentPages // 对全局函数 getCurrentPages() 优雅的封装
Component;      // Labrador 自定义组件基类
PropTypes;      // Labrador 数据类型校验器集合

wx.login;       // 封装后的微信登录接口
wx.getStorage;  // 封装后的读取缓存接口
//... 更多请参见 https://mp.weixin.qq.com/debug/wxadoc/dev/api/
```

> **注意** 

我们建议不要再使用 `wx.getStorageSync()` 等同步阻塞方法，而在 `async` 函数中使用 `await wx.getStorage()` 异步非阻塞方法提高性能，除非遇到特殊情况。

## 模板的数据绑定

模板中所有变量绑定需要增加指定 `state.` 或 `props.` 。

> wxml

```
  <view>
    <text class="{{className}}">{{title}}</text>
    <template is="foo" data="{{...obj,bar}}"/>
  </view>
```
更新为

> xml
```xml
  <view>
    <text class="{{state.className}}">{{props.title}}</text>
    <template is="foo" data="{{...state.obj,bar:state.bar}}"/>
  </view>
```

## 贡献者

[devmsg](https://www.devmsg.com)

[梁兴臣](https://github.com/liangxingchen)

## 开源协议

本项目依据MIT开源协议发布，允许任何组织和个人免费使用。