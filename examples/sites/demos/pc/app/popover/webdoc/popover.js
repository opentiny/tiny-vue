export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `
          通过 <code>reference</code>  插槽来指定一个触发源，通过 <code>content</code> 属性来指定提示内容，点击触发源会弹出内容面板。<br>
          通过 <code>title</code> 属性来指定标题。<br>
          通过 <code>width</code>  属性来指定一个弹出面板的宽度。<br>
          <div class="tip custom-block">reference 插槽是必传插槽，没有它时组件渲染不出来。</div>
        `,
        'en-US': `
          Specify a trigger source through the <code>reference</code> slot, specify the prompt content through the <code>content</code> property, click the trigger source will pop up the content panel. <br>
          The title is specified by the <code>title</code> attribute. <br>
          Use the <code>width</code> property to specify the width of a pop-up panel. <br>
          The <div class="tip custom-block">reference slot is a required slot without which the component cannot be rendered. </div>
        `
      },
      'codeFiles': ['basic-usage.vue']
    },

    {
      'demoId': 'trigger',
      'name': { 'zh-CN': '触发方式', 'en-US': 'Trigger Mode' },
      'desc': {
        'zh-CN': `
          通过<code>trigger</code> 属性设定弹出框的4种触发方式， 默认值为 <code> click </code>。<br>
          当触发方式为<code> manual</code>时，通过设置<code>v-model</code> 属性，动态控制显示和隐藏弹出框。
        `,
        'en-US': `
          The <code>trigger</code> property is used to set the triggering mode of the pop-up box. The optional value of the property is <code>click/hover/manual/focus</code>, and the default value is <code>click </code>. <br>
          When the trigger mode is <code> manual</code>, you can set the <code>v-model</code> property to dynamically display and hide pop-ups.
        `
      },
      'codeFiles': ['trigger.vue']
    },

    {
      'demoId': 'content',
      'name': { 'zh-CN': '弹出层内容', 'en-US': 'Pop-up layer content' },
      'desc': {
        'zh-CN': `
          通过 <code>content</code> 属性设置要显示的字符串内容。<br>
          通过 <code>default</code> 插槽，支持自定义复杂的内容结构。<br>
        `,
        'en-US': `
          The <code>content</code> property sets the string content to be displayed.
          Support for custom complex content structures through the <code>default</code> slot.
        `
      },
      'codeFiles': ['content.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<code>disabled</code> 设置是否禁用弹出框。',
        'en-US': '<code>disabled</code> Specifies whether to disable the pop-up. '
      },
      'codeFiles': ['disabled.vue']
    },

    {
      'demoId': 'offset',
      'name': { 'zh-CN': '自定义偏移', 'en-US': 'Custom Offset' },
      'desc': {
        'zh-CN': `
          通过<code>arrow-offset</code> 设置箭头的在弹窗层上的偏移量。箭头默认至少会保留8px的空间， 以保证箭头不会贴在弹窗层两边。<br>
          通过<code> offset</code> 设置弹框的偏移量，来改变弹框的位置
        `,
        'en-US': `
          Use <code>arrow-offset</code> to set the offset of the arrow on the popup layer. Arrows are left at least 8px by default to ensure that they are not stuck on either side of the popup layer. <br>
          Change the position of the springboard by setting the offset</code> of the springboard
        `
      },
      'codeFiles': ['offset.vue']
    },

    {
      'demoId': 'custom-popper',
      'name': { 'zh-CN': '自定义弹出面板', 'en-US': 'Customize the pop-up panel' },
      'desc': {
        'zh-CN': `
          通过<code>placement</code> 设置弹出框的的位置,可选值为（top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end）。<br>
          通过<code>visible-arrow</code> 设定是否显示提示框的箭头，默认值为 true。<br>
          通过<code>popper-class</code> 可配置单个或多个 class，通过类名可以控制弹窗样式。
        `,
        'en-US': `
          By <code>placement</code> Set the location of the pop-up box. The optional value is (top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end ). <br>
          Set whether the arrow of the prompt box is displayed by <code>visible-arrow</code>. The default value is true. <br>
          You can run the <code>popper-class</code> command to configure one or more classes. You can control the popup style by class name.
        `
      },
      'codeFiles': ['custom-popper.vue']
    },
    {
      'demoId': 'delay',
      'name': { 'zh-CN': '延迟控制', 'en-US': 'Delay control' },
      'desc': {
        'zh-CN': `
          通过 <code>open-delay</code> 弹出框打开时延迟的时长，默认值为0，单位为毫秒<br>
          通过 <code>close-delay</code> 弹出框关闭时延迟的时长，默认值为200，单位为毫秒<br>
          <div class="tip custom-block">只有在触发方式为 hover 时，延迟控制功能才生效。</div>
        `,
        'en-US': `
          Run the <code>open-delay</code> command to open a pop-up. The default value is 0, in milliseconds. <br>
          Run the <code>close-delay</code> command to close the pop-up. The default value is 200, in milliseconds. <br>
          <div class="tip custom-block"> Delay control takes effect only if the trigger mode is hover. </div>
        `
      },
      'codeFiles': ['delay.vue']
    },
    {
      'demoId': 'transition',
      'name': { 'zh-CN': '自定义渐变动画', 'en-US': 'Customized Gradient Animation' },
      'desc': {
        'zh-CN': `通过 <code>transition</code> 设置弹框的显示隐藏淡入淡出动画，默认取值 fade-in-linear。`,
        'en-US':
          'You can run the <code>transition</code> command to set the display hidden fade in and fade out animation of a pop-up. The default value is fade-in-linear.'
      },
      'codeFiles': ['transition.vue']
    },
    {
      'demoId': 'popper-options',
      'name': { 'zh-CN': '高级选项', 'en-US': 'Pop-up Options' },
      'desc': {
        'zh-CN': '通过<code>popper-options</code> 配置弹出框高级选项，参考底部的IPopperOption说明',
        'en-US':
          'Run the <code>popper-options</code> command to configure the advanced pop-up options. For details, see the IPopperOption description at the bottom'
      },
      'codeFiles': ['popper-options.vue']
    },
    // 暂时屏蔽
    // {
    //   'demoId': 'dynamic-reference',
    //   'name': { 'zh-CN': '动态触发源', 'en-US': 'Pop-up Options' },
    //   'desc': {
    //     'zh-CN': `
    //       当组件不传入<code>reference</code> 插槽时,弹出框由于没有触发源而无法触发显示。<br>
    //       通过 <code>reference</code> 属性，可以动态传入一个Dom元素作为动态触发源，之后调用<code>doShow() \ doClose() </code>，来控制弹出框显示与隐藏。
    //       <div class="tip custom-block">通过这个高级技巧，可以实现在列表中共享一个<code> Popover</code> 组件实例,提升了列表时的性能。</div>
    //     `,
    //     'en-US':
    //       'Run the <code>popper-options</code> command to configure the advanced pop-up options. For details, see the IPopperOption description at the bottom'
    //   },
    //   'codeFiles': ['dynamic-reference.vue']
    // },
    {
      'demoId': 'events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': `
          组件支持以下事件：<br>
          <code>hide</code> 隐藏时触发回调<br>
          <code>show</code> 显示时触发回调<br>
          <code>after-leave</code> 进入的动画结束后触发回调<br>
          <code>after-enter</code> 离开的动画播结束后触发回调<br>`,
        'en-US': `
          The component supports the following events: <br>
          <code>hide</code> Trigger callback when hiding <br>
          <code>show</code> callback triggered when displayed <br>
          <code>after-leave</code> Triggers callback after entering animation <br>
          <code>after-enter</code> Trigger callback after the leaving animation ends <br>
          `
      },
      'codeFiles': ['events.vue']
    }
  ],
  apis: [
    {
      'name': 'popover',
      'type': 'component',
      'props': [
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '弹出层的标题', 'en-US': 'Layer Title' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'content',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '弹出层的内容',
            'en-US': 'Layer Content.'
          },
          'demoId': 'basic-usage'
        },

        {
          'name': 'placement',
          'type': `'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'`,
          'defaultValue': '"bottom"',
          'desc': {
            'zh-CN': '弹出层出现的位置',
            'en-US': 'Layer Placement'
          },
          'demoId': 'custom-popper'
        },
        {
          'name': 'width',
          'type': `'auto' | number`,
          'defaultValue': '"auto"',
          'desc': { 'zh-CN': '弹出层宽度', 'en-US': 'Layer width' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'height',
          'type': `'auto' | number`,
          'defaultValue': '"auto"',
          'desc': {
            'zh-CN': '弹出层高度',
            'en-US': 'Layer height'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否禁用', 'en-US': 'Whether the status is visible' },
          'demoId': 'disabled'
        },
        {
          'name': 'trigger',
          'type': `'click' | 'focus' | 'hover' | 'manual'`,
          'defaultValue': '"click"',
          'desc': {
            'zh-CN': '触发方式',
            'en-US': 'Trigger mode'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'modelValue',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '状态是否可见，仅在<code>trigger="manual"</code>时有效',
            'en-US': 'Status is visible only when <code>trigger="manual"</code>'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'offset',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '弹出层的偏移量', 'en-US': 'Layer offset' },
          'demoId': 'offset'
        },
        {
          'name': 'visible-arrow',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示弹出层的箭头',
            'en-US': "whether to show layer's arrow"
          },
          'demoId': 'custom-popper'
        },
        {
          'name': 'arrow-offset',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '弹出层的箭头偏移位置', 'en-US': "the layer's arrow offset " },
          'demoId': 'offset'
        },
        {
          'name': 'open-delay',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '触发方式为 hover 时的显示延迟，单位为毫秒',
            'en-US': 'The display delay when the trigger mode is hover, in milliseconds'
          },
          'demoId': 'delay'
        },
        {
          'name': 'close-delay',
          'type': 'number',
          'defaultValue': '200',
          'desc': {
            'zh-CN': '触发方式为 hover 时的隐藏延迟，单位为毫秒',
            'en-US': 'The close delay when the trigger mode is hover, in milliseconds'
          },
          'demoId': 'delay'
        },
        {
          'name': 'append-to-body',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否添加到body上', 'en-US': 'Whether to add it to the body' },
          'demoId': ''
        },
        {
          'name': 'transition',
          'type': 'string',
          'defaultValue': '"fade-in-linear"',
          'desc': { 'zh-CN': '定义渐变动画', 'en-US': 'Define gradient animation' },
          'demoId': 'transition'
        },
        {
          'name': 'popper-options',
          'type': 'object',
          'defaultValue': '{}',
          'desc': {
            'zh-CN': '弹出层参数;请参考IPopperOption的说明',
            'en-US': 'layer parameters; Refer to the description of IPopperOption'
          },
          'demoId': 'popper-options'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为弹出层添加类名',
            'en-US': 'Add a class name for the pop-up layer.'
          },
          'demoId': 'custom-popper'
        }
      ],
      'events': [
        {
          'name': 'show',
          'type': '()=>void',
          'defaultValue': '',
          'desc': { 'zh-CN': '显示时触发', 'en-US': 'Triggered when display' },
          'demoId': 'events'
        },
        {
          'name': 'hide',
          'type': '()=>void',
          'defaultValue': '',
          'desc': { 'zh-CN': '隐藏时触发', 'en-US': 'Triggered when hidden' },
          'demoId': 'events'
        },
        {
          'name': 'after-enter',
          'type': '()=>void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '进入的动画播放完毕后触发',
            'en-US': 'This event is triggered after the animation is played.'
          },
          'demoId': 'events'
        },
        {
          'name': 'after-leave',
          'type': '()=>void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '离开的动画播放完毕后触发',
            'en-US': 'Triggered after the hidden animation is played.'
          },
          'demoId': 'events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '弹出层元素插槽', 'en-US': 'The layer element slot' },
          'demoId': 'content'
        },
        {
          'name': 'reference',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '触发源元素插槽，该插槽是必传插槽。',
            'en-US': "The layer's reference element slot"
          },
          'demoId': 'content'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IPopperOption',
      type: 'interface',
      code: `
interface IPopperOption {
  bubbling: boolean // 是否监听元素所有上级有滚动元素的scroll事件，监听到则更新popper的位置。用于解决某些弹出层位置在页面滚动时，位置不正确的场景，默认false
  followReferenceHide: boolean // 当触发源隐藏时，自动隐藏弹出层，默认true
  removeOnDestroy: boolean // 弹出层消失后，是否移除弹出层的DOM元素，布尔false
}
      `
    }
  ]
}
