## bulletin-board

### Props

| 属性名      | 类型                | 默认值 | 说明                                                                                                                                                                                                                                                            |
| ----------- | ------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| active-name | string              | 1      | 默认显示第1栏，可选'1' '2' '3'等                                                                                                                                                                                                                                |
| data        | BulletinBoardData[] |        | tab-item 数据;                                                                                                                                                                                                                                                  |
| icon        | object , string     |        | tab-item中第一条信息的字体图标;tab-item中第一条信息的字体图标                                                                                                                                                                                                   |
| more-link   | object              |        | 更多按钮跳转地址，show-more 为true 的时候生效;moreLink: { url: 'localhost:3000/', // 跳转地址，url 和 route 属性二选一，url优先级高 route: 'Alert', // 跳转路由，url 和 route 属性二选一，url优先级高 target: '\_blank', // 跳转方式 text: '更多' // 链接文本 } |
| show-more   | boolean             | true   | 是否显示更多按钮，默认显示,需要与 more-link 同时使用                                                                                                                                                                                                            |
| tab-title   | Array               |        | tab栏数据                                                                                                                                                                                                                                                       |
| title       | string              |        | 公告牌的标题                                                                                                                                                                                                                                                    |

### Events

| 事件名       | 回调参数                           | 说明                               |
| ------------ | ---------------------------------- | ---------------------------------- |
| contentClick | (event: BulletinBoardData) => void | 当公告牌内容被点击时触发的回调函数 |

## Types

### BulletinBoardData

```typescript
interface BulletinBoardData {
  text: string // 显示文本
  date: string // 日期
  url: string // 需要跳转的地址
  target: string // <a> 标签的一个属性，该属性指定在何处显示链接的资源
}
```
