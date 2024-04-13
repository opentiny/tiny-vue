# 开发文档

## 更新日志

#### 2024-04-07

1. 修复pnpm build:openinula构建命令
2. 增加pnpm create:ui-openinula创建openInula组件命令  
   该命令主要使用了/internals/cli/src/create/create-ui-openinula的转换脚本，通过解析vue模板遍历ast,生成inula组件。目前该脚本已经实现了api和template的转换，能减少95%的人工转换工作量。
3. 修复事件点击报错。该错误来自适配层dom和vnode(对应react的fiber)的关联。

## 如何将已经开发好的Vue组件快速转换为openInula组件

执行 `pnpm create:ui-openinula +组件名称` 可在`/packages/openinula/src/`目录下生成对应组件,然后进行测试，根据需要进行少量修改即可。

## 开发成果

1. 基本工具的开发

- create-ui-openinula(已完成，通过该转换工具，可以将Vue模板转换成openInula组件模板)
- create-mapping-openinula（已完成,通过该工具，可以生成openinula组件的map文件。新增组件后需要调用）
- build-entry-openinula（已完成，通过该工具，可以生成openinula组件的入口文件。新增组件后需要调用）
- build-ui-openinula（已完成,通过该工具，可以打包openInula组件）
- common-mapping-openinula.json(map文件的公共部分)

调用顺序为create-ui-openinula(转换组件)=>create-mapping-openinula(创建map)=>build-ui-openinula(创建入口文件)

实际开发过程中通过命令行，首先执行`pnpm create:ui-openinula+组件名称`，然后执行`pnpm dev:openinula`  
其中，`pnpm dev:openinula`命令已经包含了map文件生成和入口文件生成

2. openInula-common 适配层的开发，已完成全部API的转换

## 下载依赖

```bash
pnpm i
```

## 将Vue组件转换位 openinula 组件

转换后，还需检查转换的代码，将缺少的props和constants补进代码,然后进行测试

```bash
pnpm create:ui-openinula +组件名称
for example:
pnpm create:ui-openinula button
```

## 生成 openinula 组件入口,每次生成新组件后需更新组件入口

```bash
pnpm build:entry-openinula
```

## 本地启动 openinula 调试项目

```bash
pnpm dev:openinula
```

## 本地启动 openinula 文档项目

```bash
pnpm dev:openinula-site
```

## 打包 openinula 组件

```bash
pnpm build:ui-openinula
```

运行此命令后，会在 pacakges-openinula 产生打包产物
一般是
packages/dist-openinula/@opention/button
... 单个组件产物
packages/dist-openinula/@opention/openinula-common
packages/dist-openinula/@opention/openinula
packages/dist-openinula/@opention/openinula-icon

命令参数：传入字符串参数列表可以指定只打包单个组件或多个特定组件，比如

```bash
pnpm build:ui-openinula button
```

默认不传的话，会打包所有组件，以及公共任务，比如 openinula-common、openinula-icon

可以通过 -f 指定目标格式，默认 es，可选 es、cjs
可以通过 -t 指定目标版本，默认 18，现在 openinula 只支持 18
可以通过 -s 指定发布 npm scope，默认是 opentiny
可以通过 -c 指定是否清空构建目录
可以通过 --no-dts 指定不生成类型定义文件

## 发包 openinula 组件

```bash
pnpm pub:openinula
```

# 目录结构

## 打包 openinula 相关

```b
internals/cli
    /build
        /build-entry-openinula.ts (packages/openinula 目录下生成入口)
        /build-ui-openinula.ts   (packages/dist-openinula 下生成打包产物)
    /create
        /create-mapping-openinula.ts (packages 下生成构建任务列表 modules.json)
        /common-mapping-openinula.json (定义一些公共的打包任务，如 openinula-common)
        /create-ui-openinula.ts (vue到openInula的转换脚本)

internals/cli
      /public/template/openinula(转换脚本使用的模板文件)

```

## 开发 openinula 模版文件相关

packages/openinula/src/[compName] 目录

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

## 开发 openinula-icon 相关

packages/openinula-icon/src/[svgName] 目录

一个 svg 直接用一个 index.ts 创建

如：packages/openinula-icon/src/add/index.ts

```ts
import { Svg } from '@opentiny/openinula-common'
import { openinulaComponent as AddLoading } from '@opentiny/vue-theme/svgs/add.svg'

export default Svg({ name: 'AddLoading', component: AddLoading })
```

## 开发 openinula-common openinula 适配层相关

openinula-common 的目录如下，主要是适配层的文件

```b
packages/openinula-common
    /src
        /csscls.ts 操作样式类名的一些方法
        /event.ts 模拟 vue 事件系统
        /fiber.ts 对 fiber 的一些读取操作
        /openinulaive.ts 实现数据响应式
        /resolveProps.js 从 openinula 的 props 上解析事件或属性
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
npm i @pe-3/openinula
```

- 2. 导入组件

```js
import { Button as TinyButton, openinula as Tiny openinula } from '@pe-3/openinula'
```

- 3. 使用组件（查看 api 文档）

```js
function App() {
  return (
    <div>
      <TinyButton type="primary">主要按钮</TinyButton>
      <TinyAlert description="提示组件" closeable={false} />
    </div>
  )
}
```

## 在项目中使用单个组件

- 1. 下载单个组件

```bash
npm i @pe-3/openinula-button
npm i @pe-3/openinula-alert
```

- 2. 导入单个组件

```js
import TintButton from '@pe-3/openinula-button'
import TintAlert from '@pe-3/openinula-alert'
```

- 3. 使用单个组件

```js
function App() {
  return (
    <div>
      <TinyButton type="primary">主要按钮</TinyButton>
      <TinyAlert description="提示组件" closeable={false} />
    </div>
  )
}
```

## 组件 api 文档地址：

https://opentiny.design/

## codesandbox

https://codesandbox.io/s/hungry-bash-tlch6l?file=/src/App.js
