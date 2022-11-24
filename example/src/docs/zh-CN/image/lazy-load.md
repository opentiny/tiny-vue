<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-alert"/>
</p>

## Image 图片预览

<nova-uxlink widget-name="Image"></nova-uxlink>

图片容器，在保留原生 img 的特性下，支持懒加载，自定义占位、加载失败等功能。

<br>
</div>

### 懒加载

可通过 `lazy` 开启懒加载功能，当图片滚动到可视范围内才会加载。可通过 `scroll-container` 来设置滚动容器，若未定义，则为最近一个 `overflow` 值为 `auto` 或 `scroll` 的父元素。

:::tip 提示
lazy 懒加载的图片必须是远程的图片，不支持静态图片懒加载。
:::

<nova-demo-view link="image/lazy-load.vue"></nova-demo-view>
