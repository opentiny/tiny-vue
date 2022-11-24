<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-dropdown"/>
</p>

## Select 选择器

<nova-uxlink widget-name="Dropdown"></nova-uxlink>

Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件。
</div>

### 升级指导

#### 服务请求前事件

TINY 2 的 Dropdown 下拉框事件中存在 `beforeRequest` 事件，经常被用于在请求服务前对参数等内容进行干预。

```js
beforeRequest: function (source, controller) {
  source.data = {
    id: 1
  }
}
```

但在 TINY 3 中不存在 Dropdown 下拉框，一般使用 Select 选择器组件进行替代，而该组件中并没有 `beforeRequest` 事件，那么若需要在请求服务前进行干预，需要怎么做呢？<br><br>

思路：在 Select 组件中通过 `tiny-option` 组件或者 `options` 属性设置数据，那么在请求服务前，就可以直接进行干预，不用任何事件。
