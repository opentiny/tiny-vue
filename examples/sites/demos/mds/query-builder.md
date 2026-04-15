## query-builder

### Props

| 属性名                      | 类型                | 默认值   | 说明                                                       |
| --------------------------- | ------------------- | -------- | ---------------------------------------------------------- |
| showNewRule                 | boolean             | true     | 是否显示新增条件                                           |
| showNewGroup                | boolean             | true     | 是否显示新增子条件组                                       |
| isRuleDisable               | boolean             | false    | 是否禁用新增条件                                           |
| isGroupDisable              | boolean             | false    | 是否禁用新增子条件组                                       |
| disabled                    | boolean             | false    | 是否全部禁用                                               |
| ruleLimit                   | number              | infinity | 设置新增条件的最大数量                                     |
| groupLimit                  | number              | infinity | 设置新增子条件组的最大数量                                 |
| config                      | IQueryBuilderConfig |          | 设置查询构建器的配置                                       |
| autoSelectField             | boolean             | true     | 范围域是否会默认选择                                       |
| autoSelectOperator          | boolean             | true     | 运算符是否会默认选择                                       |
| parseNumbers                | boolean             | false    | 数字会被转化为 Number 类型                                 |
| showCloneButtons            | boolean             | false    | 是否展示复制按钮，即整条规则可以被复制                     |
| showCombinatorsBetweenRules | boolean             | false    | 组合子数组统一修改，且不再展示在连线上，以下拉选择形式出现 |
| showLockButtons             | boolean             | false    | 展示锁定按钮，即整条规则可以被锁定                         |
| showNotToggle               | boolean             | false    | 展示 not 条件切换框                                        |
| displayOnlyField            | boolean             | false    | 是否仅展示字段选择器功能                                   |
| max-height                  | number              |          | 设置组件最大高度                                           |
| bindProps                   | object              |          | 控制某一类组件的参数                                       |
| allowDelAll                 | boolean             | false    | 是否允许删除所有规则                                       |
| fields                      | Array               | []       | 字段列表                                                   |
| validateQuery               | boolean             | false    | 是否启用查询校验                                           |
| query                       | IQueryBuilderQuery  |          | 查询数据                                                   |
| on-query-change             | function            |          | 查询数据改变时触发方法                                     |

## Types

### IQueryBuilderConfig

```typescript
type IQueryBuilderConfig = {
  ruleLimit?: number // 设置新增条件的最大数量
  groupLimit?: number // 设置新增子条件组的最大数量
  showNewRule?: boolean // 是否显示新增条件
  showNewGroup?: boolean // 是否显示新增子条件组
  isRuleDisable?: boolean // 是否禁用新增条件
  isGroupDisable?: boolean // 是否禁用新增子条件组
  disabled?: boolean // 是否全部禁用
  autoSelectField?: boolean // 范围域是否会默认选择
  autoSelectOperator?: boolean // 运算符是否会默认选择
  parseNumbers?: boolean // 数字会被转化为 Number 类型
  showCloneButtons?: boolean // 是否展示复制按钮，即整条规则可以被复制
  showCombinatorsBetweenRules?: boolean // 组合子数组统一修改，且不再展示在连线上，以下拉选择形式出现
  showLockButtons?: boolean // 展示锁定按钮，即整条规则可以被锁定
  showNotToggle?: boolean // 展示 not 条件切换框
  displayOnlyField?: boolean // 是否仅展示字段选择器功能
  bindProps?: {
    // 控制某一类组件的参数
    [key: string]: any
  }
  allowDelAll?: boolean // 是否允许删除所有规则
  fields?: Array<{
    name: string // 格式化数据中的值（形参）
    label: string // 范围域在规则生成器中对外展示名称
    operators: Record<string, any>[] // 运算符自定义
    defaultValue?: boolean // 值域的默认值
    validator?: (r: Record<string, any>) => boolean // 校验规则
    inputType?: string // 值域的数值类型
    valueEditorType?: string // 值域编辑器的类型
    values?: Array<Record<string, any>>
    valueSources?: string[] // 值域类型可选择
    comparator?: string //分组时的比较器
    groupNumber?: string //分组的组别
  }> // 字段列表
  combinators?: Array<{
    name: string
    label: string
  }> // 组合子数组配置
  validateQuery?: boolean // 是否启用查询校验
}
```

### IQueryBuilderQuery

```typescript
type IQueryBuilderQuery = {
  id?: string
  combinator: string
  not?: boolean
  rules: Array<IQueryBuilderQuery | IQueryBuilderRule>
}

type IQueryBuilderRule = {
  id?: string // 规则 id
  field: string // 字段
  operator: string // 运算符
  value: any // 值域
  valueSource?: string // 值域类型
}
```
