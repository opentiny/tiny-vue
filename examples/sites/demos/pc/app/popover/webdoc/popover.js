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
        'zh-CN':
          '\n          通过 <code>reference</code>  插槽来指定一个触发源，通过 <code>content</code> 属性来指定提示内容，点击触发源会弹出内容面板。<br>\n          通过 <code>title</code> 属性来指定标题。<br>\n          通过 <code>width</code>  属性来指定一个弹出面板的宽度。<br>\n          <div class="tip custom-block">reference 插槽是必传插槽，没有它时组件渲染不出来。</div>\n        ',
        'en-US':
          '\n          Specify a trigger source through the <code>reference</code> slot, specify the prompt content through the <code>content</code> property, click the trigger source will pop up the content panel. <br>\n          The title is specified by the <code>title</code> attribute. <br>\n          Use the <code>width</code> property to specify the width of a pop-up panel. <br>\n          The <div class="tip custom-block">reference slot is a required slot without which the component cannot be rendered. </div>\n        '
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'trigger',
      name: {
        'zh-CN': '触发方式',
        'en-US': 'Trigger Mode'
      },
      desc: {
        'zh-CN':
          '\n          通过<code>trigger</code> 属性设定弹出框的4种触发方式， 默认值为 <code> click </code>。<br>\n          当触发方式为<code> manual</code>时，通过设置<code>v-model</code> 属性，动态控制显示和隐藏弹出框。\n        ',
        'en-US':
          '\n          The <code>trigger</code> property is used to set the triggering mode of the pop-up box. The optional value of the property is <code>click/hover/manual/focus</code>, and the default value is <code>click </code>. <br>\n          When the trigger mode is <code> manual</code>, you can set the <code>v-model</code> property to dynamically display and hide pop-ups.\n        '
      },
      codeFiles: ['trigger.vue']
    },
    {
      demoId: 'content',
      name: {
        'zh-CN': '弹出层内容',
        'en-US': 'Pop-up layer content'
      },
      desc: {
        'zh-CN':
          '\n          通过 <code>content</code> 属性设置要显示的字符串内容。<br>\n          通过 <code>default</code> 插槽，支持自定义复杂的内容结构。<br>\n        ',
        'en-US':
          '\n          The <code>content</code> property sets the string content to be displayed.\n          Support for custom complex content structures through the <code>default</code> slot.\n        '
      },
      codeFiles: ['content.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<code>disabled</code> 设置是否禁用弹出框。',
        'en-US': '<code>disabled</code> Specifies whether to disable the pop-up. '
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'offset',
      name: {
        'zh-CN': '自定义偏移',
        'en-US': 'Custom Offset'
      },
      desc: {
        'zh-CN':
          '\n          通过<code>arrow-offset</code> 设置箭头的在弹窗层上的偏移量。箭头默认至少会保留8px的空间， 以保证箭头不会贴在弹窗层两边。<br>\n          通过<code> offset</code> 设置弹框的偏移量，来改变弹框的位置。\n        ',
        'en-US':
          '\n          Use <code>arrow-offset</code> to set the offset of the arrow on the popup layer. Arrows are left at least 8px by default to ensure that they are not stuck on either side of the popup layer. <br>\n          Change the position of the springboard by setting the offset</code> of the springboard\n        '
      },
      codeFiles: ['offset.vue']
    },
    {
      demoId: 'custom-popper',
      name: {
        'zh-CN': '自定义弹出面板',
        'en-US': 'Customize the pop-up panel'
      },
      desc: {
        'zh-CN':
          '\n          通过<code>placement</code> 设置弹出框的的位置。<br>\n          通过<code>visible-arrow</code> 设定是否显示提示框的箭头，默认值为 <code>true</code>。<br>\n          通过<code>popper-class</code> 可配置单个或多个类名，通过类名可以控制弹窗样式。\n        ',
        'en-US':
          '\n          By <code>placement</code> Set the location of the pop-up box.  <br>\n          Set whether the arrow of the prompt box is displayed by <code>visible-arrow</code>. The default value is true. <br>\n          You can run the <code>popper-class</code> command to configure one or more classes. You can control the popup style by class name.\n        '
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
        'zh-CN':
          '\n          通过 <code>open-delay</code> 弹出框打开时延迟的时长，默认值为0，单位为毫秒。<br>\n          通过 <code>close-delay</code> 弹出框关闭时延迟的时长，默认值为200，单位为毫秒。<br>\n          <div class="tip custom-block">只有在触发方式为 hover 时，延迟控制功能才生效。</div>\n        ',
        'en-US':
          '\n          Run the <code>open-delay</code> command to open a pop-up. The default value is 0, in milliseconds. <br>\n          Run the <code>close-delay</code> command to close the pop-up. The default value is 200, in milliseconds. <br>\n          <div class="tip custom-block"> Delay control takes effect only if the trigger mode is hover. </div>\n        '
      },
      codeFiles: ['delay.vue']
    },
    {
      demoId: 'transition',
      name: {
        'zh-CN': '自定义渐变动画',
        'en-US': 'Customized Gradient Animation'
      },
      desc: {
        'zh-CN': '通过 <code>transition</code> 设置弹框的显示隐藏淡入淡出动画，默认取值 <code>fade-in-linear</code> 。',
        'en-US':
          'You can run the <code>transition</code> command to set the display hidden fade in and fade out animation of a pop-up. The default value is fade-in-linear.'
      },
      codeFiles: ['transition.vue']
    },
    {
      demoId: 'popper-options',
      name: {
        'zh-CN': '高级选项',
        'en-US': 'Pop-up Options'
      },
      desc: {
        'zh-CN': '通过<code>popper-options</code> 配置弹出框高级选项。',
        'en-US':
          'Run the <code>popper-options</code> command to configure the advanced pop-up options. For details, see the IPopperOption description at the bottom'
      },
      codeFiles: ['popper-options.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN':
          '\n          组件支持以下事件：<br>\n          <code>hide</code> 隐藏时触发回调；<br>\n          <code>show</code> 显示时触发回调；<br>\n          <code>after-leave</code> 进入的动画结束后触发回调；<br>\n          <code>after-enter</code> 离开的动画播结束后触发回调；<br>',
        'en-US':
          '\n          The component supports the following events: <br>\n          <code>hide</code> Trigger callback when hiding <br>\n          <code>show</code> callback triggered when displayed <br>\n          <code>after-leave</code> Triggers callback after entering animation <br>\n          <code>after-enter</code> Trigger callback after the leaving animation ends <br>\n          '
      },
      codeFiles: ['events.vue']
    }
  ]
}
