export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '可通过<code>model-value</code>属性设置头像值。',
        'en-US': 'You can use the <code>model-value</code> attribute to set the avatar value.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'min-user-head',
      name: {
        'zh-CN': '小头像',
        'en-US': 'Avatar'
      },
      desc: {
        'zh-CN': '<p>可通过<code>min</code>属性设置小头像。</p>\n',
        'en-US': '<p>You can use <code>min</code> to set a small avatar. </p>\n'
      },
      codeFiles: ['min-user-head.vue']
    },
    {
      demoId: 'round-user-head',
      name: {
        'zh-CN': '圆形头像',
        'en-US': 'Round Head'
      },
      desc: {
        'zh-CN': '<p>可通过<code>round</code>属性设置圆形头像。</p>\n',
        'en-US': '<p>You can use <code>round</code> to set a round avatar. </p>\n'
      },
      codeFiles: ['round-user-head.vue']
    },
    {
      demoId: 'label-user-head',
      name: {
        'zh-CN': '文字头像',
        'en-US': 'Avatar'
      },
      desc: {
        'zh-CN': '<p>可通过<code>type=&quot;label&quot;</code>属性设置文字头像。</p>\n',
        'en-US': '<p>You can use <code>type=&quot;label&quot;</code> to set the text avatar. </p>\n'
      },
      codeFiles: ['label-user-head.vue']
    },
    {
      demoId: 'icon-user-head',
      name: {
        'zh-CN': '图标头像',
        'en-US': 'Icon avatar'
      },
      desc: {
        'zh-CN': '<p>可通过<code>type=&quot;icon&quot;</code>属性设置图标头像。</p>\n',
        'en-US': '<p>You can use <code>type=&quot;icon&quot;</code> to set the icon avatar. </p>\n'
      },
      codeFiles: ['icon-user-head.vue']
    },
    {
      demoId: 'image-user-head',
      name: {
        'zh-CN': '图片头像',
        'en-US': 'Avatar'
      },
      desc: {
        'zh-CN': '<p>可通过<code>type=&quot;image&quot;</code>属性设置图片头像。</p>\n',
        'en-US': '<p>You can use <code>type=&quot;image&quot;</code> to set the picture avatar. </p>\n'
      },
      codeFiles: ['image-user-head.vue']
    },
    {
      demoId: 'message-count-total',
      name: {
        'zh-CN': '头像消息计数',
        'en-US': 'Avatar Message Count'
      },
      desc: {
        'zh-CN': '可通过<code>message-total="100"</code>属性设置消息数据。',
        'en-US': "Set message data through<code>message-total='100'</code>. "
      },
      codeFiles: ['message-count-total.vue']
    },
    {
      demoId: 'message-count-type',
      name: {
        'zh-CN': '使用小红点代替具体数值',
        'en-US': 'Use a red dot instead of a specific value'
      },
      desc: {
        'zh-CN': '可通过<code>message-type="basic"</code>属性设置消息显示替代成小红点。',
        'en-US': "Set the message display to be replaced with a small red dot through<code>message-type='basic'</code>."
      },
      codeFiles: ['message-count-type.vue']
    },
    {
      demoId: 'message-count-limit',
      name: {
        'zh-CN': '消息计数上限',
        'en-US': 'Maximum number of messages'
      },
      desc: {
        'zh-CN': '可通过<code>message-upper-limit="99"</code>属性设置消息数据上限。',
        'en-US': "Set the message data upper limit through<code>message-upper-limit='99'</code>."
      },
      codeFiles: ['message-count-limit.vue']
    },
    {
      demoId: 'color',
      name: {
        'zh-CN': '自定义颜色',
        'en-US': 'Custom Color'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>color</code>属性设置自定义颜色，图标或文字类型（type属性值为 icon 或 label ）的情况下，设置字体颜色和背景色。</p>\n',
        'en-US':
          '<p>You can use <code>color</code> to customize the color. If the icon or text type is set to icon or label, set the font color and background color. </p>\n'
      },
      codeFiles: ['color.vue']
    },
    {
      demoId: 'custom-background-color',
      name: {
        'zh-CN': '自定义背景颜色',
        'en-US': 'Custom background color'
      },
      desc: {
        'zh-CN': '<p>可通过<code>background-color</code>属性设置自定义背景颜色。</p>\n',
        'en-US': '<p>You can use <code>background-color</code> to customize the background color. </p>\n'
      },
      codeFiles: ['custom-background-color.vue']
    },
    {
      demoId: 'custom-user-head-content',
      name: {
        'zh-CN': '自定义图像内容',
        'en-US': 'Custom Image Content'
      },
      desc: {
        'zh-CN': '<p>可通过<code>#default</code>插槽设置自定义图像内容。</p>\n',
        'en-US': '<p>Customize the image content by slot<code>#default</code>. </p>\n'
      },
      codeFiles: ['custom-user-head-content.vue']
    },
    {
      demoId: 'render-user-head-in-grid',
      name: {
        'zh-CN': 'Grid 单元格展示头像',
        'en-US': 'Avatar Displayed in Grid Cells'
      },
      desc: {
        'zh-CN': '可通过Grid单元格<code>renderer</code>属性设置传入封装用户头像组件（HTML格式）。',
        'en-US':
          'Pass in the encapsulated user avatar component (in HTML format) through the Grid cell attribute<code>renderer</code>.'
      },
      codeFiles: ['render-user-head-in-grid.vue']
    }
  ]
}
