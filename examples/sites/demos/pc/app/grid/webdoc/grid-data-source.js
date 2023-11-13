export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'data-source-static-data',
      'name': { 'zh-CN': '绑定静态数据', 'en-US': 'Bound static data' },
      'desc': {
        'zh-CN': '<p>表格属性设置 <code>data</code> 开启双向绑定静态数据。</p>\n',
        'en-US': '<p>Table attribute setting<code>data</code>Enable bidirectional binding of static data. </p>\n'
      },
      'codeFiles': ['data-source/static-data.vue']
    },
    {
      'demoId': 'data-source-request-service',
      'name': { 'zh-CN': '开启服务请求', 'en-US': 'Open Service Request' },
      'desc': {
        'zh-CN':
          "<p>表格属性设置 fetch-data 开启服务请求。表格首次加载服务数据的时机默认是在 mounted 阶段，如果开了 prefetch 开关就在 created 阶段开始加载。可以设置 prefetch 为数组，指定后端排序字段参数，作为数据接口方法参数 sortBy。例如：[{ property: 'name', order: 'desc' }]，参考示例</p>\n",
        'en-US': '<p>Table attribute setting <code>fetch-data</code> enables the service request. </p>\n'
      },
      'codeFiles': ['data-source/request-service.vue']
    },
    {
      'demoId': 'data-source-auto-load',
      'name': { 'zh-CN': '自动加载数据', 'en-US': 'Automatically load data' },
      'desc': {
        'zh-CN':
          '<p>表格属性 <code>auto-load</code> 设置是否开启自动请求服务，配置 fetch-data 时有效。如下示例设置 <code>auto-load</code> 为 false 后，就不会自动加载数据。</p>\n',
        'en-US':
          '<p>Table attribute <code>auto-load</code> specifies whether to enable the automatic request service. This parameter is valid when fetch-data is configured. In the following example, if <code>auto-load</code> is set to false, data will not be automatically loaded. </p>\n'
      },
      'codeFiles': ['data-source/auto-load.vue']
    },
    {
      'demoId': 'data-source-columns',
      'name': { 'zh-CN': '表格列的配置信息', 'en-US': 'Table column configuration information' },
      'desc': {
        'zh-CN': '<p>通过表格属性 <code>columns</code> 设置表格列的配置信息</p>\n',
        'en-US':
          '<p>Set the configuration information of table columns through the table attribute <code>columns</code></p>\n'
      },
      'codeFiles': ['data-source/columns.vue']
    },
    {
      'demoId': 'data-source-column-asyn-rendering',
      'name': { 'zh-CN': '开启异步渲染', 'en-US': 'Enable asynchronous rendering' },
      'desc': {
        'zh-CN':
          '<p>异步渲染配置步骤：\n1、表格属性设置 <code>is-async-column</code> 开启异步渲染；\n2、表格列设置 <code>format-config</code> 开启该列数据异步渲染。</p>\n',
        'en-US':
          '<p>Asynchronous rendering configuration procedure:\n1. Set the table attribute <code>is-async-column</code> to enable asynchronous rendering. \n2. Set <code>format-config</code> to enable asynchronous rendering of data in the column. </p>\n'
      },
      'codeFiles': ['data-source/column-asyn-rendering.vue']
    },
    {
      'demoId': 'data-source-defslot-protochain-fetch',
      'name': { 'zh-CN': '插槽中使用复杂数据', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>兼容低版本的复杂数据访问（例如：row.attr1.attr2.attr3），参考示例。\n在列初始化过程中，使用 `skip` 插槽参数可以跳过默认插槽内容的执行，参考示例。\n在表格渲染过程中，没有提供这个参数，始终不会跳过默认插槽内容的执行。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['data-source/defslot-protochain-fetch.vue']
    }
  ],
  apis: [{ 'name': 'grid-data-source', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
