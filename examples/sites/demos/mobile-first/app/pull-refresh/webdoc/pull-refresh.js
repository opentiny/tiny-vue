export default {
  column: '2',
  owner: '',
  demos: [{
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
        'en-US': 'Drop-down refreshable text prompt'
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
        'en-US': 'Texts that are successfully refreshed'
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
        'en-US': 'Text display duration that is successfully refreshed.'
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
        'en-US': `<p>Set the property <code>head-height</code> to a number or string, for example: <code>100/'100'/'100px'/'6rem'</code></p>`
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
  apis: [{
    'name': 'pull-refresh',
    'type': 'component',
    'props': [{
        'name': ' animationDuration',
        'type': '[Number, String]',
        'defaultValue': '默认值是300',
        'desc': {
          'zh-CN': '刷新成功后头部延时消失时间',
          'en-US': 'Header delay disappearing time after successful refresh'
        },
        'demoId': 'animation-duration'
      },
      {
        'name': 'disabled',
        'type': 'Boolean',
        'defaultValue': '默认值是false',
        'desc': {
          'zh-CN': '是否禁用下拉刷新',
          'en-US': 'Whether to disable pull-down refresh'
        },
        'demoId': 'disabled'
      },
      {
        'name': 'headHeight',
        'type': '[Number, String]',
        'defaultValue': '默认值是50',
        'desc': {
          'zh-CN': '组件头部提示区域的高度',
          'en-US': 'Height of the component head prompt area'
        },
        'demoId': 'head-height'
      },
      {
        'name': 'loadingOptions',
        'type': 'Object',
        'defaultValue': '默认值是空对象{}',
        'desc': {
          'zh-CN': '不使用loading插槽时，内置加载组件Loading的参数：Loading.service(options)',
          'en-US': 'When the loading slot is not used, the loading parameter of the built-in loading component is Loading.service(options).'
        },
        'demoId': ''
      },
      {
        'name': 'loadingText',
        'type': 'String',
        'defaultValue': '',
        'desc': {
          'zh-CN': '数据刷新过程的提示文本',
          'en-US': 'Prompt text for the data refresh process'
        },
        'demoId': ''
      },
      {
        'name': 'loosingText',
        'type': 'String',
        'defaultValue': '',
        'desc': {
          'zh-CN': '向下拖动超过阈值后可松开进行刷新的提示文本',
          'en-US': 'Drag down to release the prompt text for refresh after the threshold is exceeded.'
        },
        'demoId': 'loosing-text'
      },
      {
        'name': 'modelValue',
        'type': 'Boolean',
        'defaultValue': '默认值是false',
        'desc': {
          'zh-CN': '是否正在进行下拉刷新',
          'en-US': 'Is the pull-down refresh in progress'
        },
        'demoId': ''
      },
      {
        'name': 'pullDistance',
        'type': '[Number, String]',
        'defaultValue': '默认值是属性 `headHeight` 的值',
        'desc': {
          'zh-CN': '拖拽产生刷新的距离',
          'en-US': 'Refreshing distance generated by dragging'
        },
        'demoId': ''
      },
      {
        'name': 'pullingText',
        'type': 'String',
        'defaultValue': '',
        'desc': {
          'zh-CN': '向下拖动过程的提示文本',
          'en-US': 'Drag down the prompt text for the procedure'
        },
        'demoId': 'pulling-text'
      },
      {
        'name': 'selfSimulate',
        'type': 'Boolean',
        'defaultValue': '默认值是false',
        'desc': {
          'zh-CN': '是否开启自模拟Touch事件。如果开启，那么组件只处理自身产生的模拟Touch事件，忽略冒泡上来的非自身模拟事件。正常非模拟Touch事件始终不会跳过处理',
          'en-US': 'Indicates whether to enable the self-simulation Touch event. If this function is enabled, the component only processes simulated Touch events generated by itself and ignores non-simulated events generated by itself. Normal non-simulated Touch events never skip processing'
        },
        'demoId': ''
      },
      {
        'name': 'successDuration',
        'type': '[Number, String]',
        'defaultValue': '默认值是500',
        'desc': {
          'zh-CN': '刷新成功提示文本延时消失时间',
          'en-US': 'Time for the text to disappear after the refresh is successful.'
        },
        'demoId': 'success-duration'
      },
      {
        'name': 'successText',
        'type': 'String',
        'defaultValue': '',
        'desc': {
          'zh-CN': '刷新成功的提示文本',
          'en-US': 'Text of the message indicating that the refresh is successful'
        },
        'demoId': 'success-text'
      }
    ],
    'events': [{
        'name': 'change',
        'type': 'Function({ status, distance })',
        'defaultValue': 'status:{String 组件当前状态}，distance:{Number 当前的拖动距离}',
        'desc': {
          'zh-CN': '在组件状态改变时抛出',
          'en-US': 'Thrown when the component state changes'
        },
        'demoId': ''
      },
      {
        'name': 'refresh',
        'type': 'Function()',
        'defaultValue': '',
        'desc': {
          'zh-CN': '在组件状态进入 loading 刷新数据时抛出',
          'en-US': 'Thrown when the component enters the loading state to refresh data'
        },
        'demoId': ''
      },
      {
        'name': 'update:modelValue',
        'type': 'Function(isLoading)',
        'defaultValue': 'isLoading:{Boolean 组件是否处于 loading}',
        'desc': {
          'zh-CN': '在组件状态进入 loading 刷新数据时抛出',
          'en-US': 'Thrown when the component enters the loading state to refresh data'
        },
        'demoId': ''
      }
    ],
    'slots': [{
        'name': 'default',
        'type': '',
        'defaultValue': '',
        'desc': {
          'zh-CN': '组件默认插槽',
          'en-US': 'Component Default Slot'
        },
        'demoId': 'pull-refresh-slot'
      },
      {
        'name': 'loading',
        'type': '',
        'defaultValue': '',
        'desc': {
          'zh-CN': '组件 loading 插槽，自定义 loading 状态的提示',
          'en-US': 'Component loading slot, which is used to customize the loading status prompt.'
        },
        'demoId': 'pull-refresh-slot'
      },
      {
        'name': 'loosing',
        'type': '',
        'defaultValue': '',
        'desc': {
          'zh-CN': '组件 loosing 插槽，自定义 loosing 状态的提示',
          'en-US': 'Component loosing slot, which is used to customize the loosing status prompt.'
        },
        'demoId': 'pull-refresh-slot'
      },
      {
        'name': 'normal',
        'type': '',
        'defaultValue': '',
        'desc': {
          'zh-CN': '组件 normal 插槽，自定义 normal 状态的提示',
          'en-US': 'Indicates the normal slot of the component. The prompt for the normal status is customized.'
        },
        'demoId': 'pull-refresh-slot'
      },
      {
        'name': 'pulling',
        'type': '',
        'defaultValue': '',
        'desc': {
          'zh-CN': '组件 pulling 插槽，自定义 pulling 状态的提示',
          'en-US': 'Pull slot of the component, which is used to customize the prompt of the pull status.'
        },
        'demoId': 'pull-refresh-slot'
      },
      {
        'name': 'success',
        'type': '',
        'defaultValue': '',
        'desc': {
          'zh-CN': '组件 success 插槽，自定义 success 状态的提示',
          'en-US': 'Indicates the success slot of the component. The success status is customized.'
        },
        'demoId': 'pull-refresh-slot'
      }
    ]
  }]
}