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
        'zh-CN': '<p>下拉刷新</p>',
        'en-US': '<p>下拉刷新</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'pulling-text',
      name: {
        'zh-CN': '下拉提示文字',
        'en-US': 'Drop-down prompt text'
      },
      desc: {
        'zh-CN': '<p>通过属性 <code>pulling-text</code> 设置 pulling 提示文字</p>',
        'en-US': '<p>Set the pulling prompt text through the attribute <code>pulling-text</code></p>'
      },
      codeFiles: ['pulling-text.vue']
    },
    {
      demoId: 'loosing-text',
      name: {
        'zh-CN': '下拉可刷新的文字提示',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>通过属性 <code>loosing-text</code> 设置 pulling 提示文字</p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['loosing-text.vue']
    },
    {
      demoId: 'success-text',
      name: {
        'zh-CN': '刷新成功的文字',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>通过属性 <code>success-text</code> 设置 pulling 提示文字</p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['success-text.vue']
    },
    {
      demoId: 'success-duration',
      name: {
        'zh-CN': '刷新成功的文字展示时长',
        'en-US': '刷新成功的文字展示时长'
      },
      desc: {
        'zh-CN': '<p>设置属性 <code>success-duration</code> 指定延时时间</p>',
        'en-US': '<p>Set the attribute <code>success-duration</code> to specify the delay time</p>'
      },
      codeFiles: ['success-duration.vue']
    },
    {
      demoId: 'animation-duration',
      name: {
        'zh-CN': '弹回动画所用的时间',
        'en-US': 'The time taken for the bounce animation'
      },
      desc: {
        'zh-CN': '<p>设置属性 <code>animation-duration</code> 指定延时时间</p>',
        'en-US': '<p>Set the attribute <code>animation-duration</code> to specify the delay time</p>'
      },
      codeFiles: ['animation-duration.vue']
    },
    {
      demoId: 'head-height',
      name: {
        'zh-CN': '下拉时头部的高度',
        'en-US': 'Head height when pulling down'
      },
      desc: {
        'zh-CN': `<p>设置属性 <code>head-height</code> 为数字或字符串，例如：<code>100/'100'/'100px'/'6rem'</code></p>`,
        'en-US': `<p>
        Set the property <code>head-height</code> to a number or string, for example: <code>100/'100'/'100px'/'6rem'</code></p>`
      },
      codeFiles: ['head-height.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用下拉刷新',
        'en-US': 'Disable pull-down to refresh'
      },
      desc: {
        'zh-CN': '<p>设置 <code>disabled</code> 为 <code>true</code> 可以禁用下拉刷新</p>',
        'en-US': '<p>Set <code>disabled</code> to <code>true</code> to disable pull-down refresh</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'pull-refresh-slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'slot'
      },
      desc: {
        'zh-CN': '<p>包括这些插槽：normal/pulling/loosing/loading/success/default</p>',
        'en-US': '<p>Includes these slots: normal/pulling/loosing/loading/success/default</p>'
      },
      codeFiles: ['pull-refresh-slot.vue']
    }
  ],
  apis: []
}
