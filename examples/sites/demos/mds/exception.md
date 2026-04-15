## Exception

### Props

| 属性名          | 类型    | 默认值 | 说明                                |
| --------------- | ------- | ------ | ----------------------------------- |
| component-page  | boolean |        | 设置组件级异常                      |
| exception-class | string  |        | 设置自定义类                        |
| page-empty      | boolean |        | 设置页面级异常                      |
| sub-message     | string  |        | 设置二级标题                        |
| type            | IType   | nodata | <p>设置缺省页类型，默认为nodata</p> |

### Slots

| 插槽名  | 说明            |
| ------- | --------------- |
| content | <p>设置内容</p> |
| icon    | 图标插槽        |

## Types

### IType

```typescript
type IType =
  | 'noperm'
  | 'nodata'
  | 'weaknet'
  | 'noresult'
  | 'nonews'
  | 'pagenoperm'
  | 'pageweaknet'
  | 'pagenothing'
  | 'pageservererror'
```
