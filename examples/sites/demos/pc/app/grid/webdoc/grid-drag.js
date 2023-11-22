export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'drag-row-drag',
      'name': { 'zh-CN': '行拖拽', 'en-US': 'Drag Row' },
      'desc': {
        'zh-CN':
          '<p>通过设置 <code>drop-config</code> 的 <code>row</code> 属性控制行拖拽，默认为开启行拖拽，行拖拽事件有 <code>@row-drop-start</code>、<code>row-drop-move</code>、<code>row-drop-end</code>。</p>\n',
        'en-US':
          '<p>You can set the <code>row</code> attribute of <code>drop-config</code> to control row dragging. By default, row dragging is enabled. Row drag events include <code>@row-drop-start</code>, <code>row-drop-move</code>, and <code>row-drop-end</code>. </p>\n'
      },
      'codeFiles': ['drag/row-drag.vue']
    },
    {
      'demoId': 'drag-row-drag-ctrl',
      'name': { 'zh-CN': '拖拽控制', 'en-US': 'Drag Control' },
      'desc': {
        'zh-CN':
          '<p>可以通过设置 <code>drop-config</code> 的 <code>onBeforeMove</code> 事件控制行拖动，也可以配置<code>drop-config</code> 的 <code>filter</code> 与自定义样式结合使用来限制拖动。</p>\n',
        'en-US':
          '<p>You can set the <code>onBeforeMove</code> event of <code>drop-config</code> to control row dragging. You can also configure <code>filter</code> of <code>drop-config</code> in conjunction with a custom style to restrict drag</p>\n'
      },
      'codeFiles': ['drag/row-drag-ctrl.vue']
    },
    {
      'demoId': 'drag-column-drag',
      'name': { 'zh-CN': '列拖拽', 'en-US': 'Drag Column' },
      'desc': {
        'zh-CN':
          '<p>通过设置 <code>drop-config</code> 的 <code>column</code> 属性控制列拖拽，默认为开启列拖拽，列拖拽事件有 <code>@column-drop-start</code>、<code>column-drop-move</code>、<code>column-drop-end</code>。</p>\n',
        'en-US':
          '<p>You can set the <code>column</code> attribute of <code>drop-config</code> to control column dragging. Column dragging is enabled by default. Column drag events include <code>@column-drop-start</code>, <code>column-drop-move</code>, and <code>column-drop-end</code>. </p>\n'
      },
      'codeFiles': ['drag/column-drag.vue']
    }
  ],
  apis: [{ 'name': 'grid-drag', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
