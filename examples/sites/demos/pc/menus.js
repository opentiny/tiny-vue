const envTarget = import.meta.env.VITE_BUILD_TARGET || 'open'
const envTheme = import.meta.env.VITE_TINY_THEME || 'default'
export const standaloneMenus = [
  {
    label: '组件总览',
    key: 'overview'
  }
]

const docMenusChildren = [
  { 'title': '更新日志', 'titleEn': 'Changelog', 'key': 'changelog' },
  { 'title': '环境准备', 'titleEn': 'envpreparation', 'key': 'envpreparation' },
  { 'title': '安装', 'titleEn': 'installation', 'key': 'installation' },
  { 'title': '引入组件', 'titleEn': 'importComponents', 'key': 'import-components' },
  {
    'title': '后端适配器',
    'titleEn': 'adapter',
    'key': 'adapter',
    showScene: {
      target: ['inner']
    }
  },
  {
    'title': '开发示例',
    'titleEn': 'developDemo',
    'key': 'develop-demo',
    showScene: {
      target: ['inner']
    }
  },
  { 'title': '国际化', 'titleEn': 'i18n', 'key': 'i18n' },
  {
    'title': '主题配置',
    'titleEn': 'theme',
    'key': 'theme',
    showScene: {
      theme: ['default']
    }
  },
  { 'title': '表单校验配置', 'titleEn': 'formValid', 'key': 'form-valid' },
  { 'title': '常见问题', 'titleEn': 'faq', 'key': 'faq' },
  {
    'title': '社区求助',
    'titleEn': 'help',
    'key': 'help',
    showScene: {
      target: ['inner']
    }
  },
  {
    'title': '适配AUI',
    'titleEn': 'Adapter AUI',
    'key': 'aui-adapter',
    showScene: {
      theme: ['saas']
    }
  }
]
export const docMenus = [
  {
    'label': '使用指南',
    'labelEn': 'Usage Guidelines',
    'key': 'docs-usage-guidelines',
    'children': docMenusChildren.filter((item) => {
      if (!item.showScene) {
        return true
      }
      // 根据envTarget和envTheme判断是否展示文档
      const { target, theme } = item.showScene
      return (target?.includes(envTarget) ?? true) && (theme?.includes(envTheme) ?? true)
    })
  }
]

