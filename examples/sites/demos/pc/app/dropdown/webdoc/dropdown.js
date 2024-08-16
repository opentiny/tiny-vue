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
        'zh-CN': '<p>使用 tiny-dropdown-item 定义菜单节点。</p>\n',
        'en-US': '<p>Define menu nodes using tiny-dropdown-item.</p>\n'
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
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置 菜单 或者 菜单项 为禁用状态。</p>\n',
        'en-US':
          'The <p>Use the <code>disabled</code> attribute to set the menu or menu item to a disabled state. </p>\n'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code> 属性可配置其他尺寸，可选值：<code>medium</code> / <code>small</code> / <code>mini</code>。</p>\n',
        'en-US':
          '<p>Use the <code>size</code> attribute to configure other sizes, with optional values: <code>medium</code> / <code>small</code> / <code>mini</code>. </p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'border',
      name: {
        'zh-CN': '边框 / 圆角',
        'en-US': 'Borders and Fillets'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>border</code> 属性设置是否展示边框，<code>border</code> 为 <code>true</code> 时，通过<code>round</code> 属性设置是否为圆角。</p>\n',
        'en-US':
          '<p>The <code>border</code> attribute is used to set whether to display the border. When <code>border</code> is set to <code>true</code>, the <code>round</code> attribute is used to set whether to display the border. </p>\n'
      },
      codeFiles: ['border.vue']
    },
    {
      demoId: 'show-icon',
      name: {
        'zh-CN': '图标',
        'en-US': 'Show icons'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>show-icon</code> 属性设置是否显示下拉触发源图标，<code>suffix-icon</code> 设置下拉触发源图标。</p>\n',
        'en-US':
          '<p> Set whether to display the dropdown trigger source icon through the <code>show-icon</code> attribute, and set the dropdown trigger source icon through the <code>suffix-icon</code> setting. </p>\n'
      },
      codeFiles: ['show-icon.vue']
    },
    {
      demoId: 'split-button',
      name: {
        'zh-CN': '按钮类型',
        'en-US': 'Button type'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>split-button</code> 属性，设置下拉菜单显示为按钮类型。仅按钮类型时，支持 <code>type</code> 属性设置按钮状态。</p>\n',
        'en-US':
          '<p>Set the drop-down menu to display as a button type through the <code>split-button</code> attribute. When only button types are used, the <code>type</code> attribute setting button status is supported.</p>\n'
      },
      codeFiles: ['split-button.vue']
    },
    {
      demoId: 'trigger',
      name: {
        'zh-CN': '触发方式',
        'en-US': 'Trigger Mode'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>trigger</code> 属性设置触发下拉的方式，默认为 <code>hover</code>。可选值为: <code>click</code> / <code>hover</code> 。</p>\n',
        'en-US':
          '<p>By setting the <code>trigger</code> attribute to trigger a drop-down, the default is <code>hover</code>. The optional values are: <code>click</code> / <code>hover</code>.</p>\n'
      },
      codeFiles: ['trigger.vue']
    },
    {
      demoId: 'tip',
      name: {
        'zh-CN': '提示信息',
        'en-US': 'Prompt'
      },
      desc: {
        'zh-CN': '通过 <p><code>tip</code> 属性设置提示信息，<code>tip-position</code> 属性设置提示信息的位置。</p>\n',
        'en-US':
          '<p>Set the prompt information through the <code>tip</code> attribute, and set the position of the prompt information through the <code>tip-position</code> attribute.</p>\n'
      },
      codeFiles: ['tip.vue']
    },
    {
      demoId: 'visible-arrow',
      name: {
        'zh-CN': '显示箭头',
        'en-US': 'Display Arrow'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>visible-arrow</code> 属性设置下拉弹框是否显示箭头，默认不显示。<code>visible-arrow</code> 为 true 时显示箭头。</p>\n',
        'en-US':
          '<p>Use the <code>visible-arrow</code> attribute to set whether the drop-down pop-up box displays an arrow, which is not displayed by default show arrows when <code>visible-arrow</code> is true.</p>\n'
      },
      codeFiles: ['visible-arrow.vue']
    },
    {
      demoId: 'hide-on-click',
      name: {
        'zh-CN': '点击后收起',
        'en-US': 'Click to collapse'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>hide-on-click</code> 属性设置点击菜单项后是否收起菜单弹框。默认为 true，点击后收起。</p>\n',
        'en-US':
          '<p>Use the <code>hide-on-click</code> attribute to set whether to collapse the menu pop-up after clicking on the menu item. The default is true, and it will be collapsed after clicking. </p>\n'
      },
      codeFiles: ['hide-on-click.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '触发源文本',
        'en-US': 'Trigger Source Text'
      },
      desc: {
        'zh-CN': '<p>通过 <code>title</code> 属性设置触发源的文本，默认为 <code>下拉菜单</code>。</p>\n',
        'en-US':
          '<p>Set the text of the trigger source through the <code>title</code> attribute, which defaults to the <code>drop-down-menu</code>.</p>\n'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'check-status',
      name: {
        'zh-CN': '选中态',
        'en-US': 'Selected'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>checked-status</code> 属性启用选中态，<code>current-index</code> 属性设置索引值，<code>selected</code> 属性设置是否选中。</p>\n',
        'en-US':
          '<p>The <code>checked-status</code> attribute is used to enable the selected state, the <code>current-index</code> attribute is used to set the index value, and the <code>selected</code> attribute is used to set whether the selected state is selected.</p>\n'
      },
      codeFiles: ['check-status.vue']
    },
    {
      demoId: 'options',
      name: {
        'zh-CN': '配置式',
        'en-US': 'Configuration'
      },
      desc: {
        'zh-CN':
          '<p><code>menu-options</code>属性：只使用 tiny-dropdown 组件配置式时使用。</p>\n<p><code>options</code>属性：使用 tiny-dropdown-menu 组件配置式时使用。</p>\n<p><code>text-field</code>属性：指定菜单文案显示的字段，默认为 label。 </p>\n<p><code>title</code>属性：设置触发源的文本。</p>\n',
        'en-US':
          '<p><code>menu-options</code> properties: used only when using the tiny dropdown component configuration</p>\n<p> <code>options</code> properties: Used when using the tiny dropdown menu component configuration</p> \n<p><code>text-field</code> attribute: specifies the field displayed in the menu copy, which defaults to label</p> \n<p><code>title</code> attribute: Set the text of the trigger source</p>\n'
      },
      codeFiles: ['options.vue']
    },
    {
      demoId: 'multi-level',
      name: {
        'zh-CN': '多级菜单',
        'en-US': 'Multi-Level Menu'
      },
      desc: {
        'zh-CN': '<p>通过 <code>children</code> 字段定义多级菜单的子节点，仅配置式时生效。</p>\n',
        'en-US': '<p>Dropdown can set the subnodes of a menu through the <code>children</code> field</p>\n'
      },
      codeFiles: ['multi-level.vue']
    },
    {
      demoId: 'inherit-width',
      name: {
        'zh-CN': '继承宽度',
        'en-US': 'Inherit Width'
      },
      desc: {
        'zh-CN': '<p>通过 <code>inherit-width</code> 属性设置下拉弹框的最小宽度继承触发源的宽度。</p>\n',
        'en-US':
          '<p>Inherit the width of the trigger source by setting the minimum width of the drop-down pop-up box through the <code>inherit-width</code> attribute.</p>\n'
      },
      codeFiles: ['inherit-width.vue']
    },
    {
      demoId: 'slots',
      name: {
        'zh-CN': '插槽',
        'en-US': 'Slots'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>default</code> 插槽自定义触发源文本区域。<code>suffix-icon</code> 插槽自定义触发源图标区域。</p>\n',
        'en-US':
          '<p>Customize the trigger source text area through the <code>default</code> slot.</p>\n<p>Customize the trigger source icon area through the <code>suffix-icon</code> slot.</p>\n'
      },
      codeFiles: ['slots.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Events'
      },
      desc: {
        'zh-CN':
          '<p><code>button-click</code>：按钮类型时，监听左侧按钮点击事件。</p><p><code>item-click</code>：监听点击菜单项事件。</p><p><code>visible-change</code>：监听下拉弹框显示隐藏发生变化。</p>\n',
        'en-US':
          '<p><code>button-click</code>: When the button type is selected, listen for the left button click event.</p>\n<p><code>item-click</code>: Listens for menu item click events</p>\n<p><code>visible-change</code>: Listens for changes in the display and hiding of dropdown pop ups.</p>\n'
      },
      codeFiles: ['events.vue']
    },
    {
      demoId: 'lazy-show-popper',
      name: {
        'zh-CN': '懒加载菜单和子项',
        'en-US': 'Lazy Load Menus and Subitems'
      },
      desc: {
        'zh-CN': '通过 <code>lazy-show-popper </code>属性，指定是否懒加载下拉菜单及内部的项',
        'en-US':
          'The <code>lazy-show-popper </code> property specifies whether to lazy load the drop-down menu and internal items.'
      },
      codeFiles: ['lazy-show-popper.vue']
    }
  ]
}
