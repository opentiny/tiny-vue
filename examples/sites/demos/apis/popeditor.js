export default {
  mode: ['pc'],
  apis: [
    {
      name: 'pop-editor',
      type: 'component',
      props: [
        {
          name: 'auto-lookup',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '初始化时是否自动请求数据',
            'en-US': 'Set initialization not to request data'
          },
          mode: ['pc'],
          pcDemo: 'auto-lookup'
        },
        {
          name: 'auto-reset',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '筛选后点击关闭是否自动重置筛选条件',
            'en-US': 'After filtering, click Off to reset the filter automatically'
          },
          mode: ['pc'],
          pcDemo: 'auto-reset'
        },
        {
          name: 'before-close',
          type: '() => boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '可以配置一个拦截弹窗关闭的方法。如果方法返回 false 值，则拦截弹窗关闭，否则不拦截',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'before-close'
        },
        {
          name: 'before-reset',
          type: '() => boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '重置前的钩子函数',
            'en-US': 'Hook function before reset'
          },
          mode: ['pc'],
          pcDemo: 'before-reset'
        },
        {
          name: 'conditions',
          typeAnchorName: 'IConditions',
          type: 'IConditions[]',
          defaultValue: '',
          desc: {
            'zh-CN': '当弹出面板配置的是表格时，设置弹出面板中的表单查询项',
            'en-US': 'When a table is configured on the pop-up panel, set the table query items in the pop-up panel.'
          },
          mode: ['pc'],
          pcDemo: 'conditions'
        },
        {
          name: 'dialog-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义配置弹窗类名',
            'en-US': 'Customized configuration pop-up window class name'
          },
          mode: ['pc'],
          pcDemo: 'width'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '禁用状态',
            'en-US': 'Sets whether a component is disabled.'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'draggable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '设置弹出窗口是否可拖动',
            'en-US': 'Set whether the pop-up window can be dragged.'
          },
          mode: ['pc'],
          pcDemo: 'draggable'
        },
        {
          name: 'grid-op',
          typeAnchorName: 'grid#API',
          type: `InstanceType&#60typeof TinyGrid&#62['$props']`,
          defaultValue: '',
          desc: {
            'zh-CN': '设置弹出面板中表格组件的配置信息',
            'en-US': 'Set the configuration information of the table component in the pop-up panel.'
          },
          mode: ['pc'],
          pcDemo: 'grid'
        },
        {
          name: 'icon',
          type: 'Component',
          defaultValue: 'IconPopup',
          desc: {
            'zh-CN': '自定义选择框尾部图标',
            'en-US': 'Set the icon of the popEditor component. The default value is svg component'
          },
          mode: ['pc'],
          pcDemo: 'icon'
        },
        {
          name: 'modelValue / v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'multi',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置弹出面板中的数据是否可多选',
            'en-US': 'Specifies whether multiple data can be selected in the pop-up panel.'
          },
          mode: ['pc'],
          pcDemo: 'multi'
        },
        {
          name: 'pager-op',
          typeAnchorName: 'pager#API',
          type: `InstanceType&#60typeof TinyPager&#62['$props']`,
          defaultValue: '',
          desc: {
            'zh-CN': '设置分页配置',
            'en-US': 'Setting Pagination Configuration'
          },
          mode: ['pc'],
          pcDemo: 'pager'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '占位符',
            'en-US': 'Placeholder'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'popseletor',
          type: 'string',
          defaultValue: `'grid'`,
          desc: {
            'zh-CN': '设置弹出面板中可显示的树或者表格组件',
            'en-US': 'Set the tree or table components that can be displayed in the pop-up panel.'
          },
          mode: ['pc'],
          pcDemo: 'tree'
        },
        {
          name: 'radio-change-close',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '单选选中后是否关闭弹窗',
            'en-US': 'Whether to close the pop-up window after selecting a radio option'
          },
          mode: ['pc'],
          pcDemo: 'radio-change-close'
        },
        {
          name: 'readonly',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '设置是否只读，【3.0】设置为 false 后点击 Input 框可以弹出选择框',
            'en-US':
              'Set [3.0] to read-only. If [3.0] is set to false, click the Ipunt box to display the selection box.'
          },
          mode: ['pc'],
          pcDemo: 'readonly'
        },
        {
          name: 'remote-search',
          type: 'IRemoteSearch',
          typeAnchorName: 'IRemoteSearch',
          defaultValue: '',
          desc: {
            'zh-CN': '配置远程搜索',
            'en-US': 'Configure remote search'
          },
          mode: ['pc'],
          pcDemo: 'remote-search'
        },
        {
          name: 'resize',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示弹框全屏按钮',
            'en-US': 'Whether to display the full-screen button in the pop-up box'
          },
          mode: ['pc'],
          pcDemo: 'resize'
        },
        {
          name: 'selected-box-op',
          typeAnchorName: 'dialog-select#ISelectedBoxOption',
          type: 'ISelectedBoxOption',
          defaultValue: '',
          desc: {
            'zh-CN': '通过属性 selected-box-op 指定 SelectedBox 组件配置，可以把已选表格显示为已选栏',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'selected-box'
        },
        {
          name: 'show-clear-btn',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '设置输入框中右侧是否显示清除按钮',
            'en-US': 'Specifies whether to display the Clear button on the right of the text box.'
          },
          mode: ['pc'],
          pcDemo: 'show-clear-btn'
        },
        {
          name: 'show-history',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '当弹出面板配置的是表格时，设置历史记录标签页是否显示表格',
            'en-US':
              'Specifies whether to display tables on the History tab page when tables are configured on the pop-up panel.'
          },
          mode: ['pc'],
          pcDemo: 'show-history'
        },
        {
          name: 'show-pager',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '展示分页',
            'en-US': 'Paging'
          },
          mode: ['pc'],
          pcDemo: 'pager'
        },
        {
          name: 'show-selected-box',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '多选场景，是否将已选表格显示为已选栏',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'show-selected-box'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | '' | 'mini'",
          defaultValue: "''",
          desc: {
            'zh-CN': '尺寸',
            'en-US': 'Set the component size. The options are medium, small, and mini.'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'suggest',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '配置 suggest 开启联想功能，输入框输入后自动触发联想查询，该功能需要联合 remote-search 使用',
            'en-US':
              'Configure the suggest to enable the association function, and automatically trigger the association query after entering the input box; This function needs to be used in conjunction with remoteSearch'
          },
          mode: ['pc'],
          pcDemo: 'suggest'
        },
        {
          name: 'tabindex',
          type: 'string',
          defaultValue: `'1'`,
          desc: {
            'zh-CN': '设置通过 Tab 键获焦及获焦顺序（readonly 属性设置为 false 时有效）',
            'en-US':
              'Sets whether focus can be obtained by pressing Tab and the focus sequence. This parameter is valid only when readonly is set to false.'
          },
          mode: ['pc'],
          pcDemo: 'tabindex'
        },
        {
          name: 'text-field',
          type: 'string',
          defaultValue: `'label'`,
          desc: {
            'zh-CN': '设置输入框中显示文本的字段，提交数据时，不提交该显示文本',
            'en-US': 'Set the text field in the text box. When data is submitted, the text is not submitted.'
          },
          mode: ['pc'],
          pcDemo: 'text-field'
        },
        {
          name: 'text-split',
          type: 'string',
          defaultValue: `'/'`,
          desc: {
            'zh-CN': '在多选的情况下，设置输入框中要显示多个数据时的分隔符',
            'en-US': 'Separator for displaying multiple records in the text box when multiple records are selected.'
          },
          mode: ['pc'],
          pcDemo: 'multi'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置弹出面板的标题，并且支持国际化',
            'en-US': 'Set the title of the pop-up panel and support internationalization.'
          },
          mode: ['pc'],
          pcDemo: 'title'
        },
        {
          name: 'trigger',
          type: "'default' | 'cell' | 'row'",
          defaultValue: "'default'",
          desc: {
            'zh-CN':
              '弹框表格中为单选时 radio 的选中配置，可配置：default（默认）, cell（点击单元格触发）, row（点击行触发）',
            'en-US':
              'In the table in the dialog box that is displayed, the radio is selected. The options are as follows: default (default), cell (clicking a cell), and row (clicking a row)'
          },
          mode: ['pc'],
          pcDemo: 'trigger'
        },
        {
          name: 'value-field',
          type: 'string',
          defaultValue: `'id'`,
          desc: {
            'zh-CN': '设置输入框要提交数据的字段',
            'en-US': 'Set the field to which data is to be submitted in the text box.'
          },
          mode: ['pc'],
          pcDemo: 'title'
        },
        {
          name: 'value-split',
          type: 'string',
          defaultValue: `';'`,
          desc: {
            'zh-CN': '在多选的情况下，设置输入框要提交多个数据时的分隔符',
            'en-US':
              'Separator for submitting multiple pieces of data in the text box when multiple pieces of data are selected.'
          },
          mode: ['pc'],
          pcDemo: 'multi'
        },
        {
          name: 'width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置弹出面板的宽度（单位像素），当组件的 multi = true 时，宽度最小为 900px，否则宽度最小为 600px',
            'en-US':
              'Wide of the pop-up panel, in pixels.When multi of a component is set to true, the minimum width is 900px. Otherwise, the minimum width is 600px.'
          },
          mode: ['pc'],
          pcDemo: 'width'
        }
      ],
      events: [
        {
          name: 'change',
          type: '(commitValue: number, selectedDatas: Object) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '数据发生变化的事件，commitValue 为选中数据的索引（value-field 配置的字段），selectedDatas 为选中的数据项',
            'en-US':
              'Change event in the input box of the Popeditor component. ; onChange(arg1, arg2){\n// arg1 = state.commitValue arg1 is the index of the submitted information. \n// arg2 = state.selectedDatas arg2 is the data of the submitted information. \n// do something you want...}'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'close',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '弹框关闭时触发的事件',
            'en-US': 'Event triggered when the pop-up dialog box of the Popeditor component is closed.'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'page-change',
          type: '(page: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '表格模式分页切换事件，page 为分页切换页码',
            'en-US':
              'Indicates that the table mode of the Popeditor component is switched by page. ; onPageChange (arg1) {// arg1 = val arg1 is the page number. // do something you want...}'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'popup',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '弹框打开时触发的事件',
            'en-US': 'The event that is triggered when the Popeditor component pop-up box is opened.'
          },
          mode: ['pc'],
          pcDemo: 'events'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'footer',
          defaultValue: '',
          desc: {
            'zh-CN': '底部区域插槽',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'slot-footer'
        },
        {
          name: 'search',
          defaultValue: '',
          desc: {
            'zh-CN': '查询条件插槽',
            'en-US': 'Query Condition Slot'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IConditions',
      type: 'interface',
      code: `
interface IConditions {
  field: string
  label: string
}
      `
    },
    {
      name: 'IRemoteSearch',
      type: 'type',
      code: `type IRemoteSearch = ({ page: { currentPage: number, pageSize: number }, conditions: { [K in IConditions['field']]: string } }) => void`
    }
  ]
}
