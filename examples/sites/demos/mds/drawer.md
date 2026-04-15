## drawer

### Props

| 属性名                | 类型                                   | 默认值  | 说明                                                                                       |
| --------------------- | -------------------------------------- | ------- | ------------------------------------------------------------------------------------------ |
| append-to-body        | boolean                                | false   | drawer 本身是否插入到 body 上                                                              |
| before-close          | (type) => boolean                      |         | 弹窗关闭前的回调，返回 false 会阻止弹窗关闭                                                |
| custom-class          | String                                 |         | 自定义 class 样式                                                                          |
| dragable              | boolean                                | false   | 是否开启抽屉的宽度拖拽功能                                                                 |
| flex                  | Object                                 |         | 是否开启 flex 盒子布局，开启后内容区域元素自适应撑开高度，默认值为 false                   |
| lock-scroll           | Object                                 |         | 弹出面板是否锁定浏览器滚动条，默认值为 true                                                |
| mask                  | boolean                                | true    | 是否显示遮罩层                                                                             |
| mask-closable         | boolean                                | true    | 默认情况下，弹窗打开后，可以单击遮罩层关闭弹窗，设置 mask-closable 为 false 后将禁用该功能 |
| placement             | 'left' \| 'right' \| 'top' \| 'bottom' | 'right' | 设置抽屉的方向                                                                             |
| show-close            | boolean                                | true    | 是否显示关闭图标                                                                           |
| show-footer           | boolean                                | false   | 是否显示底部                                                                               |
| show-header           | boolean                                | true    | 是否显示头部                                                                               |
| title                 | String                                 |         | 面板标题                                                                                   |
| visible               | boolean                                |         | 控制抽屉的显示与关闭                                                                       |
| width                 | string                                 | '500px' | 设置抽屉的宽度                                                                             |
| height                | string                                 | '100vh' | 设置抽屉的高度                                                                             |
| z-index               | number                                 | 2000    | 自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）                                 |
| tips-props            | ITipsProps                             |         | 可自定义标题帮助提示信息                                                                   |
| close-on-press-escape | boolean                                | false   | ESC 键关闭抽屉                                                                             |

### Events

| 事件名         | 回调参数                      | 说明                                      |
| -------------- | ----------------------------- | ----------------------------------------- |
| close          | (force: boolean) => void      | 关闭抽屉事件，参数 force 指定是否强制关闭 |
| closed         | () => void                    | 关闭抽屉动画结束时的事件                  |
| confirm        | () => void                    | 确认事件，设置 :show-footer="true" 时有效 |
| show           | (instance: Component) => void | 抽屉显示事件                              |
| update:visible |                               | 抽屉显隐时触发                            |

### Methods

| 方法名  | 返回值                                 | 说明           |
| ------- | -------------------------------------- | -------------- |
| close   |                                        | 关闭抽屉       |
| confirm |                                        | 确认并关闭抽屉 |
| service | (configs: IDrawerConfigs) => Component | 配置并打开抽屉 |

### Slots

| 插槽名       | 说明         |
| ------------ | ------------ |
| default      | 默认插槽     |
| footer       | 底部插槽     |
| header       | 头部插槽     |
| header-right | 头部右侧插槽 |

## Types

### ITipsProps

```typescript
interface ITipsProps {
  content?: string
  placement?: string
  effect?: string
}
```

### IDrawerConfigs

```typescript
interface IDrawerConfigs extends IDrawerProps {
  // 方法调用的配置参数
  events: {
    // 监听事件
    close: () => void
    closed: () => void
    confirm: () => void
    show: (instance: Component) => void
  },
  customSlots: {
    // 插槽
    default: string | VNode | (h) => VNode,
    header: string | VNode | (h) => VNode,
    headerRight: string | VNode | (h) => VNode,
    footer: string | VNode | (h) => VNode
}
```
