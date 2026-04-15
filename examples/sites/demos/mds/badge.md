## badge

### Props

| 属性名      | 类型             | 默认值   | 说明                                                                                                                       |
| ----------- | ---------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| badge-class | string           |          | 自定义标记的类名                                                                                                           |
| data        | string           |          | 文本内容                                                                                                                   |
| hidden      | boolean          | false    | 是否隐藏标记                                                                                                               |
| href        | string           |          | 指定跳转的目标页面地址                                                                                                     |
| is-dot      | boolean          | false    | 是否以小圆点的形式来显示标记                                                                                               |
| max         | number           |          | 指定徽章显示的最大值，如果实际获取的徽章值超过该最大值，则以最大值后接一个 '+' 的形式显示徽章数，要求 value 是 number 类型 |
| offset      | string           |          | 设置标记位置的偏移量                                                                                                       |
| show-Left   | boolean          |          | 设置是否向左展示，仅对圆点生效。                                                                                           |
| target      | string           |          | 点击标记时链接到目标页面的跳转方式，仅在 href 属性存在时使用                                                               |
| type        | IPtype           | 'danger' | 标记的类型                                                                                                                 |
| v-model     | String / Number  |          | 绑定值                                                                                                                     |
| value       | number \| string |          | 相关数据条目数                                                                                                             |

### Slots

| 插槽名  | 说明                                   |
| ------- | -------------------------------------- |
| content | 消息提示内容                           |
| default | 默认插槽，有data属性时，默认插槽不生效 |

## Types

### IPtype

```typescript
type IPtype = 'primary' | 'success' | 'warning' | 'danger' | 'info'
```
