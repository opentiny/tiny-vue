export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'renderer-inner-renderer',
      'name': { 'zh-CN': '内置渲染器', 'en-US': 'Built-in Renderer' },
      'desc': {
        'zh-CN':
          '<p>内置渲染器设置当前表格列的显示获取类型。\n在 <code>grid-column</code> 列配置 <code>format-text</code> 对象，配合 <code>format-config</code> 可以控制数据格式。</p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> <code>format-text</code> 的可取值包括：</p>\n<ul>\n<li><code>integer</code>：显示成整数。</li>\n<li><code>number</code>：显示成小数。</li>\n<li><code>money</code>：显示成钱数。</li>\n<li>rate：显示成百分比的数据。</li>\n<li>filesize：显示成文件大小的数据。</li>\n<li>boole：显示成对号或者叉号的图标。</li>\n<li>date：显示成年月日。</li>\n<li>dateTime：显示成年月日时分。</li>\n<li>longDateTime：显示成年月日时分秒。</li>\n<li>time：显示成时分。</li>\n<li>longTime：显示成时分秒。</li>\n<li>yearMonth：显示成年月。</li>\n<li>enum：通过数据的值，查询出要显示的文本。</li>\n<li>ellipsis：显示成省略的内容，鼠标移到该单元格上，显示完整内容的提示信息。需要同时配置 format 的 len 属性。</li>\n</ul>\n</div>\n',
        'en-US':
          '<p>The built-in renderer sets the display obtaining type of the current table column. \n Configure the <code>format-text</code> object in the <code>grid-column</code> column to control the data format. The options of </p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> <code>format-text</code> are as follows: </p>\n<ul>\n<li><code>integer</code>: displayed as an integer. </li>\n<li><code>number</code>: The value is displayed as a decimal. </li>\n<li><code>money</code>: displays the amount of money. </li>\n<li>rate: The data is displayed as a percentage. </li>\n<li>filesize: indicates the file size. </li>\n<li>boole: displays the icon with a pair or cross. </li>\n<li>date: indicates the year, month, and day. </li>\n<li>dateTime: indicates the year, month, day, hour, and minute. </li>\n<li>longDateTime: year, month, day, hour, minute, and second. </li>\n<li>time: time and hour. </li>\n<li>longTime: hour, minute, and second. </li>\n<li>yearMonth: displays the adult month. </li>\n<li>enum: Queries the text to be displayed based on the data value. </li>\n<li>ellipsis: displays the omitted content. When you move the cursor to the cell, the complete content is displayed. The len attribute of format must also be configured. </li>\n</ul>\n</div>\n'
      },
      'codeFiles': ['renderer/inner-renderer.vue']
    },
    {
      'demoId': 'renderer-custom-renderer',
      'name': { 'zh-CN': '自定义渲染器', 'en-US': 'Custom Renderer' },
      'desc': {
        'zh-CN':
          '<p>自定义渲染器可以自定义渲染单元格，也可渲染一个 <code>vue 组件</code>。在 <code>grid-column</code> 列配置 <code>renderer</code>，支持方法和对象配置。具体参考下面示例。</p>\n',
        'en-US':
          '<p>The custom renderer can customize the rendering of cells or a <code>vue component</code>. Configure <code>renderer</code> in the <code>grid-column</code> column to support method and object configuration. For details, see the following example. </p>\n'
      },
      'codeFiles': ['renderer/custom-renderer.vue']
    },
    {
      'demoId': 'render-async-colunm-render',
      'name': { 'zh-CN': '列异步数据渲染', 'en-US': 'Column Asynchronous Data Rendering' },
      'desc': {
        'zh-CN':
          '<p>将列<code>format-config</code>的 <code>async</code>属性配置为<code>true</code>后，支持动态修改其<code>data</code>数据自动渲染。 这种整列异步渲染一般将<code>type</code>设置为<code>enum</code>，通过<code>value</code>与<code>label</code>可以配置渲染单元格的映射。</p>\n',
        'en-US':
          '<p>After the <code>async</code> attribute of the <code>format-config</code> column is set to <code>true</code>, the <code>data</code> data can be dynamically modified for automatic rendering. Generally, <code>type</code> is set to <code>enum</code>, and <code>value</code> and <code>label</code> can be used to configure the mapping of rendering cells. </p>\n'
      },
      'codeFiles': ['renderer/async-colunm-render.vue']
    }
  ],
  apis: [{ 'name': 'grid-renderer', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
