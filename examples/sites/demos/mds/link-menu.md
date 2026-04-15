## link-menu

### Props

| 属性名              | 类型      | 默认值 | 说明                                                                                    |
| ------------------- | --------- | ------ | --------------------------------------------------------------------------------------- |
| data                | array     |        | 设置收藏夹菜单的数据                                                                    |
| default-expand-all  | boolean   | true   | 设置打开菜单弹窗时默认是否展开所有节点，默认为 true                                     |
| ellipsis            | boolean   | true   | 菜单内容超长时省略显示，默认为 true                                                     |
| get-menu-data-sync  | function  |        | 自定义菜单数据服务，直接返回数据                                                        |
| icon                | object    |        | 自定义节点展开折叠的图标                                                                |
| expand-icon         | Component |        | 指示展开的图标                                                                          |
| expand-icon-color   | string    |        | 指示展开的图标色                                                                        |
| shrink-icon         | Component |        | 指示收缩的图标                                                                          |
| shrink-icon-color   | string    |        | 指示收缩的图标色                                                                        |
| keep-selected-nodes | boolean   |        | 树节点勾选内容后，点击取消按钮，再次打开弹窗是否保留取消前勾选的内容的状态，默认为 true |
| max-item            | number    |        | 设置可收藏的栏目的最大数量                                                              |
| search-icon         | object    |        | 自定义搜索图标                                                                          |
| title               | string    |        | 设置收藏夹菜单的标题，默认为空                                                          |
| wrap                | boolean   | true   | 菜单内容超长时换行显示，默认为 true                                                     |

### Methods

| 方法名        | 返回值 | 说明                                                 |
| ------------- | ------ | ---------------------------------------------------- |
| hideDialog    |        | 关闭菜单弹窗                                         |
| sureNodevalue |        | 获取选中的菜单节点并关闭菜单弹窗，同时展示选中的菜单 |

### Slots

| 插槽名 | 说明             |
| ------ | ---------------- |
| foot   | 菜单弹窗底部插槽 |
