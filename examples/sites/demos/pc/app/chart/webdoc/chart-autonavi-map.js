export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'amap-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。 高德地图需要外网访问权限才能正常使用\n</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. AutoNavi Map requires the access permission from the external network. \n</p>\n'
      },
      'codeFiles': ['amap/base.vue']
    }
  ],
  apis: [{ 'name': 'chart-autonavi-map', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
