<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-crop"/>
</p>

## Crop 图片裁剪

<nova-uxlink widget-name="Crop"></nova-uxlink>

Crop 图像裁切，可预览，支持 JPG 和 PNG 格式，浏览图像可以手动调整选择头像区域。
</div>

### 视图模式

通过 `view-mode` 属性可以设置裁剪框的视图模式，有 `0`、`1`、`2`、`3` 四种选项，默认为 `0` 。

:::tip view-mode 选项说明
`0`：裁剪框可以移动到图片外面。
`1`：裁剪框只能在图片内移动。
`2`：图片不全部铺满容器，缩小时可以有一边出现空隙。
`3`：图片填充整个容器。
:::

<nova-demo-view link="crop/view-mode"></nova-demo-view>

<br>
