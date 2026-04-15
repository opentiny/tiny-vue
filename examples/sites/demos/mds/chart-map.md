## chart-map

### Props

| 属性名  | 类型 | 默认值 | 说明                                                                                                                                               |
| ------- | ---- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Options |      |        | 关系图目前仅支持 eCharts 原生属性配置，使用方式和 eCharts 一致。详细配置请参考：https://echarts.apache.org/examples/zh/index.html#chart-type-graph |

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
// 使用方法目前仅支持 eCharts 原生属性配置, 使用方法和 echarts 一致。 详细配置请参考https://echarts.apache.org/examples/zh/index.html#chart-type-graph
```
