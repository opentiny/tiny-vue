## chart-baidu-map

### Events

| 事件名     | 回调参数 | 说明                                         |
| ---------- | -------- | -------------------------------------------- |
| ready      | ()=>void | 图表渲染完成后触发，每次渲染都会触发一次     |
| ready-once | ()=>void | 图表渲染完成后触发，只会在首次渲染完成后触发 |

### Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 组件默认插槽 |

## Types

### BMap

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式示例：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>bmap: {
        center: [<span class="hljs-number">118.775859</span>, <span class="hljs-number">31.985021</span>],
        zoom: <span class="hljs-number">17</span>,
        roam: <span class="hljs-literal">true</span>,
        mapStyle: {}
    }
</code></pre>
</div></div><p data-v-md-line="12">说明：通过配置<code>bmap</code>属性，修改百度地图的初始配置属性。<br><br>
<code>center</code>：百度地图中心经纬度。<br><br>
<code>zoom</code>：百度地图缩放级别。<br><br>
<code>roam</code>：是否开启拖拽缩放，可选值为：<code>'scale'</code>, <code>'move'</code>, <code>'true'</code>，默认true关闭。<br><br>
<code>mapStyle</code>：百度地图的自定义样式。<br><br>
其他更多属性配置可见Echarts百度地图扩展的git网址：<a href="https://github.com/apache/echarts/tree/release/extension-src/bmap" target="_blank">https://github.com/apache/echarts/tree/release/extension-src/bmap</a>。</p>
</div></div></div></td></tr></div>
```

### Key

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：通过配置<code>key</code>属性，修改百度地图api的密钥。<br><br>
需要用户获取在百度地图开发者平台申请的密钥，申请网站：https://lbsyun.baidu.com/</p>
</div></div></div></td></tr></div>
```

### Series

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式示例：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>series: [{
        type: <span class="hljs-string">'scatter'</span>,
        coordinateSystem: <span class="hljs-string">'bmap'</span>,
        data: [[<span class="hljs-number">118.775859</span>, <span class="hljs-number">31.985021</span>, <span class="hljs-number">1</span>]],
        encode: {
            value: <span class="hljs-number">30</span>
        }
    }]
</code></pre>
</div></div><p data-v-md-line="14">说明：通过配置<code>series</code>属性，修改百度地图的初始配置属性。<br><br>
<code>center</code>：百度地图中心经纬度。<br><br>
<code>zoom</code>：百度地图缩放级别。<br><br>
<code>roam</code>：是否开启拖拽缩放，可以只设置 ‘scale’ 或者 ‘move’。默认关闭。<br><br>
<code>mapStyle</code>：百度地图的自定义样式。<br><br>
其他更多属性配置可见Echarts百度地图扩展的git网址：<a href="https://github.com/apache/echarts/tree/release/extension-src/bmap" target="_blank">https://github.com/apache/echarts/tree/release/extension-src/bmap</a>。</p>
</div></div></div></td></tr></div>
```

### V

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：通过配置<code>v</code>属性，修改百度地图api的版本号，默认2.0。<br></p>
</div></div></div></td></tr></div>
```

### Url

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：通过配置<code>url</code>属性，修改百度地图api的前缀地址。<br></p>
</div></div></div></td></tr></div>
```
