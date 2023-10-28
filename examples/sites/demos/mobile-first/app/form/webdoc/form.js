export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'frequently-used-form',
      name: {
        'zh-CN': '常用表单',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>在 Form 组件中，每一个表单域由一个 FormItem 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['frequently-used-form.vue']
    },
    {
      demoId: 'form-in-row',
      name: {
        'zh-CN': '行内表单',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单，设置 `inline` 属性可以让表单域变为行内的表单域。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['form-in-row.vue']
    },
    {
      demoId: 'form-validation',
      name: {
        'zh-CN': '表单校验',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>包括常用的必填、日期、时间、URL、邮件等校验规则。通过 `trigger` 配置触发校验规则的方式，为 `change` 时，当输入框值改变即触发校验，为 `blur` 时则失焦后触发校验。<br>校验时若校验类型为 `date`，则需要使用 `DatePicker` 组件进行日期选择，若使用 `Input` 组件进行日期输入，建议使用自定义校验规则。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['form-validation.vue']
    },
    {
      demoId: 'custom-validation-rule',
      name: {
        'zh-CN': '自定义校验规则',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `validator` 选项进行自定义校验，校验方法中 `callback` 必须被调用。通过配置 `validate-on-rule-change` 属性,设置是否在 `rules` 属性改变后立即触发一次验证<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-validation-rule.vue']
    },
    {
      demoId: 'validation-position',
      name: {
        'zh-CN': '校验提示位置',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `validate-position` 可自定义错误提示出现的位置，在 `Form` 组件上设置后，子组件`FormItem`会继承父组件设置。单独在 `FormItem` 组件上进行设置优先级高于在 `From`上的设置。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['validation-position.vue']
    },
    {
      demoId: 'popper-options-bubbling',
      name: {
        'zh-CN': '校验提示跟随表单项移动',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过配置 `popperOptions.bubbling` 为 `true` ，可实现表单的校验提示跟随 Form 表单外部的滚动条滚动。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['popper-options-bubbling.vue']
    },
    {
      demoId: 'switch-from-item',
      name: {
        'zh-CN': '动态切换 FormItem',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>在表单中通过 `v-if` 切换两个 `FormItem` 控制页面元素时，会存在错误提示错位问题，原因时 Vue 复用了 ToolTip 组件，这时需要将 form-item 上加上 `key` 属性标识<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['switch-from-item.vue']
    },
    {
      demoId: 'no-validate-to-add',
      name: {
        'zh-CN': 'RichText 等无校验的组件添加校验的方法',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['no-validate-to-add.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '表单尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过在 `tiny-form` 标签上设置 `size` 属性可以改变表单内组件尺寸；设置 `disabled` 属性可以改变表单内组件禁用状态<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'form-clear-validate',
      name: {
        'zh-CN': '移除表单项的校验结果',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>调用 `clearValidate` 方法移除表单项的校验结果。传入待移除的表单项的 `prop` 属性或者 `prop` 组成的数组，如不传则移除整个表单的校验结果。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['form-clear-validate.vue']
    },
    {
      demoId: 'slot-label',
      name: {
        'zh-CN': '标签文本插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过在 `label` 插槽，自定义标签文本的内容<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot-label.vue']
    },
    {
      demoId: 'form-item-tip',
      name: {
        'zh-CN': '给表单项 label 添加提示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过给 form-item 添加 tip-content 属性给 label 添加提示信息<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['form-item-tip.vue']
    },
    {
      demoId: 'validate-type',
      name: {
        'zh-CN': '校验提示的形式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `validate-type` 可设置校验提示信息是以 `text` 文本显示还是以 `tip` 提示框的形式显示，默认为 `tip` 。也可直接配置在某一个 `<form-item>` 上控制某一项的校验提示形式。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['validate-type.vue']
    },
    {
      demoId: 'form-disabled',
      name: {
        'zh-CN': '表单禁用',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `disabled` 可设置表单是否禁用，默认为 `false`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['form-disabled.vue']
    },
    {
      demoId: 'form-display-only',
      name: {
        'zh-CN': '只读 display-only',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `display-only` 属性，开启只读模式<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['form-display-only.vue']
    },
    {
      demoId: 'validate-debounce',
      name: {
        'zh-CN': '防抖处理',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>设置 FormItem 的属性 `validate-debounce` 为 `true`，可以开启校验防抖，在连续输入的情况下，会在最后一次输入结束时才开始校验。默认为 `false` 不开启。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['validate-debounce.vue']
    }
  ],
  apis: []
}
