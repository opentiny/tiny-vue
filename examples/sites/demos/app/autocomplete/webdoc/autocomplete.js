export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'disabled1',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 属性可以设置为禁用状态。</p>\n',
        'en-US': '<p>The <code>disabled</code> attribute can be set to the disabled state. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '原生属性', 'en-US': 'Native Attribute' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '输入框大小', 'en-US': 'Text box size' },
      'desc': {
        'zh-CN': '<p>可选择值为medium，small，mini</p>\n',
        'en-US': '<p>The value can be medium, small, or mini</p>\n'
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
      'demoId': 'append-prepend',
      'name': { 'zh-CN': '输入框前置内容', 'en-US': 'Pre-content in the text box' },
      'desc': {
        'zh-CN': '<p>配置 <code>prepend</code> 属性设置输入框前置内容。</p>\n',
        'en-US': '<p>Configure the <code>prepend</code> attribute to set the front content of the text box. </p>\n'
      },
      'codeFiles': ['append-prepend.vue']
    },
    {
      'demoId': 'append-append',
      'name': { 'zh-CN': '输入框后置内容', 'en-US': 'Content after the text box' },
      'desc': {
        'zh-CN': '<p>配置 <code>append</code> 属性设置输入框后置内容。</p>\n',
        'en-US': '<p>Configure the <code>append</code> attribute to set the content behind the text box. </p>\n'
      },
      'codeFiles': ['append-prepend.vue']
    },
    {
      'demoId': 'custom-icon',
      'name': { 'zh-CN': '自定义图标', 'en-US': 'Custom Icon' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>prefix-icon</code> 和 <code>suffix-icon</code> 属性可分别自定义输入框前后置图标。</p>\n',
        'en-US':
          '<p>Configure the <code>prefix-icon</code> and <code>suffix-icon</code> attributes to customize the icons before and after the text box. </p>\n'
      },
      'codeFiles': ['custom-icon.vue']
    },
    {
      'demoId': 'prefix-suffix-slot',
      'name': { 'zh-CN': '通过插槽自定义图标', 'en-US': 'Customize icons by slot' },
      'desc': {
        'zh-CN': '<p>通过 <code>prefix</code> 和 <code>suffix</code> 插槽也可以分别自定义输入框前后置图标。</p>\n',
        'en-US':
          '<p>You can also customize the front and rear icons of the text box through the <code>prefix</code> and <code>suffix</code> slots. </p>\n'
      },
      'codeFiles': ['prefix-suffix-slot.vue']
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
      'name': { 'zh-CN': '隐藏加载图标', 'en-US': 'Hide the loading icon' },
      'desc': {
        'zh-CN': '<p>设置 <code>hide-loading</code> 属性为 true ,可以隐藏加载图标。</p>\n',
        'en-US': '<p>Set <code>hide-loading</code> to true to hide the loading icon. </p>\n'
      },
      'codeFiles': ['hide-loading.vue']
    },
    {
      'demoId': 'hide-loading1',
      'name': { 'zh-CN': '输入框占位文本', 'en-US': 'Placeholder text in the text box' },
      'desc': {
        'zh-CN': '<p>通过 <code>placeholder</code> 属性设置输入框占位文本。</p>\n',
        'en-US': '<p>Use the <code>placeholder</code> attribute to set the placeholder text in the text box. </p>\n'
      },
      'codeFiles': ['hide-loading.vue']
    },
    {
      'demoId': 'cust-template',
      'name': { 'zh-CN': '自定义模板', 'en-US': 'Custom Template' },
      'desc': {
        'zh-CN': '<p>通过作用域插槽可以自定义输入建议模板。</p>\n',
        'en-US': '<p>You can customize the input suggestion template through the scope slot. </p>\n'
      },
      'codeFiles': ['cust-template.vue']
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
      'name': { 'zh-CN': '指定显示的键名', 'en-US': 'Specify the key name to be displayed.' },
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
      'name': { 'zh-CN': '自定义列表样式', 'en-US': 'Custom List Style' },
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
      'name': { 'zh-CN': '设置菜单弹出位置', 'en-US': 'Set menu pop-up position' },
      'desc': {
        'zh-CN':
          '<p><code>placement</code> 属性可以设置菜单弹出位置，默认为 <code>bottom-start</code>。可选值有 top、top-start、top-end、bottom、bottom-start、bottom-end 。</p>\n',
        'en-US':
          '<p><code>placement</code> property can be used to set the menu pop-up position. The default value is <code>bottom-start</code>. The options are top, top-start, top-end, bottom, bottom-start, and bottom-end. </p>\n'
      },
      'codeFiles': ['placement.vue']
    },
    {
      'demoId': 'highlight-first-item',
      'name': { 'zh-CN': '高亮显示第一项', 'en-US': 'Highlight the first item' },
      'desc': {
        'zh-CN': '<p>设置 <code>highlight-first-item</code> 属性为 true ,可以突出显示远程搜索建议中的第一项。</p>\n',
        'en-US':
          '<p>Set the <code>highlight-first-item</code> attribute to true to highlight the first item in the remote search suggestion. </p>\n'
      },
      'codeFiles': ['highlight-first-item.vue']
    },
    {
      'demoId': 'no-trigger-on-focus',
      'name': { 'zh-CN': '聚焦不显示建议列表', 'en-US': 'Focus does not display the suggestion list' },
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
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否可清空', 'en-US': 'Whether to clear data' },
          'demoId': 'clearable'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框占位文本', 'en-US': 'Placeholder text in the text box' },
          'demoId': 'hide-loading1'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
          'demoId': 'disabled1'
        },
        {
          'name': 'value-key',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入建议对象中用于显示的键名',
            'en-US': 'Enter the key name for display in the suggestion object.'
          },
          'demoId': 'value-key'
        },
        {
          'name': 'value',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '必填值，输入绑定值', 'en-US': 'This parameter is mandatory. Enter a bound value.' },
          'demoId': 'clearable'
        },
        {
          'name': 'debounce',
          'type': 'number',
          'defaultValue': '该属性的默认值为 300',
          'desc': { 'zh-CN': '获取输入建议的去抖延时', 'en-US': 'Obtain the recommended input dejitter delay.' },
          'demoId': 'debounce'
        },
        {
          'name': 'placement',
          'type': 'string',
          'defaultValue': '该属性的默认值为 bottom-start',
          'desc': {
            'zh-CN': '菜单弹出位置;该属性的可选值为 top / top-start / top-end / bottom / bottom-start / bottom-end',
            'en-US':
              'Menu pop-up position; The optional value of this attribute is top / top-start / top-end / bottom / bottom-start / bottom-end'
          },
          'demoId': 'placement'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Autocomplete 下拉列表的类名',
            'en-US': 'Class name of the Autocomplete drop-down list box'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置组件大小，可设置为：medium，small，mini',
            'en-US': 'Set the component size. The value can be medium, small, or mini.'
          },
          'demoId': 'size'
        },
        {
          'name': 'trigger-on-focus',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
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
          'desc': { 'zh-CN': '原生属性', 'en-US': 'Native attribute' },
          'demoId': 'clearable'
        },
        {
          'name': 'select-when-unmatched',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
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
          'desc': { 'zh-CN': '输入框关联的label文字', 'en-US': 'Label text associated with the text box' },
          'demoId': ''
        },
        {
          'name': 'prefix-icon',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框头部图标', 'en-US': 'Icon on the header of the text box' },
          'demoId': 'custom-icon'
        },
        {
          'name': 'suffix-icon',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框尾部图标', 'en-US': 'Icon at the end of the text box' },
          'demoId': 'custom-icon'
        },
        {
          'name': 'hide-loading',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否隐藏远程加载时的加载图标',
            'en-US': 'Whether to hide the loading icon during remote loading'
          },
          'demoId': 'hide-loading'
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false',
            'en-US':
              'Indicates whether to insert the drop-down list into the body element. When a fault occurs in locating the drop-down list, you can set this attribute to false'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'fetch-suggestions',
          'type': 'Function(queryString, callback)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它',
            'en-US':
              'This method is used to return input suggestions. It is returned by calling callback(data:[]) only when your input suggestions are resolved.'
          },
          'demoId': 'remote-search'
        },
        {
          'name': 'highlight-first-item',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
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
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击选中建议项时触发。回调参数为：选中建议项',
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
          'demoId': 'custom-icon'
        },
        {
          'name': 'suffix',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框尾部内容', 'en-US': 'Content at the end of the text box' },
          'demoId': 'custom-icon'
        },
        {
          'name': 'prepend',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框前置内容', 'en-US': 'Pre-content in the text box' },
          'demoId': 'append-prepend'
        },
        {
          'name': 'append',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框后置内容', 'en-US': 'Content after the text box' },
          'demoId': 'append-prepend'
        }
      ]
    }
  ]
}
