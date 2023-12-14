export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'base'
      },
      desc: {
        'zh-CN': '<p>基础用法</p>',
        'en-US': '<p>base</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '类型',
        'en-US': 'type'
      },
      desc: {
        'zh-CN': '<p>类型</p>',
        'en-US': '<p>type</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'decimal',
      name: {
        'zh-CN': '小数点位数',
        'en-US': 'decimal'
      },
      desc: {
        'zh-CN': '<p>小数点位数</p>',
        'en-US': '<p>decimal</p>'
      },
      codeFiles: ['decimal.vue']
    },
    {
      demoId: 'bold',
      name: {
        'zh-CN': '加粗',
        'en-US': 'bold'
      },
      desc: {
        'zh-CN': '<p>加粗</p>',
        'en-US': '<p>bold</p>'
      },
      codeFiles: ['bold.vue']
    },
    {
      demoId: 'color',
      name: {
        'zh-CN': '不同颜色',
        'en-US': 'different color'
      },
      desc: {
        'zh-CN': '<p>不同颜色</p>',
        'en-US': '<p>different color</p>'
      },
      codeFiles: ['color.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '不同尺寸',
        'en-US': 'different size'
      },
      desc: {
        'zh-CN': '<p>不同尺寸</p>',
        'en-US': '<p>different size</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'wholeline',
      name: {
        'zh-CN': '整行展示',
        'en-US': 'whole line'
      },
      desc: {
        'zh-CN': '<p>整行展示</p>',
        'en-US': '<p>whole line</p>'
      },
      codeFiles: ['wholeline.vue']
    },
    {
      demoId: 'limit',
      name: {
        'zh-CN': '限制文本字数',
        'en-US': 'limit text length'
      },
      desc: {
        'zh-CN': '<p>限制文本字数</p>',
        'en-US': '<p>limit text length</p>'
      },
      codeFiles: ['limit.vue']
    },
    {
      demoId: 'position',
      name: {
        'zh-CN': '整行显示文字位置',
        'en-US': 'text position'
      },
      desc: {
        'zh-CN': '<p>整行显示时，文字位置</p>',
        'en-US': '<p>text position</p>'
      },
      codeFiles: ['position.vue']
    },
    {
      demoId: 'ellipsis',
      name: {
        'zh-CN': '最大显示行数',
        'en-US': 'max line'
      },
      desc: {
        'zh-CN': '<p>最大显示行数</p>',
        'en-US': '<p>max line</p>'
      },
      codeFiles: ['ellipsis.vue']
    },
    {
      demoId: 'required',
      name: {
        'zh-CN': '是否添加*号',
        'en-US': 'required'
      },
      desc: {
        'zh-CN': '<p>是否添加*号</p>',
        'en-US': '<p>required</p>'
      },
      codeFiles: ['required.vue']
    }
  ],
  apis: [
    {
      name: 'Label', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          name: 'label',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>文本</p>',
            'en-US': 'text'
          },
          demoId: 'base'
        },
        {
          name: 'type',
          type: 'string',
          defaultValue: 'base',
          desc: {
            'zh-CN': '<p>类型 \n base, number</p>',
            'en-US': 'type'
          },
          demoId: 'type'
        },
        {
          name: ' color',
          type: 'string',
          defaultValue: 'primary',
          desc: {
            'zh-CN': '<p>文本颜色:primary,secondary,placeholder,disabled,inverse,brand,link</p>',
            'en-US': 'text color'
          },
          demoId: 'color'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: 'normal',
          desc: {
            'zh-CN': '<p>文本大小:large,normal,small,mini</p>',
            'en-US': 'text size'
          },
          demoId: 'size'
        },
        {
          name: 'wholeline',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否整行显示</p>',
            'en-US': 'whole line display'
          },
          demoId: 'wholeline'
        },
        {
          name: 'position',
          type: 'string',
          defaultValue: 'left',
          desc: {
            'zh-CN': '<p>整行显示时的位置:left,center,right</p>',
            'en-US': 'position of whole line dispaly'
          },
          demoId: 'position'
        },
        {
          name: 'ellipsis',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>支持超出省略号显示的行数</p>',
            'en-US': 'ellipsis'
          },
          demoId: 'ellipsis'
        },
        {
          name: 'decimal',
          type: 'number',
          defaultValue: '2',
          desc: {
            'zh-CN': '<p>小数点的位数</p>',
            'en-US': 'decimal'
          },
          demoId: 'decimal'
        },
        {
          name: 'limit',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>限制文本的字数</p>',
            'en-US': 'text limit'
          },
          demoId: 'limit'
        },
        {
          name: 'is-required',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '<p>是否添加*号</p>',
            'en-US': 'is required'
          },
          demoId: 'required'
        }
      ],
      slots: []
    }
  ]
}
