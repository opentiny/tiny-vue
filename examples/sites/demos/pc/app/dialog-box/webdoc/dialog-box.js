export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '可通过<code>visible</code>属性设置控制弹窗显示。',
        'en-US': 'Set pop-up display through<code>visible</code>.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'secondary-dialog',
      'name': { 'zh-CN': '二级弹窗', 'en-US': 'Level-2 pop-up window' },
      'desc': {
        'zh-CN':
          '<p>可通过<code>#default</code>默认插槽和底部操作区按钮设置实现二级弹窗。设置<code>append-to-body</code>属性后，二级弹窗的实体<code>DOM</code>结构将追加到<code>body</code>元素上。</p>\n',
        'en-US':
          '<p>The <code>#default</code> slot and buttons in the operation area at the bottom are used to implement the level-2 pop-up window. After the <code>append-to-body</code> attribute is set, the entity <code>DOM</code> structure of the level-2 pop-up window is appended to the <code>body</code> element. </p>\n'
      },
      'codeFiles': ['secondary-dialog.vue']
    },
    {
      'demoId': 'custom-dialog-title',
      'name': { 'zh-CN': '自定义标题', 'en-US': 'Custom Title' },
      'desc': {
        'zh-CN': '<p>可通过<code>title</code> 或者<code>#title</code>插槽设置弹窗标题内容。</p>\n',
        'en-US':
          '<p>Set the pop-up title content through the<code>title</code>attribute or <code>#title</code>slot.</p>\n'
      },
      'codeFiles': ['custom-dialog-title.vue']
    },
    {
      'demoId': 'custom-dialog-content',
      'name': { 'zh-CN': '自定义内容', 'en-US': 'Custom Content' },
      'desc': {
        'zh-CN': '<p>可通过<code>#default</code>默认插槽设置自定义弹窗主体部分的内容。</p>\n',
        'en-US':
          '<p>The<code>#default</code>slot is used to customize the content of the main part of the pop-up window. </p>\n'
      },
      'codeFiles': ['custom-dialog-content.vue']
    },
    {
      'demoId': 'custom-dialog-footer',
      'name': { 'zh-CN': '自定义底部', 'en-US': 'Custom bottom' },
      'desc': {
        'zh-CN': '<p>可通过<code>#footer</code> 插槽设置自定义弹窗底部操作区内容。</p>\n',
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
          '<p>可通过<code>show-close</code>属性设置<code>false</code>后，隐藏关闭图标，默认弹窗右上角显示关闭图标。底部<code>click</code>按钮事件可切换<code>visible</code>属性值设置弹窗显示。</p>\n',
        'en-US':
          '<p>After setting the<code>show-close</code>property to<code>false</code>, hide the close icon and the default pop-up window will display the close icon in the upper right corner. The bottom<code>click</code>button event can switch to<code>visible</code>property value setting pop-up display.</p>\n'
      },
      'codeFiles': ['hidden-close-buttons.vue']
    },
    {
      'demoId': 'close-on-press-escape',
      'name': { 'zh-CN': '禁用 ESC 关闭', 'en-US': 'Disable ESC.' },
      'desc': {
        'zh-CN':
          '<p>可通过<code>close-on-press-escape</code>属性设置<code>false</code>后可禁用按下<code>Esc</code>键关闭弹窗。</p>\n',
        'en-US':
          '<p>By setting<code>close-on-pressure-scape</code>to<code>false</code>, pressing the<code>Esc</code>key can be disabled to close pop ups.</p>\n'
      },
      'codeFiles': ['close-on-press-escape.vue']
    },
    {
      'demoId': 'dialog-top-height',
      'name': { 'zh-CN': '弹窗距离顶部的高度', 'en-US': 'Height between the pop-up window and the top' },
      'desc': {
        'zh-CN': '<p>可通过<code>top</code>属性设置指定弹窗距离窗口顶部的高度，默认为屏高的 15% 。</p>\n',
        'en-US':
          '<p>The<code>top</code>attribute specifies the height of the pop-up window from the top of the window. The default value is 15% of the screen height. </p>\n'
      },
      'codeFiles': ['dialog-top-height.vue']
    },
    {
      'demoId': 'dialog-width',
      'name': { 'zh-CN': '弹窗的宽度', 'en-US': 'Wideness of the pop-up window' },
      'desc': {
        'zh-CN': '<p>可通过<code>width</code>属性设置指定弹窗的宽度。</p>\n',
        'en-US': '<p>The<code>width</code>attribute specifies the width of the pop-up window. </p>\n'
      },
      'codeFiles': ['dialog-width.vue']
    },
    {
      'demoId': 'close-on-click-modal',
      'name': { 'zh-CN': '点击遮罩时不关闭弹窗', 'en-US': 'The pop-up window is not closed when the mask is clicked.' },
      'desc': {
        'zh-CN':
          '<p>可通过<code>close-on-click-modal</code>属性设置<code>false</code>后可禁用单击遮罩层关闭弹窗。</p>\n',
        'en-US':
          '<p>By setting the<code>close-on-click-modal</code>property to<code>false</code>, clicking on the mask layer to close the pop-up window can be disabled.</p>\n'
      },
      'codeFiles': ['close-on-click-modal.vue']
    },
    {
      'demoId': 'no-modal',
      'name': { 'zh-CN': '不启用遮罩层', 'en-US': 'Disable the mask layer' },
      'desc': {
        'zh-CN': '<p>可通过<code>modal</code>属性设置<code>false</code>不启用遮罩层。</p>\n',
        'en-US': '<p>Set the<code>modal</code>attribute to<code>false</code>to not enable mask layers.</p>\n'
      },
      'codeFiles': ['no-modal.vue']
    },
    {
      'demoId': 'right-dialog',
      'name': { 'zh-CN': '右侧弹窗', 'en-US': 'Right pop-up window' },
      'desc': {
        'zh-CN':
          '<p>可通过<code>right-slide</code>属性为设置<code>true</code>，弹窗将从窗口右侧弹出。<code>modal-append-to-body</code> 属性默认<code>true</code>遮罩层应用在<code>body</code>。</p>\n',
        'en-US':
          '<p>By setting the<code>right-slide</code>attribute to<code>true</code>, a pop-up window will pop up from the right side of the window< Code>modal apply to body</code>Properties default to<code>true</code>Mask layer applied to<code>body</code></p>'
      },
      'codeFiles': ['right-dialog.vue']
    },
    {
      'demoId': 'hidden-header',
      'name': { 'zh-CN': '隐藏标题区域', 'en-US': 'Hidden title area' },
      'desc': {
        'zh-CN': '<p>可通过<code>show-header</code>属性设置<code>false</code>，将隐藏标题区域。</p>\n',
        'en-US': '<p>By using<code>show-header</code>as<code>false</code>, the title area will be hidden.</p>\n'
      },
      'codeFiles': ['hidden-header.vue']
    },
    {
      'demoId': 'lock-scroll',
      'name': { 'zh-CN': '弹出时禁用滚动', 'en-US': 'Disable scrolling when pop-up' },
      'desc': {
        'zh-CN':
          '<p>可通过<code>lock-scroll</code>属性设置<code>true</code>,允许滚动遮罩内容,禁止滚动背景内容，单击遮罩层可关闭弹窗。设置<code>lock-scroll</code>为<code>false</code>,允许滚动遮罩内容、背景内容。</p>\n',
        'en-US':
          '<p>By setting<code>lock-scroll</code>to<code>true</code>, allow scrolling of mask content and prohibit scrolling of background content,Click on the mask layer to close the pop-up window.Set<code>:lock-scroll</code>to<code>false</code>,allowing scrolling of mask content and background content.</p>\n'
      },
      'codeFiles': ['lock-scroll.vue']
    },
    {
      'demoId': 'center',
      'name': { 'zh-CN': '头部和底部水平居中', 'en-US': 'The head and bottom are horizontally centered' },
      'desc': {
        'zh-CN': '<p>可通过<code>center</code>属性设置<code>true</code>头部标题居中显示。(默认显示在区域左侧)</p>\n',
        'en-US':
          '<p>By setting the<code>center</code>attribute to<code>true</code>, the header title is displayed in the center. The default display is on the left side of the area.</p>\n'
      },
      'codeFiles': ['center.vue']
    },
    {
      'demoId': 'draggable',
      'name': { 'zh-CN': '可拖拽的弹窗', 'en-US': 'Dragable pop-up window' },
      'desc': {
        'zh-CN':
          '<p>可通过<code>draggable</code>属性设置<code>true</code>，鼠标点击标题区域拖拽；通过<code>drag-outside-window</code>属性设置<code>true</code>，将弹窗拖出窗口。具体事件：<code>@drag-start</code><code>@drag-move</code><code>@drag-end</code>。</p>\n',
        'en-US':
          '<p>By setting the<code>draggable</code>attribute to<code>true</code>, click and drag in the title area with the mouse; setting the code <code>drag-outside-window</code>attribute to<code>true</code>, drag the dialog box outside the window.Specific events:<code>@drag-start</code><code>@drag-move</code><code>@drag-end</code>.</p>\n'
      },
      'codeFiles': ['draggable.vue']
    },
    {
      'demoId': 'fullscreen',
      'name': { 'zh-CN': '全屏弹窗', 'en-US': 'Full-screen pop-up window' },
      'desc': {
        'zh-CN': '<p>可通过<code>fullscreen</code>属性设置<code>true</code>显示全屏弹窗。</p>\n',
        'en-US':
          '<p>Display full screen pop ups by setting the<code>fullscreen</code>attribute to<code>true</code>.</p>\n'
      },
      'codeFiles': ['fullscreen.vue']
    },
    {
      'demoId': 'form-in-dialog',
      'name': { 'zh-CN': '弹窗表单', 'en-US': 'Pop-up Window Form' },
      'desc': {
        'zh-CN': '<p>可通过<code>is-form-reset</code>属性设置<code>false</code>,关闭弹窗不重置数据。</p>',
        'en-US':
          '<p>By setting the<code>is-form-reset</code>attribute to <code>false</code>, close the pop-up window without resetting the data.</p>'
      },
      'codeFiles': ['form-in-dialog.vue']
    },
    {
      'demoId': 'destroy-on-close',
      'name': { 'zh-CN': '关闭时销毁主体元素', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>可通过<code>destroy-on-close</code>属性设置<code>true</code>在关闭弹窗时销毁<code>Dialog-box</code>对话框内的所有元素，默认值为<code>false</code>。</p>',
        'en-US':
          '<p>By setting the<code>:destroy-on-close</code>attribute to<code>true</code>, all elements in the<code>dialog box</code>dialog box are destroyed when the pop-up window is closed, with the default value being<code>false</code>.</p>'
      },
      'codeFiles': ['destroy-on-close.vue']
    },
    {
      'demoId': 'open-close-events',
      'name': { 'zh-CN': '弹出与关闭事件', 'en-US': 'Pop-up and Close Event' },
      'desc': {
        'zh-CN':
          '<p>可通过设置事件<code>@open</code>：对话框打开时触发,<code>@opened</code>：对话框打开动画结束时触发,<code>@close</code>：对话框关闭时触发,<code>@closed</code>：对话框关闭动画结束时触发。</p>\n',
        'en-US':
          '<p>By setting the event<code>@open</code>: triggered when the dialog box is opened<code>@opened</code>: triggered when the animation ends when the dialog box is opened<code>@close</code>: triggered when the dialog box is closed<code>@closed</code>: triggered when the animation ends when the dialog box is closed.</p>\n'
      },
      'codeFiles': ['open-close-events.vue']
    }
  ],
  apis: [
    {
      'name': 'dialog-box',
      'type': 'component',
      'props': [
        {
          'name': 'visible',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '控制弹出框显示与关闭',
            'en-US': 'Control pop-up display and closing'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'center',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置为 true 时 弹出框的头部与底部内容会自动居中',
            'en-US': 'When set to true, the head and bottom content of the pop-up box will automatically center'
          },
          'demoId': 'center'
        },
        {
          'name': 'is-form-reset',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '关闭弹窗，默认重置表单数据',
            'en-US': 'Close the pop-up window and reset the form data by default'
          },
          'demoId': 'form-in-dialog'
        },
        {
          'name': 'show-close',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示关闭按钮',
            'en-US': 'Is the close button displayed'
          },
          'demoId': 'hidden-close-buttons'
        },
        {
          'name': 'draggable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否开启弹窗的拖拽功能',
            'en-US': 'Whether to enable the drag and drop function of pop ups, with a default value of false'
          },
          'demoId': 'draggable'
        },
        {
          'name': 'fullscreen',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '弹出框是否全屏', 'en-US': 'Is the pop-up full screen' },
          'demoId': 'fullscreen'
        },
        {
          'name': 'modal',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否启用遮罩层',
            'en-US': 'Is the mask layer enabled'
          },
          'demoId': 'no-modal'
        },
        {
          'name': 'close-on-click-modal',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否可以通过点击遮罩层关闭弹窗',
            'en-US': 'Close the pop-up window by clicking on the mask layer'
          },
          'demoId': 'close-on-click-modal'
        },
        {
          'name': 'close-on-press-escape',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否可以通过 ESC 键关闭遮罩层',
            'en-US':
              'Indicates whether the mask layer is applied to the body. If the value is false, the mask layer is applied to the parent element of DialogBox'
          },
          'demoId': 'close-on-press-escape'
        },
        {
          'name': 'modal-append-to-body',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '遮罩层是否应用到 body 上，为 false 时遮罩层会应用到 DialogBox 的父元素上',
            'en-US':
              'Indicates whether the DialogBox itself is inserted into the body. This attribute must be specified and set to true for nested Dialogs'
          },
          'demoId': 'right-dialog'
        },
        {
          'name': 'append-to-body',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': 'DialogBox 本身是否插入到 body 上，嵌套的 Dialog 必须指定该属性并赋值为 true',
            'en-US': 'Indicates whether to enable the pop-up slide-out function. The default value is false'
          },
          'demoId': 'secondary-dialog'
        },
        {
          'name': 'right-slide',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否开启弹出右侧滑出功能',
            'en-US': 'Whether to disable the scroll bar when a log is displayed'
          },
          'demoId': 'right-dialog'
        },
        {
          'name': 'lock-scroll',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': 'Dialog 弹出时是否禁用滚动条',
            'en-US': 'Indicates whether to display the pop-up header. The default value is true'
          },
          'demoId': 'lock-scroll'
        },
        {
          'name': 'show-header',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否显示弹窗头部 header', 'en-US': 'Pop-up dialog box title' },
          'demoId': 'hidden-header'
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '弹出框标题',
            'en-US':
              'Height between the pop-up box and the top of the window. The default value is 15% of the screen height'
          },
          'demoId': 'custom-dialog-title'
        },
        {
          'name': 'top',
          'type': 'string',
          'defaultValue': '15vh',
          'desc': {
            'zh-CN': '设置弹出框距离窗口顶部的高度',
            'en-US': 'Display and close pop-up boxes'
          },
          'demoId': 'dialog-top-height'
        },
        {
          'name': 'width',
          'type': 'string',
          'defaultValue': '500px',
          'desc': { 'zh-CN': '弹出框的宽度', 'en-US': 'Wideness of the dialog box that is displayed' },
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
          'desc': {
            'zh-CN': '关闭时销毁对话框内的元素，而非隐藏',
            'en-US': 'Destroy elements within the dialog box when closed, rather than hiding them'
          },
          'demoId': 'destroy-on-close'
        },
        {
          'name': 'drag-outside-window',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '可将弹窗拖出窗口', 'en-US': 'Pop ups can be dragged out of the window' },
          'demoId': 'draggable'
        }
      ],
      'events': [
        {
          'name': 'close',
          'type': '() => {}',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 关闭的回调',
            'en-US': 'Dialog disabled callback; Dialog closing callback; No arguments'
          },
          'demoId': 'open-close-events'
        },
        {
          'name': 'open',
          'type': '() => {}',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 打开的回调',
            'en-US': 'Dialog open callback; Dialog open callback; No arguments'
          },
          'demoId': 'open-close-events'
        },
        {
          'name': 'opened',
          'type': '() => {}',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 打开动画结束时的回调',
            'en-US': 'Dialog: callback when the animation ends; No arguments'
          },
          'demoId': 'open-close-events'
        },
        {
          'name': 'closed',
          'type': '() => {}',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 关闭动画结束时的回调',
            'en-US': 'Dialog closes the callback when the animation ends. No arguments'
          },
          'demoId': 'open-close-events'
        },
        {
          'name': 'drag-start',
          'type': '(arg) => {}',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 拖拽开始事件;arg包含弹窗的位置等信息',
            'en-US': 'Dialog drag start event; arg:event (including the location of the pop-up window)'
          },
          'demoId': 'draggable'
        },
        {
          'name': 'drag-move',
          'type': '(arg) => {}',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 拖拽移动事件;arg包含弹窗的位置等信息',
            'en-US': 'Dialog dragging and moving event; arg:event (including the location of the pop-up window)'
          },
          'demoId': 'draggable'
        },
        {
          'name': 'drag-end',
          'type': '(arg) => {}',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'Dialog 拖拽结束事件;arg包含弹窗的位置等信息',
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
