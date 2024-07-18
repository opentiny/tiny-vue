export const standaloneMenus = [
  {
    label: '组件总览',
    key: 'overview'
  }
]

export const docMenus = []

export const cmpMenus = [
  {
    label: '导航组件',
    labelEn: 'Navigation',
    key: 'cmp-navigation-components',
    children: [
      { name: 'Tabbar', nameCn: '标签栏', key: 'tabbar' },
      { name: 'CalendarBar', nameCn: '日历栏', key: 'calendar-bar' },
      { name: 'Filter', nameCn: '过滤器', key: 'filter' },
      { name: 'FilterBar', nameCn: '过滤栏', key: 'filter-bar' },
      { name: 'Steps ', nameCn: '步骤条', key: 'steps' },
      { name: 'Tabs ', nameCn: '标签页', key: 'tabs' },
      { name: 'Menu ', nameCn: '菜单', key: 'menu' },
      { name: 'TimeLine ', nameCn: '时间线', key: 'time-line' },
      //  测试时打开该行---------------
      // { name: 'TimeLineNew ', nameCn: '时间线AUI', key: 'time-line-new' },
      { name: 'Dropdown ', nameCn: '下拉菜单', key: 'dropdown' },
      { name: 'Flowchart ', nameCn: '流程图', key: 'flowchart' }
    ]
  },
  {
    label: '容器组件',
    labelEn: 'Container',
    key: 'cmp-container-components',
    children: [
      { name: 'Cell', nameCn: '单元格', key: 'cell' },
      { name: 'ActionSheet', nameCn: '动作面板', key: 'action-sheet' },
      { name: 'Drawer', nameCn: '抽屉', key: 'drawer' },
      { name: 'Card', nameCn: '卡片', key: 'card' },
      { name: 'Carousel', nameCn: '走马灯', key: 'carousel' },
      { name: 'Collapse', nameCn: '折叠面板', key: 'collapse' },
      { name: 'Scrollbar', nameCn: '滚动条', key: 'scrollbar' },
      { name: 'CascaderSelect', nameCn: '级联选择', key: 'cascader-select' },
      { name: 'CascaderMobile', nameCn: '级联选择移动', key: 'cascader-mobile' },
      { name: 'CascaderView', nameCn: '级联选择视图', key: 'cascader-view' },
      { name: 'DialogBox', nameCn: '对话框', key: 'dialog-box' }
    ]
  },
  {
    label: '表单组件',
    labelEn: 'Form',
    key: 'cmp-form-components',
    children: [
      { name: 'DatePickerMobile', nameCn: '日期选择器', key: 'date-picker-mobile' },
      { name: 'DatePicker', nameCn: '日期选择器多端', key: 'date-picker' },
      { name: 'TimePickerMobile', nameCn: '时间选择器', key: 'time-picker-mobile' },
      { name: 'Button', nameCn: '按钮', key: 'button' },
      { name: 'Checkbox', nameCn: '复选框', key: 'checkbox' },
      { name: 'Form', nameCn: '表单', key: 'form' },
      { name: 'Input', nameCn: '输入框', key: 'input' },
      { name: 'Numeric', nameCn: '计数器', key: 'numeric' },
      { name: 'Radio', nameCn: '单选框', key: 'radio' },
      { name: 'RadioButton', nameCn: '单选块', key: 'radio-block' },
      { name: 'Search', nameCn: '搜索', key: 'search' },
      { name: 'Select', nameCn: '选择器', key: 'select' },
      { name: 'SelectMobile', nameCn: '面板选择器', key: 'select-mobile' },
      { name: 'SelectView', nameCn: '页面选择器', key: 'select-view' },
      { name: 'Slider', nameCn: '滑块', key: 'slider' },
      { name: 'SliderButton', nameCn: '滑动按钮组', key: 'slider-button' },
      { name: 'Switch', nameCn: '开关', key: 'switch' },
      { name: 'FileUpload', nameCn: '文件上传', key: 'file-upload' },
      { name: 'Record', nameCn: '语音录入', key: 'record' },
      { name: 'Signature', nameCn: '手写签名', key: 'signature' },
      { name: 'Cascader', nameCn: '级联选择器', key: 'cascader' }
    ]
  },
  {
    label: '数据组件',
    labelEn: 'Data',
    key: 'cmp-data-components',
    children: [
      { name: 'ColumnListItem', nameCn: '分区列表项', key: 'column-list-item' },
      { name: 'StandardListItem', nameCn: '标准列表项', key: 'standard-list-item' },
      { name: 'Progress', nameCn: '进度条', key: 'progress' },
      { name: 'PullRefresh', nameCn: '下拉刷新', key: 'pull-refresh' },
      { name: 'Pager', nameCn: '分页', key: 'pager' }
    ]
  },
  {
    'label': '表格组件',
    'labelEn': 'Table Components',
    'key': 'cmp-table-components',
    'children': [{ 'nameCn': '基本用法', 'name': 'Grid', 'key': 'grid' }]
  },
  {
    label: '提示组件',
    labelEn: 'Tooltip',
    key: 'cmp-tips-components',
    children: [
      { name: 'Alert', nameCn: '警告', key: 'alert' },
      { name: 'Badge', nameCn: '标记', key: 'badge' },
      { name: 'Loading', nameCn: '加载', key: 'loading' },
      { name: 'Tooltip', nameCn: '文字提示', key: 'tooltip' },
      { name: 'Popover', nameCn: '气泡框', key: 'popover' },

      { name: 'Popconfirm', nameCn: '气泡确认框', key: 'popconfirm' },
      { name: 'Message', nameCn: '提示框', key: 'message' },
      { name: 'Modal', nameCn: '模态框', key: 'modal' }
    ]
  },
  {
    label: '其它组件',
    labelEn: 'Others',
    key: 'cmp-other-components',
    children: [
      { name: 'Exception', nameCn: '缺省页', key: 'exception' },
      { name: 'Image', nameCn: '图片预览', key: 'image' },
      { name: 'Rate', nameCn: '评分', key: 'rate' },
      { name: 'Tag', nameCn: '标签', key: 'tag' },
      { name: 'TagGroup', nameCn: '标签组', key: 'tag-group' },
      { name: 'UserHead', nameCn: '用户头像', key: 'user-head' },
      { name: 'Amount', nameCn: '金额', key: 'amount' },
      { name: 'currency', nameCn: '币种', key: 'currency' },
      { name: 'CalendarView', nameCn: '日历', key: 'calendar-view' },
      { name: 'FloatingButton', nameCn: '悬浮按钮', key: 'floating-button' }
    ]
  }
]
