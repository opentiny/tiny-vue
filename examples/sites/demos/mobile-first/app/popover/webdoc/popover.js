export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'popover-content',
      name: {
        'zh-CN': '添加内容',
        'en-US': 'Add Content'
      },
      desc: {
        'zh-CN': '<p>`content` 设置要显示的内容。</p>',
        'en-US': '<p>`content` Sets the content to be displayed.</p>'
      },
      codeFiles: ['popover-content.vue']
    },
    {
      demoId: 'arrow-offset',
      name: {
        'zh-CN': '箭头偏移',
        'en-US': 'Arrow Offset'
      },
      desc: {
        'zh-CN': '<p>`arrow-offset` 在 Popover 的范围内，设置箭头的偏移量，来改变箭头的位置。</p>',
        'en-US':
          '<p>`arrow-offset` Sets the offset of the arrow to change the position of the arrow within the range of the popover.</p>'
      },
      codeFiles: ['arrow-offset.vue']
    },
    {
      demoId: 'frame-offset',
      name: {
        'zh-CN': '弹出框偏移',
        'en-US': 'Pop-up Box Offset'
      },
      desc: {
        'zh-CN': '<p>`offset` 在触发源的范围内，设置弹框的偏移量，来改变弹框的位置。</p>',
        'en-US':
          '<p`offset` Sets the offset of the dialog box within the range of the trigger source to change the position of the dialog box.</p>'
      },
      codeFiles: ['frame-offset.vue']
    },
    {
      demoId: 'close-delay',
      name: {
        'zh-CN': '延迟隐藏',
        'en-US': 'Delay concealment'
      },
      desc: {
        'zh-CN': '<p>`close-delay` 弹出框延迟隐藏单位为毫秒(Number)</p>',
        'en-US': '<p>`close-delay` pop-up dialog box hiding delay, in milliseconds (number).</p>'
      },
      codeFiles: ['close-delay.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用',
        'en-US': 'disable'
      },
      desc: {
        'zh-CN': '<p>`disabled` 设置是否禁用弹出框。</p>',
        'en-US': '<p>`disabled` Sets whether to disable pop-up boxes.</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'open-delay',
      name: {
        'zh-CN': '延迟显示',
        'en-US': 'Delayed display'
      },
      desc: {
        'zh-CN': '<p>`open-delay`，设置延迟时间 ( type:number,单位毫秒 )<p>',
        'en-US': '<p>`open-delay`: indicates the delay (type:number, in milliseconds).</p>'
      },
      codeFiles: ['open-delay.vue']
    },
    {
      demoId: 'popover-placement',
      name: {
        'zh-CN': '显示位置',
        'en-US': 'Display position'
      },
      desc: {
        'zh-CN':
          '<p>`placement` 设置弹出框的的位置,可选值为（to/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end）</p>',
        'en-US':
          '<p>`placement` Sets the position of the pop-up box. The value can be (to/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end).</p>'
      },
      codeFiles: ['popover-placement.vue']
    },
    {
      demoId: 'popper-class',
      name: {
        'zh-CN': '自定义样式',
        'en-US': 'Custom Styles'
      },
      desc: {
        'zh-CN': '<p>`popper-class` 可配置单个或多个 class</p>',
        'en-US': '<p>The `popper-class` command can be used to configure one or more classes.</p>'
      },
      codeFiles: ['popper-class.vue']
    },
    {
      demoId: 'trigger-mode',
      name: {
        'zh-CN': '触发方式',
        'en-US': 'Triggering Mode'
      },
      desc: {
        'zh-CN':
          '<p>`trigger`设定弹出框的触发方式 <br /> `click` 点击触发 <br /> `focus` 鼠标长按触发 <br /> `hover` 鼠标悬浮触发 <br /> `manual` 点击触发，再次点击隐藏</p>',
        'en-US':
          '<p>`trigger`Set the triggering mode of the pop-up box<br /> `click`Click to trigger<br /> `focus`To trigger by holding the mouse<br /> `hover`To trigger by hovering the mouse<br /> `manual`To trigger, click to hide again</p>'
      },
      codeFiles: ['trigger-mode.vue']
    },
    {
      demoId: 'hidden-arrow',
      name: {
        'zh-CN': '隐藏提示框箭头',
        'en-US': 'Hide the arrows in the prompt box.'
      },
      desc: {
        'zh-CN': '<p>`visible-arrow` 设定是否显示提示框的箭头</p>',
        'en-US': '<p>`visible-arrow` Sets whether to display the arrow of the prompt box./p>'
      },
      codeFiles: ['hidden-arrow.vue']
    },
    {
      demoId: 'popover-width',
      name: {
        'zh-CN': '宽度',
        'en-US': 'width'
      },
      desc: {
        'zh-CN': '<p>`width` 弹出框的宽度</p>',
        'en-US': '<p>`width` Initial Planning</p>'
      },
      codeFiles: ['popover-width.vue']
    },
    {
      demoId: 'popper-options',
      name: {
        'zh-CN': '弹出框选项',
        'en-US': 'Popup Box Options'
      },
      desc: {
        'zh-CN': '<p>`popper-options` 配置弹出框选项</p>',
        'en-US': '<p>`popper-options` Placement Initiation</p>'
      },
      codeFiles: ['popper-options.vue']
    },
    {
      demoId: 'trigger-reference',
      name: {
        'zh-CN': '触发源',
        'en-US': 'Trigger Source'
      },
      desc: {
        'zh-CN': '<p>`slot` 设置弹出框的触发源</p>',
        'en-US': '<p>`slot` Sets the trigger source for the pop-up box.</p>'
      },
      codeFiles: ['trigger-reference.vue']
    },
    {
      demoId: 'custom-tip-text',
      name: {
        'zh-CN': '自定义提示文本',
        'en-US': 'Define prompt text'
      },
      desc: {
        'zh-CN': '<p>`content` 设置自定义文本，也可在标签内直接嵌套默认插槽为自定义文本</p>',
        'en-US':
          '<p>`content` Sets the custom text, or nests the default slot directly inside the label as the custom text.</p>'
      },
      codeFiles: ['custom-tip-text.vue']
    },
    {
      demoId: 'popover-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>`hide` 隐藏时触发回调<br />`show` 显示时触发回调<br />`after-leave` 隐藏动画播放完毕后触发回调<br />`after-enter` 显示动画播放完毕后触发回调</p>',
        'en-US':
          '<p>`hide`Callback triggered when hiding<br />`show`Callback triggered when displaying<br />`after-leave`Callback triggered after the hidden animation is played<br />`after-enter`Callback triggered when the animation is played</p>'
      },
      codeFiles: ['popover-events.vue']
    }
  ],
  apis: []
}
