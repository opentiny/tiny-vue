export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'filter-default-filter',
      'name': { 'zh-CN': '过滤', 'en-US': 'Filter' },
      'desc': {
        'zh-CN': `
        <div class="tip custom-block">
          <p class="custom-block-title">filter 配置</p>
          <p>通过自定义的 <code>filter</code> 的作用域插槽自定义筛选的规则, 可以配置项：
            <ul>
              <li>multi 设置在显示枚举选项功能是否为多选, 仅在 enumable:true 下有效。</li>
              <li>enumable 设置在过滤面板中显示枚举选项。</li>
              <li>inputFilter 设置在过滤面板中显示输入筛选的项。</li>
              <li>defaultFilter 设置在过滤面板中显示默认的筛选条件。</li>
              <li>values 设置在显示枚举选项功能(enumable)下制定静态数据源。</li>
              <li>label 设置枚举数据的显示值属性字段， 默认'label'。</li>
              <li>value 设置枚举数据的实际值属性字段， 默认'value'。</li>
            </ul>
          </p>
        </div>
        `,
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title">filter Configuration</p>\n<p>Customize filtering rules based on the scope slot of the customized <code>filter</code>.\nConfigurable items:\nMulti specifies whether to select multiple enumeration options. This parameter is valid only when enable:true is selected. \nenumable Sets the display of enumeration options in the filter panel. \ninputFilter Sets the display of the input filtered items in the filter panel. \ndefaultFilter Sets the default filter criteria to be displayed in the filter panel. \nvalues specifies the static data source under the display enumeration option function (enumable). \nlabel Sets the display value attribute field of enumerated data. The default value is label. \nvalue Sets the actual value attribute field of the enumerated data. The default value is\'value\'. </p>\n</div>\n'
      },
      'codeFiles': ['filter/default-filter.vue']
    },
    {
      'demoId': 'filter-simple-filter',
      'name': { 'zh-CN': '简化版筛选-单选/多选菜单', 'en-US': 'Custom Parameter' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>layout</code> 设置需要使用的筛选项为<code>simple</code>,其中<code>layout</code>可选项包括<code>input,enum,default,extends,base,simple</code></p>\n',
        'en-US': '<p>Add custom parameters by <code>params</code></p>\n'
      },
      'codeFiles': ['filter/simple-filter.vue']
    },
    {
      'demoId': 'filter-simple-date-filter',
      'name': { 'zh-CN': '简化版筛选-时间日期菜单', 'en-US': 'Advanced Filter Settings' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>layout</code> 设置需要使用的筛选项为<code>simple</code>,其中<code>layout</code>可选项包括<code>input,enum,default,extends,base,simple</code></p>\n',
        'en-US':
          '<p>You can use <code>inputFilter</code> to configure custom components and conditions for the input filter area, and use <code>extends</code> to add a shortcut filter list</p>\n'
      },
      'codeFiles': ['filter/simple-date-filter.vue']
    },
    {
      'demoId': 'filter-simple-default-value-filter',
      'name': { 'zh-CN': '筛选面板默认选中值', 'en-US': 'Set Column Filtering Rules' },
      'desc': {
        'zh-CN': '<p>通过 <code>condition.value</code>可以配置筛选默认的选中值</p>\n',
        'en-US': '<p>Set the column filtering rule through the <code>filter</code> attribute</p>\n'
      },
      'codeFiles': ['filter/simple-default-value-filter.vue']
    },
    {
      'demoId': 'filter-advanced-filter',
      'name': { 'zh-CN': '过滤高级设置', 'en-US': 'Custom Filter' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>inputFilter</code> 可以给input过滤区域配置自定义组件与条件，通过 <code>extends</code> 可以增加快捷过滤列表</p>\n',
        'en-US': '<p>Set additional parameters through the <code>params</code> attribute</p>\n'
      },
      'codeFiles': ['filter/advanced-filter.vue']
    },
    {
      'demoId': 'filter-custom-filter',
      'name': { 'zh-CN': '设置列筛选规则', 'en-US': 'Server Filter' },
      'desc': {
        'zh-CN': '<p>通过 <code>filter</code> 属性设置列筛选规则</p>\n',
        'en-US':
          '<p>Configure remote-filter to enable server-side filtering. The server-side filtering invokes the fetch-data table for query. The filter-change event is triggered after the server-side filtering.\nThe <code>services/getGridMockData</code> service in this example needs to be implemented. The example simulates the data returned by a remote service \n</p>\n'
      },
      'codeFiles': ['filter/custom-filter.vue']
    },
    {
      'demoId': 'filter-server-filter',
      'name': { 'zh-CN': '服务端过滤', 'en-US': 'Enter the default filtering options.' },
      'desc': {
        'zh-CN':
          '<p>配置 remote-filter 开启服务端过滤，服务端过滤会调用表格 fetch-data 进行查询，filter-change 服务端过滤后触发的事件\n该示例中的 <code>services/getGridMockData</code> 服务需要自行实现，示例模拟了远程服务返回的数据\n</p>\n',
        'en-US':
          '<p>Set the default input filtering options through the <code>inputFilter.relation</code> attribute. \n Enter the built-in options for filtering: <code>equals</code>, <code>unequal</code>, <code>greaterThan</code>, <code>lessThan</code>, <code>equalToGreaterThan</code>, <code>equalToLessThan</code>, <code>contains</code>, <code>startwith</code>, <code>endwith</code>; Custom options can also be configured. \n When configuring custom options, you need to configure the filtering method through the <code>inputFilter.method</code> attribute. </p>\n'
      },
      'codeFiles': ['filter/server-filter.vue']
    },
    {
      'demoId': 'filter-default-relation',
      'name': { 'zh-CN': '输入过滤的默认选项', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>通过属性 <code>inputFilter.relation</code> 配置输入过滤的默认选项。\n输入过滤的内置选项：<code>equals</code>，<code>unequal</code>，<code>greaterThan</code>，<code>lessThan</code>，<code>equalToGreaterThan</code>，<code>equalToLessThan</code>，<code>contains</code>，<code>startwith</code>，<code>endwith</code>；也可以配置自定义选项。\n配置自定义选项的同时要配置过滤方法，通过属性 <code>inputFilter.method</code> 配置。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['filter/default-relation.vue']
    }
  ],
  apis: [{ 'name': 'grid-filter', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
