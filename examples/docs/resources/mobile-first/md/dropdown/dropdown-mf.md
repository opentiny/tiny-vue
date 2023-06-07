<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-form-usercontact"/>
</p>
 
## Dropdown 下拉菜单
 
<nova-uxlink widget-name="Dropdown"></nova-uxlink>
 
将动作或菜单折叠到下拉菜单中。（暂不支持多级菜单）
 
</div>
 
### 基本用法
 
通过添加`checked-status`属性实现选中态
 
<nova-demo-view link="dropdown/basic-usage.vue"></nova-demo-view>
 
<br />
 
### 下拉按钮菜单
 
可以通过 `split-button` 属性设置按钮下拉菜单。
 
<nova-demo-view link="dropdown/button-dropdown.vue"></nova-demo-view>
 
<br />
 
### 触发对象
 
可以通过 `multi-stage` 属性设置二级下拉菜单。
 
<nova-demo-view link="dropdown/multi-stage.vue"></nova-demo-view>
 
<br />
 
### 更多图标下拉菜单
 
通过添加`show-self-icon`属性或者添加`:show-icon='false'`,用户图标自定义。
 
<nova-demo-view link="dropdown/many-dropdown.vue"></nova-demo-view>
 
<br />
 
### 箭头按钮
 
通过添加`border`属性可实现箭头按钮
 
<nova-demo-view link="dropdown/arrow-button.vue"></nova-demo-view>
 
<br />