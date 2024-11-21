export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-process',
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
          defaultValue: '-',
          typeAnchorName: 'Data',
          desc: {
            'zh-CN': '图表数据',
            'en-US': 'Chart data'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'name',
          type: 'array',
          defaultValue: '无',
          typeAnchorName: 'Name',
          desc: {
            'zh-CN': '图表数据(必填)',
            'en-US': 'Chart data (required)'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'unit',
          type: 'string',
          defaultValue: '见详情',
          typeAnchorName: 'Unit',
          desc: {
            'zh-CN': '进度图右侧文本单位',
            'en-US': 'Text units on the right side of the progress chart'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'barWidth',
          type: 'number',
          defaultValue: '见详情',
          typeAnchorName: 'BarWidth',
          desc: {
            'zh-CN': '进度图柱形宽度',
            'en-US': 'Progress chart column width'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'minWidth',
          type: 'string',
          defaultValue: '无',
          typeAnchorName: 'MinWidth',
          desc: {
            'zh-CN': '进度图单项数据的最小宽度',
            'en-US': 'Minimum width of individual data in the progress chart'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'calibrationValue',
          type: 'number',
          defaultValue: '见详情',
          typeAnchorName: 'CalibrationValue',
          desc: {
            'zh-CN': '进度图标定值',
            'en-US': 'Progress icon fixed value'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'label',
          type: 'object',
          defaultValue: '无',
          typeAnchorName: 'Label',
          desc: {
            'zh-CN': '堆叠进度图图表图元文本样式',
            'en-US': 'Stacking progress chart, graphic element, text style'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'state',
          type: 'object',
          defaultValue: '无',
          typeAnchorName: 'State',
          desc: {
            'zh-CN': '根据状态设置颜色',
            'en-US': 'Set color based on status'
          },
          mode: ['pc'],
          pcDemo: ''
        },

        {
          name: 'title',
          type: 'object',
          defaultValue: '无',
          typeAnchorName: 'Title',
          desc: {
            'zh-CN': '进度图图表标题样式',
            'en-US': 'Title Style of Progress Chart and Chart'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'text',
          type: 'object',
          defaultValue: '无',
          typeAnchorName: 'Text',
          desc: {
            'zh-CN': '进度图图表右侧文本样式',
            'en-US': 'Text Style on the Right Side of the Progress Chart'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ]
    }
  ],

  types: [
    {
      name: 'BarWidth',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：横向进度图 ProcessBarChart:<code>8</code><br>
，堆叠横向进度图 StackProcessBarChart:<code>20</code>，<br>
说明：用来控制进度图柱形宽度</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'CalibrationValue',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：进度图：<code>100</code>，堆叠进度图：当前 data 中各项 children 的 value 总和的最大值,</p>
<p data-v-md-line="3">说明：用于进度图展示 data 中每项数据在标定值的占据比例</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Data',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>进度图
data:[
        { name:<span class="hljs-string">'UniEPMgr'</span>,    value:<span class="hljs-number">80</span> },
        { name:<span class="hljs-string">'SMLoglic'</span>,    value:<span class="hljs-number">65</span> },
        { name:<span class="hljs-string">'SSO'</span>,         value:<span class="hljs-number">45</span> },
        ...
]
</code></pre>
</div></div><p data-v-md-line="13">说明：图表数据 ， name 为页面横向进度条名称 ， value 为页面横向进度条长度</p>
<div data-v-md-line="15"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>堆叠进度图
data:[
         {
        name: <span class="hljs-string">'China'</span>,
        children: [
        { type: <span class="hljs-string">'Game'</span>, value: <span class="hljs-number">30</span> },
        { type: <span class="hljs-string">'Move'</span>, value: <span class="hljs-number">20</span> },
        { type: <span class="hljs-string">'Animation'</span>, value: <span class="hljs-number">45</span> },
        { type: <span class="hljs-string">'Fiction'</span>, value: <span class="hljs-number">60</span> },
        ],
    },
    {
        name: <span class="hljs-string">'Mexico'</span>,
        children: [
        { type: <span class="hljs-string">'Game'</span>, value: <span class="hljs-number">12</span> },
        { type: <span class="hljs-string">'Move'</span>, value: <span class="hljs-number">14</span> },
        { type: <span class="hljs-string">'Animation'</span>, value: <span class="hljs-number">33</span> },
        { type: <span class="hljs-string">'Fiction'</span>, value: <span class="hljs-number">44</span> },
        ],
    },
    ....
]
</code></pre>
</div></div><p data-v-md-line="40">说明：图表数据 ， name 为当前的系列名称 ， children 为该系列的具体数据，type 为具体数据的分类名称，value 为具体数据的值</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Label',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code> label:{
  color:<span class="hljs-string">'#191919'</span>,
  fontSize:<span class="hljs-number">16</span>,
  width:<span class="hljs-number">50</span>
 }

</code></pre>
</div></div><p data-v-md-line="12">说明：用于堆叠进度图设置图表图元文本样式,具体用法参考<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-bar.label">https://echarts.apache.org/zh/option.html#series-bar.label</a></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'MinWidth',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：用于进度图图表解决各项数据差值过大，导致部分数据显示不明显的问题，是百分比数值，表示占据当前数据的比例，例如’2%'。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Name',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：图表名称，不允许自定义<br><br>
横向进度图–<code>name: 'ProcessBarChart'</code>,<br><br>
堆叠横向进度图–<code>name: 'StackProcessBarChart'</code>,<br></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'State',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>state:{
       error:<span class="hljs-number">75</span>,
       warning:<span class="hljs-number">60</span>,
       subwarning:<span class="hljs-number">50</span>,
       success:<span class="hljs-number">20</span>
    },

</code></pre>
</div></div><p data-v-md-line="13">说明：用于根据状态显示不同柱形颜色，状态有 error,warning,subwarning,success 四种，颜色分别为<br>
<span style="background:#F23030;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>‘#F23030’,<br>
<span style="background:#FF8800;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>‘#FF8800’,<br>
<span style="background:#F7D916;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>‘#F7D916’,<br>
<span style="background:#5CB300;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span>‘#5CB300’</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Text',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code> text:{
  color:<span class="hljs-string">'#191919'</span>,
  fontSize:<span class="hljs-number">16</span>,
  width:<span class="hljs-number">50</span>
 }

</code></pre>
</div></div><p data-v-md-line="12">说明：用于进度图设置图表右侧文本样式,具体用法参考<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-bar.label">https://echarts.apache.org/zh/option.html#series-bar.label</a></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Title',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code> title:{
  color:<span class="hljs-string">'#191919'</span>,
  fontSize:<span class="hljs-number">16</span>,
  width:<span class="hljs-number">50</span>
 }

</code></pre>
</div></div><p data-v-md-line="12">说明：用于进度图设置图表标题样式,具体用法参考<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-bar.label">https://echarts.apache.org/zh/option.html#series-bar.label</a></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Unit',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：横向进度图：<code>%</code>，堆叠横向进度图：无</p>
<p data-v-md-line="3">说明：用来控制进度图右侧的文本显示单位</p>
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
              & lt; span style = "display:inline-block;width:100px;" & gt; \${item.seriesName} User & lt; /span&gt;
    & lt; span style = "font-weight:bold" & gt; \${item.value} %& lt; /span&gt;
    & lt; span style = "color:gray" & gt; out & lt; /span&gt;
    & lt; span style = "color:red" & gt; \${100 - item.value} %& lt; /span&gt;
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
