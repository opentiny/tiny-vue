export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN': '<p>通过 <code>data-source</code> 属性绑定可选项数据，<code>v-model</code> 设置被选中值。</p>',
        'en-US':
          '<p>Bind the optional data through the <code>data-source</code> attribute, and set the selected value through <code>v-model</code>.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'mask',
      name: {
        'zh-CN': '遮罩层',
        'en-US': 'Mask Setting'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>mask</code> 属性显示遮罩层，同时利用 <code>mask-options</code> 属性设置遮罩层属性。</p>',
        'en-US':
          '<p>Display a mask layer using the <code>mask</code> attribute, and set the mask layer properties using the <code>mask-options</code> attribute.</p>'
      },
      codeFiles: ['mask.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>disabled</code> 属性禁用组件，也支持在 <code>data-source</code> 数据源指定特定选项禁用。</p>',
        'en-US':
          '<p>Use the <code>disabled</code> attribute to disable the component, and can also specify specific options to disable in the <code>data-source</code> data source.</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'filter',
      name: {
        'zh-CN': '选项过滤',
        'en-US': 'Filter'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>filterable</code> 属性启用搜索功能，<code>search-placeholder</code> 属性设置搜索提示，<code>search-value</code> 属性可双向绑定搜索框输入值。</p>',
        'en-US':
          '<p>Enable search functionality through the <code>filterable</code> attribute, <code>search-placeholder</code> attribute sets the search prompt, and the <code>search-value</code> attribute enables two-way binding of the search box input value.</p>'
      },
      codeFiles: ['filter.vue']
    },
    {
      demoId: 'type-wheel',
      name: {
        'zh-CN': '滑轮模式',
        'en-US': 'Type Wheel'
      },
      desc: {
        'zh-CN': `<p>通过 <code>type</code> 属性设置选项形式，可选值有以下两种：</p>
        <ul>
          <li>list: 列表形式</li>
          <li>wheel: 滚动滑轮</li>
        </ul>`,
        'en-US': `<p>Set the option form by using the <code>type</code> attribute, with the following two optional values:</p>
        <ul>
          <li>list: scroll list</li>
          <li>wheel: scroll wheel</li>
        </ul>`
      },
      codeFiles: ['type-wheel.vue']
    },
    {
      demoId: 'slots',
      name: {
        'zh-CN': '插槽',
        'en-US': 'Slots'
      },
      desc: {
        'zh-CN': '<p>通过 <code>footer</code> 插槽可自定义选项下方区域元素。</p>',
        'en-US': '<p>Use <code>footer</code> slot to customize elements under options list.</p>'
      },
      codeFiles: ['slots.vue']
    },
    {
      demoId: 'event-click-item',
      name: {
        'zh-CN': '点击选项事件',
        'en-US': 'Type Wheel'
      },
      desc: {
        'zh-CN': '<p>通过 <code>item-click</code> 监听选项点击事件。</p>',
        'en-US': '<p>Listen to the option click event through <code>item-click</code>.</p>'
      },
      codeFiles: ['event-click-item.vue']
    }
  ]
}
