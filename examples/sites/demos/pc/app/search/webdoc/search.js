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
          '通过 <code>v-model</code> 设置双向绑定搜索值， <code>placeholder</code> 设置默认占位符文本， <code>input</code>元素的原生属性<code>maxlength</code> 设置输入框最大输入字符长度。',
        'en-US':
          'Set bidirectional binding search values through <code>v-model</code> , and set default placeholder text through <code>placeholder</code> The native attribute of the <code>input</code> element<code>maxlength</code>sets the maximum input character length of the input box.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '可清除',
        'en-US': 'Can be cleared'
      },
      desc: {
        'zh-CN': '通过 <code>clearable</code> 设置显示清空图标按钮。',
        'en-US': 'Set the display clear icon button through <code>clear</code> .'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'mini-mode',
      name: {
        'zh-CN': '迷你模式',
        'en-US': 'Mini mode'
      },
      desc: {
        'zh-CN': '通过 <code>mini</code> 设置为 mini 模式。',
        'en-US': 'Set to mini mode through <code>mini</code> .'
      },
      codeFiles: ['mini-mode.vue']
    },
    {
      demoId: 'search-types',
      name: {
        'zh-CN': '搜索类型',
        'en-US': 'Search Type'
      },
      desc: {
        'zh-CN': '通过 <code>search-types</code> 设置可选的搜索类型， <code>type-value</code> 设置搜索类型的默认值。',
        'en-US':
          'Set optional search types by <code>search-types</code> , and set default values for search types by <code>type-value</code> .'
      },
      codeFiles: ['search-types.vue']
    },
    {
      demoId: 'transparent-mode',
      name: {
        'zh-CN': '透明模式',
        'en-US': 'Transparent mode'
      },
      desc: {
        'zh-CN': '通过 <code>transparent</code> 设置为透明模式（注： <code>mini</code> 模式下有效）。',
        'en-US': 'Set to transparent mode through <code>transparent</code> (note: valid in <code>mini</code> mode).'
      },
      codeFiles: ['transparent-mode.vue']
    },
    {
      demoId: 'custom-search-types',
      name: {
        'zh-CN': '定义搜索类型下拉项',
        'en-US': 'Custom Search Type Dropdown'
      },
      desc: {
        'zh-CN': '通过 <code>poplist</code> 插槽自定义搜索类型弹出的内容。',
        'en-US': 'Customize the search type pop-up content through the <code>popup</code> slot.'
      },
      codeFiles: ['custom-search-types.vue']
    },
    {
      demoId: 'show-selected-types',
      name: {
        'zh-CN': '定义默认搜索类型',
        'en-US': 'Customize default search type'
      },
      desc: {
        'zh-CN': '通过 <code>text</code> 插槽自定义默认搜索类型的内容。',
        'en-US': 'Customize the content of the default search type through the <code>text</code> slot.'
      },
      codeFiles: ['show-selected-types.vue']
    },
    {
      demoId: 'slot-prefix',
      name: {
        'zh-CN': '左侧插槽',
        'en-US': 'Left slot'
      },
      desc: {
        'zh-CN': '通过 <code>prefix</code> 插槽自定义左侧内容。',
        'en-US': 'Customize the left content through the <code>prefix</code> slot.'
      },
      codeFiles: ['slot-prefix.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Search event'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block">通过 <code>is-enter-search</code> 设置回车触发搜索事件， <code>search</code> 监听搜索事件；<br />\n              通过 <code>change</code> 监听输入框失焦时搜索值改变事件, <code>input</code> 监听搜索值实时改变事件；<br />\n              通过 <code>select</code> 监听搜索类型选中事件。</div>',
        'en-US':
          '<div class="tip custom-block">Set a carriage return to trigger a search event by <code>is enter search</code> , and listen for search events by <code>search</code> <br />\n              By <code>change</code> listening for search value change events when the input box is out of focus, and <code>input</code> listening for real-time search value change events<br />\n              Listen for search type selection events through <code>select</code> .</div>'
      },
      codeFiles: ['events.vue']
    }
  ]
}
