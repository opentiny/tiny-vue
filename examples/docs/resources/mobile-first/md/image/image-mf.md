<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-alert"/>
</p>
 
## Image 图片预览
 
<nova-uxlink widget-name="Image"></nova-uxlink>
 
图片容器，在保留原生 img 的特性下，支持懒加载，自定义占位、加载失败等功能。
 
<br />
</div>
 
### 基本用法
 
通过 `src` 设置预览的图片路径。
 
<nova-demo-view link="image/basic-usage.vue"></nova-demo-view>
 
 <br />
 
### 自适应容器尺寸
 
可通过 `fit` 属性确定图片如何适应到容器框，同原生 css 的 object-fit 属性。
 
:::tip object-fit 说明
fill：被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比
contain：被替换的内容大小可以填充元素的内容框
cover：被替换的内容大小保持其宽高比，同时填充元素的整个内容框
none：被替换的内容尺寸不会被改变
scale-down：内容的尺寸就像是指定了 none 或 contain，取决于哪一个将导致更小的对象尺寸。
:::
 
 <br />
 
 ### 预览大图
 
通过 `preview-src-list` 开启预览大图的功能，通过添加`show-index`开启图片序列号展示。
 
<nova-demo-view link="image/preview-src-list.vue"></nova-demo-view>
 
<br />
 
### 悬浮效果
 
通过 `show-hover` 设置预览的图片的悬浮效果。
 
<nova-demo-view link="image/show-hover.vue"></nova-demo-view>
 
 <br />