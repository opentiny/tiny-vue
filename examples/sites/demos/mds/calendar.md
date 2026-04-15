## calendar

### Props

| 属性名        | 类型              | 默认值  | 说明                   |
| ------------- | ----------------- | ------- | ---------------------- |
| events        | ICalendarEvent[]  |         | 事件列表               |
| mode          | 'month' \| 'year' | 'month' | 日历显示模式           |
| month         | number            |         | 指定月份，默认当前月份 |
| show-selected | boolean           | false   | 是否显示选中的日期     |
| year          | number            |         | 指定年份，默认当前年份 |

### Slots

| 插槽名 | 说明           |
| ------ | -------------- |
| day    | 日期单元格插槽 |
| tool   | 日历工具栏插槽 |

## Types

### ICalendarEvent

```typescript
type ICalendarEventType = 'info' | 'warning' | 'error' | 'info' | 'success'

interface ICalendarEvent {
  time: number // 指定需要展示事件的日期的时间戳
  title: string // 指定事件标题
  content: string // 指定事件的具体内容
  type: ICalendarEventType // 事件主题类型
}
```
