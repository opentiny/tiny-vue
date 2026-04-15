## tree-select

### Props

| 属性名                | 类型                                         | 默认值         | 说明                                                                                                                |
| --------------------- | -------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------- |
| autocomplete          | string                                       | 'off'          | 输入框的原生 autocomplete 属性                                                                                      |
| click-expand          | boolean                                      | false          | 点击可展开或收起显示不全的选项。仅用于多选                                                                          |
| collapse-tags         | boolean                                      | false          | 是否将多个标签折叠显示。仅适用多选                                                                                  |
| copyable              | boolean                                      | false          | 是否启用一键复制的功能。点击复制按钮一键复制所有标签的文本内容并以逗号分隔，仅适用于多选                            |
| disabled              | boolean                                      | false          | 是否禁用                                                                                                            |
| dropdown-icon         | Component                                    |                | 自定义下拉图标                                                                                                      |
| drop-style            | String                                       |                | 自定义下拉选项样式                                                                                                  |
| input-box-type        | 'input' \| 'underline'                       | 'input'        | 输入框的显示类型                                                                                                    |
| max-visible-rows      | number                                       | 1              | 多行默认最大显示行数，超出后选项自动隐藏                                                                            |
| modelValue / v-model  | string \| number \| Array<string\|number>    |                | 绑定值                                                                                                              |
| multiple              | boolean                                      | false          | 是否允许选择多个选项                                                                                                |
| name                  | string                                       |                | 输入框的原生 name 属性                                                                                              |
| placeholder           | string                                       | '请选择'       | 占位符                                                                                                              |
| placement             | IPlacement                                   | 'bottom-start' | 下拉弹框相对于触发源的弹出位置                                                                                      |
| popper-append-to-body | boolean                                      | true           | 是否将弹出框的 dom 元素插入至 body 元素                                                                             |
| popper-class          | string                                       |                | 自定义下拉框的类名，用于自定义样式                                                                                  |
| size                  | 'medium' \| 'small' \| 'mini'                |                | 输入框尺寸。                                                                                                        |
| tag-type              | 'success' \| 'info' \| 'warning' \| 'danger' |                | 标签类型，仅多选适用。使用 aurora 主题时设置该属性为 info                                                           |
| text-field            | string                                       | 'label'        | 显示值字段                                                                                                          |
| text-split            | string                                       | ','            | 自定义复制文本的分隔符，需结合 copyable 属性使用                                                                    |
| tree-op               | ITreeOption                                  |                | 下拉树时，内置树组件的配置，用法同 Tree 组件。                                                                      |
| value-field           | string                                       | 'value'        | 绑定值字段                                                                                                          |
| lazy                  | boolean                                      | false          | 是否懒加载子节点，配合 load 属性使用                                                                                |
| load                  | (node, resolve) => void                      |                | 加载子树数据的方法。点击节点后，组件开始调用load方法，只有在load函数内调用resolve(data)，才表示返回下级的数据成功。 |
| after-load            | Function                                     |                | 节点懒加载完成后的回调函数                                                                                          |

## Types

### ITreeOption

```typescript
interface ITreeNode {
  label: string // 默认树节点的文本字段
  id: number | string // 树节点唯一标识
  children: ITreeNode[] // 子节点
}

interface ITreeOption {
  data: ITreeNode[] // 树数据，用法同 Tree
  lazy?: boolean // 是否懒加载子节点
  load?: (node: ITreeNodeVm, resolve: IResolveType) => void // 加载子树数据的方法
  afterLoad?: (data: any) => void // 节点懒加载完成后的回调函数
}
```

### IPlacement

```typescript
type IPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
```
