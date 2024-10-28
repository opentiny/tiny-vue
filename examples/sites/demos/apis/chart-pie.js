export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-pie',
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
          name: 'title',
          type: 'object',
          defaultValue: '-',
          typeAnchorName: 'Title',
          desc: {
            'zh-CN': '中心文本配置',
            'en-US': 'Central Text Configuration'
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
          defaultValue: '-',
          typeAnchorName: 'Data',
          desc: {
            'zh-CN': '图表数据(必填)',
            'en-US': 'Chart data (required)'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: '-',
          typeAnchorName: 'Type',
          desc: {
            'zh-CN': '圆盘图类型',
            'en-US': 'Configure bar chart type'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'position',
          type: 'object',
          defaultValue: '-',
          typeAnchorName: 'Position',
          desc: {
            'zh-CN': '图表位置及大小',
            'en-US': 'Chart position and size'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'minAngle',
          type: 'number',
          defaultValue: '-',
          typeAnchorName: 'MinAngle',
          desc: {
            'zh-CN': '最小扇区角度',
            'en-US': 'Minimum sector angle'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'silent',
          type: 'boolean',
          defaultValue: false,
          typeAnchorName: 'Silent',
          desc: {
            'zh-CN': '是否关闭hover动效',
            'en-US': 'Turn off or turn on the hover motion effect'
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
            'zh-CN': '外侧文本配置',
            'en-US': 'Outer Text Configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'itemStyle',
          type: 'object',
          defaultValue: '见说明',
          typeAnchorName: 'ItemStyle',
          desc: {
            'zh-CN': '描边配置',
            'en-US': 'Stroke configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'stillShowZeroSum',
          type: 'boolean',
          defaultValue: 'true',
          typeAnchorName: 'StillShowZeroSum',
          desc: {
            'zh-CN': '是否在数据和为0的时候仍显示扇区',
            'en-US': 'Display or not display sectors when data sum is 0'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'selectedMode',
          type: 'boolean',
          defaultValue: false,
          typeAnchorName: 'SelectedMode',
          desc: {
            'zh-CN': '扇区选中模式配置',
            'en-US': 'Sector selection mode configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'roseType',
          type: 'boolean',
          defaultValue: false,
          typeAnchorName: 'RoseType',
          desc: {
            'zh-CN': '是否展示成南丁格尔图',
            'en-US': 'Is it displayed as a Nightingale diagram'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'dataRules',
          type: 'object',
          defaultValue: '-',
          typeAnchorName: 'DataRules',
          desc: {
            'zh-CN': '某个数据设置指定颜色',
            'en-US': 'data setting specifies a color'
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
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>圆环图 \ 饼图
 data:[
        {value: <span class="hljs-number">100</span>,name: <span class="hljs-string">'VPC'</span>},
        {value: <span class="hljs-number">90</span>, name: <span class="hljs-string">'IM'</span> },
        {value: <span class="hljs-number">49</span>, name: <span class="hljs-string">'EIP'</span>},
        ...
    ]
</code></pre>
</div></div><div data-v-md-line="13"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>多重圆环图
data:[
        {
            name:<span class="hljs-string">'VPC'</span>,
            value:<span class="hljs-number">100</span>,
            children:[
                {name:<span class="hljs-string">'VPC_1'</span>,value:<span class="hljs-number">20</span>},
                {name:<span class="hljs-string">'VPC_2'</span>,value:<span class="hljs-number">80</span>},
            ]
        },
        {
            name:<span class="hljs-string">'IM'</span>,
            value:<span class="hljs-number">80</span>,
            children:[
                {name:<span class="hljs-string">'IM_1'</span>,value:<span class="hljs-number">30</span>},
                {name:<span class="hljs-string">'IM_2'</span>,value:<span class="hljs-number">50</span>}
            ]
        },
        {
            name:<span class="hljs-string">'EIP'</span>,
            value:<span class="hljs-number">50</span>,
            children:[
                {name:<span class="hljs-string">'EIP_1'</span>,value:<span class="hljs-number">10</span>},
                {name:<span class="hljs-string">'EIP_2'</span>,value:<span class="hljs-number">40</span>}
            ]
        }
        ...
]
</code></pre>
</div></div><p data-v-md-line="44">说明：图表数据 , <code>value</code>表示为数据值 ， <code>name</code>表示为数据名称 ， <code>children</code>为添加的外环数据</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'DataRules',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>dataRules:{
    color:{
        <span class="hljs-string">'VPC'</span>:<span class="hljs-string">'#ff0000'</span>
    }
}
</code></pre>
</div></div><p data-v-md-line="11">说明：可以根据data数据中的某个<code>name</code>为其设置指定的颜色。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Label',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>label:{
    show:<span class="hljs-literal">true</span>,
    type:<span class="hljs-string">'percent'</span>,
    line:<span class="hljs-literal">true</span>,
    lineColor:<span class="hljs-string">'#eee'</span>
}
</code></pre>
</div></div><p data-v-md-line="12">说明：图表的外侧文本相关配置<br><code>show</code> 控制是否显示文本<br><code>type</code> 圆盘外侧显示的文本格式<br><code>line</code> 为展示图表与外侧文本之间的连线<br><code>lineColor</code> 为图表与外侧文本之间的连线的颜色</p>
<div data-v-md-line="14"><p class="ev_expand_title">label.show<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p><p class="ev_expand_introduce">默认值：<code>true</code>
</p></div><div data-v-md-line="17"><p class="ev_expand_introduce">说明：是否展示图表外侧文本
</p></div><div data-v-md-line="19"><p class="ev_expand_title">label.type<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="21"><p class="ev_expand_introduce">默认值：<code>name</code>
</p></div><div data-v-md-line="23"><p class="ev_expand_introduce">可选值：<code>name</code> ， <code>value</code> ， <code>percent</code>
</p></div><div data-v-md-line="25"><p class="ev_expand_introduce">说明：圆盘外侧显示的文本格式<br><code>name</code> 为展示数据名称<br> <code>value</code> 为展示数据的值<br><code>percent</code> 为展示百分比信息，保留两位小数。
</p></div><div data-v-md-line="27"><p class="ev_expand_title">label.line<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="29"><p class="ev_expand_introduce">默认值：<code>true</code>
</p></div><div data-v-md-line="31"><p class="ev_expand_introduce">说明：是否展示图表与外侧文本之间的连线
</p></div><div data-v-md-line="33"><p class="ev_expand_title">label.lineColor<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="35"><p class="ev_expand_introduce">说明：图表与外侧文本之间连线的颜色
</p></div><div data-v-md-line="37"><p class="ev_expand_title">label.labelHtml<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Function</span>
</p></div><div data-v-md-line="39"><p class="ev_expand_introduce">说明：用来自定义label的内容，参考formatter格式
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'MinAngle',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：最小的扇区角度<code>0 ~ 360</code>，用于防止某个值过小导致扇区太小影响交互。规范默认了2PX对应的最小角度，用户也可自定义最小角度。如果数据有0值，需要自行配置<code>minAngle: 0</code>，保证扇区无占比。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Position',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">替代旧属性：<code>chartPosition</code></p>
<p data-v-md-line="3">默认值：</p>
<div data-v-md-line="5"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>{
    center:[<span class="hljs-string">'50%'</span>,<span class="hljs-string">'45%'</span>],
    radius:[<span class="hljs-string">'44%'</span>,<span class="hljs-string">'50%'</span>]
}
</code></pre>
</div></div><p data-v-md-line="12">说明：调整圆盘图的位置及大小</p>
<div data-v-md-line="14"><p class="ev_expand_title">position.center<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Array</span>
</p></div><div data-v-md-line="16"><p class="ev_expand_introduce">默认值：<code>['50%','45%']</code>
</p></div><div data-v-md-line="18"><p class="ev_expand_introduce">说明：center 为中心（圆心）坐标，<code>position.center[0]</code>为横坐标，<code>position.center[1]</code>为纵坐标。
</p><p class="ev_expand_introduce">支持设置成百分比和数值，设置成百分比时<code>position.center[0]</code>是相对于容器宽度，<code>position.center[1]</code>是相对于容器高度。
</p></div><div data-v-md-line="21"><p class="ev_expand_title">position.radius<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Array</span>
</p></div><div data-v-md-line="23"><p class="ev_expand_introduce">默认值：<code>['44%','50%']</code>
</p></div><div data-v-md-line="25"><p class="ev_expand_introduce">说明：调整圆盘图的n内外半径大小，<code>position.radius[0]</code>为圆盘内径，<code>position.radius[1]</code>为圆盘外径。
</p><p class="ev_expand_introduce">支持设置成百分比和数值，设置成百分比时<code>position.radius[0]</code>是相对于容器宽度，<code>position.radius[1]</code>是相对于容器高度。
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'RoseType',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>false</code></p>
<p data-v-md-line="3">可选值： <code>radius</code>（单选）、 <code>area</code>（多选）</p>
<p data-v-md-line="5">说明：是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：<br>
<code>radius</code>扇区圆心角展现数据的百分比，半径展现数据的大小。<br>
<code>area</code> 所有扇区圆心角相同，仅通过半径展现数据大小。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'SelectedMode',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>false</code></p>
<p data-v-md-line="3">可选值： <code>single</code>（单选） 、 <code>multiple</code>（多选） 、 <code>series</code>（选择整个系列）</p>
<p data-v-md-line="5">说明：扇区选中模式的配置，表示是否支持多个选中，默认关闭，支持布尔值和字符串。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Silent',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>false</code></p>
<p data-v-md-line="3">说明：是否关闭 hover 态的效果</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'StillShowZeroSum',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>true</code></p>
<p data-v-md-line="3">说明：是否在数据和为 0（一般情况下所有数据为 0） 的时候仍显示扇区，默认为<code>true</code>，正常显示扇区。<br>
设为<code>false</code>，将只显示背景色，且需要搭配<code>minAngle: 0</code>一起使用。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Type',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>circle</code>（圆环图）</p>
<p data-v-md-line="3">可选值 <code>circle</code>（圆环图） ， <code>pie</code>（饼图） ， <code>multi-circle</code>（多重圆环图）</p>
<p data-v-md-line="5">说明：图表样式,<code>type='circle'</code>表示为圆环图 ， <code>type='pie'</code>表示为饼图 , <code>type='multi-circle'</code>表示为多重圆环图</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Direction',
      type: 'interface',
      code: `默认值：vertical（垂直）

可选值：vertical（垂直） , horizontal（水平）

说明：配置柱状图的方向
`
    },
    {
      name: 'ItemStyle',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>itemStyle:{
    borderColor:<span class="hljs-string">'#ffffff'</span>,
    borderWidth:<span class="hljs-number">3</span>,
    borderRadius:<span class="hljs-number">0</span>
}
</code></pre>
</div></div><p data-v-md-line="11">说明：圆盘图的描边配置</p>
<div data-v-md-line="13"><p class="ev_expand_title">itemStyle.borderColor<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span>&lt;span
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'Label',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>label:{
    show:<span class="hljs-literal">true</span>,
    type:<span class="hljs-string">'percent'</span>,
    line:<span class="hljs-literal">true</span>,
    lineColor:<span class="hljs-string">'#eee'</span>
}
</code></pre>
</div></div><p data-v-md-line="12">说明：图表的外侧文本相关配置<br><code>show</code> 控制是否显示文本<br><code>type</code> 圆盘外侧显示的文本格式<br><code>line</code> 为展示图表与外侧文本之间的连线<br><code>lineColor</code> 为图表与外侧文本之间的连线的颜色</p>
<div data-v-md-line="14"><p class="ev_expand_title">label.show<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p><p class="ev_expand_introduce">默认值：<code>true</code>
</p></div><div data-v-md-line="17"><p class="ev_expand_introduce">说明：是否展示图表外侧文本
</p></div><div data-v-md-line="19"><p class="ev_expand_title">label.type<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="21"><p class="ev_expand_introduce">默认值：<code>name</code>
</p></div><div data-v-md-line="23"><p class="ev_expand_introduce">可选值：<code>name</code> ， <code>value</code> ， <code>percent</code>
</p></div><div data-v-md-line="25"><p class="ev_expand_introduce">说明：圆盘外侧显示的文本格式<br><code>name</code> 为展示数据名称<br> <code>value</code> 为展示数据的值<br><code>percent</code> 为展示百分比信息，保留两位小数。
</p></div><div data-v-md-line="27"><p class="ev_expand_title">label.line<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p></div><div data-v-md-line="29"><p class="ev_expand_introduce">默认值：<code>true</code>
</p></div><div data-v-md-line="31"><p class="ev_expand_introduce">说明：是否展示图表与外侧文本之间的连线
</p></div><div data-v-md-line="33"><p class="ev_expand_title">label.lineColor<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p></div><div data-v-md-line="35"><p class="ev_expand_introduce">说明：图表与外侧文本之间连线的颜色
</p></div><div data-v-md-line="37"><p class="ev_expand_title">label.labelHtml<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Function</span>
</p></div><div data-v-md-line="39"><p class="ev_expand_introduce">说明：用来自定义label的内容，参考formatter格式
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'LineDataName',
      type: 'interface',
      code: `说明：需要转换为折线图的数据名称<br>
折柱混合图是建立在 barChart 的基础上实现的（不可颠倒），除了折线图的预测线 predict 属性，其它属性都能支持
`
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
</div ></div ></div ></td ></tr > `
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
      name: 'Title',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：对齐 echarts 的 <code>title</code> 属性，替代旧属性<code>text</code></p>
  <p data-v-md-line="3">格式：</p>
  <div data-v-md-line="5"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>title:{
    text: <span class="hljs-string">" "</span>,
    subtext: <span class="hljs-string">" "</span>,
    top: <span class="hljs-string">'center'</span>,
    left: <span class="hljs-string">'center'</span>,
    itemGap: <span class="hljs-number">8</span>,
    textStyle: {
      color: <span class="hljs-string">'#191919'</span>,
    fontSize: <span class="hljs-number">28</span>,
    lineHeight: <span class="hljs-number">28</span>,
    fontWeight: <span class="hljs-string">'normal'</span>,
    },
    subtextStyle: {
      color: <span class="hljs-string">'#bbbbbb'</span>,
    fontSize: <span class="hljs-number">16</span>,
    lineHeight: <span class="hljs-number">24</span>,
    fontWeight: <span class="hljs-string">'normal'</span>,
    },
}
  </code></pre>
  </div></div></div></div></div></td></tr></div>`
    }
  ]
}
