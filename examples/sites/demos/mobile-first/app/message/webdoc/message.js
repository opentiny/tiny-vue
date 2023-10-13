export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `this.$message` 弹出信息提示框。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'duration',
      name: {
        'zh-CN': '自动关闭延时',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `duration` 属性设置自动关闭的延迟时间，只对 type=message 有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['duration.vue']
    },
    {
      demoId: 'status',
      name: {
        'zh-CN': '消息状态',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `status` 属性设置消息状态，可选值有 `info | success | warning | error `。<br>可通过 `showClose` 属性控制弹窗是否显示关闭图标，可选值有 `ture | false`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['status.vue']
    },
    {
      demoId: 'id',
      name: {
        'zh-CN': '防止重复提示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>如果不想窗口重复点击，可以设置唯一的 `id` 防止重复提示，只对 type=message 有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['id.vue']
    }
  ],
  apis: []
}
