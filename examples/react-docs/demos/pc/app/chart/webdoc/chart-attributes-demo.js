export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'props-demo10',
      'name': { 'zh-CN': '1 设置区域缩放组件', 'en-US': '1 Setting the Region Zoom Component' },
      'desc': {
        'zh-CN':
          '详细用法参考如下<div class="tip custom-block"><p class="custom-block-title">如果某属性加上去之后没有生效，很可能是没有引入相应的模块。例如：</p>\n<p>在使用 dataZoom 组件时，需要引入 dataZoom 模块资源 <code>import \'echarts/lib/component/dataZoom\'</code> 。</p>\n</div>\n<h3>1 设置区域缩放组件</h3>\n<p>可通过 <code>init-options</code> 配置组件初始化附加参数，具体可<a href="http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/api.html#echarts.init">参考文档</a></p>示例。',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title"> If an attribute does not take effect after being added or removed, it is likely that the corresponding module is not introduced. For example, </p>\n<p>When using the dataZoom component, you need to import the dataZoom module resource <code>import\'echarts/lib/component/dataZoom\'</code>. </p>\n</div>\n<h3>1 Setting the Region Scaling Component</h3>\n<p>You can run the <code>init-options</code> command to configure the additional initialization parameters of the component. For details, see the <a href="http://xui.test.huawei.com/echarts4/echarts-doc/public/cn/api.html#echarts.init"> document</a></p>.'
      },
      'codeFiles': ['attributes.jsx']
    }
  ],
  apis: [{ 'name': 'chart-attributes-demo', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
