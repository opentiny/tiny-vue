## menu

### Props

| 属性名              | 类型            | 默认值 | 说明                     |
| ------------------- | --------------- | ------ | ------------------------ |
| actived-keys        | Number / String |        | 默认选中项               |
| data                | Array           |        | 服务端数据               |
| empty-text          | String          |        | 自定义空文本             |
| expand-all          | Boolean         |        | 默认全部展开             |
| expanded-keys       | Array           |        | 默认展开项               |
| only-check-children | Boolean         |        | 只能选中子级，父子不关联 |
| search-icon         | Object          |        | 搜索图标                 |
| show-filter         | Boolean         |        | 显示搜索框               |

### Events

| 事件名         | 回调参数 | 说明             |
| -------------- | -------- | ---------------- |
| current-change |          | 选中菜单改变事件 |
| node-click     |          | 菜单点击事件     |

### Slots

| 插槽名 | 说明       |
| ------ | ---------- |
| empty  | 空数据插槽 |