export const cmpMenus = [
  {
    'label': '基础',
    'labelEn': 'Basic',
    'key': 'cmp-frame-style',
    'children': [
      { 'nameCn': '按钮', 'name': 'Button', 'key': 'button' },
      { 'nameCn': '按钮组', 'name': 'ButtonGroup', 'key': 'button-group' },
      { 'nameCn': '色彩', 'name': 'Color', 'key': 'color' },
      { 'nameCn': '容器布局', 'name': 'Container', 'key': 'container' },
      { 'nameCn': '字体', 'name': 'Font', 'key': 'font' },
      { 'nameCn': '图标', 'name': 'Icon', 'key': 'icon' },
      { 'nameCn': '栅格布局', 'name': 'Layout', 'key': 'layout' },
      { 'nameCn': '链接', 'name': 'Link', 'key': 'link' },
      { 'nameCn': '分割线', 'name': 'Divider', 'key': 'divider' },
      {
        'nameCn': '虚拟化容器',
        'name': 'VirtualScrollBox',
        'key': 'virtual-scroll-box',
        'meta': {
          'stable': '3.19.0'
        }
      }
    ]
  },
  {
    'label': '导航',
    'labelEn': 'Navigation',
    'key': 'cmp-navigation-components',
    'children': [
      { 'nameCn': '动作菜单', 'name': 'ActionMenu', 'key': 'action-menu' },
      { 'nameCn': '锚点', 'name': 'Anchor', 'key': 'anchor' },
      { 'nameCn': '面包屑', 'name': 'Breadcrumb', 'key': 'breadcrumb' },
      { 'nameCn': '下拉菜单', 'name': 'Dropdown', 'key': 'dropdown' },
      { 'nameCn': '瀑布菜单', 'name': 'FallMenu', 'key': 'fall-menu' },
      { 'nameCn': '收藏夹菜单', 'name': 'LinkMenu', 'key': 'link-menu' },
      { 'nameCn': '导航菜单', 'name': 'NavMenu', 'key': 'nav-menu' },
      { 'nameCn': '分页', 'name': 'Pager', 'key': 'pager' },
      { 'nameCn': '步骤条', 'name': 'Steps', 'key': 'steps' },
      { 'nameCn': '页签', 'name': 'Tabs', 'key': 'tabs' },
      { 'nameCn': '收缩菜单', 'name': 'ToggleMenu', 'key': 'toggle-menu' },
      { 'nameCn': '树型菜单', 'name': 'TreeMenu', 'key': 'tree-menu' }
    ]
  },
  {
    'label': '表单',
    'labelEn': 'Form',
    'key': 'cmp-form-components',
    'children': [
      { 'nameCn': '自动完成', 'name': 'AutoComplete', 'key': 'autocomplete' },
      {
        'nameCn': '基础选择器',
        'name': 'BaseSelect',
        'key': 'base-select',
        'meta': {
          'experimental': '3.17.0'
        }
      },
      { 'nameCn': '级联选择器', 'name': 'Cascader', 'key': 'cascader' },
      { 'nameCn': '级联面板', 'name': 'CascaderPanel', 'key': 'cascader-panel' },
      { 'nameCn': '多选框', 'name': 'Checkbox', 'key': 'checkbox' },
      { 'nameCn': '颜色选择器', 'name': 'ColorPicker', 'key': 'color-picker' },
      { 'nameCn': '颜色选择面板', 'name': 'ColorSelectPanel', 'key': 'color-select-panel' },
      { 'nameCn': '日期选择器', 'name': 'DatePicker', 'key': 'date-picker' },
      { 'nameCn': '下拉时间', 'name': 'DropTimes', 'key': 'drop-times' },
      { 'nameCn': '文件上传', 'name': 'FileUpload', 'key': 'file-upload' },
      {
        'nameCn': '富文本',
        'name': 'FluentEditor',
        'key': 'fluent-editor',
        'meta': {
          'experimental': '3.17.0'
        }
      },
      { 'nameCn': '表单', 'name': 'Form', 'key': 'form' },
      { 'nameCn': '输入框', 'name': 'Input', 'key': 'input' },
      { 'nameCn': ' IP地址输入框', 'name': 'IpAddress', 'key': 'ip-address' },
      { 'nameCn': '数字输入框', 'name': 'Numeric', 'key': 'numeric' },
      { 'nameCn': '弹出编辑', 'name': 'PopEditor', 'key': 'popeditor' },
      { 'nameCn': '弹出上传', 'name': 'PopUpload', 'key': 'pop-upload' },
      { 'nameCn': '单选框', 'name': 'Radio', 'key': 'radio' },
      { 'nameCn': '评分', 'name': 'Rate', 'key': 'rate' },
      {
        'nameCn': '富文本编辑器',
        'name': 'RichTextEditor',
        'key': 'rich-text-editor',
        'meta': {
          'experimental': '3.10.0'
        }
      },
      { 'nameCn': '搜索', 'name': 'Search', 'key': 'search' },
      { 'nameCn': '选择器', 'name': 'Select', 'key': 'select' },
      { 'nameCn': '滑块', 'name': 'Slider', 'key': 'slider' },
      { 'nameCn': '开关', 'name': 'Switch', 'key': 'switch' },
      { 'nameCn': '时间选择器', 'name': 'TimePicker', 'key': 'time-picker' },
      { 'nameCn': '时间选择', 'name': 'TimeSelect', 'key': 'time-select' },
      { 'nameCn': '穿梭框', 'name': 'Transfer', 'key': 'transfer' },
      {
        'nameCn': '树形选择器',
        'name': 'TreeSelect',
        'key': 'tree-select',
        'meta': {
          'experimental': '3.17.0'
        }
      }
    ]
  },
  {
    'label': '表格',
    'labelEn': 'Table',
    'key': 'cmp-table-components',
    'children': [
      { 'nameCn': '基本用法', 'name': '', 'key': 'grid' },
      { 'nameCn': '序号列', 'name': '', 'key': 'grid-serial-column' },
      { 'nameCn': '选中行', 'name': '', 'key': 'grid-operation-column' },
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
    'label': '数据展示',
    'labelEn': 'Data Display',
    'key': 'cmp-data-components',
    'children': [
      { 'nameCn': '标记', 'name': 'Badge', 'key': 'badge' },
      { 'nameCn': '日历', 'name': 'Calendar', 'key': 'calendar' },
      { 'nameCn': '日历视图', 'name': 'CalendarView', 'key': 'calendar-view' },
      { 'nameCn': '卡片', 'name': 'Card', 'key': 'card' },
      { 'nameCn': '走马灯', 'name': 'Carousel', 'key': 'carousel' },
      { 'nameCn': '折叠面板', 'name': 'Collapse', 'key': 'collapse' },
      { 'nameCn': '流程图', 'name': 'FlowChart', 'key': 'flowchart' },
      { 'nameCn': '引导', 'name': 'Guide', 'key': 'guide' },
      { 'nameCn': '图片', 'name': 'Image', 'key': 'image' },
      { 'nameCn': '无限滚动', 'name': 'InfiniteScroll', 'key': 'infinite-scroll' },
      { 'nameCn': '里程碑', 'name': 'Milestone', 'key': 'milestone' },
      {
        'nameCn': '思维导图',
        'name': 'MindMap',
        'key': 'mind-map'
      },
      { 'nameCn': '二维码', 'name': 'QrCode', 'key': 'qr-code' },
      { 'nameCn': '统计数值', 'name': 'Statistic', 'key': 'statistic' },
      { 'nameCn': '标签', 'name': 'Tag', 'key': 'tag' },
      { 'nameCn': '标签组', 'name': 'TagGroup', 'key': 'tag-group' },
      { 'nameCn': '时间线', 'name': 'Timeline', 'key': 'time-line' },
      //  测试时打开该行---------------
      // { 'nameCn': '时间线AUI', 'name': 'TimelineNew', 'key': 'time-line-new' },
      { 'nameCn': '树形控件', 'name': 'Tree', 'key': 'tree' },
      {
        'nameCn': '虚拟化树形控件',
        'name': 'VirtualTree',
        'key': 'virtual-tree',
        'meta': {
          'stable': '3.19.0'
        }
      },
      { 'nameCn': '用户头像', 'name': 'UserHead', 'key': 'user-head' },
      { 'nameCn': '流程图', 'name': 'Wizard', 'key': 'wizard' }
    ]
  },
  {
    'label': '反馈',
    'labelEn': 'Feedback',
    'key': 'cmp-tips-components',
    'children': [
      { 'nameCn': '警告', 'name': 'Alert', 'key': 'alert' },
      { 'nameCn': '对话框', 'name': 'DialogBox', 'key': 'dialog-box' },
      { 'nameCn': '抽屉', 'name': 'Drawer', 'key': 'drawer' },
      { 'nameCn': '加载', 'name': 'Loading', 'key': 'loading' },
      { 'nameCn': '模态框', 'name': 'Modal', 'key': 'modal' },
      { 'nameCn': '通知', 'name': 'Notify', 'key': 'notify' },
      { 'nameCn': '气泡确认框', 'name': 'PopConfirm', 'key': 'popconfirm' },
      { 'nameCn': '进度条', 'name': 'Progress', 'key': 'progress' },
      { 'nameCn': '气泡卡片', 'name': 'Popover', 'key': 'popover' },
      { 'nameCn': '骨架屏', 'name': 'Skeleton', 'key': 'skeleton' },
      { 'nameCn': '文字提示', 'name': 'Tooltip', 'key': 'tooltip' }
    ]
  },
  {
    'label': '图表',
    'labelEn': 'Chart',
    'key': 'cmp-chart-components',
    'children': [
      { 'nameCn': '图表文档', 'name': 'Chart Docs', 'key': 'chart-docs' },
      { 'nameCn': '基本用法', 'name': 'Basic Usage', 'key': 'chart' },
      { 'nameCn': '事件监听', 'name': 'Event Listening', 'key': 'chart-events' },
      { 'nameCn': '属性配置示例', 'name': 'Attribute Configuration Example', 'key': 'chart-attributes-demo' },
      { 'nameCn': '常见问题示例', 'name': 'Examples of FAQs', 'key': 'chart-question' },
      { 'nameCn': '折线图', 'name': 'Line Chart', 'key': 'chart-line' },
      { 'nameCn': '柱状图', 'name': 'Histogram Chart', 'key': 'chart-histogram' },
      { 'nameCn': '条形图', 'name': 'Bar Chart', 'key': 'chart-bar' },
      { 'nameCn': '饼图', 'name': 'Pie Chart', 'key': 'chart-pie' },
      { 'nameCn': '环图', 'name': 'Ring Chart', 'key': 'chart-ring' },
      { 'nameCn': '瀑布图', 'name': 'Waterfall Chart', 'key': 'chart-waterfall' },
      { 'nameCn': '漏斗图', 'name': 'Funnel Chart', 'key': 'chart-funnel' },
      { 'nameCn': '雷达图', 'name': 'Radar Chart', 'key': 'chart-radar' },
      { 'nameCn': '地图', 'name': 'Map Chart', 'key': 'chart-map' },
      { 'nameCn': '桑基图', 'name': 'Sankey Chart', 'key': 'chart-sankey' },
      { 'nameCn': '热力图', 'name': 'Heatmap Chart', 'key': 'chart-heatmap' },
      { 'nameCn': '散点图', 'name': 'Scatter Chart', 'key': 'chart-scatter' },
      { 'nameCn': 'K线图', 'name': 'Candle Chart', 'key': 'chart-candle' },
      { 'nameCn': '仪表盘', 'name': 'Gauge Chart', 'key': 'chart-gauge' },
      { 'nameCn': '树图', 'name': 'Tree Chart', 'key': 'chart-tree' },
      { 'nameCn': '水球图', 'name': 'liquidfill Chart', 'key': 'chart-liquidfill' },
      { 'nameCn': '词云图', 'name': 'Wordcloud Chart', 'key': 'chart-wordcloud' },
      { 'nameCn': '旭日图', 'name': 'Sunburst Chart', 'key': 'chart-sunburst' },
      { 'nameCn': '拓扑图', 'name': 'Graph Chart', 'key': 'chart-graph' },
      { 'nameCn': '百度地图', 'name': 'BaiduMap Chart', 'key': 'chart-baidu-map' },
      { 'nameCn': '高德地图', 'name': 'Autonavi Chart', 'key': 'chart-autonavi-map' },
      { 'nameCn': '箱形图', 'name': 'Boxplot Chart', 'key': 'chart-boxplot' },
      { 'nameCn': '进度图', 'name': 'Process Chart', 'key': 'chart-process' }
    ]
  },
  {
    'label': '其他',
    'labelEn': 'Other',
    'key': 'cmp-other-components',
    'children': [
      { 'nameCn': '公告牌', 'name': 'BulletinBoard', 'key': 'bulletin-board' },
      { 'nameCn': '全局配置', 'name': 'ConfigProvider', 'key': 'config-provider' },
      { 'nameCn': '图片裁剪', 'name': 'Crop', 'key': 'crop' },
      { 'nameCn': '弹窗选择 ', 'name': 'DialogSelect ', 'key': 'dialog-select' },
      { 'nameCn': '过滤器面板', 'name': 'FilterPanel', 'key': 'filter-panel' },
      { 'nameCn': '浮动块', 'name': 'FloatBar', 'key': 'floatbar' },
      { 'nameCn': '全屏', 'name': 'Fullscreen', 'key': 'fullscreen' },
      { 'nameCn': '文字滚动', 'name': 'ScrollText', 'key': 'scroll-text' },
      { 'nameCn': '面板分割', 'name': 'Split', 'key': 'split' },
      { 'nameCn': '输入框', 'name': 'TextPopup', 'key': 'text-popup' },
      { 'nameCn': '联系人', 'name': 'UserContact', 'key': 'user-contact' },
      { 'nameCn': '水印', 'name': 'Watermark', 'key': 'watermark' },
      {
        'nameCn': '粘性布局',
        'name': 'Sticky',
        'key': 'sticky',
        'meta': {
          'stable': '3.19.0'
        }
      }
    ]
  },
  {
    'label': '自定义指令',
    'labelEn': 'Custom Instruction',
    'key': 'directives-custom-instruction',
    'children': [
      { 'nameCn': '超出隐藏', 'name': 'AutoTip', 'key': 'directives-auto-tip' },
      { 'nameCn': '高亮搜索字', 'name': 'HighlightQuery', 'key': 'directives-highlight-query' }
    ]
  }
]

const showBusiness = location.pathname.split('/')?.[2] === 'all'

// 对内文档开放业务组件
if (envTarget === 'inner' || showBusiness) {
  cmpMenus.splice(8, 0, {
    'label': '业务组件',
    'labelEn': 'Business Components',
    'key': 'cmp-business-components',
    'children': [
      { 'nameCn': '金额', 'name': 'Amount', 'key': 'amount' },
      { 'nameCn': '片区', 'name': 'Area', 'key': 'area' },
      { 'nameCn': '公司', 'name': 'Company', 'key': 'company' },
      { 'nameCn': '国家/地区', 'name': 'Country', 'key': 'country' },
      { 'nameCn': '币种', 'name': 'Currency', 'key': 'currency' },
      { 'nameCn': '部门', 'name': 'Dept', 'key': 'dept' },
      { 'nameCn': '下拉角色', 'name': 'DropRoles', 'key': 'drop-roles' },
      { 'nameCn': '消息弹框', 'name': 'Espace', 'key': 'espace' },
      { 'nameCn': '权签人', 'name': 'HrApprover', 'key': 'hrapprover' },
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
