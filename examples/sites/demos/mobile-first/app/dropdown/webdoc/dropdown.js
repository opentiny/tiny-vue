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
        'zh-CN': '<p>基本用法<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'checked-status',
      name: {
        'zh-CN': '选中态',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过添加`checked-status`属性实现选中态，其中必须添加索引值`current-index`和选中态`selected`属性<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['checked-status.vue']
    },
    {
      demoId: 'label-over',
      name: {
        'zh-CN': '标签超出显示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>当文字超出规定范围展示全部信息<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['label-over.vue']
    },
    {
      demoId: 'button-dropdown',
      name: {
        'zh-CN': '下拉按钮1',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可以通过 `single-button` 属性设置按钮下拉菜单。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['button-dropdown.vue']
    },
    {
      demoId: 'button-type',
      name: {
        'zh-CN': '下拉按钮2',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可以通过 `type` 属性设置下拉菜单按钮类型，仅支持`primary`类型。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['button-type.vue']
    },
    {
      demoId: 'button-size',
      name: {
        'zh-CN': '下拉按钮3',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 size 属性设置按钮不同的大小尺寸，包括 medium、small、mini 三种不同大小。不设置时为默认尺寸。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['button-size.vue']
    },
    {
      demoId: 'multi-stage',
      name: {
        'zh-CN': '二级下拉触发对象',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>将动作或菜单折叠到下拉菜单中。（暂不支持三级菜单）可以通过 `multi-stage` 属性设置二级下拉菜单，通过添加`level="2"`以便区分二级层级。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['multi-stage.vue']
    },
    {
      demoId: 'many-dropdown',
      name: {
        'zh-CN': '更多图标下拉',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过添加`show-self-icon`属性自定义用户图标,无旋旋转动画；通过添加`:show-icon="false"`属性自定义用户图标,有旋旋转动画。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['many-dropdown.vue']
    },
    {
      demoId: 'arrow-button',
      name: {
        'zh-CN': '箭头按钮1',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过添加`border`属性可实现箭头按钮<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['arrow-button.vue']
    },
    {
      demoId: 'border-size',
      name: {
        'zh-CN': '箭头按钮2',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 size 属性设置按钮不同的大小尺寸，包括 medium、small、mini 三种不同大小。不设置时为默认尺寸。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['border-size.vue']
    },
    {
      demoId: 'events-visible-change',
      name: {
        'zh-CN': 'visible-change 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>内置事件包含：`button-click`、`item-click`、`visible-change` 事件。`visible-change` 事件：下拉框出现/隐藏时触发<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['events-visible-change.vue']
    },
    {
      demoId: 'events-item-click',
      name: {
        'zh-CN': 'item-click 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>点击菜单项时触发的事件回调。可以通过`itemData`，获取菜单项中设置的`item-data`属性<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['events-item-click.vue']
    },
    {
      demoId: 'events-button-click',
      name: {
        'zh-CN': 'button-click 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>当下拉触发元素呈现为按钮组，即`single-button`属性为`true`时，点击左侧按钮的事件回调<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['events-button-click.vue']
    },
    {
      demoId: 'trigger-event',
      name: {
        'zh-CN': '触发方式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可以配置 `click` 激活或者 `hover` 激活。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['trigger-event.vue']
    },
    {
      demoId: 'pop-direction',
      name: {
        'zh-CN': '弹出方向',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过属性`palcement`来设置菜单弹出位置。可选值（top/top-start/top-end/bottom/bottom-start/bottom-end），默认：bottom-start;top：上居中;top-start：上偏左;top-end：上偏右;bottom 下居中;bottom-start 下偏左;bottom-end 下偏右 <p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['pop-direction.vue']
    },
    {
      demoId: '/max-height',
      name: {
        'zh-CN': '最大高度',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过添加`max-height`属性可设置下拉最大高度<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['max-height.vue']
    }
  ],
  apis: []
}
