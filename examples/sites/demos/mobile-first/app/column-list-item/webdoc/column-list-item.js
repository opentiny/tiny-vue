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
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '设置尺寸',
        'en-US': 'Set Size'
      },
      desc: {
        'zh-CN': '<p>通过 `size` 属性可以设置分区列表项的大小，支持 small 和 medium 两种尺寸。</p>',
        'en-US':
          '<p>You can use the `size` attribute to set the size of the partition list item. The size can be small or medium.</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'content-slot',
      name: {
        'zh-CN': '内容区插槽',
        'en-US': 'Content Area Slot'
      },
      desc: {
        'zh-CN': '<p>通过 `#column1、#column2、#column3、#column4` 可以设置内容区插槽，最多支持 4 个内容插槽。<p>',
        'en-US':
          '<p>You can use `#column1, #column2, #column3, and #column4` to set the content area slots. A maximum of four content slots are supported.</p>'
      },
      codeFiles: ['content-slot.vue']
    },
    {
      demoId: 'custom-width',
      name: {
        'zh-CN': '自定义内容插槽宽度',
        'en-US': 'Custom Content Slot Width'
      },
      desc: {
        'zh-CN':
          '<p>通过 `flex-basis` 属性可以设置内容插槽的宽度，flex-basis 类型为数组，最多能传入 4 个值，支持百分比，固定宽度及固有的尺寸关键词，默认为 auto，详情见 flex 的 flex-basis 属性。<br />通过设置`flex-grow`属性可以设置每一项在 flex 容器中分配剩余空间的相对比例，默认为 1。如果不想自动撑满主容器，可以设为 0，详情见 flex 的 flex-grow 属性。<br />flex-grow 举例：`:flex-grow="[0, 0]" :flex-grow="[2, 1]" :flex-grow="[2, 1,1,1]"` <br />flex-basis 举例：`:flex-basis="["200px", "100px","300px"]" :flex-basis="["75%", "25%"]" :flex-basis="["40%", "20%", "20%", "20%"]"`</p>',
        'en-US':
          '<p>You can use the `flex-basis` attribute to set the width of the content slot. The flex-basis type is an array. A maximum of four values can be transferred. The percentage, fixed width, and inherent size keywords are supported. The default value is auto. For details, see the flex-basis attribute of Flex.<br />By setting the `flex-grow` property, you can set the relative proportion of the remaining space allocated to each item in the flex container. The default value is 1. If you do not want to automatically fill the main container, set this parameter to 0. For details, see the flex-grow attribute of flex.<br />flex-grow举例：`:flex-grow="[0, 0]":flex-grow="[2, 1]":flex-grow="[2,1,1]"`<br />flex-basis例如：`:flex-basis="["200px","100px","300px"]":flex-basis="["75%","25%"]":flex-basis="["40%","20%","20%"]"`</p>'
      },
      codeFiles: ['custom-width.vue']
    },
    {
      demoId: 'icon-click-event',
      name: {
        'zh-CN': '操作列按钮点击事件',
        'en-US': 'Clicking a button in the operation column'
      },
      desc: {
        'zh-CN': '<p>通过 `icon-click` 给按钮加点击事件。</p>',
        'en-US': '<p>Add a click event to a button through `icon-click`.</p>'
      },
      codeFiles: ['icon-click-event.vue']
    },
    {
      demoId: 'icon-disabled',
      name: {
        'zh-CN': '操作列按钮隐藏与禁用',
        'en-US': 'Hide or Disable Buttons in the Operation Column'
      },
      desc: {
        'zh-CN': '<p>操作列配置项 options 中添加属性 hidden 可以隐藏按钮，可以通过 disabled 属性禁用操作按钮。</p>',
        'en-US':
          '<p>The hidden attribute is added to the options configuration item in the Operation column to hide the button. The disabled attribute can be used to disable the operation button.</p>'
      },
      codeFiles: ['icon-disabled.vue']
    },
    {
      demoId: 'image-operate-slot',
      name: {
        'zh-CN': '图片和操作列插槽',
        'en-US': 'Picture and Action Column Slots'
      },
      desc: {
        'zh-CN': '<p>通过 `#image` 可以设置图片插槽，通过 `#operate` 可以设置操作列插槽。</p>',
        'en-US': '<p>You can use `#image` to set the picture slot and `#operate` to set the operation column slot.</p>'
      },
      codeFiles: ['image-operate-slot.vue']
    },
    {
      demoId: 'show-radio',
      name: {
        'zh-CN': '单选',
        'en-US': 'Single-choice'
      },
      desc: {
        'zh-CN': '<p>通过属性`show-radio`设置卡片单选，需同时设置 label，`disabled` 属性可以禁用单选按钮 。</p>',
        'en-US':
          '<p>Use the `show-radio` attribute to set the card radio option. You need to set the label and `disabled` attribute to disable the radio option button.</p>'
      },
      codeFiles: ['show-radio.vue']
    },
    {
      demoId: 'show-checkbox',
      name: {
        'zh-CN': '多选',
        'en-US': 'Multiple Choices'
      },
      desc: {
        'zh-CN': '<p>通过属性`show-checkbox`设置卡片多选，需同时设置 label，`disabled` 属性可以禁用复选按钮 。</p>',
        'en-US':
          '<p>Use the `show-checkbox` attribute to set multiple card selections. You need to set the label at the same time. The `disabled` attribute can disable the check button.</p>'
      },
      codeFiles: ['show-checkbox.vue']
    },
    {
      demoId: 'list-group',
      name: {
        'zh-CN': '列表组',
        'en-US': 'List Group'
      },
      desc: {
        'zh-CN':
          '<p>通过引入`column-list-group`组件来对列表进行分组，使用列表组结合复选功能时，需要给 item 设置 label，以此来记录选中的列表项。</p>',
        'en-US':
          '<p>The `column-list-group` component is introduced to group lists. When the list group and check function are used, you need to set labels for items to record the selected list items.</p>'
      },
      codeFiles: ['list-group.vue']
    }
  ]
}
