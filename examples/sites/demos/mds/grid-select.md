## grid-select

### Props

| 属性名               | 类型                                      | 默认值 | 说明                                                       |
| -------------------- | ----------------------------------------- | ------ | ---------------------------------------------------------- |
| clearable            | boolean                                   | false  | 是否启用一键清除的功能                                     |
| filterable           | boolean                                   | false  | 是否可搜索                                                 |
| filter-method        | (query: string) => void                   |        | 自定义过滤方法                                             |
| grid-op              | IGridOption                               |        | 下拉表格时，内置表格组件的配置，用法同 Grid 组件。         |
| modelValue / v-model | string \| number \| Array<string\|number> |        | 绑定值                                                     |
| multiple             | boolean                                   | false  | 是否允许选择多个选项                                       |
| radio-config         | IRadioConfig                              |        | 单选配置项                                                 |
| remote               | boolean                                   | false  | 是否为远程搜索                                             |
| remote-method        | (query:string) => void                    |        | 远程搜索的方法                                             |
| reserve-keyword      | boolean                                   | false  | 多选可搜索时，是否在选中一个选项后仍然保留当前的搜索关键词 |
| select-config        | ISelectConfig                             |        | 多选配置项                                                 |
| text-field           | string                                    | ''     | 显示值字段                                                 |
| value-field          | string                                    | ''     | 绑定值字段                                                 |

## Types

### IGridOption

```typescript
interface IGridOption {
  data: Record<string, unknown>
  columns: IColumnConfig[] // 表格列数据，同 Grid 组件的 IColumnConfig：https://opentiny.design/tiny-vue/zh-CN/smb-theme/components/grid#api
}
```

### IRadioConfig

```typescript
同 Grid 组件的 IRadioConfig：https://opentiny.design/tiny-vue/zh-CN/smb-theme/components/grid#api
```

### ISelectConfig

```typescript
同 Grid 组件的 ISelectConfig：https://opentiny.design/tiny-vue/zh-CN/smb-theme/components/grid#api
```
