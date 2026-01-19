export default {
  column: '2',
  owner: '',
  meta: {
    experimental: '3.29.0'
  },
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': `按enter回车键添加标签，按backspace删除最后一个标签。<br>`,
        'en-US': `Press Enter to add a tag, and press Backspace to delete the last one. <br>`
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled-readonly',
      name: {
        'zh-CN': '禁用与只读',
        'en-US': 'disabled and readonly'
      },
      desc: {
        'zh-CN': `你可以设置TagInput被禁用或者只读。<br>`,
        'en-US': `You can set the TagInput to be disabled or readonly. <br>`
      },
      codeFiles: ['disabled-readonly.vue']
    },
    {
      demoId: 'max-tag',
      name: {
        'zh-CN': '最大标签数',
        'en-US': 'maximum tags'
      },
      desc: {
        'zh-CN': `您可以设置添加标签的数量限制。<br>`,
        'en-US': `You can set a limit on the number of tags to add.<br>`
      },
      codeFiles: ['max.vue']
    },
    {
      demoId: 'collapsed-tag',
      name: {
        'zh-CN': '折叠标签',
        'en-US': 'collapsed tags'
      },
      desc: {
        'zh-CN': `通过设置minCollapsedTags属性，可以控制折叠标签的数量，超过部分将以+N的形式显示。<br>`,
        'en-US': `By setting the minCollapsedTags property, you can control the number of collapsed tags, with the excess displayed in a "+N" format. <br>`
      },
      codeFiles: ['collapsed-tag.vue']
    },
    {
      demoId: 'clearable-tag',
      name: {
        'zh-CN': '可清空标签',
        'en-US': 'clearable tags'
      },
      desc: {
        'zh-CN': `通过设置clearable属性，可以控制标签是否可清空。<br>`,
        'en-US': `By setting the clearable attribute, you can control whether the tag is removable.<br>`
      },
      codeFiles: ['clearable-tag.vue']
    },
    {
      demoId: 'separator-tag',
      name: {
        'zh-CN': '分隔符输入标签',
        'en-US': 'separator tag'
      },
      desc: {
        'zh-CN': `可以通过设置分隔符separator来实现批量输入。<br>`,
        'en-US': `You can achieve batch input by setting the separator parameter.<br>`
      },
      codeFiles: ['separator-tag.vue']
    },
    {
      demoId: 'prefix-suffix',
      name: {
        'zh-CN': '自定义前后缀',
        'en-US': 'custom prefix and suffix'
      },
      desc: {
        'zh-CN': `可以通过设置prefix和suffix属性来自定义前后缀。<br>`,
        'en-US': `You can customize the prefix and suffix by setting the prefix and suffix attributes.<br>`
      },
      codeFiles: ['prefix-suffix.vue']
    },
    {
      demoId: 'draggable-tag',
      name: {
        'zh-CN': '可拖拽标签',
        'en-US': 'draggable tags'
      },
      desc: {
        'zh-CN': `可以通过设置drag属性来实现标签的拖拽功能。<br>`,
        'en-US': `You can enable the drag functionality of tags by setting the drag attribute.<br>`
      },
      codeFiles: ['draggable-tag.vue']
    }
  ]
}
