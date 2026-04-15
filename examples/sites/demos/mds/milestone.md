## milestone

### Props

| 属性名             | 类型                         | 默认值      | 说明                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ---------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| completed-field    | string                       | 'completed' | 设置节点完成状态对应的键值                                                                                                                                                                                                                                                                                                                                            |
| data               | ICustomData \| ICustomData[] |             | 设置步骤条的数据，可自定义键值映射                                                                                                                                                                                                                                                                                                                                    |
| flag-before        | boolean                      | false       | 设置旗子的数据是取自前面还是后面的节点，默认取后面节点上的数据                                                                                                                                                                                                                                                                                                        |
| flag-content-field | string                       | 'content'   | 设置旗子内容描述部分对应的键名                                                                                                                                                                                                                                                                                                                                        |
| flag-field         | string                       | 'flags'     | 设置旗子信息数组对应的键名                                                                                                                                                                                                                                                                                                                                            |
| flag-name-field    | string                       | 'name'      | 设置旗子标题对应的键名                                                                                                                                                                                                                                                                                                                                                |
| flag-status-field  | string                       | 'status'    | 设置旗子状态对应的键名                                                                                                                                                                                                                                                                                                                                                |
| line-style         | 'number' \| 'string'         | 1           | 线条颜色取值模式为数字时，只有1和2可选；如果为字符串则需传入 16 进制颜色值<br /><br> 设置为数字 1 时只有完成与未完成两种状态的线条颜色，完成状态的线条颜色与 milestones-status 定义的 completed 状态的颜色一致<br /><br> 设置为数字 2 时线条颜色根随节点状态颜色<br /><br> 当设置为字符串形式的 16 进制色值时，如：#1890FF 时，线条不区分状态，全部统一为所设置的颜色 |
| milestones-status  | IStatus                      |             | 定义状态与颜色对应关系，颜色取值须是 16 进制颜色值或组件库的主题变量                                                                                                                                                                                                                                                                                                  |
| name-field         | string                       | 'name'      | 设置节点名称对应的键名                                                                                                                                                                                                                                                                                                                                                |
| show-number        | boolean                      | true        | 设置未完成状态的节点是否显示序号                                                                                                                                                                                                                                                                                                                                      |
| solid              | boolean                      | false       | 在里程碑模式下，设置已经完成节点显示为实心，且光晕不透明                                                                                                                                                                                                                                                                                                              |
| space              | number                       |             | 设置相邻节点的间距，即节点间线条的长度                                                                                                                                                                                                                                                                                                                                |
| start              | number                       | -1          | 设置节点的序号起始值，从首个节点开始计算                                                                                                                                                                                                                                                                                                                              |
| status-field       | string                       | 'status'    | 设置节点状态对应的键名                                                                                                                                                                                                                                                                                                                                                |
| time-field         | string                       | 'time'      | 设置节点时间信息对应的键名                                                                                                                                                                                                                                                                                                                                            |

### Events

| 事件名     | 回调参数                                   | 说明                                                                          |
| ---------- | ------------------------------------------ | ----------------------------------------------------------------------------- |
| click      | (index: number, node: ICustomData) => void | 节点的点击事件，参数（index:节点索引, node：节点数据信息）                    |
| flag-click | (index: number, node: ICustomData) => void | 旗子的点击事件，参数（index:旗子索引, node：旗子数据信息）                    |
| flagclick  | (index: number, node: ICustomData) => void | [使用flag-click代替， deprecated v3.5.0废弃，v3.17.0移除；移除原因：命名规范] |

### Slots

| 插槽名 | 说明         |
| ------ | ------------ |
| bottom | 节点下方内容 |
| flag   | 旗帜内容     |
| icon   | 节点图标     |
| top    | 节点上方内容 |

## Types

### IStatus

```typescript
interface IStatus {
  completed?: string // 可通过completed-field自定义completed键名
  doing: string
  back: string
  end: string
  cancel: string
}
```

### ICustomData

```typescript
interface ICustomData {
  name?: string
  time?: string
  status?: string
  flags?: string
  content?: string
  [propName: string]: string // 可自定义以上的默认属性
}
```
