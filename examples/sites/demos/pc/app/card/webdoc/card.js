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
      demoId: 'card-type',
      name: {
        'zh-CN': '卡片类型',
        'en-US': 'Card Type'
      },
      desc: {
        'zh-CN': '<p>支持 <code>text image video logo</code> 4 种类型</p>',
        'en-US': '<p>Four types of <code>text image video logo</code> are supported.</p>'
      },
      codeFiles: ['card-type.vue']
    },
    {
      demoId: 'card-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN': '<p>支持<code>mini small medium large</code>4 个尺寸的卡片，默认值为：<code>medium</code></p>',
        'en-US': '<p>Supports <code>mini small medium large</code> cards of four sizes</p>'
      },
      codeFiles: ['card-size.vue']
    },
    {
      demoId: 'card-disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'disabled'
      },
      desc: {
        'zh-CN': '<p>通过设置属性<code>disabled</code>禁用卡片</p>',
        'en-US': '<p>Disable the card by setting the property <code>disabled</code></p>'
      },
      codeFiles: ['card-disabled.vue']
    },
    {
      demoId: 'card-group',
      name: {
        'zh-CN': '卡片组',
        'en-US': 'Card Group'
      },
      desc: {
        'zh-CN': '<p><code>card-group</code> 与 <code>card</code> 结合一起使用，提供响应式布局的能力</p>',
        'en-US':
          '<p><code>card-group</code> is used in conjunction with <code>card</code> to provide responsive layout capabilities</p>'
      },
      codeFiles: ['card-group.vue']
    },
    {
      demoId: 'card-status',
      name: {
        'zh-CN': '卡片状态',
        'en-US': 'Card Status'
      },
      desc: {
        'zh-CN': '<p>支持 <code>success warning alerting danger</code> 4 种状态</p>',
        'en-US': '<p>The following four states are supported: <code>success warning alerting danger</code></p>'
      },
      codeFiles: ['card-status.vue']
    },
    {
      demoId: 'check-type-checkbox',
      name: {
        'zh-CN': '单选&多选',
        'en-US': 'Single-choice & multiple-choice'
      },
      desc: {
        'zh-CN':
          '<p>通过属性<code>check-type="checkbox"</code>设置卡片多选，通过属性<code>check-type="radio"</code>设置卡片单选，需同时设置 label。注意：目前仅支持在 text 类型开启多选</p>',
        'en-US':
          '<p>Use the <code>check-type="checkbox"</code> attribute to set multiple card selections, and use the <code>check-type="radio"</code> attribute to set single card selections. You need to set labels at the same time. Note: Currently, multiple selections can be enabled only for the text type.</p>'
      },
      codeFiles: ['check-type-checkbox.vue']
    },
    {
      demoId: 'check-mode',
      name: {
        'zh-CN': '单选&多选（选择模式）',
        'en-US': 'Single-choice & multiple-choice(check-mode)'
      },
      desc: {
        'zh-CN':
          '<p>通过属性<code>check-mode</code>配置卡片的选中效果，搭配属性<code>check-type="checkbox"</code>设置卡片多选，通过属性<code>check-type="radio"</code>设置卡片单选，需同时设置 label。注意：目前仅支持在 text 类型开启多选</p>',
        'en-US':
          '<p>Use the <code>check-mode</code> configuring the Selection Effect of a Card, and use the <code>check-type="checkbox"</code> attribute to set multiple card selections, and use the <code>check-type="radio"</code> attribute to set single card selections. You need to set labels at the same time. Note: Currently, multiple selections can be enabled only for the text type.</p>'
      },
      codeFiles: ['check-mode.vue']
    },
    {
      demoId: 'card-select',
      name: {
        'zh-CN': '卡片选择（业务功能）',
        'en-US': 'Card Selection (Business Function)'
      },
      desc: {
        'zh-CN':
          '<p>通过属性<code>check-mode</code>配置卡片的选中效果，搭配属性<code>check-type="checkbox"</code>设置卡片多选，通过属性<code>check-type="radio"</code>设置卡片单选，需同时设置 label。注意：目前仅支持在 text 类型开启多选</p>',
        'en-US':
          '<p>Use the <code>check-mode</code> configuring the Selection Effect of a Card, and use the <code>check-type="checkbox"</code> attribute to set multiple card selections, and use the <code>check-type="radio"</code> attribute to set single card selections. You need to set labels at the same time. Note: Currently, multiple selections can be enabled only for the text type.</p>'
      },
      codeFiles: ['card-select.vue']
    },
    {
      demoId: 'custom-class',
      name: {
        'zh-CN': '自定义 class',
        'en-US': 'Customized class'
      },
      desc: {
        'zh-CN':
          '<p>属性<code>card-class</code>可自定义卡片的 class，属性<code>height</code>可设置卡片内容区的高度。</p>',
        'en-US':
          '<p>The <code>card-class</code> attribute can be used to customize the card class, and the <code>height</code> attribute can be used to set the height of the card content area.</p>'
      },
      codeFiles: ['custom-class.vue']
    },
    {
      demoId: 'operate-bar',
      name: {
        'zh-CN': '操作栏选项配置',
        'en-US': 'Operation Bar Option Configuration'
      },
      desc: {
        'zh-CN':
          '<p>通过<code>options</code>属性配置操作栏，支持按钮的禁用（<code>disabled: true</code>）与隐藏（<code>hidden: true</code>）</p>',
        'en-US':
          '<p>Use the <code>options</code> attribute to configure the operation bar. Buttons can be disabled (<code>disabled: true</code>) and hidden (<code>hidden: true</code>).</p>'
      },
      codeFiles: ['operate-bar.vue']
    },
    {
      demoId: 'card-events',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p><code>change</code> 事件：卡片勾选和取消勾选时触发;<code>icon-click</code> 事件：操作栏按钮点击时触发</p>',
        'en-US':
          '<p><code>change</code> event: triggered when a card is selected or deselected; <code>icon-click</code> event: triggered when a button in the operation bar is clicked</p>'
      },
      codeFiles: ['card-events.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'Slots'
      },
      desc: {
        'zh-CN': '<p>组件提供<code>default、title-left、title、title-right、footer</code>5 个插槽</p>',
        'en-US':
          '<p>The component provides five slots: <code>default, title-left,title、 title-right, and footer</code></p>'
      },
      codeFiles: ['slot.vue']
    }
  ]
}
