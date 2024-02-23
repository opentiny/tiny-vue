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
          '<p><code>show-header</code>:显示头部，默认值为<code>true</code>；<code>show-close</code>:显示头部关闭按钮，默认值为<code>false</code></p>',
        'en-US':
          '<p><code>show-header</code>: displays the header. The default value is <code>true</code>. <code>show-close</code>: button for closing the display header. The default value is <code>false</code></p>.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'dialog-before-close',
      name: {
        'zh-CN': '拦截弹窗关闭',
        'en-US': 'Intercept pop-up window closed'
      },
      desc: {
        'zh-CN':
          '<p>添加<code>before-close</code>属性可以配置一个拦截弹窗关闭的方法。如果方法返回<code>false</code>值，则拦截弹窗关闭；否则不拦截</p>',
        'en-US':
          '<p>Add the <code>before-close</code> attribute to configure a method for blocking pop-up window closure. If the method returns the <code>false</code> value, the pop-up window is closed. Otherwise, the pop-up window is not blocked</p>'
      },
      codeFiles: ['dialog-before-close.vue']
    },
    {
      demoId: 'dialog-destroy-close',
      name: {
        'zh-CN': '关闭时销毁 Dialog-box 中的元素',
        'en-US': 'Destroy elements in Dialog-box when closed'
      },
      desc: {
        'zh-CN':
          '<p>添加<code>destroy-on-close</code>控制是否在关闭时销毁<code>Dialog-box</code>中的元素，默认值为<code>false</code><p>',
        'en-US':
          '<p>The <code>destroy-on-close</code> parameter is added to control whether to destroy the elements in the <code>Dialog-box</code> when the function is disabled. The default value is <code>false</code>.</p>'
      },
      codeFiles: ['dialog-destroy-close.vue']
    },
    {
      demoId: 'dialog-fullscreen',
      name: {
        'zh-CN': '全屏功能',
        'en-US': 'Full Screen Function'
      },
      desc: {
        'zh-CN': '<p>添加<code>fullscreen</code>属性设置全屏打开，默认值为<code>false</code><p>',
        'en-US':
          '<p>The <code>fullscreen</code> attribute is added to enable full screen. The default value is <code>false</code>.</p>'
      },
      codeFiles: ['dialog-fullscreen.vue']
    },
    {
      demoId: 'dialog-modal',
      name: {
        'zh-CN': '遮罩层',
        'en-US': 'Masking layer one'
      },
      desc: {
        'zh-CN':
          '<p>添加<code>modal</code>属性可以关闭遮罩层，默认值为<code>true</code>。设置<code>close-on-click-modal</code>为<code>false</code>后将禁用该功能，默认值为<code>true</code></p>',
        'en-US':
          '<p>Add the <code>modal</code> attribute to disable the mask layer. The default value is <code>true</code>. If <code>close-on-click-modal</code> is set to false, this function is disabled. The default value is true.</p>'
      },
      codeFiles: ['dialog-modal.vue']
    },
    {
      demoId: 'dialog-slot',
      name: {
        'zh-CN': '弹窗插槽',
        'en-US': 'Pop-up slot'
      },
      desc: {
        'zh-CN': '<p><code>default</code>: 内容默认插槽。<code>footer</code>: 底部插槽</p>',
        'en-US': '<p>code>default</code>: content default slot. <code>footer</code>: bottom slot</p>'
      },
      codeFiles: ['dialog-slot.vue']
    }
  ]
}
