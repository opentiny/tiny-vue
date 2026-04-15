## chart-liquidfill

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

### BackgroundStyle

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式示例：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>backgroundStyle: {
    borderWidth: <span class="hljs-number">5</span>,
    borderColor: <span class="hljs-string">'#FDC000'</span>,
    color: <span class="hljs-string">'#fff'</span>
}
</code></pre>
</div></div><p data-v-md-line="11">说明：通过配置<code>backgroundStyle</code>属性，修改图表背景。<br><br>
<code>borderWidth</code>：水球图的背景边框宽度。<br><br>
<code>borderColor</code>：水球图的背景边框颜色。<br><br>
<code>color</code>：水球图的背景颜色。<br><br>
其他更多属性配置可见水球图的git网址：<a href="https://github.com/ecomfe/echarts-liquidfill" target="_blank">https://github.com/ecomfe/echarts-liquidfill</a>。</p>
</div></div></div></td></tr></div>
```

### Data

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式示例：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code> data: [<span class="hljs-number">0.6</span>, <span class="hljs-number">0.5</span>, <span class="hljs-number">0.4</span>]
</code></pre>
</div></div><p data-v-md-line="7">说明：水球图数据，数组里每个数表示不同波浪面积的占比。例如上面数据代表水球图的各个波浪占整个水球的 60%, 50%, 40%。</p>
</div></div></div></td></tr></div>
```

### Label

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式示例：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code> label: {
        formatter: <span class="hljs-string">'{a}
{b}
购房比: {c}'</span>,
        fontSize: <span class="hljs-number">40</span>,
        color: <span class="hljs-string">'green'</span>,
    },
</code></pre>
</div></div><p data-v-md-line="12">说明：通过配置<code>label</code>属性，来修改图表的文本<br><br>
<code>formatter</code>：文本内容格式器，支持字符串模板和回调函数两种形式。详细参数可参照漏斗图的formatter：https://echarts.apache.org/zh/option.html#series-funnel.label.formatter。<br><br>
<code>font</code>：文本的字体大小。<br><br>
<code>color</code>：文本的颜色。<br><br>
其他更多属性配置可见水球图的git网址：<a href="https://github.com/ecomfe/echarts-liquidfill" target="_blank">https://github.com/ecomfe/echarts-liquidfill</a>。</p>
</div></div></div></td></tr></div>
```

### Outline

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式示例：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code> outline: {
        show: <span class="hljs-literal">true</span>,
        itemStyle: {
            borderColor: <span class="hljs-string">'#BD72F0'</span>,
        }
    }
</code></pre>
</div></div><p data-v-md-line="12">说明：通过配置<code>outline</code>属性，来修改图表的外边框<br><br>
<code>show</code>：选择是否展现图表。<br><br>
<code>itemStyle</code>：修改水球图外边框样式的属性。<br><br>
<code>borderColor</code>：水球图的外边框颜色。<br><br>
其他更多属性配置可见水球图的git网址：<a href="https://github.com/ecomfe/echarts-liquidfill" target="_blank">https://github.com/ecomfe/echarts-liquidfill</a>。</p>
</div></div></div></td></tr></div>
```

### Series

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式示例：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>series:{
  name: <span class="hljs-string">'广东深圳'</span>,
  data: [
      <span class="hljs-number">0.6</span>,
      {
          value: <span class="hljs-number">0.5</span>,
          itemStyle: {
          color: <span class="hljs-string">'red'</span>
          }
      },
      <span class="hljs-number">0.4</span>
      ],
  center: [<span class="hljs-string">'25%'</span>, <span class="hljs-string">'50%'</span>],
  shape: <span class="hljs-string">'circle'</span>,
  label: {
      fontSize: <span class="hljs-number">40</span>
  },
  waveAnimation: <span class="hljs-literal">false</span>
}
</code></pre>
</div></div><p data-v-md-line="25">说明：自定义 series，{{VITE_BASECOPYRIGHTS}} 仅对此部分的series进行覆盖，详细参数解释见：<a href="https://github.com/ecomfe/echarts-liquidfill" target="_blank">https://github.com/ecomfe/echarts-liquidfill</a>。</p>
</div></div></div></td></tr></div>
```

### Shape

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式示例：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>shape: <span class="hljs-string">'container'</span>
</code></pre>
</div></div><p data-v-md-line="7">说明：水球图的形状属性。可选值为：<code>'circle'</code>, <code>'rect'</code>, <code>'roundRect'</code>, <code>'triangle'</code>, <code>'diamond'</code>, <code>'pin'</code>, <code>'arrow'</code>,<code>'container'</code>。<br><br>
除此之外也可以使用<code>'path://'</code>自定义SVG形状。</p>
</div></div></div></td></tr></div>
```

