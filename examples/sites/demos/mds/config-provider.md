## config-provider

### Props

| 属性名    | 类型                | 默认值                     | 说明                                                                |
| --------- | ------------------- | -------------------------- | ------------------------------------------------------------------- |
| design    | ConfigProviderProps |                            | 规范，可以通过该属于定制一些自定义的交互规范                        |
| direction | 'ltr' \| 'rtl'      | ltr                        | 文字样式方向                                                        |
| tag       | object              | {enable: true,name: 'div'} | 是否被元素包裹, 如果是vue2且没有一个单一节点, 组件会自动创建一个div |
| theme     | object              | --                         | 自定义主题色,格式：{data:{"tv-base-color-brand":"#595959",....}}    |
