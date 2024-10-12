export default {
  column: '2',
  owner: '',
  meta: {
    stable: '3.19.0'
  },
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '<p>将需要粘性布局的标签或者组件放入 <code>sticky</code> 组件的默认插槽中，则组件滚出屏幕范围时，始终会固定在屏幕顶部。</p>',
        'en-US':
          '<p>Put a label or component that requires a sticky layout into the default slot of the <code>sticky</code> component, and the component is always fixed at the top of the screen when it rolls out of the screen range.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'offset',
      name: {
        'zh-CN': '偏移距离',
        'en-US': 'Offset Distance'
      },
      desc: {
        'zh-CN': '<p>通过设置 <code>offset</code> 属性来改变吸顶或吸底距离，默认值为 0。</p>',
        'en-US':
          '<p>Change the ceiling or bottom distance by setting the <code>offset</code> attribute. The default value is 0.</p>'
      },
      codeFiles: ['offset.vue']
    },
    {
      demoId: 'position',
      name: {
        'zh-CN': '固定位置',
        'en-US': 'Fixed position'
      },
      desc: {
        'zh-CN':
          '通过设置 <code>position</code> 属性来改变固定位置，可选值有 <code>top</code> 和 <code>bottom</code>，默认值为 <code>top</code> 。',
        'en-US':
          'Set the <code>position</code> attribute to change the fixed position. The options are <code>top</code> and <code>bottom</code>. The default value is <code>top</code>.'
      },
      codeFiles: ['position.vue']
    },
    {
      demoId: 'target',
      name: {
        'zh-CN': '目标容器',
        'en-US': 'Offset Distance'
      },
      desc: {
        'zh-CN':
          '通过 <code>target</code> 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。',
        'en-US':
          'You can use the <code>target</code> attribute to specify the container of the component. When the page scrolls, the component is always within the container range. When the component is about to exceed the bottom of the container, the component is fixed at the bottom of the container.'
      },
      codeFiles: ['target.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Events'
      },
      desc: {
        'zh-CN':
          '通过配置 <code>change</code> 事件监听吸顶或吸底状态改变时触发的事件，<code>scroll</code> 事件监听滚动事件。',
        'en-US':
          'You can configure the <code>change</code> event to listen to events triggered when the ceiling or bottom status changes, and the <code>scroll</code> event to listen to scroll events.'
      },
      codeFiles: ['events.vue']
    }
  ]
}
