export default {
  column: '2',
  owner: '',
  metaData: {
    deprecated: '3.12.0',
    removed: '3.15.0'
  },
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '<p>\n          <div>通过 <code> modelValue / v-model</code> 设置要显示的数据。</div>\n          <div>在每个数据对象中可设置 <code>hidden: true</code> 来指定默认隐藏的数据。</div>\n          <div>用户点击组件右上角的图标可以弹出个性化弹窗，弹窗里能选择是否隐藏指定数据。</div>\n        </p>',
        'en-US':
          '<p>\n          <div> Sets the data to be displayed with <code> modelValue/v-model</code>. </div>\n          <div> can set <code>hidden: true</code> in each data object to specify the default hidden data. </div>\n          <div> The user clicks the icon in the upper right corner of the component to pop up a personalized popup window, which can choose whether to hide the specified data. </div>\n        </p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-show-text',
      name: {
        'zh-CN': '自定义展示文本',
        'en-US': 'Custom Text'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>title</code>、<code>text-split</code>、<code>dialog-title</code>、<code>label-title</code>、<code>value-title</code>、<code>tips</code>、<code>save-button</code>、<code>cancel-button</code> 这些属性可指定表头详情栏组件不同位置的展示文本。</p>\n',
        'en-US':
          '<p> via <code>title</code>, <code>text-split</code>, <code>dialog-title</code>, <code>label-title</code>, <code>value-title The </code>, <code>tips</code>, <code>save-button</code>, and <code>cancel-button</code> attributes specify the display text in different positions of the header details bar component. </p>\n'
      },
      codeFiles: ['custom-show-text.vue']
    }
  ]
}
