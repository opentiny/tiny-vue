## chart

### Props

| 属性名                | 类型              | 默认值  | 说明                                                               |
| --------------------- | ----------------- | ------- | ------------------------------------------------------------------ |
| cancel-resize-check   | boolean           | false   | 是否禁用 resize 时的容器检测                                       |
| change-delay          | number            | '0'     | 属性修改触发图表重绘回调的延迟                                     |
| data                  | object            |         | 数据由指标和维度组成,“维度” 指的是数据的属性,“指标” 是量化衡量标准 |
| events                | object            |         | 事件绑定                                                           |
| extend                | object            |         | echarts 的配置项                                                   |
| height                | string            | '400px' | 设置图表容器的高度。                                               |
| init-options          | object            |         | init 附加参数                                                      |
| judge-width           | boolean           | false   | 是否处理生成图表时的宽度问题                                       |
| legend-visible        | boolean           | true    | 是否显示图例                                                       |
| not-set-unchange      | array             |         | 未发生变化时不参加 setOption 的属性                                |
| resize-delay          | number            | '200'   | 窗口 resize 事件回调的延迟                                         |
| resizeable            | boolean           | true    | 是否处理窗口 resize 事件                                           |
| set-option-opts       | boolean \| object | true    | echarts setOption 的第二个参数                                     |
|                       |                   |         |                                                                    |
| theme                 | object            |         | 自定义主题名称。;自定义主题对象。                                  |
| theme-name            | string            |         | 自定义主题名称,如果设置了 theme-name, 则 theme 无效                |
| tooltip-visible       | boolean           | true    | 是否显示提示框                                                     |
| width                 | string            | 'auto'  | 设置图表容器的宽度。                                               |
| width-change-delay    | number            | '300'   | 容器宽度变化的延迟                                                 |
| options               | object            |         | 图表配置项(无法与settings混用)                                     |
| settings              | object            |         | 配置项                                                             |
| color-mode            | object            |         | 自定义颜色模式                                                     |
| mark-line             | object            |         | 图表标线                                                           |
| mark-area             | object            |         | 图表标志区域                                                       |
| mark-point            | object            |         | 图表标点                                                           |
| loading               | boolean           | false   | 图表加载状态                                                       |
| data-empty            | boolean           | false   | 暂无数据状态                                                       |
| before-config         | object            |         | 对数据提前进行额外的处理,在数据转化为配置项开始前触发              |
| after-config          | object            |         | 对生成好的echarts配置进行额外的处理,在数据转化为配置项结束后触发   |
| after-set-option      | object            |         | 生成图之后获取 echarts 实例                                        |
| after-set-option-once | object            |         | 生成图之后获取 echarts 实例(只执行一次)                            |

### Events

| 事件名     | 回调参数 | 说明                                         |
| ---------- | -------- | -------------------------------------------- |
| ready      | ()=>void | 图表渲染完成后触发，每次渲染都会触发一次     |
| ready-once | ()=>void | 图表渲染完成后触发，只会在首次渲染完成后触发 |

### Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 组件默认插槽 |

## Types

### Options

```typescript
interface Options {
  // 见具体图表组件
}
```
