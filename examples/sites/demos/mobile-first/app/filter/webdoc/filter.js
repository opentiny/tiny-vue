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
        'zh-CN':
          '<p>\n          <em>注意</em><br>\n          1、<code>multiple</code> 为 true 时初始第一个过滤项为 <code>全部</code>，指全量数据未做过滤时的状态，并不表示<code>全部过滤条件都选上</code>；<br>\n          2、当选中任意过滤条件时，<code>全部</code>选项自动去勾选。<br><br>\n          <em>data 属性说明</em><br>\n          <code>type</code>：类型可选值有：标签、列表 (tag | list)；<br>\n          <code>multiple</code>：是否开启多选，默认 false；<br>\n          <code>placeholder</code>：当没有选中项时显示的占位文本；<br>\n          <code>label</code>：面板的过滤组的说明文本；<br>\n          <code>options</code>：面板的过滤组数据；<br>\n          <code>panel-class</code>：面板的自定义样式，设置该属性会让面板取消<code>max-height: 70%</code> 的最高高度限制。<br><br>\n          过滤类型 <code>type</code> 包括 <code>标签、列表 (tag | list)</code>，通过 <code>multiple</code> 开启多选功能\n          </p>',
        'en-US':
          '<p><em>Note</em><br>\n        1. When <code>multiple</code> is set to true, the initial first filter item is <code>All</code>, indicating that full data is not filtered. It does not mean that <code>all filter criteria are selected.<br>\n        2. When any filter condition is selected, <code>All</code> is automatically deselected. <br><br>\n        <em>data Attribute Description</em><br>\n        <code>type</code>: type. The options are tag and tag | list. <br>\n        <code>multiple</code>: indicates whether to enable multiple choices. The default value is false. <br>\n        <code>placeholder</code>: placeholder text displayed when no item is selected.<br>\n        <code>label</code>: description text of the filter group on the panel.<br>\n        <code>options</code>: Filter group data of the panel.<br>\n        <code>panel-class</code>: custom style of a panel. Setting this attribute will cancel the maximum height limit of <code>max-height: 70%</code>. <br><br>\n        Filtering type <code>type</code> includes <code> tag and tag | list</code>. You can use <code>multiple</code> to enable the multi-choice function.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'manual',
      name: {
        'zh-CN': '过滤选项自定义1',
        'en-US': 'Filter Option Custom 1'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>manual</code> 属性开启过滤选项自定义功能。调用 <code>SelectMobile</code> 组件的示例</p>',
        'en-US':
          '<p>Use the <code>manual</code> attribute to enable the filtering option customization function. Example of invoking the <code>SelectMobile</code> component</p>'
      },
      codeFiles: ['manual.vue']
    },
    {
      demoId: 'manual2',
      name: {
        'zh-CN': '过滤选项自定义2',
        'en-US': 'Filter Option Custom 2'
      },
      desc: {
        'zh-CN': '<p>通过 <code>manual</code> 属性开启过滤选项自定义功能。调用 <code>SelectView</code> 组件的</p>',
        'en-US':
          '<p>Use the <code>manual</code> attribute to enable the filtering option customization function. Invoke the <code>SelectView</code> component</p>'
      },
      codeFiles: ['manual2.vue']
    },
    {
      demoId: 'column-num',
      name: {
        'zh-CN': '面板每行标签数',
        'en-US': 'Number of labels per row on the panel'
      },
      desc: {
        'zh-CN': '<p>通过 <code>column-num</code> 属性设置面板每行标签数，默认值为 3。</p>',
        'en-US':
          '<p>The <code>column-num</code> attribute is used to set the number of labels in each row of the panel. The default value is 3.</p>'
      },
      codeFiles: ['column-num.vue']
    },
    {
      demoId: 'filter-group',
      name: {
        'zh-CN': '过滤组',
        'en-US': 'Filtering group'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>filter-group</code> 属性开启过滤组功能，<code>filter-value</code> 绑定过滤组的值。过滤组只支持 <code>type=tag</code> 类型，通过 <code>multiple</code> 开启多选功能。</p>',
        'en-US':
          '<p><p>The <code>filter-group</code> attribute is used to enable the filtering group function, and <code>filter-value</code> is bound to the value of the filtering group. The filter group supports only the <code>type=tag</code> type. You can run the <code>multiple</code> command to enable the multi-select function.</p>'
      },
      codeFiles: ['filter-group.vue']
    },
    {
      demoId: 'enumeration',
      name: {
        'zh-CN': '枚举单选',
        'en-US': 'Enumerated single-choice'
      },
      desc: {
        'zh-CN':
          "<p>设置过滤类型 <code>type: 'list'</code> 时，当前数据为枚举单选，通过 <code>showAll: true</code> 显示 <code>全部</code> 选择项。</p>",
        'en-US':
          "<p>When the filter type <code>type:'list'</code> is set, the current data is an enumerated single option. <code>showAll: true</code> is used to display <code>all</code> options.</p>"
      },
      codeFiles: ['enumeration.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'slot'
      },
      desc: {
        'zh-CN': '<p>筛选图标 <code>icon</code> 插槽和面板底部按钮组 <code>footer</code> 插槽。<p>',
        'en-US': '<p>Filter icon <code>icon</code> slots and panel bottom button group <code>footer</code> slots.</p>'
      },
      codeFiles: ['slot.vue']
    }
  ]
}
