export default {
  mode: ['mobile'],
  apis: [
    {
      name: 'TimeLine',
      type: 'component',
      props: [
        {
          name: 'active',
          type: 'Number',
          defaultValue: '1',
          desc: {
            'zh-CN': '<p>设置步骤条的选中步骤</p>',
            'en-US': 'Is show right text'
          },
          mode: ['mobile'],
          mobileDemo: 'different-data'
        },
        {
          name: 'data',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置时间线步骤条数据',
            'en-US': 'data'
          },
          mode: ['mobile'],
          mobileDemo: 'different-data'
        },
        {
          name: 'horizontal',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否为横向步骤条</p>',
            'en-US': 'Is show right text'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'name-field',
          type: 'String',
          defaultValue: 'name',
          desc: {
            'zh-CN': '<p>设置节点信息中名称对应的字段名</p>',
            'en-US': 'Is show left arrow'
          },
          mode: ['mobile'],
          mobileDemo: 'different-data'
        },
        {
          name: 'reverse',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置竖向步骤条的方向</p>',
            'en-US': 'Is show right text'
          },
          mode: ['mobile'],
          mobileDemo: 'mobileTimeLine'
        },
        {
          name: 'show-number',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>设置未完成的状态是否显示序号',
            'en-US': 'data'
          },
          mode: ['mobile'],
          mobileDemo: 'different-data'
        },
        {
          name: 'showStatus',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否展示状态文字</p>',
            'en-US': 'Is show right text'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'space',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置步骤条的宽度</p>',
            'en-US': 'Is show right arrow'
          },
          mode: ['mobile'],
          mobileDemo: 'space'
        },
        {
          name: 'start',
          type: 'start',
          defaultValue: '1',
          desc: {
            'zh-CN': '<p>设置步骤条序号起始值</p>',
            'en-US': 'Is show left arrow'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'time-field',
          type: 'String',
          defaultValue: 'time',
          desc: {
            'zh-CN': '<p>设置节点时间信息对应的字段名</p>',
            'en-US': 'Is show right text'
          },
          mode: ['mobile'],
          mobileDemo: 'different-data'
        },
        {
          name: 'vertical',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>竖式步骤条</p>',
            'en-US': 'Is show right text'
          },
          mode: ['mobile'],
          mobileDemo: 'steps'
        }
      ],
      events: [
        {
          name: 'click',
          type: 'Function(arg1,arg2)',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>节点的点击事件;arguments: arg1:点击节点的下标, arg2:{ name: 节点名称, time: 时间 }</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'mobileTimeLine'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'bottom',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义横向步骤条底部</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'conternt',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义竖向步骤条内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'header',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义竖向步骤条头部内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: ''
        },
        {
          name: 'left',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义步骤条左侧内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'slot'
        },
        {
          name: 'right',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义步骤条右侧内容</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: 'slot'
        },
        {
          name: 'top',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义横向步骤条顶部</p>',
            'en-US': 'Click'
          },
          mode: ['mobile'],
          mobileDemo: ''
        }
      ]
    }
  ]
}
