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
        'zh-CN': '<p>默认采用横向布局（row），自动为插槽内容添加间距。</p>',
        'en-US': '<p>Uses horizontal layout (row) by default, automatically adding spacing between slot content.</p>'
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
        'zh-CN':
          '<p>通过 <code>size</code> 属性设置间距大小，支持 small、medium、large 预定义值或自定义数值/数组。</p>',
        'en-US':
          '<p>Use the <code>size</code> prop to set spacing size. Supports predefined values (small, medium, large) or custom values/arrays.</p>'
      },
      codeFiles: ['space-size.vue']
    },
    {
      demoId: 'space-direction',
      name: {
        'zh-CN': '排列方向',
        'en-US': 'Layout Direction'
      },
      desc: {
        'zh-CN': '<p>通过 <code>direction</code> 属性设置布局方向，支持 row（横向）或 column（纵向）。</p>',
        'en-US':
          '<p>Use the <code>direction</code> prop to set layout direction: row (horizontal) or column (vertical).</p>'
      },
      codeFiles: ['space-direction.vue']
    },
    {
      demoId: 'space-wrap',
      name: {
        'zh-CN': '换行显示',
        'en-US': 'Content Wrapping'
      },
      desc: {
        'zh-CN': '<p>通过 <code>wrap</code> 属性控制子项内容是否换行显示。</p>',
        'en-US': '<p>Use the <code>wrap</code> prop to control whether child items wrap to multiple lines.</p>'
      },
      codeFiles: ['space-wrap.vue']
    },
    {
      demoId: 'space-align',
      name: {
        'zh-CN': '交叉轴对齐',
        'en-US': 'Cross Axis Alignment'
      },
      desc: {
        'zh-CN': '<p>通过 <code>align</code> 属性设置交叉轴对齐方式，支持 start、center、end、baseline 等值。</p>',
        'en-US':
          '<p>Use the <code>align</code> prop to define alignment on the cross axis, supporting values like start, center, end, and baseline.</p>'
      },
      codeFiles: ['space-align.vue']
    },
    {
      demoId: 'space-justify',
      name: {
        'zh-CN': '主轴对齐',
        'en-US': 'Main Axis Justification'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>justify</code> 属性设置主轴对齐方式，支持 start、center、end、space-between、space-around、space-evenly。</p>',
        'en-US':
          '<p>Use the <code>justify</code> prop to set main axis alignment, supporting start, center, end, space-between, space-around, and space-evenly.</p>'
      },
      codeFiles: ['space-justify.vue']
    },
    {
      demoId: 'space-order',
      name: {
        'zh-CN': '自定义排序',
        'en-US': 'Custom Ordering'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>order</code> 属性传入 key 数组来自定义子元素的渲染顺序，未设置 key 的子元素将自动排列在最后。</p>',
        'en-US':
          '<p>Use the <code>order</code> prop with an array of keys to customize the rendering order of child elements. Children without defined keys are automatically arranged at the end.</p>'
      },
      codeFiles: ['space-order.vue']
    }
  ]
}
