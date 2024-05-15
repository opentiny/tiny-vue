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
        'zh-CN':
          '通过<code>arrow</code>属性设置左右箭头切换效果，<code>loop</code>属性是否循环显示，<code>autoplay</code>属性自动切换。',
        'en-US':
          'Set the left and right arrow switching effect through the<code>arrow</code>attribute, check whether the<code>loop</code>attribute is displayed in a loop, and automatically switch the<code>autoplay</code>attribute.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'indicator-trigger',
      name: {
        'zh-CN': '指示器和触发方式',
        'en-US': 'Indicator and Trigger Mode'
      },
      desc: {
        'zh-CN':
          '<p>通过配置 <code>indicator-position</code> 为<code>outside</code>后，走马灯指示器默认显示在幻灯片内容上，将显示在外部。\n配置 <code>trigger</code> 为<code>click</code>，可以修改指示器触发方式为单击，默认鼠标悬停到指示器时，走马灯幻灯片就会对应切换。</p>\n',
        'en-US':
          '<p>The walk indicator is displayed on the slide by default. After <code>indicator-position</code> is set to outside, the indicator is displayed outside. \n Set <code>trigger</code> to click. You can change the indicator triggering mode to click. By default, when you hover the cursor over an indicator, the slideshow is switched accordingly. </p>\n'
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
          '<p>通过调用 <code>setActiveItem()</code>、<code>next()</code>、<code>prev()</code> 方法可根据需要进行轮播。<code>initial-index</code> 属性可以指定初始激活的幻灯片索引。</p>\n',
        'en-US':
          '<p>Invoke the <code>setActiveItem()</code>, <code>next()</code>, and <code>prev()</code> methods to perform NVOD as required. The <code>initial-index</code> property specifies the slide index that is initially activated. </p>\n'
      },
      codeFiles: ['manual-play.vue']
    },
    {
      demoId: 'close-loop',
      name: {
        'zh-CN': '关闭循环轮播',
        'en-US': 'Disable cyclic NVOD'
      },
      desc: {
        'zh-CN':
          '<p>通过配置 <code>loop</code> 属性为<code>false</code>后，若走马灯幻灯片已切换到最后一项，则将不能再从第一项开始循环切换。即切换到最后一项时，右侧切换箭头不再显示，切换到第一项时，左侧切换箭头不再显示。</p>\n',
        'en-US':
          '<p>After the <code>loop</code> attribute is set to <code>false</code>, if the slide is switched to the last item, the slide cannot be switched cyclically from the first item. That is, when switching to the last item, the right toggle arrow is no longer displayed, and when switching to the first item, the left toggle arrow is no longer displayed. </p>\n'
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
        'zh-CN':
          '<p>通过配置 <code>autoplay</code> 属性为<code>true</code>后，走马灯的幻灯片内容将自动轮播切换。</p>\n',
        'en-US':
          '<p>After <code>autoplay</code> is set to <code>true</code>, the slide content of the walk-through is automatically switched in rotation. </p>\n'
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
        'zh-CN': '<p>通过 <code>interval</code> 属性可以自定义，走马灯幻灯片轮播间隔时间默认为 3000 毫秒。</p>\n',
        'en-US':
          '<p>The interval is 3000 ms by default, which can be customized through the <code>interval</code> attribute. </p>\n'
      },
      codeFiles: ['play-interval.vue']
    },
    {
      demoId: 'up-down-carousel',
      name: {
        'zh-CN': '纵向轮播',
        'en-US': 'vertical carousel'
      },
      desc: {
        'zh-CN': '<p>通过配置 <code>type</code> 属性为<code>vertical</code>即可实现纵向轮播。</p>\n',
        'en-US': '<p>Set <code>type</code> to vertical to implement <code>vertical</code> rotation. </p>\n'
      },
      codeFiles: ['up-down-carousel.vue']
    },
    {
      demoId: 'show-title',
      name: {
        'zh-CN': '显示标题',
        'en-US': 'Display Title'
      },
      desc: {
        'zh-CN': '<p>通过 <code>title</code> 配置显示标题，需要与 <code>show-title</code> 结合使用。</p>\n',
        'en-US':
          '<p>Use <code>title</code> to configure the display title. This parameter must be used together with <code>show-title</code>. </p>\n'
      },
      codeFiles: ['show-title.vue']
    },
    {
      demoId: 'carousel-arrow-always',
      name: {
        'zh-CN': '总是显示切换箭头',
        'en-US': 'Always show the switch arrow'
      },
      desc: {
        'zh-CN': '通过<code>arrow</code>设置属性为<code>always</code>。',
        'en-US': 'Set the attribute to<code>always</code>through<code>arrow</code>.'
      },
      codeFiles: ['carousel-arrow-always.vue']
    },
    {
      demoId: 'carousel-arrow-hover',
      name: {
        'zh-CN': 'hover 时显示切换箭头',
        'en-US': 'The switch arrow is displayed during Hover'
      },
      desc: {
        'zh-CN': '通过<code>arrow</code>设置属性为<code>hover</code>。',
        'en-US': 'Set the attribute to<code>hover</code>through<code>arrow</code>.'
      },
      codeFiles: ['carousel-arrow-hover.vue']
    },
    {
      demoId: 'carousel-arrow-never',
      name: {
        'zh-CN': '隐藏切换箭头',
        'en-US': 'Hide the switch arrow'
      },
      desc: {
        'zh-CN': '通过<code>arrow</code>设置属性为<code>never</code>。',
        'en-US': 'Set the attribute to<code>never</code>through<code>arrow</code>.'
      },
      codeFiles: ['carousel-arrow-never.vue']
    },
    {
      demoId: 'card-mode',
      name: {
        'zh-CN': '卡片模式',
        'en-US': 'Card Mode'
      },
      desc: {
        'zh-CN': '<p>通过配置 <code>type</code> 属性为<code>card</code>后，走马灯将以卡片形式进行展示。</p>\n',
        'en-US':
          '<p>After the <code>type</code> attribute is set to <code>card</code>, the lantern is displayed as a card. </p>\n'
      },
      codeFiles: ['card-mode.vue']
    },
    {
      demoId: 'carousel-events',
      name: {
        'zh-CN': '走马灯事件',
        'en-US': 'The Ma Deng incident'
      },
      desc: {
        'zh-CN':
          '<p>主要包含<code>change</code>事件。</p>\n<p>当幻灯片切换时会触发该事件，回调函数可接收两个参数：<code>当前幻灯片索引</code>和<code>上一张幻灯片索引</code>。</p>\n',
        'en-US': ''
      },
      codeFiles: ['carousel-events.vue']
    },
    {
      demoId: 'card-show',
      name: {
        'zh-CN': '轮播卡片',
        'en-US': 'Carousel Card'
      },
      desc: {
        'zh-CN': '<p>通过设置 <code>default</code> 插槽，自定义卡片轮播场景。</p>',
        'en-US': '<p>Customize the card carousel scene by setting <code>default</code> slots.</p>'
      },
      codeFiles: ['card-show.vue']
    },
    {
      demoId: 'dialog-show',
      name: {
        'zh-CN': '弹窗展示',
        'en-US': 'Dialog Show'
      },
      desc: {
        'zh-CN': '<p>在弹窗中嵌入轮播场景。</p>',
        'en-US': '<p>Embed a carousel scene in the pop-up window.</p>'
      },
      codeFiles: ['dialog-show.vue']
    }
  ]
}
