export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'accordion',
      name: {
        'zh-CN': '手风琴效果',
        'en-US': 'accordion effect'
      },
      desc: {
        'zh-CN':
          '<p>配置 `accordion` 属性为 true 后，折叠面板将展示手风琴效果。配置 `v-model` 设置当前激活的面板(如果是手风琴模式，绑定值类型需要为 string ，否则为 array )；`change` 事件，在当前激活面板改变时触发，参数为当前的 value 值；配置 `name` 属性作为每个 collapse-item 的唯一标志符<p>',
        'en-US':
          '<p>If the `accordion` attribute is set to true, the collapse panel displays the accordion effect. Configure `v-model` Sets the currently active panel. (In accordion mode, the binding value type must be string. Otherwise, the binding value type is array.) `change` event, which is triggered when the current active panel changes. The parameter is the current value. Configure the `name` attribute as the unique identifier for each collapse-item</p>'
      },
      codeFiles: ['accordion.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用状态',
        'en-US': 'disabled'
      },
      desc: {
        'zh-CN': '<p>在 `collapse-item` 元素上配置 `disabled` 属性为 true 后，将禁用指定的折叠面板项。<p>',
        'en-US':
          '<p>When the `disabled` attribute is set to true on the `collapse-item` element, the specified collapse panel item is disabled.</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'custom-collapse-title',
      name: {
        'zh-CN': '自定义面板标题',
        'en-US': 'Custom Panel Title'
      },
      desc: {
        'zh-CN':
          '<p>在 `collapse-item` 元素上配置 `title` 属性可以指定每个折叠面板项的标题。但同时也可以通过 `title` 插槽的方式自定义面板标题，比如在标题前增加图标。<p>',
        'en-US':
          '<p>Configuring the `title` attribute on the `collapse-item` element specifies the title of each collapsed panel item. However, you can also customize the panel title by using the `title` slot, such as adding an icon before the title.</p>'
      },
      codeFiles: ['custom-collapse-title.vue']
    },
    {
      demoId: 'custom-collapse-title-right',
      name: {
        'zh-CN': '自定义面板标题右侧内容',
        'en-US': 'Customizing the Content on the Right of the Panel Title'
      },
      desc: {
        'zh-CN':
          '<p>在 `collapse-item` 元素上配置 `title-right` 属性可以指定每个折叠面板项标题的右侧内容。但同时也可以通过 `title-right` 插槽的方式自定义面板标题右侧内容，比如在标题右侧增加图标。<p>',
        'en-US':
          '<p>在 `collapse-item` 元素上配置 `title-right` 属性可以指定每个折叠面板项标题的右侧内容。但同时也可以通过 `title-right` 插槽的方式自定义面板标题右侧内容，比如在标题右侧增加图标。</p>'
      },
      codeFiles: ['custom-collapse-title-right.vue']
    },
    {
      demoId: 'collapse-events',
      name: {
        'zh-CN': '折叠面板事件',
        'en-US': 'Collapse Panel Events'
      },
      desc: {
        'zh-CN': '<p>激活面板的值改变时将触发 `change` 事件。<p>',
        'en-US': '<p>The `change` event is triggered when the value of the active panel changes.</p>'
      },
      codeFiles: ['collapse-events.vue']
    },
    {
      demoId: 'block-close',
      name: {
        'zh-CN': '阻止折叠面板关闭事件',
        'en-US': 'Prevent Collapse Panel Close Event'
      },
      desc: {
        'zh-CN': '<p>:before-close 折叠面板关闭前事件,方法里面 return true/false，表示是否可以关闭<p>',
        'en-US':
          '<p>:before-close: indicates the event before the folding panel is closed. In the method, return true or false indicates whether the folding panel can be closed.</p>'
      },
      codeFiles: ['block-close.vue']
    },
    {
      demoId: 'nested-grid',
      name: {
        'zh-CN': '嵌套表格',
        'en-US': 'Nested Tables'
      },
      desc: {
        'zh-CN': '<p>通过 `collapse-item` 元素的默认插槽嵌入表格。<p>',
        'en-US': '<p>Embed the table through the default slot of the `collapse-item` element</p>'
      },
      codeFiles: ['nested-grid.vue']
    },
    {
      demoId: 'nested-form',
      name: {
        'zh-CN': '嵌套表单',
        'en-US': 'Nested Forms'
      },
      desc: {
        'zh-CN': '<p>通过 `collapse-item` 元素的默认插槽嵌入表单。<p>',
        'en-US': '<p>Embed the form through the default slot of the `collapse-item` element.</p>'
      },
      codeFiles: ['nested-form.vue']
    },
    {
      demoId: 'slot-title',
      name: {
        'zh-CN': '自定义 Title 展示',
        'en-US': 'Customized title display'
      },
      desc: {
        'zh-CN': '<p>通过配置 Collapse 内置的 title 插槽实现自定义标题展示<p>',
        'en-US': '<p>Configure the built-in title slot of Collapse to customize the title display.</p>'
      },
      codeFiles: ['slot-title.vue']
    },
    {
      demoId: 'slot-title-right',
      name: {
        'zh-CN': '自定义 Title 右侧内容展示',
        'en-US': 'Customize the content displayed on the right of the title.'
      },
      desc: {
        'zh-CN': '<p>通过配置 Collapse 内置的 title-right 插槽实现自定义标题右侧内容展示<p>',
        'en-US':
          '<p>Configure the built-in title-right slot of Collapse to display the content on the right of a customized title.</p>'
      },
      codeFiles: ['slot-title-right.vue']
    },
    {
      demoId: 'slot-icon',
      name: {
        'zh-CN': '自定义 icon 图标',
        'en-US': 'Custom Icons'
      },
      desc: {
        'zh-CN': '<p>通过配置 Collapse 内置的 icon 插槽实现图标<p>',
        'en-US': '<p>Icons are implemented by configuring the built-in icon slot of Collapse.</p>'
      },
      codeFiles: ['slot-icon.vue']
    }
  ],
  apis: [
    {
      'name': 'Collapse',
      'type': 'component',
      'slots': [
        {
          'name': 'icon',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '展开收起icon插槽',
            'en-US': 'Expand and collapse icon slot'
          },
          'demoId': 'slot-icon'
        }
      ]
    }
  ]
}
