export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'indicator-trigger',
      name: {
        'zh-CN': '指示器和触发方式',
        'en-US': 'Indicators and Triggering Modes'
      },
      desc: {
        'zh-CN':
            '<p>走马灯指示器默认显示在幻灯片内容上，配置 `indicator-position` 为 outside 后，将显示在外部。<br />配置 `trigger` 为 click ，可以修改指示器触发方式为单击，默认鼠标悬停到指示器时，走马灯幻灯片就会对应切换。</p>',
        'en-US': '<p>The walk indicator is displayed on the slide by default. If `indicator-position` is set to outside, the indicator is displayed outside.<br />If `trigger` is set to click, you can change the indicator triggering mode to click. By default, when you hover the mouse over the indicator, the slideshow is switched accordingly.</p>'
      },
      codeFiles: ['indicator-trigger.vue']
    },
    {
      demoId: 'manual-play',
      name: {
        'zh-CN': '手动轮播',
        'en-US': 'Manual Carousel'
      },
      desc: {
        'zh-CN':
            '<p>调用 `setActiveItem()`、`next()`、`prev()` 方法可根据需要进行轮播。`initial-index` 属性可以指定初始激活的幻灯片索引。<p>',
        'en-US': '<p>Invoke the `setActiveItem()`, `next()`, and `prev()` methods to perform NVOD as required. The `initial-index` property specifies the slide index that is initially activated.</p>'
      },
      codeFiles: ['manual-play.vue']
    },
    {
      demoId: 'close-loop',
      name: {
        'zh-CN': '关闭循环轮播',
        'en-US': 'Disabling cyclic NVOD'
      },
      desc: {
        'zh-CN':
            '<p>配置 `loop` 属性为 false 后，若走马灯幻灯片已切换到最后一项，则将不能再从第一项开始循环切换。即切换到最后一项时，右侧切换箭头不再显示，切换到第一项时，左侧切换箭头不再显示。</p>',
        'en-US': '<p>After the `loop` attribute is set to false, if the slide is switched to the last item, the slide cannot be switched cyclically from the first item. That is, when switching to the last item, the right toggle arrow is no longer displayed, and when switching to the first item, the left toggle arrow is no longer displayed.</p>'
      },
      codeFiles: ['close-loop.vue']
    },
    {
      demoId: 'autoplay',
      name: {
        'zh-CN': '自动切换',
        'en-US': 'Automatic switchover'
      },
      desc: {
        'zh-CN': '<p>配置 `autoplay` 属性为 true 后，走马灯的幻灯片内容将自动轮播切换。</p>',
        'en-US': '<p>After the `autoplay` attribute is set to true, the slide content of the walking lantern is automatically switched in rotation.</p>'
      },
      codeFiles: ['autoplay.vue']
    },
    {
      demoId: 'play-interval',
      name: {
        'zh-CN': '轮播间隔时间',
        'en-US': 'NVOD Interval'
      },
      desc: {
        'zh-CN': '<p>走马灯幻灯片轮播间隔时间默认为 3000 毫秒，通过 `interval` 属性可以自定义。</p>',
        'en-US': '<p>The default interval is 3000 ms. You can customize the interval by using the `interval` attribute.</p>'
      },
      codeFiles: ['play-interval.vue']
    },
    {
      demoId: 'up-down-carousel',
      name: {
        'zh-CN': '纵向轮播',
        'en-US': 'Vertical Carousel'
      },
      desc: {
        'zh-CN': '<p>配置 `type` 属性为 vertical 即可实现纵向轮播。</p>',
        'en-US': '<p>Set `type` to vertical to implement vertical rotation.</p>'
      },
      codeFiles: ['up-down-carousel.vue']
    },
    {
      demoId: 'show-title',
      name: {
        'zh-CN': '显示标题',
        'en-US': 'Show Title'
      },
      desc: {
        'zh-CN': '<p>通过 `title` 配置显示标题，需要与 `show-title` 结合使用。</p>',
        'en-US': '<p>Use `title` to configure the display title, which must be used together with `show-title`.</p>'
      },
      codeFiles: ['show-title.vue']
    },
    {
      demoId: 'carousel-arrow-always',
      name: {
        'zh-CN': '总是显示切换箭头',
        'en-US': 'Always show toggle arrows'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['carousel-arrow-always.vue']
    },
    {
      demoId: 'carousel-arrow-hover',
      name: {
        'zh-CN': 'hover 时显示切换箭头',
        'en-US': 'Toggle arrows are displayed when hovering.'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['carousel-arrow-hover.vue']
    },
    {
      demoId: 'carousel-arrow-never',
      name: {
        'zh-CN': '隐藏切换箭头',
        'en-US': 'Hide Toggle Arrow'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['carousel-arrow-never.vue']
    },
    {
      demoId: 'aspect-ratio',
      name: {
        'zh-CN': '宽高比',
        'en-US': 'Aspect ratio'
      },
      desc: {
        'zh-CN':
            '<p>`aspect-ratio` 属性可以设置轮播图的宽高比，如果设置了 height，会以 height 为主，默认值为 16:2，可以设置任意的整数宽高比例。 设置了`aspect-ratio`之后页面缩放时会按照设定的比例自动调整轮播器的高度。</p>',
        'en-US': '<p>The `aspect-ratio` attribute is used to set the aspect ratio of the carousel. If height is set, height is used as the primary value. The default value is 16:2. You can set any integer aspect ratio. After `aspect-ratio` is set, the height of the carousel is automatically adjusted according to the set scale when the page is zoomed in or out.</p>'
      },
      codeFiles: ['aspect-ratio.vue']
    },
    {
      demoId: 'indicator-style',
      name: {
        'zh-CN': '指示器样式',
        'en-US': 'Indicator Style'
      },
      desc: {
        'zh-CN': '<p>`indicator-style` 属性可以设置轮播图指示器样式，支持 light 与 dark 两种类型，默认为 light。</p>',
        'en-US': '<p>The `indicator-style` attribute can be used to set the indicator style of the carousel chart. The options are light and dark. The default value is light.</p>'
      },
      codeFiles: ['indicator-style.vue']
    },
    {
      demoId: 'card-mode',
      name: {
        'zh-CN': '卡片模式',
        'en-US': 'card mode'
      },
      desc: {
        'zh-CN': '<p>配置 <code>type</code> 属性为 card 后，走马灯将以卡片形式进行展示。</p>',
        'en-US': '<p>After the <code>type</code> attribute is set to card, the lantern is displayed as a card.</p>'
      },
      codeFiles: ['card-mode.vue']
    },
    {
      demoId: 'carousel-events',
      name: {
        'zh-CN': '走马灯事件',
        'en-US': 'Carousel Events'
      },
      desc: {
        'zh-CN':
            '<p>主要包含<code>change</code>事件。</p>\n<p>当幻灯片切换时会触发该事件，回调函数可接收两个参数：<code>当前幻灯片索引</code>和<code>上一张幻灯片索引</code>。</p>\n',
        'en-US': '<p>After the <code>type</code> attribute is set to card, the lantern is displayed as a card.</p>'
      },
      codeFiles: ['carousel-events.vue']
    }
  ],
  apis: [
    {
      'name': 'Carousel',
      'type': 'component',
      'props': [
        {
          'name': 'aspect-ratio',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '宽高比，默认为16:2。',
            'en-US': 'Aspect ratio. The default value is 16:2.'
          },
          'demoId': 'aspect-ratio'
        },
        {
          'name': 'indicator-style',
          'type': 'String',
          'defaultValue': '该属性的可选值为 light/dark ，默认为light。',
          'desc': {
            'zh-CN': '指示器的样式。',
            'en-US': 'The style of the indicator.'
          },
          'demoId': 'indicator-style'
        }
      ]
    },
  ]
}
