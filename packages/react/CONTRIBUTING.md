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
