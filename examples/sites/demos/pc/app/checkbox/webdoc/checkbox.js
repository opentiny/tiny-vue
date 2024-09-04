export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>通过 <code>v-model</code> 设置绑定值，<code>name</code> 设置原生属性。</p>',
        'en-US': '<p>For details, see the following example.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'checkbox-group',
      name: {
        'zh-CN': '复选框组',
        'en-US': 'Checkbox group'
      },
      desc: {
        'zh-CN':
          '<p><code>checkbox-group</code> 可以将多个 <code>checkbox</code> 元素管理为一组，在 <code>checkbox-group</code> 中使用 <code>v-model</code> 绑定选中值。<code>checkbox</code> 的 <code>label</code> 与 <code>checkbox-group</code> 的绑定值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>',
        'en-US':
          '<p><code>checkbox-group</code> can manage multiple<code>checkbox</code>elements into a group and use<code>v model</code>to bind selected values in<code>checkbox group</code>< The<code>label</code>of code>checkbox</code>corresponds to the binding value of<code>checkbox group</code>. If a specified value exists, it is selected, otherwise it is not selected.</p>'
      },
      codeFiles: ['checkbox-group.vue']
    },
    {
      demoId: 'checkbox-button',
      name: {
        'zh-CN': '复选框按钮',
        'en-US': 'Checkbox button'
      },
      desc: {
        'zh-CN': '<p>通过 <code>checkbox-button</code> 以按钮的形式展示复选框，用法与 <code>checkbox</code> 相似。</p>',
        'en-US':
          '<p> <code>checkbox button</code> Display checkboxes in the form of buttons, similar in usage to <code>checkbox</code> .</p>'
      },
      codeFiles: ['checkbox-button.vue']
    },
    {
      demoId: 'group-options',
      name: {
        'zh-CN': '配置式复选框组',
        'en-US': 'Profile Checkbox Group'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>options</code> 配置显示多选框组。使用该属性后，可以不用再在标签中以插槽的形式插入 <code>checkbox</code> 或 <code>checkbox-button</code> 元素。 <code>type</code> 属性配合 <code>options</code> 属性一起使用，将 <code>type</code> 配置为 <code>button</code> ，复选框组将以按钮的形式展示。</p>',
        'en-US':
          '<p>Configure the display of multiple selection box groups through <code>options</code> . After using this attribute, you no longer need to insert <code>checkbox</code> or <code>checkbox button</code> elements in the label as slots. The type of <code>options</code> is <a="# ICheckboxGroupOptions">ICheckboxGroupOptions[]</a> .The <code>type</code> attribute is used in conjunction with the <code>options</code> attribute to configure the <code>type</code> as <code>button</code> , and the checkbox group will be displayed in the form of a button.</p>'
      },
      codeFiles: ['group-options.vue']
    },
    {
      demoId: 'description',
      name: {
        'zh-CN': '描述文本',
        'en-US': 'Description text'
      },
      desc: {
        'zh-CN':
          '<p>复选框或复现框按钮的描述文本，有三种方式可以提供，优先级依次为 <code>默认插槽</code> 、<code>text</code> 、<code>label</code> 。</p>',
        'en-US':
          '<p>There are three ways to provide the description text for the checkbox or checkbox button, with priority being <code>default slot</code> , <code>text</code> , and <code>label</code> .<p>'
      },
      codeFiles: ['description.vue']
    },
    {
      demoId: 'indeterminate',
      name: {
        'zh-CN': '全选与半选',
        'en-US': 'All and Half'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>checkbox</code> 元素中配置 <code>indeterminate</code> 属性为 true 后，勾选框将展示为半选的样式。</p>',
        'en-US':
          '<p>After the <code>indeterminate</code> attribute is set to true in the <code>checkbox</code> element, the check box is displayed as half-selected. </p>'
      },
      codeFiles: ['indeterminate.vue']
    },
    {
      demoId: 'min-max',
      name: {
        'zh-CN': '可选数量限制',
        'en-US': 'Quantity Limit'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>checkbox-group</code> 上可通过 <code>min</code> 、 <code>max</code> 属性指定可勾选项目的最小、最大值。</p>',
        'en-US':
          '<p>On the <code>checkbox-group</code> , the <code>min</code> and <code>max</code> attributes can be used to specify the minimum and maximum values of the options that can be selected. </p>'
      },
      codeFiles: ['min-max.vue']
    },
    {
      demoId: 'checked',
      name: {
        'zh-CN': '是否默认勾选',
        'en-US': 'Default selected'
      },
      desc: {
        'zh-CN':
          '<p> <code>checkbox-group</code> 上绑定的 <code>v-model</code> 可以配置默认选中， <code>checked</code> 同样可以配置默认选中。</p>',
        'en-US':
          '<p>The v-model bound on <code>check group</code> can be configured with default selection, and <code>checked</code> can also be configured with default selection.</p>'
      },
      codeFiles: ['checked.vue']
    },
    {
      demoId: 'vertical-checkbox',
      name: {
        'zh-CN': '垂直布局',
        'en-US': 'vertical layout'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>checkbox-group</code> 元素上设置 <code>vertical</code> 为 true，则其管理的 <code>checkbox-button</code> 或 <code>checkbox</code> 将展示为垂直布局。</p>',
        'en-US':
          '<p>Set <code>vertical</code> to true on the <code>checkbox-group</code> element, The <code>checkbox-button</code> or <code>checkbox</code> managed by it is displayed as a vertical layout. </p>'
      },
      codeFiles: ['vertical-checkbox.vue']
    },
    {
      demoId: 'border',
      name: {
        'zh-CN': '带边框复选框',
        'en-US': 'Checkbox border'
      },
      desc: {
        'zh-CN':
          '<p> <code>checkbox</code> 上配置 <code>border</code> ，可显示边框。若复选框后的描述文本超出时，可以通过 <code>tooltip</code> 组件增加提示信息，鼠标悬停时可提示所有内容。</p>',
        'en-US':
          '<p>Configure <code>border</code> on <code>checkbox</code> to display borders. If the description text after the check box exceeds, a prompt message can be added through the Tooltip component, and all content can be prompted when the mouse hovers.</p>'
      },
      codeFiles: ['border.vue']
    },
    {
      demoId: 'text',
      name: {
        'zh-CN': '状态对应的值',
        'en-US': 'Text'
      },
      desc: {
        'zh-CN': '<p>通过 <code>true-label</code> 设置选中的值， <code>false-label</code> 设置未选中的值。</p>',
        'en-US':
          '<p>Use <code>true-label</code> to set the selected value, and <code>false-label</code> to set the unselected value. </p>'
      },
      codeFiles: ['text.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Dimension'
      },
      desc: {
        'zh-CN':
          '<p>当复选框为按钮形式时， <code>size</code> 属性可以设置尺寸，可选项有 <code>medium</code> 、<code>default</code>、<code>small</code> 、<code>mini</code>，不设置则为默认样式。</p>',
        'en-US':
          '<p>When the check box is a button, you can set the size of the button through the <code>size</code> attribute. The options are medium, default, small, and mini. \n\n Setting the <code>disabled</code> property on <code>checkbox-button</code> will disable a check button. If the <code>disabled</code> attribute is configured on the <code>checkbox-group</code> tab, all check buttons are disabled. </p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'shape',
      name: {
        'zh-CN': '过滤器模式',
        'en-US': 'Filter mode'
      },
      desc: {
        'zh-CN': '<p>通过 <code>shape</code> 设置过滤器模式。</p>',
        'en-US': '<p>Set the filter mode via <code>shape</code>.</p>'
      },
      codeFiles: ['shape.vue']
    },
    {
      demoId: 'custom-color',
      name: {
        'zh-CN': '自定义颜色',
        'en-US': 'Custom color'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>fill</code> 自定义选中时背景和边框颜色，通过 <code>text-color</code> 自定义选中时的文本颜色。</p>',
        'en-US':
          '<p>Customize the background and border color when selected through<code>fill</code>, and customize the text color when selected through<code>text color</code>.</p>'
      },
      codeFiles: ['custom-color.vue']
    },
    {
      demoId: 'checkbox-slot',
      name: {
        'zh-CN': '默认插槽',
        'en-US': 'Slot'
      },
      desc: {
        'zh-CN': '<p>通过 <code>default slot</code> 自定义文本内容。</p>',
        'en-US': '<p>Customize text content through <code>default slot</code> .</p>'
      },
      codeFiles: ['checkbox-slot.vue']
    },
    {
      demoId: 'checkbox-button-multiple',
      name: {
        'zh-CN': '多行按钮',
        'en-US': 'Checkbox Button Multiple'
      },
      desc: {
        'zh-CN': '<p>多行按钮组，超出最大宽度后，换行显示。</p>',
        'en-US': '<p>Multi line button group, displayed as a new line after exceeding the maximum width.</p>'
      },
      codeFiles: ['checkbox-button-multiple.vue']
    },
    {
      demoId: 'dynamic-create-checkbox',
      name: {
        'zh-CN': '动态生成复选框组',
        'en-US': 'Dynamic generate check box groups'
      },
      desc: {
        'zh-CN': '<p>复选框组所需数据可通过请求服务从后台取得，然后动态生成。</p>',
        'en-US':
          '<p>The data required by the check box group can be obtained from the background through the request service and then dynamically generated. </p>'
      },
      codeFiles: ['dynamic-create-checkbox.vue']
    },
    {
      demoId: 'checkbox-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN': '<p>勾选值改变后将触发 <code>change</code> 事件。</p>',
        'en-US': '<p>The <code>change</code> event is triggered when the value of the check box is changed. </p>'
      },
      codeFiles: ['checkbox-events.vue']
    }
  ]
}
