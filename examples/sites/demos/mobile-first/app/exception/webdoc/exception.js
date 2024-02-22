export default {
  column: '2',
  owner: '',
  demos: [{
      demoId: 'message',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['message.vue']
    },
    {
      demoId: 'page-empty',
      name: {
        'zh-CN': '页面级空态',
        'en-US': 'Page-level void'
      },
      desc: {
        'zh-CN': '<p>通过添加`page-empty`属性展示页面级空态，其中 type 类型有`pagenoperm`、 `pageweaknet`、 `pagenothing`、 `pageservererror`<br> 对应场景：<br>`pagenoperm` ：无访问权限<br>`pageweaknet` ：网络异常<br>`pagenothing` ：你访问的页面不存在<br>`pageservererror`：服务器异常 </p>',
        'en-US': '<p>The page-level empty state is displayed by adding the `page-empty` attribute. The type types include `pagenoperm`, `pageweaknet`, `pagenothing`, and `pageservererror`.<br>Scenario:<br>`pagenoperm`: no access permission<br>`pageweaknet`: network exception<br>`pagenothing`: The page you access does not exist<br>`pageservererror`: The server is abnormal</p>'
      },
      codeFiles: ['page-empty.vue']
    },
    {
      demoId: 'component-empty',
      name: {
        'zh-CN': '组件级空态',
        'en-US': 'Component-level empty state'
      },
      desc: {
        'zh-CN': '<p>通过添加`component-empty`属性展示组件级空态，其中 type 类型有`noperm、 nodata、 weaknet、noresult、 nonews`<br> 对应场景：<br>`noperm` ：无访问权限<br>`nodata` ：暂无数据<br>`weaknet` ：网络不给力<br>`noresult`：无相关搜索结果<br>`nonews`：暂无最新消息<br></p>',
        'en-US': '<p>Add the `component-empty` attribute to display the component-level empty state. The type type can be `noperm, nodata, weaknet, noresult, or nonews`<br>The corresponding scenario is as follows: <br>`noperm`: No access<br>`nodata`: no data<br>`weaknet`: network is not powerful<br>`noresult`: no related search results<br>`nonews`: no latest news<br></p>'
      },
      codeFiles: ['component-empty.vue']
    },
    {
      demoId: 'sub-message',
      name: {
        'zh-CN': '自定义二级标题内容',
        'en-US': 'User-defined level-2 title content'
      },
      desc: {
        'zh-CN': '<p>通过`sub-message`自定义二级标题</p>',
        'en-US': '<p>Customizing Level-2 Titles Using `sub-message`</p>'
      },
      codeFiles: ['sub-message.vue']
    },
    {
      demoId: 'button-text',
      name: {
        'zh-CN': '自定义按钮文本',
        'en-US': 'button-text'
      },
      desc: {
        'zh-CN': '<p>已去除`button-text`自定义按钮文本，直接可以通过插槽自定义</p>',
        'en-US': '<p>Customizing Level-2 Titles Using `sub-message`</p>'
      },
      codeFiles: ['button-text.vue']
    },
    {
      demoId: 'content-slot',
      name: {
        'zh-CN': 'content 插槽',
        'en-US': 'content-slot'
      },
      desc: {
        'zh-CN': '<p>通过命名插槽 `content`，自定义内容区</p>',
        'en-US': '<p>Customize the content area by naming the slot `content`</p>'
      },
      codeFiles: ['content-slot.vue']
    }
  ],
  apis: [{
    'name': 'Exception',
    'type': 'component',
    'props': [{
        'name': 'component-page',
        'type': 'Boolean',
        'defaultValue': '',
        'desc': {
          'zh-CN': '设置组件级空态',
          'en-US': 'Set component-level empty state'
        },
        'demoId': 'component-empty'
      },
      {
        'name': 'exception-class',
        'type': 'String',
        'defaultValue': '',
        'desc': {
          'zh-CN': '设置自定义类',
          'en-US': 'Setting Custom Classes'
        },
        'demoId': ''
      },
      {
        'name': 'page-empty ',
        'type': 'Boolean',
        'defaultValue': '',
        'desc': {
          'zh-CN': '设置页面级空态',
          'en-US': 'Set page-level empty status'
        },
        'demoId': 'page-empty'
      },
      {
        'name': 'sub-message',
        'type': 'String',
        'defaultValue': '',
        'desc': {
          'zh-CN': '设置二级标题',
          'en-US': 'Set Level-2 Title'
        },
        'demoId': 'sub-message'
      },
      {
        'name': 'type',
        'type': 'String',
        'defaultValue': '',
        'desc': {
          'zh-CN': '设置页面级空态类型。默认值为nodata',
          'en-US': 'Sets the page-level empty state type. The default value is nodata.'
        },
        'demoId': 'page-empty'
      }
    ],
    'slots': [{
        'name': 'content',
        'type': '',
        'defaultValue': '',
        'desc': {
          'zh-CN': '内容插槽。可以设置自定义展示内容',
          'en-US': 'Content slot. Custom display content can be set.'
        },
        'demoId': 'content-slot'
      },
      {
        'name': 'default',
        'type': '',
        'defaultValue': '',
        'desc': {
          'zh-CN': '默认插槽',
          'en-US': 'Default Slot'
        },
        'demoId': ''
      }
    ]
  }]
}