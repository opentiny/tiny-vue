export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-candle',
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
          name: 'dataZoom',
          type: 'object',
          defaultValue: '[50,20,50,20]',
          typeAnchorName: 'DataZoom',
          desc: {
            'zh-CN': '区域缩放轴配置',
            'en-US': 'Regional scaling axis configuration'
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
          name: 'MA',
          type: 'array',
          defaultValue: '无',
          typeAnchorName: 'Ma',
          desc: {
            'zh-CN': 'k线图的MA数据均线',
            'en-US': 'MA data moving average of K-line chart'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'volume',
          type: 'boolean',
          defaultValue: '无',
          typeAnchorName: 'Volume',
          desc: {
            'zh-CN': '显示volume数据',
            'en-US': 'Display volume data'
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
          name: 'upColor',
          type: 'string',
          defaultValue: '错误主题色',
          typeAnchorName: 'UpColor',
          desc: {
            'zh-CN': '上行数据颜色',
            'en-US': 'Upward data color'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'downColor',
          type: 'string',
          defaultValue: '成功主题色',
          typeAnchorName: 'DownColor',
          desc: {
            'zh-CN': '下行数据颜色',
            'en-US': 'Downward data color'
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
  { time: <span class="hljs-string">'2013/1/24'</span>,open: <span class="hljs-number">2320.26</span>,close:<span class="hljs-number">2320.26</span>,lowest:<span class="hljs-number">2287.3</span>,highest:<span class="hljs-number">2362.94</span>,volume:<span class="hljs-number">197310000</span>},
  { time: <span class="hljs-string">'2013/1/25'</span>,open:<span class="hljs-number">2300</span>,close:<span class="hljs-number">2291.3</span>,lowest:<span class="hljs-number">2288.26</span>,highest:<span class="hljs-number">2308.38</span>,volume:<span class="hljs-number">221290000</span>}, 
  { time: <span class="hljs-string">'2013/1/26'</span>,open:<span class="hljs-number">2295.35</span>,close:<span class="hljs-number">2346.5</span>,lowest:<span class="hljs-number">2295.35</span>,highest:<span class="hljs-number">2346.92</span>,volume:<span class="hljs-number">191460000</span>}, 
  ...
];
</code></pre>
</div></div><p data-v-md-line="11">说明：图表数据 , time 为 x 轴数据 , open为开盘价, close 为 收盘价, lowest为最低价,  highest 为最高价,volume为成交价<br><br>
open、close、lowest、highest、volume属性名称不可更换，volume可选，如没有volume则不配<br>
time名称（key 值）可更换,通过配置xAxis:{keyName:“key”}实现自定义<br></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'DownColor',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：配置k线图的下行数据的颜色</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Ma',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：控制k线图的数据均线显示,数组中的数值代表你想显示的数据均线的天数，确保data中的数据包含MA中所填的数据天数<br><br>
格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>MA:[<span class="hljs-number">5</span>,<span class="hljs-number">10</span>,<span class="hljs-number">20</span>]
</code></pre>
</div></div></div></div></div></td></tr></div>`
    },
    {
      name: 'Padding',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：<code>padding仅在不显示的volume的时候可用!!!</code><br><br>
设置图表四个方向的 <code>padding</code> 值<br><br>
<code>padding : [top, right, bottom, left]</code><br><br>
top 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比，也可以是 ‘top’ ， ‘middle’ ， ‘bottom’<br><br>
left 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比，也可以是 ‘left’ ， ‘center’ ， ‘right’<br><br>
right 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比<br><br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'UpColor',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：配置k线图的上行数据的颜色</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Volume',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：控制图表中是否显示volume数据<code>如需使用这个功能，图表data中需要配置volume字段</code></p>
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
      name: 'DataZoom',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>dataZoom:{
    start:<span class="hljs-number">0</span>,
    end:<span class="hljs-number">100</span>,
    show:<span class="hljs-literal">false</span>,
    position:{
        left:<span class="hljs-number">36</span>,
        bottom:<span class="hljs-number">20</span>
    },
    height:<span class="hljs-number">24</span>
}
</code></pre>
</div></div><p data-v-md-line="16">说明：设置折线图区域缩放轴是否展示及位置</p>
<div data-v-md-line="18"><p class="ev_expand_title">dataZoom.start<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="20"><p class="ev_expand_introduce">默认值：<code>0</code>
</p></div><div data-v-md-line="22"><p class="ev_expand_introduce">说明：区域缩放轴的数据窗口范围的起始百分比
</p></div><div data-v-md-line="24"><p class="ev_expand_title">dataZoom.end<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="26"><p class="ev_expand_introduce">默认值：<code>100</code>
</p></div><div data-v-md-line="28"><p class="ev_expand_introduce">说明：区域缩放轴的数据窗口范围的结束百分比
</p></div><div data-v-md-line="30"><p class="ev_expand_title">dataZoom.show<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="32"><p class="ev_expand_introduce">默认值：<code>false</code>
</p></div><div data-v-md-line="34"><p class="ev_expand_introduce">说明：是否展示区域缩放轴
</p></div><div data-v-md-line="36"><p class="ev_expand_title">dataZoom.position<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="38"><p class="ev_expand_introduce">默认值：<code>position:{left:36,bottom:20}</code>
</p></div><div data-v-md-line="40"><p class="ev_expand_introduce">说明：<br>
自定义区域缩放轴的位置<br>
<code>position:{top, left, right, bottom}</code><br>
top 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top'  ，  'middle'  ，  'bottom'<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left'  ，  'center'  ，  'right'<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 '20%' 这样相对于容器高宽的百分比
</p></div><div data-v-md-line="48"><p class="ev_expand_title">dataZoom.style<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="50"><p class="ev_expand_introduce">格式：
</p></div><div data-v-md-line="52"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code> style:{
          // 背景底色
          backgroundColor: <span class="hljs-string">'#111'</span>,
          // 选中区域数据填充色
          selectDataColor:<span class="hljs-string">'#314461'</span>,
          // 未选中区域数据填充色
          unSelectDataColor:<span class="hljs-string">'#454749'</span>,
          // 选中区域的蒙层颜色
          middleFillerColor:<span class="hljs-string">'rgba(49,68,97,.5)'</span>,
          // 设置手柄样式
          handleStyle:{
            <span class="hljs-attribute">color</span>:<span class="hljs-string">'red'</span>,
            borderColor:<span class="hljs-string">'yellow'</span>,
            shadowColor:<span class="hljs-string">'blue'</span>
          }
        }
</code></pre>
</div></div><div data-v-md-line="71"><p class="ev_expand_introduce">说明：自定义区域缩放轴的相关颜色样式配置
</p></div><div data-v-md-line="73"><p class="ev_expand_title">dataZoom.height<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="75"><p class="ev_expand_introduce">默认值：<code>24</code>
</p></div><div data-v-md-line="77"><p class="ev_expand_introduce">说明：设置区域缩放轴的高度
</p></div></div></div></div></td></tr></div> `
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
