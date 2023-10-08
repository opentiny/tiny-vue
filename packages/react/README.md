# 开发文档

## 下载依赖

```bash
pnpm i
```

## 生成 react 组件入口

```bash
pnpm build:entry-react
```

## 本地启动 react 调试项目

```bash
pnpm dev:react
```

## 本地启动 react 文档项目

```bash
pnpm dev:react-site
```

## 打包 react 组件

```bash
pnpm build:ui-react
```

运行此命令后，会在 pacakges-react 产生打包产物
一般是
    packages/dist-react/@opention/button
    ... 单个组件产物
    packages/dist-react/@opention/react-common
    packages/dist-react/@opention/react
    packages/dist-react/@opention/react-icon

命令参数：传入字符串参数列表可以指定只打包单个组件或多个特定组件，比如

```bash
pnpm build:ui-react button
```

默认不传的话，会打包所有组件，以及公共任务，比如 react-common、react-icon

可以通过 -f 指定目标格式，默认 es，可选 es、cjs
可以通过 -t 指定目标版本，默认 18，现在 react 只支持 18
可以通过 -s 指定发布 npm scope，默认是 opentiny
可以通过 -c 指定是否清空构建目录
可以通过 --no-dts 指定不生成类型定义文件

## 发包 react 组件

```bash
pnpm pub:react
```

# 目录结构

## 打包 react 相关

```b
internals/cli
    /build
        /build-entry-react.ts (packages/react 目录下生成入口)
        /build-ui-react.ts   (packages/dist-react 下生成打包产物)
    /create
        /create-mapping-react.ts (packages 下生成构建任务列表 modules.json)
        /common-mapping-react.json (定义一些公共的打包任务，如 react-common)
```

## 开发 react 模版文件相关

packages/react/src/[compName] 目录

一个组件模版的目录结构如下

```b
alert
    /node_modules
    /src
        /index.ts
        /pc.tsx
        /mobile.tsx
        /mobile-first.ts
    /index.ts
    /package.json
```
alert/index 是组件入口
pc、mobile、mobile-first 是三套模版

## 开发 react-icon 相关

packages/react-icon/src/[svgName] 目录

一个 svg 直接用一个 index.ts 创建

如：packages/react-icon/src/add/index.ts

```ts
import { Svg } from '@opentiny/react-common'
import { ReactComponent as AddLoading } from '@opentiny/vue-theme/svgs/add.svg'

export default Svg({ name: 'AddLoading', component: AddLoading })
```

## 开发 react-common react 适配层相关

react-common 的目录如下，主要是适配层的文件

```b
packages/react-common
    /src
        /csscls.ts 操作样式类名的一些方法
        /event.ts 模拟 vue 事件系统
        /fiber.ts 对 fiber 的一些读取操作
        /reactive.ts 实现数据响应式
        /resolveProps.js 从 react 的 props 上解析事件或属性
        /svg-render.jsx 渲染 svg 组件的公共函数
        /utils.ts 工具函数
        /virtual-comp.jsx 虚拟组件，用于实现 vue 的指令系统
        /vm.js 用户模拟 vue 的 vm 对象
        /vue-hooks.js 用户模拟 vue 的钩子函数
```

# 用户使用文档

## 在项目中使用所有组件

- 1.下载整个组件库
```bash
npm i @pe-3/react
```

- 2. 导入组件
```js
import { Button as TinyButton, React as Tiny React } from '@pe-3/react'
```

- 3. 使用组件（查看 api 文档）
```js
function App() {
    return (<div>
        <TinyButton type='primary'>主要按钮</TinyButton>
        <TinyAlert description='提示组件' closeable={false} />
    </div>)
}
```

## 在项目中使用单个组件

- 1. 下载单个组件

```bash
npm i @pe-3/react-button
npm i @pe-3/react-alert
```

- 2. 导入单个组件
```js
import TintButton from '@pe-3/react-button'
import TintAlert from '@pe-3/react-alert'
```

- 3. 使用单个组件
```js
function App() {
    return (<div>
        <TinyButton type='primary'>主要按钮</TinyButton>
        <TinyAlert description='提示组件' closeable={false} />
    </div>)
}
```

## 组件 api 文档地址：

https://opentiny.design/

## codesandbox

https://codesandbox.io/s/hungry-bash-tlch6l?file=/src/App.js
