<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-menubar"/>
</p>

## Notify 通知

<nova-uxlink widget-name="Notify"></nova-uxlink>

</div>

### 属性列表

| 名称        | 类型               | 描述                                                 | 默认值        |
| ----------- | ------------------ | ---------------------------------------------------- | ------------- |
| type        | String             | 通知消息类型，可选值为 info、success、warning、error | info          |
| title       | [String, Function] | 通知消息标题，可用 jsx 定制                          | undefined     |
| message     | [String, Function] | 通知消息文本，可用 jsx 定制                          | undefined     |
| position    | String             | 通知显示位置，可选值为 top-right、bottom-right       | bottom-right  |
| duration    | Number             | 自动关闭延时毫秒数                                   | 4500          |
| customClass | [String, Object]   | 自定义样式类                                         | undefined     |
| showClose   | Boolean            | 是否显示关闭按钮                                     | true          |
| showIcon    | Boolean            | 是否显示类型图标                                     | true          |
| closeIcon   | Object             | 关闭图标组件对象                                     | IconClose     |
| statusIcon  | Object             | 类型图标组件对象                                     | IconInfoSolid |
| beforeClose | () => Boolean      | 关闭前回调方法，返回 false 可阻止关闭                | undefined     |
| onClose     | Function           | 关闭回调                                             | undefined     |

<nova-demo-view link="notify/basic-usage"></nova-demo-view>

<br>
