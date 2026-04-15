## chart-tree

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

### Data

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>data: [
    {
      name: <span class="hljs-string">'节点'</span>,
      data: [
        {
          name: <span class="hljs-string">'flare'</span>,
          children: [
            {
              name: <span class="hljs-string">'data'</span>,
              children: [
                {
                  name: <span class="hljs-string">'converters'</span>,
                  children: [
                    { name: <span class="hljs-string">'Converters'</span>, value: <span class="hljs-number">721</span> },
                    { name: <span class="hljs-string">'DelimitedTextConverter'</span>, value: <span class="hljs-number">4294</span> },
                    ...
                  ],
                },
                {
                  name: <span class="hljs-string">'DataUtil'</span>,
                  value: <span class="hljs-number">3322</span>,
                },
                ...
              ],
            },
          ],
        },
      ],
    },
  ],
</code></pre>
</div></div><p data-v-md-line="36">说明：树图的数据, 最外层name为本系列的数据的名称，data为需要渲染的树的数据，树的数据中name:节点的名称,value:节点的数值,children: 子节点。name,value,children 的名称是固定的，不允许做更改。name 为必传,value 和 children 可不传。</p>
</div></div></div></td></tr></div>
```

### Direction

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>'left'</code></p>
<p data-v-md-line="3">可选值：<code>'left','right','top','bottom'</code></p>
<p data-v-md-line="5">说明：树图的起点方向,仅 type 为<code>LineTreeChart</code>时有效</p>
</div></div></div></td></tr></div>
```

### InitialTreeDepth

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>1</code></p>
<p data-v-md-line="3">说明：树图的初始展开层级,最小值为 1</p>
</div></div></div></td></tr></div>
```

### LineType

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>'curve'</code></p>
<p data-v-md-line="3">可选值：<code>'curve','polyline'</code></p>
<p data-v-md-line="5">说明：树图的连线的形状,仅 type 为<code>LineTreeChart</code>时有效,<code>'polyline'</code>表示折线，<code>'curve'</code>表示曲线。</p>
</div></div></div></td></tr></div>
```

### SymbolSize

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>10</code></p>
<p data-v-md-line="3">说明：树图的图元的大小</p>
</div></div></div></td></tr></div>
```

### Type

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">可选值：<code>LineTreeChart，RingTreeChart</code></p>
<p data-v-md-line="3">说明：图表类型，共有线形树图和环形树图两套</p>
</div></div></div></td></tr></div>
```

### Theme

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>light</code></p>
<p data-v-md-line="3">可选值：</p>
<p data-v-md-line="5"><code>light</code> ：ICT3.0图表浅色主题<br>
<code>dark</code> ：ICT3.0图表深色主题<br>
<code>hdesign-light</code> ：H Design1.1图表浅色主题<br>
<code>hdesign-dark</code> ：H Design1.1图表深色主题<br>
<code>cloud-light</code> ：华为云图表浅色主题<br>
<code>bpit-light</code> ：质量&amp;流程IT图表浅色主题<br>
<code>bpit-dark</code> ：质量&amp;流程IT图表深色主题</p>
</div></div></div></td></tr></div>
```

### Padding

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：设置图表四个方向的 <code>padding</code> 值<br>
<code>padding : [top, right, bottom, left]</code><br>
top 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比，也可以是 ‘top’ ， ‘middle’ ， ‘bottom’<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比，也可以是 ‘left’ ， ‘center’ ， ‘right’<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比</p>
</div></div></div></td></tr></div>
```

### Tooltip

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>tooltip 提示框组件：tooltip.show = <span class="hljs-literal">true</span> 默认显示
</code></pre>
</div></div><p data-v-md-line="7">格式：</p>
<div data-v-md-line="9"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>tooltip: {
  show: <span class="hljs-literal">true</span>,
  formatter: (params, ticket, callback) =&gt; {
    let htmlString = <span class="hljs-string">'';
    params.map((item, index) =&gt; {
      if (index === 0) htmlString += item.name + '</span>&lt;br/&gt;<span class="hljs-string">';
      htmlString +=
      <code> &lt;div&gt;
          &lt;i style="display:inline-block;width:10px;height:10px;background-color:${item.color};"&gt;&lt;/i&gt;
          &lt;span style="margin-left:5px;color:#ffffff"&gt;
              &lt;span style="display:inline-block;width:100px;"&gt;${item.seriesName} User&lt;/span&gt;
              &lt;span style="font-weight:bold"&gt; ${item.value} %&lt;/span&gt;
              &lt;span style="color:gray"&gt; out &lt;/span&gt;
              &lt;span style="color:red"&gt; ${100 - item.value} %&lt;/span&gt;
          &lt;/span&gt;
        &lt;/div&gt;</code>;
    });
    return htmlString;
  }
};
</span></code></pre>
</div></div><p data-v-md-line="32">说明：通过回调函数的参数，自行制作一个 HTML 片段<br>
详细参数解释见： <a target="_blank" href="https://echarts.apache.org/zh/option.html#tooltip.formatter">https://echarts.apache.org/zh/option.html#tooltip.formatter</a></p>
</div></div></div></td></tr></div>
```
