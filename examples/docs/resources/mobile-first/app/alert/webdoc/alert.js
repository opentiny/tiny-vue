export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'type',
      name: {
        'zh-CN': '类型',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>通过<code>type</code>设置不同的类型。可选值：success、warning、info、error，默认值：info 。</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '大尺寸',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 属性设置不同的尺寸，可选值：nomal、large，默认值：nomal 。</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '自定义标题',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>当  <code>size</code>为 large 时显示标题，可设置  <code>title</code> 或  <code>slot</code> 自定义标题。默认标题根据设置的 <code>type</code> 显示。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'closable',
      name: {
        'zh-CN': '不可关闭',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过  <code>closable</code> 属性可设置是否显示关闭按钮，没有关闭按钮，警告框将不可关闭。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['closable.vue']
    },
    {
      demoId: 'custom-description',
      name: {
        'zh-CN': '自定义提示内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>description</code> 属性或插槽设置自定义提示内容。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-description.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '自定义交互操作',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>当 <code>size</code> 为 large 时，设置默认插槽自定义交互操作。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-default.vue']
    },
    {
      demoId: 'close',
      name: {
        'zh-CN': '关闭事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><code>close</code> 事件，关闭警告框时触发。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['close.vue']
    },
    {
      demoId: 'feedback-of-result',
      name: {
        'zh-CN': '表单提交结果反馈',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>当 <code>size</code> 为 large 时，属性 <code>description</code> 和默认插槽结合使用，可渲染提交反馈界面。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['feedback-of-result.vue']
    },
    {
      demoId: 'show-icon',
      name: {
        'zh-CN': '是否显示图标',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过配置  <code>show-icon</code>  属性，控制图标是否显示。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-icon.vue']
    }
  ],
  apis: []
}
