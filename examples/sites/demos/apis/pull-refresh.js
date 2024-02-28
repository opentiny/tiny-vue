export default {
  mode: ['mobile', 'mobile-first'],
  apis: [
    {
      name: 'pull-refresh ',
      type: 'component',
      props: [
        {
          name: 'disabled-pull-down',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用下拉刷新</p>',
            'en-US': 'disablde pull down'
          },
          mode: ['mobile'],
          mobileDemo: 'disabled-pull-down'
        },
        {
          name: 'disabled-pull-up',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否禁用上拉</p>',
            'en-US': 'disablded pull up'
          },
          mode: ['mobile'],
          mobileDemo: 'disabled-pull-up'
        },
        {
          name: 'has-more',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>是否有更多数据</p>',
            'en-US': 'has more'
          },
          mode: ['mobile'],
          mobileDemo: 'has-more'
        },
        {
          name: 'loosing-text',
          type: 'string',
          defaultValue: '释放即可刷新',
          desc: {
            'zh-CN': '<p>下拉高度大于等于head-height时的提示文字，默认为：释放即可刷新</p>',
            'en-US': 'display different button'
          },
          mode: ['mobile'],
          mobileDemo: 'loosing-text'
        },
        {
          name: 'pull-down-loading-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉加载文字</p>',
            'en-US': 'pull down loading text'
          },
          mode: ['mobile'],
          mobileDemo: 'pulling-text'
        },
        {
          name: 'pull-up-distance',
          type: 'number',
          defaultValue: '18',
          desc: {
            'zh-CN': '<p>触发上拉刷新的距离</p>',
            'en-US': 'pull up distance'
          },
          mode: ['mobile'],
          mobileDemo: 'pull-up-distance'
        },
        {
          name: 'pull-up-loading-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上拉加载文字</p>',
            'en-US': 'pull up loading text'
          },
          mode: ['mobile'],
          mobileDemo: 'pulling-text'
        },
        {
          name: 'v-model',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否刷新状态，可以手动设置false来关闭刷新</p>',
            'en-US': 'is refreshing'
          },
          mode: ['mobile'],
          mobileDemo: 'base'
        }
      ],
      events: [
        {
          name: 'pull-down',
          type: '(event: PullEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉时触发的事件</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'event'
        },
        {
          name: 'pull-up',
          type: '(event: PullEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上拉时触发的事件</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'event'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'footer',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>上拉加载更多插槽</p>',
            'en-US': 'pull up slot'
          },
          mode: ['mobile'],
          mobileDemo: 'pull-refresh-slot'
        },
        {
          name: 'header',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>下拉刷新插槽</p>',
            'en-US': 'pull down slot'
          },
          mode: ['mobile'],
          mobileDemo: ''
        }
      ]
    },
    {
      name: 'pull-refresh',
      type: 'component',
      props: [
        {
          mode: []
        },
        {
          name: 'disabled',
          type: 'Boolean',
          defaultValue: '默认值是false',
          desc: {
            'zh-CN': '是否禁用下拉刷新',
            'en-US': 'Whether to disable pull-down refresh'
          },
          mode: ['mobile-first'],
          mfDemo: 'disabled'
        },
        {
          name: 'headHeight',
          type: '[Number, String]',
          defaultValue: '默认值是50',
          desc: {
            'zh-CN': '组件头部提示区域的高度',
            'en-US': 'Height of the component head prompt area'
          },
          mode: ['mobile-first'],
          mfDemo: 'head-height'
        },
        {
          name: 'loadingOptions',
          type: 'Object',
          defaultValue: '默认值是空对象{}',
          desc: {
            'zh-CN': '不使用loading插槽时，内置加载组件Loading的参数：Loading.service(options)',
            'en-US':
              'When the loading slot is not used, the loading parameter of the built-in loading component is Loading.service(options).'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'loadingText',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '数据刷新过程的提示文本',
            'en-US': 'Prompt text for the data refresh process'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'loosingText',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '向下拖动超过阈值后可松开进行刷新的提示文本',
            'en-US': 'Drag down to release the prompt text for refresh after the threshold is exceeded.'
          },
          mode: ['mobile-first'],
          mfDemo: 'loosing-text'
        },
        {
          name: 'modelValue',
          type: 'Boolean',
          defaultValue: '默认值是false',
          desc: {
            'zh-CN': '是否正在进行下拉刷新',
            'en-US': 'Is the pull-down refresh in progress'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'pullDistance',
          type: '[Number, String]',
          defaultValue: '默认值是属性 `headHeight` 的值',
          desc: {
            'zh-CN': '拖拽产生刷新的距离',
            'en-US': 'Refreshing distance generated by dragging'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'pullingText',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '向下拖动过程的提示文本',
            'en-US': 'Drag down the prompt text for the procedure'
          },
          mode: ['mobile-first'],
          mfDemo: 'pulling-text'
        },
        {
          name: 'selfSimulate',
          type: 'Boolean',
          defaultValue: '默认值是false',
          desc: {
            'zh-CN':
              '是否开启自模拟Touch事件。如果开启，那么组件只处理自身产生的模拟Touch事件，忽略冒泡上来的非自身模拟事件。正常非模拟Touch事件始终不会跳过处理',
            'en-US':
              'Indicates whether to enable the self-simulation Touch event. If this function is enabled, the component only processes simulated Touch events generated by itself and ignores non-simulated events generated by itself. Normal non-simulated Touch events never skip processing'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'successDuration',
          type: '[Number, String]',
          defaultValue: '默认值是500',
          desc: {
            'zh-CN': '刷新成功提示文本延时消失时间',
            'en-US': 'Time for the text to disappear after the refresh is successful.'
          },
          mode: ['mobile-first'],
          mfDemo: 'success-duration'
        },
        {
          name: 'successText',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '刷新成功的提示文本',
            'en-US': 'Text of the message indicating that the refresh is successful'
          },
          mode: ['mobile-first'],
          mfDemo: 'success-text'
        }
      ],
      events: [
        {
          name: 'change',
          type: 'Function({ status, distance })',
          defaultValue: 'status:{String 组件当前状态}，distance:{Number 当前的拖动距离}',
          desc: {
            'zh-CN': '在组件状态改变时抛出',
            'en-US': 'Thrown when the component state changes'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'refresh',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '在组件状态进入 loading 刷新数据时抛出',
            'en-US': 'Thrown when the component enters the loading state to refresh data'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'update:modelValue',
          type: 'Function(isLoading)',
          defaultValue: 'isLoading:{Boolean 组件是否处于 loading}',
          desc: {
            'zh-CN': '在组件状态进入 loading 刷新数据时抛出',
            'en-US': 'Thrown when the component enters the loading state to refresh data'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件默认插槽',
            'en-US': 'Component Default Slot'
          },
          mode: ['mobile-first'],
          mfDemo: 'pull-refresh-slot'
        },
        {
          name: 'loading',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件 loading 插槽，自定义 loading 状态的提示',
            'en-US': 'Component loading slot, which is used to customize the loading status prompt.'
          },
          mode: ['mobile-first'],
          mfDemo: 'pull-refresh-slot'
        },
        {
          name: 'loosing',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件 loosing 插槽，自定义 loosing 状态的提示',
            'en-US': 'Component loosing slot, which is used to customize the loosing status prompt.'
          },
          mode: ['mobile-first'],
          mfDemo: 'pull-refresh-slot'
        },
        {
          name: 'normal',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件 normal 插槽，自定义 normal 状态的提示',
            'en-US': 'Indicates the normal slot of the component. The prompt for the normal status is customized.'
          },
          mode: ['mobile-first'],
          mfDemo: 'pull-refresh-slot'
        },
        {
          name: 'pulling',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件 pulling 插槽，自定义 pulling 状态的提示',
            'en-US': 'Pull slot of the component, which is used to customize the prompt of the pull status.'
          },
          mode: ['mobile-first'],
          mfDemo: 'pull-refresh-slot'
        },
        {
          name: 'success',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '组件 success 插槽，自定义 success 状态的提示',
            'en-US': 'Indicates the success slot of the component. The success status is customized.'
          },
          mode: ['mobile-first'],
          mfDemo: 'pull-refresh-slot'
        }
      ]
    }
  ]
}
