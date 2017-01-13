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