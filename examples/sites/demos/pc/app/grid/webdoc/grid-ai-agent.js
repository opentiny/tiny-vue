export default {
  column: '1',
  owner: '',
  demos: [
    {
      demoId: 'grid-ai-agent',
      name: { 'zh-CN': '表格智能体', 'en-US': 'grid agent' },
      desc: {
        'zh-CN': `表格智能体是表格组件面向 AI 领域的应用，提供了一个基于表格数据的智能体交互界面。用户可以通过自然语言与表格进行交互，智能体会根据表格内容和用户输入执行操作。<br>
        目前表格智能体支持的操作包括：<br>
        - 查询表格数据：用户可以输入自然语言查询表格中的数据，智能体会解析查询并返回结果，以及根据结果执行后续的操作。<br>
        - 滚动到指定行：用户可以通过自然语言指令，将表格滚动到指定位置。<br>    
        - 选中表格数据：用户可以通过自然语言指令，选中表格数据。<br>    
        - 选中全部数据：用户可以通过自然语言指令，选中全部数据。<br>    

        通过属性 <code>tiny_mcp_config</code> 可以配置表格的业务意义以及传入<code>server</code>对象，详见示例。`,
        'en-US': ``
      },
      codeFiles: ['ai-agent/basic-usage.vue']
    }
  ],
  apis: [{ name: 'grid-ai-agent', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
