## breadcrumb

### Props

| 属性名         | 类型           | 默认值   | 说明                                            |
| -------------- | -------------- | -------- | ----------------------------------------------- |
| options        | IOptionsItem[] |          | 单独使用 Breadcrumb，通过 option 配置生成面包屑 |
| separator      | string         | >        | 分隔符                                          |
| separator-icon | vueComponent   |          | 图标分隔符                                      |
| size           | 'medium'       | 'medium' | 设置面包屑尺寸大小                              |
| text-field     | string         | label    | 指定面包屑的显示键值，结合 options 使用         |

### Events

| 事件名 | 回调参数                      | 说明                       |
| ------ | ----------------------------- | -------------------------- |
| select | (value: ISelectValue) => void | 点击 BreadcrumbItem 时触发 |

## breadcrumb-item

### Props

| 属性名  | 类型                     | 默认值   | 说明                                                                                |
| ------- | ------------------------ | -------- | ----------------------------------------------------------------------------------- |
| label   | string                   |          | 定义面包屑的显示文本                                                                |
| replace | boolean                  | false    | 在使用 to 进行路由跳转时，启用 replace 将不会向 浏览器历史记录 history 里添加新记录 |
| size    | 'medium'                 | 'medium' | 设置面包屑尺寸大小                                                                  |
| to      | string \| IOptionsItemTo |          | 路由跳转对象，同 vue-router 的 to                                                   |

### Events

| 事件名 | 回调参数                      | 说明                       |
| ------ | ----------------------------- | -------------------------- |
| select | (value: ISelectValue) => void | 点击 BreadcrumbItem 时触发 |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |

## Types

### IOptionsItemTo

```typescript
interface IOptionsItemTo {
  path: string
}
```

### IOptionsItem

```typescript
interface IOptionsItem {
  label?: string
  to?: IOptionsItemTo
  replace?: boolean
  [customProp: string]: string
}
```

### ISelectValue

```typescript
interface ISelectValue {
  event: Event
  link: HTMLElement
  option: IOptionsItem
  replace: boolean
  to?: IOptionsItemTo
}
```
