# 微信小程序脚手架

-- 版本 0.1.4

## 全局安装wxmagic-cli脚手架

```$xslt
npm install wxmagic-cli -g
```

## 项目目录结构

```sh
wxapp                 # 项目根目录
├── .labrador        # Labrador项目配置文件
├── .babelrc         # babel配置文件
├── .build/          # Labrador编译临时目录
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

## 创建项目

```
wxmagic create wxapp  		//初始化项目

cd wxapp     		       	//进入到该项目

npm install           		//安装依赖

wxmagic build       		// 构建小程序项目（dist目录）

```

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

## 开发

- 配置`.labrador` 
