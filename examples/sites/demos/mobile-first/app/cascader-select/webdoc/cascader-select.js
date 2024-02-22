export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>使用 `v-model` 绑定组件 `当前值`，使用 `options` 绑定组件 `选项列表`，这两个数组长度必须相同。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'cycle-roll',
      name: {
        'zh-CN': '循环滚动',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置属性 `cycle-roll` 为 `true` 打开选项循环滚动功能。默认值为 `false`。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['cycle-roll.vue']
    },
    {
      demoId: 'disabled-array',
      name: {
        'zh-CN': '数组选项禁用',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>如果组件 `选项列表` 是数组值，可以使用属性 `disabled` 配置一个方法判断选项是否禁用。 此方法的第一个参数是可见选项的当前值，其它参数是组件当前聚焦值，返回 `true` 则禁用选项。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['disabled-array.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '对象选项禁用',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>如果组件 `选项列表` 是对象值，使用 `optionMethod` 生成选项时即可指定是否禁用。<br>`optionMethod` 方法的第一个参数是可见选项的当前值，其它参数是组件当前聚焦值，设置返回值的 `disabled` 为 `true` 则禁用选项。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'object-option',
      name: {
        'zh-CN': '对象选项',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>组件的 `选项列表` 可以是对象值。此方式更方便生成动态选项值，但是选项值必须为数字值。<br>此对象需配置选项范围 `range`，和生成方法 `optionMethod`。选项范围也可以指定为生成方法 `rangeMethod`。<br>`rangeMethod` 的参数是组件当前聚焦值。<br>`optionMethod` 的第一个参数是可见选项的当前值，其它参数是组件当前聚焦值。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['object-option.vue']
    },
    {
      demoId: 'text-color-class',
      name: {
        'zh-CN': '文字颜色',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['text-color-class.vue']
    },
    {
      demoId: 'cities',
      name: {
        'zh-CN': '城市级联',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['cities.vue']
    }
  ],
  apis: []
}
