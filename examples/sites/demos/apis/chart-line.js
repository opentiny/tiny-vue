export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-line',
      type: 'component',
      options: [
        {
          name: 'theme',
          type: 'string',
          defaultValue: 'false',
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
          type: 'array',
          defaultValue: '-',
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
          defaultValue: '-',
          typeAnchorName: 'Legend',
          desc: {
            'zh-CN': '图例配置, 默认显示',
            'en-US': 'Legend configuration, default display'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'smooth',
          type: 'boolean',
          defaultValue: 'false',
          typeAnchorName: 'smooth',
          desc: {
            'zh-CN': '曲线折线图',
            'en-US': 'Curve and Line Chart'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'silent',
          type: 'boolean',
          defaultValue: 'false',
          typeAnchorName: 'silent',
          desc: {
            'zh-CN': '是否关闭hover动效',
            'en-US': 'Turn off or not turn off the hover motion effect'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'data',
          type: 'array',
          defaultValue: '-',
          typeAnchorName: 'data',
          desc: {
            'zh-CN': '图表数据(必填)',
            'en-US': 'Chart data (required)'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'itemStyle',
          type: 'object',
          defaultValue: '-',
          typeAnchorName: 'ItemStyle',
          desc: {
            'zh-CN': '图表数据点文本样式',
            'en-US': 'Chart data point text style'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'step',
          type: 'boolean',
          typeAnchorName: 'step',
          defaultValue: 'false',
          desc: {
            'zh-CN': '折线图是否更改为阶梯线',
            'en-US': 'Should the line chart be changed to a ladder line'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'predict',
          type: 'string',
          typeAnchorName: 'predict',
          defaultValue: '-',
          desc: {
            'zh-CN': '折线是否更改为预测线的数据名',
            'en-US': 'Is the line changed to the data name of the predicted line'
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
          name: 'xAxis',
          type: 'string | object',
          defaultValue: '图表数据data数据中data[0]对象的第一个key值',
          typeAnchorName: 'XAxis',
          desc: {
            'zh-CN': '配置x轴',
            'en-US': 'Configure x-axis'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'yAxis',
          type: 'string | object',
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
          name: 'dataZoom',
          type: 'object',
          defaultValue: '默认不显示',
          typeAnchorName: 'DataZoom',
          desc: {
            'zh-CN': '区域缩放轴配置',
            'en-US': 'Regional scaling axis configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'markline',
          type: 'object',
          typeAnchorName: 'Markline',
          defaultValue: '-',
          desc: {
            'zh-CN': '阈值线配置',
            'en-US': 'Threshold line configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'markPoint',
          type: 'object',
          typeAnchorName: 'MarkPoint',
          defaultValue: '{max:false, min:false}',
          desc: {
            'zh-CN': '峰值标记',
            'en-US': 'Peak marking'
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
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<p data-v-md-line="3">如<code>theme='light'</code>时，color 取[ <span style="background:#6D8FF0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6D8FF0’ ，<span style="background:#00A874;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#00A874’， <span style="background:#BD72F0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BD72F0’ ，<span style="background:#54BCCE;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#54BCCE’ ，<span style="background:#FDC000;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FDC000’ ，<span style="background:#9185F0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#9185F0’，<span style="background:#00A2B5;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#00A2B5’ ]<br>
如<code>theme='dark'</code>时，color 取[ <span style="background:#1F55B5;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1F55B5’ ，<span style="background:#278661;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#278661’ ，<span style="background:#8A21BC;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#8A21BC’ ，<span style="background:#26616B;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#26616B’ ，<span style="background:#B98C1D;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B98C1D’ ，<span style="background:#745EF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#745EF7’，<span style="background:#2A8290;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2A8290’ ]<br>
如<code>theme='cloud-light'</code>时，color 取[ <span style="background:#1476FF;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1476FF’ ，<span style="background:#0BB8B2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0BB8B2’ ，<span style="background:#6E51E0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6E51E0’ ，<span style="background:#5CB300;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#5CB300’ ，<span style="background:#FFB700;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FFB700’ ，<span style="background:#33BCF2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#33BCF2’ ，<span style="background:#BA53E6;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BA53E6’ ，<span style="background:#F24998;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F24998’ ]<br>
如<code>theme='cloud-dark'</code>时，color 取[ color 取[ <span style="background:#1476FF;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1476FF’ ，<span style="background:#0BB8B2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0BB8B2’ ，<span style="background:#6E51E0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6E51E0’ ，<span style="background:#5CB300;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#5CB300’ ，<span style="background:#FFB700;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FFB700’ ，<span style="background:#33BCF2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#33BCF2’ ，<span style="background:#BA53E6;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BA53E6’ ，<span style="background:#F24998;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F24998’ ]<br>
如<code>theme='hdesign-light'</code>时，color 取[ color 取[ <span style="background:#2070F3;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2070F3’ ，<span style="background:#87C859;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#87C859’ ，<span style="background:#715AFB;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#715AFB’ ，<span style="background:#F69E39;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F69E39’ ，<span style="background:#2CB8C9;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2CB8C9’ ，<span style="background:#E049CE;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#E049CE’ ，<span style="background:#09AA71;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#09AA71’ ，<span style="background:#FCD72E;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FCD72E’，<span style="background:#B62BF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B62BF7’，<span style="background:#ED448A;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#ED448A’，<span style="background:#0067D1;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0067D1’]<br>
如<code>theme='hdesign-dark'</code>时，color 取[ color 取[ <span style="background:#2070F3;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2070F3’ ，<span style="background:#62B42E;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#62B42E’ ，<span style="background:#715AFB;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#715AFB’ ，<span style="background:#F4840C;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F4840C’ ，<span style="background:#2CB8C9;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2CB8C9’ ，<span style="background:#D41DBC;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#D41DBC’ ，<span style="background:#09AA71;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#09AA71’ ，<span style="background:#FCC800;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FCC800’，<span style="background:#B62BF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B62BF7’，<span style="background:#E61866;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#E61866’，<span style="background:#0067D1;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0067D1’]<br>
说明：调色盘颜色列表，图表从颜色数组中依次循环取得颜色使用，如果没有设置颜色列表 ， 则会根据 <code>theme</code> 决定默认值。</p>
</div></div></div></td></tr>`
    },
    {
      name: 'data',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>data: [
  { Month: <span class="hljs-string">'Jan'</span>, Domestic: <span class="hljs-number">33</span>, Abroad: <span class="hljs-number">37</span> },
  { Month: <span class="hljs-string">'Feb'</span>, Domestic: <span class="hljs-number">27</span>, Abroad: <span class="hljs-number">39</span> },
  { Month: <span class="hljs-string">'Mar'</span>, Domestic: <span class="hljs-number">31</span>, Abroad: <span class="hljs-number">20</span> },
  ...
];
</code></pre>
</div></div><p data-v-md-line="12">说明：图表数据 ， Month 为 x 轴数据 ， Domestic 、 Abroad 为 折线名称 , Month 及折线名称（key 值）可更换</p>
</div></div></div></td></tr>`
    },
    {
      name: 'ItemStyle',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：设置折线图数据点的样式</p>
<div data-v-md-line="3"><p class="ev_expand_title">itemStyle.symbolSize<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="5"><p class="ev_expand_introduce">默认值：<code>20</code>
</p></div><div data-v-md-line="7"><p class="ev_expand_introduce">说明：设置折线图数据点的大小
</p></div><div data-v-md-line="9"><p class="ev_expand_title">itemStyle.borderColor<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="11"><p class="ev_expand_introduce">默认值：<br>
<code>theme=light</code> ， symbolSize=<code>#ffffff</code><br>
<code>theme=dark</code> ， symbolSize=<code>#191919</code>
</p></div><div data-v-md-line="15"><p class="ev_expand_introduce">说明：设置折线图数据点的边框颜色
</p></div></div></div></div></td></tr>`
    },
    {
      name: 'Markline',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>markLine:{
    top:<span class="hljs-number">38</span>,
    topLabel:<span class="hljs-string">'上阈值线'</span>,
    topColor:<span class="hljs-string">'red'</span>,
    topPosition:<span class="hljs-string">'start'</span>,
    bottom:<span class="hljs-number">20</span>，
    bottomLabel:<span class="hljs-string">'下阈值线'</span>,
    bottomColor:<span class="hljs-string">'blue'</span>,
    bottomPosition:<span class="hljs-string">'end'</span>
}
</code></pre>
</div></div><p data-v-md-line="16">说明：折线图中阈值线的相关配置</p>
<div data-v-md-line="18"><p class="ev_expand_title">markLine.top<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Nmuber</span>
</p></div><div data-v-md-line="20"><p class="ev_expand_introduce">说明：配置将哪根 y 轴刻度线做为上阈值线 ， <code>markLine.top</code>必须大于 <code>MarkLine.bottom</code>
</p></div><div data-v-md-line="22"><p class="ev_expand_title">markLine.topLabel<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="24"><p class="ev_expand_introduce">说明：配置上阈值线的文本信息
</p></div><div data-v-md-line="26"><p class="ev_expand_title">markLine.topColor<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="28"><p class="ev_expand_introduce">默认值：<code>red</code>
</p></div><div data-v-md-line="30"><p class="ev_expand_introduce">说明：配置上阈值线的文本颜色
</p></div><div data-v-md-line="32"><p class="ev_expand_title">markLine.topPosition<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="34"><p class="ev_expand_introduce">默认值：<code>insideEndTop</code>（结束位置上方）
</p></div><div data-v-md-line="36"><p class="ev_expand_introduce">可选值：<code>insideEndTop</code>（结束位置上方） 、 <code>insideStartTop</code>（开始位置上方） 、 <code>insideEndBottom</code>（结束位置下方） 、 <code>insideStartBottom</code>（开始位置上方） 、 <code>start</code>（开始位置） 、 <code>end</code>（结束位置）
</p></div><div data-v-md-line="38"><p class="ev_expand_introduce">说明：配置上阈值线的文本位置
</p></div><div data-v-md-line="40"><p class="ev_expand_title">markLine.bottom<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Nmuber</span>
</p></div><div data-v-md-line="42"><p class="ev_expand_introduce">说明：配置将哪根 y 轴刻度线做为下阈值线 ， <code>markLine.top</code> 必须大于 <code>MarkLine.bottom</code>
</p></div><div data-v-md-line="44"><p class="ev_expand_title">markLine.bottomLabel<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="46"><p class="ev_expand_introduce">说明：配置下阈值线的文本信息
</p></div><div data-v-md-line="48"><p class="ev_expand_title">markLine.bottomColor<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="50"><p class="ev_expand_introduce">默认值：<code>red</code>
</p></div><div data-v-md-line="52"><p class="ev_expand_introduce">说明：配置下阈值线的文本颜色
</p></div><div data-v-md-line="54"><p class="ev_expand_title">markLine.bottomPosition<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="56"><p class="ev_expand_introduce">默认值：<code>insideEndTop</code>
</p></div><div data-v-md-line="58"><p class="ev_expand_introduce">可选值：<code>insideEndTop</code>（结束位置上方） 、 <code>insideStartTop</code>（开始位置上方） 、 <code>insideEndBottom</code>（结束位置下方） 、 <code>insideStartBottom</code>（开始位置上方） 、 <code>start</code>（开始位置） 、 <code>end</code>（结束位置）
</p></div><div data-v-md-line="60"><p class="ev_expand_introduce">说明：配置下阈值线的文本位置
</p></div></div></div></div></td></tr>`
    },
    {
      name: 'MarkPoint',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>markPint:{max:false,min:false}</code></p>
<p data-v-md-line="3">说明：折线图峰值标记的相关配置</p>
<div data-v-md-line="5"><p class="ev_expand_title">markPoint.max<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="7"><p class="ev_expand_introduce">默认值：<code>false</code>
</p></div><div data-v-md-line="9"><p class="ev_expand_introduce">说明：是否显示最大峰值标记
</p></div><div data-v-md-line="11"><p class="ev_expand_title">markPoint.min<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="13"><p class="ev_expand_introduce">默认值：<code>false</code>
</p></div><div data-v-md-line="15"><p class="ev_expand_introduce">说明：是否显示最小峰值标记
</p></div></div></div></div></td></tr>`
    },
    {
      name: 'predict',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：<code>predict:'Feb'</code></p>
<p data-v-md-line="3">说明：折线图从哪条 x 轴数据之后开启趋势预测线</p>
</div></div></div></td></tr>`
    },
    {
      name: 'silent',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>false</code></p>
<p data-v-md-line="3">说明：是否关闭 hover 态的效果</p>
</div></div></div></td></tr>`
    },
    {
      name: 'smooth',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>false</code></p>
<p data-v-md-line="3">说明：折线图是否开启平滑曲线</p>
</div></div></div></td></tr>`
    },
    {
      name: 'step',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>false</code></p>
<p data-v-md-line="3">说明：面积图是否配置阶梯线 ， 配置 <code>step:true</code> 则 <code>smooth:true</code> 失效</p>
</div></div></div></td></tr>`
    },
    {
      name: 'Padding',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：设置图表四个方向的 <code>padding</code> 值<br>
<code>padding : [top, right, bottom, left]</code><br>
top 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比，也可以是 ‘top’ ， ‘middle’ ， ‘bottom’<br>
left 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比，也可以是 ‘left’ ， ‘center’ ， ‘right’<br>
right 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比<br>
bottom 的值可以是 20 这样的具体像素值 ， 可以是 ‘20%’ 这样相对于容器高宽的百分比</p>
</div></div></div></td></tr>`
    },
    {
      name: 'Color',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<p data-v-md-line="3">如<code>theme='light'</code>时，color 取[ <span style="background:#6D8FF0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6D8FF0’ ，<span style="background:#00A874;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#00A874’， <span style="background:#BD72F0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BD72F0’ ，<span style="background:#54BCCE;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#54BCCE’ ，<span style="background:#FDC000;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FDC000’ ，<span style="background:#9185F0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#9185F0’，<span style="background:#00A2B5;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#00A2B5’ ]<br>
如<code>theme='dark'</code>时，color 取[ <span style="background:#1F55B5;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1F55B5’ ，<span style="background:#278661;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#278661’ ，<span style="background:#8A21BC;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#8A21BC’ ，<span style="background:#26616B;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#26616B’ ，<span style="background:#B98C1D;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B98C1D’ ，<span style="background:#745EF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#745EF7’，<span style="background:#2A8290;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2A8290’ ]<br>
如<code>theme='cloud-light'</code>时，color 取[ <span style="background:#1476FF;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1476FF’ ，<span style="background:#0BB8B2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0BB8B2’ ，<span style="background:#6E51E0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6E51E0’ ，<span style="background:#5CB300;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#5CB300’ ，<span style="background:#FFB700;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FFB700’ ，<span style="background:#33BCF2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#33BCF2’ ，<span style="background:#BA53E6;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BA53E6’ ，<span style="background:#F24998;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F24998’ ]<br>
如<code>theme='cloud-dark'</code>时，color 取[ color 取[ <span style="background:#1476FF;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#1476FF’ ，<span style="background:#0BB8B2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0BB8B2’ ，<span style="background:#6E51E0;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#6E51E0’ ，<span style="background:#5CB300;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#5CB300’ ，<span style="background:#FFB700;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FFB700’ ，<span style="background:#33BCF2;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#33BCF2’ ，<span style="background:#BA53E6;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#BA53E6’ ，<span style="background:#F24998;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F24998’ ]<br>
如<code>theme='hdesign-light'</code>时，color 取[ color 取[ <span style="background:#2070F3;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2070F3’ ，<span style="background:#87C859;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#87C859’ ，<span style="background:#715AFB;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#715AFB’ ，<span style="background:#F69E39;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F69E39’ ，<span style="background:#2CB8C9;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2CB8C9’ ，<span style="background:#E049CE;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#E049CE’ ，<span style="background:#09AA71;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#09AA71’ ，<span style="background:#FCD72E;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FCD72E’，<span style="background:#B62BF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B62BF7’，<span style="background:#ED448A;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#ED448A’，<span style="background:#0067D1;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0067D1’]<br>
如<code>theme='hdesign-dark'</code>时，color 取[ color 取[ <span style="background:#2070F3;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2070F3’ ，<span style="background:#62B42E;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#62B42E’ ，<span style="background:#715AFB;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#715AFB’ ，<span style="background:#F4840C;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#F4840C’ ，<span style="background:#2CB8C9;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#2CB8C9’ ，<span style="background:#D41DBC;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#D41DBC’ ，<span style="background:#09AA71;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#09AA71’ ，<span style="background:#FCC800;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#FCC800’，<span style="background:#B62BF7;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#B62BF7’，<span style="background:#E61866;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#E61866’，<span style="background:#0067D1;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span> ‘#0067D1’]<br>
说明：调色盘颜色列表，图表从颜色数组中依次循环取得颜色使用，如果没有设置颜色列表 ， 则会根据 <code>theme</code> 决定默认值。</p>
</div></div></div></td></tr>`
    },
    {
      name: 'Legend',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
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
</p></div></div></div></div></td></tr>`
    },
    {
      name: 'Tooltip',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
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
</div ></div ></div ></td ></tr > `
    },
    {
      name: 'XAxis',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：图表数据<code>data</code>数组中<code>data[0]</code>对象的第一个 key 值</p>
<p data-v-md-line="3">格式：</p>
<div data-v-md-line="5"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>String类型
xAxis:<span class="hljs-string">'Month'</span>
</code></pre>
</div></div><p data-v-md-line="10">说明：设置图表数据中哪个 key 值作为折线图的横坐标数据</p>
<p data-v-md-line="12">格式：</p>
<div data-v-md-line="14"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>Object类型
xAxis:{
    data:<span class="hljs-string">'Month'</span>，
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
    ellipsis:{
        overflow:<span class="hljs-string">'truncate'</span>,
        labelWidth:<span class="hljs-number">20</span>
    },
    nameLocation:<span class="hljs-string">'end'</span>,
    nameTextStyle:{
        fontSize:<span class="hljs-number">12</span>,
        color:#<span class="hljs-number">4e4</span>e4e
    }
}
</code></pre>
</div></div><p data-v-md-line="42">说明：自定义 x 轴配置(将原先的 <code>String</code> 类型的 <code>xAxis</code>、<code>xAxisName</code>、<code>xAxisLine</code>、<code>xAxisInterval</code>、<code>xAxisFullGrid</code>、<code>xAxisLabelRotate</code>、<code>xAxisEllipsis</code> 属性统一整合到 <code>Object</code> 类型的 <code>xAxis</code> 内部)</p>
<div data-v-md-line="44"><p class="ev_expand_title">xAxis.data<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="46"><p class="ev_expand_introduce">说明：设置图表数据中哪个 key 值作为折线图的横坐标数据(<code>xAxis.data</code>即<code>String</code>类型的<code>xAxis</code>值)
</p></div><div data-v-md-line="48"><p class="ev_expand_title">xAxis.name<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="50"><p class="ev_expand_introduce">说明：配置x轴文本名称（<code>xAxis.name</code>即<code>xAxisName</code>）
</p></div><div data-v-md-line="52"><p class="ev_expand_title">xAxis.line<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="54"><p class="ev_expand_introduce">默认值：
</p></div><div data-v-md-line="56"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>xAxisLine:{
    show:true,
    lineStyle:{
        <span class="hljs-attribute">color</span>:theme===<span class="hljs-string">'dark'</span>?<span class="hljs-built_in">rgba</span>(<span class="hljs-number">238</span>,<span class="hljs-number">238</span>,<span class="hljs-number">238</span>,.<span class="hljs-number">1</span>):<span class="hljs-built_in">rgba</span>(<span class="hljs-number">25</span>,<span class="hljs-number">25</span>,<span class="hljs-number">25</span>,.<span class="hljs-number">1</span>),
        type:<span class="hljs-string">'solid'</span>,
        width:<span class="hljs-number">2</span>
    },
    text:{
        <span class="hljs-attribute">color</span>:theme===<span class="hljs-string">'dark'</span>?<span class="hljs-number">#bbbbbb</span>:<span class="hljs-number">#4e4e4e</span>
    }
}
</code></pre>
</div></div><div data-v-md-line="69"><p class="ev_expand_introduce">说明：设置 x 轴样式(<code>xAxis.line</code>即<code>xAxisLine</code>)
</p></div><div data-v-md-line="71"><p class="ev_expand_title">xAxis.interval<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number | Function</span>
</p></div><div data-v-md-line="73"><p class="ev_expand_introduce">默认值：<code>0</code>
</p></div><div data-v-md-line="75"><p class="ev_expand_introduce">格式：
</p></div><div data-v-md-line="77"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>// 当xAxisInterval为<span class="hljs-number">2</span>时，x轴的<span class="hljs-selector-tag">label</span>会每隔<span class="hljs-number">2</span>个显示
xAxisInterval: <span class="hljs-number">2</span>
</code></pre>
</div></div><div data-v-md-line="82"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>// 当xAxisInterval为function时，x轴的<span class="hljs-selector-tag">label</span>会根据函数的返回结果展示。
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
</div></div><div data-v-md-line="98"><p class="ev_expand_introduce">说明：设置 x 轴 label 的间距 ， 默认不设置时 ， 会根据图表宽度自适应（<code>xAxis.interval</code>即<code>xAxisInterval</code>）
</p></div><div data-v-md-line="100"><p class="ev_expand_title">xAxis.fullGrid<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="102"><p class="ev_expand_introduce">默认值：<code>false</code>
</p><p class="ev_expand_introduce">说明：设置图表是否顶格到 x 轴左右两边(<code>xAxis.fullGrid</code>即<code>xAxisFullGrid</code>)
</p></div><div data-v-md-line="105"><p class="ev_expand_title">xAxis.show<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="107"><p class="ev_expand_introduce">默认值：<code>true</code>
</p><p class="ev_expand_introduce">说明：设置x坐标轴是否显示
</p></div><div data-v-md-line="110"><p class="ev_expand_title">xAxis.labelRotate<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Number</span>
</p></div><div data-v-md-line="112"><p class="ev_expand_introduce">默认值：<code>false</code>
</p><p class="ev_expand_introduce">说明：设置 x 轴文本的旋转角度取值范围 -90 度到 90 度(<code>xAxis.labelRotate</code>即<code>xAxisLabelRotate</code>)
</p></div><div data-v-md-line="115"><p class="ev_expand_title">xAxis.ellipsis<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="117"><p class="ev_expand_introduce">默认值：<code>xAxis.ellipsis:{overflow:'none'}</code>
</p><p class="ev_expand_introduce">格式：
</p></div><div data-v-md-line="120"><div class="v-md-pre-wrapper v-md-pre-wrapper-css extra-class"><pre class="v-md-hljs-css"><code>xAxis<span class="hljs-selector-class">.ellipsis</span>:{
    <span class="hljs-attribute">overflow</span>:<span class="hljs-string">'truncate'</span>,
    width:<span class="hljs-number">20</span>
}
</code></pre>
</div></div><div data-v-md-line="126"><p class="ev_expand_introduce">说明：设置 x 轴刻度文本过长展示方式(<code>xAxis.ellipsis</code>即<code>xAxisEllipsis</code>)
</p></div><div data-v-md-line="128"><p class="ev_expand_title">xAxis.nameLocation<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="130"><p class="ev_expand_introduce">默认值：<code>end</code>
</p><p class="ev_expand_introduce">可选值：<code>end</code>、<code>center||middle</code>、<code>start</code>
</p><p class="ev_expand_introduce">说明：设置x轴文本位置
</p></div><div data-v-md-line="134"><p class="ev_expand_title">xAxis.nameTextStyle<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p></div><div data-v-md-line="136"><p class="ev_expand_introduce">默认值：{fontSize:12,color:'#4e4e4e'}
</p><p class="ev_expand_introduce">说明：设置x轴文本样式
</p></div></div></div></div></td></tr>`
    },
    {
      name: 'YAxis',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
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
</p></div></div></div></div></td></tr>`
    },
    {
      name: 'DataZoom',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
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
</p></div></div></div></div></td></tr>`
    },
    {
      name: 'Event',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
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
</div></div></div></td></tr>`
    }
  ]
}
