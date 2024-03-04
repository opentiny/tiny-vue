export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>通过 <code>height</code> 属性设置画布高度。</p>',
        'en-US': '<p>Set the canvas height through the <code>height</code> attribute. </p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'bgcolor',
      name: {
        'zh-CN': '自定义背景颜色',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>通过 <code>backgroundColor</code> 属性设画布背景颜色。</p>',
        'en-US': '<p>Set the canvas height through the <code>height</code> attribute. </p>'
      },
      codeFiles: ['bgcolor.vue']
    },
    {
      demoId: 'button-text',
      name: {
        'zh-CN': '自定义按钮文本',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>rewriteButtonText</code> 和 <code>submitButtonText</code> 属性分别设置重写按钮和确认按钮的文案。</p>',
        'en-US': '<p>Set the canvas height through the <code>height</code> attribute. </p>'
      },
      codeFiles: ['button-text.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN':
          '\n        <p>\n          <ul>\n            <li> <code>submit</code>: 点击确认按钮触发的事件。</li>\n            <li> <code>rewrite</code>: 点击重写按钮触发的事件。</li>\n            <li> <code>start</code>: 每一次书写开始时触发的事件。</li>\n            <li> <code>signing</code>: 正在进行书写触发的事件。</li>\n            <li> <code>end</code>: 每一次书写完成写触发的事件。</li>\n          </ul>\n        </p>\n        ',
        'en-US': '<p>Set the canvas height through the <code>height</code> attribute. </p>'
      },
      codeFiles: ['events.vue']
    },
    {
      demoId: 'get-image',
      name: {
        'zh-CN': '获取签名后的图片',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>通过组件实例的 <code>getSignatureImage</code> 方法可以获取签名预览图片。</p>',
        'en-US': '<p>Set the canvas height through the <code>height</code> attribute. </p>'
      },
      codeFiles: ['get-image.vue']
    },
    {
      demoId: 'in-dialogbox',
      name: {
        'zh-CN': '弹窗中使用签名组件',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>弹窗中使用签名组件。</p>',
        'en-US': '<p>Set the canvas height through the <code>height</code> attribute. </p>'
      },
      codeFiles: ['in-dialogbox.vue']
    },
    {
      demoId: 'line-style',
      name: {
        'zh-CN': '签名线条样式',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN':
          '\n        <p>通过 <code>penColor</code> 属性设置签名线条颜色。</p>\n        <p>通过 <code>lineWidth</code> 属性设置签名线条宽度。</p>\n        ',
        'en-US': '<p>Set the canvas height through the <code>height</code> attribute. </p>'
      },
      codeFiles: ['line-style.vue']
    },
    {
      demoId: 'placeholder',
      name: {
        'zh-CN': '定制占位符',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': ' <p>通过 <code>placeholder</code> 属性设置默认占位符。</p>',
        'en-US': '<p>Set the canvas height through the <code>height</code> attribute. </p>'
      },
      codeFiles: ['placeholder.vue']
    },
    {
      demoId: 'preview',
      name: {
        'zh-CN': '签名预览',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN':
          '\n        <p>当点击确认按钮时，组件会触发 <code>submit</code> 事件，事件的第一个参数为 <code>data</code>，包含以下字段：\n        <code>image</code>：签名对应的图片，为 base64 字符串格式。若签名为空，则返回空字符串。\n        <code>canvas</code>：Canvas 元素。</p>\n        ',
        'en-US': '<p>Set the canvas height through the <code>height</code> attribute. </p>'
      },
      codeFiles: ['preview.vue']
    },
    {
      demoId: 'value',
      name: {
        'zh-CN': '签名回显',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': ' <p>通过 <code>value</code> 属性可以回显手写签名图片。</p>',
        'en-US': '<p>Set the canvas height through the <code>height</code> attribute. </p>'
      },
      codeFiles: ['value.vue']
    }
  ]
}
