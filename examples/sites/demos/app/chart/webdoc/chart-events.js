export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'events-base',
      'name': { 'zh-CN': '事件监听', 'en-US': 'Event Listening' },
      'desc': {
        'zh-CN':
          '<p>绑定事件通过传递一个事件名称和对应回调函数的对象实现，回调函数内的参数是 echarts 模块，可以据此做相应的处理。</p>\n<h4>示例</h4>\n',
        'en-US':
          '<p>A binding event is implemented by transferring an event name and an object of the corresponding callback function. The parameter in the callback function is the echarts module, which can be processed accordingly. </p>\n<h4>Example</h4>\n'
      },
      'codeFiles': ['events/base.vue']
    }
  ],
  apis: [{ 'name': 'chart-events', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
