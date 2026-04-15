## layout

### Props

| 属性名 | 类型   | 默认值 | 说明                                      |
| ------ | ------ | ------ | ----------------------------------------- |
| cols   | number | 12     | 总栅格数;该属性的可选值为 12 /24          |
| tag    | string | "div"  | 定义 Layout 元素的渲染后的标签，默认为div |

## row

### Props

| 属性名  | 类型    | 默认值         | 说明                                                                                  |
| ------- | ------- | -------------- | ------------------------------------------------------------------------------------- |
| align   | string  | "top"          | 子项的副轴对齐方向，可取值：'top', 'middle', 'bottom'                                 |
| flex    | boolean | false          | 是否为flex容器                                                                        |
| gutter  | number  | 0              | 子项的间隔的像素                                                                      |
| justify | string  | "start"        | 子项的主轴对齐方向，可取值：'start', 'center', 'end', 'space-between', 'space-around' |
| noSpace | boolean | false          | 子项没有间隔，相当于强制gutter=0的情况                                                |
| order   | string  | "asc" \| "des" | 子项的排序方式。 不设置时，保留子项在模板中的顺序。                                   |
| tag     | string  | "div"          | 定义 Row 元素的渲染后的标签，默认为div                                                |

## col

### Props

| 属性名 | 类型   | 默认值 | 说明                                                         |
| ------ | ------ | ------ | ------------------------------------------------------------ |
| lg     | number |        | 在响应式宽度 <code> < 1920px <code> 时，该列占用的栅格数     |
| md     | number |        | 在响应式宽度 <code> < 1200px <code> 时，该列占用的栅格数     |
| move   | number | 0      | 子项的右偏移量,是通过 left 属性实现偏移,建议使用 offset 代替 |
| no     | number | 0      | 子项排序编号                                                 |
| offset | number | 0      | 子项的向右偏移量,是通过 margin-left 属性实现偏移             |
| sm     | number |        | 在响应式宽度 <code> < 992px <code> 时，该列占用的栅格数      |
| span   | number | 12     | 子项占据的列数                                               |
| tag    | string | "div"  | 定义 Col 元素的渲染后的标签，默认为div                       |
| xl     | number |        | 在响应式宽度 <code> >= 1920px <code> 时，该列占用的栅格数    |
| xs     | number |        | 在响应式宽度 <code> < 768px <code> 时，该列占用的栅格数      |
