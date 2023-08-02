const routerArr = [
  {
    zh: '使用指南',
    en: 'Usage Guidelines',
    type: 'groupCount',
    children: [
      {
        en: 'Changelog',
        zh: '更新日志',
        enSuffix: false,
        path: '/changelog'
      },
      {
        en: 'envpreparation',
        zh: '环境准备',
        enSuffix: false,
        path: '/envpreparation'
      },
      {
        en: 'installation',
        zh: '安装',
        enSuffix: false,
        path: '/installation'
      },
      {
        en: 'importComponents',
        zh: '引入组件',
        enSuffix: false,
        path: '/import-components'
      },
      {
        en: 'adapter',
        zh: '后端适配器',
        enSuffix: false,
        path: '/adapter'
      },
      {
        en: 'developDemo',
        zh: '开发示例',
        enSuffix: false,
        path: '/develop-demo'
      },
      {
        en: 'tinyStage',
        zh: '创建项目',
        enSuffix: false,
        path: '/tiny-stage'
      },
      {
        en: 'i18n',
        zh: '国际化',
        enSuffix: false,
        path: '/i18n'
      },
      {
        en: 'theme',
        zh: '主题配置',
        enSuffix: false,
        path: '/theme'
      },
      {
        en: 'formValid',
        zh: '表单校验配置',
        enSuffix: false,
        path: '/form-valid'
      }
    ]
  },
  {
    zh: '框架风格',
    en: 'Frame Style',
    type: 'groupCount',
    children: [
      {
        en: 'Color',
        zh: '色彩',
        enSuffix: true,
        path: '/color'
      },
      {
        en: 'Container',
        zh: '版型',
        enSuffix: true,
        path: '/container'
      },
      {
        en: 'Font',
        zh: '字体',
        enSuffix: true,
        path: '/font'
      },
      {
        en: 'Icon',
        zh: '图标',
        enSuffix: true,
        path: '/icon'
      },
      {
        en: 'Layout',
        zh: '布局',
        enSuffix: true,
        path: '/layout'
      }
    ]
  },
  {
    zh: '导航组件',
    en: 'Navigation Components',
    type: 'groupCount',
    children: [
      {
        en: 'Anchor',
        zh: '锚点',
        enSuffix: true,
        path: '/anchor'
      },
      {
        en: 'Guide',
        zh: '引导',
        enSuffix: true,
        path: '/guide'
      },
      {
        en: 'Breadcrumb',
        zh: '面包屑',
        enSuffix: true,
        path: '/breadcrumb'
      },
      {
        en: 'FallMenu',
        zh: '瀑布菜单',
        enSuffix: true,
        path: '/fall-menu'
      },
      {
        en: 'Floatbar',
        zh: '浮动块',
        enSuffix: true,
        path: '/floatbar'
      },
      {
        en: 'ToggleMenu',
        zh: '收缩菜单',
        enSuffix: true,
        path: '/toggle-menu'
      },
      {
        en: 'LinkMenu',
        zh: '收藏夹菜单',
        enSuffix: true,
        path: '/link-menu'
      },
      {
        en: 'Milestone',
        zh: '里程碑',
        enSuffix: true,
        path: '/milestone'
      },
      {
        en: 'NavMenu',
        zh: '导航菜单',
        enSuffix: true,
        path: '/nav-menu'
      },
      {
        en: 'Steps',
        zh: '步骤条',
        enSuffix: true,
        path: '/steps'
      },
      {
        en: 'Tabs',
        zh: '标签页',
        enSuffix: true,
        path: '/tabs'
      },
      {
        en: 'TimeLine',
        zh: '时间线',
        enSuffix: true,
        path: '/time-line'
      },
      {
        en: 'TreeMenu',
        zh: '树型菜单',
        enSuffix: true,
        path: '/tree-menu'
      },
      {
        en: 'Wizard',
        zh: '流程图',
        enSuffix: true,
        path: '/wizard'
      },
      {
        en: 'Dropdown',
        zh: '下拉菜单',
        enSuffix: true,
        path: '/dropdown'
      },
      {
        en: 'ActionMenu',
        zh: '菜单按钮',
        enSuffix: true,
        path: '/action-menu'
      }
    ]
  },
  {
    zh: '容器组件',
    en: 'Container Components',
    type: 'groupCount',
    children: [
      {
        en: 'Carousel',
        zh: '走马灯',
        enSuffix: true,
        path: '/carousel'
      },
      {
        en: 'DialogBox',
        zh: '对话框',
        enSuffix: true,
        path: '/dialog-box'
      },
      {
        en: 'Drawer',
        zh: '抽屉',
        enSuffix: true,
        path: '/drawer'
      },
      {
        en: 'Collapse',
        zh: '折叠面板',
        enSuffix: true,
        path: '/collapse'
      },
      {
        en: 'Split',
        zh: '面板分割',
        enSuffix: true,
        path: '/split'
      }
    ]
  },
  {
    zh: '表单组件',
    en: 'Form Components',
    type: 'groupCount',
    children: [
      {
        en: 'Autocomplete',
        zh: '自动完成',
        enSuffix: true,
        path: '/autocomplete'
      },
      {
        en: 'Button',
        zh: '按钮',
        enSuffix: true,
        path: '/button'
      },
      {
        en: 'ButtonGroup',
        zh: '按钮组',
        enSuffix: true,
        path: '/button-group'
      },
      {
        en: 'Cascader',
        zh: '级联选择器',
        enSuffix: true,
        path: '/cascader'
      },
      {
        en: 'CascaderPanel',
        zh: '级联面板',
        enSuffix: true,
        path: '/cascader-panel'
      },
      {
        en: 'Checkbox',
        zh: '复选框',
        enSuffix: true,
        path: '/checkbox'
      },
      {
        en: 'DatePicker',
        zh: '日期选择器',
        enSuffix: true,
        path: '/date-picker'
      },
      {
        en: 'DropTimes',
        zh: '下拉时间',
        enSuffix: true,
        path: '/drop-times'
      },
      {
        en: 'FileUpload',
        zh: '文件上传',
        enSuffix: true,
        path: '/file-upload'
      },
      {
        en: 'Form',
        zh: '表单',
        enSuffix: true,
        path: '/form'
      },
      {
        en: 'Input',
        zh: '输入框',
        enSuffix: true,
        path: '/input'
      },
      {
        en: 'IpAddress',
        zh: '输入框',
        enSuffix: true,
        path: '/ip-address'
      },
      {
        en: 'Link',
        zh: '文字链接',
        enSuffix: true,
        path: '/link'
      },
      {
        en: 'Numeric',
        zh: '计数器',
        enSuffix: true,
        path: '/numeric'
      },
      {
        en: 'PopEditor',
        zh: '弹出编辑',
        enSuffix: true,
        path: '/pop-editor'
      },
      {
        en: 'PopUpload',
        zh: '弹出框上传',
        enSuffix: true,
        path: '/pop-upload'
      },
      {
        en: 'Radio',
        zh: '单选框',
        enSuffix: true,
        path: '/radio'
      },
      {
        en: 'Search',
        zh: '搜索',
        enSuffix: true,
        path: '/search'
      },
      {
        en: 'Select',
        zh: '选择器',
        enSuffix: true,
        path: '/select'
      },
      {
        en: 'Slider',
        zh: '滑块',
        enSuffix: true,
        path: '/slider'
      },
      {
        en: 'Switch',
        zh: '开关',
        enSuffix: true,
        path: '/switch'
      },
      {
        en: 'TimePicker',
        zh: '时间选择器',
        enSuffix: true,
        path: '/time-picker'
      },
      {
        en: 'TimeSelect',
        zh: '时间选择',
        enSuffix: true,
        path: '/time-select'
      }
    ]
  },
  {
    zh: '表格组件',
    en: 'Table Components',
    type: 'groupCount',
    children: [
      {
        en: 'Basic Usage',
        zh: '基本用法',
        enSuffix: false,
        path: '/grid'
      },
      {
        en: 'Ordinal column',
        zh: '序号列',
        enSuffix: false,
        path: '/grid-serial-column'
      },
      {
        en: 'Operation column',
        zh: '操作列',
        enSuffix: false,
        path: '/grid-operation-column'
      },
      {
        en: 'Empty data',
        zh: '空数据',
        enSuffix: false,
        path: '/grid-empty-data-tip'
      },
      {
        en: 'Data source',
        zh: '数据源',
        enSuffix: false,
        path: '/grid-data-source'
      },
      {
        en: 'Big data',
        zh: '大数据',
        enSuffix: false,
        path: '/grid-large-data'
      },
      {
        en: 'Pagination',
        zh: '分页',
        enSuffix: false,
        path: '/grid-pager'
      },
      {
        en: 'Editing',
        zh: '编辑',
        enSuffix: false,
        path: '/grid-edit'
      },
      {
        en: 'Toolbar',
        zh: '工具栏',
        enSuffix: false,
        path: '/grid-toolbar'
      },
      {
        en: 'Loading',
        zh: '加载中',
        enSuffix: false,
        path: '/grid-grid-loading-tip'
      },
      {
        en: 'Size',
        zh: '尺寸',
        enSuffix: false,
        path: '/grid-grid-size'
      },
      {
        en: 'Width and height',
        zh: '宽高',
        enSuffix: false,
        path: '/grid-width-height'
      },
      {
        en: 'Borders',
        zh: '边框',
        enSuffix: false,
        path: '/grid-grid-border'
      },
      {
        en: 'Highlighting',
        zh: '高亮',
        enSuffix: false,
        path: '/grid-highlight'
      },
      {
        en: 'Zebra Crossing Stripes',
        zh: '斑马线条纹',
        enSuffix: false,
        path: '/grid-grid-stripe'
      },
      {
        en: 'OptimizedConfigurationItems',
        zh: '优化配置项',
        enSuffix: false,
        path: '/grid-grid-optimization'
      },
      {
        en: 'Tip',
        zh: '提示',
        enSuffix: false,
        path: '/grid-tip'
      },
      {
        en: 'Alignment',
        zh: '对齐方式',
        enSuffix: false,
        path: '/grid-align'
      },
      {
        en: 'Table Header',
        zh: '表头',
        enSuffix: false,
        path: '/grid-header'
      },
      {
        en: 'End of table',
        zh: '表尾',
        enSuffix: false,
        path: '/grid-footer'
      },
      {
        en: 'Custom Styles',
        zh: '自定义样式',
        enSuffix: false,
        path: '/grid-custom-style'
      },
      {
        en: 'Sorting',
        zh: '排序',
        enSuffix: false,
        path: '/grid-sort'
      },
      {
        en: 'Filtering',
        zh: '筛选',
        enSuffix: false,
        path: '/grid-filter'
      },
      {
        en: 'Freeze',
        zh: '冻结',
        enSuffix: false,
        path: '/grid-fixed'
      },
      {
        en: 'Merges',
        zh: '合并',
        enSuffix: false,
        path: '/grid-span'
      },
      {
        en: 'Grouping',
        zh: '分组',
        enSuffix: false,
        path: '/grid-row-grouping'
      },
      {
        en: 'Statistic',
        zh: '统计',
        enSuffix: false,
        path: '/grid-summary'
      },
      {
        en: 'Drag and drop',
        zh: '拖拽',
        enSuffix: false,
        path: '/grid-drag'
      },
      {
        en: 'Data Cascading',
        zh: '数据级联',
        enSuffix: false,
        path: '/grid-cascade'
      },
      {
        en: 'Right-click menu',
        zh: '右键菜单',
        enSuffix: false,
        path: '/grid-context-menu'
      },
      {
        en: 'Editors',
        zh: '编辑器',
        enSuffix: false,
        path: '/grid-editor'
      },
      {
        en: 'Renderer',
        zh: '渲染器',
        enSuffix: false,
        path: '/grid-renderer'
      },
      {
        en: 'Check the table',
        zh: '表格校验',
        enSuffix: false,
        path: '/grid-validation'
      },
      {
        en: 'Events',
        zh: '事件',
        enSuffix: false,
        path: '/grid-event'
      },
      {
        en: 'Slots',
        zh: '插槽',
        enSuffix: false,
        path: '/grid-slot'
      },
      {
        en: 'Personalized',
        zh: '个性化',
        enSuffix: false,
        path: '/grid-customized'
      },
      {
        en: 'Tree table',
        zh: '树表',
        enSuffix: false,
        path: '/grid-tree-grid'
      },
      {
        en: 'Nested Tables',
        zh: '嵌套表格',
        enSuffix: false,
        path: '/grid-nested-grid'
      },
      {
        en: 'Import and export',
        zh: '导入导出',
        enSuffix: false,
        path: '/grid-import-export'
      },
      {
        en: 'Mouse and Keyboard Configuration',
        zh: '鼠标和键盘配置',
        enSuffix: false,
        path: '/grid-keyboard'
      },
      {
        en: 'Table row and column reversal',
        zh: '表格行列反转',
        enSuffix: false,
        path: '/grid-reverse-column-row'
      },
      {
        en: 'Dynamically Generate Columns',
        zh: '动态生成列',
        enSuffix: false,
        path: '/grid-dynamically-columns'
      },
      {
        en: 'Frequently Asked Questions',
        zh: '常见问题',
        enSuffix: false,
        path: '/grid-faq'
      }
    ]
  },
  {
    zh: '图表组件',
    en: 'Chart Components',
    type: 'groupCount',
    children: [
      {
        en: 'Basic Usage',
        zh: '基本用法',
        enSuffix: false,
        path: '/chart'
      },
      {
        en: 'Event Listening',
        zh: '事件监听',
        enSuffix: false,
        path: '/chart-events'
      },
      {
        en: 'Attribute Configuration Example',
        zh: '属性配置示例',
        enSuffix: false,
        path: '/chart-attributes-demo'
      },
      {
        en: 'Examples of FAQs',
        zh: '常见问题示例',
        enSuffix: false,
        path: '/chart-question'
      },
      {
        en: 'Line Chart',
        zh: '折线图',
        enSuffix: false,
        path: '/chart-line'
      },
      {
        en: 'Bar Chart',
        zh: '柱状图',
        enSuffix: false,
        path: '/chart-histogram'
      },
      {
        en: 'Rank chart',
        zh: '条形图',
        enSuffix: false,
        path: '/chart-bar'
      },
      {
        en: 'Pie Chart',
        zh: '饼图',
        enSuffix: false,
        path: '/chart-pie'
      },
      {
        en: 'Ring diagram',
        zh: '环图',
        enSuffix: false,
        path: '/chart-ring'
      },
      {
        en: 'Waterfall Map',
        zh: '瀑布图',
        enSuffix: false,
        path: '/chart-waterfall'
      },
      {
        en: 'Funnel diagram',
        zh: '漏斗图',
        enSuffix: false,
        path: '/chart-funnel'
      },
      {
        en: 'Radar chart',
        zh: '雷达图',
        enSuffix: false,
        path: '/chart-radar'
      },
      {
        en: 'Map',
        zh: '地图',
        enSuffix: false,
        path: '/chart-map'
      },
      {
        en: 'Sankitu',
        zh: '桑基图',
        enSuffix: false,
        path: '/chart-sankey'
      },
      {
        en: 'Heat map',
        zh: '热力图',
        enSuffix: false,
        path: '/chart-heatmap'
      },
      {
        en: 'Scatter chart',
        zh: '散点图',
        enSuffix: false,
        path: '/chart-scatter'
      },
      {
        en: 'K-line chart',
        zh: 'K线图',
        enSuffix: false,
        path: '/chart-candle'
      },
      {
        en: 'Dashboard',
        zh: '仪表盘',
        enSuffix: false,
        path: '/chart-gauge'
      },
      {
        en: 'Treemap',
        zh: '树图',
        enSuffix: false,
        path: '/chart-tree'
      },
      {
        en: 'Water balloon diagram',
        zh: '水球图',
        enSuffix: false,
        path: '/chart-liquidfill'
      },
      {
        en: 'Word cloud map',
        zh: '词云图',
        enSuffix: false,
        path: '/chart-wordcloud'
      },
      {
        en: 'Rising Sun Map',
        zh: '旭日图',
        enSuffix: false,
        path: '/chart-sunburst'
      },
      {
        en: 'Topology Diagram',
        zh: '拓扑图',
        enSuffix: false,
        path: '/chart-graph'
      },
      {
        en: 'Baidu Map',
        zh: '百度地图',
        enSuffix: false,
        path: '/chart-baidu-map'
      },
      {
        en: 'Gaud Map',
        zh: '高德地图',
        enSuffix: false,
        path: '/chart-autonavi-map'
      },
      {
        en: 'Box diagram',
        zh: '箱形图',
        enSuffix: false,
        path: '/chart-boxplot'
      }
    ]
  },
  {
    zh: '数据组件',
    en: 'Data Components',
    type: 'groupCount',
    children: [
      {
        en: 'Pager',
        zh: '分页',
        enSuffix: true,
        path: '/pager'
      },
      {
        en: 'Progress',
        zh: '进度条',
        enSuffix: true,
        path: '/progress'
      },
      {
        en: 'Tree',
        zh: '树形控件',
        enSuffix: true,
        path: '/tree'
      },
      {
        en: 'Transfer',
        zh: '穿梭框',
        enSuffix: true,
        path: '/transfer'
      }
    ]
  },
  {
    zh: '提示组件',
    en: 'Tips Components',
    type: 'groupCount',
    children: [
      {
        en: 'Alert',
        zh: '警告',
        enSuffix: true,
        path: '/alert'
      },
      {
        en: 'Badge',
        zh: '标记',
        enSuffix: true,
        path: '/badge'
      },
      {
        en: 'Loading',
        zh: '加载',
        enSuffix: true,
        path: '/loading'
      },
      {
        en: 'Tooltip',
        zh: '文字提示',
        enSuffix: true,
        path: '/tooltip'
      },
      {
        en: 'Popover',
        zh: '弹出框',
        enSuffix: true,
        path: '/popover'
      },
      {
        en: 'Popconfirm',
        zh: '气泡确认框组件',
        enSuffix: true,
        path: '/popconfirm'
      },
      {
        en: 'Modal',
        zh: '模态框',
        enSuffix: true,
        path: '/modal'
      },
      {
        en: 'Notify',
        zh: '通知',
        enSuffix: true,
        path: '/notify'
      }
    ]
  },
  {
    zh: '业务组件',
    en: 'Business Components',
    type: 'groupCount',
    children: [
      {
        en: 'Amount',
        zh: '金额',
        enSuffix: true,
        path: '/amount'
      },
      {
        en: 'Area',
        zh: '片区',
        enSuffix: true,
        path: '/area'
      },
      {
        en: 'Company',
        zh: '公司',
        enSuffix: true,
        path: '/company'
      },
      {
        en: 'Country',
        zh: '国家/地区',
        enSuffix: true,
        path: '/country'
      },
      {
        en: 'Currency',
        zh: '币种',
        enSuffix: true,
        path: '/currency'
      },
      {
        en: 'Dept',
        zh: '部门',
        enSuffix: true,
        path: '/dept'
      },
      {
        en: 'DropRoles',
        zh: '下拉角色',
        enSuffix: true,
        path: '/drop-roles'
      },
      {
        en: 'Espace',
        zh: '消息弹框',
        enSuffix: true,
        path: '/espace'
      },
      {
        en: 'Hrapprover',
        zh: '权签人',
        enSuffix: true,
        path: '/hrapprover'
      },
      {
        en: 'Locales',
        zh: '语言选择',
        enSuffix: true,
        path: '/locales'
      },
      {
        en: 'LogonUser',
        zh: '登录用户',
        enSuffix: true,
        path: '/logon-user'
      },
      {
        en: 'Logout',
        zh: '注销',
        enSuffix: true,
        path: '/logout'
      },
      {
        en: 'Roles',
        zh: '角色切换',
        enSuffix: true,
        path: '/roles'
      },
      {
        en: 'User',
        zh: '用户',
        enSuffix: true,
        path: '/user'
      },
      {
        en: 'UserAccount',
        zh: '用户账号',
        enSuffix: true,
        path: '/user-account'
      },
      {
        en: 'UserLink',
        zh: '用户信息链接',
        enSuffix: true,
        path: '/user-link'
      }
    ]
  },
  {
    zh: '其他组件',
    en: 'Other Components',
    type: 'groupCount',
    children: [
      {
        en: 'BulletinBoard',
        zh: '公告牌',
        enSuffix: true,
        path: '/bulletin-board'
      },
      {
        en: 'Calendar',
        zh: '日历',
        enSuffix: true,
        path: '/calendar'
      },
      {
        en: 'CreditCardForm',
        zh: '信用卡表单',
        enSuffix: true,
        path: '/credit-card-form'
      },
      {
        en: 'Crop',
        zh: '图片裁剪',
        enSuffix: true,
        path: '/crop'
      },
      {
        en: 'DetailPage',
        zh: '表头详情栏',
        enSuffix: true,
        path: '/detail-page'
      },
      {
        en: 'Image',
        zh: '图片预览',
        enSuffix: true,
        path: '/image'
      },
      {
        en: 'Rate',
        zh: '评分',
        enSuffix: true,
        path: '/rate'
      },
      {
        en: 'ScrollText',
        zh: '文字滚动',
        enSuffix: true,
        path: '/scroll-text'
      },
      {
        en: 'SlideBar',
        zh: '滚动块',
        enSuffix: true,
        path: '/slide-bar'
      },
      {
        en: 'Tag',
        zh: '标签',
        enSuffix: true,
        path: '/tag'
      },
      {
        en: 'TextPopup',
        zh: '输入框',
        enSuffix: true,
        path: '/textpopup'
      },
      {
        en: 'UserContact',
        zh: '联系人',
        enSuffix: true,
        path: '/user-contact'
      },
      {
        en: 'UserHead',
        zh: '用户头像',
        enSuffix: true,
        path: '/user-head'
      },
      {
        en: 'Fullscreen',
        zh: '全屏显示',
        enSuffix: true,
        path: '/fullscreen'
      },
      {
        en: 'ConfigProvider',
        zh: '全局设置',
        enSuffix: true,
        path: '/config-provider'
      }
    ]
  }
]
export default routerArr
