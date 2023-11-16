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
      demoId: 'custom-icon',
      name: {
        'zh-CN': '自定义图标',
        'en-US': 'Custom icon'
      },
      desc: {
        'zh-CN': '<p>通过 <code>icon</code> 属性自定义图标。<p>',
        'en-US': '<p>Customize the icon through the <code>icon</code> attribute.</p>'
      },
      codeFiles: ['custom-icon.vue']
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
    },
    {
      demoId: 'show-foldable',
      name: {
        'zh-CN': '带标题可折叠样式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `flex-basis` 属性可以设置内容插槽的宽度，flex-basis 类型为数组，最多能传入 4 个值，支持百分比，固定宽度及固有的尺寸关键词，默认为 auto，详情见 flex 的 flex-basis 属性。<br /> 通过设置`flex-grow`属性可以设置每一项在 flex 容器中分配剩余空间的相对比例，默认为 1。如果不想自动撑满主容器，可以设为 0，详情见 flex 的 flex-grow 属性。<br />flex-grow 举例：`:flex-grow="[0, 0]" :flex-grow="[2, 1]" :flex-grow="[2, 1,1,1]"` <br />flex-basis 举例：`:flex-basis="["200px", "100px","300px"]" :flex-basis="["75%", "25%"]" :flex-basis="["40%", "20%", "20%", "20%"]"`<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-foldable.vue']
    },
    {
      demoId: 'custom-class',
      name: {
        'zh-CN': '自定义类名',
        'en-US': 'Custom class'
      },
      desc: {
        'zh-CN': '<p>通过<code>custom-class</code>属性设置自定义类名<p>',
        'en-US': '<p>Set a custom class name through the <code>custom-class</code> attribute</p>'
      },
      codeFiles: ['custom-class.vue']
    }
  ],
  apis: []
}
