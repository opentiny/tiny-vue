export default {
  column: '1',
  owner: '',
  demos: [
    {
      demoId: 'filter-default-filter',
      name: { 'zh-CN': '基础筛选', 'en-US': 'Basic Filter' },
      desc: {
        'zh-CN': `
        <div class="tip custom-block">
          <p class="custom-block-title">filter 配置</p>
          <p>通过 <code>filter</code> 属性配置列筛选。配置项及对应关系：
            <ul>
              <li><strong>layout</strong> 筛选项显示顺序，默认 <code>input,enum,default,extends,base</code>。各取值与下方配置一一对应：<code>input</code>→inputFilter，<code>enum</code>→enumable，<code>default</code>→defaultFilter，<code>extends</code>→extends，<code>base</code>→清除选项，<code>simple</code>→simpleFilter（与其它 layout 项互斥）。</li>
              <li><strong>inputFilter</strong> 输入筛选。true 使用默认 input；传入对象可配置 <code>component</code>、<code>relations</code>、<code>relation</code>、<code>attrs</code>。</li>
              <li><strong>enumable</strong> 是否显示枚举选项。需 layout 包含 enum 或 simple 时生效。</li>
              <li><strong>multi</strong> 枚举是否为多选，仅在 enumable 为 true 时有效，默认 true。</li>
              <li><strong>values</strong> 枚举数据源。数组或 <code>(params)=>Promise</code>；不传则从表格数据自动提取。</li>
              <li><strong>label</strong> / <strong>value</strong> 枚举项显示值和实际值的字段名，默认 label、value。用于 values 数据结构的字段映射。</li>
              <li><strong>defaultFilter</strong> 是否显示空/非空筛选。需 layout 包含 default。</li>
              <li><strong>extends</strong> 扩展快捷筛选项数组，每项含 <code>label</code>、<code>value?</code>、<code>method</code>。需 layout 包含 extends。</li>
              <li><strong>condition</strong> 初始筛选条件，如 <code>condition.value</code> 设置默认选中、<code>condition.relation</code> 设置默认关系。</li>
              <li><strong>simpleFilter</strong> 简化版配置，需 <code>layout:'simple'</code>。含 <code>isDatetime</code>（日期范围）、<code>selectAll</code>（全选）、<code>datetimeConfig</code>（isDatetime 时必填）、<code>searchConfig</code>（非日期时可选，为枚举列表加搜索框）。</li>
              <li><strong>method</strong> 自定义筛选方法，用于 <code>#filter</code> 插槽完全自定义时实现筛选逻辑。</li>
              <li><strong>attrs</strong> 过滤面板根节点属性，如 id、class 等。</li>
              <li><strong>dataset</strong> 数据源配置，用于异步获取枚举选项。</li>
              <li><strong>filter-popper-options</strong> 设置过滤面板弹出层配置项。</li>
            </ul>
          </p>
        </div>
        `,
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title">filter Configuration</p><p>Configure column filtering via <code>filter</code> prop. Options and constraints: <code>layout</code> - filter order (default: input,enum,default,extends,base). Each value maps to: input→inputFilter, enum→enumable, default→defaultFilter, extends→extends, base→clear, simple→simpleFilter (exclusive). <code>inputFilter</code> - true or {component, relations, relation, attrs}. <code>enumable</code> - show enum options (requires enum or simple in layout). <code>multi</code> - enum multi-select when enumable. <code>values</code> - array or (params)=>Promise; auto-extract from table if omitted. <code>label</code>/<code>value</code> - field mapping for values. <code>defaultFilter</code> - empty/non-empty (requires default in layout). <code>extends</code> - shortcut items [{label, value?, method}]. <code>condition</code> - initial filter state. <code>simpleFilter</code> - for layout:simple (isDatetime, selectAll, datetimeConfig, searchConfig). <code>method</code> - custom filter logic for #filter slot. <code>attrs</code>, <code>dataset</code>.</p></div>'
      },
      codeFiles: ['filter/default-filter.vue']
    },
    {
      demoId: 'filter-layout-order-filter',
      name: { 'zh-CN': '自定义筛选项顺序', 'en-US': 'Custom Layout Order' },
      desc: {
        'zh-CN':
          '<p>通过 <code>layout</code> 自定义筛选项的显示顺序和组合。默认值为 <code>input,enum,default,extends,base</code>。可选项：<code>input</code> 输入筛选、<code>enum</code> 枚举选择、<code>default</code> 空/非空、<code>extends</code> 扩展项、<code>base</code> 清除操作、<code>simple</code> 简化版。</p>',
        'en-US':
          '<p>Use <code>layout</code> to customize the display order and combination of filter items. Default value is <code>input,enum,default,extends,base</code>. Options: <code>input</code>, <code>enum</code>, <code>default</code>, <code>extends</code>, <code>base</code>, <code>simple</code>.</p>'
      },
      codeFiles: ['filter/layout-order-filter.vue']
    },
    {
      demoId: 'filter-label-value-filter',
      name: { 'zh-CN': 'label/value 字段映射', 'en-US': 'Label/Value Field Mapping' },
      desc: {
        'zh-CN':
          '<p>通过 <code>label</code> 和 <code>value</code> 配置枚举数据的显示值和实际值字段，适配后端返回的 code/name 等不同字段结构。默认分别为 <code>label</code> 和 <code>value</code>。</p>',
        'en-US':
          '<p>Use <code>label</code> and <code>value</code> to configure the display and actual value fields for enum data, adapting to different field structures such as code/name from backend. Defaults are <code>label</code> and <code>value</code>.</p>'
      },
      codeFiles: ['filter/filter-label-value.vue']
    },
    {
      demoId: 'filter-dynamic-filter',
      name: { 'zh-CN': '动态改变筛选项', 'en-US': 'Dynamic Filter Options' },
      desc: {
        'zh-CN':
          '<p>通过修改 <code>filter.values</code> 数组或在 <code>values</code> 中传入函数，可动态改变或异步加载筛选项。</p>',
        'en-US':
          '<p>Dynamically update or async load filter options by mutating <code>filter.values</code> or passing a function that returns a Promise.</p>'
      },
      codeFiles: ['filter/dynamic-filter.vue']
    },
    {
      demoId: 'filter-simple-filter',
      name: { 'zh-CN': '简化版筛选 - 单选/多选菜单', 'en-US': 'Simple Filter - Single/Multi Select' },
      desc: {
        'zh-CN':
          '<p>设置 <code>layout: "simple"</code> 启用简化版筛选。支持 <code>selectAll</code> 全选、<code>searchConfig</code> 搜索框。适用于管理侧规范的紧凑筛选面板。</p>',
        'en-US':
          '<p>Set <code>layout: "simple"</code> for compact filter panel. Supports <code>selectAll</code> and <code>searchConfig</code> for search box in enum list.</p>'
      },
      codeFiles: ['filter/simple-filter.vue']
    },
    {
      demoId: 'filter-simple-date-filter',
      name: { 'zh-CN': '简化版筛选 - 日期范围', 'en-US': 'Simple Filter - Date Range' },
      desc: {
        'zh-CN':
          '<p>设置 <code>layout: "simple"</code> 且 <code>simpleFilter.isDatetime: true</code>，使用 <code>datetimeConfig</code> 配置日期范围选择器，支持 min、max、startDate、endDate 等。</p>',
        'en-US':
          '<p>Set <code>layout: "simple"</code> with <code>simpleFilter.isDatetime: true</code>. Configure date range picker via <code>datetimeConfig</code> (min, max, startDate, endDate).</p>'
      },
      codeFiles: ['filter/simple-date-filter.vue']
    },
    {
      demoId: 'filter-simple-default-value-filter',
      name: { 'zh-CN': '筛选默认选中值', 'en-US': 'Filter Default Selected Value' },
      desc: {
        'zh-CN': '<p>通过 <code>filter.condition.value</code> 配置筛选的默认选中值，表格初始化时即应用该筛选条件。</p>',
        'en-US':
          '<p>Set default selected filter values via <code>filter.condition.value</code>. The filter is applied on table init.</p>'
      },
      codeFiles: ['filter/simple-default-value-filter.vue']
    },
    {
      demoId: 'filter-input-custom-component',
      name: { 'zh-CN': '自定义输入组件', 'en-US': 'Custom Input Component' },
      desc: {
        'zh-CN':
          '<p>通过 <code>inputFilter.component</code> 传入自定义组件，实现非标准输入（如范围输入：左最小值、右最大值）。自定义组件需支持 <code>modelValue</code> + <code>update:modelValue</code>，或配置 <code>model</code> 指定字段名。配合 <code>relations[].method</code> 实现自定义筛选逻辑。</p>',
        'en-US':
          '<p>Pass custom component via <code>inputFilter.component</code> for non-standard input (e.g. range: min + max). Component must support <code>modelValue</code> + <code>update:modelValue</code>, or configure <code>model</code>. Use <code>relations[].method</code> for custom filter logic.</p>'
      },
      codeFiles: ['filter/input-filter-custom-component.vue']
    },
    {
      demoId: 'filter-advanced-filter',
      name: { 'zh-CN': '高级筛选', 'en-US': 'Advanced Filter' },
      desc: {
        'zh-CN':
          '<p>通过 <code>inputFilter.component</code> 配置自定义输入组件（如 TinyNumeric、TinyDatePicker）；<code>inputFilter.relations</code> 自定义筛选关系；<code>extends</code> 添加快捷筛选项。</p>',
        'en-US':
          '<p>Use <code>inputFilter.component</code> for custom input (e.g. TinyNumeric, TinyDatePicker); <code>inputFilter.relations</code> for filter relations; <code>extends</code> for shortcut filter items.</p>'
      },
      codeFiles: ['filter/advanced-filter.vue']
    },
    {
      demoId: 'filter-custom-filter',
      name: { 'zh-CN': '自定义筛选插槽', 'en-US': 'Custom Filter Slot' },
      desc: {
        'zh-CN':
          '<p>通过 <code>#filter</code> 插槽完全自定义筛选面板 UI。插槽参数提供 <code>context</code>，可调用 <code>commitFilter</code>、<code>resetFilter</code>、<code>clearFilter</code> 等方法。需配合 <code>filter.method</code> 实现筛选逻辑。</p>',
        'en-US':
          '<p>Fully customize filter panel via <code>#filter</code> slot. Slot provides <code>context</code> with <code>commitFilter</code>, <code>resetFilter</code>, <code>clearFilter</code>. Configure <code>filter.method</code> for filter logic.</p>'
      },
      codeFiles: ['filter/custom-filter.vue']
    },
    {
      demoId: 'filter-server-filter',
      name: { 'zh-CN': '服务端过滤', 'en-US': 'Server-side Filtering' },
      desc: {
        'zh-CN':
          '<p>配置 <code>remote-filter</code> 开启服务端过滤。筛选时会调用表格 <code>fetch-data</code> 的 api，并将 filters 参数传入，筛选完成后触发 <code>filter-change</code> 事件。</p>',
        'en-US':
          '<p>Enable server-side filtering with <code>remote-filter</code>. Filter triggers <code>fetch-data</code> api with filters param, then fires <code>filter-change</code> event.</p>'
      },
      codeFiles: ['filter/server-filter.vue']
    },
    {
      demoId: 'server-filter-default',
      name: { 'zh-CN': '服务端过滤默认选中值', 'en-US': 'Server Filter Default Value' },
      desc: {
        'zh-CN':
          '<p>服务端过滤下，若需设置默认选中值，需将 <code>auto-load</code> 设为 false，在列初始化后手动调用 <code>handleFetch</code>。否则 <code>handleFetch</code> 在列初始化前执行，无法获取筛选参数。</p>',
        'en-US':
          '<p>For server filter with default value, set <code>auto-load</code> to false and manually call <code>handleFetch</code> after init. Otherwise handleFetch runs before columns ready and cannot get filter params.</p>'
      },
      codeFiles: ['filter/server-filter-default.vue']
    },
    {
      demoId: 'filter-default-relation',
      name: { 'zh-CN': '输入过滤默认选项', 'en-US': 'Input Filter Default Relation' },
      desc: {
        'zh-CN':
          '<p>通过 <code>inputFilter.relation</code> 配置输入筛选的默认关系。内置值：<code>equals</code>、<code>contains</code>、<code>startwith</code>、<code>greaterThan</code> 等。自定义 <code>relations</code> 时，可通过 <code>method</code> 配置筛选逻辑。</p>',
        'en-US':
          '<p>Set default relation via <code>inputFilter.relation</code>. Built-in: equals, contains, startwith, greaterThan, etc. For custom relations, configure <code>method</code> for filter logic.</p>'
      },
      codeFiles: ['filter/default-relation.vue']
    },
    {
      demoId: 'filter-request-service-reload-filter',
      name: { 'zh-CN': '重载时保持筛选', 'en-US': 'Keep Filter on Reload' },
      desc: {
        'zh-CN':
          '<p>调用 <code>handleFetch("reload")</code> 时默认会清除筛选。设置 <code>fetchData.reloadConfig.filter: true</code> 可在重载后保留当前筛选条件。</p>',
        'en-US':
          '<p>By default, <code>handleFetch("reload")</code> clears filters. Set <code>fetchData.reloadConfig.filter: true</code> to preserve filters on reload.</p>'
      },
      codeFiles: ['filter/request-service-reload-filter.vue']
    }
  ],
  apis: [{ name: 'grid-filter', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
