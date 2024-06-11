export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>详细用法参考如下示例。</p>',
        'en-US': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'placement',
      name: {
        'zh-CN': '抽屉方向',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          "<p>添加 <code>placement</code> 属性设置抽屉的方向，可选值有 <code>'left' | 'right' | 'top' | 'bottom'</code>，默认值为 <code>'right'</code>。</p>",
        'en-US': ''
      },
      codeFiles: ['placement.vue']
    },
    {
      demoId: 'tips-props',
      name: { 'zh-CN': '帮助提示', 'en-US': 'Help tips' },
      desc: {
        'zh-CN':
          '<p>通过 <code>tips-props</code> 属性可自定义标题帮助提示信息，具体属性配置参考 <a href="tooltip#tooltip">ToolTip 组件</a> 的 props 说明。</p>',
        'en-US': ''
      },
      codeFiles: ['tips-props.vue']
    },
    {
      demoId: 'width',
      name: {
        'zh-CN': '抽屉宽度',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>添加 <code>width</code> 属性设置抽屉的宽度，默认值为 <code>500px</code>。</p>',
        'en-US': ''
      },
      codeFiles: ['width.vue']
    },
    {
      demoId: 'dragable',
      name: {
        'zh-CN': '宽高可拖拽',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>添加 <code>dragable</code> 属性开启抽屉宽度/高度拖拽功能。当抽屉位于左右两侧时可拖拽宽度，上下两侧可拖拽高度。默认值为 <code>false</code>。</p>',
        'en-US': ''
      },
      codeFiles: ['dragable.vue']
    },
    {
      demoId: 'mask',
      name: {
        'zh-CN': '遮罩层显示隐藏',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>添加 <code>mask</code> 属性可以控制遮罩层显示隐藏，默认值为 <code>true</code> 。</p>',
        'en-US': ''
      },
      codeFiles: ['mask.vue']
    },
    {
      demoId: 'before-close',
      name: {
        'zh-CN': '拦截抽屉关闭',
        'en-US': 'Block Drawer Close'
      },
      desc: {
        'zh-CN':
          '\n          <p>通过 <code>before-close</code> 属性可以配置一个拦截弹窗关闭的方法。如果方法返回 <code>false</code> 值，则拦截弹窗关闭；否则不拦截。</p>\n          <p>可以通过该拦截方法传入的参数获取关闭的操作类型 <code>type</code> 弹窗有以下关闭类型：</p>\n          <ul>\n            <li>confirm：点击确认时关闭</li>\n            <li>cancel：点击取消时关闭</li>\n            <li>close：点击关闭按钮时关闭</li>\n            <li>mask：点击遮罩层时关闭</li>\n          </ul>\n        ',
        'en-US':
          '<p>The <code>before-close</code> attribute can be used to configure a method that intercepts closing of the pop-up window. If the method returns a value of <code>false</code>, then the pop-up window is prevented from closing; otherwise it is not intercepted.</p>\n          <p>The parameter passed through this interception method can be used to obtain the type of closing operation <code>type</code> for the pop-up window. The following are the types of closing operations:</p>\n          <ul>\n            <li>confirm: click confirm button</li>\n            <li>cancel: click cancel button</li>\n            <li>close: click close button</li>\n            <li>mask: click mask</li>\n          </ul>\n          '
      },
      codeFiles: ['before-close.vue']
    },
    {
      demoId: 'mask-closable',
      name: {
        'zh-CN': '点击遮罩层关闭抽屉',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>默认弹窗打开后，可以单击遮罩层关闭弹窗，设置 <code>mask-closable</code> 为 <code>false</code> 后将禁用该功能，默认值为 <code>true</code> 。</p>',
        'en-US': ''
      },
      codeFiles: ['mask-closable.vue']
    },
    {
      demoId: 'show-close',
      name: {
        'zh-CN': '关闭图标显示',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p><code>show-close</code> 控制显示关闭图标，默认值为 <code>true</code>。</p>',
        'en-US': ''
      },
      codeFiles: ['show-close.vue']
    },
    {
      demoId: 'show-header',
      name: {
        'zh-CN': '头部显示',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p><code>show-header</code> 控制显示头部，默认值为 <code>true</code>。</p>',
        'en-US': ''
      },
      codeFiles: ['show-header.vue']
    },
    {
      demoId: 'show-footer',
      name: {
        'zh-CN': '底部显示',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p><code>show-footer</code> 控制显示底部，默认值为 <code>false</code>。</p>',
        'en-US': ''
      },
      codeFiles: ['show-footer.vue']
    },
    {
      demoId: 'z-index',
      name: {
        'zh-CN': '自定义堆叠顺序',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>z-index</code> 属性设置自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）。</p>\n',
        'en-US': ''
      },
      codeFiles: ['z-index.vue']
    },
    {
      demoId: 'header-slot',
      name: {
        'zh-CN': '头部插槽',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>自定义头部内容，当 <code>show-header</code> 取值为 <code>true</code> 时有效。</p>',
        'en-US': ''
      },
      codeFiles: ['header-slot.vue']
    },
    {
      demoId: 'header-right-slot',
      name: {
        'zh-CN': '头部右侧插槽',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>自定义头部右侧内容，当 <code>show-header</code> 取值为 <code>true</code> 时有效。</p>',
        'en-US': ''
      },
      codeFiles: ['header-right-slot.vue']
    },
    {
      demoId: 'footer-slot',
      name: {
        'zh-CN': '底部插槽',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>底部插槽，默认隐藏底部，设置 <code>:show-footer="true"</code> 时有效。<p>',
        'en-US': ''
      },
      codeFiles: ['footer-slot.vue']
    },
    {
      demoId: 'open-event',
      name: {
        'zh-CN': '打开事件',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>打开抽屉事件。</p>',
        'en-US': ''
      },
      codeFiles: ['open-event.vue']
    },
    {
      demoId: 'close-event',
      name: {
        'zh-CN': '关闭事件',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>关闭抽屉事件，抽屉关闭时触发。</p>',
        'en-US': ''
      },
      codeFiles: ['close-event.vue']
    },
    {
      demoId: 'confirm-event',
      name: {
        'zh-CN': '确认事件',
        'en-US': ''
      },
      desc: {
        'zh-CN':
          '<p>确认事件，点击确认按钮时触发，设置 <code>:show-footer="true"</code> 且不使用底部插槽 <code>footer</code> 时有效。</p>',
        'en-US': ''
      },
      codeFiles: ['confirm-event.vue']
    }
  ]
}
