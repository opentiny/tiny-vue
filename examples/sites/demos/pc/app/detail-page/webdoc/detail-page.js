export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `<p>
          <div>通过 <code> modelValue / v-model</code> 设置要显示的数据。</div>
          <div>在每个数据对象中可设置 <code>hidden: true</code> 来指定默认隐藏的数据。</div>
          <div>用户点击组件右上角的图标可以弹出个性化弹窗，弹窗里能选择是否隐藏指定数据。</div>
        </p>`,
        'en-US': `<p>
          <div> Sets the data to be displayed with <code> modelValue/v-model</code>. </div>
          <div> can set <code>hidden: true</code> in each data object to specify the default hidden data. </div>
          <div> The user clicks the icon in the upper right corner of the component to pop up a personalized popup window, which can choose whether to hide the specified data. </div>
        </p>`
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-show-text',
      'name': { 'zh-CN': '自定义展示文本', 'en-US': 'Custom Text' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>title</code>、<code>text-split</code>、<code>dialog-title</code>、<code>label-title</code>、<code>value-title</code>、<code>tips</code>、<code>save-button</code>、<code>cancel-button</code> 这些属性可指定表头详情栏组件不同位置的展示文本。</p>\n',
        'en-US':
          '<p> via <code>title</code>, <code>text-split</code>, <code>dialog-title</code>, <code>label-title</code>, <code>value-title The </code>, <code>tips</code>, <code>save-button</code>, and <code>cancel-button</code> attributes specify the display text in different positions of the header details bar component. </p>\n'
      },
      'codeFiles': ['custom-show-text.vue']
    }
  ],
  apis: [
    {
      'name': 'detail-page',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue / v-model',
          'type': 'IDetailPageItem[]',
          'typeAnchorName': 'IDetailPageItem',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置表头详情栏的数据', 'en-US': 'Set the data in the table header details column' },
          'demoId': ''
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': `详情栏标, 默认为 '数据'`,
            'en-US': `Details field, default value is' Data '`
          },
          'demoId': 'custom-show-text'
        },
        {
          'name': 'text-split',
          'type': 'string',
          'defaultValue': `'---'`,
          'desc': {
            'zh-CN': `详情栏标题分隔符`,
            'en-US': 'Details column title separator'
          },
          'demoId': 'custom-show-text'
        },
        {
          'name': 'dialog-title',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': "个性化弹窗标题，默认为 '个性化标题'",
            'en-US': "Personalize pop-up title, default is'Personalized title'"
          },
          'demoId': 'custom-show-text'
        },
        {
          'name': 'label-title',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': "个性化弹窗表头文本标题栏字段;默认为 '文本字段'",
            'en-US': "Personalized pop-up window header text title bar field, The default value is 'Title'"
          },
          'demoId': 'custom-show-text'
        },
        {
          'name': 'tips',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': "提示不能全部隐藏的提示语，默认为 '不能全部隐藏'",
            'en-US': "Prompt message that cannot be completely hidden, The default value is 'Cannot hide all' "
          },
          'demoId': 'custom-show-text'
        },
        {
          'name': 'value-title',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': "个性化弹窗表头文本操作栏字段，默认为 '勾选隐藏'",
            'en-US':
              "Personalized pop-up window header text operation column field, The default value is'Click to hide'"
          },
          'demoId': 'custom-show-text'
        },
        {
          'name': 'save-button',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': "个性化弹窗确定按钮的文本，默认为 '确定'",
            'en-US': "Text of the confirmation button in the personalized pop-up window, The default value is'Confirm'"
          },
          'demoId': 'custom-show-text'
        },
        {
          'name': 'cancel-button',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': "个性化弹窗取消按钮的文本，默认为 '取消'",
            'en-US': "Text of the cancel button in the personalized pop-up window, The default value is'Cancel'"
          },
          'demoId': 'custom-show-text'
        }
      ],
      'events': [],
      'slots': []
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
