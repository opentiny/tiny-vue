export default {
  mode: ['pc'],
  apis: [
    {
      name: 'autocomplete',
      type: 'component',
      props: [
        {
          name: 'clearable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否可清空',
            'en-US': 'Whether to clear data'
          },
          mode: ['pc'],
          pcDemo: 'clearable'
        },
        {
          name: 'debounce',
          type: 'number',
          defaultValue: '300',
          desc: {
            'zh-CN': '获取输入建议的去抖延时',
            'en-US': 'Obtain the recommended input dejitter delay.'
          },
          mode: ['pc'],
          pcDemo: 'debounce'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Whether to disabled'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'display-only',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置只读',
            'en-US': 'Set read-only'
          },
          mode: ['pc'],
          pcDemo: 'display-only'
        },
        {
          name: 'fetch-suggestions',
          typeAnchorName: 'IAutocompleteFetchSuggestions',
          type: 'IAutocompleteFetchSuggestions',
          defaultValue: '',
          desc: {
            'zh-CN': '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback 来返回它',
            'en-US':
              'This method is used to return input suggestions. It is returned by calling callback only when your input suggestions are resolved.'
          },
          mode: ['pc'],
          pcDemo: 'remote-search'
        },
        {
          name: 'hide-loading',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否隐藏远程加载时的加载图标',
            'en-US': 'Whether to hide the loading icon during remote loading'
          },
          mode: ['pc'],
          pcDemo: 'hide-loading'
        },
        {
          name: 'highlight-first-item',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否默认突出显示远程搜索建议中的第一项',
            'en-US': 'Whether to highlight the first item in remote search suggestions by default'
          },
          mode: ['pc'],
          pcDemo: 'highlight-first-item'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '等价于原生 input aria-label 属性',
            'en-US': 'Equiphorus input aria-label attribute'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': 'input 元素的原生属性',
            'en-US': 'Native attributes of the input element'
          },
          mode: ['pc']
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框占位文本',
            'en-US': 'Placeholder text in the text box'
          },
          mode: ['pc'],
          pcDemo: 'hide-loading'
        },
        {
          name: 'placement',
          typeAnchorName: 'IAutocompletePlacement',
          type: 'IAutocompletePlacement',
          defaultValue: "'bottom-start'",
          desc: {
            'zh-CN': '菜单弹出位置',
            'en-US': 'Menu pop-up position'
          },
          mode: ['pc'],
          pcDemo: 'placement'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false',
            'en-US':
              'Indicates whether to insert the drop-down list into the body element. When a fault occurs in locating the drop-down list, you can set this attribute to false'
          },
          mode: ['pc'],
          pcDemo: 'popper-class'
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉列表的类名',
            'en-US': 'Class name of the Autocomplete drop-down list box'
          },
          mode: ['pc'],
          pcDemo: 'popper-class'
        },
        {
          name: 'prefix-icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框头部图标',
            'en-US': 'Icon on the header of the text box'
          },
          mode: ['pc'],
          pcDemo: 'custom-icon'
        },
        {
          name: 'select-when-unmatched',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件',
            'en-US':
              'Indicates whether to trigger the select event when pressing Enter when the input does not have any matching suggestions.'
          },
          mode: ['pc'],
          pcDemo: 'select-event'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '设置组件大小',
            'en-US': 'Set the component size.'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'suffix-icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框尾部图标',
            'en-US': 'Icon at the end of the text box'
          },
          mode: ['pc'],
          pcDemo: 'custom-icon'
        },
        {
          name: 'trigger-on-focus',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否在输入框 focus 时显示建议列表',
            'en-US': 'Whether to display the suggestion list when the text box is focused'
          },
          mode: ['pc'],
          pcDemo: 'no-trigger-on-focus'
        },
        {
          name: 'v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '必填值，输入绑定值',
            'en-US': 'This parameter is mandatory. Enter a bound value.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'value-key',
          type: 'string',
          defaultValue: "'value'",
          desc: {
            'zh-CN': '在输入建议对象中，用于显示和匹配输入的键名',
            'en-US': 'In the Input Suggestion object, key names for displaying and matching inputs'
          },
          mode: ['pc'],
          pcDemo: 'value-key'
        }
      ],
      events: [
        {
          name: 'select',
          typeAnchorName: 'IAutocompleteSuggestionItem',
          type: '(selection: IAutocompleteSuggestionItem) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击选中建议项时触发，回调参数为 fetch-suggestions 中传入的项',
            'en-US':
              'Triggered when you click to select a suggestion item. The callback parameter is the item passed in fetch-suggestions'
          },
          mode: ['pc'],
          pcDemo: 'select-event'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'append',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框后置内容',
            'en-US': 'Content after the text box'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN':
              '下拉列表项插槽，插槽参数: arg: { slotScope: IAutocompleteSuggestionItem }, 其中 slotScope 是 fetch-suggestions 中传入的项',
            'en-US':
              'Drop-down list item slot, slot parameter: arg: { slotScope: IAutocompleteSuggestionItem }, where slotScope is the item passed in fetch-suggestions'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'prefix',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框头部内容',
            'en-US': 'Content in the text box header'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'prepend',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框前置内容',
            'en-US': 'Pre-content in the text box'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'suffix',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框尾部内容',
            'en-US': 'Content at the end of the text box'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IAutocompleteSuggestionItem',
      type: 'type',
      code: `interface IAutocompleteSuggestionItem {
  [key: string]: string | undefined
  value?: string
}`
    },
    {
      name: 'IAutocompletePlacement',
      type: 'type',
      code: `type IAutocompletePlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end"`
    },
    {
      name: 'IAutocompleteFetchSuggestions',
      type: 'type',
      depTypes: ['IAutocompleteSuggestionItem'],
      code: `type IAutocompleteFetchSuggestions = (queryString: string, callback: (suggestions: IAutocompleteSuggestionItem[]) => void) => void`
    }
  ]
}
