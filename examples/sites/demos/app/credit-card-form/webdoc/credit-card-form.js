export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'background-image',
      'name': { 'zh-CN': '背景图片', 'en-US': 'Background Image' },
      'desc': {
        'zh-CN': '<p>通过 <code>background-image</code> 设置信用卡背景图片。</p>\n',
        'en-US': '<p>Use <code>background-image</code> to set the credit card background image. </p>\n'
      },
      'codeFiles': ['background-image.vue']
    },
    {
      'demoId': 'credit-card-form-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['credit-card-form-events.vue']
    }
  ],
  apis: [
    {
      'name': 'credit-card-form',
      'type': 'component',
      'properties': [
        {
          'name': 'background-image',
          'type': 'string , object',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置卡片的背景图片;', 'en-US': 'Set the background image of the card.' },
          'demoId': 'background-image'
        },
        {
          'name': 'form-data',
          'type': 'object',
          'defaultValue':
            "// 该属性的默认值为 \n{cardCvv: '', cardName: '', cardYear: '', cardMonth: '', cardNumber: ''}",
          'desc': { 'zh-CN': '设置信用卡显示数据', 'en-US': 'Setting Credit Card Display Data' },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'submit',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '提交时触发的事件', 'en-US': 'Event triggered upon submission' },
          'demoId': 'credit-card-form-events'
        },
        {
          'name': 'input-card-number',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入卡号时触发的事件', 'en-US': 'Event triggered when a card number is entered' },
          'demoId': 'credit-card-form-events'
        },
        {
          'name': 'input-card-name',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入卡持有者时触发的事件', 'en-US': 'Event triggered when a card holder is entered' },
          'demoId': 'credit-card-form-events'
        },
        {
          'name': 'input-card-month',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '选择月时触发的事件', 'en-US': 'Event triggered when a month is selected' },
          'demoId': 'credit-card-form-events'
        },
        {
          'name': 'input-card-year',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '选择年时触发的事件', 'en-US': 'Event triggered when the year is selected' },
          'demoId': 'credit-card-form-events'
        },
        {
          'name': 'input-card-cvv',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入 cvv 时触发的事件', 'en-US': 'CVV input event triggered' },
          'demoId': 'credit-card-form-events'
        }
      ],
      'slots': []
    }
  ]
}
