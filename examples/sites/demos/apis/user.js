export default {
  mode: ['pc'],
  apis: [
    {
      name: 'user',
      type: 'component',
      props: [
        {
          name: 'allow-copy',
          type: 'boolean',
          defaultValue: '该属性的默认值为 false，表示不能复制',
          desc: {
            'zh-CN': '搜索单选场景，是否允许复制输入框的内容;属性会透传给内部的 Select 组件，参考 Select 示例',
            'en-US':
              'Indicates whether content in the text box can be copied in the single-choice search scenario. The attribute is transparently transferred to the internal Select component. For details, see the Select example.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'cache',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN': '是否缓存用户数据',
            'en-US': 'Whether to cache user data'
          },
          mode: ['pc'],
          pcDemo: 'cache-users'
        },
        {
          name: 'cache-fields',
          type: 'Array',
          defaultValue: '该属性的默认值为 []',
          desc: {
            'zh-CN': '设置需要缓存的用户数据',
            'en-US': 'Set the user data to be cached.'
          },
          mode: ['pc'],
          pcDemo: 'cache-users'
        },
        {
          name: 'cache-key',
          type: 'string',
          defaultValue: '该属性的默认值为 tiny-user',
          desc: {
            'zh-CN': '设置缓存数据的 key 值',
            'en-US': 'Set the key value of cached data.'
          },
          mode: ['pc'],
          pcDemo: 'cache-users'
        },
        {
          name: 'collapse-show-overflow-tooltip',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN': '是否省略显示超出一行的数据并有tooltip提示',
            'en-US': 'Whether to omit the data that exceeds one line and display a tooltip.'
          },
          mode: ['pc'],
          pcDemo: 'collapse-show-overflow-tooltip'
        },
        {
          name: 'collapse-tags',
          type: 'boolean',
          defaultValue: '该属性的默认值为 false',
          desc: {
            'zh-CN': '多用户时是否折叠标签',
            'en-US': 'Whether to collapse tags when there are multiple users'
          },
          mode: ['pc'],
          pcDemo: 'multiple-users-tag'
        },
        {
          name: 'delay',
          type: 'number',
          defaultValue: '该属性的默认值为 600 毫秒',
          desc: {
            'zh-CN': '设置延时加载的时间',
            'en-US': 'Set the loading delay time.'
          },
          mode: ['pc'],
          pcDemo: 'delay-load'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: '该属性的默认值为 false',
          desc: {
            'zh-CN': '是否禁用户组件',
            'en-US': 'Whether to disable the user component'
          },
          mode: ['pc'],
          pcDemo: 'dynamic-disable'
        },
        {
          name: 'fetchSuggestUser',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义输入查询服务',
            'en-US': 'Customized input query service'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'fetchW3Accounts',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义批量查询用户服务',
            'en-US': 'User-defined batch query service'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'multiple',
          type: 'boolean',
          defaultValue: '该属性的默认值为 false',
          desc: {
            'zh-CN': '是否开启多用户形式，默认为 false ',
            'en-US': 'Whether to enable the multi-user mode. The default value is false.'
          },
          mode: ['pc'],
          pcDemo: 'multiple-users'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置输入框占位文本',
            'en-US': 'Set the placeholder text in the text box'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: '该属性的默认值为 true',
          desc: {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. When a fault occurs in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 popper 添加类名(可参考 popover 组件)',
            'en-US': 'Add a class name for the popper. For details, see the popover component.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置用户组件尺寸',
            'en-US': 'Set the user component size'
          },
          mode: ['pc'],
          pcDemo: 'user-select-size'
        },
        {
          name: 'sort-by-fetch-data',
          type: 'boolean',
          defaultValue: '该属性的默认值为 false',
          desc: {
            'zh-CN': '联想时下拉框的数据顺序和接口返回的数据顺序一致',
            'en-US':
              'The data sequence in the drop-down list box during association is the same as that returned by the interface.'
          },
          mode: ['pc'],
          pcDemo: 'custom-service'
        },
        {
          name: 'sortable',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义用户拖拽排序，该属性引用 sortablejs 插件进行排序',
            'en-US': 'User-defined drag-and-drop sorting. This attribute references the sortablejs plug-in for sorting.'
          },
          mode: ['pc'],
          pcDemo: 'custom-sort'
        },
        {
          name: 'suggest-length',
          type: 'number',
          defaultValue: '该属性的默认值为 3',
          desc: {
            'zh-CN': '设置输入指定长度完成后进行加载',
            'en-US': 'Load after the input length is set.'
          },
          mode: ['pc'],
          pcDemo: 'load-after-input-the-length'
        },
        {
          name: 'tag-selectable',
          type: 'boolean',
          defaultValue: '该属性的默认值为 false',
          desc: {
            'zh-CN': '是否开启输入框中已选择的选项可复制',
            'en-US': 'Whether to enable copying of selected options in the text box'
          },
          mode: ['pc'],
          pcDemo: 'tag-copy'
        },
        {
          name: 'text-field',
          type: 'string',
          defaultValue: '该属性的默认值为 userCN',
          desc: {
            'zh-CN': '显示字段映射',
            'en-US': 'Display field mapping'
          },
          mode: ['pc'],
          pcDemo: 'text-field'
        },
        {
          name: 'textSplit',
          type: 'string',
          defaultValue: '文本粘贴复制查询时的分割符，该属性的默认值为 ,',
          desc: {
            'zh-CN': '文本分隔符',
            'en-US': 'Text separator'
          },
          mode: ['pc'],
          pcDemo: 'value-split'
        },
        {
          name: 'value',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '配置默认值',
            'en-US': 'Default value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'value-field',
          type: 'string',
          defaultValue: '该属性的默认值为 userId',
          desc: {
            'zh-CN': '取值字段映射',
            'en-US': 'Value Field Mapping'
          },
          mode: ['pc'],
          pcDemo: 'value-field'
        },
        {
          name: 'value-split',
          type: 'string',
          defaultValue: '该属性的默认值为 ,',
          desc: {
            'zh-CN': '值分隔符',
            'en-US': 'Value Separator'
          },
          mode: ['pc'],
          pcDemo: 'value-split'
        }
      ],
      events: [
        {
          name: 'change',
          defaultValue: '',
          desc: {
            'zh-CN': '值发生变化时触发',
            'en-US': 'This event is triggered when the value changes.'
          },
          mode: ['pc'],
          pcDemo: 'event-change'
        },
        {
          name: 'error',
          defaultValue: '',
          desc: {
            'zh-CN': '输入未匹配到用户信息时触发',
            'en-US': 'This event is triggered when no user information is matched.'
          },
          mode: ['pc'],
          pcDemo: 'event-error'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'options',
          defaultValue: '',
          desc: {
            'zh-CN': '选项文本',
            'en-US': 'Option Text'
          },
          mode: ['pc'],
          pcDemo: 'user-options'
        }
      ]
    }
  ]
}
