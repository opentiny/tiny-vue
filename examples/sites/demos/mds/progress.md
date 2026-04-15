## progress

### Props

| 属性名       | 类型                                                     | 默认值 | 说明                                                          |
| ------------ | -------------------------------------------------------- | ------ | ------------------------------------------------------------- |
| color        | string \| IColorItem[] \| (percentage: string) => string |        | 进度条背景色（会覆盖 status 状态颜色）                        |
| format       | () => string                                             |        | 自定义进度条的文字                                            |
| info         | string                                                   |        | 环形进度条底部描述文字                                        |
| percentage   | number                                                   | 0      | 百分比（必填）；该属性的可选值为 0-100                        |
| show-text    | boolean                                                  | true   | 是否显示进度条文字内容                                        |
| size         | string                                                   |        | 进度条尺寸                                                    |
| status       | 'success' \| 'exception' \| 'warning'                    |        | 进度条当前状态                                                |
| stroke-width | number                                                   | 6      | line 类型进度条的宽度，单位 px                                |
| text-inside  | boolean                                                  | false  | 进度条显示文字内置在进度条内（只在 type=line 时可用）         |
| type         | 'line' \| 'circle' \| 'dashboard'                        | 'line' | 进度条类型                                                    |
| width        | number                                                   | 126    | 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用） |

### Slots

| 插槽名     | 说明                                                |
| ---------- | --------------------------------------------------- |
| statusIcon | 状态插槽，successIcon / exceptionIcon / warningIcon |

## Types

### IColorItem

```typescript
interface IColorItem {
  color: string
  percentage: number
}
```
