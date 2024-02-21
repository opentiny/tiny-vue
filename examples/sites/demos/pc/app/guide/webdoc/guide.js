export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基础用法',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>dom-data</code> 设置每一个步骤要显示的内容，<code>show-step</code> 设置为 <code>true</code> 即可开启指引。<code>dom-data</code> 详细配置可参考 <a href="#IDomData">IDomData</a> 类型。</p>',
        'en-US': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'arrow-position',
      name: {
        'zh-CN': '箭头位置',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '\n          <p>通过 <code>pop-position</code> 属性设置箭头位置，该属性的可选值可参考 <a href="#IPosition">IPosition</a> 类型。</p>\n          <p>若存在多个步骤，需要单独给每个步骤设置不同的展示位置，可以在 <code>dom-data</code> 里面添加 <code>popPosition</code> 属性并赋值，若存在单独设置的箭头位置，则会覆盖全局的箭头位置。</p>\n        ',
        'en-US': ''
      },
      codeFiles: ['arrow-position.vue']
    },
    {
      demoId: 'only-content',
      name: {
        'zh-CN': '纯段落用户引导',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>通过添加 <code>only-content</code> 类名实现纯段落用户引导。</p>',
        'en-US': ''
      },
      codeFiles: ['only-content.vue']
    },
    {
      demoId: 'highlight-box',
      name: {
        'zh-CN': '高亮多处',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>在 <code>dom-data</code> 里面通过 <code>hightBox</code> 属性添加需要高亮的元素。</p>',
        'en-US': ''
      },
      codeFiles: ['highlight-box.vue']
    },
    {
      demoId: 'offset',
      name: {
        'zh-CN': '引导框偏移量',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>main-axis</code> / <code>cross-axis</code> / <code>alignment-axis</code> 设置纵轴、横轴和对齐轴的偏移量。</p>',
        'en-US': ''
      },
      codeFiles: ['offset.vue']
    },
    {
      demoId: 'image-text',
      name: {
        'zh-CN': '图文结合用户引导',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>可以在插槽里面添加任何 <code>html</code> 或通过 <code>dom-data</code> 里面的 <code>text</code> 属性实现图文结合用户引导。</p>',
        'en-US': ''
      },
      codeFiles: ['image-text.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '自定义宽高',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>通过添加 <code>width</code> 和 <code>height</code> 来自定义宽高。</p>',
        'en-US': ''
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'modal-overlay-opening',
      name: {
        'zh-CN': '模态叠加层开口',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '\n          <p><code>modal-overlay-opening-padding</code>：可以在模态叠加层开口周围添加的填充量，控制引导元素高亮范围。</p>\n          <p><code>modal-overlay-opening-radius</code>：可以在模态叠加层开口周围添加的边界半径量，控制引导元素高亮圆角。</p>\n        ',
        'en-US': ''
      },
      codeFiles: ['modal-overlay-opening.vue']
    },
    {
      demoId: 'callback',
      name: {
        'zh-CN': '事件回调',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>事件回调在 <code>dom-data</code> 中使用，详情可参考 <a href="#IDomData">IDomData</a> 类型。</p>',
        'en-US': ''
      },
      codeFiles: ['callback.vue']
    }
  ]
}
