export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-heatmap',
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
          typeAnchorName: 'Color',
          defaultValue: '随主题',
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
            'zh-CN': '配置热力图类型(必填)',
            'en-US': 'Configure heatmap type (required)'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'borderColor',
          type: 'string',
          defaultValue: '#1F55B5',
          typeAnchorName: 'BorderColor',
          desc: {
            'zh-CN': '日历热力图矩形边框色',
            'en-US': 'Calendar heatmap rectangle border color'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'showLabel',
          type: 'boolean',
          defaultValue: 'true',
          typeAnchorName: 'ShowLabel',
          desc: {
            'zh-CN': '日历热力图矩形文本显示',
            'en-US': 'Calendar heatmap rectangular text display'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'rectangleSize',
          type: 'number',
          defaultValue: '8',
          typeAnchorName: 'RectangleSize',
          desc: {
            'zh-CN': '矩形热力图矩形大小',
            'en-US': 'Rectangular heatmap with rectangular size'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'handle',
          type: 'object',
          defaultValue: '无',
          typeAnchorName: 'Handle',
          desc: {
            'zh-CN': '日历热力图手柄相关配置',
            'en-US': 'Calendar heatmap controller related configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'quantity',
          type: 'number',
          defaultValue: '40',
          typeAnchorName: 'Quantity',
          desc: {
            'zh-CN': '蜂窝热力图手柄相关配置',
            'en-US': 'Honeycomb heatmap handle related configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'changeProperty',
          type: 'string',
          defaultValue: 'opacity',
          typeAnchorName: 'ChangeProperty',
          desc: {
            'zh-CN': '日历热力图热力的变化设置',
            'en-US': 'Calendar heat map heat change settings'
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
            'en-US': 'Configure x-axis coordinate data'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'yAxis',
          type: 'object',
          defaultValue: '默认显示',
          typeAnchorName: 'YAxis',
          desc: {
            'zh-CN': '配置y轴',
            'en-US': 'Configure y-axis'
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
      name: 'BorderColor',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值:<code>'#1F55B5'</code></p>
<p data-v-md-line="3">说明：设置<code>CalendarHeatMapChart</code>图表的 borderColor,仅 type 为<code>CalendarHeatMapChart</code>有效</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'ChangeProperty',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>opcity</code></p>
<p data-v-md-line="3">可选值：<code>opcity,color</code></p>
<p data-v-md-line="5">说明：控制<code>CalendarHeatMapChart</code>图表根据什么来体现热力的变化,仅 type 为<code>CalendarHeatMapChart</code>时有效。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Data',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>type 为RectangularHeatMapChart时
<span class="hljs-comment">// [[x,y,z,name],[x,y,z,name],...]</span>
<span class="hljs-comment">// [维度X数据 维度Y数据 矩形透明度维度数据 单项数据名称]</span>
<span class="hljs-comment">// 坐标轴的数据根据相应维度数据从小到大排序生成。</span>
data:[
        [<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-string">'Australia'</span>],
        [<span class="hljs-number">30</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-string">'Canada'</span>],
        [<span class="hljs-number">40</span>, <span class="hljs-number">60</span>, <span class="hljs-number">29</span>, <span class="hljs-string">'China'</span>],
        ...
      ]

</code></pre>
</div></div><div data-v-md-line="17"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>type 为CalendarHeatMapChart时
<span class="hljs-comment">// [</span>
<span class="hljs-comment">//   { Name: 'Q1', Week:'Monday', Value: 88,},</span>
<span class="hljs-comment">//   { Name: 'Q1', Week:'Tuesday', Value: 66,},</span>
<span class="hljs-comment">//   { Name: 'Q1', Week:'Wednesday', Value: 78,}</span>
<span class="hljs-comment">//    ...</span>
<span class="hljs-comment">//  ]</span>
<span class="hljs-comment">// [{维度X数据 维度Y数据 单项数据}]</span>
<span class="hljs-comment">// Name:x 轴数据类别,属性名称自定义， Week:y 轴数据类别,属性名称自定义， Value:显示的文本,属性名称自定义。x,y 轴的数据类别显示顺序按照 data 中书写顺序决定。</span>
 data: [
            { Name: <span class="hljs-string">'Q1'</span>, Week:<span class="hljs-string">'Monday'</span>, Value: <span class="hljs-number">88</span>,},
            { Name: <span class="hljs-string">'Q1'</span>, Week:<span class="hljs-string">'Tuesday'</span>, Value: <span class="hljs-number">66</span>,},
            { Name: <span class="hljs-string">'Q1'</span>, Week:<span class="hljs-string">'Wednesday'</span>, Value: <span class="hljs-number">78</span>,},
            ...
            { Name: <span class="hljs-string">'Q2'</span>, Week:<span class="hljs-string">'Monday'</span>, Value: <span class="hljs-number">36</span>,},
            { Name: <span class="hljs-string">'Q2'</span>, Week:<span class="hljs-string">'Tuesday'</span>, Value: <span class="hljs-number">22</span>,},
            { Name: <span class="hljs-string">'Q2'</span>, Week:<span class="hljs-string">'Wednesday'</span>, Value: <span class="hljs-number">99</span>,},
            ...
            { Name: <span class="hljs-string">'Q3'</span>, Week:<span class="hljs-string">'Monday'</span>, Value: <span class="hljs-number">77</span>,},
            { Name: <span class="hljs-string">'Q3'</span>, Week:<span class="hljs-string">'Tuesday'</span>, Value: <span class="hljs-number">46</span>,},
            { Name: <span class="hljs-string">'Q3'</span>, Week:<span class="hljs-string">'Wednesday'</span>, Value: <span class="hljs-number">30</span>,},
            ...
        ]
</code></pre>
</div></div><div data-v-md-line="43"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>type 为HexagonHeatMapChart时
  data: [
            {
                name:<span class="hljs-string">'A'</span>,
                value:<span class="hljs-number">24</span>
            },
            ...
        ]
  <span class="hljs-comment">//name为节点的名称，value为节点的值</span>
</code></pre>
</div></div><p data-v-md-line="55">说明：图表的数据</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Handle',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：设置<code>CalendarHeatMapChart</code>图表的手柄，不传不显示手柄，仅 type 为<code>CalendarHeatMapChart</code>时有效。</p>
<div data-v-md-line="3"><p class="ev_expand_title">handle.inverse<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p><p class="ev_expand_introduce">默认值：<code>false</code>
</p><p class="ev_expand_introduce">可选值：<code>true, false</code>
</p><p class="ev_expand_introduce">说明：设置<code>CalendarHeatMapChart</code>图表的手柄两端文本是否反转显示
</p></div><div data-v-md-line="8"><p class="ev_expand_title">handle.text<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Array</span>
</p><p class="ev_expand_introduce">格式:[A,B]
</p><p class="ev_expand_introduce">默认值：data 第三个属性值的最大值和最小值
</p><p class="ev_expand_introduce">说明：设置<code>CalendarHeatMapChart</code>图表的手柄两端文本。
</p></div><div data-v-md-line="13"><p class="ev_expand_title">handle.calculable<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p><p class="ev_expand_introduce">默认值：<code>false</code>
</p><p class="ev_expand_introduce">可选值：<code>true, false</code>
</p><p class="ev_expand_introduce">说明：设置<code>CalendarHeatMapChart</code>图表的手柄滑块是否显示。
</p></div><div data-v-md-line="18"><p class="ev_expand_title">handle.orient<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p><p class="ev_expand_introduce">默认值：<code>vertical</code>
</p><p class="ev_expand_introduce">可选值：<code>vertical,horizontal</code>
</p><p class="ev_expand_introduce">说明：设置<code>CalendarHeatMapChart</code>图表的手柄显示方向。<code>vertical</code>表示垂直，<code>horizontal</code>表示水平。
</p></div><div data-v-md-line="23"><p class="ev_expand_title">handle.width<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p><p class="ev_expand_introduce">默认值：<code>20</code>
</p><p class="ev_expand_introduce">说明：设置<code>CalendarHeatMapChart</code>图表的手柄宽度。
</p></div><div data-v-md-line="27"><p class="ev_expand_title">handle.height<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p><p class="ev_expand_introduce">默认值：<code>400</code>
</p><p class="ev_expand_introduce">说明：设置<code>CalendarHeatMapChart</code>图表的手柄高度。
</p></div><div data-v-md-line="31"><p class="ev_expand_title">handle.position<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p><p class="ev_expand_introduce">默认值：<code>{right:'4%', bottom:'6%'}</code>
</p><p class="ev_expand_introduce">可选值：<code>top, left, right, bottom</code>
</p><p class="ev_expand_introduce">说明：设置<code>CalendarHeatMapChart</code>图表的手柄位置,top 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,left 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比, right 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,bottom 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比。
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'Quantity',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>40</code></p>
<p data-v-md-line="3">说明：设置<code>HexagonHeatMapChart</code>图表的蜂窝的排列数量,仅 type 为<code>HexagonHeatMapChart</code>时有效。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'RectangleSize',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值:<code>8</code></p>
<p data-v-md-line="3">说明：控制矩形的大小，仅 type 为<code>RectangularHeatMapChart</code>时有效。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'ShowLabel',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值:<code>true</code></p>
<p data-v-md-line="3">可选值：<code>true, false</code></p>
<p data-v-md-line="5">说明：设置<code>CalendarHeatMapChart</code>图表的图元的文本显示,仅 type 为<code>CalendarHeatMapChart</code>有效</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Type',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值:<code>true</code></p>
<p data-v-md-line="3">可选值：<code>true, false</code></p>
<p data-v-md-line="5">说明：设置<code>CalendarHeatMapChart</code>图表的图元的文本显示,仅 type 为<code>CalendarHeatMapChart</code>有效</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'YAxis',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式:</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>yAxis:{
        <span class="hljs-comment">// 设置单位</span>
         unit:<span class="hljs-string">'%'</span>,
        <span class="hljs-comment">// 设置刻度文本间隔</span>
        interval:<span class="hljs-number">29</span>,
        <span class="hljs-comment">// 坐标轴的位置</span>
        position:<span class="hljs-string">'right'</span>,
        <span class="hljs-comment">// 坐标轴的名称</span>
        name: <span class="hljs-string">'Number'</span>,
        <span class="hljs-comment">// 坐标轴的名称位置调整</span>
        nameTextStyle:{
            <span class="hljs-keyword">align</span>: <span class="hljs-string">'right'</span>,
            <span class="hljs-comment">// 用于调整y轴标题的位置</span>
            padding: [<span class="hljs-number">0</span>, -<span class="hljs-number">38</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]
        },
    },
</code></pre>
</div></div><div data-v-md-line="22"><p class="ev_expand_title">yAxis.unit<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="24"><p class="ev_expand_introduce">说明：设置y轴label的单位。
</p></div><div data-v-md-line="26"><p class="ev_expand_title">yAxis.interval<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Number | Function</span>
</p></div><div data-v-md-line="28"><p class="ev_expand_introduce">格式：
</p></div><div data-v-md-line="30"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>// 当interval为<span class="hljs-number">2</span>时，y轴的<span class="hljs-selector-tag">label</span>会每隔<span class="hljs-number">2</span>个显示
interval: <span class="hljs-number">2</span>;
</code></pre>
</div></div><div data-v-md-line="35"><p class="ev_expand_introduce">
</p></div><div data-v-md-line="37"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>// 当interval为function时，y轴的<span class="hljs-selector-tag">label</span>会根据函数的返回结果展示。
// 返回true表示显示
// 返回false表示不显示
// index表示当前x轴数据的索引,value表示当前x轴数据的值
interval: (index,value) =&gt; {
    if (index % <span class="hljs-number">24</span> === <span class="hljs-number">0</span>) {
        return true;
    }
    if (index === <span class="hljs-number">61</span>) {
        return true;
    }
    return  false;
},
</code></pre>
</div></div><div data-v-md-line="53"><p class="ev_expand_introduce">说明：自定义 y 轴label显示，仅 type 为<code>CalendarHeatMapChart</code>时有效。
</p></div><div data-v-md-line="55"><p class="ev_expand_title">yAxis.position<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="57"><p class="ev_expand_introduce">默认值：<code>'left'</code>
</p></div><div data-v-md-line="59"><p class="ev_expand_introduce">可选值：<code>'left','right'</code>
</p></div><div data-v-md-line="61"><p class="ev_expand_introduce">说明：设置y轴的位置。
</p></div><div data-v-md-line="63"><p class="ev_expand_title">yAxis.name<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="65"><p class="ev_expand_introduce">说明：设置y轴label的名称,此时不用配置yAxisName属性。
</p></div><div data-v-md-line="67"><p class="ev_expand_title">yAxis.nameTextStyle<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Obiect</span>
</p></div><div data-v-md-line="69"><p class="ev_expand_introduce">说明：设置y轴名称样式，具体属性参考https://echarts.apache.org/zh/option.html#yAxis.nameTextStyle。
</p></div></div></div></div></td></tr></div>`
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
              & lt; span style = "display:inline-block;width:100px;" & gt;\${ item.seriesName } User & lt; /span&gt;
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
        <code>
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
    }
  ]
}
