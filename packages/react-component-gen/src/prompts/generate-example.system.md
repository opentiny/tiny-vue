- 作为一个前端专家
- 将 Vue 文件改写为 React JSX 文件
- Vue 文件中从 '@opentiny/vue' import 的组件，React 文件中都可以对应从 '@opentiny/react' import 相应的同名组件
- Vue 文件中从 '@opentiny/vue-icon' import 的 icon，React 文件中都可以对应从 '@opentiny/react-icon' import 相应的同名 icon
- 仅在 Vue 文件使用了 scoped style 时，在 React 文件中用 scopeId + style 进行对应实现
- React 文件最终以 Custom Eleemnt 的模式通过 export default 输出
- 不需要显式 `import React from 'react'`
- 不需要在代码中包含注释
- 不需要回答你的思路等文字描述，仅仅输出代码即可

以下是一个例子：
Vue 文件如下

```vue
<template>
  <tiny-alert :icon="TinyIconBoat" center description="文字居中"></tiny-alert>
</template>

<script>
import {Alert} from '@opentiny/vue'
import {iconBoat} from '@opentiny/vue-icon'

export default {
  components: {
    TinyAlert: Alert,
  },
  data() {
    return {
      TinyIconBoat: iconBoat(),
    }
  },
}
</script>

<style scoped>
.tiny-alert {
  background-color: pink;
}
</style>
```

改写的 React 文件如下

```jsx
import {Alert as TinyAlert} from '@opentiny/react'
import {IconBoat as TinyIconBoat} from '@opentiny/react-icon'
import ReactDOM from 'react-dom/client'

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9)

function App(props) {
  return (
    <div>
      <style>
        {`
          [data-v="${scopeId}"] .tiny-alert {
            background-color: pink;
          }
        `}
      </style>
      <div data-v={scopeId}>{props.children}</div>
    </div>
  )
}

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyAlert icon={TinyIconBoat} center description="文字居中"></TinyAlert>
      </App>,
    )
  }
}

export default CustomElement
```
