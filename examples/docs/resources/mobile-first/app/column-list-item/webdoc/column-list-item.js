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
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'size',
      name: {
        'zh-CN': '设置尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `size` 属性可以设置分区列表项的大小，支持 small 和 medium 两种尺寸。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'content-slot',
      name: {
        'zh-CN': '内容区插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `#column1、#column2、#column3、#column4` 可以设置内容区插槽，最多支持 4 个内容插槽。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['content-slot.vue']
    },
    {
      demoId: 'custom-width',
      name: {
        'zh-CN': '自定义内容插槽宽度',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `flex-basis` 属性可以设置内容插槽的宽度，flex-basis 类型为数组，最多能传入 4 个值，支持百分比，固定宽度及固有的尺寸关键词，默认为 auto，详情见 flex 的 flex-basis 属性。<br />通过设置`flex-grow`属性可以设置每一项在 flex 容器中分配剩余空间的相对比例，默认为 1。如果不想自动撑满主容器，可以设为 0，详情见 flex 的 flex-grow 属性。<br />flex-grow 举例：`:flex-grow="[0, 0]" :flex-grow="[2, 1]" :flex-grow="[2, 1,1,1]"` <br />flex-basis 举例：`:flex-basis="["200px", "100px","300px"]" :flex-basis="["75%", "25%"]" :flex-basis="["40%", "20%", "20%", "20%"]"`<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-width.vue']
    },
    {
      demoId: 'icon-click-event',
      name: {
        'zh-CN': '操作列按钮点击事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `icon-click` 给按钮加点击事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['icon-click-event.vue']
    },
    {
      demoId: 'icon-disabled',
      name: {
        'zh-CN': '操作列按钮隐藏与禁用',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>操作列配置项 options 中添加属性 hidden 可以隐藏按钮，可以通过 disabled 属性禁用操作按钮。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['icon-disabled.vue']
    },
    {
      demoId: 'image-operate-slot',
      name: {
        'zh-CN': '图片和操作列插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `#image` 可以设置图片插槽，通过 `#operate` 可以设置操作列插槽。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['image-operate-slot.vue']
    },
    {
      demoId: 'show-radio',
      name: {
        'zh-CN': '单选',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过属性`show-radio`设置卡片单选，需同时设置 label，`disabled` 属性可以禁用单选按钮 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-radio.vue']
    },
    {
      demoId: 'show-checkbox',
      name: {
        'zh-CN': '多选',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过属性`show-checkbox`设置卡片多选，需同时设置 label，`disabled` 属性可以禁用复选按钮 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-checkbox.vue']
    },
    {
      demoId: 'list-group',
      name: {
        'zh-CN': '列表组',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过引入`column-list-group`组件来对列表进行分组，使用列表组结合复选功能时，需要给 item 设置 label，以此来记录选中的列表项。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['list-group.vue']
    }
  ],
  apis: []
}
