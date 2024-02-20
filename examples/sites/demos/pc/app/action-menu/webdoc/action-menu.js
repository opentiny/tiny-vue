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
        'zh-CN': '使用 <code>options</code> 属性配置菜单内容，<code>label</code> 定义节点的显示文本。',
        'en-US':
          'Use <code>options</code> attributes to configure menu content, and <code>label</code> to define the display text for nodes.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 字段设置当前下拉选项是否为禁用状态。</p>',
        'en-US': '<p>Set whether the current drop-down option is disabled through the <code>disabled</code> field.</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '图标',
        'en-US': 'Icon'
      },
      desc: {
        'zh-CN':
          '通过 <code>icon</code> 属性设置菜单项的图标，<code>suffix-icon</code> 设置下拉触发源图标，<code>show-icon</code> 设置是否显示下拉触发源图标。',
        'en-US':
          'Set the icon of the attribute setting menu item through <code>icon</code>, set the drop-down trigger source icon through <code>suffix-icon</code>, and set whether to display the drop-down trigger source icon through <code>show-icon</code>.'
      },
      codeFiles: ['icon.vue']
    },
    {
      demoId: 'text-field',
      name: {
        'zh-CN': '映射字段',
        'en-US': 'Display Text'
      },
      desc: {
        'zh-CN': '<p>通过 <code>text-field</code> 属性设置菜单项文本的键值，默认为 label。</p>',
        'en-US':
          '<p>Set the key value of the menu item text through the <code>text-field</code> attribute, which defaults to label.</p>'
      },
      codeFiles: ['text-field.vue']
    },
    {
      demoId: 'more-text',
      name: {
        'zh-CN': '下拉按钮文本',
        'en-US': 'Dropdown button text'
      },
      desc: {
        'zh-CN': '<p>通过 <code>more-text</code> 属性设置下拉按钮文本,默认为 <code>更多</code>。</p>',
        'en-US':
          '<p>Set the dropdown button text through the <code>more-text</code> attribute, default to <code>More</code></p>'
      },
      codeFiles: ['more-text.vue']
    },
    {
      demoId: 'spacing',
      name: {
        'zh-CN': '间距',
        'en-US': 'Spacing'
      },
      desc: {
        'zh-CN': '<p>通过 <code>spacing</code> 属性设置菜单按钮之间的间距,默认为 <code>5px</code>。</p>',
        'en-US':
          '<p>Set the spacing between menu buttons through the <code>spacing</code> attribute, which defaults to <code>5px</code>.</p>'
      },
      codeFiles: ['spacing.vue']
    },
    {
      demoId: 'popper-class',
      name: {
        'zh-CN': '弹框样式',
        'en-US': 'Bullet Box Style'
      },
      desc: {
        'zh-CN': '<p>通过 <code>popper-class</code> 属性设置下拉面板的类名，自定义样式。</p>',
        'en-US':
          '<p>Set the class name of the drop-down panel and customize the style through the <code>popper-class</code> attribute.</p>'
      },
      codeFiles: ['popper-class.vue']
    },
    {
      demoId: 'max-show-num',
      name: {
        'zh-CN': '个数限制',
        'en-US': 'Number limit'
      },
      desc: {
        'zh-CN': '<p>通过 <code>max-show-num</code> 属性设置最多显示菜单按钮的个数，默认为 2。</p>',
        'en-US':
          '<p>By setting the <code>max-show-num</code> attribute, the maximum number of displayed menu buttons is set to 2 by default.</p>'
      },
      codeFiles: ['max-show-num.vue']
    },
    {
      demoId: 'slot-item',
      name: {
        'zh-CN': '菜单项插槽',
        'en-US': 'Menu Slot'
      },
      desc: {
        'zh-CN': '<p>通过 <code>item</code> 插槽自定义下拉选项的 HTML 模板。</p>',
        'en-US': '<p>Customize the HTML template for dropdown options through the <code>item</code> slot.</p>'
      },
      codeFiles: ['slot-item.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Menu Item Click Event'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">事件说明</p>\n<p>item-click：监听菜单项的点击事件。</p>\n<p>more-click：监听下拉按钮的点击事件。trigger 为 click 时生效。</p>\n<p>visible-change：监听下拉弹框的显示或隐藏状态变化。</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title">Event description</p>\n<p>item-click：Listen for click events on menu items.</p>\n<p>more-click：Listen for the click event of the drop-down button. Effective when trigger is click.</p>\n<p>visible-change：Monitor the display or hidden status changes of the dropdown pop-up.</p>\n</div>\n'
      },
      codeFiles: ['events.vue']
    }
  ]
}
