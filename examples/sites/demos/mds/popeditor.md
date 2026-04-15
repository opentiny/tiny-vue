## pop-editor

### Props

| 属性名               | 类型                                          | 默认值    | 说明                                                                                                    |
| -------------------- | --------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------- |
| auto-lookup          | boolean                                       | true      | 初始化时是否自动请求数据                                                                                |
| auto-reset           | boolean                                       | false     | 筛选后点击关闭是否自动重置筛选条件                                                                      |
| before-close         | () => boolean                                 |           | 可以配置一个拦截弹窗关闭的方法。如果方法返回 false 值，则拦截弹窗关闭，否则不拦截                       |
| before-reset         | () => boolean                                 |           | 重置前的钩子函数                                                                                        |
| conditions           | IConditions[]                                 |           | 当弹出面板配置的是表格时，设置弹出面板中的表单查询项                                                    |
| dialog-class         | string                                        |           | 自定义配置弹窗类名                                                                                      |
| disabled             | boolean                                       | false     | 禁用状态                                                                                                |
| draggable            | boolean                                       | true      | 设置弹出窗口是否可拖动                                                                                  |
| grid-op              | InstanceType&#60typeof TinyGrid&#62['$props'] |           | 设置弹出面板中表格组件的配置信息                                                                        |
| icon                 | Component                                     | IconPopup | 自定义选择框尾部图标                                                                                    |
| modelValue / v-model | string                                        |           | 绑定值                                                                                                  |
| multi                | boolean                                       | false     | 设置弹出面板中的数据是否可多选                                                                          |
| pager-op             | InstanceType<typeof TinyPager>['$props']      |           | 设置分页配置                                                                                            |
| placeholder          | string                                        |           | 占位符                                                                                                  |
| popseletor           | 'grid' \| 'tree'                              | 'grid'    | 设置弹出面板中可显示的树或者表格组件                                                                    |
| radio-change-close   | boolean                                       | false     | 单选选中后是否关闭弹窗                                                                                  |
| readonly             | boolean                                       | true      | 设置是否只读，【3.0】设置为 false 后点击 Input 框可以弹出选择框                                         |
| remote-search        | IRemoteSearch                                 |           | 配置远程搜索                                                                                            |
| resize               | boolean                                       | false     | 是否显示弹框全屏按钮                                                                                    |
| selected-box-op      | ISelectedBoxOption                            |           | 通过属性 selected-box-op 指定 SelectedBox 组件配置，可以把已选表格显示为已选栏                          |
| show-clear-btn       | boolean                                       | true      | 设置输入框中右侧是否显示清除按钮                                                                        |
| show-history         | boolean                                       | false     | 当弹出面板配置的是表格时，设置历史记录标签页是否显示表格                                                |
| show-pager           | boolean                                       | false     | 展示分页                                                                                                |
| show-selected-box    | boolean                                       | false     | 多选场景，是否将已选表格显示为已选栏                                                                    |
| size                 | 'medium' \| 'small' \| '' \| 'mini'           | ''        | 尺寸                                                                                                    |
| suggest              | boolean                                       | false     | 配置 suggest 开启联想功能，输入框输入后自动触发联想查询，该功能需要联合 remote-search 使用              |
| tabindex             | string                                        | '1'       | 设置通过 Tab 键获焦及获焦顺序（readonly 属性设置为 false 时有效）                                       |
| text-field           | string                                        | 'label'   | 设置输入框中显示文本的字段，提交数据时，不提交该显示文本                                                |
| text-split           | string                                        | '/'       | 在多选的情况下，设置输入框中要显示多个数据时的分隔符                                                    |
| title                | string                                        |           | 设置弹出面板的标题，并且支持国际化                                                                      |
| lock-scroll          | boolean                                       | true      | 设置弹出面板的锁定滚动                                                                                  |
| trigger              | 'default' \| 'cell' \| 'row'                  | 'default' | 弹框表格中为单选时 radio 的选中配置，可配置：default（默认）, cell（点击单元格触发）, row（点击行触发） |
| value-field          | string                                        | 'id'      | 设置输入框要提交数据的字段                                                                              |
| value-split          | string                                        | ';'       | 在多选的情况下，设置输入框要提交多个数据时的分隔符                                                      |
| width                | number \| string                              |           | 设置弹出面板的宽度（单位像素），当组件的 multi = true 时，宽度最小为 900px，否则宽度最小为 600px        |

### Events

| 事件名      | 回调参数                                             | 说明                                                                                                     |
| ----------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| change      | (commitValue: number, selectedDatas: Object) => void | 数据发生变化的事件，commitValue 为选中数据的索引（value-field 配置的字段），selectedDatas 为选中的数据项 |
| close       | () => void                                           | 弹框关闭时触发的事件                                                                                     |
| page-change | (page: number) => void                               | 表格模式分页切换事件，page 为分页切换页码                                                                |
| popup       | () => void                                           | 弹框打开时触发的事件                                                                                     |

### Slots

| 插槽名          | 说明               |
| --------------- | ------------------ |
| title-selection | 已选择数据标题插槽 |
| title-history   | 历史数据标题插槽   |
| title-source    | 所有数据标题插槽   |
| footer          | 底部区域插槽       |
| search          | 查询条件插槽       |

## Types

### IConditions

```typescript
interface IConditions {
  field: string
  label: string
}
```

### IRemoteSearch

```typescript
type IRemoteSearch = ({
  page: { currentPage: number, pageSize: number },
  conditions: { [K in IConditions['field']]: string }
}) => void
```
