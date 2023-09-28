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
        /svg-render.jsx 渲染 svg 组建的公共函数
        /utils.ts 工具函数
        /virtual-comp.jsx 虚拟组件，用于实现 vue 的指令系统
        /vm.js 用户模拟 vue 的 vm 对象
        /vue-hooks.js 用户模拟 vue 的钩子函数
```

# 如何贡献一个 react 组建

对于 vue 已有的组件，全新的组件，建议先实现 vue 组件，再去适配 react 模版。
因为 vue 和 react 共用同一套 renderless 目录底下的逻辑，renderless 中的逻辑，vue 侧是基于 vue 自身的，react 侧则是基于 react 模拟 vue api 的适配层的。所以，先用 vue 的思维实现 vue 组件，是比较可靠的。

## 开发

假如要实现的组件是 button
1. 在 packages/react/src 底下创建如下目录

```js
button
    /node_modules
    /src
        /index.ts
        /pc.tsx
        /mobile.tsx
        /mobile-first.ts
    /index.ts
    /package.json
```

2. 给 package.json 中添加相关依赖

```json
  "dependencies": {
    "@opentiny/vue-renderless": "workspace:~", // 必选
    "@opentiny/react-common": "workspace:~", // 必选
    "@opentiny/react-icon": "workspace:~", // 组件需用用 icon，从这里引入
    "@opentiny/vue-theme": "workspace:~" // 必须，组件的样式一般在这里定义
  }
```

3. 创建 pc.tsx/mobile.tsx/mobile-first.tsx，并实现组件模版

```tsx
import { renderless, api } from '@opentiny/vue-renderless/button/vue'
import { useSetup } from '@opentiny/react-common'
import '@opentiny/vue-theme/button/index.less'

export default function Button(props) {
  const {
    circle, // 解析出一个属性，api 事先定义的
    type = 'default', // 解析出一个属性，有默认值
  } = props

  const defaultProps = Object.assign({
    type
  }, props) // 合并默认值属性

  const {
    ref,
    parent,
    current: vm
  } = useVm() // 生成 vm 和 parent 对象，给 useSetup 提供 vm、parent 对象
  // ref 是用来获取组件根部 dom ，进而获取 fiber 节点

  const {
    handleClick, // 从 renderless/**/button/index.ts 里定义的事件，会在 button/vue.ts
    state,
    a
  } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  }) // 通过 useSetup 函数抹平差异并执行组件核心逻辑 renderless 函数
     // renderless 函数是通过 vue api 实现的组件逻辑
     // useSetup 中给 renderless 函数提供了模拟后的 api

  const $attrs = a(props, define_props, false)
  // 过滤没有在组件上定义，但是传入的属性

  return (
    <button
      ref={ref} // 通过 ref 获取组件根部 dom，进而获取 fiber 节点
      onClick={handleClick} // 绑定时间监听器
    >
      {state.data} // 在模版中使用状态数据
    </button>
  )
}

```

4. 创建多模版模式组建 

button/src/index.ts
```jsx
import pc from './pc.jsx'
import mobile from './mobile.jsx'
import mobileFirst from './mobile-first.jsx'

export default function (props) {
  const {
    tiny_mode = 'pc'
  } = props

  const S = ({
    pc,
    mobile,
    'mobile-first': mobileFirst
  })[tiny_mode]

  return (S(props))
}
```

5. 创建组建入口
button/index.ts
```jsx
import Button from './src'

export default Button
```

## 开发一个 react-icon 组件

在 packages/react-icon/src 下创建 iconName 目录
中创建 index.ts 组件，内容如下：

```ts
import { Svg } from '@opentiny/react-common'
import { ReactComponent as Check } from '@opentiny/vue-theme/svgs/check.svg'

export default Svg({ name: 'Check', component: Check })
```

# 用户使用文档

## 在项目中使用所有组件

- 1.下载整个组建库
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

## 在项目中使用单个组建

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

## 组建 api 文档地址：

https://opentiny.design/

## codesandbox

https://codesandbox.io/s/hungry-bash-tlch6l?file=/src/App.js