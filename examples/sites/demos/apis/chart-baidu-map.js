export default {
  mode: ['pc'],
  apis: [
    {
      name: 'chart-baidu-map',
      type: 'component',
      options: [
        {
          name: 'key',
          type: 'string',
          defaultValue: '无',
          typeAnchorName: 'Key',
          desc: {
            'zh-CN': '百度地图秘钥',
            'en-US': 'Baidu Map Key'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'url',
          type: 'string',
          defaultValue: '见详情',
          typeAnchorName: 'Url',
          desc: {
            'zh-CN': '百度地图前缀地址',
            'en-US': 'Baidu map prefix address'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'v',
          type: 'string',
          defaultValue: '1.4.3',
          typeAnchorName: 'V',
          desc: {
            'zh-CN': '百度地图版本',
            'en-US': 'Baidu Map Version'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'bmap',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'BMap',
          desc: {
            'zh-CN': '百度地图配置项',
            'en-US': 'Baidu Map Configuration Item'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'series',
          type: 'object',
          defaultValue: '见详情',
          typeAnchorName: 'Series',
          desc: {
            'zh-CN': '百度地图插件配置项',
            'en-US': 'Baidu Map Plugin Configuration Item'
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
      name: 'BMap',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式示例：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>bmap: {
        center: [<span class="hljs-number">118.775859</span>, <span class="hljs-number">31.985021</span>],
        zoom: <span class="hljs-number">17</span>,
        roam: <span class="hljs-literal">true</span>,
        mapStyle: {}
    }
</code></pre>
</div></div><p data-v-md-line="12">说明：通过配置<code>bmap</code>属性，修改百度地图的初始配置属性。<br><br>
<code>center</code>：百度地图中心经纬度。<br><br>
<code>zoom</code>：百度地图缩放级别。<br><br>
<code>roam</code>：是否开启拖拽缩放，可选值为：<code>'scale'</code>, <code>'move'</code>, <code>'true'</code>，默认true关闭。<br><br>
<code>mapStyle</code>：百度地图的自定义样式。<br><br>
其他更多属性配置可见Echarts百度地图扩展的git网址：<a href="https://github.com/apache/echarts/tree/release/extension-src/bmap" target="_blank">https://github.com/apache/echarts/tree/release/extension-src/bmap</a>。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Key',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：通过配置<code>key</code>属性，修改百度地图api的密钥。<br><br>
需要用户获取在百度地图开发者平台申请的密钥，申请网站：https://lbsyun.baidu.com/</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Series',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">格式示例：</p>
<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper-d extra-class"><pre class="v-md-hljs-d"><code>series: [{
        type: <span class="hljs-string">'scatter'</span>,
        coordinateSystem: <span class="hljs-string">'bmap'</span>,
        data: [[<span class="hljs-number">118.775859</span>, <span class="hljs-number">31.985021</span>, <span class="hljs-number">1</span>]],
        encode: {
            value: <span class="hljs-number">30</span>
        }
    }]
</code></pre>
</div></div><p data-v-md-line="14">说明：通过配置<code>series</code>属性，修改百度地图的初始配置属性。<br><br>
<code>center</code>：百度地图中心经纬度。<br><br>
<code>zoom</code>：百度地图缩放级别。<br><br>
<code>roam</code>：是否开启拖拽缩放，可以只设置 ‘scale’ 或者 ‘move’。默认关闭。<br><br>
<code>mapStyle</code>：百度地图的自定义样式。<br><br>
其他更多属性配置可见Echarts百度地图扩展的git网址：<a href="https://github.com/apache/echarts/tree/release/extension-src/bmap" target="_blank">https://github.com/apache/echarts/tree/release/extension-src/bmap</a>。</p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'V',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：通过配置<code>v</code>属性，修改百度地图api的版本号，默认2.0。<br></p>
</div></div></div></td></tr></div>`
    },
    {
      name: 'Url',
      type: 'interface',
      code: `<div class="tiny-huicharts"><tr class="tiny-grid-body__expanded-row"><td class="tiny-grid-body__expanded-column" colspan="5"><div class="tiny-grid-body__expanded-cell"><div class="v-md-editor-preview main-editor api-table" style="tab-size: 2;"><div class="github-markdown-body"><p data-v-md-line="1">说明：通过配置<code>url</code>属性，修改百度地图api的前缀地址。<br></p>
</div></div></div></td></tr></div>`
    }
  ]
}
