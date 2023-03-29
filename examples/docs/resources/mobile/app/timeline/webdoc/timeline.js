export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'different-data',
      name: {
        'zh-CN': '数据映射',
        'en-US': 'different data',
      },
      desc: {
        'zh-CN': '<p>数据映射</p>',
        'en-US': '<p>button type</p>',
      },
      codeFiles: ['different-data.vue'],
    },
    {
      demoId: 'space',
      name: {
        'zh-CN': '设置高度',
        'en-US': 'space',
      },
      desc: {
        'zh-CN': '<p>设置高度</p>',
        'en-US': '<p>button round</p>',
      },
      codeFiles: ['space.vue'],
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'slots',
      },
      desc: {
        'zh-CN': '<p>插槽</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['slot.vue'],
    },
    {
      demoId: 'steps',
      name: {
        'zh-CN': '方向',
        'en-US': 'steps',
      },
      desc: {
        'zh-CN': '<p>方向</p>',
        'en-US': '<p>button click</p>',
      },
      codeFiles: ['steps.vue'],
    },
  ],
  apis: [
    {
      name: 'TimeLine', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'data',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置时间线步骤条数据',
            'en-US': 'data',
          },
          demoId: 'different-data',
        },
        {
          name: 'show-number',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>设置未完成的状态是否显示序号',
            'en-US': 'data',
          },
          demoId: 'different-data',
        },
        {
          name: 'name-field',
          type: 'String',
          defaultValue: 'name',
          desc: {
            'zh-CN': '<p>设置节点信息中名称对应的字段名</p>',
            'en-US': 'Is show left arrow',
          },
          demoId: 'different-data',
        },
        {
          name: 'start',
          type: 'start',
          defaultValue: '1',
          desc: {
            'zh-CN': '<p>设置步骤条序号起始值</p>',
            'en-US': 'Is show left arrow',
          },
          demoId: '',
        },
        {
          name: 'space',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置步骤条的宽度</p>',
            'en-US': 'Is show right arrow',
          },
          demoId: 'space',
        },
        {
          name: 'time-field',
          type: 'String',
          defaultValue: 'time',
          desc: {
            'zh-CN': '<p>设置节点时间信息对应的字段名</p>',
            'en-US': 'Is show right text',
          },
          demoId: 'different-data',
        },
        {
          name: 'active',
          type: 'Number',
          defaultValue: '1',
          desc: {
            'zh-CN': '<p>设置步骤条的选中步骤</p>',
            'en-US': 'Is show right text',
          },
          demoId: 'different-data',
        },
        {
          name: 'reverse',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>设置竖向步骤条的方向</p>',
            'en-US': 'Is show right text',
          },
          demoId: 'mobileTimeLine',
        },
        {
          name: 'vertical',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>竖式步骤条</p>',
            'en-US': 'Is show right text',
          },
          demoId: 'steps',
        },
        {
          name: 'horizontal',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否为横向步骤条</p>',
            'en-US': 'Is show right text',
          },
          demoId: '',
        },
        {
          name: 'showStatus',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否展示状态文字</p>',
            'en-US': 'Is show right text',
          },
          demoId: '',
        },

      ],
      events: [
        {
          name: 'click',
          type: 'Function(arg1,arg2)',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>节点的点击事件;arguments: arg1:点击节点的下标, arg2:{ name: 节点名称, time: 时间 }</p>',
            'en-US': 'Click',
          },
          demoId: 'mobileTimeLine',
        },
      ],
      slot: [
        {
          name: 'left',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义步骤条左侧内容</p>',
            'en-US': 'Click',
          },
          demoId: 'slot',
        },
        {
          name: 'right',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义步骤条右侧内容</p>',
            'en-US': 'Click',
          },
          demoId: 'slot',
        },
        {
          name: 'top',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义横向步骤条顶部</p>',
            'en-US': 'Click',
          },
          demoId: '',
        },
        {
          name: 'bottom',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义横向步骤条底部</p>',
            'en-US': 'Click',
          },
          demoId: '',
        },
        {
          name: 'header',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义竖向步骤条头部内容</p>',
            'en-US': 'Click',
          },
          demoId: '',
        },
        {
          name: 'conternt',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>定义竖向步骤条内容</p>',
            'en-US': 'Click',
          },
          demoId: '',
        },
      ],
    },
  ],
}
