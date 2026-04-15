## virtual-tree

### Props

| 属性名         | 类型                    | 默认值 | 说明                 |
| -------------- | ----------------------- | ------ | -------------------- |
| width          | string \| number        |        | 虚拟滚动区域的宽度   |
| height         | string \| number        |        | 虚拟滚动区域的高度   |
| row-buffer     | string \| number        | 200    | 虚拟滚动行缓冲区高度 |
| column-buffer  | string \| number        | 200    | 虚拟滚动列缓冲区宽度 |
| scrollbar-size | string \| number        | 6      | 滚动条尺寸           |
| columns        | Array<{string: any}>    |        | 所有的列             |
| column-sizes   | Array<number \| string> |        | 每个列对应的宽度     |
| rows           | Array<{string: any}>    |        | 所有的行             |
| row-sizes      | Array<number \| string> |        | 每个行对应的高度     |
| fixed-rows     | Array<{string: any}>    |        | 行固定配置           |
| fixed-columns  | Array<{string: any}>    |        | 列固定配置           |
| span-config    | Array<{string: any}>    |        | 单元格合并配置       |

### Events

| 事件名 | 回调参数                   | 说明                 |
| ------ | -------------------------- | -------------------- |
| change | (arg: IChangeArgs) => void | 在虚滚状态改变时抛出 |

### Methods

| 方法名  | 返回值                      | 说明                                                         |
| ------- | --------------------------- | ------------------------------------------------------------ |
| refresh | (arg: IRefreshArgs) => void | 刷新虚拟滚动状态。默认不保持之前的滚动位置，可以通过参数控制 |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |

## Types

### IChangeArgs

```typescript
interface IChangeArgs {
  viewRows: Array<{ string: any }>
  viewCols: Array<{ string: any }>
  isScrollX: boolean
  isScrollY: boolean
  isTop: boolean
  isBottom: boolean
  isLeft: boolean
  isRight: boolean
}
```

### IRefreshArgs

```typescript
interface IRefreshArgs {
  isKeepScrollTop: boolean
  isKeepScrollLeft: boolean
}
```
