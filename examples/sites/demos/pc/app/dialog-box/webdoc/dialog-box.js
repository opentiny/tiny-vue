export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'secondary-dialog',
      'name': { 'zh-CN': '二级弹窗', 'en-US': 'Level-2 pop-up window' },
      'desc': {
        'zh-CN':
          '<p>通过 default 默认插槽和底部操作区按钮实现二级弹窗。设置 <code>append-to-body</code> 属性后，二级弹窗的实体 DOM 结构将追加到 body 元素上。</p>\n',
        'en-US':
          '<p>The default slot and buttons in the operation area at the bottom are used to implement the level-2 pop-up window. After the <code>append-to-body</code> attribute is set, the entity DOM structure of the level-2 pop-up window is appended to the body element. </p>\n'
      },
      'codeFiles': ['secondary-dialog.vue']
    },
    {
      'demoId': 'custom-dialog-title',
      'name': { 'zh-CN': '自定义标题', 'en-US': 'Custom Title' },
      'desc': {
        'zh-CN':
          '<p>除 <code>title</code> 属性可以设置弹窗标题外，还可以通过 <code>title</code> 插槽自定义弹窗标题区的内容。</p>\n',
        'en-US':
          '<p>In addition to the <code>title</code> attribute, you can set the pop-up window title and customize the content in the pop-up window title area through the <code>title</code> slot. </p>\n'
      },
      'codeFiles': ['custom-dialog-title.vue']
    },
    {
      'demoId': 'custom-dialog-content',
      'name': { 'zh-CN': '自定义内容', 'en-US': 'Custom Content' },
      'desc': {
        'zh-CN': '<p>通过 default 默认插槽自定义弹窗主体部分的内容。</p>\n',
        'en-US': '<p>The default slot is used to customize the content of the main part of the pop-up window. </p>\n'
      },
      'codeFiles': ['custom-dialog-content.vue']
    },
    {
      'demoId': 'custom-dialog-footer',
      'name': { 'zh-CN': '自定义底部', 'en-US': 'Custom bottom' },
      'desc': {
        'zh-CN': '<p>通过 <code>footer</code> 插槽自定义弹窗底部操作区内容。</p>\n',
        'en-US':
          '<p>Customize the content in the operation area at the bottom of the pop-up window through the <code>footer</code> slot. </p>\n'
      },
      'codeFiles': ['custom-dialog-footer.vue']
    },
    {
      'demoId': 'hidden-close-buttons',
      'name': { 'zh-CN': '隐藏关闭按钮', 'en-US': 'Hide the close button' },
      'desc': {
        'zh-CN':
          '<p>默认弹窗右上角会显示关闭图标，单击可以关闭弹窗。若设置 <code>show-close</code> 为 false 后，将隐藏关闭图标，要实现关闭弹窗的功能可以通过底部操作区按钮的 click 事件切换 <code>visible</code> 属性的值为 false 。</p>\n',
        'en-US':
          '<p>The close icon is displayed in the upper right corner of the default pop-up window. You can click this icon to close the pop-up window. If <code>show-close</code> is set to false, the close icon is hidden. To close the pop-up window, you can switch the value of <code>visible</code> to false by clicking the button in the operation area. </p>\n'
      },
      'codeFiles': ['hidden-close-buttons.vue']
    },
    {
      'demoId': 'close-on-press-escape',
      'name': { 'zh-CN': '禁用 ESC 关闭', 'en-US': 'Disable ESC.' },
      'desc': {
        'zh-CN':
          '<p>默认弹窗打开后，可以按下 Esc 键关闭弹窗，设置 <code>close-on-press-escape</code> 为 false 后将禁用该功能。</p>\n',
        'en-US':
          '<p>After the default pop-up window is opened, you can press Esc to close the pop-up window. If <code>close-on-press-escape</code> is set to false, this function is disabled. </p>\n'
      },
      'codeFiles': ['close-on-press-escape.vue']
    },
    {
      'demoId': 'dialog-top-height',
      'name': { 'zh-CN': '弹窗距离顶部的高度', 'en-US': 'Height between the pop-up window and the top' },
      'desc': {
        'zh-CN': '<p>通过 <code>top</code> 属性指定弹窗距离窗口顶部的高度，默认为屏高的 15% 。</p>\n',
        'en-US':
          '<p>The <code>top</code> attribute specifies the height of the pop-up window from the top of the window. The default value is 15% of the screen height. </p>\n'
      },
      'codeFiles': ['dialog-top-height.vue']
    },
    {
      'demoId': 'dialog-width',
      'name': { 'zh-CN': '弹窗的宽度', 'en-US': 'Wideness of the pop-up window' },
      'desc': {
        'zh-CN': '<p>通过 <code>width</code> 属性指定弹窗的宽度。</p>\n',
        'en-US': '<p>The <code>width</code> attribute specifies the width of the pop-up window. </p>\n'
      },
      'codeFiles': ['dialog-width.vue']
    },
    {
      'demoId': 'close-on-click-modal',
      'name': { 'zh-CN': '点击遮罩时不关闭弹窗', 'en-US': 'The pop-up window is not closed when the mask is clicked.' },
      'desc': {
        'zh-CN':
          '<p>默认弹窗打开后，可以单击遮罩层关闭弹窗，设置 <code>close-on-click-modal</code> 为 false 后将禁用该功能。</p>\n',
        'en-US':
          '<p>After the default pop-up window is opened, you can click the mask layer to close the pop-up window. If <code>close-on-click-modal</code> is set to false, this function is disabled. </p>\n'
      },
      'codeFiles': ['close-on-click-modal.vue']
    },
    {
      'demoId': 'no-modal',
      'name': { 'zh-CN': '不启用遮罩层', 'en-US': 'Disable the mask layer' },
      'desc': {
        'zh-CN':
          '<p>默认弹窗打开时会显示遮罩层，设置 <code>modal</code> 为 false 后将不启用遮罩层。无遮罩层时，单击弹窗外部区域仍然可以关闭弹窗。</p>\n',
        'en-US':
          '<p>The mask layer is displayed when the pop-up window is opened by default. If <code>modal</code> is set to false, the mask layer is not enabled. If there is no mask layer, you can click the outer area of the pop-up window to close the pop-up window. </p>\n'
      },
      'codeFiles': ['no-modal.vue']
    },
    {
      'demoId': 'right-dialog',
      'name': { 'zh-CN': '右侧弹窗', 'en-US': 'Right pop-up window' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>right-slide</code> 属性为 true 后，弹窗将从窗口右侧弹出。\n设置 <code>modal-append-to-body</code> 属性默认为 true 遮罩层应用在 body 上。</p>\n',
        'en-US':
          '<p>After <code>right-slide</code> is set to true, a pop-up window is displayed from the right of the window. \nSet the <code>modal-append-to-body</code> attribute to true by default. The mask layer is applied to the body. </p>\n'
      },
      'codeFiles': ['right-dialog.vue']
    },
    {
      'demoId': 'hidden-header',
      'name': { 'zh-CN': '隐藏标题区域', 'en-US': 'Hidden title area' },
      'desc': {
        'zh-CN': '<p>弹窗默认有标题区域，设置 <code>show-header</code> 为 false 后，将隐藏标题区域。</p>\n',
        'en-US':
          '<p>The pop-up window has a title area by default. If <code>show-header</code> is set to false, the title area is hidden. </p>\n'
      },
      'codeFiles': ['hidden-header.vue']
    },
    {
      'demoId': 'lock-scroll',
      'name': { 'zh-CN': '弹出时禁用滚动', 'en-US': 'Disable scrolling when pop-up' },
      'desc': {
        'zh-CN':
          '<p>弹窗弹出后，背景页面默认仍然是不可以滚动的。</p><p>通过设置 <code>lock-scroll: false</code>,遮罩后的内容可以滚动，body保持原来的滚动条,且鼠标移动和点击可以传递到遮罩层后的元素上。</p>\n',
        'en-US':
          '<p>After a pop-up window is displayed, the background page cannot be scrolled by default. </p><p>By setting <code>lock-scroll: false</code>, the masked content can be scrolled, and the body remains the original scroll bar, and mouse movements and clicks can be passed to the element behind the mask layer.</p>\n'
      },
      'codeFiles': ['lock-scroll.vue']
    },
    {
      'demoId': 'center',
      'name': { 'zh-CN': '头部和底部水平居中', 'en-US': 'The head and bottom are horizontally centered' },
      'desc': {
        'zh-CN': '<p>头部标题默认显示在区域左侧，设置 <code>center</code> 为 true 后，将居中显示。</p>\n',
        'en-US':
          'The <p> header is displayed on the left of the area by default. If <code>center</code> is set to true, the header is displayed in the center. </p>\n'
      },
      'codeFiles': ['center.vue']
    },
    {
      'demoId': 'draggable',
      'name': { 'zh-CN': '可拖拽的弹窗', 'en-US': 'Dragable pop-up window' },
      'desc': {
        'zh-CN':
          '<p>默认弹窗不可拖拽，设置 <code>draggable</code> 属性为 true 后，鼠标移入标题区域单击可拖拽，拖拽事件有 <code>@drag-start</code>、<code>drag-move</code>、<code>drag-end</code>。</p>\n',
        'en-US':
          '<p> By default, the pop-up window cannot be dragged. Set <code>draggable</code> to true and move the cursor to the title area to drag the pop-up window. Drag events include <code>@drag-start</code>, <code>drag-move</code>, and <code>drag-end</code>. </p>\n'
      },
      'codeFiles': ['draggable.vue']
    },
    {
      'demoId': 'fullscreen',
      'name': { 'zh-CN': '全屏弹窗', 'en-US': 'Full-screen pop-up window' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>fullscreen</code> 属性为 true 可显示全屏弹窗，默认弹窗宽度是 500px，此时设置宽度是不生效的。</p>\n',
        'en-US':
          '<p>Set <code>fullscreen</code> to true to display the full-screen pop-up window. The default pop-up window width is 500px. In this case, the width setting does not take effect. </p>\n'
      },
      'codeFiles': ['fullscreen.vue']
    },
    {
      'demoId': 'open-close-events',
      'name': { 'zh-CN': '弹出与关闭事件', 'en-US': 'Pop-up and Close Event' },
      'desc': {
        'zh-CN':
          '<p><code>open</code> ：对话框打开时触发，<code>opened</code> ：对话框打开动画结束时触发，<code>close</code> ：对话框关闭时触发，<code>closed</code> ：对话框关闭动画结束时触发。</p>\n',
        'en-US':
          '<p><code>open</code>: triggered when the dialog box is opened. <code>opened</code>: triggered when the animation ends. <code>close</code>: triggered when the dialog box is closed. <code>closed</code>: triggered when the animation ends. </p>\n'
      },
      'codeFiles': ['open-close-events.vue']
    },
    {
      'demoId': 'form-in-dialog',
      'name': { 'zh-CN': '弹窗表单', 'en-US': 'Pop-up Window Form' },
      'desc': {
        'zh-CN':
          '<p>通过 default 默认插槽实现嵌套表单以及表单提交的逻辑。</p>\n<p>默认关闭弹窗的时候重置表单，设置<code>is-form-reset</code> 为false,则关闭弹窗的时候不重置表格</p>',
        'en-US':
          '<p>The default slot is used to implement nested forms and form submission logic. </p>\n<p> By default, the form is reset when the pop-up window is closed. If <code>is-form-reset</code> is set to false, the form is not reset when the pop-up window is closed.</p>'
      },
      'codeFiles': ['form-in-dialog.vue']
    },
    {
      'demoId': 'destroy-on-close',
      'name': { 'zh-CN': '关闭时销毁主体元素', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>destroy-on-close</code> 控制是否在关闭时销毁 Dialog-box 对话框内的所有元素，默认值为 false。</p>',
        'en-US': ''
      },
      'codeFiles': ['destroy-on-close.vue']
    }
  ],
  apis: [
    {
      'name': 'dialog-box',
      'type': 'component',
      'properties': [
        {
          'name': 'visible',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '控制弹出框显示与关闭',
            'en-US':
              'If this parameter is set to true, the header and bottom of the dialog box are automatically centered.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'center',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '设置为 true 时 弹出框的头部与底部内容会自动居中',
            'en-US': 'Close the pop-up window. The form data is reset by default.'
          },
          'demoId': 'center'
        },
        {
          'name': 'is-form-reset',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '关闭弹窗，默认重置表单数据', 'en-US': 'Whether to display the close button' },
          'demoId': 'form-in-dialog'
        },
        {
          'name': 'show-close',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否显示关闭按钮',
            'en-US': 'Indicates whether to enable the drag function for pop-up windows. The default value is false.'
          },
          'demoId': 'hidden-close-buttons'
        },
        {
          'name': 'draggable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否开启弹窗的拖拽功能，默认值为 false 。',
            'en-US': 'Whether the dialog box is displayed in full screen mode'
          },
          'demoId': 'draggable'
        },
        {
          'name': 'fullscreen',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '弹出框是否全屏', 'en-US': 'Whether to enable the mask layer' },
          'demoId': 'fullscreen'
        },
        {
          'name': 'modal',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否启用遮罩层',
            'en-US':
              'Indicates whether pop-up windows can be closed by clicking the mask layer. The default value is true. You can set modal-closable="false" on the tag. The pop-up windows cannot be closed by clicking the mask layer.'
          },
          'demoId': 'no-modal'
        },
        {
          'name': 'close-on-click-modal',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN':
              '是否可以通过点击遮罩层关闭弹窗，默认为 true ,可以在标签上设置:modal-closable="false"不能通过点击遮罩层关闭弹窗。',
            'en-US': 'Specifies whether the mask layer can be disabled by pressing ESC.'
          },
          'demoId': 'close-on-click-modal'
        },
        {
          'name': 'close-on-press-escape',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否可以通过 ESC 键关闭遮罩层',
            'en-US':
              'Indicates whether the mask layer is applied to the body. If the value is false, the mask layer is applied to the parent element of DialogBox.'
          },
          'demoId': 'close-on-press-escape'
        },
        {
          'name': 'modal-append-to-body',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '遮罩层是否应用到 body 上，为 false 时遮罩层会应用到 DialogBox 的父元素上',
            'en-US':
              'Indicates whether the DialogBox itself is inserted into the body. This attribute must be specified and set to true for nested Dialogs.'
          },
          'demoId': 'right-dialog'
        },
        {
          'name': 'append-to-body',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': 'DialogBox 本身是否插入到 body 上，嵌套的 Dialog 必须指定该属性并赋值为 true',
            'en-US': 'Indicates whether to enable the pop-up slide-out function. The default value is false.'
          },
          'demoId': 'secondary-dialog'
        },
        {
          'name': 'right-slide',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否开启弹出右侧滑出功能，默认值为 false 。',
            'en-US': 'Whether to disable the scroll bar when a log is displayed.'
          },
          'demoId': 'right-dialog'
        },
        {
          'name': 'lock-scroll',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': 'Dialog弹出时是否禁用滚动条',
            'en-US': 'Indicates whether to display the pop-up header. The default value is true.'
          },
          'demoId': 'lock-scroll'
        },
        {
          'name': 'show-header',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示弹窗头部 header，默认值为 true 。', 'en-US': 'Pop-up dialog box title.' },
          'demoId': 'hidden-header'
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '弹出框标题。',
            'en-US':
              'Height between the pop-up box and the top of the window. The default value is 15% of the screen height.'
          },
          'demoId': 'custom-dialog-title'
        },
        {
          'name': 'top',
          'type': 'string',
          'defaultValue': '该属性的默认值为 15vh',
          'desc': {
            'zh-CN': '设置弹出框距离窗口顶部的高度，默认为屏高的 15%',
            'en-US': 'Display and close pop-up boxes.'
          },
          'demoId': 'dialog-top-height'
        },
        {
          'name': 'width',
          'type': 'string',
          'defaultValue': '该属性的默认值为 500px',
          'desc': { 'zh-CN': '弹出框的宽度。', 'en-US': 'Wideness of the dialog box that is displayed.' },
          'demoId': 'dialog-width'
        },
        {
          'name': 'dialog-class',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义配置弹窗类名', 'en-US': 'Customized configuration pop-up window class name' },
          'demoId': 'dialog-width'
        },
        {
          'name': 'destroy-on-close',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '关闭时销毁对话框内的元素，而非隐藏', 'en-US': '' },
          'demoId': 'destroy-on-close'
        }
      ],
      'events': [
        {
          'name': 'close',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 关闭的回调;Dialog 关闭的回调;无arguments',
            'en-US': 'Dialog disabled callback; Dialog closing callback; No arguments'
          },
          'demoId': 'open-close-events'
        },
        {
          'name': 'open',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 打开的回调;Dialog 打开的回调;无arguments',
            'en-US': 'Dialog open callback; Dialog open callback; No arguments'
          },
          'demoId': 'open-close-events'
        },
        {
          'name': 'opened',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 打开动画结束时的回调;无arguments',
            'en-US': 'Dialog: callback when the animation ends; No arguments'
          },
          'demoId': 'open-close-events'
        },
        {
          'name': 'closed',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 关闭动画结束时的回调;无arguments',
            'en-US': 'Dialog closes the callback when the animation ends. No arguments'
          },
          'demoId': 'open-close-events'
        },
        {
          'name': 'drag-start',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 拖拽开始事件;arg:event(包含弹窗的位置等信息)',
            'en-US': 'Dialog drag start event; arg:event (including the location of the pop-up window)'
          },
          'demoId': 'draggable'
        },
        {
          'name': 'drag-move',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 拖拽移动事件;arg:event(包含弹窗的位置等信息)',
            'en-US': 'Dialog dragging and moving event; arg:event (including the location of the pop-up window)'
          },
          'demoId': 'draggable'
        },
        {
          'name': 'drag-end',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 拖拽结束事件;arg:event(包含弹窗的位置等信息)',
            'en-US': 'Dialog drag end event; arg:event (including the location of the pop-up window)'
          },
          'demoId': 'draggable'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Dialog 的内容', 'en-US': 'Dialog content' },
          'demoId': 'custom-dialog-content'
        },
        {
          'name': 'title',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Dialog 标题区的内容', 'en-US': 'Dialog content in the title area' },
          'demoId': 'custom-dialog-title'
        },
        {
          'name': 'footer',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Dialog 按钮操作区的内容', 'en-US': 'Dialog button operation area content' },
          'demoId': 'custom-dialog-footer'
        }
      ]
    }
  ]
}
