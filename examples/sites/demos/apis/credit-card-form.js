export default {
  mode: ['pc'],
  apis: [
    {
      name: 'credit-card-form',
      type: 'component',
      props: [
        {
          name: 'background-image',
          type: 'string , object',
          defaultValue: '',
          desc: {
            'zh-CN': '设置卡片的背景图片;',
            'en-US': 'Set the background image of the card.'
          },
          mode: ['pc'],
          pcDemo: 'background-image'
        },
        {
          name: 'form-data',
          type: 'object',
          defaultValue:
            "// 该属性的默认值为 \n{cardCvv: '', cardName: '', cardYear: '', cardMonth: '', cardNumber: ''}",
          desc: {
            'zh-CN': '设置信用卡显示数据',
            'en-US': 'Setting Credit Card Display Data'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'input-card-cvv',
          defaultValue: '',
          desc: {
            'zh-CN': '输入 cvv 时触发的事件',
            'en-US': 'CVV input event triggered'
          },
          mode: ['pc'],
          pcDemo: 'credit-card-form-events'
        },
        {
          name: 'input-card-month',
          defaultValue: '',
          desc: {
            'zh-CN': '选择月时触发的事件',
            'en-US': 'Event triggered when a month is selected'
          },
          mode: ['pc'],
          pcDemo: 'credit-card-form-events'
        },
        {
          name: 'input-card-name',
          defaultValue: '',
          desc: {
            'zh-CN': '输入卡持有者时触发的事件',
            'en-US': 'Event triggered when a card holder is entered'
          },
          mode: ['pc'],
          pcDemo: 'credit-card-form-events'
        },
        {
          name: 'input-card-number',
          defaultValue: '',
          desc: {
            'zh-CN': '输入卡号时触发的事件',
            'en-US': 'Event triggered when a card number is entered'
          },
          mode: ['pc'],
          pcDemo: 'credit-card-form-events'
        },
        {
          name: 'input-card-year',
          defaultValue: '',
          desc: {
            'zh-CN': '选择年时触发的事件',
            'en-US': 'Event triggered when the year is selected'
          },
          mode: ['pc'],
          pcDemo: 'credit-card-form-events'
        },
        {
          name: 'submit',
          defaultValue: '',
          desc: {
            'zh-CN': '提交时触发的事件',
            'en-US': 'Event triggered upon submission'
          },
          mode: ['pc'],
          pcDemo: 'credit-card-form-events'
        }
      ],
      methods: [],
      slots: []
    }
  ]
}
