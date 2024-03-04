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
        'zh-CN':
          '<p>通过 <code>name</code> 属性设置对应标签名。</br>通过 <code>type</code> 属性可以为标签设置相应的类型，可选值 <code>(success / warning / info / danger  )</code>。</p>',
        'en-US':
          'Set the name of the corresponding tag through the <code>name</code> attribute.</br>You can set the type of a tag through the <code>type</code> attribute. The value can be <code>(success / warning / info / danger)</code>. <code>info</code>. '
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'tag-group-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'size'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>size</code> 设置标签组标签大小，可选值 <code>medium / small / mini</code>，默认值为 <code>medium</code>。</p>',
        'en-US':
          'You can use <code>size</code> to set the label size of a label group. The options are <code>medium / small / mini</code>. The default value is <code>medium</code>. '
      },
      codeFiles: ['tag-group-size.vue']
    },
    {
      demoId: 'tag-group-effect',
      name: {
        'zh-CN': '主题',
        'en-US': 'effect'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>effect</code> 设置 TagGroup 标签组 标签主题，可选值 <code>dark / light / plain</code>，默认值为 <code>light</code> 。</p>',
        'en-US':
          'You can use <code>effect</code> to set the tag group tag theme. The options are <code>dark / light / plain</code>. The default value is <code>light</code>. '
      },
      codeFiles: ['tag-group-effect.vue']
    },
    {
      demoId: 'tag-group-event',
      name: {
        'zh-CN': 'Click 事件',
        'en-US': 'click event'
      },
      desc: {
        'zh-CN':
          '<p>TagGroup 标签组提供了 <code>item-click</code>事件，<code>item-click</code> 事件默认提供的参数有 <code>item,index,event</code> 。</p>',
        'en-US':
          'The TagGroup tag group provides the item-click event. By default, the item-click event provides the following parameters: <code>item, index, and event</code>. '
      },
      codeFiles: ['tag-group-event.vue']
    }
  ]
}
