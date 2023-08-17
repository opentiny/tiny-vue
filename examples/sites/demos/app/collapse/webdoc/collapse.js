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
      'demoId': 'accordion',
      'name': { 'zh-CN': '手风琴效果', 'en-US': 'Accordion Effect' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>accordion</code> 属性为 true 后，折叠面板将展示手风琴效果。\n配置 <code>v-model</code> 设置当前激活的面板(如果是手风琴模式，绑定值类型需要为 string ，否则为 array )\n<code>change</code> 事件，在当前激活面板改变时触发，参数为当前的 value 值\n配置 <code>name</code> 属性作为每个 collapse-item 的唯一标志符</p>\n',
        'en-US':
          '<p>After <code>accordion</code> is set to true, the collapsed panel displays the accordion effect. \nConfigure <code>v-model</code> to set the currently active panel. (In accordion mode, the binding value type must be string. Otherwise, the binding value type is array.) \n<code>change</code> event, which is triggered when the current active panel changes. The parameter is the current value.\n Configure the <code>name</code> attribute as the unique identifier of each collapse-item.</p>\n'
      },
      'codeFiles': ['accordion.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用状态', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN':
          '<p>在 <code>collapse-item</code> 元素上配置 <code>disabled</code> 属性为 true 后，将禁用指定的折叠面板项。</p>\n',
        'en-US':
          '<p>When the <code>disabled</code> attribute is set to true on the <code>collapse-item</code> element, the specified collapse panel item is disabled. </p>\n'
      },
      'codeFiles': ['dynamic-disable.vue']
    },
    {
      'demoId': 'custom-collapse-title',
      'name': { 'zh-CN': '自定义面板标题', 'en-US': 'Custom Panel Title' },
      'desc': {
        'zh-CN':
          '<p>在 <code>collapse-item</code> 元素上配置 <code>title</code> 属性可以指定每个折叠面板项的标题。但同时也可以通过 <code>title</code> 插槽的方式自定义面板标题，比如在标题前增加图标。</p>\n',
        'en-US':
          '<p>Configure the <code>title</code> attribute on the <code>collapse-item</code> element to specify the title of each collapse panel item. However, you can also customize the panel title by using the <code>title</code> slot, for example, adding an icon before the title. </p>\n'
      },
      'codeFiles': ['custom-collapse-title.vue']
    },
    {
      'demoId': 'custom-collapse-icon',
      'name': { 'zh-CN': '自定义展开折叠图标', 'en-US': 'Customize the expansion and collapse icon' },
      'desc': {
        'zh-CN':
          '<p>在 <code>collapse-item</code> 元素上可以通过 <code>icon</code> 插槽的方式自定义展开折叠 icon 图标。</p>\n',
        'en-US':
          '<p>On the <code>collapse-item</code> element, you can customize the folding icon icon by using the <code>icon</code> slot. </p>\n'
      },
      'codeFiles': ['custom-collapse-icon.vue']
    },
    {
      'demoId': 'collapse-events',
      'name': { 'zh-CN': '折叠面板事件', 'en-US': 'Fold Panel Event' },
      'desc': {
        'zh-CN': '<p>激活面板的值改变时将触发 <code>change</code> 事件。</p>\n',
        'en-US': '<p>When the value of the active panel changes, the <code>change</code> event is triggered. </p>\n'
      },
      'codeFiles': ['collapse-events.vue']
    },
    {
      'demoId': 'block-close',
      'name': { 'zh-CN': '阻止折叠面板关闭事件', 'en-US': 'Prevent the event of closing the folding panel' },
      'desc': {
        'zh-CN': '<p>:before-close 折叠面板关闭前事件,方法里面return true/false，表示是否可以关闭</p>\n',
        'en-US':
          '<p>:before-close event before closing the folding panel. In the method, return true/false indicates whether the folding panel can be closed.</p>\n'
      },
      'codeFiles': ['block-close.vue']
    },
    {
      'demoId': 'nested-grid',
      'name': { 'zh-CN': '嵌套表格', 'en-US': 'Nested Table' },
      'desc': {
        'zh-CN': '<p>通过 <code>collapse-item</code> 元素的默认插槽嵌入表格。</p>\n',
        'en-US': '<p>Embeds the table through the default slot of the <code>collapse-item</code> element. </p>\n'
      },
      'codeFiles': ['nested-grid.vue']
    },
    {
      'demoId': 'nested-form',
      'name': { 'zh-CN': '嵌套表单', 'en-US': 'Nested Form' },
      'desc': {
        'zh-CN': '<p>通过 <code>collapse-item</code> 元素的默认插槽嵌入表单。</p>\n',
        'en-US': '<p>Embed the form through the default slot of the <code>collapse-item</code> element. </p>\n'
      },
      'codeFiles': ['nested-form.vue']
    },
    {
      'demoId': 'custom-title-right',
      'name': { 'zh-CN': '自定义面板标题右侧内容', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>在 <code>collapse-item</code> 元素上配置 <code>title-right</code> 属性可以指定每个折叠面板项标题的右侧内容。但同时也可以通过 <code>title-right</code> 插槽的方式自定义面板标题右侧内容，比如在标题右侧增加图标。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['custom-title-right.vue']
    }
  ],
  apis: [
    {
      'name': 'collapse',
      'type': 'component',
      'properties': [],
      'events': [],
      'slots': [],
      'collapse-attrs': [
        {
          'name': 'modelValue / v-model',
          'type': 'String , Array , Number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当前激活的面板(如果是手风琴模式，绑定值类型需要为String，否则为array)',
            'en-US':
              'Currently activated panel (In accordion mode, the binding value type must be String. Otherwise, the binding value type is array.)'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'accordion',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否手风琴模式', 'en-US': 'In accordion mode' },
          'demoId': 'accordion'
        },
        {
          'name': 'before-close',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '阻止折叠面板关闭事件', 'en-US': 'Do not close the folding panel.' },
          'demoId': 'block-close'
        }
      ],
      'collapse-slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'dynamic-disable'
        }
      ],
      'collapse-events': [
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为String，否则为array)',
            'en-US':
              'Triggered when the current active panel changes. (In accordion mode, the type of activeNames is String. Otherwise, the type of activeNames is array.)'
          },
          'demoId': 'collapse-events'
        }
      ],
      'collapseItem-attrs': [
        {
          'name': 'name',
          'type': 'String | Number',
          'defaultValue': '',
          'desc': { 'zh-CN': '唯一标志符', 'en-US': 'Unique identifier' },
          'demoId': 'accordion'
        },
        {
          'name': 'title',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '面板标题', 'en-US': 'Panel Title' },
          'demoId': 'custom-collapse-title'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Disable' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'title-right',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义面板标题右侧内容', 'en-US': '' },
          'demoId': 'custom-title-right'
        }
      ],
      'collapseItem-slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'title',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '标题', 'en-US': 'Title' },
          'demoId': 'custom-collapse-title'
        },
        {
          'name': 'icon',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '展开折叠 icon 图标', 'en-US': 'Expand and collapse the icon.' },
          'demoId': 'custom-collapse-icon'
        },
        {
          'name': 'title-right',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义面板标题右侧内容', 'en-US': '' },
          'demoId': 'custom-title-right'
        }
      ]
    }
  ]
}
