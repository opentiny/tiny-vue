const isOpen = import.meta.env.VITE_BUILD_TARGET === 'open'
export const standaloneMenus = [
  {
    label: '组件总览',
    key: 'overview'
  }
]
export const docMenus = [
  {
    'label': '使用指南',
    'labelEn': 'Usage Guidelines',
    'key': 'docs_usage_guidelines',
    // 为了保持新旧官网对应文档路由的一致，文档对内和对外的差异判断逻辑放到了docs组件中。
    'children': [
      { 'title': '更新日志', 'titleEn': 'Changelog', 'key': 'changelog' },
      { 'title': '环境准备', 'titleEn': 'envpreparation', 'key': 'envpreparation' },
      { 'title': '安装', 'titleEn': 'installation', 'key': 'installation' },
      { 'title': '引入组件', 'titleEn': 'importComponents', 'key': 'import-components' },
      { 'title': '开发示例', 'titleEn': 'developDemo', 'key': 'develop-demo' },
      { 'title': '国际化', 'titleEn': 'i18n', 'key': 'i18n' },
      { 'title': '主题配置', 'titleEn': 'theme', 'key': 'theme' },
      { 'title': '表单校验配置', 'titleEn': 'formValid', 'key': 'form-valid' },
      { 'title': '常见问题', 'titleEn': 'faq', 'key': 'faq' }
    ]
  }
]
// 内网比外网多出三文档，为了保存文档顺序，使用splice插入到对应位置
if (!isOpen) {
  docMenus[0].children.splice(4, 0, { 'title': '后端适配器', 'titleEn': 'adapter', 'key': 'adapter' })
  docMenus[0].children.splice(6, 0, { 'title': '创建项目', 'titleEn': 'tinyStage', 'key': 'tiny-stage' })
  docMenus[0].children.splice(10, 0, { 'title': '社区求助', 'titleEn': 'help', 'key': 'help' })
}
export const cmpMenus = [
  {
    'label': '框架风格',
    'labelEn': 'Frame Style',
    'key': 'cmp_frame_style',
    'children': [
      { 'nameCn': '色彩', 'name': 'Color', 'key': 'color' },
      { 'nameCn': '版型', 'name': 'Container', 'key': 'container' },
      { 'nameCn': '字体', 'name': 'Font', 'key': 'font' },
      { 'nameCn': '图标', 'name': 'Icon', 'key': 'icon' },
      { 'nameCn': '布局', 'name': 'Layout', 'key': 'layout' }
    ]
  },
  {
    'label': '导航组件',
    'labelEn': 'Navigation Components',
    'key': 'cmp_navigation_components',
    'children': [
      { 'nameCn': '锚点', 'name': 'Anchor', 'key': 'anchor' },
      { 'nameCn': '引导', 'name': 'Guide', 'key': 'guide' },
      { 'nameCn': '面包屑', 'name': 'Breadcrumb', 'key': 'breadcrumb' },
      { 'nameCn': '瀑布菜单', 'name': 'FallMenu', 'key': 'fall-menu' },
      { 'nameCn': '浮动块', 'name': 'Floatbar', 'key': 'floatbar' },
      { 'nameCn': '收缩菜单', 'name': 'ToggleMenu', 'key': 'toggle-menu' },
      { 'nameCn': '收藏夹菜单', 'name': 'LinkMenu', 'key': 'link-menu' },
      { 'nameCn': '里程碑', 'name': 'Milestone', 'key': 'milestone' },
      { 'nameCn': '导航菜单', 'name': 'NavMenu', 'key': 'nav-menu' },
      { 'nameCn': '步骤条', 'name': 'Steps', 'key': 'steps' },
      { 'nameCn': '页签', 'name': 'Tabs', 'key': 'tabs' },
      { 'nameCn': '时间线', 'name': 'TimeLine', 'key': 'time-line' },
      { 'nameCn': '树型菜单', 'name': 'TreeMenu', 'key': 'tree-menu' },
      { 'nameCn': '流程图', 'name': 'Wizard', 'key': 'wizard' },
      { 'nameCn': '下拉菜单', 'name': 'Dropdown', 'key': 'dropdown' },
      { 'nameCn': '菜单按钮', 'name': 'ActionMenu', 'key': 'action-menu' },
      { 'nameCn': '流程图', 'name': 'Flowchart', 'key': 'flowchart' }
    ]
  },
  {
    'label': '容器组件',
    'labelEn': 'Container Components',
    'key': 'cmp_container_components',
    'children': [
      { 'nameCn': '走马灯', 'name': 'Carousel', 'key': 'carousel' },
      { 'nameCn': '折叠面板', 'name': 'Collapse', 'key': 'collapse' },
      { 'nameCn': '对话框', 'name': 'DialogBox', 'key': 'dialog-box' },
      { 'nameCn': '弹窗选择 ', 'name': 'DialogSelect ', 'key': 'dialog-select' },
      { 'nameCn': '抽屉', 'name': 'Drawer', 'key': 'drawer' },
      { 'nameCn': '过滤器面板', 'name': 'FilterPanel', 'key': 'filter-panel' },
      { 'nameCn': '面板分割', 'name': 'Split', 'key': 'split' }
    ]
  },
  {
    'label': '表单组件',
    'labelEn': 'Form Components',
    'key': 'cmp_form_components',
    'children': [
      { 'nameCn': '自动完成', 'name': 'Autocomplete', 'key': 'autocomplete' },
      { 'nameCn': '按钮', 'name': 'Button', 'key': 'button' },
      { 'nameCn': '按钮组', 'name': 'ButtonGroup', 'key': 'button-group' },
      { 'nameCn': '级联选择器', 'name': 'Cascader', 'key': 'cascader' },
      { 'nameCn': '级联面板', 'name': 'CascaderPanel', 'key': 'cascader-panel' },
      { 'nameCn': '复选框', 'name': 'Checkbox', 'key': 'checkbox' },
      { 'nameCn': '日期选择器', 'name': 'DatePicker', 'key': 'date-picker' },
      { 'nameCn': '下拉时间', 'name': 'DropTimes', 'key': 'drop-times' },
      { 'nameCn': '文件上传', 'name': 'FileUpload', 'key': 'file-upload' },
      { 'nameCn': '表单', 'name': 'Form', 'key': 'form' },
      { 'nameCn': '输入框', 'name': 'Input', 'key': 'input' },
      { 'nameCn': '输入框', 'name': 'IpAddress', 'key': 'ip-address' },
      { 'nameCn': '文字链接', 'name': 'Link', 'key': 'link' },
      { 'nameCn': '计数器', 'name': 'Numeric', 'key': 'numeric' },
      { 'nameCn': '弹出编辑', 'name': 'PopEditor', 'key': 'popeditor' },
      { 'nameCn': '弹出框上传', 'name': 'PopUpload', 'key': 'pop-upload' },
      { 'nameCn': '单选框', 'name': 'Radio', 'key': 'radio' },
      { 'nameCn': '富文本', 'name': 'RichTextEditor', 'key': 'rich-text-editor' },
      { 'nameCn': '搜索', 'name': 'Search', 'key': 'search' },
      { 'nameCn': '选择器', 'name': 'Select', 'key': 'select' },
      { 'nameCn': '滑块', 'name': 'Slider', 'key': 'slider' },
      { 'nameCn': '开关', 'name': 'Switch', 'key': 'switch' },
      { 'nameCn': '时间选择器', 'name': 'TimePicker', 'key': 'time-picker' },
      { 'nameCn': '时间选择', 'name': 'TimeSelect', 'key': 'time-select' },
      { 'nameCn': '颜色选择器', 'name': 'ColorPicker', 'key': 'color-picker' },
      { 'nameCn': '颜色选择面板', 'name': 'ColorSelectPanel', 'key': 'color-select-panel' }
    ]
  },
  {
    'label': '表格组件',
    'labelEn': 'Table Components',
    'key': 'cmp_table_components',
    'children': [
      { 'nameCn': '基本用法', 'name': '', 'key': 'grid' },
      { 'nameCn': '序号列', 'name': '', 'key': 'grid-serial-column' },
      { 'nameCn': '操作列', 'name': '', 'key': 'grid-operation-column' },
      { 'nameCn': '空数据', 'name': '', 'key': 'grid-empty' },
      { 'nameCn': '数据源', 'name': '', 'key': 'grid-data-source' },
      { 'nameCn': '大数据', 'name': '', 'key': 'grid-large-data' },
      { 'nameCn': '分页', 'name': '', 'key': 'grid-pager' },
      { 'nameCn': '编辑', 'name': '', 'key': 'grid-edit' },
      { 'nameCn': '工具栏', 'name': '', 'key': 'grid-toolbar' },
      { 'nameCn': '加载中', 'name': '', 'key': 'grid-loading' },
      { 'nameCn': '宽高尺寸', 'name': '', 'key': 'grid-size' },
      { 'nameCn': '外观设置', 'name': '', 'key': 'grid-appearance-settings' },
      { 'nameCn': '高亮', 'name': '', 'key': 'grid-highlight' },
      { 'nameCn': '提示', 'name': '', 'key': 'grid-tip' },
      { 'nameCn': '对齐方式', 'name': '', 'key': 'grid-align' },
      { 'nameCn': '表头', 'name': '', 'key': 'grid-header' },
      { 'nameCn': '表尾', 'name': '', 'key': 'grid-footer' },
      { 'nameCn': '自定义样式', 'name': '', 'key': 'grid-custom-style' },
      { 'nameCn': '排序', 'name': '', 'key': 'grid-sort' },
      { 'nameCn': '筛选', 'name': '', 'key': 'grid-filter' },
      { 'nameCn': '冻结', 'name': '', 'key': 'grid-fixed' },
      { 'nameCn': '合并', 'name': '', 'key': 'grid-span' },
      { 'nameCn': '分组', 'name': '', 'key': 'grid-row-grouping' },
      { 'nameCn': '拖拽', 'name': '', 'key': 'grid-drag' },
      { 'nameCn': '右键菜单', 'name': '', 'key': 'grid-context-menu' },
      { 'nameCn': '编辑器', 'name': '', 'key': 'grid-editor' },
      { 'nameCn': '渲染器', 'name': '', 'key': 'grid-renderer' },
      { 'nameCn': '表格校验', 'name': '', 'key': 'grid-validation' },
      { 'nameCn': '事件', 'name': '', 'key': 'grid-event' },
      { 'nameCn': '插槽', 'name': '', 'key': 'grid-slot' },
      { 'nameCn': '个性化', 'name': '', 'key': 'grid-custom' },
      { 'nameCn': '树表', 'name': '', 'key': 'grid-tree-table' },
      { 'nameCn': '展开行', 'name': '', 'key': 'grid-expand' },
      { 'nameCn': '导入导出', 'name': '', 'key': 'grid-import-export' },
      { 'nameCn': '鼠标和键盘配置', 'name': '', 'key': 'grid-mouse-keyboard' },
      { 'nameCn': '动态列及行列反转', 'name': '', 'key': 'grid-dynamically-columns' },
      { 'nameCn': '常见问题', 'name': '', 'key': 'grid-faq' }
    ]
  },
  {
    'label': '图表组件',
    'labelEn': 'Chart Components',
    'key': 'cmp_chart_components',
    'children': [
      { 'nameCn': '基本用法', 'name': 'Basic Usage', 'key': 'chart' },
      { 'nameCn': '事件监听', 'name': 'Event Listening', 'key': 'chart-events' },
      { 'nameCn': '属性配置示例', 'name': 'Attribute Configuration Example', 'key': 'chart-attributes-demo' },
      { 'nameCn': '常见问题示例', 'name': 'Examples of FAQs', 'key': 'chart-question' },
      { 'nameCn': '折线图', 'name': 'Line Chart', 'key': 'chart-line' },
      { 'nameCn': '柱状图', 'name': 'Bar Chart', 'key': 'chart-histogram' },
      { 'nameCn': '条形图', 'name': 'Rank chart', 'key': 'chart-bar' },
      { 'nameCn': '饼图', 'name': 'Pie Chart', 'key': 'chart-pie' },
      { 'nameCn': '环图', 'name': 'Ring diagram', 'key': 'chart-ring' },
      { 'nameCn': '瀑布图', 'name': 'Waterfall Map', 'key': 'chart-waterfall' },
      { 'nameCn': '漏斗图', 'name': 'Funnel diagram', 'key': 'chart-funnel' },
      { 'nameCn': '雷达图', 'name': 'Radar chart', 'key': 'chart-radar' },
      { 'nameCn': '地图', 'name': 'Map', 'key': 'chart-map' },
      { 'nameCn': '桑基图', 'name': 'Sankitu', 'key': 'chart-sankey' },
      { 'nameCn': '热力图', 'name': 'Heat map', 'key': 'chart-heatmap' },
      { 'nameCn': '散点图', 'name': 'Scatter chart', 'key': 'chart-scatter' },
      { 'nameCn': 'K线图', 'name': 'K-line chart', 'key': 'chart-candle' },
      { 'nameCn': '仪表盘', 'name': 'Dashboard', 'key': 'chart-gauge' },
      { 'nameCn': '树图', 'name': 'Treemap', 'key': 'chart-tree' },
      { 'nameCn': '水球图', 'name': 'Water balloon diagram', 'key': 'chart-liquidfill' },
      { 'nameCn': '词云图', 'name': 'Word cloud map', 'key': 'chart-wordcloud' },
      { 'nameCn': '旭日图', 'name': 'Rising Sun Map', 'key': 'chart-sunburst' },
      { 'nameCn': '拓扑图', 'name': 'Topology Diagram', 'key': 'chart-graph' },
      { 'nameCn': '百度地图', 'name': 'Baidu Map', 'key': 'chart-baidu-map' },
      { 'nameCn': '高德地图', 'name': 'Gaud Map', 'key': 'chart-autonavi-map' },
      { 'nameCn': '箱形图', 'name': 'Box diagram', 'key': 'chart-boxplot' }
    ]
  },
  {
    'label': '数据组件',
    'labelEn': 'Data Components',
    'key': 'cmp_data_components',
    'children': [
      { 'nameCn': '分页', 'name': 'Pager', 'key': 'pager' },
      { 'nameCn': '进度条', 'name': 'Progress', 'key': 'progress' },
      { 'nameCn': '树形控件', 'name': 'Tree', 'key': 'tree' },
      { 'nameCn': '穿梭框', 'name': 'Transfer', 'key': 'transfer' },
      { 'nameCn': '无限滚动', 'name': 'InfiniteScroll', 'key': 'infinite-scroll' }
    ]
  },
  {
    'label': '提示组件',
    'labelEn': 'Tips Components',
    'key': 'cmp_tips_components',
    'children': [
      { 'nameCn': '警告', 'name': 'Alert', 'key': 'alert' },
      { 'nameCn': '标记', 'name': 'Badge', 'key': 'badge' },
      { 'nameCn': '加载', 'name': 'Loading', 'key': 'loading' },
      { 'nameCn': '文字提示', 'name': 'Tooltip', 'key': 'tooltip' },
      { 'nameCn': '弹出框', 'name': 'Popover', 'key': 'popover' },
      { 'nameCn': '气泡确认框组件', 'name': 'Popconfirm', 'key': 'popconfirm' },
      { 'nameCn': '模态框', 'name': 'Modal', 'key': 'modal' },
      { 'nameCn': '通知', 'name': 'Notify', 'key': 'notify' }
    ]
  },
  {
    'label': '其他组件',
    'labelEn': 'Other Components',
    'key': 'cmp_other_components',
    'children': [
      { 'nameCn': '公告牌', 'name': 'BulletinBoard', 'key': 'bulletin-board' },
      { 'nameCn': '日历', 'name': 'Calendar', 'key': 'calendar' },
      { 'nameCn': '日历视图', 'name': 'CalendarView', 'key': 'calendar-view' },
      { 'nameCn': '信用卡表单', 'name': 'CreditCardForm', 'key': 'credit-card-form' },
      { 'nameCn': '图片裁剪', 'name': 'Crop', 'key': 'crop' },
      { 'nameCn': '表头详情栏', 'name': 'DetailPage', 'key': 'detail-page' },
      { 'nameCn': '图片预览', 'name': 'Image', 'key': 'image' },
      { 'nameCn': '评分', 'name': 'Rate', 'key': 'rate' },
      { 'nameCn': '文字滚动', 'name': 'ScrollText', 'key': 'scroll-text' },
      { 'nameCn': '滚动块', 'name': 'SlideBar', 'key': 'slide-bar' },
      { 'nameCn': '标签', 'name': 'Tag', 'key': 'tag' },
      { 'nameCn': '标签组', 'name': 'TagGroup', 'key': 'tag-group' },
      { 'nameCn': '输入框', 'name': 'TextPopup', 'key': 'text-popup' },
      { 'nameCn': '联系人', 'name': 'UserContact', 'key': 'user-contact' },
      { 'nameCn': '用户头像', 'name': 'UserHead', 'key': 'user-head' },
      { 'nameCn': '全屏显示', 'name': 'Fullscreen', 'key': 'fullscreen' },
      { 'nameCn': '全局设置', 'name': 'ConfigProvider', 'key': 'config-provider' },
      { 'nameCn': '分割线', 'name': 'Divider', 'key': 'divider' },
      { 'nameCn': '二维码', 'name': 'QrCode', 'key': 'qr-code' },
      { 'nameCn': '水印', 'name': 'Watermark', 'key': 'watermark' }
    ]
  }
]
// 对内文档开放业务组件
if (!isOpen) {
  cmpMenus.splice(8, 0, {
    'label': '业务组件',
    'labelEn': 'Business Components',
    'key': 'cmp_business_components',
    'children': [
      { 'nameCn': '金额', 'name': 'Amount', 'key': 'amount' },
      { 'nameCn': '片区', 'name': 'Area', 'key': 'area' },
      { 'nameCn': '公司', 'name': 'Company', 'key': 'company' },
      { 'nameCn': '国家/地区', 'name': 'Country', 'key': 'country' },
      { 'nameCn': '币种', 'name': 'Currency', 'key': 'currency' },
      { 'nameCn': '部门', 'name': 'Dept', 'key': 'dept' },
      { 'nameCn': '下拉角色', 'name': 'DropRoles', 'key': 'drop-roles' },
      { 'nameCn': '消息弹框', 'name': 'Espace', 'key': 'espace' },
      { 'nameCn': '权签人', 'name': 'Hrapprover', 'key': 'hrapprover' },
      { 'nameCn': '语言选择', 'name': 'Locales', 'key': 'locales' },
      { 'nameCn': '登录用户', 'name': 'LogonUser', 'key': 'logon-user' },
      { 'nameCn': '注销', 'name': 'Logout', 'key': 'logout' },
      { 'nameCn': '角色切换', 'name': 'Roles', 'key': 'roles' },
      { 'nameCn': '用户', 'name': 'User', 'key': 'user' },
      { 'nameCn': '用户账号', 'name': 'UserAccount', 'key': 'user-account' },
      { 'nameCn': '用户信息链接', 'name': 'UserLink', 'key': 'user-link' }
    ]
  })
}
