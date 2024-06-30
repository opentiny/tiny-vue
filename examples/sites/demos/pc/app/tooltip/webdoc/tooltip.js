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
        'zh-CN': `通过 <code>content</code> 属性指定提示的内容。<br>
           通过 <code>placement</code> 属性指定提示的显示位置，支持12个显示位置。<br>
           通过 <code>effect</code> 属性指定提示的效果。<br>`,
        'en-US': `Specify the content of the prompt via the <code>content</code> attribute <br>
          Use the <code>placement</code> property to specify the display location of the prompt. 12 display locations are supported <br>
          Specify the effect of the prompt with the <code>effect</code> property <br>`
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'theme',
      name: {
        'zh-CN': '主题',
        'en-US': 'Theme'
      },
      desc: {
        'zh-CN': `
            通过 <code>effect</code> 属性设置明暗效果，可选值 <code>dark/light</code> ,默认值为 <code>dark</code>，通常使用<code>effect</code>设置效果。<br>
            通过 <code>type</code> 属性设置主题,它的优先级大于 <code>effect</code>。`,
        'en-US': `
            The <code>effect</code> property is used to set the light and dark effect. The optional dark/light effect is dark by default. The effect< br> is usually set by <code>effect</code>.
            Set the theme with the <code>type</code> property, which has a higher priority than the <code>effect</code>.`
      },
      codeFiles: ['theme.vue']
    },
    {
      demoId: 'control',
      name: {
        'zh-CN': '控制/禁用提示',
        'en-US': 'Control/disable'
      },
      desc: {
        'zh-CN': `
          提示组件默认是监听鼠标移入/移出事件来触发，手动控制提示的出现，有以下方法：<br>
          1.通过 <code>visible</code> 属性设置是否智能识别溢出后提示,属性取值为 <code> always / auto </code>。当取值为<code>auto</code>时，智能提示是自动识别文字是否有长度溢出，动态的显示提示。<br>
          2.通过 <code>manual</code> 属性为 true 后,就可以通过设置 <code>v-model</code> 属性，动态控制显示和隐藏。<br>
          3.通过 <code>disabled</code> 属性，直接禁用提示。<br>`,
        'en-US': `
          The Tooltip component is triggered by listening for mouse move in/out events by default, and manually controls the appearance of the prompt in the following ways: <br>
          1. Use the <code>visible</code> property to set whether the overflow prompt is intelligently recognized. The property value is <code> always/auto </code>. If the value is <code>auto</code>, the smart prompt automatically identifies whether the text length overruns and dynamically displays the prompt. <br>
          2. After the <code>manual</code> property is true, you can dynamically control the display and hiding of <br> by setting the <code>v-model</code> property.
          3. Use the <code>disabled</code> property to disable the tooltip. <br>`
      },
      codeFiles: ['control.vue']
    },
    {
      demoId: 'content',
      name: {
        'zh-CN': '弹出层内容',
        'en-US': 'Tooltip content'
      },
      desc: {
        'zh-CN': `
          通过 <code>content</code> 属性指定弹出的文本。<br>
          通过 <code>renderContent</code> 自定义渲染函数，可使用 <code>JSX</code> 返回需要渲染的节点内容。<br>
          通过 <code>content</code> 插槽，自定义内容，当弹出复杂的内容结构时，推荐使用插槽的方式。<br>`,
        'en-US': `
          Specify the pop-up text via the <code>content</code> property. <br>
          A custom rendering function with <code>renderContent</code> returns the node content to be rendered. The function is declared as (h, content)=>vnode. <br>
          The <code>content</code> slot is used to customize content. It is recommended to use the slot when a complex content structure pops up. <br>`
      },
      codeFiles: ['content.vue']
    },
    {
      demoId: 'offset',
      name: {
        'zh-CN': '弹出层的偏移',
        'en-US': 'Offset'
      },
      desc: {
        'zh-CN': '通过 <code>offset</code> 属性设置组件出现位置的偏移量。',
        'en-US':
          'Use the <code>offset</code> property to set the offset of the position where the Tooltip component appears. '
      },
      codeFiles: ['offset.vue']
    },
    {
      demoId: 'custom-popper',
      name: {
        'zh-CN': '弹出层的特性',
        'en-US': 'Features of the popper layer'
      },
      desc: {
        'zh-CN': `
          通过 <code> visible-arrow </code> 属性设置是否显示小箭头。<br>
          通过 <code> enterable </code> 属性设置鼠标是否可进入到 tooltip 中。<br>
          通过 <code> popper-class </code> 属性设置弹出dom的类名，便于用户定制弹出层的样式。<br>`,
        'en-US': `
          The <code> visible-arrow </code> property sets whether the small arrow is displayed. <br>
          Use the <code> enterable </code> property to set whether the mouse can enter the tooltip. <br>
          You can use the <code> popper-class </code> property to set the class name of the eject dom to customize the style of the eject layer. <br>`
      },
      codeFiles: ['custom-popper.vue']
    },
    {
      demoId: 'delay',
      name: {
        'zh-CN': '延迟控制',
        'en-US': 'Delay control'
      },
      desc: {
        'zh-CN': `
            通过 <code>open-delay</code> 属性设置组件延迟出现的时间，单位毫秒,默认值为 0。<br>
            通过 <code>close-delay</code> 属性设置 组件延迟关闭的时间，单位毫秒,默认值为 300。<br>
            通过 <code>hide-after</code> 属性设置组件出现后自动隐藏的时间，单位毫秒，为 0 则不会自动隐藏,默认值为 0。<br>
          `,
        'en-US': `
            Use the <code>open-delay</code> property to set the delay in milliseconds for the Tooltip component to appear. The default value is 0. <br>
            Use the <code>close-delay</code> property to set the delay in closing the Tooltip component, in milliseconds. The default value is 300. <br>
            Run the <code>hide-after</code> property to set the time for the Tooltip component to be automatically hidden after it appears, in milliseconds. If it is 0, it will not be automatically hidden. The default value is 0. <br>
            `
      },
      codeFiles: ['delay.vue']
    },
    {
      demoId: 'popper-options',
      name: {
        'zh-CN': '高级配置',
        'en-US': 'Advanced configuration'
      },
      desc: {
        'zh-CN': '通过 <code>popper-options</code> 属性为组件的弹出层的配置参。',
        'en-US': 'Use the <code>popper-options</code> property to configure popper parameters for Tooltip. '
      },
      codeFiles: ['popper-options.vue']
    },
    {
      demoId: 'transition',
      name: {
        'zh-CN': '自定义渐变动画',
        'en-US': 'Customized Animation'
      },
      desc: {
        'zh-CN': '通过 <code>transition</code> 定义渐变动画,默认选值为 <code>tiny-fade-in-linear</code>。',
        'en-US':
          'Define a gradient animation using <code>transition</code>. The default value is <code>tiny-fade-in-linear</code>'
      },
      codeFiles: ['transition.vue']
    },
    {
      demoId: 'pre',
      name: {
        'zh-CN': '文本预格式化',
        'en-US': 'Customized Animation'
      },
      desc: {
        'zh-CN': `
          配置 <code> pre </code>  为  <code> true </code> ，就会预格式化  <code> content </code>  文本。<br>
          被包围在 <code> pre </code>  标签元素中的文本会保留空格和换行符，文本也会呈现为等宽字体。`,
        'en-US': `
          If <code> pre </code> is set to <code> true </code>, the <code> content </code> text is preformatted.<br>
          Text enclosed in the <code> pre </code> tag element retains spaces and newline characters, and the text is rendered in a uniform font.`
      },
      codeFiles: ['pre.vue']
    }
  ]
}