### WaveAnimation

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式示例：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>waveAnimation: <span class="hljs-literal">true</span>
</code></pre>
</div></div><p data-v-md-line="7">说明：通过配置waveAnimation属性，开启或关闭水球图动画。可选值为：<code>true</code>、<code>false</code>。</p>
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

### Color

```typescript
<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<p data-v-md-line="3">如<code>theme='light'</code>时，color 取[ <span style="background:#6D8FF0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6D8FF0’ ，<span style="background:#00A874;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#00A874’， <span style="background:#BD72F0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BD72F0’ ，<span style="background:#54BCCE;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#54BCCE’ ，<span style="background:#FDC000;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FDC000’ ，<span style="background:#9185F0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#9185F0’，<span style="background:#00A2B5;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#00A2B5’ ]<br>
如<code>theme='dark'</code>时，color 取[ <span style="background:#1F55B5;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1F55B5’ ，<span style="background:#278661;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#278661’ ，<span style="background:#8A21BC;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#8A21BC’ ，<span style="background:#26616B;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#26616B’ ，<span style="background:#B98C1D;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B98C1D’ ，<span style="background:#745EF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#745EF7’，<span style="background:#2A8290;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2A8290’ ]<br>
如<code>theme='cloud-light'</code>时，color 取[ <span style="background:#1476FF;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1476FF’ ，<span style="background:#0BB8B2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0BB8B2’ ，<span style="background:#6E51E0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6E51E0’ ，<span style="background:#5CB300;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#5CB300’ ，<span style="background:#FFB700;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FFB700’ ，<span style="background:#33BCF2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#33BCF2’ ，<span style="background:#BA53E6;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BA53E6’ ，<span style="background:#F24998;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F24998’ ]<br>
如<code>theme='cloud-dark'</code>时，color 取[ color 取[ <span style="background:#1476FF;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1476FF’ ，<span style="background:#0BB8B2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0BB8B2’ ，<span style="background:#6E51E0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6E51E0’ ，<span style="background:#5CB300;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#5CB300’ ，<span style="background:#FFB700;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FFB700’ ，<span style="background:#33BCF2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#33BCF2’ ，<span style="background:#BA53E6;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BA53E6’ ，<span style="background:#F24998;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F24998’ ]<br>
如<code>theme='hdesign-light'</code>时，color 取[ color 取[ <span style="background:#2070F3;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2070F3’ ，<span style="background:#87C859;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#87C859’ ，<span style="background:#715AFB;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#715AFB’ ，<span style="background:#F69E39;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F69E39’ ，<span style="background:#2CB8C9;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2CB8C9’ ，<span style="background:#E049CE;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#E049CE’ ，<span style="background:#09AA71;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#09AA71’ ，<span style="background:#FCD72E;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FCD72E’，<span style="background:#B62BF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B62BF7’，<span style="background:#ED448A;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#ED448A’，<span style="background:#0067D1;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0067D1’]<br>
如<code>theme='hdesign-dark'</code>时，color 取[ color 取[ <span style="background:#2070F3;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2070F3’ ，<span style="background:#62B42E;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#62B42E’ ，<span style="background:#715AFB;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#715AFB’ ，<span style="background:#F4840C;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F4840C’ ，<span style="background:#2CB8C9;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2CB8C9’ ，<span style="background:#D41DBC;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#D41DBC’ ，<span style="background:#09AA71;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#09AA71’ ，<span style="background:#FCC800;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FCC800’，<span style="background:#B62BF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B62BF7’，<span style="background:#E61866;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#E61866’，<span style="background:#0067D1;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0067D1’]<br>
说明：调色盘颜色列表，图表从颜色数组中依次循环取得颜色使用，如果没有设置颜色列表 ， 则会根据 <code>theme</code> 决定默认值。</p>
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
      ` &lt;div&gt;
          &lt;i style="display:inline-block;width:10px;height:10px;background-color:${item.color};"&gt;&lt;/i&gt;
          &lt;span style="margin-left:5px;color:#ffffff"&gt;
              &lt;span style="display:inline-block;width:100px;"&gt;${item.seriesName} User&lt;/span&gt;
              &lt;span style="font-weight:bold"&gt; ${item.value} %&lt;/span&gt;
              &lt;span style="color:gray"&gt; out &lt;/span&gt;
              &lt;span style="color:red"&gt; ${100 - item.value} %&lt;/span&gt;
          &lt;/span&gt;
        &lt;/div&gt;`;
    });
    return htmlString;
  }
};
</span></code></pre>
</div></div><p data-v-md-line="32">说明：通过回调函数的参数，自行制作一个 HTML 片段<br>
详细参数解释见： <a target="_blank" href="https://echarts.apache.org/zh/option.html#tooltip.formatter">https://echarts.apache.org/zh/option.html#tooltip.formatter</a></p>
</div></div></div></td></tr></div>
```
