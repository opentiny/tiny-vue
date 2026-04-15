## tag-input

### Props

| 属性名                | 类型                | 默认值   | 说明                   |
| --------------------- | ------------------- | -------- | ---------------------- |
| model-value / v-model | array               | []       | 绑定值                 |
| size                  | 'medium' \| 'small' | 'medium' | 尺寸                   |
| tag-type              | IType               |          | 显示类型               |
| tag-effect            | IEffect             | 'light'  | 主题                   |
| clearable             | boolean             | false    | 是否可清空             |
| disabled              | boolean             | false    | 是否禁用标签输入框     |
| max                   | number              | Infinity | 最大允许输入的标签数量 |
| placeholder           | string              |          | 占位符                 |
| readonly              | boolean             | false    | 是否只读               |
| draggable             | boolean             | false    | 是否可拖拽             |
| minCollapsedNum       | number              | Infinity | 最小折叠数量           |
| separator             | string              | ,        | 批量输入时标签分隔符   |

### Slots

| 插槽名 | 说明                 |
| ------ | -------------------- |
| prefix | 输入框前缀内容的插槽 |
| suffix | 输入框后缀内容的插槽 |

## Types
