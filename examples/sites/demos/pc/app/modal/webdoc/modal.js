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
          '<p>可通过<code>Modal.alert</code>方法设置弹出框，<code>Modal.confirm</code>方法设置确认弹出框。函数返回一个<code>Promise</code>对象，其中属性<code>vm</code>可用来关闭当前模态框。</p>',
        'en-US':
          '<p>You can use the <code>Modal.alert</code> method to set a pop-up box, and use the <code>Modal.confirm</code> method to set a confirmation pop-up box. The function returns a <code>Promise</code> object, where the property <code>vm</code> can be used to close the current Modal.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'fullscreen',
      name: {
        'zh-CN': '最大化显示',
        'en-US': 'Maximized Display'
      },
      desc: {
        'zh-CN': '<p>可通过<code>fullscreen</code>属性设置是否最大化显示。</p>',
        'en-US': '<p>You can use the <code>fullscreen</code> attribute to set whether to maximize the display. </p>'
      },
      codeFiles: ['fullscreen.vue']
    },
    {
      demoId: 'esc-closable',
      name: {
        'zh-CN': '按 Esc 键关闭弹出框',
        'en-US': 'Press Esc To Close The Dialog Box.'
      },
      desc: {
        'zh-CN': '<p>可通过<code>esc-closable</code>属性设置是否允许按 Esc 键关闭窗口。</p>',
        'en-US':
          '<p>You can use the <code>esc-closable</code> attribute to set whether to close a window by pressing the Esc key. </p>'
      },
      codeFiles: ['esc-closable.vue']
    },
    {
      demoId: 'duration',
      name: {
        'zh-CN': '自动关闭延时',
        'en-US': 'Automatic Shutdown Delay'
      },
      desc: {
        'zh-CN': "<p>可通过<code>duration</code>属性设置自动关闭的延迟时间，仅当<code>type='message'</code>有效。</p>",
        'en-US':
          '<p>You can use the <code>duration</code> attribute to set the delay time for automatic closing. This parameter is valid only for type=message. </p>'
      },
      codeFiles: ['duration.vue']
    },
    {
      demoId: 'id',
      name: {
        'zh-CN': '防止重复提示',
        'en-US': 'Prevent Repeated Prompts'
      },
      desc: {
        'zh-CN': "<p>可通过<code>id</code>设置防止重复提示，仅当<code>type='message'</code>有效。</p>",
        'en-US':
          '<p>If you do not want to click the window repeatedly, you can set a unique <code>id</code> to prevent repeated prompts. This parameter is valid only for type=message. </p>'
      },
      codeFiles: ['id.vue']
    },
    {
      demoId: 'lock-scroll',
      name: {
        'zh-CN': '锁住滚动条',
        'en-US': 'Lock The Scroll Bar'
      },
      desc: {
        'zh-CN': '<p>可通过<code>lock-scroll</code>属性设置是否锁住滚动条，不允许页面滚动。</p>',
        'en-US': '<p>You can use the <code>lock-scroll</code> attribute to set whether to lock the scroll bar. </p>'
      },
      codeFiles: ['lock-scroll.vue']
    },
    {
      demoId: 'lock-view',
      name: {
        'zh-CN': '锁住页面',
        'en-US': 'Lock The Page'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>mask</code>属性设置是否显示遮罩层，<code>lock-view</code>属性设置是否锁住页面，不允许窗口之外的任何操作。</p>',
        'en-US':
          'You can set whether to display the mask layer through the<code>mask</code>attribute, and whether to lock the page and not allow any operations outside the window through the<code>lock-view</code>attribute'
      },
      codeFiles: ['lock-view.vue']
    },
    {
      demoId: 'mask-closable',
      name: {
        'zh-CN': '点击遮罩层关闭窗口',
        'en-US': 'Click The Mask Layer To Close The Window.'
      },
      desc: {
        'zh-CN': '<p>可通过<code>mask-closable</code>属性设置是否允许点击遮罩层关闭窗口。</p>',
        'en-US':
          '<p>You can use the <code>mask-closable</code> attribute to set whether to allow clicking the mask layer to close the window. </p>'
      },
      codeFiles: ['mask-closable.vue']
    },
    {
      demoId: 'message',
      name: {
        'zh-CN': '自定义内容',
        'en-US': 'Custom Content'
      },
      desc: {
        'zh-CN': '<p>可通过<code>message</code>属性设置窗口的内容。</p>',
        'en-US': '<p>You can set the content of the window through the <code>:message</code> attribute. </p>'
      },
      codeFiles: ['message.vue']
    },
    {
      demoId: 'footer-btn-content',
      name: {
        'zh-CN': '自定义底部按钮内容',
        'en-US': 'Custom Bottom Button Content'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>confirm-content</code>属性设置确认按钮内容，<code>cancel-content</code>属性设置取消按钮内容。<p>\n',
        'en-US':
          '<p>Set the content of the confirm button through<code>confirm-content</code>, and set the content of the cancel button through<code>:cancel-content</code>.</p>'
      },
      codeFiles: ['footer-btn-content.vue']
    },
    {
      demoId: 'footer-btn-props',
      name: {
        'zh-CN': '自定义底部按钮',
        'en-US': 'Customize Bottom Button'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>confirm-btn-props</code>属性设置确认按钮，<code>cancel-btn-props</code>属性设置取消按钮。<p>\n',
        'en-US':
          '<p>Set the confirmation button via <code>:confirm-btn-props</code> and the cancel button via <code>:cancel-btn-props</code>.</p>'
      },
      codeFiles: ['footer-btn-props.vue']
    },
    {
      demoId: 'resize',
      name: {
        'zh-CN': '调整窗口大小',
        'en-US': 'Resize The Window'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>width</code>属性设置宽度，<code>height</code>属性设置高度，<code>resize</code>属性设置是否允许拖动调整窗口大小。</p>',
        'en-US':
          '<p>Use <code>width</code> to set the width, <code>height</code> to set the height, and <code>resize</code> to set whether to allow dragging to resize the window. </p>'
      },
      codeFiles: ['resize.vue']
    },
    {
      demoId: 'min-width-height',
      name: {
        'zh-CN': '调整窗口后的最小宽高度',
        'en-US': 'Minimum width and height after adjusting the window'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>resize</code>属性设置可拖拽属性为<code>true</code>后，<code>min-height</code>属性设置拖拽后窗口的最小高度，<code>min-width</code>属性设置拖拽后窗口的最小宽度。</p>',
        'en-US':
          'The<code>resize</code>property can be used to set the drag property to<code>true</code>. The<code>min-height</code>property sets the minimum height of the window after dragging, and the<code>min-width</code>property sets the minimum width of the window after dragging.'
      },
      codeFiles: ['min-width-height.vue']
    },
    {
      demoId: 'show-header-footer',
      name: {
        'zh-CN': '控制显示头部及底部',
        'en-US': 'Do Not Display Header and Bottom'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>show-footer</code>属性设置是否显示底部,<code>show-header</code>属性设置是否显示头部。</p>',
        'en-US':
          'Set whether to display the bottom through the<code>show-footer</code>attribute, and whether to display the head through the<code>show-header</code>attribute.'
      },
      codeFiles: ['show-header-footer.vue']
    },
    {
      demoId: 'status',
      name: {
        'zh-CN': '消息状态',
        'en-US': 'Position From The Top'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>status</code>属性设置消息状态，可选值有<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>、<code>loading</code>。</p>',
        'en-US':
          '<p>Set the message status through<code>status</code>, with optional values including<code>info</code><code>success</code><code>warning</code><code>error</code><code>loading</code>.</p>'
      },
      codeFiles: ['status.vue']
    },
    {
      demoId: 'message-closable',
      name: {
        'zh-CN': '关闭消息弹窗',
        'en-US': 'Close Message Pop-Up Window'
      },
      desc: {
        'zh-CN': '<p>可通过<code>message-closable</code>属性设置消息可手动关闭。</p>',
        'en-US': '<p>Messages can be closed manually by setting <code>message-closable</code>.</p>'
      },
      codeFiles: ['message-closable.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '标题',
        'en-US': 'Title'
      },
      desc: {
        'zh-CN': '<p>可通过<code>title</code>属性设置窗口的标题。</p>',
        'en-US': '<p>Set the title of the window via<code>title</code>.</p>'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'top',
      name: {
        'zh-CN': '距离顶部的位置',
        'en-US': 'Position from top'
      },
      desc: {
        'zh-CN': "<p>可通过<code>top</code>属性设置消息距离顶部的位置，仅当<code>type='message'</code>有效。</p>",
        'en-US':
          "<p>Set the position of the message from the top via <code>top</code>, which is only valid when <code>type='message'</code>.</p>"
      },
      codeFiles: ['top.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '窗口类型',
        'en-US': 'Custom Window Type'
      },
      desc: {
        'zh-CN': '<p>可通过<code>type</code>属性设置窗口类型。</p>',
        'en-US': '<p>Set the window type via <code>:type</code>.</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'value',
      name: {
        'zh-CN': '绑定值',
        'en-US': 'Bind Value'
      },
      desc: {
        'zh-CN': '<p>可通过<code>modalValue/v-model</code>属性设置绑定值，控制弹窗是否显示。</p>',
        'en-US':
          '<p>Bind the value through <code>modalValue/v-model</code> to control whether the pop-up window is displayed.</p>'
      },
      codeFiles: ['value.vue']
    },
    {
      demoId: 'z-index',
      name: {
        'zh-CN': '自定义堆叠顺序',
        'en-US': 'Custom Stacking Order'
      },
      desc: {
        'zh-CN': '<p>可通过<code>z-index</code>属性设置自定义堆叠顺序。</p>',
        'en-US': '<p>Set a custom stacking order via <code>z-index</code>. </p>'
      },
      codeFiles: ['z-index.vue']
    },
    {
      demoId: 'is-form-reset',
      name: {
        'zh-CN': '关闭弹窗，是否重置表单数据',
        'en-US': 'Do Not Reset Data After Closing Pop Ups'
      },
      desc: {
        'zh-CN': '<p>可通过<code>is-form-reset</code>属性设置<code>false</code>，关闭弹窗后不重置数据。</p>',
        'en-US':
          '<p>By setting the<code>is-form-reset</code>attribute to<code>false</code>, the data will not be reset after closing the pop-up window.</p>'
      },
      codeFiles: ['is-form-reset.vue']
    },
    {
      demoId: 'footer-slot',
      name: {
        'zh-CN': '底部插槽',
        'en-US': 'Bottom Slot'
      },
      desc: {
        'zh-CN': '<p>可通过<code>#footer</code>插槽设置底部内容。</p>',
        'en-US': '<p>The bottom content can be set through the <code>#footer</code> slot.'
      },
      codeFiles: ['footer-slot.vue']
    },
    {
      demoId: 'default-grid',
      name: {
        'zh-CN': '嵌套表格',
        'en-US': 'Nested Tables'
      },
      desc: {
        'zh-CN': '<p>可通过<code>#default</code>插槽设置嵌套表格组件。</p>',
        'en-US': 'Table components can be nested via <code>#default</code> slot.'
      },
      codeFiles: ['default-grid.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'event'
      },
      desc: {
        'zh-CN':
          '<p>\n        当窗口显示时会触发<code>show</code>事件，关闭时会触发<code>hide</code>事件。<br />\n        当窗口缩放时会触发<code>zoom</code>事件。<br />\n        当点击确定按钮时会触发<code>confirm</code>事件，点击取消按钮时触发<code>cancel</code>事件。<br />\n        当点击关闭按钮时会触发<code>close</code>事件。<br />\n      </p>',
        'en-US': ''
      },
      codeFiles: ['event.vue']
    },
    {
      demoId: 'prop-slots',
      name: {
        'zh-CN': '函数插槽',
        'en-US': 'When used functionally, the slot can be set through the `slots` property'
      },
      desc: {
        'zh-CN': '<p>在函数式使用时，可通过<code>slots</code>属性设置插槽。</p>',
        'en-US': 'When used functionally, the slot can be set through the <code>slots</code> property.'
      },
      codeFiles: ['prop-slots.vue']
    }
  ]
}
