# 微信小程序脚手架

-- 版本 0.1.3

## 配置开发工具

项目初始化后使用WebStorm或Sublime等你习惯的IDE打开项目根目录。然后打开 微信web开发者工具 新建项目，本地开发目录选择 dist 目标目录。

## wxmagic-cli的命令列表

> 初始化项目

```
mxmagic create <name> 
```

> 创建新组以及页面

```
generate <type> <name>
```

> 构建

```
mxmagic build  构建但不压缩   

mxmagic build -m 构建压缩代码

mxmagic build -f 强制构建，不使用缓存 
```

> 实施监听

```
mxmagic watch   编译当前项目并检测文件改动
```