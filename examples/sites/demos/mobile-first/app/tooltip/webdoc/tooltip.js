export default {
  column: '2',
  owner: '',
  demos: [{
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>按钮类型</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用',
        'en-US': 'disabling'
      },
      desc: {
        'zh-CN': '<p>通过 `disabled` 设置禁用</p>',
        'en-US': '<p>Disable by setting `disabled`</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'manual-control-tip',
      name: {
        'zh-CN': '手动控制',
        'en-US': 'Manual control'
      },
      desc: {
        'zh-CN': '<p>手动控制模式，通过设置 `manual` 属性为 true 后，mouseenter 和 mouseleave 事件将不会生效,然后可以通过设置 `v-model` 动态控制显示和隐藏</p>',
        'en-US': '<p>Manual control mode. After the `manual` attribute is set to true, the mouseenter and mouseleave events do not take effect. You can set the `v-model` to dynamically control the display and hiding of the events.</p>'
      },
      codeFiles: ['manual-control-tip.vue']
    },
    {
      demoId: 'tooltip-theme',
      name: {
        'zh-CN': '主题',
        'en-US': 'Subject'
      },
      desc: {
        'zh-CN': '<p>通过 `effect` 属性设置主题,可选值 dark/light 两种主题。</p>',
        'en-US': '<p>Set the theme through the `effect` property. The options are dark and light.</p>'
      },
      codeFiles: ['tooltip-theme.vue']
    },
    {
      demoId: 'open-delay',
      name: {
        'zh-CN': '自动隐藏和延迟时间',
        'en-US': 'Auto-hide and delay time'
      },
      desc: {
        'zh-CN': '<p>通过 `hide-after` 属性设置 Tooltip 组件出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏。通过 `open-delay` 属性设置 Tooltip 组件延迟出现的时间，单位毫秒。<p>',
        'en-US': '<p>The `hide-after` attribute is used to set the automatic hiding delay of the Tooltip component, in milliseconds. If the value is 0, the Tooltip component is not automatically hidden. The `open-delay` property is used to set the delay for the Tooltip component to appear, in milliseconds.</p>'
      },
      codeFiles: ['open-delay.vue']
    },
    {
      demoId: 'tooltip-offset',
      name: {
        'zh-CN': '偏移量',
        'en-US': 'Offset'
      },
      desc: {
        'zh-CN': '<p>通过 `offset` 属性设置 Tooltip 组件出现位置的偏移量。</p>',
        'en-US': '<p>Use the `offset` property to set the offset where the Tooltip component appears.</p>'
      },
      codeFiles: ['tooltip-offset.vue']
    },
    {
      demoId: 'enterable',
      name: {
        'zh-CN': '鼠标是否可进入',
        'en-US': 'Whether the mouse can be accessed'
      },
      desc: {
        'zh-CN': '<p>通过 `enterable` 属性设置鼠标是否可进入到 tooltip 中。</p>',
        'en-US': '<p>Use the `enterable` attribute to set whether the mouse can access the tooltip.</p>'
      },
      codeFiles: ['enterable.vue']
    },
    {
      demoId: 'visible-arrow',
      name: {
        'zh-CN': '是否显示箭头',
        'en-US': 'Whether to display arrows'
      },
      desc: {
        'zh-CN': '<p>通过 `visible-arrow` 属性设置是否显示 Tooltip 箭头。</p>',
        'en-US': '<p>Use the `visible-arrow` property to set whether to display the Tooltip arrow.</p>'
      },
      codeFiles: ['visible-arrow.vue']
    },
    {
      demoId: 'popper-class',
      name: {
        'zh-CN': '添加样式类名',
        'en-US': 'Add Style Class Name'
      },
      desc: {
        'zh-CN': '<p>通过 `popper-class` 属性为 Tooltip 的 popper 添加类名。</p>',
        'en-US': '<p>Use the `popper-class` attribute to add a class name to the tooltip\'s popper.</p>'
      },
      codeFiles: ['popper-class.vue']
    },
    {
      demoId: 'tooltip-content',
      name: {
        'zh-CN': '插槽',
        'en-US': 'Slots'
      },
      desc: {
        'zh-CN': '<p>设置过通过 `content` 插槽添加自定义内容。滤类型<p>',
        'en-US': '<p>Set to add custom content through the `content` slot. Filter Type</p>'
      },
      codeFiles: ['tooltip-content.vue']
    },
    {
      demoId: 'popper-options',
      name: {
        'zh-CN': 'popper 配置',
        'en-US': 'Popper Configuration'
      },
      desc: {
        'zh-CN': '<p>通过 `popper-options` 属性为 Tooltip 的 popper 配置参数,具体可参考[popper.js](https://popper.js.org/)</p>',
        'en-US': '<p>Use the `popper-options` attribute to configure popper parameters for Tooltip. For details, see [popper.js](https://popper.js.org/).</p>'
      },
      codeFiles: ['popper-options.vue']
    },
    {
      demoId: 'popper-options-bubbling',
      name: {
        'zh-CN': 'popper 配置通过 bubbling 控制 tip 位置',
        'en-US': 'The popper configuration uses bubbling to control the tip position.'
      },
      desc: {
        'zh-CN': '<p>popperOptions.bubbling 配置为 true 时，所有的父元素包含滚动条，滚动时都会动态改变 tip 的位置</p>',
        'en-US': '<p>When popperOptions.bubbling is set to true, all parent elements contain scroll bars. During scrolling, the position of tip is dynamically changed.</p>'
      },
      codeFiles: ['popper-options-bubbling.vue']
    },
    {
      demoId: 'tabindex',
      name: {
        'zh-CN': 'tabindex 配置',
        'en-US': 'tabindex configuration'
      },
      desc: {
        'zh-CN': '<p>通过配置 `tabindex`， 配置的属性会自动添加到该组件的触发原上。</p>',
        'en-US': '<p>By configuring `tabindex`, the configured attributes are automatically added to the trigger source of the component.</p>'
      },
      codeFiles: ['tabindex.vue']
    },
    {
      demoId: 'content-pre',
      name: {
        'zh-CN': '文本预格式化',
        'en-US': 'Text Preformatting'
      },
      desc: {
        'zh-CN': '<p>配置 `pre` 为 `true`，就会预格式化 `content` 文本。<br>被包围在 `<pre></pre>` 标签元素中的文本会保留空格和换行符，文本也会呈现为等宽字体。</p>',
        'en-US': '<p>If `pre` is set to `true`, the `content` text is preformatted. <br>Text enclosed in the `<pre></pre>` tag element retains spaces and newline characters, and the text is rendered in an equal-width font.</p>'
      },
      codeFiles: ['content-pre.vue']
    },
    {
      demoId: 'content-render',
      name: {
        'zh-CN': '自定义渲染',
        'en-US': 'Custom Rendering'
      },
      desc: {
        'zh-CN': '<p>使用属性 `renderContent` 配置自定义渲染方法</p>',
        'en-US': '<p>Configure a custom rendering method using the property `renderContent`</p>'
      },
      codeFiles: ['content-render.vue']
    },
    {
      demoId: 'z-index',
      name: {
        'zh-CN': '弹出层 zIndex',
        'en-US': 'z-index'
      },
      desc: {
        'zh-CN': '<p>设置`z-index`属性为`relative`时，弹出层样式属性 zIndex 值参考 Reference 及其父级 Dom。<br>设置`z-index`属性为默认值`next`时，弹出层样式属性 zIndex 值由组件库内部维护。</p>',
        'en-US': '<p>When the `z-index` attribute is set to `relative`, the value of zIndex of the pop-up layer style attribute is Reference and its parent Dom. <br>When the `z-index` attribute is set to the default value `next`, the value of the pop-up layer style attribute zIndex is maintained by the component library.</p>'
      },
      codeFiles: ['z-index.vue']
    }
  ],
  apis: []
}