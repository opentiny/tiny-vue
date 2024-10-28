export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-tree',
      type: 'component',
      options: [
        {
          name: 'theme',
          type: 'string',
          defaultValue: 'cloud-light',
          typeAnchorName: 'Theme',
          desc: {
            'zh-CN': '主题',
            'en-US': 'Chart theme'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'padding',
          type: 'array',
          defaultValue: '[50,20,50,20]',
          typeAnchorName: 'Padding',
          desc: {
            'zh-CN': '图表内边距值',
            'en-US': 'Margin values within the chart'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'tooltip',
          type: 'object',
          defaultValue: '默认显示',
          typeAnchorName: 'Tooltip',
          desc: {
            'zh-CN': '悬浮提示框内容配置',
            'en-US': 'Content configuration of floating prompt box'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'data',
          type: 'array',
          defaultValue: '无',
          typeAnchorName: 'Data',
          desc: {
            'zh-CN': '图表数据',
            'en-US': 'Chart data'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: '无',
          typeAnchorName: 'Type',
          desc: {
            'zh-CN': '树图类型',
            'en-US': 'Tree diagram type'
          },
          mode: ['pc'],
          pcDemo: ''
        },

        {
          name: 'direction',
          type: 'string',
          defaultValue: 'left',
          typeAnchorName: 'Direction',
          desc: {
            'zh-CN': '线性树图起点方向',
            'en-US': 'Starting direction of linear tree graph'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'symbolSize',
          type: 'number',
          defaultValue: '10',
          typeAnchorName: 'SymbolSize',
          desc: {
            'zh-CN': '树图图元大小',
            'en-US': 'Tree diagram element size'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'lineType',
          type: 'string',
          defaultValue: 'curve',
          typeAnchorName: 'LineType',
          desc: {
            'zh-CN': '线性树图连线形状',
            'en-US': 'Linear tree graph connection shape'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'initialTreeDepth',
          type: 'number',
          defaultValue: '1',
          typeAnchorName: 'InitialTreeDepth',
          desc: {
            'zh-CN': '树图初始展开层级',
            'en-US': 'Initial unfolding hierarchy of tree diagram'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ],
      events: [
        {
          name: 'ready',
          type: '()=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '图表渲染完成后触发，每次渲染都会触发一次',
            'en-US': 'Triggered after the completion of chart rendering, it will be triggered once every rendering'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: '',
          mobileDemo: '',
          mfDemo: ''
        },
        {
          name: 'ready-once',
          type: '()=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '图表渲染完成后触发，只会在首次渲染完成后触发',
            'en-US':
              'Triggered after the completion of chart rendering, it will only be triggered after the first rendering is completed'
          },
          mode: ['pc', 'mobile', 'mobile-first'],
          pcDemo: '',
          mobileDemo: '',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件默认插槽',
            'en-US': 'Component Default Slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        }
      ]
    }
  ],

  types: [
    {
      name: 'Data',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
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
</div></div></div></td></tr></div>`
    },
    {
      name: 'Direction',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>'left'</code></p>
<p data-v-md-line="3">可选值：<code>'left','right','top','bottom'</code></p>
<p data-v-md-line="5">说明：树图的起点方向,仅 type 为<code>LineTreeChart</code>时有效</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'InitialTreeDepth',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>1</code></p>
<p data-v-md-line="3">说明：树图的初始展开层级,最小值为 1</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'LineType',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>'curve'</code></p>
<p data-v-md-line="3">可选值：<code>'curve','polyline'</code></p>
<p data-v-md-line="5">说明：树图的连线的形状,仅 type 为<code>LineTreeChart</code>时有效,<code>'polyline'</code>表示折线，<code>'curve'</code>表示曲线。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'SymbolSize',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>10</code></p>
<p data-v-md-line="3">说明：树图的图元的大小</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Type',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">可选值：<code>LineTreeChart，RingTreeChart</code></p>
<p data-v-md-line="3">说明：图表类型，共有线形树图和环形树图两套</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Theme',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>light</code></p>
<p data-v-md-line="3">可选值：</p>
<p data-v-md-line="5"><code>light</code> ：ICT3.0图表浅色主题<br>
<code>dark</code> ：ICT3.0图表深色主题<br>
<code>hdesign-light</code> ：H Design1.1图表浅色主题<br>
<code>hdesign-dark</code> ：H Design1.1图表深色主题<br>
<code>cloud-light</code> ：华为云图表浅色主题<br>
<code>bpit-light</code> ：质量&amp;流程IT图表浅色主题<br>
<code>bpit-dark</code> ：质量&amp;流程IT图表深色主题</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Padding',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：设置图表四个方向的 <code>padding</code> 值<br>
<code>padding : [top, right, bottom, left]</code><br>
top 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比，也可以是 ‘top’ ， ‘middle’ ， ‘bottom’<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比，也可以是 ‘left’ ， ‘center’ ， ‘right’<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Tooltip',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
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
          &lt;i style="display:inline-block;width:10px;height:10px;background-color:\${item.color};"&gt;&lt;/i&gt;
          &lt;span style="margin-left:5px;color:#ffffff"&gt;
              &lt;span style="display:inline-block;width:100px;"&gt;\${item.seriesName} User&lt;/span&gt;
              &lt;span style="font-weight:bold"&gt; \${item.value} %&lt;/span&gt;
              &lt;span style="color:gray"&gt; out &lt;/span&gt;
              &lt;span style="color:red"&gt; \${100 - item.value} %&lt;/span&gt;
          &lt;/span&gt;
        &lt;/div&gt;</code>;
    });
    return htmlString;
  }
};
</span></code></pre>
</div></div><p data-v-md-line="32">说明：通过回调函数的参数，自行制作一个 HTML 片段<br>
详细参数解释见： <a target="_blank" href="https://echarts.apache.org/zh/option.html#tooltip.formatter">https://echarts.apache.org/zh/option.html#tooltip.formatter</a></p>
</div></div></div></td></tr></div>`
    }
  ]
}
