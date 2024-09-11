export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'sticky',
      type: 'component',
      props: [
        {
          name: 'offset',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '偏移距离，支持 px vw vh rem 单位，默认为 0',
            'en-US': 'Offset distance. The unit is px vw vh rem. The default value is 0'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'offset',
          mfDemo: 'offset'
        },
        {
          name: 'position',
          type: '"bottom" | "top"',
          defaultValue: 'top',
          desc: {
            'zh-CN': '吸附位置，可选值有 bottom、top，默认为top',
            'en-US': 'Indicates the adsorption position. The options are bottom and top. The default value is top'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'position',
          mfDemo: 'position'
        },
        {
          name: 'target',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '目标元素参照的吸顶容器，不设置时默认为 window',
            'en-US':
              'Ceiling container referenced by the target element. If this parameter is not set, window is used by default'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'target',
          mfDemo: 'target'
        },
        {
          name: 'z-index',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '目标元素的层级，默认 100',
            'en-US': 'Level of the target element. The default value is 100'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'offset',
          mfDemo: 'offset'
        }
      ],
      events: [
        {
          name: 'change',
          type: '(isFixed: boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '吸顶或吸底状态改变时触发的事件',
            'en-US': 'Event triggered when the status of the ceiling or bottom is changed'
          },
          mode: ['pc', 'mobile'],
          pcDemo: 'events',
          mobileDemo: 'events'
        },
        {
          name: 'scoll',
          type: '({scrollTop: number, isFixed: boolean}) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '鼠标滚动时触发',
            'en-US': 'Triggered when the mouse scrolls'
          },
          mode: ['pc', 'mobile'],
          pcDemo: 'events',
          mobileDemo: 'events'
        }
      ],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件默认插槽',
            'en-US': 'Component Default Slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        }
      ]
    }
  ]
}
