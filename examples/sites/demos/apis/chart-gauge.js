export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-gauge',
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
          defaultValue: "[ value: 90, name: 'Utilization rate' ]",
          typeAnchorName: 'Data',
          desc: {
            'zh-CN': '图表数据(必填)',
            'en-US': 'Chart data (required)'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'position',
          type: 'object',
          defaultValue: "{center:['50%', '50%'],radius: '70%'}",
          typeAnchorName: 'Position',
          desc: {
            'zh-CN': '图表位置及大小',
            'en-US': 'Chart position and size'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'pointer',
          type: 'boolean',
          defaultValue: 'false',
          typeAnchorName: 'Pointer',
          desc: {
            'zh-CN': '刻度指针是否显示',
            'en-US': 'Is the scale pointer displayed'
          },
          mode: ['pc'],
          pcDemo: ''
        },

        {
          name: 'min',
          type: 'number',
          defaultValue: '0',
          typeAnchorName: 'Min',
          desc: {
            'zh-CN': '刻度盘最小刻度',
            'en-US': 'Minimum scale of dial'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'max',
          type: 'number',
          defaultValue: '100',
          typeAnchorName: 'Max',
          desc: {
            'zh-CN': '刻度盘最大刻度',
            'en-US': 'Maximum scale of dial'
          },
          mode: ['pc'],
          pcDemo: ''
        },

        {
          name: 'text',
          type: 'object',
          defaultValue: '默认居中',
          typeAnchorName: 'Text',
          desc: {
            'zh-CN': '中心文本配置',
            'en-US': 'Central Text Configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'startAngle',
          type: 'number',
          defaultValue: '225',
          typeAnchorName: 'StartAngle',
          desc: {
            'zh-CN': '仪表盘起始角度',
            'en-US': 'Starting angle of dashboard'
          },
          mode: ['pc'],
          pcDemo: ''
        },

        {
          name: 'endAngle',
          type: 'number',
          defaultValue: '-45',
          typeAnchorName: 'EndAngle',
          desc: {
            'zh-CN': '仪表盘结束角度',
            'en-US': 'End angle of dashboard'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'splitColor',
          type: 'array',
          defaultValue: '随主题',
          typeAnchorName: 'SplitColor',
          desc: {
            'zh-CN': '配置分割区间及颜色',
            'en-US': 'Configure segmentation intervals and colors'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'splitNumber',
          type: 'number',
          defaultValue: '4',
          typeAnchorName: 'SplitNumber',
          desc: {
            'zh-CN': '刻度线数量配置',
            'en-US': 'Quantity configuration of scale lines'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'splitLine',
          type: 'object',
          defaultValue: '默认显示',
          typeAnchorName: 'SplitLine',
          desc: {
            'zh-CN': '刻度线及文本配置',
            'en-US': 'Scale lines and text configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'markLine',
          type: 'number',
          defaultValue: '无',
          typeAnchorName: 'MarkLine',
          desc: {
            'zh-CN': '阈值线配置',
            'en-US': 'Threshold line configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'gradientColor',
          type: 'array',
          defaultValue: '无',
          typeAnchorName: 'GradientColor',
          desc: {
            'zh-CN': '线性渐变',
            'en-US': 'Linear gradient'
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
            'zh-CN': '进度条样式配置',
            'en-US': 'Progress bar style configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'axisLabelStyle',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'AxisLabelStyle',
          desc: {
            'zh-CN': '刻度线文本样式配置',
            'en-US': 'Scale line text style configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'pointerStyle',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'PointerStyle',
          desc: {
            'zh-CN': '调整指针样式',
            'en-US': 'Adjust pointer style'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'mask',
          type: 'object',
          defaultValue: '{show: false, highLight: true}',
          typeAnchorName: 'Mask',
          desc: {
            'zh-CN': '外层光晕蒙层配置',
            'en-US': 'Outer halo mask configuration'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'orbitalColor',
          type: 'string',
          defaultValue: '随主题',
          typeAnchorName: 'OrbitalColor',
          desc: {
            'zh-CN': '仪表盘的轨道颜色',
            'en-US': 'Track color of dashboard'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'silent',
          type: 'boolean',
          defaultValue: 'false',
          typeAnchorName: 'Silent',
          desc: {
            'zh-CN': '是否关闭hover动效',
            'en-US': 'Do you want to turn off the hover effect'
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
      name: 'AxisLabelStyle',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：用于调整刻度文本的样式。</p>
<div data-v-md-line="3"><p class="ev_expand_title">axisLabelStyle.color<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p><p class="ev_expand_introduce">默认值：<code>theme===dark 为 #bbbbbb , theme===white 为 #4e4e4e</code>
</p><p class="ev_expand_introduce">说明：调整刻度文本的字体颜色
</p></div><div data-v-md-line="7"><p class="ev_expand_title">axisLabelStyle.fontSize<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p><p class="ev_expand_introduce">默认值：<code>14</code>
</p><p class="ev_expand_introduce">说明：调整刻度文本的字体大小
</p></div><div data-v-md-line="11"><p class="ev_expand_title">axisLabelStyle.Weight<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p><p class="ev_expand_introduce">默认值：<code>400</code>
</p><p class="ev_expand_introduce">说明：调整刻度文本的字体宽度
</p></div><div data-v-md-line="15"><p class="ev_expand_title">axisLabelStyle.distance<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p><p class="ev_expand_introduce">默认值：<code>16</code>
</p><p class="ev_expand_introduce">说明：调整刻度文本到刻度线的距离
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'Data',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式:<code>[value:90, name:'Utilization rate']</code></p>
<p data-v-md-line="3">说明：图表数据，value 为仪表盘的刻度,name 为数据名称。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'EndAngle',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>-45</code></p>
<p data-v-md-line="3">说明：仪表盘结束角度。圆心正右手侧为 0 度，正上方为 90 度，正左手侧为 180 度</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'GradientColor',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式：[<br>
<span style="background:#5990fd;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span><br>
‘#5990fd’，<br>
<span style="background:#0d9458;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span><br>
‘#0d9458’，<br>
<span style="background:#eeba18;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span><br>
‘#eeba18’，<br>
<span style="background:#ec6f1a;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span><br>
‘#ec6f1a’，<br>
<span style="background:#f43146;display:inline-block;width:16px;height:16px;transform:translateY(3px)"></span><br>
‘#f43146’]</p>
<p data-v-md-line="13">说明：gradientColor 表示从仪表盘左到右的渐变色,gradientColor.length == 1 时也可以表示单色。注意：splitColor 的优先级高于 gradientColor</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'ItemStyle',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：自定义进度条的宽度</p>
<div data-v-md-line="3"><p class="ev_expand_title">itemStyle.width<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p><p class="ev_expand_introduce">默认值：<code>16</code>
</p><p class="ev_expand_introduce">说明：自定义进度条的宽度
</p></div><div data-v-md-line="7"><p class="ev_expand_title">itemStyle.lineStyle<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p><p class="ev_expand_introduce">默认值：<code>{width:4,color:#4e4e4e||#bbbbbb,length:10}</code>
</p><p class="ev_expand_introduce">说明：自定义多色盘进度条的间距（或者刻度线）样式，颜色及宽度长度。
</p></div><div data-v-md-line="11"><p class="ev_expand_title">itemStyle.outerGauge<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p><p class="ev_expand_introduce">默认值：<code>show:true</code>
</p><p class="ev_expand_introduce">说明：自定义多色盘进度条外层光晕是否显示
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'MarkLine',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：设置阈值线，超出阈值时，进度条会变成warning色</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Mask',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>{show:false,hightLight:true}</code></p>
<p data-v-md-line="3">说明：外层光晕蒙层配置。</p>
<div data-v-md-line="5"><p class="ev_expand_title">mask.show<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p><p class="ev_expand_introduce">默认值：<code>false</code>
</p><p class="ev_expand_introduce">说明：外层光晕蒙层是否展示(蒙层区域的颜色为gradientColor循环取色，透明度.1)
</p></div><div data-v-md-line="9"><p class="ev_expand_title">mask.hightLight<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p><p class="ev_expand_introduce">默认值：<code>true</code>
</p><p class="ev_expand_introduce">说明：外层光晕蒙层是否开启区域高亮<br>(高亮区域的颜色为gradientColor[0]，透明度1;高亮区域前面的颜色为gradientColor[0]，透明度.5;高亮区域后面的颜色为gradientColor循环取色，透明度.5)
</p></div><div data-v-md-line="13"><p class="ev_expand_title">mask.width<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">无默认值</span><span class="ev_expand_type">Number</span>
</p><p class="ev_expand_introduce">说明：调整外层光晕到进度条之间的蒙层的宽度，不设置时则与lineDistance正相关。页面适配差异时需手动设置
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'Max',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>100</code></p>
<p data-v-md-line="3">说明：仪表盘的最大值</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Min',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>0</code></p>
<p data-v-md-line="3">说明：仪表盘的最小值</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'OrbitalColor',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：用来控制仪表盘的轨道颜色</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Pointer',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>false</code></p>
<p data-v-md-line="3">可选值：<code>true, false</code></p>
<p data-v-md-line="5">说明：仪表盘的刻度指针是否显示</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'PointerStyle',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>pointerStyle:{
    width:<span class="hljs-number">16</span>;
    length:<span class="hljs-string">'10%'</span>
    pointerDistance:<span class="hljs-string">'-108%'</span>
    lineDistance:<span class="hljs-string">'5%'</span>
}
</code></pre>
</div></div><p data-v-md-line="12">说明：用于调整指针样式。</p>
<div data-v-md-line="14"><p class="ev_expand_title">pointerStyle.width<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Number</span>
</p><p class="ev_expand_introduce">默认值：<code>16</code>
</p><p class="ev_expand_introduce">说明：调整指针宽度
</p></div><div data-v-md-line="18"><p class="ev_expand_title">pointerStyle.length<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p><p class="ev_expand_introduce">默认值：<code>10%</code>
</p><p class="ev_expand_introduce">说明：调整指针长度
</p></div><div data-v-md-line="22"><p class="ev_expand_title">pointerStyle.pointerDistance<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p><p class="ev_expand_introduce">默认值：<code>-108%</code>
</p><p class="ev_expand_introduce">说明：调整指针距离中心距离
</p></div><div data-v-md-line="26"><p class="ev_expand_title">pointerStyle.lineDistance<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String</span>
</p><p class="ev_expand_introduce">默认值：<code>5%</code>
</p><p class="ev_expand_introduce">说明：调整外层光晕距离进度条距离
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'Position',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">替代旧属性：<code>chartPosition</code></p>
<p data-v-md-line="3">说明：position 用来控制仪表盘的位置和半径。</p>
<div data-v-md-line="5"><p class="ev_expand_title">position.center<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Array</span>
</p><p class="ev_expand_introduce">默认值：<code>['50%','50%']</code>
</p><p class="ev_expand_introduce">说明：center 为中心（圆心）坐标，<code>position.center[0]</code>为横坐标，<code>position.center[1]</code>为纵坐标。
</p><p class="ev_expand_introduce">支持设置成百分比和数值，设置成百分比时<code>position.center[0]</code>是相对于容器宽度，<code>position.center[1]</code>是相对于容器高度。
</p></div><div data-v-md-line="10"><p class="ev_expand_title">position.radius<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">String | Number</span>
</p><p class="ev_expand_introduce">默认值：<code>'70%'</code>
</p><p class="ev_expand_introduce">说明：radius 仪表盘半径，可以是相对于容器<code>高宽中较小的一项</code>的<code>一半</code>的百分比，也可以是绝对的数值。
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'Slient',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>false</code></p>
<p data-v-md-line="3">说明：是否关闭 hover 态的效果</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'SplitColor',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式:</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>[
    [<span class="hljs-number">0.25</span>, <span class="hljs-string">'#0d9458'</span>],
    [<span class="hljs-number">0.5</span> , <span class="hljs-string">'#eeba18'</span>],
    [<span class="hljs-number">0.75</span>, <span class="hljs-string">'#ec6f1a'</span>],
    [<span class="hljs-number">1</span> ,   <span class="hljs-string">'#f43146'</span>]
]
</code></pre>
</div></div><p data-v-md-line="12">默认值：<code>'#1f55b5'</code></p>
<p data-v-md-line="14">说明：仪表盘的分割颜色，<code>splitColor[i][0]</code> 的值代表整根轴线的百分比，应在 0 到 1 之间, <code>splitColor[i][1]</code> 是对应的颜色</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'SplitLine',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：控制刻度线及刻度文本是否显示</p>
<div data-v-md-line="3"><p class="ev_expand_title">splitLine.show<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Boolean</span>
</p><p class="ev_expand_introduce">默认值：<code>true</code>
</p><p class="ev_expand_introduce">可选值：<code>true, false</code>
</p><p class="ev_expand_introduce">说明：控制刻度线及刻度文本是否显示
</p></div></div></div></div></td></tr></div>`
    },
    {
      name: 'SplitNumber',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>4</code></p>
<p data-v-md-line="3">说明：整个仪表盘被分成的份数，splitNumber = n 时表示被分成了 n 份，有 n+1 条刻度线</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'StartAngle',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>225</code></p>
<p data-v-md-line="3">说明：仪表盘起始角度。圆心正右手侧为 0 度，正上方为 90 度，正左手侧为 180 度</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Text',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值:显示 data 中的 value 和 name 值</p>
<p data-v-md-line="3">说明：仪表盘中间显示的文本格式配置。</p>
<div data-v-md-line="5"><p class="ev_expand_title">text.offset<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Array</span>
</p><p class="ev_expand_introduce">默认值：<vode>[0, 0]</code>
</p><p class="ev_expand_introduce">说明：text 文本相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
</p></div><div data-v-md-line="9"><p class="ev_expand_title">text.formatter<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Function</span>
</p><p class="ev_expand_introduce">格式：
<code>css
formatter：(value) =& gt; {
      return '{value|' + value + '}{unit|%}\n{name|Winning Percentages}'
    }
      </code>
</p><p class="ev_expand_introduce">说明：格式化文本函数，参数 value 为数据数值，返回的字符串格式： {styleName|要显示的文本}，styleName为<code>text.formatterStyle</code>中的属性名
</p></div><div data-v-md-line="18"><p class="ev_expand_title">text.formatterStyle<span class="ev_expand_required">非必填</span><span class="ev_expand_defaults">有默认值</span><span class="ev_expand_type">Object</span>
</p><p class="ev_expand_introduce">格式：
<code>css
formatterStyle: {
        value: {
          fontSize: 50,
          fontStyle: 'italic',
          fontWeight: 'bolder',
          color: '#ffff00',
          textShadowColor: '#ffffff',
          textShadowBlur: 1,
          textShadowOffsetX: 2,
          textShadowOffsetY: 2,
          padding: [0, 0, 30, 0]
        },
        unit: {
          fontSize: 12,
          fontStyle: 'italic',
          color: '#ffff00',
          textShadowColor: '#ffffff',
          textShadowBlur: 1,
          textShadowOffsetX: 2,
          textShadowOffsetY: 2,
          padding: [22, 0, 30, 6],
        },
        name: {
          fontSize: 14,
          color: '#ffffff',
          borderColor: '#ffffff',
          borderWidth: 1,
          borderRadius: 4,
          padding: [5, 5, 5, 5],
        }
      }
        </code>
</p><p class="ev_expand_introduce">说明：格式化文本样式，与上述 formatter 搭配使用，具体支持的样式可见：https://echarts.apache.org/zh/option.html#series-gauge.detail.rich.%3Cstyle_name%3E
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
    },
    {
      name: 'Silent',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">默认值：<code>false</code></p>
<p data-v-md-line="3">说明：是否关闭 hover 态的效果</p>
</div></div></div></td></tr></div>`
    }
  ]
}
