## LoadList

### Props

| 属性名          | 类型             | 默认值 | 说明                                                                         |
| --------------- | ---------------- | ------ | ---------------------------------------------------------------------------- |
| direction       | 'up' \| 'down'   | 'down' | 滚动触发加载的方向，可选值为 `up`，默认值 `down`                             |
| offset          | number \| string | 300    | 滚动条与底部距离小于 offset 时触发 load 事件，默认值 `300`                   |
| disabled        | boolean          | false  | 是否禁用滚动加载，默认值 false                                               |
| scroller        | HTMLElement      |        | 指定需要监听滚动事件的节点，默认为最近的父级滚动节点                         |
| immediate-check | boolean          | true   | 是否在初始化时立即执行滚动位置检查，默认值 `true`                            |
| error           | boolean          | false  | 是否加载失败，加载失败后点击错误提示可以重新触发 `load` 事件，默认值 `false` |
| error-text      | string           |        | 加载失败的提示文案                                                           |
| loading         | boolean          | false  | 是否处于加载状态，加载过程中不触发 `load` 事件，默认值 `false`               |
| loading-text    | string           |        | 加载过程中的提示文案                                                         |
| finished        | boolean          | false  | 是否已加载完成，加载完成后不再触发 `load` 事件，默认值 `false`               |
| finished-text   | string           |        | 加载完成后的提示文案                                                         |
| delay           | number \| string | 100    | 触发 `load` 事件时的节流延时，默认值 `100`                                   |

### Events

| 事件名         | 回调参数  | 说明                                                                                         |
| -------------- | --------- | -------------------------------------------------------------------------------------------- |
| load           | ()=> void | 当列表底部和滚动容器边界之间的距离小于值 `offset` 时，列表组件会触发 `load` 事件             |
| update:error   | ()=> void | 加载失败后点击错误提示可以重新触发 `load` 事件，组件会抛出此事件                             |
| update:loading | ()=> void | 当列表底部和滚动容器边界之间的距离小于值 `offset` 时，列表组件会触发 `load` 事件并抛出此事件 |

### Methods

| 方法名 | 返回值    | 说明                     |
| ------ | --------- | ------------------------ |
| check  | ()=> void | 手动触发列表滚动位置检查 |

### Slots

| 插槽名   | 说明                                     |
| -------- | ---------------------------------------- |
| default  | 默认插槽，用于定制渲染列表区域           |
| loading  | 加载中插槽，用于定制加载中提示区域       |
| finished | 已加载完成插槽，用于定制加载完成提示区域 |
| error    | 加载失败插槽，用于定制加载失败提示区域   |
