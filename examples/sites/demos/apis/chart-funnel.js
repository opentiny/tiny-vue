export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-funnel',
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
          type: 'array | array',
          typeAnchorName: 'Color',
          defaultValue: '-',
          desc: {
            'zh-CN': '颜色',
            'en-US': 'Color'
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
          name: 'event',
          type: 'object',
          defaultValue: '默认不触发',
          typeAnchorName: 'Event',
          desc: {
            'zh-CN': '图表事件',
            'en-US': 'Chart Events'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'legend',
          type: 'object',
          defaultValue: '默认显示',
          typeAnchorName: 'Legend',
          desc: {
            'zh-CN': '图例配置',
            'en-US': 'Legend configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'gap',
          type: 'number',
          defaultValue: '1',
          typeAnchorName: 'Gap',
          desc: {
            'zh-CN': '数据图形间距',
            'en-US': 'Data graphic spacing'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'sort',
          type: 'string',
          defaultValue: 'descending',
          typeAnchorName: 'Sort',
          desc: {
            'zh-CN': '数据排序方式',
            'en-US': 'Data sorting method'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'size',
          type: 'object',
          defaultValue: '默认显示',
          typeAnchorName: 'Size',
          desc: {
            'zh-CN': '图表大小',
            'en-US': 'Chart size'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'position',
          type: 'object',
          defaultValue: '默认显示',
          typeAnchorName: 'Position',
          desc: {
            'zh-CN': '图表位置',
            'en-US': 'Chart position'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'label',
          type: 'object',
          defaultValue: '默认显示',
          typeAnchorName: 'Label',
          desc: {
            'zh-CN': '图表文本',
            'en-US': 'Chart Text'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'data',
          type: 'array',
          defaultValue: '-',
          typeAnchorName: 'Data',
          desc: {
            'zh-CN': '图表数据',
            'en-US': 'Chart Data'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'series',
          type: 'object',
          defaultValue: '-',
          typeAnchorName: 'Series',
          desc: {
            'zh-CN': '图表series',
            'en-US': 'Chart Series'
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
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code> data:[
        { value: <span class="hljs-number">60</span>, name: <span class="hljs-string">'Visit'</span> },
        { value: <span class="hljs-number">40</span>, name: <span class="hljs-string">'Inquiry'</span>},
        { value: <span class="hljs-number">20</span>, name: <span class="hljs-string">'Order'</span> },
        { value: <span class="hljs-number">80</span>, name: <span class="hljs-string">'Click'</span> },
        { value: <span class="hljs-number">100</span>, name: <span class="hljs-string">'Show'</span> }
    ]
</code></pre>
</div></div><p data-v-md-line="13">说明：图表数据，<code>value</code>表示为数据值，<code>name</code>表示为数据名称。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Gap',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>10</code><br><br>
说明：表示数据图形之间的间距。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Label',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="2">默认值：</p>
<div data-v-md-line="4"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code> label: {
        show: <span class="hljs-literal">true</span>,
        position: <span class="hljs-string">'outside'</span>,
        formatter: <span class="hljs-string"><code>{ b| { b }:}{ c | { c } %} </code></span>, 
        rich: {
            b: {
                color: <span class="hljs-string">'#191919'</span>,
                padding: [<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]
            },
            c: {
                color: <span class="hljs-string">'#000000'</span>,
                fontWeight: <span class="hljs-string">'bold'</span>,
                padding: [<span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]
            }
        }
    }
</code></pre>
</div></div><p data-v-md-line="23">说明：通过配置<code>label</code>属性，来修改图表的文本。<br><br>
<code>show</code>：选择是否展现图表文本。<br><br>
<code>position</code>：图表文本的位置。可选值：<code>'left/right/top/bottom/inside/insideRight/insideLeft/leftTop/leftBottom/rightTop/rightBottom'</code>。<br><br>
<code>formatter</code>：文本内容格式器，支持字符串模板和回调函数两种形式，详细参数解释见：<br>
<a href="https://echarts.apache.org/zh/option.html#series-funnel.label.formatter" target="_blank">https://echarts.apache.org/zh/option.html#series-funnel.label.formatter</a>。<br><br>
<code>rich</code>：自定义富文本样式，可以配置formatter文本格式，详细参数解释见：<br>
<a href="https://echarts.apache.org/zh/option.html#series-funnel.label.rich" target="_blank">https://echarts.apache.org/zh/option.html#series-funnel.label.rich</a>。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Legend',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="2">默认值：</p>
<div data-v-md-line="4"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>legend: {
        show: <span class="hljs-literal">true</span>,
        icon: <span class="hljs-string">'circle'</span>,
        left: <span class="hljs-string">'right'</span>,
        orient: <span class="hljs-string">'vertical'</span>,
    }
</code></pre>
</div></div><p data-v-md-line="13">说明：通过配置<code>legend</code>属性，来修改图表的图例。<br><br>
<code>show</code>：选择是否展现图表。<br><br>
<code>icon</code>：图例的icon。可选值：<code>'circle/rect/roundRect/triangle/diamond/pin/arrow/none'</code>，也可以通过<code>'image://url'</code>设置为图片。<br><br>
<code>left</code>：图例离容器左侧的距离。可选值：像素<code>'20'</code>、百分比：<code>'20%'</code>、<code>'left/center/right'</code>。<br><br>
<code>orient</code>：图例列表的布局朝向。可选值：<code>'horizontal/vertical'</code>。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Position',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="2">格式：</p>
<div data-v-md-line="4"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>position: {
        left: <span class="hljs-string">'center'</span>,
        right: <span class="hljs-string">'80'</span>,
        top: <span class="hljs-number">60</span>,
        bottom: <span class="hljs-number">60</span>,
        funnelAlign: <span class="hljs-string">'center'</span>,
        orient: <span class="hljs-string">'horizontal'</span>,
    }
</code></pre>
</div></div><p data-v-md-line="15">说明：通过配置<code>position</code>属性，来修改图表位置。<br><br>
<code>left</code>：图表离容器左侧的距离。可选值：像素<code>'20'</code>、百分比：<code>'20%'</code>、<code>'left/center/right'</code>。<br><br>
<code>right</code>：图表离容器右侧的距离。可选值：像素<code>'20'</code>、百分比：<code>'20%'</code>。<br><br>
<code>top</code>：图表离容器上侧的距离。可选值：像素<code>'20'</code>、百分比：<code>'20%'</code>、<code>'top/middle/bottom'</code>。<br><br>
<code>bottom</code>：图表离容器下侧的距离。可选值：像素<code>'20'</code>、百分比：<code>'20%'</code>。<br><br>
<code>funnelAlign</code>：水平方向对齐布局类型。可选值：<code>'left/center/right'</code>。<br><br>
<code>orient</code>：图表朝向，可选值：<code>'vertical'</code>或者<code>'horizontal'</code>。<br>
以上属性均为ECharts漏斗图的原生属性，详情见：<br>
<a href="https://echarts.apache.org/examples/zh/editor.html?c=funnel" target="_blank">https://echarts.apache.org/examples/zh/editor.html?c=funnel</a>。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Series',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>series:{
        name: <span class="hljs-string">'Expected'</span>,
        type: <span class="hljs-string">'funnel'</span>,
        left: <span class="hljs-string">'10%'</span>,
        width: <span class="hljs-string">'80%'</span>,
        label: {
            formatter: <span class="hljs-string">'{b}Expected'</span>
        },
        itemStyle: {
            opacity: <span class="hljs-number">0.7</span>,
            borderColor: <span class="hljs-string">'#fff'</span>,
        },
        emphasis: {
            label: {
                position: <span class="hljs-string">'inside'</span>,
                formatter: <span class="hljs-string">'{b}Expected: {c}%'</span>
            }
        },
        data: [
            { value: <span class="hljs-number">60</span>, name: <span class="hljs-string">'Visit'</span> },
            { value: <span class="hljs-number">40</span>, name: <span class="hljs-string">'Inquiry'</span> },
            { value: <span class="hljs-number">20</span>, name: <span class="hljs-string">'Order'</span> },
            { value: <span class="hljs-number">80</span>, name: <span class="hljs-string">'Click'</span> },
            { value: <span class="hljs-number">100</span>, name: <span class="hljs-string">'Show'</span> }
        ]
      }
</code></pre>
</div></div><p data-v-md-line="32">说明：自定义series，{{VITE_BASECOPYRIGHTS}} 仅对此部分的series进行覆盖，详细参数解释见：<br>
<a href="https://echarts.apache.org/zh/option.html#series-funnel" target="_blank">https://echarts.apache.org/zh/option.html#series-funnel</a>。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Size',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="2">格式：</p>
<div data-v-md-line="4"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>size: {
        width: <span class="hljs-string">'80%'</span>,
        height:<span class="hljs-string">'80%'</span>,
        min: <span class="hljs-number">0</span>,
        max: <span class="hljs-number">100</span>,
        minSize: <span class="hljs-string">'0%'</span>,
        maxSize: <span class="hljs-string">'100%'</span>,
    }
</code></pre>
</div></div><p data-v-md-line="15">说明：通过配置<code>size</code>属性，来修改图表大小。<br><br>
<code>width</code>：图表的宽度，可自适应auto。<br><br>
<code>height</code>：图表的高度，可自适应auto。<br><br>
<code>min</code>：指定的数据最小值。<br><br>
<code>max</code>：指定的数据最大值。<br><br>
<code>minSize</code>：数据最小值min映射的宽度。<br><br>
<code>maxSize</code>：数据最大值max映射的宽度。<br>
以上属性均为ECharts漏斗图的原生属性，详情见：<br>
<a href="https://echarts.apache.org/examples/zh/editor.html?c=funnel" target="_blank">https://echarts.apache.org/examples/zh/editor.html?c=funnel</a>。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Sort',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>descending</code></p>
<p data-v-md-line="3">可选值：</p>
<p data-v-md-line="5"><code>descending</code>：降序 <br><br>
<code>ascending</code>：升序 <br><br>
<code>none</code>：默认按data顺序<br></p>
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
      \` & lt; div& gt;
          & lt; i style = "display:inline-block;width:10px;height:10px;background-color:\${item.color};" & gt;& lt; /i&gt;
    & lt; span style = "margin-left:5px;color:#ffffff" & gt;
              & lt; span style = "display:inline-block;width:100px;" & gt; \${ item.seriesName } User & lt; /span&gt;
    & lt; span style = "font-weight:bold" & gt; \${ item.value } %& lt; /span&gt;
    & lt; span style = "color:gray" & gt; out & lt; /span&gt;
    & lt; span style = "color:red" & gt; \${ 100 - item.value } %& lt; /span&gt;
    & lt; /span&gt;
    & lt; /div&gt;\`;
    });
return htmlString;
  }
};
</span ></code ></pre >
</div ></div > <p data-v-md-line="32">说明：通过回调函数的参数，自行制作一个 HTML 片段<br>
  详细参数解释见： <a target="_blank" href="https://echarts.apache.org/zh/option.html#tooltip.formatter">https://echarts.apache.org/zh/option.html#tooltip.formatter</a></p>
</div ></div ></div ></td></tr></div>`
    },
    {
      name: 'Event',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code> event:{
    series：{
      click:(parms)=&gt;{
        ...
      },
      mousemove:(params)=&gt;{
        ...
      },
      ...
    },
    ....
    }
</code></pre>
</div></div><p data-v-md-line="18">说明：自定义设置图表的处理事件,具体用法参考<a href="https://echarts.apache.org/zh/api.html#echartsInstance.on">https://echarts.apache.org/zh/api.html#echartsInstance.on</a></p>
</div></div></div></td></tr></div>`
    }
  ]
}
