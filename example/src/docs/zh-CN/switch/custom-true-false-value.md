<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-switch"/>
</p>

## Switch 开关

<nova-uxlink widget-name="Switch"></nova-uxlink>

通过 true-value 和 false-value 属性设置 Switch 在开和关状态下的不同取值。
</div>

### 自定义开关取值

`false-value` 属性表示的是关闭时取付给 `false-value` 的值。
`true-value` 属性表示的是开启时取付给 `true-value` 的值,v-model里定义的属性名是 `value` 时就能拿的到 `true-value` 或`false-value` 里的值。

<nova-demo-view link="switch/custom-true-false-value"></nova-demo-view>

<br>
