<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。

</div>

### 基本用法

为保障表格足够轻量和开放性需求，表格进行模块化拆分，核心代码轻量化，分页功能需要引入分页组件，内置分页配置步骤：
1、`import` 引入我们官方的 `Pager` 组件，即 `import Pager from '@opentiny/vue-pager'` 或者 `{ Pager } from '@opentiny/vue'` 。
2、`Pager` 传入给 `data()` 函数存储起来以便模板中使用。
3、表格属性设置 `pager` 进行分页相关配置，通过 `pager` 的属性 `{component: Pager}` 注入分页组件。
4、配置 seq-serial 属性可以设置翻页后序号连续显示，默认是不连续显示的

<nova-demo-view link="grid/pager/inner-pager"></nova-demo-view>

<br>

### 提示保存数据

配置 `showSaveMsg` 属性，当检查到表格数据存在修改时，会提示用户进行保存

<nova-demo-view link="grid/pager/showSaveMsg"></nova-demo-view>

<br>

### 升级指导

TINY 2.x 版本内置分页配置，在 op 中增加如下配置：

```js
showPager: true,
pagerOp: {
  mode: 'number',
  pageVO: {
    curPage: 1,
    pageSize: 5
  },
  pageSizes: [5, 15, 50, 100]
}
```

TINY 3 版本内置分页配置，在标签上配置 `pager` 属性，配置内容如下所示：

```js
import { Grid, GridColumn, Pager } from '@opentiny/vue'
...
pagerConfig: {
  component: Pager,
  attrs: {
    currentPage: 1,
    pageSize: 5,
    pageSizes: [5, 10],
    total: 0,
    layout: 'total, prev, pager, next, jumper, sizes'
  }
}
```

<br>
