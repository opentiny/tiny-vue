## watermark

### Props

| 属性名     | 类型    | 默认值     | 说明                                                                             |
| ---------- | ------- | ---------- | -------------------------------------------------------------------------------- |
| content    | string  |            | 水印文字内容，此属性低于 image                                                   |
| font       | Font    |            | 水印文字样式                                                                     |
| gap        | array   | [100, 100] | 水印之间的间距                                                                   |
| height     | number  | 64         | 水印的高度, 最小高度64px                                                         |
| image      | string  |            | 图片源，建议导出 2 倍或 3 倍图，优先级高（支持 base64 格式），此属性高于 content |
| interlaced | boolean | true       | 水印是否交错                                                                     |
| offset     | array   | [20, 20]   | 水印距离容器左上角的偏移量                                                       |
| rotate     | number  | -22        | 水印绘制时，旋转的角度，单位 °                                                   |
| width      | number  | 120        | 水印的宽度, 最小宽度120px                                                        |
| zIndex     | number  | 9          | 追加的水印元素的 'z-index'                                                       |

## Types

### Font

```typescript
type Font = {
  color: string
  fontSize: number
  fontWeight: string
  fontFamily: string
  fontStyle: string
}
```
