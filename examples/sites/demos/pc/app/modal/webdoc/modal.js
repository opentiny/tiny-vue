export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>Modal.alert</code> 方法设置弹出框，通过 <code>Modal.confirm</code> 方法设置确认弹出框。函数返回一个 <code>Promise</code> 对象，其中属性 <code>vm</code> 可用来关闭当前模态框</p>\n',
        'en-US':
          '<p>You can use the <code>Modal.alert</code> method to set a pop-up box, and use the <code>Modal.confirm</code> method to set a confirmation pop-up box. The function returns a <code>Promise</code> object, where the property <code>vm</code> can be used to close the current Modal.</p>\n'
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'fullscreen',
      'name': { 'zh-CN': '最大化显示', 'en-US': 'Maximized display' },
      'desc': {
        'zh-CN': '<p>可通过 <code>fullscreen</code> 属性设置是否最大化显示。</p>\n',
        'en-US': '<p>You can use the <code>fullscreen</code> attribute to set whether to maximize the display. </p>\n'
      },
      'codeFiles': ['fullscreen.vue']
    },
    {
      'demoId': 'esc-closable',
      'name': { 'zh-CN': '按 Esc 键关闭弹出框', 'en-US': 'Press Esc to close the dialog box.' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>esc-closable</code> 属性设置是否允许按 Esc 键关闭窗口，默认为 <code>false</code>。</p>\n',
        'en-US':
          '<p>You can use the <code>esc-closable</code> attribute to set whether to close a window by pressing the Esc key. The default value is <code>false</code>. </p>\n'
      },
      'codeFiles': ['esc-closable.vue']
    },
    {
      'demoId': 'duration',
      'name': { 'zh-CN': '自动关闭延时', 'en-US': 'Automatic shutdown delay' },
      'desc': {
        'zh-CN': '<p>可通过 <code>duration</code> 属性设置自动关闭的延迟时间，只对 type=message 有效。</p>\n',
        'en-US':
          '<p>You can use the <code>duration</code> attribute to set the delay time for automatic closing. This parameter is valid only for type=message. </p>\n'
      },
      'codeFiles': ['duration.vue']
    },
    {
      'demoId': 'id',
      'name': { 'zh-CN': '防止重复提示', 'en-US': 'Prevent repeated prompts' },
      'desc': {
        'zh-CN': '<p>如果不想窗口重复点击，可以设置唯一的 <code>id</code> 防止重复提示，只对 type=message 有效。</p>\n',
        'en-US':
          '<p>If you do not want to click the window repeatedly, you can set a unique <code>id</code> to prevent repeated prompts. This parameter is valid only for type=message. </p>\n'
      },
      'codeFiles': ['id.vue']
    },
    {
      'demoId': 'lock-scroll',
      'name': { 'zh-CN': '锁住滚动条', 'en-US': 'Lock the scroll bar' },
      'desc': {
        'zh-CN': '<p>可通过 <code>lock-scroll</code> 属性设置是否锁住滚动条，不允许页面滚动。</p>\n',
        'en-US': '<p>You can use the <code>lock-scroll</code> attribute to set whether to lock the scroll bar. </p>\n'
      },
      'codeFiles': ['lock-scroll.vue']
    },
    {
      'demoId': 'lock-view',
      'name': { 'zh-CN': '锁住页面', 'en-US': 'Lock the page' },
      'desc': {
        'zh-CN': '<p>可通过 <code>lock-view</code> 属性设置是否锁住页面，不允许窗口之外的任何操作。</p>\n',
        'en-US':
          '<p>You can use the <code>lock-view</code> attribute to set whether to lock the page. Operations outside the window are not allowed. </p>\n'
      },
      'codeFiles': ['lock-view.vue']
    },
    {
      'demoId': 'lock-view1',
      'name': { 'zh-CN': '隐藏遮罩层', 'en-US': 'Display Mask Layer' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>mask</code> 属性设置是否显示遮罩层，默认为 <code>true</code>。设置为<code>false</code>时隐藏遮罩层</p>\n',
        'en-US':
          '<p>You can set whether to display the mask layer through the <code>mask</code> attribute. The default value is <code>true</code>. </p>\n'
      },
      'codeFiles': ['lock-view.vue']
    },
    {
      'demoId': 'mask-closable',
      'name': { 'zh-CN': '点击遮罩层关闭窗口', 'en-US': 'Click the mask layer to close the window.' },
      'desc': {
        'zh-CN': '<p>可通过 <code>mask-closable</code> 属性设置是否允许点击遮罩层关闭窗口。</p>\n',
        'en-US':
          '<p>You can use the <code>mask-closable</code> attribute to set whether to allow clicking the mask layer to close the window. </p>\n'
      },
      'codeFiles': ['mask-closable.vue']
    },
    {
      'demoId': 'message',
      'name': { 'zh-CN': '自定义内容', 'en-US': 'Custom Content' },
      'desc': {
        'zh-CN': '<p>可通过 <code>message</code> 属性设置窗口的内容。</p>\n',
        'en-US': '<p>You can set the content of the window through the <code>message</code> attribute. </p>\n'
      },
      'codeFiles': ['message.vue']
    },
    {
      'demoId': 'footer-btn-content',
      'name': { 'zh-CN': '自定义底部按钮内容', 'en-US': 'Resize the window' },
      'desc': {
        'zh-CN':
          '<p>通过<code> confirmContent </code> 属性设置确认按钮内容，通过<code> cancelContent </code> 属性设置取消按钮内容。<p>\n',
        'en-US':
          '<p>You can set the width and height of a window by using <code>width</code> and <code>height</code>. You can set whether to allow dragging to adjust the window size by using <code>resize</code>. </p>\n'
      },
      'codeFiles': ['footer-btn-content.vue']
    },
    {
      'demoId': 'footer-btn-props',
      'name': { 'zh-CN': '自定义底部按钮props', 'en-US': 'Minimum width of the window after the window is resized' },
      'desc': {
        'zh-CN':
          '<p>通过<code> confirmBtnProps </code>属性设置确认按钮props，通过 <code> cancelBtnProps </code>属性设置取消按钮props。<p>\n',
        'en-US':
          '<p>After <code>resize</code> is set to <code>true</code>, the <code>min-width</code> attribute can be used to set the minimum width of the window after being dragged. </p>\n'
      },
      'codeFiles': ['footer-btn-props.vue']
    },
    {
      'demoId': 'resize',
      'name': { 'zh-CN': '调整窗口大小', 'en-US': 'Minimum height of the window after the window is resized' },
      'desc': {
        'zh-CN':
          '<p>可通过和<code>width</code>和<code>height</code>设置窗口的宽高，而通过 <code>resize</code> 设置是否允许拖动调整窗口大小。</p>\n',
        'en-US':
          '<p>After <code>resize</code> is set to <code>true</code>, the <code>min-height</code> attribute can be used to set the minimum height of the window after being dragged. </p>\n'
      },
      'codeFiles': ['resize.vue']
    },
    {
      'demoId': 'min-width',
      'name': { 'zh-CN': '调整窗口大小后窗口显示的最小宽度', 'en-US': 'The bottom is not displayed.' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>resize</code> 可拖拽属性为 <code>true</code>后，可通过 <code>min-width</code> 属性设置拖拽后窗口的最小宽度。</p>\n',
        'en-US':
          '<p>You can use the <code>showFooter</code> attribute to set whether to display the bottom. The default value is <code>true</code>. </p>\n'
      },
      'codeFiles': ['min-width.vue']
    },
    {
      'demoId': 'min-height',
      'name': { 'zh-CN': '调整窗口大小后窗口显示的最小高度', 'en-US': 'The header is not displayed.' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>resize</code> 可拖拽属性为 <code>true</code>后，可通过 <code>min-height</code> 属性设置拖拽后窗口的最小高度。</p>\n',
        'en-US':
          '<p>You can use the <code>showHeader</code> attribute to set whether to display the header. The default value is <code>true</code>. </p>\n'
      },
      'codeFiles': ['min-height.vue']
    },
    {
      'demoId': 'showFooter',
      'name': { 'zh-CN': '不显示底部', 'en-US': 'Message Status' },
      'desc': {
        'zh-CN': '<p>可通过 <code>showFooter</code> 属性设置是否显示底部，默认为 <code>true</code>。</p>\n',
        'en-US':
          '<p>You can set the message status through the <code>status</code> attribute. The value can be <code>info | success | warning | error | loading</code> . </p>\n'
      },
      'codeFiles': ['showFooter.vue']
    },
    {
      'demoId': 'showHeader',
      'name': { 'zh-CN': '不显示头部', 'en-US': 'Title' },
      'desc': {
        'zh-CN': '<p>可通过 <code>showHeader</code> 属性设置是否显示头部，默认为 <code>true</code>。</p>\n',
        'en-US': '<p>You can set the title of the window through the <code>title</code> attribute. </p>\n'
      },
      'codeFiles': ['showHeader.vue']
    },
    {
      'demoId': 'status',
      'name': { 'zh-CN': '消息状态', 'en-US': 'Position from the top' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>status</code> 属性设置消息状态，可选值有 <code>info | success | warning | error | loading</code>。</p>\n',
        'en-US':
          '<p>You can use the <code>top</code> attribute to set the position of a message from the top of the message. This parameter is valid only for type=message. </p>\n'
      },
      'codeFiles': ['status.vue']
    },
    {
      'demoId': 'title',
      'name': { 'zh-CN': '标题', 'en-US': 'Window Type' },
      'desc': {
        'zh-CN': '<p>可通过 <code>title</code> 属性设置窗口的标题。</p>\n',
        'en-US':
          '<p>You can set the window type through the <code>type</code> attribute. The options are <code>alert | confirm | message</code>. </p>\n'
      },
      'codeFiles': ['title.vue']
    },
    {
      'demoId': 'top',
      'name': { 'zh-CN': '距离顶部的位置', 'en-US': 'Bound Value' },
      'desc': {
        'zh-CN': '<p>可通过 <code>top</code> 属性设置消息距离顶部的位置，只对 type=message 有效。</p>\n',
        'en-US': '<p>You can use the <code>value/v-model</code> attribute to bind a value. </p>\n'
      },
      'codeFiles': ['top.vue']
    },
    {
      'demoId': 'type',
      'name': { 'zh-CN': '窗口类型', 'en-US': 'Custom Stacking Sequence' },
      'desc': {
        'zh-CN': '<p>可通过 <code>type</code> 属性设置窗口类型，可选值 <code>alert | confirm | message</code>。</p>\n',
        'en-US':
          '<p>You can use the <code>zIndex</code> attribute to set the custom stacking sequence. (It may be used in some special scenarios, such as when it is blocked.) </p>\n'
      },
      'codeFiles': ['type.vue']
    },
    {
      'demoId': 'value',
      'name': { 'zh-CN': '绑定值', 'en-US': 'Cancel button event' },
      'desc': {
        'zh-CN': '<p>可通过 <code>value/v-model</code> 属性绑定值。</p>\n',
        'en-US': '<p>The <code>cancel</code> event is triggered when the Cancel button is clicked. </p>\n'
      },
      'codeFiles': ['value.vue']
    },
    {
      'demoId': 'zIndex',
      'name': { 'zh-CN': '自定义堆叠顺序', 'en-US': 'Close button event' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>zIndex</code> 属性设置自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）。</p>\n',
        'en-US': '<p>The <code>close</code> event is triggered when the close button is clicked. </p>\n'
      },
      'codeFiles': ['zIndex.vue']
    },
    {
      'demoId': 'cancel-event',
      'name': { 'zh-CN': '取消按钮事件', 'en-US': 'OK button event' },
      'desc': {
        'zh-CN': '<p>点击取消按钮时触发 <code>cancel</code> 事件。</p>\n',
        'en-US': '<p>The <code>confirm</code> event is triggered when the OK button is clicked. </p>\n'
      },
      'codeFiles': ['cancel-event.vue']
    },
    {
      'demoId': 'close-event',
      'name': { 'zh-CN': '关闭按钮事件', 'en-US': 'Window Close Event' },
      'desc': {
        'zh-CN': '<p>点击关闭按钮时会触发 <code>close</code> 事件。</p>\n',
        'en-US': '<p>The <code>hide</code> event is triggered when the window is closed. </p>\n'
      },
      'codeFiles': ['close-event.vue']
    },
    {
      'demoId': 'confirm-event',
      'name': { 'zh-CN': '确定按钮事件', 'en-US': 'Window Display Event' },
      'desc': {
        'zh-CN': '<p>点击确定按钮时会触发 <code>confirm</code> 事件。</p>\n',
        'en-US': '<p>The <code>show</code> event is triggered when the window is displayed. </p>\n'
      },
      'codeFiles': ['confirm-event.vue']
    },
    {
      'demoId': 'hide-event',
      'name': { 'zh-CN': '窗口关闭事件', 'en-US': 'Window scaling event' },
      'desc': {
        'zh-CN': '<p>窗口关闭时会触发 <code>hide</code> 事件。</p>\n',
        'en-US': '<p>The <code>zoom</code> event is triggered when the window is zoomed in or out. </p>\n'
      },
      'codeFiles': ['hide-event.vue']
    },
    {
      'demoId': 'show-event',
      'name': {
        'zh-CN': '窗口显示事件',
        'en-US': 'Close the pop-up window. Are you sure you want to reset the form data?'
      },
      'desc': {
        'zh-CN': '<p>在窗口显示时会触发 <code>show</code> 事件。</p>\n',
        'en-US':
          '<p>When the Modal nested form is used and the pop-up window is closed, reset the form data.</p>\n<p>Set <code>is-form-reset</code> to false. If you close the pop-up window, the form is not reset.</p>'
      },
      'codeFiles': ['show-event.vue']
    },
    {
      'demoId': 'zoom-event',
      'name': { 'zh-CN': '窗口缩放事件', 'en-US': 'Default slot' },
      'desc': {
        'zh-CN': '<p>窗口缩放时会触发 <code>zoom</code> 事件。</p>\n',
        'en-US': '<p>You can set the default slot by <code>templete</code>. </p>\n'
      },
      'codeFiles': ['zoom-event.vue']
    },
    {
      'demoId': 'is-form-reset',
      'name': { 'zh-CN': '关闭弹窗，是否重置表单数据', 'en-US': 'Bottom slot' },
      'desc': {
        'zh-CN':
          '<p>Modal嵌套表单使用时，关闭弹窗时，重置表单数据</p>\n<p>设置  <code>is-form-reset</code> 为false,则关闭弹窗是不重置表单</p>',
        'en-US': '<p>You can set the bottom slot through <code>slot=&quot;footer&quot;</code> . </p>\n'
      },
      'codeFiles': ['is-form-reset.vue']
    },
    {
      'demoId': 'value1',
      'name': { 'zh-CN': '默认插槽', 'en-US': 'Nested grid' },
      'desc': {
        'zh-CN': '<p>可通过 <code>templete</code> 设置默认插槽。</p>\n',
        'en-US': '<p>You can nest grids through slots</p>\n'
      },
      'codeFiles': ['value.vue']
    },
    {
      'demoId': 'footer-slot',
      'name': { 'zh-CN': '底部插槽', 'en-US': '' },
      'desc': { 'zh-CN': '<p>可通过 <code>slot=&quot;footer&quot;</code> 设置底部插槽。</p>\n', 'en-US': '' },
      'codeFiles': ['footer-slot.vue']
    },
    {
      'demoId': 'grid',
      'name': { 'zh-CN': '嵌套 grid', 'en-US': '' },
      'desc': { 'zh-CN': '<p>可通过插槽嵌套 grid</p>\n', 'en-US': '' },
      'codeFiles': ['grid.vue']
    }
  ],
  apis: [
    {
      'name': 'modal',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue / v-model',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Bound Value' },
          'demoId': 'value'
        },
        {
          'name': 'id',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '只对 type=message 有效，如果不想窗口重复点击，可以设置唯一的 id 防止重复提示',
            'en-US':
              'This parameter is valid only for type=message. If you do not want to click a window repeatedly, you can set a unique ID to prevent repeated prompts.'
          },
          'demoId': 'id'
        },
        {
          'name': 'is-form-reset',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '关闭弹窗，默认重置表单数据',
            'en-US': 'Close the pop-up window. The form data is reset by default.'
          },
          'demoId': 'is-form-reset'
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '窗口的标题（支持开启国际化）',
            'en-US': 'Window title (internationalization is supported)'
          },
          'demoId': 'title'
        },
        {
          'name': 'type',
          'type': 'string',
          'defaultValue': 'alert',
          'desc': {
            'zh-CN': '窗口类型;该属性的可选值为 alert, confirm, message',
            'en-US': 'Window type; The options of this attribute are alert, confirm, and message.'
          },
          'demoId': 'type'
        },
        {
          'name': 'status',
          'type': 'string',
          'defaultValue': 'info',
          'desc': {
            'zh-CN':
              '只对 type=alert | confirm | message 有效，消息状态;该属性的可选值为 info, success, warning, error, loading',
            'en-US':
              'This parameter is valid only for type=alert | confirm | message. The options of this attribute are info, success, warning, error, loading'
          },
          'demoId': 'status'
        },
        {
          'name': 'message',
          'type': '[string, Function,VNode]',
          'defaultValue': '',
          'desc': {
            'zh-CN': '窗口的内容，类型为：纯文本/VNode，或返回纯文本/VNode的函数',
            'en-US': 'Content of the modal, Type: plain text/VNode, or function that returns string/VNode'
          },
          'demoId': 'message'
        },
        {
          'name': 'show-header',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否显示头部', 'en-US': 'Display Header' },
          'demoId': 'showHeader'
        },
        {
          'name': 'show-footer',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否显示底部', 'en-US': 'Display bottom' },
          'demoId': 'showFooter'
        },
        {
          'name': 'confirm-content',
          'type': 'string',
          'defaultValue': {
            'zh-CN': '确认',
            'en-US': 'Confirm'
          },
          'desc': {
            'zh-CN': '自定义确认按钮内容',
            'en-US': 'Whether to lock the page. Operations outside the window are not allowed.'
          },
          'demoId': 'footer-btn-content'
        },
        {
          'name': 'cancel-content',
          'type': 'string',
          'defaultValue': {
            'zh-CN': '取消',
            'en-US': 'Cancel'
          },
          'desc': {
            'zh-CN': '自定义取消按钮内容',
            'en-US': 'Whether to lock the scroll bar to disable page scrolling.'
          },
          'demoId': 'footer-btn-content'
        },
        {
          'name': 'confirm-btn-config',
          'type': 'object',
          'defaultValue': '{}',
          'desc': { 'zh-CN': '自定义确认按钮Props，可选值与TinyButton组件一致', 'en-US': 'Display mask layer' },
          'demoId': 'footer-btn-props'
        },
        {
          'name': 'cancel-btn-props',
          'type': 'object',
          'defaultValue': '{}',
          'desc': {
            'zh-CN': '自定义取消按钮props，可选值与TinyButton组件一致',
            'en-US': 'Whether to allow clicking the mask layer to close the window'
          },
          'demoId': 'footer-btn-props'
        },
        {
          'name': 'lock-view',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否锁住页面，不允许窗口之外的任何操作',
            'en-US': 'Whether to allow closing the window by pressing Esc'
          },
          'demoId': 'lock-view'
        },
        {
          'name': 'lock-scroll',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否锁住滚动条，不允许页面滚动',
            'en-US': 'Whether to allow dragging to adjust the window size'
          },
          'demoId': 'lock-scroll'
        },
        {
          'name': 'mask',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示遮罩层',
            'en-US':
              'This parameter is valid only when type is set to message. It indicates the delay for automatic disabling.'
          },
          'demoId': 'lock-view1'
        },
        {
          'name': 'mask-closable',
          'type': 'boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '是否允许点击遮罩层关闭窗口', 'en-US': 'Window width' },
          'demoId': 'mask-closable'
        },
        {
          'name': 'esc-closable',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否允许按 Esc 键关闭窗口', 'en-US': 'Window height' },
          'demoId': 'esc-closable'
        },
        {
          'name': 'resize',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否允许拖动调整窗口大小', 'en-US': 'Minimum width of the window' },
          'demoId': 'resize'
        },
        {
          'name': 'duration',
          'type': '[number, string]',
          'defaultValue': '3000',
          'desc': { 'zh-CN': '只对 type=message 有效，自动关闭的延时', 'en-US': 'Minimum height of the window' },
          'demoId': 'duration'
        },
        {
          'name': 'width',
          'type': '[number, string]',
          'defaultValue': '',
          'desc': {
            'zh-CN': '窗口的宽度',
            'en-US':
              'This parameter is valid only when type is set to message. It indicates the position from the top of the message.'
          },
          'demoId': 'resize'
        },
        {
          'name': 'height',
          'type': '[number, string]',
          'defaultValue': '',
          'desc': {
            'zh-CN': '窗口的高度',
            'en-US':
              'User-defined stacking sequence (It may be used in some special scenarios, for example, when it is blocked.)'
          },
          'demoId': 'resize'
        },
        {
          'name': 'min-width',
          'type': '[number, string]',
          'defaultValue': '',
          'desc': { 'zh-CN': '窗口的最小宽度', 'en-US': 'Maximized display by default' },
          'demoId': 'min-width'
        },
        {
          'name': 'min-height',
          'type': '[number, string]',
          'defaultValue': '',
          'desc': { 'zh-CN': '窗口的最小高度', 'en-US': '' },
          'demoId': 'min-height'
        },
        {
          'name': 'top',
          'type': '[number, string]',
          'defaultValue': '15',
          'desc': { 'zh-CN': '只对 type=message 有效，消息距离顶部的位置', 'en-US': '' },
          'demoId': 'top'
        },
        {
          'name': 'z-index',
          'type': 'number',
          'defaultValue': '3000',
          'desc': { 'zh-CN': '自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）', 'en-US': '' },
          'demoId': 'zIndex'
        },
        {
          'name': 'fullscreen',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '默认最大化显示', 'en-US': '' },
          'demoId': 'fullscreen'
        },
        {
          'name': 'message-closable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': 'message信息是否显示关闭按钮', 'en-US': '' },
          'demoId': 'status'
        }
      ],
      'events': [
        {
          'name': 'show',
          'type': 'Function(params)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在窗口显示时会触发该事件;params: { type // 事件类型，$modal // 组件实例 }',
            'en-US':
              'This event is triggered when the window is displayed. params: {type //Event type, $modal //Component instance}'
          },
          'demoId': 'show-event'
        },
        {
          'name': 'hide',
          'type': 'Function(params)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '在窗口关闭时会触发该事件;params: { type // 事件类型，$modal // 组件实例 }',
            'en-US':
              'This event is triggered when the window is closed. params: {type //Event type, $modal //Component instance}'
          },
          'demoId': 'hide-event'
        },
        {
          'name': 'confirm',
          'type': 'Function(params, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击确定按钮时会触发该事件;params: { type // 事件类型，$modal // 组件实例 }，event: 原生事件',
            'en-US':
              'This event is triggered when the OK button is clicked. params: {type //Event type, $modal //Component instance}, event: native event'
          },
          'demoId': 'confirm-event'
        },
        {
          'name': 'close',
          'type': 'Function(params, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击关闭按钮时会触发该事件;params: { type // 事件类型，$modal // 组件实例 }，event: 原生事件',
            'en-US':
              'This event is triggered when the close button is clicked. params: {type //Event type, $modal //Component instance}, event: native event'
          },
          'demoId': 'close-event'
        },
        {
          'name': 'cancel',
          'type': 'Function(params, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '点击取消按钮时会触发该事件;params: { type // 事件类型，$modal // 组件实例 }，event: 原生事件',
            'en-US':
              'This event is triggered when the Cancel button is clicked. params: {type //Event type, $modal //Component instance}, event: native event'
          },
          'demoId': 'cancel-event'
        },
        {
          'name': 'zoom',
          'type': 'Function(params, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '窗口缩放时会触发该事件;params: { type // 事件类型，$modal // 组件实例 }，event: 原生事件',
            'en-US':
              'This event is triggered when a window is zoomed in or out. params: {type //Event type, $modal //Component instance}, event: native event'
          },
          'demoId': 'zoom-event'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'value1'
        },
        {
          'name': 'footer',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '窗口底部的模板', 'en-US': 'Template at the bottom of the window' },
          'demoId': 'footer-slot'
        }
      ]
    }
  ]
}
