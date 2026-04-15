## tag

### Props

| 属性名        | 类型                        | 默认值  | 说明                                                                                                                                                                                         |
| ------------- | --------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| before-delete | (close: () => void) => void |         | 删除前回调函数                                                                                                                                                                               |
| closable      | boolean                     | false   | 是否可关闭                                                                                                                                                                                   |
| color         | IColor \| string[]          |         | 控制标签文本色和背景色，可使用 IColor 类型中的预设值，也可自定义值，若自定义值为字符串则只能设置标签的背景色；若为数组则第一个值设置背景色，第二个设置文本色；【注：3.15.0新增支持数组类型】 |
| custom-class  | string                      |         | 标签class                                                                                                                                                                                    |
| max-width     | string                      |         | 设置最大宽度                                                                                                                                                                                 |
| disabled      | boolean                     | false   | 是否禁用                                                                                                                                                                                     |
| effect        | IEffect                     | 'light' | 主题                                                                                                                                                                                         |
| hit           | boolean                     | false   | 是否有边框                                                                                                                                                                                   |
| operable      | boolean                     |         | 是否可操作                                                                                                                                                                                   |
| selectable    | boolean                     |         | 是否可选择                                                                                                                                                                                   |
| size          | ISize                       |         | 尺寸                                                                                                                                                                                         |
| type          | IType                       |         | 显示类型                                                                                                                                                                                     |
| value         | number \| string            |         | 配置式标签，自定义标签内容【3.9.1新增】                                                                                                                                                      |
| only-icon     | boolean                     | false   | 是否为纯图标的模式【3.19新增】                                                                                                                                                               |

### Events

| 事件名 | 回调参数                | 说明                     |
| ------ | ----------------------- | ------------------------ |
| click  | (event: Event) => void  | 点击标签时触发的事件     |
| close  | (event: Event)) => void | 点击关闭按钮时触发的事件 |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 标签内容 |

## Types

### IColor

```typescript
type IColor = 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'brown' | 'grey' | string // 除了预设值，也可以是其他任意自定义颜色值
```

### IEffect

```typescript
type IEffect = 'dark' | 'light' | 'plain'
```

### ISize

```typescript
type ISize = 'medium' | 'small' | ''
```

### IType

```typescript
type IType = 'success' | 'info' | 'warning' | 'danger'
```
