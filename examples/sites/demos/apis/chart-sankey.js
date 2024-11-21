export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-sankey',
      type: 'component',
      options: [
        {
          name: 'theme',
          type: 'string',
          defaultValue: 'cloud-light',
          typeAnchorName: 'Theme',
          desc: {
            'zh-CN': '图表主题',
            'en-US': 'Chart theme'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'color',
          type: 'array | string',
          defaultValue: '随主题',
          typeAnchorName: 'Color',
          desc: {
            'zh-CN': '颜色',
            'en-US': 'Color'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'padding',
          type: 'array',
          defaultValue: '根据文本长度自适应',
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
          type: 'object',
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
          name: 'dragggble',
          type: 'boolean',
          defaultValue: 'true',
          typeAnchorName: 'Draggable',
          desc: {
            'zh-CN': '页面节点是否可拖动',
            'en-US': 'Is the page node draggable'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'widthSpace',
          type: 'array',
          defaultValue: '[10, 30]',
          typeAnchorName: 'WidthSpace',
          desc: {
            'zh-CN': '节点矩形样式配置',
            'en-US': 'Node rectangle style configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'nodeAlign',
          type: 'string',
          defaultValue: 'justify',
          typeAnchorName: 'NodeAlign',
          desc: {
            'zh-CN': '桑基图中节点的对齐方式',
            'en-US': 'Alignment of nodes in Sankey diagram'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'label',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'Label',
          desc: {
            'zh-CN': '节点矩形中文本标签的样式',
            'en-US': 'Style of Text Labels in Node Rectangle'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'itemStyle',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'ItemStyle',
          desc: {
            'zh-CN': '节点矩形的样式',
            'en-US': 'Style of Node Rectangle'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'lineStyle',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'LineStyle',
          desc: {
            'zh-CN': '节点矩形连接带的样式',
            'en-US': 'Style of Node Rectangular Connection Strip'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'sortType',
          type: 'string',
          defaultValue: 'unset',
          typeAnchorName: 'SortType',
          desc: {
            'zh-CN': '每列数据的排序方式',
            'en-US': 'Sorting method for each column of data'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'emptyStatus',
          type: 'string',
          defaultValue: 'node',
          typeAnchorName: 'EmptyStatus',
          desc: {
            'zh-CN': '空节点的展示状态',
            'en-US': 'Display status of empty nodes'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'series',
          type: 'array',
          defaultValue: '见详情',
          typeAnchorName: 'Echarts',
          desc: {
            'zh-CN': 'echarts原生属性',
            'en-US': 'Echarts native properties'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'grid',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'Echarts',
          desc: {
            'zh-CN': 'echarts原生属性',
            'en-US': 'Echarts native properties'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'xAxis',
          type: 'array',
          defaultValue: '见详情',
          typeAnchorName: 'Echarts',
          desc: {
            'zh-CN': 'echarts原生属性',
            'en-US': 'Echarts native properties'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'yAxis',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'Echarts',
          desc: {
            'zh-CN': 'echarts原生属性',
            'en-US': 'Echarts native properties'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'tooltip',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'Echarts',
          desc: {
            'zh-CN': 'echarts原生属性',
            'en-US': 'Echarts native properties'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'title',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'Echarts',
          desc: {
            'zh-CN': 'echarts原生属性',
            'en-US': 'Echarts native properties'
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
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>data:{
    nodes:[
        {name:<span class="hljs-string">'a'</span>,value:<span class="hljs-number">70</span>},
        {name:<span class="hljs-string">'b'</span>,value:<span class="hljs-number">50</span>},
        {name:<span class="hljs-string">'c'</span>,value:<span class="hljs-number">20</span>},
        ...
    ],
    links:[
        {source:<span class="hljs-string">'a'</span>,target:<span class="hljs-string">'b'</span>,value:<span class="hljs-number">50</span>},
        {source:<span class="hljs-string">'a'</span>,target:<span class="hljs-string">'c'</span>,value:<span class="hljs-number">20</span>},
        ...
    ]
}
</code></pre>
</div></div><p data-v-md-line="19">说明：图表数据 ， <code>nodes</code> 为页面节点数据 ， <code>links</code> 为页面节点之间的连接关系数据</p>
<div data-v-md-line="21"><p class="ev_expand_title">data.nodes<span class="ev_expand_required">必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Array</span>
</p></div><div data-v-md-line="23"><p class="ev_expand_introduce">格式：
</p></div><div data-v-md-line="25"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>nodes:[
        {name:<span class="hljs-string">'a'</span>,value:<span class="hljs-number">70</span>},
        {name:<span class="hljs-string">'b'</span>,value:<span class="hljs-number">50</span>},
        {name:<span class="hljs-string">'c'</span>,value:<span class="hljs-number">20</span>},
        ...
    ],
</code></pre>
</div></div><div data-v-md-line="34"><p class="ev_expand_introduce">说明：页面节点数据 ； <code>name</code> 为节点名称 ， <code>value</code> 为节点的数据值 ， 未定义 <code>value</code> 则默认为 0
</p></div><div data-v-md-line="36"><p class="ev_expand_title">data.links<span class="ev_expand_required">必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Array</span>
</p></div><div data-v-md-line="38"><p class="ev_expand_introduce">格式：
</p></div><div data-v-md-line="40"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code> links:[
        {source:<span class="hljs-string">'a'</span>,target:<span class="hljs-string">'b'</span>,value:<span class="hljs-number">50</span>},
        {source:<span class="hljs-string">'a'</span>,target:<span class="hljs-string">'c'</span>,value:<span class="hljs-number">20</span>},
        ...
    ]
</code></pre>
</div></div><div data-v-md-line="48"><p class="ev_expand_introduce">说明：页面节点之间的连接关系数据 ； <code>source</code> 为节点起点 ， <code>target</code> 为节点终点 ， <code>value</code> 为节点间传递的数据值
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'Draggable',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值:<code>true</code></p>
<p data-v-md-line="3">说明：页面节点是否可被拖动</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Echarts',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">此属性配置和eCharts一致，详细配置请参考：<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-sankey">https://echarts.apache.org/zh/option.html#series-sankey</a></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'EmptyStatus',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>node</code></p>
<p data-v-md-line="3">可选值：<code>node</code>(只展示其占位节点)，<br>
<code>churnBar</code>(展示占位节点及其连接流失条)，</p>
<p data-v-md-line="6">说明：空节点的展示状态</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'ItemStyle',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">此属性配置和eCharts一致，详细配置请参考：<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-sankey">https://echarts.apache.org/zh/option.html#series-sankey</a></p>
<p data-v-md-line="3">注意：在data.nodes中对每个节点设置itemStyle属性的权重&gt;全局的itemStyle属性的权重&gt;color属性的权重</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Label',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">此属性配置和 eCharts 基本一致，详细配置请参考：<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-sankey">https://echarts.apache.org/zh/option.html#series-sankey</a></p>
<p data-v-md-line="3">此外，SankeyChart 内置了一部分默认如何和自定义属性，如下：</p>
<div data-v-md-line="5"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>label: { <span class="hljs-comment">// 节点的label默认是由其name和value组成</span>
  distance:<span class="hljs-number">5</span>,
  textArrange: <span class="hljs-string">'horizontal'</span> || <span class="hljs-string">'vertical'</span>, <span class="hljs-comment">// name和value的排列方向(只在全局label属性设置生效)</span>
  overHide: <span class="hljs-literal">false</span>, <span class="hljs-comment">// 当节点label的高度超过节点高度，是否隐藏其label(只在全局label属性设置生效)</span>
  formatter: (params) =&gt; { <span class="hljs-comment">// 节点的label默认值，用户可自定义（自定义则textArrange、rich需要用户自己实现）</span>
    <span class="hljs-keyword">if</span>(textArrange===<span class="hljs-string">'horizontal'</span>){
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`{name|\${params.name}} {value|\${params.data.empty ? 0 : params.data.value}}\`</span>; <span class="hljs-comment">// 横向排列的label默认展示</span>
    }<span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span>(textArrange===<span class="hljs-string">'vertical'</span>){
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`{name|\${params.name}}\n{value|\${params.data.empty ? 0 : params.data.value}}\`</span>; <span class="hljs-comment">// 纵向排列的label默认展示</span>
    }
  },
  rich: {
    name: { <span class="hljs-comment">// 配置name字段的样式</span>
      fontSize: <span class="hljs-number">12</span>,
      color:<span class="hljs-string">'#777777'</span>
    },
    value: { <span class="hljs-comment">// 配置value字段的样式</span>
      fontSize: <span class="hljs-number">12</span>,
      color:<span class="hljs-string">'#191919'</span>,
      <span class="hljs-keyword">align</span>:<span class="hljs-string">'center'</span>
    }
  }
};
</code></pre>
</div></div><p data-v-md-line="31">注意：在 data.nodes 中对每个节点设置 label 属性的权重&gt;全局的 label 属性的权重</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'LineStyle',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">此属性配置和eCharts一致，详细配置请参考：<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-sankey">https://echarts.apache.org/zh/option.html#series-sankey</a></p>
<p data-v-md-line="3">注意：在data.links中对每个节点设置lineStyle属性的权重&gt;全局的lineStyle属性的权重&gt;color属性的权重</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'NodeAlign',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>justify</code></p>
<p data-v-md-line="3">可选值：<code>right</code> ， <code>left</code> ，<code>justify</code></p>
<p data-v-md-line="5">说明：桑基图中节点的对齐方式</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'SortType',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>unset</code></p>
<p data-v-md-line="3">可选值：<code>unset</code>(不设置，则按照数据在 nodes 的出现顺序排列)，<br>
<code>ascend</code>(根据 value 值升序排列)，<br>
<code>decline</code>(根据 value 值降序排列)</p>
<p data-v-md-line="7">说明：每列数据的排序方式</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'WidthSpace',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>[10,30]</code></p>
<p data-v-md-line="3">说明：自定义节点矩形宽度及每列间距 ； 第一个值与节点矩形宽度正相关 ， 第二个值与节点距下方节点的间距正相关</p>
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
      name: 'Color',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<p data-v-md-line="3">如<code>theme='light'</code>时，color 取[ <span style="background:#6D8FF0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6D8FF0’ ，<span style="background:#00A874;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#00A874’， <span style="background:#BD72F0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BD72F0’ ，<span style="background:#54BCCE;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#54BCCE’ ，<span style="background:#FDC000;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FDC000’ ，<span style="background:#9185F0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#9185F0’，<span style="background:#00A2B5;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#00A2B5’ ]<br>
如<code>theme='dark'</code>时，color 取[ <span style="background:#1F55B5;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1F55B5’ ，<span style="background:#278661;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#278661’ ，<span style="background:#8A21BC;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#8A21BC’ ，<span style="background:#26616B;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#26616B’ ，<span style="background:#B98C1D;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B98C1D’ ，<span style="background:#745EF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#745EF7’，<span style="background:#2A8290;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2A8290’ ]<br>
如<code>theme='cloud-light'</code>时，color 取[ <span style="background:#1476FF;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1476FF’ ，<span style="background:#0BB8B2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0BB8B2’ ，<span style="background:#6E51E0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6E51E0’ ，<span style="background:#5CB300;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#5CB300’ ，<span style="background:#FFB700;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FFB700’ ，<span style="background:#33BCF2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#33BCF2’ ，<span style="background:#BA53E6;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BA53E6’ ，<span style="background:#F24998;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F24998’ ]<br>
如<code>theme='cloud-dark'</code>时，color 取[ color 取[ <span style="background:#1476FF;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1476FF’ ，<span style="background:#0BB8B2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0BB8B2’ ，<span style="background:#6E51E0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6E51E0’ ，<span style="background:#5CB300;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#5CB300’ ，<span style="background:#FFB700;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FFB700’ ，<span style="background:#33BCF2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#33BCF2’ ，<span style="background:#BA53E6;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BA53E6’ ，<span style="background:#F24998;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F24998’ ]<br>
如<code>theme='hdesign-light'</code>时，color 取[ color 取[ <span style="background:#2070F3;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2070F3’ ，<span style="background:#87C859;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#87C859’ ，<span style="background:#715AFB;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#715AFB’ ，<span style="background:#F69E39;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F69E39’ ，<span style="background:#2CB8C9;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2CB8C9’ ，<span style="background:#E049CE;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#E049CE’ ，<span style="background:#09AA71;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#09AA71’ ，<span style="background:#FCD72E;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FCD72E’，<span style="background:#B62BF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B62BF7’，<span style="background:#ED448A;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#ED448A’，<span style="background:#0067D1;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0067D1’]<br>
如<code>theme='hdesign-dark'</code>时，color 取[ color 取[ <span style="background:#2070F3;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2070F3’ ，<span style="background:#62B42E;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#62B42E’ ，<span style="background:#715AFB;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#715AFB’ ，<span style="background:#F4840C;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F4840C’ ，<span style="background:#2CB8C9;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2CB8C9’ ，<span style="background:#D41DBC;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#D41DBC’ ，<span style="background:#09AA71;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#09AA71’ ，<span style="background:#FCC800;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FCC800’，<span style="background:#B62BF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B62BF7’，<span style="background:#E61866;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#E61866’，<span style="background:#0067D1;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0067D1’]<br>
说明：调色盘颜色列表，图表从颜色数组中依次循环取得颜色使用，如果没有设置颜色列表 ， 则会根据 <code>theme</code> 决定默认值。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Tooltip',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">此属性配置和eCharts一致，详细配置请参考：<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-sankey">https://echarts.apache.org/zh/option.html#series-sankey</a></p>
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
    }
  ]
}
