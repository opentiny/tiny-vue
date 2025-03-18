export default {
  column: '1',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'base-basic-usage',
      name: {
        'zh-CN': '标签式',
        'en-US': 'Label'
      },
      desc: {
        'zh-CN': '通过 <code>tiny-grid-column</code> 标签配置表格列。',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['base/basic-usage.vue']
    },
    {
      demoId: 'base-basic-usage-conf',
      name: {
        'zh-CN': '配置式',
        'en-US': 'Profile'
      },
      desc: {
        'zh-CN': '通过 <code>columns</code> 属性描述表格列。',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['base/basic-usage-conf.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '支持标签式和配置式两种方式配置表格列，支持自定义表头和对齐方式。',
      cloud: {
        value: true
      },
      apis: ['tiny-grid-column', 'columns', 'header-align', 'align'],
      demos: ['base-basic-usage', 'base-basic-usage-conf', 'header-custom-grid-header', 'align-grid-align']
    },
    {
      id: 'edit',
      name: '编辑功能',
      support: {
        value: true
      },
      description: '支持单元格编辑和行编辑两种模式，可自定义编辑规则、校验规则和编辑器组件。',
      cloud: {
        value: true
      },
      apis: ['edit-config', 'edit-rules', 'editor', 'activeMethod'],
      demos: ['edit-editing', 'edit-custom-editing', 'edit-editor-is-valid-always', 'editor-custom-editor-select']
    },
    {
      id: 'filter',
      name: '过滤功能',
      support: {
        value: true
      },
      description: '支持默认过滤、动态过滤、服务端过滤、简化版过滤等多种过滤方式，可自定义过滤规则。',
      cloud: {
        value: true
      },
      apis: ['filter', 'remote-filter', 'inputFilter', 'enumable'],
      demos: ['filter-default-filter', 'filter-server-filter', 'filter-simple-filter', 'filter-advanced-filter']
    },
    {
      id: 'sort',
      name: '排序功能',
      support: {
        value: true
      },
      description: '支持默认排序、多字段组合排序、自定义排序和服务端排序，可配置排序方法和触发方式。',
      cloud: {
        value: true
      },
      apis: ['sortable', 'sort-method', 'remote-sort', 'sort-by'],
      demos: ['sort-default-sort', 'sort-server-sort', 'sort-combinations-sort', 'sort-custom-sort']
    },
    {
      id: 'expand',
      name: '展开功能',
      support: {
        value: true
      },
      description: '支持行展开、嵌套表格、展开行配置等功能，可自定义展开内容和展开规则。',
      cloud: {
        value: true
      },
      apis: ['expand-config', 'expand-method', 'showIcon'],
      demos: ['expand-has-row-expand', 'expand-nested-grid', 'expand-expand-config']
    },
    {
      id: 'custom',
      name: '个性化设置',
      support: {
        value: true
      },
      description: '支持列宽调整、列显示隐藏、列排序、列冻结等个性化设置，可保存到本地或服务端。',
      cloud: {
        value: true
      },
      apis: ['setting', 'resizable', 'sortable', 'fixed'],
      demos: ['custom-column-width', 'custom-column-visible-hidden', 'custom-column-sort', 'custom-column-fixed']
    },
    {
      id: 'footer',
      name: '表尾功能',
      support: {
        value: true
      },
      description: '支持表尾统计、配置式统计、表尾合并等功能，可自定义统计规则和显示方式。',
      cloud: {
        value: true
      },
      apis: ['footer-method', 'show-footer', 'summary-config'],
      demos: ['footer-footer-summation-empty', 'footer-configuration-summary', 'footer-footer-row-or-column-span']
    },
    {
      id: 'loading',
      name: '加载状态',
      support: {
        value: true
      },
      description: '支持自定义表格加载状态，可配置加载提示和加载组件。',
      cloud: {
        value: true
      },
      apis: ['loading', 'loadingComponent'],
      demos: ['loading-grid-custom-loading', 'loading-grid-loading-tip']
    },
    {
      id: 'span',
      name: '合并功能',
      support: {
        value: true
      },
      description: '支持行合并和列合并，可自定义合并规则和合并方法。',
      cloud: {
        value: true
      },
      apis: ['span-method', 'row-span'],
      demos: ['span-row-span', 'span-column-span']
    },
    {
      id: 'fixed',
      name: '固定功能',
      support: {
        value: true
      },
      description: '支持列固定、分组表头固定等功能，可配置固定位置和固定方式。',
      cloud: {
        value: true
      },
      apis: ['fixed', 'drop-config'],
      demos: ['fixed-left-fixed', 'fixed-right-fixed', 'fixed-multi-column-fixed', 'group-header-fixed']
    },
    {
      id: 'drag',
      name: '拖拽功能',
      support: {
        value: true
      },
      description: '支持行拖拽、列拖拽、多级表头拖拽等功能，可自定义拖拽规则和触发方式。',
      cloud: {
        value: true
      },
      apis: ['drop-config', 'trigger', 'filter'],
      demos: ['drag-row-drag', 'drag-column-drag', 'multi-header-drag']
    },
    {
      id: 'empty',
      name: '空数据',
      support: {
        value: true
      },
      description: '支持自定义空数据提示、默认提示和固定居中显示等功能。',
      cloud: {
        value: true
      },
      apis: ['render-empty', 'is-center-empty'],
      demos: ['empty-empty-data-tip', 'empty-empty-data-iscenter']
    }
  ]
}
