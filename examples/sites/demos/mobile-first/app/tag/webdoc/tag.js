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
      demoId: 'color3',
      name: {
        'zh-CN': '颜色',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `color` 设置标签背景色。</p>',
        'en-US': '<p>You can use `color` to set the background color of a label.</p>'
      },
      codeFiles: ['color3.vue']
    },
    {
      demoId: 'hit',
      name: {
        'zh-CN': '边框',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `hit` 设置标签边框，可选值（true/false）true 为有边框，false 无边框,默认值为 false。</p>',
        'en-US': '<p>You can use `hit` to set the label border. The options are true and false. The default value is false.</p>'
      },
      codeFiles: ['hit.vue']
    },
    {
      demoId: 'tag-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `size` 设置 Tag 标签大小，可选值（medium / small / mini），默认值为 medium。</p>',
        'en-US': '<p>You can use `size` to set the tag size. The value can be medium, small, or mini. The default value is medium.</p>'
      },
      codeFiles: ['tag-size.vue']
    },
    {
      demoId: 'effect',
      name: {
        'zh-CN': '主题',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `effect` 设置 Tag 标签主题，可选值（dark / light / plain），默认值为 light。<br>`type`可以为标签设置相应的类型，可选值（success / warning / alerting / error / default / info），默认值为 info。</p>',
        'en-US': '<p>You can use `effect` to set the tag theme. The value can be dark, light, or plain. The default value is light. <br>`type`You can set the corresponding type for the tag. The value can be (success / warning / alerting / error / default / info). The default value is info.</p>'
      },
      codeFiles: ['effect.vue']
    },
    {
      demoId: 'create',
      name: {
        'zh-CN': '动态编辑标签',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过点击`+ New Tag`在文本框中输入你要定义的标签名就能在标签列表中最后一个创建标签 。</p>',
        'en-US': '<p>Click `+ New Tag` and enter the name of the tag you want to define in the text box to create a tag in the last tag list.</p>'
      },
      codeFiles: ['create.vue']
    },
    {
      demoId: 'closable',
      name: {
        'zh-CN': '可移除标签',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>`closable` 属性可以为标签设置成可去除标签。</p>',
        'en-US': '<p>The `closable` attribute can be set to removeable tags for tags.</p>'
      },
      codeFiles: ['closable.vue']
    },
    {
      demoId: 'tag-event-click',
      name: {
        'zh-CN': 'Click 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置过滤类型</p>',
        'en-US': '<p>Set the filtering type.</p>'
      },
      codeFiles: ['tag-event-click.vue']
    },
    {
      demoId: 'tag-event-close',
      name: {
        'zh-CN': 'Close 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置过滤类型</p>',
        'en-US': '<p>Set the filtering type.</p>'
      },
      codeFiles: ['tag-event-close.vue']
    },
    {
      demoId: 'tag-selectable',
      name: {
        'zh-CN': '标签可选中',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>标签加上 selectable 属性可开启选中功能</p>',
        'en-US': '<p>Add the selectable attribute to the tag to enable the selection function.</p>'
      },
      codeFiles: ['tag-selectable.vue']
    },
    {
      demoId: 'colorful-tag',
      name: {
        'zh-CN': '多彩标签',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `theme` 设置其他颜色的标签，目前新增的彩色标签有 pink、purple、cyan。</p>',
        'en-US': '<p>You can use `theme` to set labels of other colors. Currently, the new color labels include pink, purple, and cyan.</p>'
      },
      codeFiles: ['colorful-tag.vue']
    },
    {
      demoId: 'content',
      name: {
        'zh-CN': '属性传值显示内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过绑定`value`属性设置自定义内容</p>',
        'en-US': '<p>Set custom content by binding the `value` property</p>'
      },
      codeFiles: ['content.vue']
    }
  ],
  apis: [
    {
      'name': 'Tag',
      'type': 'component',
      'props': [
        {
          'name': 'custom-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '标签class',
            'en-US': 'Tag class'
          },
          'demoId': ''
        },
        {
          'name': 'operable',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否可操作',
            'en-US': 'Operable or Not'
          },
          'demoId': ''
        },
        {
          'name': 'theme',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '彩色标签，该属性的可选值为 pink、purple、cyan',
            'en-US': 'Color label. The value can be pink, purple, or cyan.'
          },
          'demoId': 'colorful-tag'
        },
        {
          'name': 'type',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '该属性的可选值为 success / warning / alerting / error / default / info,默认值为 info',
            'en-US': 'The value of this attribute can be success / warning / alerting / error / default / info. The default value is info.'
          },
          'demoId': 'effect'
        },
      ]
    },
  ]
}
