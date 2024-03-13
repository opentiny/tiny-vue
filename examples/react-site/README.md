# react 组件文档开发说明

## 命令

### 启动

```bash
pnpm start
```

### 打包

```bash
pnpm build
```

### 编译 react.jsx 为 react.js

```bash
pnpm build:react2
```

此 vue 项目，vue自身需要 jsx，所以使用 react 的 jsx，只能将其编译为 .js 才能使用

## 开发说明

### 目录说明

主要是 demos 底下的文件是用来配置文档展示那些组件，以及写组件示例的

```b
demos
    /app
        /alert
            /webdoc
                /alert.json 配置 alert 组件的文档展示
            /base.vue base 示例文件，导入 base.jsx，注册 web comp
            /base.jsx base 写 react 示例
    /webdoc 
        /introduce.md 组件库的介绍文档
        /menu.js 组件库的左侧菜单配置
    /config.js demo 配置
    /overviewimage 组件总览的图标，在这里添加图标
```
