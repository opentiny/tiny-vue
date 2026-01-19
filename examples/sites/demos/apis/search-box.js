export default {
  mode: ['pc'],
  apis: [
    {
      name: 'search-box',
      type: 'component',
      props: [
        {
          name: 'maxlength',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': 'input 框的原生属性，限制最大输入字符数',
            'en-US': 'The native properties of the input box limit the maximum number of input characters'
          },
          mode: ['pc'],
          pcDemo: 'max-length',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '绑定标签数组，用于控制已选中的筛选标签',
            'en-US': 'Bind tag array to control selected filter tags'
          },
          mode: ['pc'],
          pcDemo: 'v-model',
          mfDemo: ''
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '搜索数据项配置，定义可用的筛选条件',
            'en-US': 'Search data item configuration, defining available filter conditions'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'editable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启标签可编辑功能，开启后标签支持编辑操作（注：map 类型不支持编辑）',
            'en-US':
              'Whether to enable tag editing. When enabled, tags support editing operations (Note: map type does not support editing)'
          },
          mode: ['pc'],
          pcDemo: 'editable',
          mfDemo: ''
        },
        {
          name: 'append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否将下拉面板挂载到 body 元素上',
            'en-US': 'Whether to mount the dropdown panel to the body element'
          },
          mode: ['pc'],
          pcDemo: 'append-to-body',
          mfDemo: ''
        },
        {
          name: 'panel-max-height',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉面板的最大高度，支持 CSS 单位（如：100px、50vh）',
            'en-US': 'Maximum height of the dropdown panel, supports CSS units (e.g., 100px, 50vh)'
          },
          mode: ['pc'],
          pcDemo: 'panel-max-height',
          mfDemo: ''
        },
        {
          name: 'split-input-value',
          type: 'string',
          defaultValue: ',',
          desc: {
            'zh-CN': '切分输入值的分隔符，将输入值按指定字符分成多个关键字，一次性输入生成多个标签',
            'en-US':
              'Separator for splitting input values, splits input values by specified character into multiple keywords to generate multiple tags at once'
          },
          mode: ['pc'],
          pcDemo: 'split-input-value',
          mfDemo: ''
        },
        {
          name: 'default-field',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义默认搜索项，指定默认使用的筛选字段',
            'en-US': 'Custom default search item, specifies the default filter field to use'
          },
          mode: ['pc'],
          pcDemo: 'default-field',
          mfDemo: ''
        },
        {
          name: 'empty-placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '没有筛选项时的占位文本',
            'en-US': 'Placeholder text when there are no filter items'
          },
          mode: ['pc'],
          pcDemo: 'empty-placeholder',
          mfDemo: ''
        },
        {
          name: 'id-map-key',
          type: 'string',
          defaultValue: 'id',
          desc: {
            'zh-CN': '指定筛选项的ID键取值来源，默认取自 items 的 id 键，用于接口返回的数据字段不匹配的情况',
            'en-US':
              'Specifies the ID key value source for filter items, default is the id key from items, used when interface returned data fields do not match'
          },
          mode: ['pc'],
          pcDemo: 'id-map-key',
          mfDemo: ''
        },
        {
          name: 'potential-options',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '潜在匹配项配置，通过 getMatchList 方法异步获取匹配的筛选项',
            'en-US':
              'Potential match configuration, asynchronously get matching filter items through getMatchList method'
          },
          mode: ['pc'],
          pcDemo: 'potential-options',
          mfDemo: ''
        },
        {
          name: 'max-time-length',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '时间长度限制（毫秒数），限制可选择的时间跨度，常用于防止请求时间跨度过大的情形',
            'en-US':
              'Time length limit (in milliseconds), limits the selectable time span, commonly used to prevent request time span from being too large'
          },
          mode: ['pc'],
          pcDemo: 'max-time-length',
          mfDemo: ''
        },
        {
          name: 'show-help',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示帮助图标',
            'en-US': 'Whether to show the help icon'
          },
          mode: ['pc'],
          pcDemo: 'help',
          mfDemo: ''
        },
        {
          name: 'show-prefix-icon',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示前缀搜索图标',
            'en-US': 'Whether to show the prefix search icon'
          },
          mode: ['pc'],
          pcDemo: 'suffix-icon',
          mfDemo: ''
        },
        {
          name: 'show-no-data-tip',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示无数据提示',
            'en-US': 'Whether to show the no data tip'
          },
          mode: ['pc'],
          pcDemo: 'auto-match',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '(newFilters: array, oldFilters: array) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索值变化时触发的回调函数；newFilters 为新的筛选标签数组，oldFilters 为旧的筛选标签数组',
            'en-US':
              'Callback function triggered when search value changes; newFilters is the new filter tag array, oldFilters is the old filter tag array'
          },
          mode: ['pc'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'clear',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '清空值触发的回调函数',
            'en-US': 'Callback function triggered by clearing values'
          },
          mode: ['pc'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'search',
          type: '(filters: array) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '搜索事件，点击搜索按钮或按 Enter 键时触发；filters 为当前筛选标签数组',
            'en-US':
              'Search event triggered when clicking search button or pressing Enter key; filters is the current filter tag array'
          },
          mode: ['pc'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'first-level-select',
          type: '(field: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '第一层级选择事件，当选择一级筛选条件时触发；field 为选中的字段名',
            'en-US':
              'First level selection event triggered when selecting first level filter condition; field is the selected field name'
          },
          mode: ['pc'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'second-level-enter',
          type: '(item: object, options: array) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '第二层级进入事件，当进入二级面板时触发；item 为当前选中的项，options 为选项列表',
            'en-US':
              'Second level enter event triggered when entering second level panel; item is the currently selected item, options is the option list'
          },
          mode: ['pc'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'tag-click',
          type: '(tag: object) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '标签点击事件，当点击已选中的标签时触发；tag 为被点击的标签对象',
            'en-US': 'Tag click event triggered when clicking a selected tag; tag is the clicked tag object'
          },
          mode: ['pc'],
          pcDemo: 'events',
          mfDemo: ''
        },
        {
          name: 'help',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '帮助图标点击事件，当点击帮助图标时触发',
            'en-US': 'Help icon click event triggered when clicking the help icon'
          },
          mode: ['pc'],
          pcDemo: 'help',
          mfDemo: ''
        },
        {
          name: 'exceed',
          type: '(maxlength: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '输入超出限定长度事件，当输入超过 maxlength 限制时触发；maxlength 为最大长度限制',
            'en-US':
              'Input exceeds limit event triggered when input exceeds maxlength limit; maxlength is the maximum length limit'
          },
          mode: ['pc'],
          pcDemo: 'max-length',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'suffix-icon',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '后缀图标插槽，用于自定义搜索框右侧的图标',
            'en-US': 'Suffix icon slot for customizing the icon on the right side of the search box'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'suffix-icon',
          mfDemo: ''
        },
        {
          name: '[slotName]',
          type: '(scope: object) => VNode',
          defaultValue: '',
          desc: {
            'zh-CN':
              '自定义二级面板插槽，通过 item.type = "custom" 和 item.slotName 配置插槽名称，用于自定义二级下拉面板的内容。scope 包含 onConfirm 等方法',
            'en-US':
              'Custom level-2 panel slot, configured through item.type = "custom" and item.slotName to define the slot name, used to customize the content of the level-2 dropdown panel. scope contains methods like onConfirm'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-panel',
          mfDemo: ''
        },
        {
          name: '[slotName]-edit',
          type: '(scope: object) => VNode',
          defaultValue: '',
          desc: {
            'zh-CN':
              '编辑态自定义面板插槽，格式为 `${item.slotName}-edit`，用于在编辑状态下自定义面板内容。scope 包含 onConfirm 等方法',
            'en-US':
              'Editing state custom panel slot, format is `${item.slotName}-edit`, used to customize panel content in editing state. scope contains methods like onConfirm'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-panel',
          mfDemo: ''
        }
      ]
    }
  ],
  types: []
}
