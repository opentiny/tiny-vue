## pager

### Props

| 属性名                      | 类型                                                        | 默认值                             | 说明                                                                                                                         |
| --------------------------- | ----------------------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| align                       | 'left' \| 'center' \| 'right'                               | 'left'                             | 分页对齐方式，Aurora、XDesign主题默认值为 right                                                                              |
| change-compat               | boolean                                                     | false                              | 手动改变值时，是否触发对应的change事件                                                                                       |
| current-page                | number                                                      | 1                                  | 当前所在页                                                                                                                   |
| custom-total                | boolean \| string                                           | false                              | 自定义总条数，传值为 true 时，显示10万+、100万+，传值为字符串则显示传入的字符串                                              |
| disabled                    | boolean                                                     | false                              | 是否禁用分页                                                                                                                 |
| hide-on-single-page         | boolean                                                     | false                              | 只有一页时是否隐藏                                                                                                           |
| is-before-page-change       | boolean                                                     | false                              | 是否开启前置处理特性，开启后，翻页或者改变页大小不会立即生效，由用户处理业务逻辑                                             |
| layout                      | string                                                      | 'total, prev, pager, next, jumper' | 组件布局，子组件名用英文逗号分隔，子组件类型有 sizes、 prev、 pager、simplest-pager、 next、 jumper、 current、 total、 slot |
| mode                        | 'number' \| 'simple' \| 'complete' \| 'fixed' \| 'simplest' |                                    | 设置分页组件显示模式, 3.19.0新增simplest                                                                                     |
| next-text                   | string                                                      |                                    | 替代图标显示的下一页文字                                                                                                     |
| page-count                  | number                                                      |                                    | 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能，如果要支持 page-sizes 的更改，则需要使用 total 属性        |
| page-size                   | Number                                                      |                                    | 每页显示条目个数，支持 .sync 修饰符                                                                                          |
| page-size/v-model:page-size | number                                                      | 10                                 | 每页显示条目数                                                                                                               |
| page-sizes                  | number[]                                                    | [10, 20, 30, 40, 50, 100]          | 设置指定可选择的每页显示条数，每页显示个数选择器的选项设置                                                                   |
| pager-count                 | number                                                      | 7                                  | 设置页码按钮需要显示的最多个数，当总页数超过该值时会折叠，该属性的合法值为大于等于 5 且小于等于 21 的奇数                    |
| popper-append-to-body       | boolean                                                     | true                               | 是否将弹出框插入至 body 元素，可将该属性设置为 false（可参考 select 组件）                                                   |
| popper-class                | string                                                      |                                    | 为 popper 添加类名（可参考 popover 组件）                                                                                    |
| prev-text                   | string                                                      |                                    | 替代图标显示的上一页文字                                                                                                     |
| show-total-loading          | boolean                                                     | false                              | 是否显示总条数加载中                                                                                                         |
| size                        | "mini"                                                      |                                    | 定义分页尺寸                                                                                                                 |
| total                       | number                                                      |                                    | 总条目数                                                                                                                     |
| total-fixed-left            | boolean                                                     | false                              | 总条目数是否固定在左侧，Aurora、XDesign主题默认值为 true                                                                     |
| page-size-text              | string                                                      | "条/页"                            | 自定以页码大小后置显示文本，XDesign主题默认为空                                                                              |

### Events

| 事件名             | 回调参数                      | 说明                                                                                                                            |
| ------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| before-page-change | IBeforeChangeEvent            | 当 is-before-page-change 设置为 true 后，翻页或改变页大小前会触发此事件，用户可以在参数中获取相应事件和分页相关信息控制后续逻辑 |
| current-change     | (currentPage: number) => void | 当前所在页改变时会触发                                                                                                          |
| next-click         | (currentPage: number) => void | 点击下一页按钮改变当前页后触发                                                                                                  |
| prev-click         | (currentPage: number) => void | 点击上一页按钮改变当前页后触发                                                                                                  |
| size-change        | (pageSize: number) => void    | 每页显示条目数改变后会触发                                                                                                      |

### Slots

| 插槽名  | 说明                                  |
| ------- | ------------------------------------- |
| default | 自定义内容，需要在 layout 中列出 slot |

## Types

### IBeforeChangeEvent

```typescript
// 函数接受一个参数
interface IBeforeChangeEvent {
  (param: IBeforeChangeParam): void
}
interface IBeforeChangeParam {
  callback: () => void // 回调函数，调用则继续本次变更
  rollback: () => void // 回滚函数，调用则阻止本次变更
  newPage: number // 变更后所在页
  newPageSize: number // 变更后分页大小
  currentPage: number // 当前所在页
  currentPageSize: number // 当前分页大小
}
```
