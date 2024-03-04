export default {
  mode: ['pc'],
  apis: [
    {
      name: 'detail-page',
      type: 'component',
      props: [
        {
          name: 'cancel-button',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "个性化弹窗取消按钮的文本，默认为 '取消'",
            'en-US': "Text of the cancel button in the personalized pop-up window, The default value is'Cancel'"
          },
          mode: ['pc'],
          pcDemo: 'custom-show-text'
        },
        {
          name: 'dialog-title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "个性化弹窗标题，默认为 '个性化标题'",
            'en-US': "Personalize pop-up title, default is'Personalized title'"
          },
          mode: ['pc'],
          pcDemo: 'custom-show-text'
        },
        {
          name: 'label-title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "个性化弹窗表头文本标题栏字段;默认为 '文本字段'",
            'en-US': "Personalized pop-up window header text title bar field, The default value is 'Title'"
          },
          mode: ['pc'],
          pcDemo: 'custom-show-text'
        },
        {
          name: 'modelValue / v-model',
          typeAnchorName: 'IDetailPageItem',
          type: 'IDetailPageItem[]',
          defaultValue: '',
          desc: {
            'zh-CN': '设置表头详情栏的数据',
            'en-US': 'Set the data in the table header details column'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'save-button',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "个性化弹窗确定按钮的文本，默认为 '确定'",
            'en-US': "Text of the confirmation button in the personalized pop-up window, The default value is'Confirm'"
          },
          mode: ['pc'],
          pcDemo: 'custom-show-text'
        },
        {
          name: 'text-split',
          type: 'string',
          defaultValue: "'---'",
          desc: {
            'zh-CN': '详情栏标题分隔符',
            'en-US': 'Details column title separator'
          },
          mode: ['pc'],
          pcDemo: 'custom-show-text'
        },
        {
          name: 'tips',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "提示不能全部隐藏的提示语，默认为 '不能全部隐藏'",
            'en-US': "Prompt message that cannot be completely hidden, The default value is 'Cannot hide all' "
          },
          mode: ['pc'],
          pcDemo: 'custom-show-text'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "详情栏标, 默认为 '数据'",
            'en-US': "Details field, default value is' Data '"
          },
          mode: ['pc'],
          pcDemo: 'custom-show-text'
        },
        {
          name: 'value-title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "个性化弹窗表头文本操作栏字段，默认为 '勾选隐藏'",
            'en-US':
              "Personalized pop-up window header text operation column field, The default value is'Click to hide'"
          },
          mode: ['pc'],
          pcDemo: 'custom-show-text'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'IDetailPageItem',
      type: 'interface',
      code: `interface IDetailPageItem {
  label: string
  value: string
  hidden?: boolean
}`
    }
  ]
}
