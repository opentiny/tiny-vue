export default {
  mode: ['mobile-first'],
  apis: [
    {
      name: 'LoadList',
      type: 'component',
      props: [
        {
          name: 'direction',
          type: `'up' | 'down'`,
          defaultValue: "'down'",
          desc: {
            'zh-CN': '滚动触发加载的方向，可选值为 `up`，默认值 `down`',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'offset',
          type: `number | string`,
          defaultValue: '300',
          desc: {
            'zh-CN': '滚动条与底部距离小于 offset 时触发 load 事件，默认值 `300`',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'disabled',
          type: `boolean`,
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用滚动加载，默认值 false',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'disabled'
        },
        {
          name: 'scroller',
          type: 'HTMLElement',
          defaultValue: '',
          desc: {
            'zh-CN': '指定需要监听滚动事件的节点，默认为最近的父级滚动节点',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'immediate-check',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否在初始化时立即执行滚动位置检查，默认值 `true`',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'error',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否加载失败，加载失败后点击错误提示可以重新触发 `load` 事件，默认值 `false`',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'error-text'
        },
        {
          name: 'error-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '加载失败的提示文案',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'error-text'
        },
        {
          name: 'loading',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否处于加载状态，加载过程中不触发 `load` 事件，默认值 `false`',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'loading-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '加载过程中的提示文案',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'finished',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否已加载完成，加载完成后不再触发 `load` 事件，默认值 `false`',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'finished-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '加载完成后的提示文案',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'delay',
          type: `number | string`,
          defaultValue: '100',
          desc: {
            'zh-CN': '触发 `load` 事件时的节流延时，默认值 `100`',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        }
      ],
      events: [
        {
          name: 'load',
          type: '()=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '当列表底部和滚动容器边界之间的距离小于值 `offset` 时，列表组件会触发 `load` 事件',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'update:error',
          type: '()=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '加载失败后点击错误提示可以重新触发 `load` 事件，组件会抛出此事件',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'update:loading',
          type: '()=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '当列表底部和滚动容器边界之间的距离小于值 `offset` 时，列表组件会触发 `load` 事件并抛出此事件',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        }
      ],
      methods: [
        {
          name: 'check',
          type: '()=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '手动触发列表滚动位置检查',
            'en-US': 'Is fixed top'
          },
          mode: ['mobile-first'],
          mfDemo: 'disabled'
        }
      ],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽，用于定制渲染列表区域',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile-first'],
          mfDemo: 'slots'
        },
        {
          name: 'loading',
          defaultValue: '',
          desc: {
            'zh-CN': '加载中插槽，用于定制加载中提示区域',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile-first'],
          mfDemo: 'slots'
        },
        {
          name: 'finished',
          defaultValue: '',
          desc: {
            'zh-CN': '已加载完成插槽，用于定制加载完成提示区域',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile-first'],
          mfDemo: 'slots'
        },
        {
          name: 'error',
          defaultValue: '',
          desc: {
            'zh-CN': '加载失败插槽，用于定制加载失败提示区域',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile-first'],
          mfDemo: 'slots'
        }
      ]
    }
  ]
}
