export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-space',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>默认横向排列，支持自动插槽分隔间距</p>',
        'en-US': '<p>Horizontal layout by default, with automatic spacing between slots</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'space-size',
      name: {
        'zh-CN': '间距尺寸',
        'en-US': 'Spacing Size'
      },
      desc: {
        'zh-CN': '<p>通过 `size` 属性设置间距，支持 small / medium / large 或自定义数值 / 数组。</p>',
        'en-US':
          '<p>Use the `size` prop to define spacing. Supports small / medium / large or custom values / arrays.</p>'
      },
      codeFiles: ['space-size.vue']
    },
    {
      demoId: 'space-direction',
      name: {
        'zh-CN': '排列方向',
        'en-US': 'Direction'
      },
      desc: {
        'zh-CN': '<p>通过 `direction` 属性设置排列方向，支持 horizontal 或 vertical。</p>',
        'en-US': '<p>Use the `direction` prop to control layout direction: horizontal or vertical.</p>'
      },
      codeFiles: ['space-direction.vue']
    },
    {
      demoId: 'space-wrap',
      name: {
        'zh-CN': '换行显示',
        'en-US': 'Wrapping'
      },
      desc: {
        'zh-CN': '<p>通过 `wrap` 属性控制是否换行显示内容。</p>',
        'en-US': '<p>Use the `wrap` prop to enable wrapping of child items.</p>'
      },
      codeFiles: ['space-wrap.vue']
    },
    {
      demoId: 'space-align',
      name: {
        'zh-CN': '对齐方式',
        'en-US': 'Alignment'
      },
      desc: {
        'zh-CN': '<p>通过 `align` 设置交叉轴对齐方式，如 start、center、end、baseline 等。</p>',
        'en-US': '<p>Use `align` to define alignment on the cross axis, such as start, center, end, or baseline.</p>'
      },
      codeFiles: ['space-align.vue']
    },
    {
      demoId: 'space-justify',
      name: {
        'zh-CN': '主轴对齐方式',
        'en-US': 'Justify Content'
      },
      desc: {
        'zh-CN':
          '<p>通过 `justify` 设置主轴对齐方式，如 start、center、end、space-between、space-around、space-evenly。</p>',
        'en-US':
          '<p>Use `justify` to set main axis alignment like start, center, end, space-between, space-around, space-evenly.</p>'
      },
      codeFiles: ['space-justify.vue']
    },
    {
      demoId: 'space-order',
      name: {
        'zh-CN': '自定义排序',
        'en-US': 'Custom Order'
      },
      desc: {
        'zh-CN': '<p>通过 `order` 属性传入 key 数组，自定义子元素渲染顺序。</p>',
        'en-US': '<p>Use the `order` prop with a key array to customize rendering order of children.</p>'
      },
      codeFiles: ['space-order.vue']
    }
  ]
}
