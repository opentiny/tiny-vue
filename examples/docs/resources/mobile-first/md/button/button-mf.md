<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-button"/>
</p>
 
## Button 按钮
 
<nova-uxlink widget-name="Button"></nova-uxlink>
 
常用的操作按钮，提供包括默认按钮、图标按钮、下拉按钮等类型。
 
</div>
 
### 基本用法
 
<nova-demo-view link="button/base.vue"></nova-demo-view>
 
### 文字按钮
 
设置 `type` 属性为 `text` 即为文字按钮，可在标签子级或者通过 `text` 属性设置显示内容。
 
<nova-demo-view link="button/text.vue"></nova-demo-view>
 
### 线性按钮
 
配置 `plain` 属性为 true，即可展示为线性按钮的形式。
 
<nova-demo-view link="button/plain.vue"></nova-demo-view>
 
### 超链接按钮
 
通过设置 `href` 属性可跳转到指定页面。
 
<nova-demo-view link="button/link.vue"></nova-demo-view>
 
### 主题样式
 
通过 `type` 属性可以设置不同的主题样式，主要包括 primary、success、info、warning、danger、text。
 
<nova-demo-view link="button/type.vue"></nova-demo-view>
 
### 尺寸
 
通过 `size` 属性设置按钮不同的大小尺寸，包括 medium、small、mini 三种不同大小。不设置时为默认尺寸。
 
<nova-demo-view link="button/size.vue"></nova-demo-view>
 
### 聚焦
 
通过 `autofocus` 属性设置是否默认聚焦。
 
<nova-demo-view link="button/autofocus.vue"></nova-demo-view>
 
### 防止表单重复提交
 
通过 `reset-time` 属性可设置单击后按钮禁用的时长，默认的禁用时长为 1000 毫秒。
 
可用于防止按钮连续点击出现表单重复提交的问题。
 
<nova-demo-view link="button/reset-time.vue"></nova-demo-view>
 
### 事件
 
按钮的单击事件，该示例中单击按钮将会出现提示信息。
 
<nova-demo-view link="button/click.vue"></nova-demo-view>
 
### 动态禁用按钮
 
设置 `disabled` 属性为 true 后，可以禁用按钮。
 
<nova-demo-view link="button/dynamic-disabled.vue"></nova-demo-view>
 
<br />