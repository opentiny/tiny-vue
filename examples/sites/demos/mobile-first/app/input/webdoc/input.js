export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'clearable',
      name: {
        'zh-CN': '可清空',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `clearable` 属性设置输入框显示清空图标按钮。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'show-password',
      name: {
        'zh-CN': '密码显示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>当 `type` 为 `password` 时，可通过 `show-password` 属性设置输入框显示密码显示/隐藏切换图标按钮。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-password.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': 'type 属性',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通对应的 type 属性，可以设置为对应的类型。默认为 text，可选值为 text，textarea 和其他 原生 input 的 type 值<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `size` 属性设置尺寸大小，可选值：`medium / small / mini`。注意：只在 `type!="textarea"` 时有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'form',
      name: {
        'zh-CN': 'form',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `form` 属性设置原生属性 form 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['form.vue']
    },
    {
      demoId: 'enumnameeration',
      name: {
        'zh-CN': 'name',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `name` 原生属性。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['name.vue']
    },
    {
      demoId: 'label',
      name: {
        'zh-CN': '输入框关联文字',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `label` 属性设置输入框关联的 label 文字。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['label.vue']
    },
    {
      demoId: 'prefix-icon',
      name: {
        'zh-CN': '头部图标',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `prefix-icon` 属性设置输入框头部图标。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['prefix-icon.vue']
    },
    {
      demoId: 'suffix-icon',
      name: {
        'zh-CN': '尾部图标',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p> 可通过 `suffix-icon` 属性设置输入框尾部图标。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['suffix-icon.vue']
    },
    {
      demoId: 'slot-prefix',
      name: {
        'zh-CN': '可通过 slot="prefix" 设置头部图标',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-prefix.vue']
    },
    {
      demoId: 'slot-suffix',
      name: {
        'zh-CN': '可通过 slot="suffix" 设置尾部图标',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-suffix.vue']
    },
    {
      demoId: 'resize',
      name: {
        'zh-CN': '可缩放文本域',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `resize` 属性设置文本域的缩放。可选值：`none / both / horizontal / vertical`。注意：只在 `type="textarea"` 时有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['resize.vue']
    },
    {
      demoId: 'custom-height',
      name: {
        'zh-CN': '自定义最小文本域高度',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 height 属性设置文本域的最小高度。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-height.vue']
    },
    {
      demoId: 'rows',
      name: {
        'zh-CN': '文本域行数',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `rows` 属性设置文本域显示行数。注意：只在 `text="textarea"` 时有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['rows.vue']
    },
    {
      demoId: 'cols',
      name: {
        'zh-CN': '文本域宽度',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `cols` 属性设置文本域显示宽度。注意：只在 `text="textarea"` 时有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['cols.vue']
    },
    {
      demoId: 'autosize',
      name: {
        'zh-CN': '可自适应文本高度的文本域',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `autosize` 属性设置文本域自适应内容高度。可传入对象，如`{ minRows: 2, maxRows: 6 }`。注意：只对 `type="textarea"` 有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['autosize.vue']
    },
    {
      demoId: 'tabindex',
      name: {
        'zh-CN': '输入框的 tabindex',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `tabindex` 属性设置输入框的 tabindex<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tabindex.vue']
    },
    {
      demoId: 'slot-prepend',
      name: {
        'zh-CN': '前置内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>配置 `prepend` slot，设置输入框前置内容，注意：只对 `type="text"` 有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-prepend.vue']
    },
    {
      demoId: 'slot-append',
      name: {
        'zh-CN': '后置内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>配置 `append` slot，设置输入框后置内容，注意：只对 `type="text"` 有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-append.vue']
    },
    {
      demoId: 'slot-prefix',
      name: {
        'zh-CN': '头部内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>配置 `prefix` slot，设置输入框头部内容，注意：只对 `type="text"` 有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-prefix.vue']
    },
    {
      demoId: 'slot-suffix',
      name: {
        'zh-CN': '尾部内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>配置 `suffix` slot，设置输入框尾部内容，注意：只对 `type="text"` 有效。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-suffix.vue']
    },
    {
      demoId: 'max',
      name: {
        'zh-CN': '最大值',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `max` 属性设置输入框最大值。`max` 是原生属性。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['max.vue']
    },
    {
      demoId: 'min',
      name: {
        'zh-CN': '最小值',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `min` 属性设置输入框最小值。`min` 是原生属性。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['min.vue']
    },
    {
      demoId: 'maxlength',
      name: {
        'zh-CN': '最大输入长度',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `maxlength` 属性设置输入框最大输入长度。`maxlength` 是原生属性。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['maxlength.vue']
    },
    {
      demoId: 'show-word-limit',
      name: {
        'zh-CN': '输入字数统计',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `show-word-limit` 属性设置是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show-word-limit.vue']
    },
    {
      demoId: 'counter',
      name: {
        'zh-CN': '计数器',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `counter` 属性设置显示输入框字符计数器。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['counter.vue']
    },
    {
      demoId: 'step',
      name: {
        'zh-CN': '输入字段的合法数字间隔',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `step` 属性设置输入字段的合法数字间隔。`step` 是原生属性。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['step.vue']
    },
    {
      demoId: 'validate-event',
      name: {
        'zh-CN': '输入时触发表单校验',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `validate-event` 属性设置输入时触发表单校验。通过 `trigger` 配置触发校验规则的方式，为 `change` 时，当输入框值改变即触发校验，为 `blur` 时则失焦后触发校验。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['validate-event.vue']
    },
    {
      demoId: 'autofocus',
      name: {
        'zh-CN': '自动获取焦点',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `autofocus` 属性设置自动获取焦点。`autofocus` 是原生属性。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['autofocus.vue']
    },
    {
      demoId: 'autocomplete',
      name: {
        'zh-CN': '自动补全',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `autocomplete` 属性设置自动补全，默认值为 off ，可选 on 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['autocomplete.vue']
    },
    {
      demoId: 'event-blur',
      name: {
        'zh-CN': '失焦事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>输入框失去焦点时触发 `blur` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event-blur.vue']
    },
    {
      demoId: 'event-change',
      name: {
        'zh-CN': '值改变事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>输入框值改变时触发 `change` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event-change.vue']
    },
    {
      demoId: 'event-clear',
      name: {
        'zh-CN': '清除事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>点击输入框清除按钮时触发 `clear` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event-clear.vue']
    },
    {
      demoId: 'event-focus',
      name: {
        'zh-CN': '聚焦事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>输入框获取焦点时触发 `focus` 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event-focus.vue']
    },
    {
      demoId: 'event-input',
      name: {
        'zh-CN': '输入事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>输入框输入时触发 input 事件。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event-input.vue']
    },
    {
      demoId: 'method-addMemory',
      name: {
        'zh-CN': '记忆历史输入',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['method-addMemory.vue']
    },
    {
      demoId: 'method-blur',
      name: {
        'zh-CN': '失去焦点',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['method-blur.vue']
    },
    {
      demoId: 'method-focus',
      name: {
        'zh-CN': '获取焦点',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['method-focus.vue']
    },
    {
      demoId: 'method-select',
      name: {
        'zh-CN': '选中输入框文本',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['method-select.vue']
    },
    {
      demoId: 'custom-class',
      name: {
        'zh-CN': '自定义样式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 custom-class 属性设置自定义样式。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-class.vue']
    },
    {
      demoId: 'display-only-content',
      name: {
        'zh-CN': '内容区只读',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 display-only或display-only-content 属性设置只读态。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['display-only-content.vue']
    }
  ],
  apis: []
}
