<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。
</div>

### 基本用法

和内置分页类似，只需要把我们官方分页组件改为第三方分页组件即可，其他的保持一致。
自定义分页配置步骤：
1、`import` 引入第三方的 `Pager` 组件，例如引入 `ElementUI` 的 `Pager` 组件的示例： `import { Pager } from 'element-ui'` 。
2、`Pager` 传入给 `data()` 函数存储起来以便模板中使用。
3、表格属性设置 `pager` 进行分页相关配置，通过 `pager` 的属性 `{component: Pager}` 注入分页组件。
4、配置 seq-serial 属性可以设置翻页后序号连续显示，默认是不连续显示的

<nova-demo-view link="grid/aui3-first-menu/custom-pager"></nova-demo-view>

<br>
