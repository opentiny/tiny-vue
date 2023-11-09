export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基础用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>基础用法。</p>',
        'en-US': '<p>Basic Usage. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 属性可以设置为禁用状态。</p>\n',
        'en-US': '<p>The <code>disabled</code> attribute can be set to the disabled state. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '输入框大小', 'en-US': 'Text box size' },
      'desc': {
        'zh-CN': '<p>可选择值为<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p>The value can be <code>medium</code>, <code>small</code>, or <code>mini</code></p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '可清除', 'en-US': 'Can be cleared' },
      'desc': {
        'zh-CN': '<p>配置 <code>clearable</code> 属性后，输入内容后会显示清除图标，单击可以清除输入框内容。</p>\n',
        'en-US':
          '<p>After the <code>clearable</code> attribute is configured, the clear icon is displayed after you enter content. You can click to clear the content in the text box. </p>\n'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'slot',
      'name': { 'zh-CN': '插槽', 'en-US': 'slot' },
      'desc': {
        'zh-CN': '<p>分别配置 <code>prepend</code>、<code>append</code>、<code>prefix</code>、<code>suffix</code>、<code>default</code> 插槽</p>\n',
        'en-US': '<p>Configure <code>prepend</code>, <code>append</code>, <code>prefix</code>, <code>default</code>, and <code>suffix</code> slots.</p>\n'
      },
      'codeFiles': ['slot.vue']
    },
    {
      'demoId': 'custom-icon',
      'name': { 'zh-CN': '图标', 'en-US': 'Icon' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>prefix-icon</code> 和 <code>suffix-icon</code> 属性可分别自定义输入框前后置图标。</p>\n',
        'en-US':
          '<p>Configure the <code>prefix-icon</code> and <code>suffix-icon</code> attributes to customize the icons before and after the text box. </p>\n'
      },
      'codeFiles': ['custom-icon.vue']
    },
    {
      'demoId': 'debounce',
      'name': { 'zh-CN': '去抖延时', 'en-US': 'Debounce Delay' },
      'desc': {
        'zh-CN': '<p>通过 <code>debounce</code> 属性可以设置获取输入建议的去抖延时，默认值为 300 毫秒。</p>\n',
        'en-US':
          '<p>You can set the dejitter delay for obtaining input suggestions through the <code>debounce</code> attribute. The default value is 300 ms. </p>\n'
      },
      'codeFiles': ['debounce.vue']
    },
    {
      'demoId': 'hide-loading',
      'name': { 'zh-CN': '加载图标', 'en-US': 'Loading Icon' },
      'desc': {
        'zh-CN': '<p>设置 <code>hide-loading</code> 属性为 true ,可以隐藏加载图标。</p>\n',
        'en-US': '<p>Set <code>hide-loading</code> to true to hide the loading icon. </p>\n'
      },
      'codeFiles': ['hide-loading.vue']
    },
    {
      'demoId': 'remote-search',
      'name': { 'zh-CN': '远程搜索', 'en-US': 'Remote Search' },
      'desc': {
        'zh-CN': '<p>通过 <code>fetch-suggestions</code> 属性设置远程搜索。</p>\n',
        'en-US': '<p>Set the remote search through the <code>fetch-suggestions</code> attribute. </p>\n'
      },
      'codeFiles': ['remote-search.vue']
    },
    {
      'demoId': 'value-key',
      'name': { 'zh-CN': '显示的键名', 'en-US': 'Key Name to be displayed.' },
      'desc': {
        'zh-CN':
          '<p>输入内容后，建议列表中默认显示输入建议对象中 value 键名对应的值，若对象中没有 value 键名，就可以通过 <code>value-key</code> 属性指定显示的键名。</p>\n',
        'en-US':
          '<p>After you enter content, the value corresponding to the value key name of the input object is displayed in the suggestion list by default. If the object does not have a value key name, you can specify the key name by using the <code>value-key</code> attribute. </p>\n'
      },
      'codeFiles': ['value-key.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '列表样式', 'en-US': 'List Style' },
      'desc': {
        'zh-CN':
          '<p><code>popper-class</code> 属性可指定一个样式类名，可自定义建议列表的样式。\n<code>popper-append-to-body</code> 属性可设置是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false。</p>\n',
        'en-US':
          '<p><code>popper-class</code> property specifies a style class name to customize the style of the suggestion list. The \n<code>popper-append-to-body</code> property sets whether the drop-down list is inserted into the body element. You can set this property to false when a problem occurs in locating the drop-down list. </p>\n'
      },
      'codeFiles': ['popper-class.vue']
    },
    {
      'demoId': 'placement',
      'name': { 'zh-CN': '菜单弹出位置', 'en-US': 'Menu Pop-up Position' },
      'desc': {
        'zh-CN':
          '<p><code>placement</code> 属性可以设置菜单弹出位置，默认为 <code>bottom-start</code>。</p>\n',
        'en-US':
          '<p><code>placement</code> property can be used to set the menu pop-up position. The default value is <code>bottom-start</code>. </p>\n'
      },
      'codeFiles': ['placement.vue']
    },
    {
      'demoId': 'highlight-first-item',
      'name': { 'zh-CN': '第一项高亮', 'en-US': 'Highlight the first item' },
      'desc': {
        'zh-CN': '<p>设置 <code>highlight-first-item</code> 属性为 true ,可以突出显示远程搜索建议中的第一项。</p>\n',
        'en-US':
          '<p>Set the <code>highlight-first-item</code> attribute to true to highlight the first item in the remote search suggestion. </p>\n'
      },
      'codeFiles': ['highlight-first-item.vue']
    },
    {
      'demoId': 'no-trigger-on-focus',
      'name': { 'zh-CN': '触发', 'en-US': 'Trigger' },
      'desc': {
        'zh-CN':
          '<p>默认输入框聚焦就会显示全部的建议列表，但设置 <code>trigger-on-focus</code> 属性为 false 后只有在匹配到输入建议后才会显示匹配到的建议列表。</p>\n',
        'en-US':
          '<p> By default, all suggestions are displayed when the input box is focused. However, if <code>trigger-on-focus</code> is set to false, the list of matched suggestions is displayed only after the input suggestions are matched. </p>\n'
      },
      'codeFiles': ['no-trigger-on-focus.vue']
    },
    {
      'demoId': 'select-event',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN':
          '<p>Autocomplete 组件提供 <code>select</code> 事件，点击选中建议项时触发，回调参数为选中建议项。\n通过 <code>select-when-unmatched</code> 设置在输入联想没有匹配值时，按 Enter 键时是否触发 select 事件，默认值为 false。</p>\n',
        'en-US':
          '<p>Autocomplete provides the <code>select</code> event, which is triggered when a suggestion item is selected. The callback parameter is the suggestion item selected. \n Use <code>select-when-unmatched</code> to set whether to trigger the select event when you press Enter when no matching value is entered. The default value is false. </p>\n'
      },
      'codeFiles': ['select-event.vue']
    }
  ],
  apis: [
    {
      'name': 'autocomplete',
      'type': 'component',
      'properties': [
        {
          'name': 'clearable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否可清空', 'en-US': 'Whether to clear data' },
          'demoId': 'clearable'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框占位文本', 'en-US': 'Placeholder text in the text box' },
          'demoId': 'hide-loading'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Whether to disabled' },
          'demoId': 'disabled'
        },
        {
          'name': 'value-key',
          'type': 'string',
          'defaultValue': 'value',
          'desc': {
            'zh-CN': '在输入建议对象中，用于显示和匹配输入的键名',
            'en-US': 'In the Input Suggestion object, key names for displaying and matching inputs'
          },
          'demoId': 'value-key'
        },
        {
          'name': 'v-model',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '必填值，输入绑定值', 'en-US': 'This parameter is mandatory. Enter a bound value.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'debounce',
          'type': 'number',
          'defaultValue': '300',
          'desc': { 'zh-CN': '获取输入建议的去抖延时', 'en-US': 'Obtain the recommended input dejitter delay.' },
          'demoId': 'debounce'
        },
        {
          'name': 'placement',
          'typeAnchorName': 'IAutocompletePlacement',
          'type': 'IAutocompletePlacement',
          'defaultValue': '"bottom-start"',
          'desc': {
            'zh-CN': '菜单弹出位置',
            'en-US':
              'Menu pop-up position'
          },
          'demoId': 'placement'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉列表的类名',
            'en-US': 'Class name of the Autocomplete drop-down list box'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'size',
          'type': '"medium" | "small" | "mini"',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置组件大小',
            'en-US': 'Set the component size.'
          },
          'demoId': 'size'
        },
        {
          'name': 'trigger-on-focus',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否在输入框 focus 时显示建议列表',
            'en-US': 'Whether to display the suggestion list when the text box is focused'
          },
          'demoId': 'no-trigger-on-focus'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': 'input元素的原生属性', 'en-US': 'Native attributes of the input element' }
        },
        {
          'name': 'select-when-unmatched',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件',
            'en-US':
              'Indicates whether to trigger the select event when pressing Enter when the input does not have any matching suggestions.'
          },
          'demoId': 'select-event'
        },
        {
          'name': 'label',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '等价于原生 input aria-label 属性', 'en-US': 'Equiphorus input aria-label attribute' },
          'demoId': ''
        },
        {
          'name': 'prefix-icon',
          'type': 'Component',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框头部图标', 'en-US': 'Icon on the header of the text box' },
          'demoId': 'custom-icon'
        },
        {
          'name': 'suffix-icon',
          'type': 'Component',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框尾部图标', 'en-US': 'Icon at the end of the text box' },
          'demoId': 'custom-icon'
        },
        {
          'name': 'hide-loading',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否隐藏远程加载时的加载图标',
            'en-US': 'Whether to hide the loading icon during remote loading'
          },
          'demoId': 'hide-loading'
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false',
            'en-US':
              'Indicates whether to insert the drop-down list into the body element. When a fault occurs in locating the drop-down list, you can set this attribute to false'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'fetch-suggestions',
          'typeAnchorName': 'IAutocompleteFetchSuggestions',
          'type': 'IAutocompleteFetchSuggestions',
          'defaultValue': '',
          'desc': {
            'zh-CN': '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback 来返回它',
            'en-US':
              'This method is used to return input suggestions. It is returned by calling callback only when your input suggestions are resolved.'
          },
          'demoId': 'remote-search'
        },
        {
          'name': 'highlight-first-item',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否默认突出显示远程搜索建议中的第一项',
            'en-US': 'Whether to highlight the first item in remote search suggestions by default'
          },
          'demoId': 'highlight-first-item'
        }
      ],
      'events': [
        {
          'name': 'select',
          'type': '(selection: object) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击选中建议项时触发。回调参数为选中建议项',
            'en-US':
              'This event is triggered when a suggestion item is selected. The callback parameter is: Selected Suggestions'
          },
          'demoId': 'select-event'
        }
      ],
      'slots': [
        {
          'name': 'prefix',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框头部内容', 'en-US': 'Content in the text box header' },
          'demoId': 'slot'
        },
        {
          'name': 'suffix',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框尾部内容', 'en-US': 'Content at the end of the text box' },
          'demoId': 'slot'
        },
        {
          'name': 'prepend',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框前置内容', 'en-US': 'Pre-content in the text box' },
          'demoId': 'slot'
        },
        {
          'name': 'append',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框后置内容', 'en-US': 'Content after the text box' },
          'demoId': 'slot'
        },
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '下拉列表项插槽，插槽参数: arg: { slotScope: object }', 'en-US': 'Dropdown list item slot, slot parameters: arg: { slotScope: object }' },
          'demoId': 'slot'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IAutocompletePlacement',
      type: 'type',
      code: `type IAutocompletePlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end"`
    },
    {
      name: 'IAutocompleteFetchSuggestions',
      type: 'type',
      code: 'type IAutocompleteFetchSuggestions = (queryString: string, callback: (suggestions: object[]) => void) => void'
    }
  ]
}
