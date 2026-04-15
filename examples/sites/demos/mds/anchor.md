## anchor

### Props

| 属性名       | 类型            | 默认值 | 说明                                                                                                  |
| ------------ | --------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| container-id | string          |        | 用于单页面 hash 路由模式时指定滚动容器的 id 值，id 为空时则滚动容器默认为 HTML 文档的根节点 body 元素 |
| is-affix     | boolean         | false  | 固定模式                                                                                              |
| links        | ILink[]         |        | 导航数据配置项，可通过 children 嵌套                                                                  |
| mark-class   | string          |        | 自定义滚动的目标元素类名                                                                              |
| offset-top   | number          | 0      | 锚点距离顶部的偏移量，用于调整滚动定位的位置                                                          |
| type         | 'line' \| 'dot' | 'line' | 锚点类型                                                                                              |

### Events

| 事件名     | 回调参数                                                              | 说明             |
| ---------- | --------------------------------------------------------------------- | ---------------- |
| change     | (hash: string) => void                                                | 锚点链接改变事件 |
| link-click | (event: Event, currentLink: { link: string, title: string } ) => void | 锚点点击事件     |

## Types

### ILink

```typescript
interface ILink {
  key: string // 锚点的key值
  link: string // 导航的hash值
  title: string // 锚点标题
  children: ILink[] // 子锚点
}
```
