export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-boxplot',
      type: 'component',
      options: [
        {
          name: 'theme',
          type: 'string',
          defaultValue: 'light',
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
          name: 'series',
          type: 'array',
          defaultValue: '无',
          typeAnchorName: 'Series',
          desc: {
            'zh-CN': '自定义图表series',
            'en-US': 'Custom Chart Series'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'dataset',
          type: 'array',
          defaultValue: '无',
          typeAnchorName: 'Dataset',
          desc: {
            'zh-CN': '自定义图表dataset',
            'en-US': 'Custom Chart Dataset'
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
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code> data:[
        [<span class="hljs-number">850</span>, <span class="hljs-number">740</span>, <span class="hljs-number">900</span>, <span class="hljs-number">1070</span>, <span class="hljs-number">930</span>, <span class="hljs-number">850</span>, <span class="hljs-number">950</span>, <span class="hljs-number">980</span>, <span class="hljs-number">980</span>, <span class="hljs-number">880</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">980</span>, <span class="hljs-number">930</span>, <span class="hljs-number">650</span>, <span class="hljs-number">760</span>, <span class="hljs-number">810</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">960</span>, <span class="hljs-number">960</span>],
        [<span class="hljs-number">960</span>, <span class="hljs-number">940</span>, <span class="hljs-number">960</span>, <span class="hljs-number">940</span>, <span class="hljs-number">880</span>, <span class="hljs-number">800</span>, <span class="hljs-number">850</span>, <span class="hljs-number">880</span>, <span class="hljs-number">900</span>, <span class="hljs-number">840</span>, <span class="hljs-number">830</span>, <span class="hljs-number">790</span>, <span class="hljs-number">810</span>, <span class="hljs-number">880</span>, <span class="hljs-number">880</span>, <span class="hljs-number">830</span>, <span class="hljs-number">800</span>, <span class="hljs-number">790</span>, <span class="hljs-number">760</span>, <span class="hljs-number">800</span>],
        [<span class="hljs-number">880</span>, <span class="hljs-number">880</span>, <span class="hljs-number">880</span>, <span class="hljs-number">860</span>, <span class="hljs-number">720</span>, <span class="hljs-number">720</span>, <span class="hljs-number">620</span>, <span class="hljs-number">860</span>, <span class="hljs-number">970</span>, <span class="hljs-number">950</span>, <span class="hljs-number">880</span>, <span class="hljs-number">910</span>, <span class="hljs-number">850</span>, <span class="hljs-number">870</span>, <span class="hljs-number">840</span>, <span class="hljs-number">840</span>, <span class="hljs-number">850</span>, <span class="hljs-number">840</span>, <span class="hljs-number">840</span>, <span class="hljs-number">840</span>],
        ...
    ]
</code></pre>
</div></div><p data-v-md-line="12">说明：一个箱形图的图表数据</p>
</div></div></div></td></tr>`
    },
    {
      name: 'Dataset',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>    dataset: [
        {
            source: data0
        },
        {
            source: data1
        },
        {
            source: data2
        },
        {
            fromDatasetIndex: <span class="hljs-number">0</span>,
            transform: { type: <span class="hljs-string">'boxplot'</span> }
        },
        {
            fromDatasetIndex: <span class="hljs-number">1</span>,
            transform: { type: <span class="hljs-string">'boxplot'</span> }
        },
        {
            fromDatasetIndex: <span class="hljs-number">2</span>,
            transform: { type: <span class="hljs-string">'boxplot'</span> }
        }
    ]
</code></pre>
</div></div><p data-v-md-line="29">说明：自定义 dataset，需搭配自定义 series 使用，使用方式及属性和 eCharts 一致，请参考 eCharts 配置;</p>
<div data-v-md-line="31"><p class="ev_expand_introduce">详细参数解释见：https://echarts.apache.org/zh/option.html#dataset</p>
数据变换教程：https://echarts.apache.org/handbook/zh/concepts/data-transform/;
</div></div></div></div></td></tr>`
    },
    {
      name: 'Series',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>series:[
        {
            name: <span class="hljs-string">'category0'</span>,
            type: <span class="hljs-string">'boxplot'</span>,
            datasetIndex: <span class="hljs-number">3</span>
        },
        {
            name: <span class="hljs-string">'category1'</span>,
            type: <span class="hljs-string">'boxplot'</span>,
            datasetIndex: <span class="hljs-number">4</span>
        },
        {
            name: <span class="hljs-string">'category2'</span>,
            type: <span class="hljs-string">'boxplot'</span>,
            datasetIndex: <span class="hljs-number">5</span>
        }
    ]
</code></pre>
</div></div><p data-v-md-line="23">说明：自定义 series，需搭配自定义 dataset 使用，使用方式及属性和 eCharts 一致，请参考 eCharts 配置<br>
详细参数解释见： https://echarts.apache.org/zh/option.html#series-sunburst.type</p>
</div></div></div></td></tr>`
    },
    {
      name: 'Theme',
      type: 'interface',
      code: `<tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>light</code></p>
<p data-v-md-line="3">可选值：</p>
<p data-v-md-line="5"><code>light</code> ：ICT3.0图表浅色主题<br>
<code>dark</code> ：ICT3.0图表深色主题<br>
<code>hdesign-light</code> ：H Design1.1图表浅色主题<br>
<code>hdesign-dark</code> ：H Design1.1图表深色主题<br>
<code>cloud-light</code> ：华为云图表浅色主题<br>
<code>bpit-light</code> ：质量&amp;流程IT图表浅色主题<br>
<code>bpit-dark</code> ：质量&amp;流程IT图表深色主题</p>
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
