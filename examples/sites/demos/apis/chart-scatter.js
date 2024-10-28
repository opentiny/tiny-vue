export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-scatter',
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
            'zh-CN': '图表颜色',
            'en-US': 'Chart color'
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
          name: 'event',
          type: 'object',
          defaultValue: '默认不触发',
          typeAnchorName: 'Event',
          desc: {
            'zh-CN': '图表事件',
            'en-US': 'Chart event'
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
          name: 'bubbleSize',
          type: 'array',
          defaultValue: '[10,70]',
          typeAnchorName: 'BubbleSize',
          desc: {
            'zh-CN': '气泡大小范围',
            'en-US': 'Bubble size range'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'trendLineConfig',
          type: 'object',
          defaultValue: '无',
          typeAnchorName: 'TrendLineConfig',
          desc: {
            'zh-CN': '配置趋势线',
            'en-US': 'Configure trend lines'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'xAxis',
          type: 'object',
          defaultValue: '默认显示',
          typeAnchorName: 'XAxis',
          desc: {
            'zh-CN': '配置x轴坐标数据',
            'en-US': 'Configure x-axis'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'xAxisType',
          type: 'string',
          defaultValue: '自适应',
          typeAnchorName: 'XAxisType',
          desc: {
            'zh-CN': 'x轴类型',
            'en-US': 'xAxis type'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'yAxis',
          type: 'array | object',
          defaultValue: '默认显示',
          typeAnchorName: 'YAxis',
          desc: {
            'zh-CN': '配置y轴',
            'en-US': 'Configure y-axis'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'yAxisName',
          type: 'string',
          defaultValue: '无',
          typeAnchorName: 'YAxisName',
          desc: {
            'zh-CN': '配置y轴文本',
            'en-US': 'Configure y-axis text'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'symbol',
          type: 'string',
          defaultValue: 'circle',
          typeAnchorName: 'Symbol',
          desc: {
            'zh-CN': '节点图形类型',
            'en-US': 'Node Shape Type'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'symbolOpacity',
          type: 'number',
          defaultValue: '0.2',
          typeAnchorName: 'SymbolOpacity',
          desc: {
            'zh-CN': '图元设置透明度',
            'en-US': 'Set transparency for graphic elements'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'symbolRotate',
          type: 'number',
          defaultValue: '0',
          typeAnchorName: 'SymbolRotate',
          desc: {
            'zh-CN': '节点图形旋转角度',
            'en-US': 'Node Shape Rotation Angle'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'symbolOffset',
          type: 'array',
          defaultValue: '[0, 0]',
          typeAnchorName: 'SymbolOffset',
          desc: {
            'zh-CN': '节点图形偏移值',
            'en-US': 'Node shape offset value'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'cursor',
          type: 'string',
          defaultValue: 'pointer',
          typeAnchorName: 'Cursor',
          desc: {
            'zh-CN': '鼠标悬浮在节点图形的样式',
            'en-US': 'The style of hovering the mouse over the node shape'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'markLine',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'MarkLine',
          desc: {
            'zh-CN': '阈值线',
            'en-US': 'Threshold line'
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
            'zh-CN': '节点图形的文本样式',
            'en-US': 'Text style of node graphics'
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
            'zh-CN': '节点图形的样式',
            'en-US': 'Style of node graphics'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'blur',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'Blur',
          desc: {
            'zh-CN': '节点图形失去焦点的样式',
            'en-US': 'The style of node graphics losing focus'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'emphasis',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'Emphasis',
          desc: {
            'zh-CN': '高亮的图形和标签样式',
            'en-US': 'Highlighted graphics and label styles'
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
      name: 'Legend',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-javascript extra-class"><pre class="v-md-hljs-javascript"><code><span class="hljs-attr">legend</span>: {
    <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">position</span>:{
        <span class="hljs-attr">left</span>:<span class="hljs-string">'center'</span>,
        <span class="hljs-attr">bottom</span>:<span class="hljs-number">15</span>
    },
    <span class="hljs-attr">itemGap</span>:<span class="hljs-number">28</span>,
    <span class="hljs-attr">orient</span>:<span class="hljs-string">'horizontal'</span>,
    <span class="hljs-attr">reverseEvent</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">selectedMode</span>:<span class="hljs-literal">true</span>,
    <span class="hljs-attr">icon</span>:<span class="hljs-string">'circle'</span>,
    <span class="hljs-attr">itemHeight</span>:<span class="hljs-number">14</span>,
    <span class="hljs-attr">itemWeight</span>:<span class="hljs-number">14</span>,
    <span class="hljs-attr">textStyle</span>:{
        <span class="hljs-attr">fontSize</span>:<span class="hljs-number">12</span>,
        <span class="hljs-attr">padding</span>:[<span class="hljs-number">4</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>]，
        <span class="hljs-attr">color</span>:<span class="hljs-string">'#4e4e4e'</span>,
        <span class="hljs-attr">overflow</span>:<span class="hljs-string">'none'</span>,
    }
}
</code></pre>
</div></div><p data-v-md-line="26">说明：自定义图例</p>
<div data-v-md-line="28"><p class="ev_expand_title">legend.show<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="30"><p class="ev_expand_introduce">默认值：<code>false</code>
</p></div><div data-v-md-line="32"><p class="ev_expand_introduce">说明：图例是否显示
</p></div><div data-v-md-line="34"><p class="ev_expand_title">legend.itemGap<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="36"><p class="ev_expand_introduce">默认值：<code>28</code>
</p></div><div data-v-md-line="38"><p class="ev_expand_introduce">说明：设置图例的间隔
</p></div><div data-v-md-line="40"><p class="ev_expand_title">legend.type<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="42"><p class="ev_expand_introduce">说明：图例组件显示模式，当 type = 'scroll' 时，配合 legend.width 实现滚动翻页效果
</p></div><div data-v-md-line="44"><p class="ev_expand_title">legend.width<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="46"><p class="ev_expand_introduce">说明：图例组件的整体宽度
</p></div><div data-v-md-line="48"><p class="ev_expand_title">legend.height<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="50"><p class="ev_expand_introduce">说明：图例组件的整体高度
</p></div><div data-v-md-line="52"><p class="ev_expand_title">legend.position<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="54"><p class="ev_expand_introduce">默认值：
</p></div><div data-v-md-line="56"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code><span class="hljs-attribute">position</span>:{
    <span class="hljs-attribute">left</span>:<span class="hljs-string">'center'</span>,
    bottom:<span class="hljs-number">15</span>
}
</code></pre>
</div></div><div data-v-md-line="63"><p class="ev_expand_introduce">说明：<br>
自定义图例的位置<br>
<code>position : {top, left, right, bottom}</code><br>
top 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top'  ，  'middle'  ，  'bottom'<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left'  ，  'center'  ，  'right'<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比
</p></div><div data-v-md-line="71"><p class="ev_expand_title">legend.orient<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="73"><p class="ev_expand_introduce">默认值：<code>horizontal</code>(水平)
</p></div><div data-v-md-line="75"><p class="ev_expand_introduce">可选值：<code>horizontal</code>（水平） 、 <code>vertical</code>（垂直）
</p></div><div data-v-md-line="77"><p class="ev_expand_introduce">说明：图例的方向
</p></div><div data-v-md-line="79"><p class="ev_expand_title">legend.reverseEvent<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="81"><p class="ev_expand_introduce">默认值：<code>false</code>
</p></div><div data-v-md-line="83"><p class="ev_expand_introduce">说明：图例是否支持双击反选（设置为true时，500ms内连续点击图例即视为反选）;<br>图例单击，切换自己，不影响其他图例；图例双击，图例状态全部反选。
</p></div><div data-v-md-line="85"><p class="ev_expand_title">legend.selectedMode<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="87"><p class="ev_expand_introduce">默认值：<code>true</code>
</p></div><div data-v-md-line="89"><p class="ev_expand_introduce">说明：是否可以通过点击图例改变系列的显示状态
</p></div><div data-v-md-line="91"><p class="ev_expand_title">legend.icon<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="93"><p class="ev_expand_introduce">默认值：<code>circle</code>（圆形）
</p></div><div data-v-md-line="95"><p class="ev_expand_introduce">可选值：<code>circle</code>（圆形）、<code>line</code>（线段） 、<code>rect</code>（长方形） 、 <code>roundRect</code>（圆角长方形） 、 <code>triangle</code>（三角形） 、 <code>diamond</code>（菱形）
</p></div><div data-v-md-line="97"><p class="ev_expand_introduce">说明：图例的图标 ， 若定义了 <code>legend.data</code> ， 则此属性失效
</p></div><div data-v-md-line="99"><p class="ev_expand_title">legend.data<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Array</span>
</p></div><div data-v-md-line="101"><p class="ev_expand_introduce">样式：
</p></div><div data-v-md-line="103"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>data:[
    {
        <span class="hljs-attribute">icon</span>:<span class="hljs-string">'image://public/image/LineChart/Domestic.png'</span>,
        iconChange:<span class="hljs-string">'image://public/image/LineChart/change.png'</span>,
        name:<span class="hljs-string">'Domestic'</span>,
    },
    {
        <span class="hljs-attribute">icon</span>:<span class="hljs-string">'image://public/image/LineChart/Abroad.png'</span>,
        iconChange:<span class="hljs-string">'image://public/image/LineChart/change.png'</span>,
        name:<span class="hljs-string">'Abroad'</span>,
    }
    ],
</code></pre>
</div></div><div data-v-md-line="118"><p class="ev_expand_introduce">说明：<br>
针对不同的图例图标以数组的方式管理 ， 定义此属性后则 <code>legend.icon</code> 失效<br><code>icon</code>:图例未选中时的背景 ， 可使用 base64 编码的路径格式<br><code>iconChange</code>:图例选中时的背景 ， 可使用 base64 编码的路径格式<br><code>name</code>:图例对应的名称
</p></div><div data-v-md-line="121"><p class="ev_expand_title">legend.itemHeight<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Nmuber</span>
</p></div><div data-v-md-line="123"><p class="ev_expand_introduce">默认值：<code>14</code>
</p></div><div data-v-md-line="125"><p class="ev_expand_introduce">说明：图例图标的高度
</p></div><div data-v-md-line="127"><p class="ev_expand_title">legend.itemWidth<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Nmuber</span>
</p></div><div data-v-md-line="129"><p class="ev_expand_introduce">默认值：<code>14</code>
</p></div><div data-v-md-line="131"><p class="ev_expand_introduce">说明：图例图标的宽度 ， <code>legend.icon</code> 不为 <code>circle</code> 时 ， 此默认值为 25
</p></div><div data-v-md-line="133"><p class="ev_expand_title">legend.formatter<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">String/Function</span>
</p></div><div data-v-md-line="135"><p class="ev_expand_introduce">说明：用来自定义图例的文本显示。
</p></div><div data-v-md-line="137"><p class="ev_expand_title">legend.textStyle<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="139"><p class="ev_expand_introduce">默认值：
</p></div><div data-v-md-line="141"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>textStyle:{
    fontSize:<span class="hljs-number">12</span>,
    padding:[<span class="hljs-number">4</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>]，
    color:<span class="hljs-string">'#4e4e4e'</span>,
    overflow:<span class="hljs-string">'none'</span>,
    width:<span class="hljs-number">50</span>,
    rich:{  // 图例文本富文本配置
      title:{  // 文本对应的名称
        align:<span class="hljs-string">'right'</span>, // 设置文本右对齐
        width:<span class="hljs-number">100</span>  // 设置文本显示宽度
      }
    }
}
</code></pre>
</div></div><div data-v-md-line="157"><p class="ev_expand_introduce">说明：图例图标的富文本配置 ， <code>theme=light</code>,color='#4e4e4e' ， <code>theme=dark</code>,color='#bbbbbb'。<code>width</code>设置每个图例文本的宽度，<code>overflow</code>设置图例文本过长后的显示状态，可选：none：不设置、truncate：截断且显示省略号、break：中文换行、breakAll：强制单词换行。
</p></div><div data-v-md-line="159"><p class="ev_expand_title">legend.tooltip<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="161"><p class="ev_expand_introduce">示例：
</p></div><div data-v-md-line="163"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>tooltip:{
    show: true
}
</code></pre>
</div></div><div data-v-md-line="169"><p class="ev_expand_introduce">说明：图例是否显示悬浮提示框
</p></div></div></div></div></td></tr></div>`
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
    },
    {
      name: 'Data',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code><span class="hljs-comment">/*{
*    [维度X 维度Y 气泡半径维度 数据名称 数据分组 ...其他数据]
*    [维度X 维度Y 气泡半径维度 数据名称 数据分组 ...其他数据]
*    ...
* }
*/</span>
data:{
        <span class="hljs-string">'1990'</span>: [
            [<span class="hljs-number">28604</span>, <span class="hljs-number">77</span>, <span class="hljs-number">17096869</span>, <span class="hljs-string">'Australia'</span>, <span class="hljs-number">1990</span>],
            [<span class="hljs-number">31163</span>, <span class="hljs-number">77.4</span>, <span class="hljs-number">27662440</span>, <span class="hljs-string">'Canada'</span>, <span class="hljs-number">1990</span>],
            [<span class="hljs-number">60001</span>, <span class="hljs-number">68</span>, <span class="hljs-number">1154605773</span>, <span class="hljs-string">'China'</span>, <span class="hljs-number">1990</span>],
            ...
        ],
        <span class="hljs-string">'2000'</span>: [
            [<span class="hljs-number">19349</span>, <span class="hljs-number">69.6</span>, <span class="hljs-number">147568552</span>, <span class="hljs-string">'Russia'</span>, <span class="hljs-number">2000</span>],
            [<span class="hljs-number">10670</span>, <span class="hljs-number">67.3</span>, <span class="hljs-number">53994605</span>, <span class="hljs-string">'Turkey'</span>, <span class="hljs-number">2000</span>],
            [<span class="hljs-number">26424</span>, <span class="hljs-number">75.7</span>, <span class="hljs-number">57110117</span>, <span class="hljs-string">'United Kingdom'</span>, <span class="hljs-number">2000</span>],
            ...
        ],
        <span class="hljs-string">'2015'</span>: [
            [<span class="hljs-number">44056</span>, <span class="hljs-number">81.8</span>, <span class="hljs-number">23968973</span>, <span class="hljs-string">'Australia'</span>, <span class="hljs-number">2015</span>],
            [<span class="hljs-number">43294</span>, <span class="hljs-number">81.7</span>, <span class="hljs-number">35939927</span>, <span class="hljs-string">'Canada'</span>, <span class="hljs-number">2015</span>],
            [<span class="hljs-number">13334</span>, <span class="hljs-number">76.9</span>, <span class="hljs-number">1376048943</span>, <span class="hljs-string">'China'</span>, <span class="hljs-number">2015</span>],
            ...
        ],
        ...
    },


</code></pre>
</div></div><p data-v-md-line="35">说明： 数据(data 属性)顺序必须严格按照指定的维度来摆放，data 里面可以配置多个数组来实现多组数据</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'BubbleSize',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>[10, 70]</code></p>
<p data-v-md-line="3">说明：气泡大小范围,气泡半径维度决定了气泡的大小,bubbleSize 决定了气泡大下的上下限</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'TrendLineConfig',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明： 显示图表的趋势线。注意！在使用趋势线功能时，需要额外 <code>npm install echarts-stat -d </code>,<code>trendLineConfig</code> 为趋势线配置，开发人员可根据当前数据的形态，选择合理的趋势线函数,详细的配置文档可见 https://echarts.apache.org/handbook/zh/concepts/data-transform/#使用外部的数据转换器</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'XAxis',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>Object类型
xAxis:{
    name:<span class="hljs-string">'Utils'</span>,
    line:{
        show:<span class="hljs-literal">true</span>,
        lineStyle:{
            color:<span class="hljs-string">'red'</span>,
            type:<span class="hljs-string">'dashed'</span>,
            width:<span class="hljs-number">2</span>
        }
    },
    interval:<span class="hljs-number">2</span>,
    fullGrid:<span class="hljs-literal">true</span>,
    labelRotate:<span class="hljs-number">45</span>,
}
</code></pre>
</div></div><p data-v-md-line="21">说明：自定义 x 轴配置(将<code>xAxisName</code>、<code>xAxisLine</code>、<code>xAxisInterval</code>、<code>xAxisFullGrid</code>、<code>xAxisLabelRotate</code>属性统一整合到 <code>Object</code> 类型的 <code>xAxis</code> 内部)</p>
<div data-v-md-line="23"><p class="ev_expand_title">xAxis.name<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="25"><p class="ev_expand_introduce">说明：配置x轴文本名称（<code>xAxis.name</code>即<code>xAxisName</code>）
</p></div><div data-v-md-line="27"><p class="ev_expand_title">xAxis.line<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="29"><p class="ev_expand_introduce">默认值：
<code>css
xAxisLine: {
        show: true,
        lineStyle: {
          color: theme === 'dark' ? rgba(238, 238, 238, .1) : rgba(25, 25, 25, .1),
          type: 'solid',
          width: 2
        }
      }
        </code>
</p><p class="ev_expand_introduce">说明：设置 x 轴样式(<code>xAxis.line</code>即<code>xAxisLine</code>)
</p></div><div data-v-md-line="42"><p class="ev_expand_title">xAxis.interval<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number | Function</span>
</p></div><div data-v-md-line="44"><p class="ev_expand_introduce">默认值：<code>0</code>
</p></div><div data-v-md-line="46"><p class="ev_expand_introduce">格式：
</p></div><div data-v-md-line="48"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>// 当xAxisInterval为<span class="hljs-number">2</span>时，x轴的<span class="hljs-selector-tag">label</span>会每隔<span class="hljs-number">2</span>个显示
xAxisInterval: <span class="hljs-number">2</span>
</code></pre>
</div></div><div data-v-md-line="53"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>// 当xAxisInterval为function时，x轴的<span class="hljs-selector-tag">label</span>会根据函数的返回结果展示。
// 返回true表示显示
// 返回false表示不显示
// index表示当前x轴数据的索引,value表示当前x轴数据的值
xAxisInterval: (index,value) =&gt; {
    if (index % <span class="hljs-number">24</span> === <span class="hljs-number">0</span>) {
        return true;
    }
    if (index === <span class="hljs-number">61</span>) {
        return true;
    }
    return  false;
},
</code></pre>
</div></div><div data-v-md-line="69"><p class="ev_expand_introduce">说明：设置 x 轴 label 的间距 ， 默认不设置时 ， 会根据图表宽度自适应（<code>xAxis.interval</code>即<code>xAxisInterval</code>）
</p></div><div data-v-md-line="71"><p class="ev_expand_title">xAxis.fullGrid<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="73"><p class="ev_expand_introduce">默认值：<code>false</code>
</p><p class="ev_expand_introduce">说明：设置图表是否顶格到 x 轴左右两边(<code>xAxis.fullGrid</code>即<code>xAxisFullGrid</code>)
</p></div><div data-v-md-line="76"><p class="ev_expand_title">xAxis.labelRotate<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="78"><p class="ev_expand_introduce">默认值：<code>false</code>
</p><p class="ev_expand_introduce">说明：设置 x 轴文本的旋转角度取值范围 -90 度到 90 度(<code>xAxis.labelRotate&lt;/ode&gt;即<code>xAxisLabelRotate</code>)
</code></p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'XAxisType',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：配置 x 轴的类型</p>
<p data-v-md-line="3">此属性组件内部已经进行封装，不用单独配置。<br><br>
如果配置的 data 属性中维度 X 为字符串类型，则组件默认设置为<code>category</code>类目轴，否则为<code>value</code>数值轴</p>
<p data-v-md-line="6">可选：<code>value</code> 数值轴、<code>category</code> 类目轴</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'YAxis',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>数组格式
yAxis: [
    {
        max:<span class="hljs-number">60</span>,
        min:<span class="hljs-number">0</span>,
        interval:<span class="hljs-number">10</span>,
        position:<span class="hljs-string">'left'</span>,
        dataName:[<span class="hljs-string">'Domestic'</span>],
        name:<span class="hljs-string">'value'</span>,
        unit:<span class="hljs-string">'元'</span>,
        nameTextStyle:{
            padding:[<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,-<span class="hljs-number">45</span>]
        }
    },
    {
        max:<span class="hljs-number">90</span>,
        min: <span class="hljs-number">0</span>,
        interval:<span class="hljs-number">15</span>,
        position:<span class="hljs-string">'right'</span>,
        dataName:[<span class="hljs-string">'Abroad'</span>],
        name: <span class="hljs-string">'kal'</span>,
        unit: <span class="hljs-string">'$'</span>,
        offset:<span class="hljs-number">45</span>,
        nameTextStyle:{
            padding:[<span class="hljs-number">0</span>,-<span class="hljs-number">45</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>]
        }
    }
    ],
</code></pre>
</div></div><div data-v-md-line="34"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>对象格式
yAxis:
    {
        max: <span class="hljs-number">60</span>,
        min: <span class="hljs-number">0</span>,
        interval:<span class="hljs-number">5</span>,
        position:<span class="hljs-string">'right'</span>,
        name: <span class="hljs-string">'Percent(%)'</span>,
        unit: <span class="hljs-string">'%'</span>,
        minInterval:<span class="hljs-number">12</span>,
        maxInterval:<span class="hljs-number">8</span>
    },
</code></pre>
</div></div><p data-v-md-line="49">说明：自定义 y 轴配置</p>
<div data-v-md-line="51"><p class="ev_expand_title">yAxis.max<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="53"><p class="ev_expand_introduce">说明：自定义 y 轴最大值
</p></div><div data-v-md-line="55"><p class="ev_expand_title">yAxis.min<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="57"><p class="ev_expand_introduce">默认值：<code>0</code>
</p></div><div data-v-md-line="59"><p class="ev_expand_introduce">说明：自定义 y 轴最小值
</p></div><div data-v-md-line="61"><p class="ev_expand_title">yAxis.interval<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="63"><p class="ev_expand_introduce">说明：自定义 y 轴数值刻度
</p></div><div data-v-md-line="65"><p class="ev_expand_title">yAxis.splitNumber<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="67"><p class="ev_expand_introduce">说明：自定义 y 轴分割线数量 ， 在定义 yAXis.interval 时 ， 此属性失效
</p></div><div data-v-md-line="69"><p class="ev_expand_title">yAxis.position<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="71"><p class="ev_expand_introduce">默认值：<code>left</code>
</p></div><div data-v-md-line="73"><p class="ev_expand_introduce">可选值：<code>left</code> 、 <code>right</code>
</p></div><div data-v-md-line="75"><p class="ev_expand_introduce">说明：自定义 y 轴位置
</p></div><div data-v-md-line="77"><p class="ev_expand_title">yAxis.name<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="79"><p class="ev_expand_introduce">说明：自定义 y 轴名称
</p></div><div data-v-md-line="81"><p class="ev_expand_title">yAxis.nameTextStyle<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="83"><p class="ev_expand_introduce">格式：
</p></div><div data-v-md-line="85"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>nameTextStyle:
    {
        align:<span class="hljs-string">'right'</span>,
        padding:[<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>],
        color:<span class="hljs-string">'red'</span>,
        fontSize:<span class="hljs-number">30</span>
    }
</code></pre>
</div></div><div data-v-md-line="95"><p class="ev_expand_introduce">说明：自定义 y 轴标题文本样式
</p></div><div data-v-md-line="97"><p class="ev_expand_title">yAxis.unit<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="99"><p class="ev_expand_introduce">说明：自定义 y 轴刻度单位
</p></div><div data-v-md-line="101"><p class="ev_expand_title">yAxis.dataName<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Array</span>
</p></div><div data-v-md-line="103"><p class="ev_expand_introduce">默认值：全部的折线数据
</p></div><div data-v-md-line="105"><p class="ev_expand_introduce">说明：自定义哪条折线数据采用此 y 轴的属性，该属性仅在 <code>yAxis</code> 类型为 <code>Array</code> 时会生效。当有折线数据名未被 <code>dataName</code> 所包含，改折线数据样式按照 <code>yAxis[0]</code>配置
</p></div><div data-v-md-line="107"><p class="ev_expand_title">yAxis.offset<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="109"><p class="ev_expand_introduce">默认值：<code>0</code>
</p></div><div data-v-md-line="111"><p class="ev_expand_introduce">说明：自定义 y 轴相对于默认位置的偏移量
</p></div><div data-v-md-line="113"><p class="ev_expand_title">yAxis.show<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="115"><p class="ev_expand_introduce">默认值：<code>true</code>
</p></div><div data-v-md-line="117"><p class="ev_expand_introduce">说明：y 轴是否显示
</p></div><div data-v-md-line="119"><p class="ev_expand_title">yAxis.labelTextStyle<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="121"><p class="ev_expand_introduce">默认值：<code>{color:theme==='dark'?#bbbbbb:#4e4e4e,fontSize:12}</code>
</p></div><div data-v-md-line="123"><p class="ev_expand_introduce">说明：配置y轴刻度文本样式
</p></div><div data-v-md-line="125"><p class="ev_expand_title">yAxis.minInterval<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="127"><p class="ev_expand_introduce">说明：配置y轴最小刻度间隔
</p></div><div data-v-md-line="129"><p class="ev_expand_title">yAxis.maxInterval<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="131"><p class="ev_expand_introduce">说明：配置y轴最大刻度间隔
</p></div><div data-v-md-line="133"><p class="ev_expand_title">yAxis.splitLine<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="135"><p class="ev_expand_introduce">默认值：
</p></div><div data-v-md-line="137"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>splitLine:{
    show:true,
    lineStyle:{
        <span class="hljs-attribute">color</span>:theme===<span class="hljs-string">'dark'</span>?<span class="hljs-built_in">rgba</span>(<span class="hljs-number">238</span>,<span class="hljs-number">238</span>,<span class="hljs-number">238</span>,.<span class="hljs-number">1</span>):<span class="hljs-built_in">rgba</span>(<span class="hljs-number">25</span>,<span class="hljs-number">25</span>,<span class="hljs-number">25</span>,.<span class="hljs-number">1</span>),
        type:<span class="hljs-string">'solid'</span>,
        width:<span class="hljs-number">2</span>
    }
}
</code></pre>
</div></div><div data-v-md-line="148"><p class="ev_expand_introduce">说明：配置y轴刻度线样式
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'YAxisName',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明： y 轴的名称</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Symbol',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：配置节点图形类型</p>
<p data-v-md-line="3">默认值：<code>circle</code></p>
<p data-v-md-line="5">可选值：<code>circle</code>, <code>rect</code>, <code>roundRect</code>, <code>triangle</code>, <code>diamond</code>, <code>pin</code>, <code>arrow</code>, <code>none</code></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'SymbolOpacity',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：配置图元透明度</p>
<p data-v-md-line="3">默认值：<code>0.2</code></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'SymbolRotate',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：配置节点图形旋转角度</p>
<p data-v-md-line="3">默认值：<code>0</code></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'SymbolOffset',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：配置节点图形偏移值</p>
<p data-v-md-line="3">默认值：<code>[0,0]</code></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Cursor',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。</p>
<p data-v-md-line="3">默认值：<code>pointer</code></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'MarkLine',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：<code>{x: 50000, y: 70}</code></p>
<p data-v-md-line="3">说明： 显示图表的阈值线。注意！在气泡图下，在使用阈值线的同时，需要手动配置数据分组，数据颜色</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Label',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">此属性配置和eCharts一致，详细配置请参考：https://echarts.apache.org/en/option.html#series-scatter</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'ItemStyle',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">此属性配置和eCharts一致，详细配置请参考：https://echarts.apache.org/en/option.html#series-scatter</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Blur',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">此属性配置和eCharts一致，详细配置请参考：https://echarts.apache.org/en/option.html#series-scatter</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Emphasis',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">此属性配置和eCharts一致，详细配置请参考：https://echarts.apache.org/en/option.html#series-scatter</p>
</div></div></div></td></tr></div>`
    }
  ]
}
