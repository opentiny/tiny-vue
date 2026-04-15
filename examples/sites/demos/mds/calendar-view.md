## calendar-view

### Props

| 属性名            | 类型             | 默认值 | 说明                                                                                               |
| ----------------- | ---------------- | ------ | -------------------------------------------------------------------------------------------------- |
| day               | number           |        | 指定日期，配合 year、month 使用                                                                    |
| day-times         | Array            |        | 配置时间线模式下所展示的时间范围，默认为 [8,18]，可配范围 [0,23]。                                 |
| disabled          | () => void       |        | 日期禁用                                                                                           |
| events            | Array            |        | 日程事件                                                                                           |
| height            | string \| number |        | 日历高度                                                                                           |
| mark-color        | string           |        | 点标记的颜色                                                                                       |
| mode              | string           |        | 显示模式，可选值有 timeline-时间线模式、schedule-日程模式、month-月模式，默认为月模式。            |
| modes             | Array            |        | 模式组，显示模式任意组合                                                                           |
| month             | number           |        | 日历当前显示月份                                                                                   |
| multi-select      | boolean          |        | 日期多选                                                                                           |
| set-day-bg-color  | () => void       |        | 设置日期背景色，使用函数返回颜色值时，返回十六进制、rgb、rgba 是自定义颜色，使用颜色名则是预设颜色 |
| show-mark         | () => void       |        | 显示点标记                                                                                         |
| show-new-schedule | () => void       |        | 显示新增日程按钮                                                                                   |
| show-tip-time     | Boolean          | true   | 显示日程 tips 时间                                                                                 |
| v-model           | String           |        | 绑定值，默认为空                                                                                   |
| year              | number           |        | 日历当前显示年份                                                                                   |
| show-back-today   | boolean          | true   | 是否展示左上侧按钮显示，默认展示                                                                   |

### Events

| 事件名               | 回调参数 | 说明                                           |
| -------------------- | -------- | ---------------------------------------------- |
| month-change         |          | 月改变事件                                     |
| new-schedule         |          | 新增日程按钮点击事件                           |
| next-week-click      |          | 下一周按钮点击事件                             |
| prev-week-click      |          | 上一周按钮点击事件                             |
| selected-date-change |          | 选中日期改变事件                               |
| date-click           |          | 日期点击事件，回调参数为当前点击日期和日程事件 |
| week-change          |          | 周改变事件                                     |
| year-change          |          | 年改变事件                                     |

### Slots

| 插槽名   | 说明                                        |
| -------- | ------------------------------------------- |
| header   | 头部插槽                                    |
| timeline | 时间线插槽，有 timeline1-timeline7 7 个插槽 |
| tool     | 工具栏插槽                                  |
| weekday  | 日程插槽，有 weekday1-weekday7 7 个插槽     |
