## cascader-select

### Props

| 属性名      | 类型     | 默认值 | 说明                                                                                               |
| ----------- | -------- | ------ | -------------------------------------------------------------------------------------------------- |
| cycle-roll  | Boolean  |        | 打开选项循环滚动功能，默认值为 false                                                               |
| disabled    | Function |        | 数组选项禁用，此方法的第一个参数是可见选项的当前值，其它参数是组件当前聚焦值，返回 true 则禁用选项 |
| options     | Array    |        | 传入组件的数据                                                                                     |
| text-color  | Object   |        | 文字颜色                                                                                           |
| text-field  | String   |        | options选项中label的替代名称                                                                       |
| value-field | String   |        | options选项中value的替代名称                                                                       |
| value-type  | String   |        | options选项中id的类型                                                                              |
| visible     | Boolean  |        | 显示级联选择面板，默认值为false                                                                    |

### Events

| 事件名         | 回调参数 | 说明            |
| -------------- | -------- | --------------- |
| update:visible |          | visible改变事件 |
