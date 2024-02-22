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
      demoId: 'checked-status',
      name: {
        'zh-CN': '选中态',
        'en-US': 'Selected state'
      },
      desc: {
        'zh-CN':
          '<p>通过添加`checked-status`属性实现选中态，其中必须添加索引值`current-index`和选中态`selected`属性</p>',
        'en-US':
          '<p>The selected state is implemented by adding the `checked-status` attribute. The index value `current-index` and the `selected` attribute of the selected state must be added</p>'
      },
      codeFiles: ['checked-status.vue']
    },
    {
      demoId: 'label-over',
      name: {
        'zh-CN': '标签超出显示',
        'en-US': 'Label Out of Display'
      },
      desc: {
        'zh-CN': '<p>当文字超出规定范围展示全部信息</p>',
        'en-US': '<p>When the text exceeds the specified range, all information is displayed.</p>'
      },
      codeFiles: ['label-over.vue']
    },
    {
      demoId: 'button-dropdown',
      name: {
        'zh-CN': '下拉按钮1',
        'en-US': 'Drop-down button one'
      },
      desc: {
        'zh-CN': '<p>可以通过 `single-button` 属性设置按钮下拉菜单。</p>',
        'en-US': '<p>You can set the button drop-down menu through the `single-button` property.</p>'
      },
      codeFiles: ['button-dropdown.vue']
    },
    {
      demoId: 'button-type',
      name: {
        'zh-CN': '下拉按钮2',
        'en-US': 'Drop-down button two'
      },
      desc: {
        'zh-CN': '<p>可以通过 `type` 属性设置下拉菜单按钮类型，仅支持`primary`类型。</p>',
        'en-US':
          '<p>ou can set the drop-down menu button type through the `type` attribute. Only the `primary` type is supported.</p>'
      },
      codeFiles: ['button-type.vue']
    },
    {
      demoId: 'button-size',
      name: {
        'zh-CN': '下拉按钮3',
        'en-US': 'Drop-down button three'
      },
      desc: {
        'zh-CN':
          '<p>通过 size 属性设置按钮不同的大小尺寸，包括 medium、small、mini 三种不同大小。不设置时为默认尺寸。</p>',
        'en-US':
          '<p>Set the sizes of buttons through the size attribute, including medium, small, and mini. If this parameter is not set, the default size is used.</p>'
      },
      codeFiles: ['button-size.vue']
    },
    {
      demoId: 'multi-stage',
      name: {
        'zh-CN': '二级下拉触发对象',
        'en-US': 'Level-2 drop-down trigger object'
      },
      desc: {
        'zh-CN':
          '<p>将动作或菜单折叠到下拉菜单中。（暂不支持三级菜单）可以通过 `multi-stage` 属性设置二级下拉菜单，通过添加`level="2"`以便区分二级层级。</p>',
        'en-US':
          '<p>Collapses an action or menu into a drop-down menu. (Level-3 menus are not supported currently.) You can set the level-2 drop-down menu through the `multi-stage` attribute and add `level="2"` to distinguish level-2 levels.</p>'
      },
      codeFiles: ['multi-stage.vue']
    },
    {
      demoId: 'many-dropdown',
      name: {
        'zh-CN': '更多图标下拉',
        'en-US': 'More icon drop-down'
      },
      desc: {
        'zh-CN':
          '<p>通过添加`show-self-icon`属性自定义用户图标,无旋旋转动画；通过添加`:show-icon="false"`属性自定义用户图标,有旋旋转动画。</p>',
        'en-US':
          '<p>Customize the user icon by adding the `show-self-icon` attribute and rotate the animation without rotation. Customize the user icon by adding the `:show-icon="false"` attribute, with rotating animation.</p>'
      },
      codeFiles: ['many-dropdown.vue']
    },
    {
      demoId: 'arrow-button',
      name: {
        'zh-CN': '箭头按钮1',
        'en-US': 'Arrow button one'
      },
      desc: {
        'zh-CN': '<p>通过添加`border`属性可实现箭头按钮</p>',
        'en-US': '<p>The arrow button can be implemented by adding the `border` attribute.</p>'
      },
      codeFiles: ['arrow-button.vue']
    },
    {
      demoId: 'border-size',
      name: {
        'zh-CN': '箭头按钮2',
        'en-US': 'Arrow button two'
      },
      desc: {
        'zh-CN':
          '<p>通过 size 属性设置按钮不同的大小尺寸，包括 medium、small、mini 三种不同大小。不设置时为默认尺寸。</p>',
        'en-US':
          '<p>Set the sizes of buttons through the size attribute, including medium, small, and mini. If this parameter is not set, the default size is used.</p>'
      },
      codeFiles: ['border-size.vue']
    },
    {
      demoId: 'events-visible-change',
      name: {
        'zh-CN': 'visible-change 事件',
        'en-US': 'visible-change events'
      },
      desc: {
        'zh-CN':
          '<p>内置事件包含：`button-click`、`item-click`、`visible-change` 事件。`visible-change` 事件：下拉框出现/隐藏时触发</p>',
        'en-US':
          '<p>Built-in events include the `button-click`, `item-click`, and `visible-change` events. `visible-change` event: triggered when the drop-down list box is displayed or hidden</p>'
      },
      codeFiles: ['events-visible-change.vue']
    },
    {
      demoId: 'events-item-click',
      name: {
        'zh-CN': 'item-click 事件',
        'en-US': 'item-click events'
      },
      desc: {
        'zh-CN': '<p>点击菜单项时触发的事件回调。可以通过`itemData`，获取菜单项中设置的`item-data`属性</p>',
        'en-US':
          '<p>Event callback triggered when a menu item is clicked. You can use `itemData` to obtain the `item-data` attribute set in the menu item.</p>'
      },
      codeFiles: ['events-item-click.vue']
    },
    {
      demoId: 'events-button-click',
      name: {
        'zh-CN': 'button-click 事件',
        'en-US': 'button-click events'
      },
      desc: {
        'zh-CN': '<p>当下拉触发元素呈现为按钮组，即`single-button`属性为`true`时，点击左侧按钮的事件回调</p>',
        'en-US':
          '<p>The drop-down trigger element is displayed as a button group. That is, when the `single-button` attribute is set to `true`, the event callback is triggered when the button on the left is clicked.</p>'
      },
      codeFiles: ['events-button-click.vue']
    },
    {
      demoId: 'trigger-event',
      name: {
        'zh-CN': '触发方式',
        'en-US': 'Triggering Mode'
      },
      desc: {
        'zh-CN': '<p>可以配置 `click` 激活或者 `hover` 激活。<p>',
        'en-US': '<p>You can configure `click` activation or `hover` activation.</p>'
      },
      codeFiles: ['trigger-event.vue']
    },
    {
      demoId: 'pop-direction',
      name: {
        'zh-CN': '弹出方向',
        'en-US': 'Ejection direction'
      },
      desc: {
        'zh-CN':
          '<p>通过属性`palcement`来设置菜单弹出位置。可选值（top/top-start/top-end/bottom/bottom-start/bottom-end），默认：bottom-start;top：上居中;top-start：上偏左;top-end：上偏右;bottom 下居中;bottom-start 下偏左;bottom-end 下偏右 </p>',
        'en-US':
          '<p>se the property `palcement` to set the menu pop-up position. The options are (top/top-start/top-end/bottom/bottom-start/bottom-end). The default value is bottom-start. The top value is top-center. top-start: top-to-left; top-end: top-right; bottom centered; bottom-start: bottom-left; bottom-end: bottom-right</p>'
      },
      codeFiles: ['pop-direction.vue']
    },
    {
      demoId: 'max-height',
      name: {
        'zh-CN': '最大高度',
        'en-US': 'Maximum height'
      },
      desc: {
        'zh-CN': '<p>通过添加`max-height`属性可设置下拉最大高度</p>',
        'en-US': '<p>The maximum height of the drop-down can be set by adding the `max-height` attribute.</p>'
      },
      codeFiles: ['max-height.vue']
    }
  ],
  apis: [
    {
      'name': 'Dropdown',
      'type': 'component',
      'props': [
        {
          'name': 'show-self-icon ',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '更多图标下拉菜单。',
            'en-US': 'More icon drop-down list.'
          },
          'demoId': 'many-dropdown'
        },
        {
          'name': 'single-button',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '下拉触发元素呈现为按钮组。',
            'en-US': 'The drop-down trigger element is rendered as a button group.'
          },
          'demoId': 'button-dropdown'
        }
      ]
    },
    {
      'name': 'Dropdown-Menu',
      'type': '属性',
      'props': [
        {
          'name': 'custom-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置弹出下拉自定义样式。',
            'en-US': 'Set the custom style of the pop-up drop-down list.'
          }
        },
        {
          'name': 'max-height',
          'type': 'Number | String',
          'defaultValue': '400',
          'desc': {
            'zh-CN': '设置下拉最大高度。',
            'en-US': 'Sets the maximum pull-down height. '
          },
          'demoId': 'max-height'
        },
        {
          'name': 'multi-stage',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置二级下拉菜单。',
            'en-US': 'Sets the level-2 drop-down list. '
          },
          'demoId': 'multi-stage'
        }
      ]
    },
    {
      'name': 'Dropdown-Item',
      'type': '属性',
      'props': [
        {
          'name': 'level',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置二级下拉菜单标志',
            'en-US': 'Sets the level-2 drop-down menu flag.'
          }
        }
      ]
    }
  ]
}
