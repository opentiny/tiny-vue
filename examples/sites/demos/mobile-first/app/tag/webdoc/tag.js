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
        'en-US': '<p>button type</p>'
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
        'zh-CN': '<p>可通过 `color` 设置标签背景色。<p>',
        'en-US': '<p>bbutton click</p>'
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
        'zh-CN': '<p>可通过 `hit` 设置标签边框，可选值（true/false）true 为有边框，false 无边框,默认值为 false。<p>',
        'en-US': '<p>bbutton click</p>'
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
        'zh-CN': '<p>可通过 `size` 设置 Tag 标签大小，可选值（medium / small / mini），默认值为 medium。<p>',
        'en-US': '<p>bbutton click</p>'
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
          '<p>可通过 `effect` 设置 Tag 标签主题，可选值（dark / light / plain），默认值为 light。<br>`type`可以为标签设置相应的类型，可选值（success / warning / alerting / error / default / info），默认值为 info。<p>',
        'en-US': '<p>bbutton click</p>'
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
        'zh-CN': '<p>通过点击`+ New Tag`在文本框中输入你要定义的标签名就能在标签列表中最后一个创建标签 。<p>',
        'en-US': '<p>bbutton click</p>'
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
        'zh-CN': '<p>`closable` 属性可以为标签设置成可去除标签。<p>',
        'en-US': '<p>bbutton click</p>'
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
        'zh-CN': '<p>设置过滤类型<p>',
        'en-US': '<p>bbutton click</p>'
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
        'zh-CN': '<p>设置过滤类型<p>',
        'en-US': '<p>bbutton click</p>'
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
        'zh-CN': '<p>标签加上 selectable 属性可开启选中功能<p>',
        'en-US': '<p>bbutton click</p>'
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
        'zh-CN': '<p>可通过 `theme` 设置其他颜色的标签，目前新增的彩色标签有 pink、purple、cyan。<p>',
        'en-US': '<p>bbutton click</p>'
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
        'zh-CN': '<p>通过绑定`value`属性设置自定义内容<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['content.vue']
    }
  ],
  apis: []
}
