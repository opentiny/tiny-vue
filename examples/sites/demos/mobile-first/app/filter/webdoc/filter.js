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
        'zh-CN': `<p>
          <em>注意</em><br>
1、<code>multiple</code> 为 true 时初始第一个过滤项为 <code>全部</code>，指全量数据未做过滤时的状态，并不表示<code>全部过滤条件都选上</code>；<br>
2、当选中任意过滤条件时，<code>全部</code>选项自动去勾选。<br><br>

<em>data 属性说明</em><br>
<code>type</code>：类型可选值有：标签、列表 (tag | list)；<br>
<code>multiple</code>：是否开启多选，默认 false；<br>
<code>placeholder</code>：当没有选中项时显示的占位文本；<br>
<code>label</code>：面板的过滤组的说明文本；<br>
<code>options</code>：面板的过滤组数据；<br>
<code>panel-class</code>：面板的自定义样式，设置该属性会让面板取消<code>max-height: 70%</code> 的最高高度限制。<br><br>

过滤类型 <code>type</code> 包括 <code>标签、列表 (tag | list)</code>，通过 <code>multiple</code> 开启多选功能
          </p>`,
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'manual',
      name: {
        'zh-CN': '过滤选项自定义1',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>manual</code> 属性开启过滤选项自定义功能。调用 <code>SelectMobile</code> 组件的示例</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['manual.vue']
    },
    {
      demoId: 'manual2',
      name: {
        'zh-CN': '过滤选项自定义2',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>通过 <code>manual</code> 属性开启过滤选项自定义功能。调用 <code>SelectView</code> 组件的</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['manual2.vue']
    },
    {
      demoId: 'column-num',
      name: {
        'zh-CN': '面板每行标签数',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>通过 <code>column-num</code> 属性设置面板每行标签数，默认值为 3。</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['column-num.vue']
    },
    {
      demoId: 'filter-group',
      name: {
        'zh-CN': '过滤组',
        'en-US': '过滤组'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>filter-group</code> 属性开启过滤组功能，<code>filter-value</code> 绑定过滤组的值。过滤组只支持 <code>type=tag</code> 类型，通过 <code>multiple</code> 开启多选功能。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['filter-group.vue']
    },
    {
      demoId: 'enumeration',
      name: {
        'zh-CN': '枚举单选',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': `<p>设置过滤类型 <code>type: 'list'</code> 时，当前数据为枚举单选，通过 <code>showAll: true</code> 显示 <code>全部</code> 选择项。<p>`,
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['enumeration.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '枚举单选',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>筛选图标 <code>icon</code> 插槽和面板底部按钮组 <code>footer</code> 插槽。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot.vue']
    }
  ],
  apis: []
}
