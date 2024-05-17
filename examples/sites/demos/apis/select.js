export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'select',
      type: 'component',
      props: [
        {
          name: 'all-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '当下拉中显示全部时，自定义全部的显示文本。不指定时，则默认显示"全部"',
            'en-US':
              'When all is displayed in the drop-down list, you can customize the display text of all. If this parameter is not specified, All is displayed by default.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'all-text',
          mfDemo: 'all-text'
        },
        {
          name: 'allow-copy',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否允许复制输入框的内容，适用单选可搜索场景',
            'en-US':
              'Is it allowed to copy the content of the input box, applicable to single choice searchable scenarios'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'copy-single',
          mfDemo: 'copy-single'
        },
        {
          name: 'allow-create',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否允许创建新条目，需配合 filterable 使用。若搜索字段不在选项列表中，可创建为新的选项',
            'en-US':
              'Is it allowed to create new entries? It needs to be used in conjunction with filterable. If the search field is not in the option list, it can be created as a new option'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'allow-create',
          mfDemo: 'allow-create'
        },
        {
          name: 'autocomplete',
          type: 'string',
          defaultValue: "'off'",
          desc: {
            'zh-CN': '输入框的原生 autocomplete 属性',
            'en-US': 'The native autocomplete attribute of the input box'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'native-properties',
          mfDemo: 'native-properties'
        },
        {
          name: 'cache-op',
          typeAnchorName: 'ICacheOp',
          type: 'ICacheOp',
          defaultValue:
            "<pre>\n{\n  key: '',\n  sortBy: 'frequency',\n  sort: 'desc',\n  dataKey: 'value',\n  highlightClass: \n  'memorize-highlight',\n  highlightNum: Infinity,\n  cacheNum: Infinity,\n  serialize: JSON.stringify\n  deserialize: JSON.parse\n}\n</pre>",
          desc: {
            'zh-CN': '启用本地缓存已选项的功能配置（根据用户点击选择的次数、最后时间继续存储排序)',
            'en-US': 'Set the component type when Grid or Tree is embedded in the drop-down list box.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'cache-usage',
          mfDemo: 'cache-usage'
        },
        {
          name: 'clear-no-match-value',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否自动清空无法在 options 中找到匹配项的值',
            'en-US': 'Automatically clear values that cannot find matching items in options'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'clear-no-match-value',
          mfDemo: 'clear-no-match-value'
        },
        {
          name: 'clearable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用一键清除的功能',
            'en-US': 'Whether to display the one click clear button, only applicable to radio selection'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'clearable',
          mfDemo: 'clearable'
        },
        {
          name: 'click-expend',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '点击可展开或收起显示不全的选项。仅用于多选',
            'en-US': 'Click to expand or collapse options. Only applicable to multiple selections'
          }
        },
        {
          name: 'collapse-tags',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否将多个标签折叠显示。仅适用多选',
            'en-US': 'Whether to collapse multiple labels for display. Only applicable to multiple selections'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'collapse-tags',
          mfDemo: 'collapse-tags'
        },
        {
          name: 'copyable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用一键复制的功能。点击复制按钮一键复制所有标签的文本内容并以逗号分隔，仅适用于多选',
            'en-US':
              'Is the one click copy function enabled. Click the copy button to copy the text content of all labels with one click, separated by commas, only applicable to multiple selections'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'copy-multi',
          mfDemo: 'copy-multi'
        },
        {
          name: 'default-first-option',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用按 Enter 键选择第一个匹配项的功能。需配合 filterable 或 remote 使用',
            'en-US':
              'Whether to enable the function of pressing the Enter key to select the first match. Must be used in conjunction with filterable or remote'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'allow-create',
          mfDemo: 'allow-create'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Is it disabled'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disabled',
          mfDemo: 'disabled'
        },
        {
          name: 'dropdown-icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义下拉图标',
            'en-US': 'Custom drop-down icon'
          },
          mode: ['pc'],
          pcDemo: 'multiple'
        },
        {
          name: 'dropdown-style',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义下拉选项样式',
            'en-US': 'Custom drop-down options style'
          },
          mode: ['pc'],
          pcDemo: 'multiple'
        },
        {
          name: 'filter-method',
          type: '(query: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义过滤方法',
            'en-US': 'Custom filtering method'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'filter-method',
          mfDemo: 'filter-method'
        },
        {
          name: 'filterable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否可搜索',
            'en-US': 'Is it searchable'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'filter-method',
          mfDemo: 'filter-method'
        },
        {
          name: 'grid-op',
          typeAnchorName: 'IGridOption',
          type: 'IGridOption',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉表格时，内置表格的配置，用法同 Grid 组件。需结合 render-type 属性使用',
            'en-US':
              'When pulling down a table, the configuration of the built-in table is the same as that of the Grid component. To be used in conjunction with the render type attribute'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'nest-grid',
          mfDemo: 'nest-grid'
        },
        {
          name: 'input-box-type',
          type: "'input' | 'underline'",
          defaultValue: "'input'",
          desc: {
            'zh-CN': '输入框的显示类型',
            'en-US': 'Display type of input box'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'input-box-type',
          mfDemo: 'input-box-type'
        },
        {
          name: 'is-drop-inherit-width',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '下拉弹框的宽度是否跟输入框保持一致。默认超出输入框宽度时由内容撑开',
            'en-US':
              'Is the width of the dropdown box consistent with the input box. By default, when the width of the input box is exceeded, it is supported by the content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'is-drop-inherit-width',
          mfDemo: 'is-drop-inherit-width'
        },
        {
          name: 'loading',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否加载中，适用于远程搜索场景',
            'en-US': 'Loading or not, suitable for remote search scenarios'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'remote-method',
          mfDemo: 'remote-method'
        },
        {
          name: 'loading-text',
          type: 'string',
          defaultValue: "'加载中'",
          desc: {
            'zh-CN': '远程加载时显示的文本',
            'en-US': 'Text displayed during remote loading'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'remote-method',
          mfDemo: 'remote-method'
        },
        {
          name: 'max-visible-rows',
          type: 'number',
          defaultValue: '1',
          desc: {
            'zh-CN': '多行默认最大显示行数，超出后选项自动隐藏',
            'en-US':
              'Default maximum display lines for multiple lines, with automatic hiding option for exceeding lines'
          },
          mode: ['pc'],
          pcDemo: 'collapse-tags'
        },
        {
          name: 'modelValue / v-model',
          type: 'string | number | Array<string|number>',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bind value'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'multiple',
          mfDemo: 'multiple'
        },
        {
          name: 'multiple',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否允许选择多个选项',
            'en-US': 'Allow multiple options to be selected'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'multiple',
          mfDemo: 'multiple'
        },
        {
          name: 'multiple-limit',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '多选时最多可选择的个数，默认为 0 不限制',
            'en-US':
              'When selecting multiple options, the maximum number of options available is 0, with no limit by default'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'multiple-limit',
          mfDemo: 'multiple-limit'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框的原生 name 属性',
            'en-US': 'The native name attribute of the input box'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'native-properties',
          mfDemo: 'native-properties'
        },
        {
          name: 'no-data-text',
          type: 'string',
          defaultValue: "'暂无相关数据'",
          desc: {
            'zh-CN': '选项列表为空时显示的文本，也可以使用 empty 插槽设置',
            'en-US': 'The text displayed when the option list is empty can also be set using empty slots'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'no-data-text',
          mfDemo: 'no-data-text'
        },
        {
          name: 'no-match-text',
          type: 'string',
          defaultValue: "'无匹配数据'",
          desc: {
            'zh-CN': '搜索条件无匹配时显示的文本，也可以使用 empty 插槽设置',
            'en-US':
              'The text displayed when there is no match for the search criteria can also be set using empty slots'
          },
          mode: ['pc'],
          pcDemo: 'filter-method'
        },
        {
          name: 'options',
          typeAnchorName: 'IOption',
          type: 'IOption[]',
          defaultValue: '',
          desc: {
            'zh-CN': '选项列表配置，使用后不需要再配置 tiny-option',
            'en-US': 'Option list configuration, no need to configure tiny options after use'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'map-field',
          mfDemo: 'map-field'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: "'请选择'",
          desc: {
            'zh-CN': '占位符',
            'en-US': 'Placeholder'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'native-properties',
          mfDemo: 'native-properties'
        },
        {
          name: 'placement',
          typeAnchorName: 'IPlacement',
          type: 'IPlacement',
          defaultValue: "'bottom-start'",
          desc: {
            'zh-CN': '下拉弹框相对于触发源的弹出位置',
            'en-US': 'The pop-up position of the pull-down pop-up box relative to the trigger source'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'popup-style-position',
          mfDemo: 'popup-style-position'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否将弹出框的 dom 元素插入至 body 元素',
            'en-US': 'Whether to insert the dom element of the pop-up box into the body element'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'popup-style-position',
          mfDemo: 'popup-style-position'
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义下拉框的类名，用于自定义样式',
            'en-US': 'The class name of the custom dropdown box, used for customizing styles'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'popup-style-position',
          mfDemo: 'popup-style-position'
        },
        {
          name: 'remote',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为远程搜索',
            'en-US': 'Is it a remote search'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'remote-method',
          mfDemo: 'remote-method'
        },
        {
          name: 'remote-method',
          type: '(query:string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '远程搜索的方法',
            'en-US': 'Remote search methods'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'remote-method',
          mfDemo: 'remote-method'
        },
        {
          name: 'render-type',
          type: "'tree' | 'grid'",
          defaultValue: '',
          desc: {
            'zh-CN': '渲染为下拉表格或下拉树，需结合 grid-op / tree-op 使用',
            'en-US': 'Rendered as a dropdown table or tree, to be used in conjunction with grid op/tree op'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'nest-grid',
          mfDemo: 'nest-grid'
        },
        {
          name: 'reserve-keyword',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '多选可搜索时，是否在选中一个选项后仍然保留当前的搜索关键词',
            'en-US':
              'When selecting multiple searchable options, do you still keep the current search keywords after selecting one option'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'remote-method',
          mfDemo: 'remote-method'
        },
        {
          name: 'searchable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用下拉面板搜索',
            'en-US': 'Whether to allow users to create new items. This parameter must be used together with filterable.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'searchable',
          mfDemo: 'searchable'
        },
        {
          name: 'show-alloption',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否展示 “全选” 选项',
            'en-US': 'Whether to display the "Select All" option'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'show-alloption',
          mfDemo: 'show-alloption'
        },
        {
          name: 'show-empty-image',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示空数据图片',
            'en-US': 'Display empty data image'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'no-data-text',
          mfDemo: 'no-data-text'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '输入框尺寸。',
            'en-US': 'Text box size'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'size',
          mfDemo: 'size'
        },
        {
          name: 'tag-selectable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '输入框中的标签是否可通过鼠标选中复制',
            'en-US': 'Can the label in the input box be copied by selecting it with the mouse'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'copy-multi',
          mfDemo: 'copy-multi'
        },
        {
          name: 'tag-type',
          type: "'success' | 'info' | 'warning' | 'danger'",
          defaultValue: '',
          desc: {
            'zh-CN': '标签类型，仅多选适用。使用 aurora 主题时设置该属性为 info',
            'en-US':
              'Label type, only applicable for multiple choices. Set this property to info when using the aurora theme'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'tag-type',
          mfDemo: 'tag-type'
        },
        {
          name: 'text-field',
          type: 'string',
          defaultValue: "'label'",
          desc: {
            'zh-CN': '显示值字段',
            'en-US': 'Show Value Fields'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'map-field',
          mfDemo: 'map-field'
        },
        {
          name: 'text-split',
          type: 'string',
          defaultValue: "','",
          desc: {
            'zh-CN': '自定义复制文本的分隔符，需结合 copyable 属性使用',
            'en-US': 'The separator for custom copied text needs to be used in conjunction with the copyable attribute'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'copy-multi',
          mfDemo: 'copy-multi'
        },
        {
          name: 'top-create',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否显示下拉框顶部新增按钮，点击按钮会抛出一个 top-create-click 事件，可以在事件中自定义一些行为',
            'en-US':
              'Indicates whether to display a new button on the top of the drop-down list box. When a button is clicked, a top-create-click event is thrown. You can customize some behaviors in the event'
          },
          mode: ['pc'],
          pcDemo: 'allow-create'
        },
        {
          name: 'tree-op',
          typeAnchorName: 'ITreeOption',
          type: 'ITreeOption',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉树时，内置树组件的配置，用法同 Tree 组件。需结合 render-type 属性使用',
            'en-US':
              'When pulling down a tree, the configuration of the built-in tree component is the same as that of the Tree component. To be used in conjunction with the render type attribute'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'nest-tree',
          mfDemo: 'nest-tree'
        },
        {
          name: 'value-field',
          type: 'string',
          defaultValue: "'value'",
          desc: {
            'zh-CN': '绑定值字段',
            'en-US': 'Bind Value Field'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'map-field',
          mfDemo: 'map-field'
        },
        {
          name: 'value-key',
          type: 'string',
          defaultValue: "'value'",
          desc: {
            'zh-CN': '作为 value 唯一标识的键名，绑定值为对象类型时必填',
            'en-US':
              'The key name that uniquely identifies the value must be filled in when the binding value is of object type'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'binding-obj',
          mfDemo: 'binding-obj'
        },
        {
          name: 'show-proportion',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否展示多选框选中条数和总条数的占比的文字提示',
            'en-US':
              'Display the proportion of the number of selected items and the total number of items in the multiple-choice box'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'collapse-tags',
          mfDemo: 'collapse-tags'
        },
        {
          name: 'show-limit-text',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN':
              '是否展示多选框开启多选限制选择数量时，选中条数和限制总条数的占比的文字提示。 该属性的优先级大于<code>show-proportion</code> 属性，同时设置只',
            'en-US':
              'Display the proportion of the number of selected items and the total number of items in the multiple-choice box'
          },
          mode: ['pc'],
          pcDemo: 'multiple'
        }
      ],
      events: [
        {
          name: 'blur',
          type: '(event:MouseEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听输入框失去焦点事件',
            'en-US': 'Listening for input box lose focus event'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: 'events'
        },
        {
          name: 'change',
          type: '(value:string|number|Array<string|number>, list:Array<IOption|ITreeNode>) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听绑定值变更事件',
            'en-US': 'Listening for binding value change events'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: 'events'
        },
        {
          name: 'clear',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听一键清除事件',
            'en-US': 'Listening for one click clear events'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: 'events'
        },
        {
          name: 'focus',
          type: '(event:MouseEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听输入框获取焦点事件',
            'en-US': 'Listening to input boxes to obtain focus events'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: 'events'
        },
        {
          name: 'remove-tag',
          type: '(tag:string|number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听多选时移除标签事件',
            'en-US': 'Remove label events when listening for multiple selections'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: 'events'
        },
        {
          name: 'top-create-click',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听顶部新增按钮点击事件，同 top-create 属性一起使用',
            'en-US':
              'Listens to the click event of a new button on the top. This parameter is used together with the top-create attribute'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'visible-change',
          type: '(status:boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '监听下拉弹框的显示隐藏状态',
            'en-US': 'Monitor the display and hidden status of dropdown pop ups'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: 'events'
        }
      ],
      methods: [
        {
          name: 'blur',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '使输入框失去焦点',
            'en-US': 'Causes the input box to lose focus'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'manual-focus-blur',
          mfDemo: 'manual-focus-blur'
        },
        {
          name: 'focus',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '使输入框获取焦点',
            'en-US': 'Bring the input box to focus'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'manual-focus-blur',
          mfDemo: 'manual-focus-blur'
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '选项默认插槽',
            'en-US': 'Option default slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot-default',
          mfDemo: 'slot-default'
        },
        {
          name: 'empty',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '空数据插槽',
            'en-US': 'Empty data slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot-empty',
          mfDemo: 'slot-empty'
        },
        {
          name: 'footer',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉弹框底部插槽',
            'en-US': 'Pull down the bottom slot of the pop-up box'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot-footer',
          mfDemo: 'slot-footer'
        },
        {
          name: 'prefix',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框前缀插槽',
            'en-US': 'Input box prefix slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot-prefix',
          mfDemo: 'slot-prefix'
        },
        {
          name: 'reference',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '触发源插槽',
            'en-US': 'Trigger Source Slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'slot-reference',
          mfDemo: 'slot-reference'
        }
      ]
    },
    {
      name: 'option',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '选项是否禁用',
            'en-US': 'Is the option disabled'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disabled',
          mfDemo: 'disabled'
        },
        {
          name: 'icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义选项的图标',
            'en-US': 'Customize icons for options'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '选项的显示文本',
            'en-US': 'Display text for option'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'required',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '选项是否必选',
            'en-US': 'Is it mandatory to select an option'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'value',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '选项的值',
            'en-US': 'Value for option'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        }
      ],
      events: [],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'IOption',
      type: 'interface',
      code: `
interface IOption {
  value?: string | number
  label?: string
  disabled?: boolean
  icon?: Component
  required?:boolean
}
`
    },
    {
      name: 'ICacheOp',
      type: 'interface',
      code: `
interface ICacheItem {
  frequency: number
  key: string
  time: number
}

interface ICacheOp {
  key: string // 本地缓存的唯一 key 值
  sortBy?: 'frequency' | 'time' // 排序的字段，默认 frequency (频次)
  sort?: 'desc' | 'asc' // 排序方式，默认 desc (降序)
  dataKey?: string // 数据中的唯一标识的 key 名称,默认 value
  highlightClass?: string // 个性化高亮 class 名称，默认：memorize-highlight
  highlightNum?: number // 高亮个性化的条数,默认：Infinity
  cacheNum?: number // 存储个性化的条数,默认：Infinity
  serialize?: ()=> string  // 本地存储序列化方法,默认：JSON.stringify
  deserialize?: ()=> ICacheItem[] // 本地存储序反列化方法，默认：JSON.parse
}        
`
    },
    {
      name: 'IGridOption',
      type: 'interface',
      code: `
interface IGridOption {
  data: any[]    // 表格数据，用法同 Grid
  columns: any[] // 列配置，用法同 Grid
}
`
    },
    {
      name: 'ITreeOption',
      type: 'interface',
      code: `
interface ITreeNode {
  label: string         // 默认树节点的文本字段
  id: number|string     // 树节点唯一标识
  children: ITreeNode[] // 子节点
}

interface ITreeOption {
  data: ITreeNode[] // 树数据，用法同 Tree
}
`
    },
    {
      name: 'IPlacement',
      type: 'type',
      code: `
type IPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
`
    }
  ]
}
