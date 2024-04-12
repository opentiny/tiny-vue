export default {
  column: '1',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      codeFiles: ['basic-usage.vue'],
      desc: {
        'zh-CN':
          '通过<code>Tab</code> 键增加子节点；<br/>' +
          '通过<code>Enter</code> 键增加同级节点；<br/>' +
          '通过<code>Delete</code> 键删除选中的单个或区域节点；<br/>' +
          '通过<code>Ctrl + C/V</code> 实现节点的复制粘贴；<br/>' +
          '通过鼠标滚轮＋ <code>Shift</code> 进行左右滚动；<br/>' +
          '通过鼠标滚轮进行上下滚动；也可以使用鼠标点击拖动移动节点。',
        'en-US':
          'Press <code>Tab</code> to add a subnode. <br/>' +
          'Press <code>Enter</code> to add a node of the same level. <br/>' +
          'Press <code>Delete</code> to delete the selected node or area node. <br/>' +
          'Copy and paste the node through <code>Ctrl + C/V</code>; <br/>' +
          'Scroll left and right with the mouse wheel + <code>Shift</code>; <br/>' +
          'Scroll up and down with the mouse wheel; You can also move nodes by clicking and dragging with the mouse.'
      }
    },
    {
      demoId: 'export-data',
      name: {
        'zh-CN': '数据处理',
        'en-US': 'Data Processing'
      },
      codeFiles: ['export-data.vue'],
      desc: {
        'zh-CN': '通过对实例的获取实现对数据的导出、导入、清空等功能。',
        'en-US': 'Export, import, and clear data by obtaining instances.'
      }
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      codeFiles: ['event.vue'],
      desc: {
        'zh-CN':
          '<code>create</code> 创建实例触发事件；<br/>' +
          '<code>operation</code> 节点重新计算触发事件；<br/>' +
          '<code>selectNode</code> 选中节点触发事件；<br/>' +
          '<code>selectNewNode</code> 新增节点触发事件；<br/>' +
          '<code>selectNodes</code> 选中多个节点触发事件；<br/>' +
          '<code>unselectNode</code> 取消选择节点触发事件；<br/>' +
          '<code>unselectNodes</code> 取消多个选择节点触发事件；<br/>' +
          '<code>expandNode</code> 展开节点触发事件；<br/>',
        'en-US':
          '<code>create</code> Create an instance to trigger an event;<br/>' +
          '<code>operation</code> The node recalculates the trigger event;<br/>' +
          '<code>selectNode</code> Select a node to trigger an event;<br/>' +
          '<code>selectNewNode</code> Add a node to trigger an event;<br/>' +
          '<code>selectNodes</code> Select multiple nodes to trigger events;<br/>' +
          '<code>unselectNode</code> Deselect a node to trigger an event;<br/>' +
          '<code>unselectNodes</code> Cancel triggering events for multiple selected nodes;<br/>' +
          '<code>expandNode</code> Expand the node to trigger an event;<br/>'
      }
    }
  ]
}
