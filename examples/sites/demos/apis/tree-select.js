export default {
  mode: ['pc'],
  apis: [
    {
      name: 'tree-select',
      type: 'component',
      props: [
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
          name: 'click-expand',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '点击可展开或收起显示不全的选项。仅用于多选',
            'en-US': 'Click to expand or collapse options. Only applicable to multiple selections'
          },
          pcDemo: 'collapse-tags'
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
          name: 'drop-style',
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
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'multiple',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否允许选择多个选项',
            'en-US': 'Allow multiple options to be selected'
          },
          mode: ['pc'],
          pcDemo: 'multiple'
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
          mode: ['pc'],
          pcDemo: 'map-field'
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
          name: 'tree-op',
          typeAnchorName: 'ITreeOption',
          type: 'ITreeOption',
          defaultValue: '',
          desc: {
            'zh-CN': '下拉树时，内置树组件的配置，用法同 Tree 组件。',
            'en-US':
              'When pulling down a tree, the configuration of the built-in tree component is the same as that of the Tree component. To be used in conjunction with the render type attribute'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'value-field',
          type: 'string',
          defaultValue: "'value'",
          desc: {
            'zh-CN': '绑定值字段',
            'en-US': 'Bind Value Field'
          },
          mode: ['pc'],
          pcDemo: 'map-field'
        }
      ]
    }
  ],
  types: [
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
