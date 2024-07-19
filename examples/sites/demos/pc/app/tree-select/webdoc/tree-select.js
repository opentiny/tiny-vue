export default {
  column: '2',
  owner: '',
  metaData: {
    experimental: '3.17.0'
  },
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>最基础的用法，通过 <code>tree-op</code> 设置下拉树的数据源，<code>v-model</code> 设置绑定值。</p>',
        'en-US': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'multiple',
      name: {
        'zh-CN': '多选',
        'en-US': 'Multiple'
      },
      desc: {
        'zh-CN': `通过 <code>multiple</code> 属性启用多选功能，此时 <code>v-model</code> 的值为当前选中值所组成的数组，默认选中值会以标签形式展示。<br>`,
        'en-US': `Use the <code>multiple</code> attribute to enable the multi-selection function. In this case, the value of <code>v-model</code> is an array of selected values. By default, the selected value is displayed as a tag.<br>`
      },
      codeFiles: ['multiple.vue']
    },
    {
      demoId: 'collapse-tags',
      name: {
        'zh-CN': '折叠标签',
        'en-US': 'Collapse tags'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>collapse-tags</code> 属性设置选中多个选项时，多个标签缩略展示。设置 <code>hover-expand</code> 为 <code>true</code> ，默认折叠标签, <code>hover</code> 时展示所有标签。标签内容超长时超出省略，<code>hover</code> 标签时展示 <code>tooltip</code> 。</p>\n',
        'en-US':
          '<p>When multiple options are selected through the <code>collapse-tags</code> attribute settings, multiple tags are displayed in a thumbnail. By setting <code>hover-expand</code> to <code>true</code> , the tags are collapsed by default, and all tags are displayed when hovering. If the content of the tag is too long, it should be omitted. When hovering the tag, a <code>tooltip</code> should be displayed</p>'
      },
      codeFiles: ['collapse-tags.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 属性设置输入框尺寸，可选值：medium / small / mini 。</p>',
        'en-US':
          '<p>Set the input box size through the <code>size</code> attribute, with optional values of medium / small / mini.</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置禁用状态。</p>\n',
        'en-US':
          '<p>Set the disabled status of the dropdown or dropdown item through the <code>disabled</code> attribute. </p>\n'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'map-field',
      name: {
        'zh-CN': '映射字段',
        'en-US': 'Map Fields'
      },
      desc: {
        'zh-CN': '通过 <code>text-field</code> 设置显示文本字段，<code>value-field</code>设置绑定值字段。',
        'en-US':
          '<p>Set the display text field by <code>text-field</code>, and set the binding value field by <code>value-field</code>. </p>\n'
      },
      codeFiles: ['map-field.vue']
    },
    {
      demoId: 'reference-style',
      name: {
        'zh-CN': '触发源样式',
        'en-US': 'Reference type'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>dropdown-icon</code> 属性可自定义下拉图标，<code>drop-style</code> 属性可自定义下拉选项样式，<code>tag-type</code> 属性设置标签类型（同 Tag 组件的 type 属性），<code>input-box-type</code> 属性设置输入框类型。</p>\n',
        'en-US':
          '<p>Set the label type through the <code>tag-type</code> attribute, which is the same as the type attribute of the Tag component. Optional values: success/info/warning/danger.</p>\n'
      },
      codeFiles: ['reference-style.vue']
    },
    {
      demoId: 'panel-style',
      name: {
        'zh-CN': '下拉面板样式',
        'en-US': 'Panel style'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>popper-append-to-body</code> 设置是否将弹框 dom 元素插入至 body 元素，默认为 true，<code>popper-class</code> 属性设置下拉弹框的类名，可自定义样式，<code>placement</code>设置弹出位置。</p>\n',
        'en-US':
          '<p>You can customize the style by setting the class name of the dropdown pop-up box through the <code>popper-class</code> attribute <code>placement</code> set the pop-up position <code>popper-append-to-body</code> set whether to insert the pop-up dom element into the body element, default to true. </p>\n'
      },
      codeFiles: ['panel-style.vue']
    },
    {
      demoId: 'copy',
      name: {
        'zh-CN': '可复制',
        'en-US': 'Copyable'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>copyable</code> 设置启用一键复制所有标签的文本内容并以逗号分隔，<code>text-split</code> 自定义复制文本的分隔符。</p>\n',
        'en-US':
          '<p>When setting radio searchable through the <code>allow-copy</code> attribute, the mouse can slide to select and copy the content of the input box. </p>\n'
      },
      codeFiles: ['copy.vue']
    },
    {
      demoId: 'native-properties',
      name: {
        'zh-CN': '原生属性',
        'en-US': 'Native properties'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>name</code> / <code>placeholder</code> / <code>autocomplete</code> 属性设置下拉组件内置 Input 的原生属性。</p>\n',
        'en-US':
          '<p>Set the native properties of the built-in Input in the dropdown component through the <code>name</code> / <code>placeholder</code> / <code>autocomplete</code> attribute settings.</p>\n'
      },
      codeFiles: ['native-properties.vue']
    }
  ]
}
