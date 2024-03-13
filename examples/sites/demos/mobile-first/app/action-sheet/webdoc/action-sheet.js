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
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'action',
      name: {
        'zh-CN': '操作列表模式',
        'en-US': 'Operation list mode'
      },
      desc: {
        'zh-CN': '<p>设置 `type` 为 `action` 启用操作列表模式，设置 `title` 显示提示语。</p>',
        'en-US': '<p>Set `type` to `action` to enable the operation list mode and set `title` to display prompts.</p>'
      },
      codeFiles: ['action.vue']
    },
    {
      demoId: 'show',
      name: {
        'zh-CN': '显示隐藏',
        'en-US': 'Show Hide'
      },
      desc: {
        'zh-CN':
          '<ul>\n            <li><code>show-header</code>: 显示头部，默认值为 true；</li>\n            <li><code>show-search</code>: 显示头部搜索功能，默认值为 true；</li>\n            <li><code>show-footer</code>: 显示底部，默认值为 false；</li>\n          </ul>',
        'en-US':
          '<ul>\n            <li><code>show-header</code>: displays the header. The default value is true.</li>\n            <li><code>show-search</code>: displays the header search function. The default value is true. </li>\n            <li><code>show-footer</code>: displays the bottom. The default value is false</li>'
      },
      codeFiles: ['show.vue']
    },
    {
      demoId: 'before-close',
      name: {
        'zh-CN': '关闭拦截',
        'en-US': 'Block Close'
      },
      desc: {
        'zh-CN':
          '\n          <p>通过 <code>before-close</code> 属性可以配置一个拦截弹窗关闭的方法。如果方法返回 <code>false</code> 值，则拦截弹窗关闭；否则不拦截。</p>\n          <p>可以通过参数 <code>type</code> 获取触发关闭的方法名称, 一共有以下类型：<code>confirm</code> | <code>hide</code> | <code>close</code>。</p>\n        ',
        'en-US':
          '<p>The <code>before-close</code> attribute can be used to configure a method that intercepts closing of the pop-up window. If the method returns a value of <code>false</code>, then the pop-up window is prevented from closing; otherwise it is not intercepted.</p>\n        <p>The method name that triggers the close action can be obtained through the <code>type</code> parameter. There are three types available: <code>confirm</code>, <code>hide</code>, and <code>close</code>.</p>\n          '
      },
      codeFiles: ['before-close.vue']
    },
    {
      demoId: 'fullscreen',
      name: {
        'zh-CN': '全屏显示',
        'en-US': 'Display fullscreen'
      },
      desc: {
        'zh-CN': '<p>通过 <code>fullscreen</code> 设置动作面板全屏显示。</p>',
        'en-US': '<p>Set action sheet display fullscreen.</p>'
      },
      codeFiles: ['fullscreen.vue']
    },
    {
      demoId: 'mask',
      name: {
        'zh-CN': '遮罩层1',
        'en-US': 'Mask layer one'
      },
      desc: {
        'zh-CN': '<p>添加 `mask` 属性可以关闭遮罩层，默认值为 `true` 。</p>',
        'en-US': '<p>bAdd the `mask` attribute to turn off the mask layer. The default value is `true`.</p>'
      },
      codeFiles: ['mask.vue']
    },
    {
      demoId: 'mask',
      name: {
        'zh-CN': '遮罩层1',
        'en-US': 'Mask layer one'
      },
      desc: {
        'zh-CN': '<p>添加 `mask` 属性可以关闭遮罩层，默认值为 `true` 。</p>',
        'en-US': '<p>bAdd the `mask` attribute to turn off the mask layer. The default value is `true`.</p>'
      },
      codeFiles: ['mask.vue']
    },
    {
      demoId: 'mask-event',
      name: {
        'zh-CN': '遮罩层2',
        'en-US': 'Mask layer two'
      },
      desc: {
        'zh-CN':
          '<p>默认弹窗打开后，可以单击遮罩层关闭弹窗，设置 `mask-closable` 为 `false` 后将禁用该功能，默认值为 `true`。</p>',
        'en-US':
          '<p>After the default pop-up window is opened, you can click the mask layer to close the pop-up window. If `mask-closable` is set to `false`, this function is disabled. The default value is `true`</p>'
      },
      codeFiles: ['mask-event.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'slot'
      },
      desc: {
        'zh-CN':
          '<p>- header: 头部插槽，默认显示头部，设置 show-header="true" 时有效；- header-left: 头部左侧插槽，默认显示搜索功能；- header-right: 头部右侧插槽，默认显示关闭功能；- footer: 头部插槽，默认隐藏底部，设置 show-footer="true" 时有效；</p>',
        'en-US':
          '<p> header: header slot. The header is displayed by default. This parameter is valid only when show-header is set to true. - header-left: slot on the left of the header. The search function is displayed by default. - header-right: slot on the right side of the head. The function is disabled by default. - footer: head slot. The bottom is hidden by default. This parameter is valid only when show-footer is set to true.</p>'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'ellipsis',
      name: {
        'zh-CN': '超出省略',
        'en-US': 'ellipsis'
      },
      desc: {
        'zh-CN': '<p>添加属性 `ellipsis` 选项内容会超出隐藏。</p>',
        'en-US': '<p>Added attribute `ellipsis` content meeting super surviving.</p>'
      },
      codeFiles: ['ellipsis.vue']
    }
  ]
}
