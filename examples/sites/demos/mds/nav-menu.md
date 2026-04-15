## nav-menu

### Props

| 属性名          | 类型                         | 默认值                                             | 说明                                                                                          |
| --------------- | ---------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| before-skip     | (item: IMenuItem) => boolean |                                                    | 点击菜单跳转前的钩子函数，返回 false 将无法跳转                                               |
| data            | IDataItem[]                  |                                                    | 设置导航菜单的数据                                                                            |
| fetch-menu-data | () => IDataItem[]            |                                                    | 自定义菜单数据加载服务，返回一个Promise对象                                                   |
| fields          | IFields                      | { textField: "title", urlField: "url", key: "id" } | 自定义菜单数据的映射                                                                          |
| overflow        | IOverflow                    | auto                                               | 设置一级菜单无法在当前菜单容器里显示完全时的展示方式                                          |
| prevent         | boolean                      | false                                              | 若使用组件的默认服务获取菜单数据，并且要阻止默认的跳转行为，需要 before-skip 和此属性一起使用 |
| parent-key      | string                       | undefined                                          | 设置父级菜单的标识字段                                                                        |
| default-active  | string                       |                                                    | 自定义当前选中的菜单，data数据中必须设置id                                                    |

### Slots

| 插槽名  | 说明                          |
| ------- | ----------------------------- |
| logo    | 菜单栏 Logo 插槽              |
| toolbar | 自定义右上角部分 toolbar 插槽 |

## Types

### IMenuItem

```typescript
interface IMenuItem {
  id: string
  isFullUrl: boolean
  pid: string
  route: string
  target: string
  title: string
  url: string
}
```

### IDataItem

```typescript
interface IDataItem {
  title: string
  url: string
  children?: IDataItem[]
}
```

### IFields

```typescript
interface IFields {
  textField: string
  urlField: string
  key?: string
}
```

### IOverflow

```typescript
type IOverflow = 'auto' | 'retract' | 'fixed' | 'hidden'
```
