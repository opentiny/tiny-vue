export const standaloneMenus = [
  {
    label: '组件总览',
    key: 'overview'
  }
]

export const docMenus = [
  {
    label: '使用指南',
    labelEn: 'Guide',
    key: 'doc_use',
    children: [
      {
        title: '更新日志',
        titleEn: 'Change Log',
        key: 'changelog'
      },
      {
        title: '组件介绍',
        titleEn: 'Introduce',
        key: 'introduce'
      },
      {
        title: '引入组件',
        titleEn: 'Import Component',
        key: 'import'
      },
      {
        title: '切换模式',
        titleEn: 'Switch Mode',
        key: 'mode'
      }
    ]
  }
]

export const cmpMenus = [
  {
    label: '导航组件',
    labelEn: 'Navigation',
    key: 'cmp_navigation',
    children: [
      { name: 'Navbar', nameCn: '导航栏', key: 'navbar' },
      { name: 'Tabbar', nameCn: '标签栏', key: 'tabbar' },
      { name: 'Tabs', nameCn: '选项卡', key: 'tabs' },
      { name: 'TimeLine ', nameCn: '时间轴', key: 'timeline' },
      { name: 'IndexBar ', nameCn: '索引条', key: 'index-bar' }
    ]
  },
  {
    label: '容器组件',
    labelEn: 'Container',
    key: 'cmp_container',
    children: [{ name: 'Dialog', nameCn: '对话框', key: 'dialogbox' }]
  },
  {
    label: '数据组件',
    labelEn: 'Data',
    key: 'cmp_data',
    children: [{ name: 'Progress', nameCn: '进度条', key: 'progress' }]
  },
  {
    label: '表单组件',
    labelEn: 'Form',
    key: 'cmp_form',
    children: [
      { name: 'Table', nameCn: '表格', key: 'table' },
      { name: 'Button', nameCn: '按钮', key: 'button' },
      { name: 'Form', nameCn: '表单', key: 'form' },
      { name: 'Checkbox', nameCn: '复选框', key: 'checkbox' },
      { name: 'Slider', nameCn: '滑块', key: 'slider' },
      { name: 'CheckboxGroup', nameCn: '复选框组', key: 'checkboxgroup' },
      { name: 'DropdownMenu ', nameCn: '筛选排序', key: 'dropdownmenu' },
      { name: 'ImageViewer', nameCn: '图片预览', key: 'imageviewer' },
      { name: 'Input', nameCn: '输入框', key: 'input' },
      { name: 'List', nameCn: '列表', key: 'list' },
      { name: 'Radio', nameCn: '单选', key: 'radio' },
      { name: 'Search', nameCn: '搜索框', key: 'search' },
      { name: 'Switch', nameCn: '开关', key: 'switch' },
      { name: 'Numeric', nameCn: '计数器 ', key: 'numeric' },
      { name: 'FileUpload', nameCn: '文件上传', key: 'file-upload' },
      { name: 'MultiSelect', nameCn: '下拉选择器', key: 'multi-select' }
    ]
  },
  {
    label: '提示组件',
    labelEn: 'Tooltip',
    key: 'cmp_tooltip',
    children: [
      { name: 'PullRefresh', nameCn: '下拉刷新', key: 'pull-refresh' },
      { name: 'Alert', nameCn: '提示', key: 'alert' },
      { name: 'Badge', nameCn: '徽章', key: 'badge' },
      { name: 'Loading', nameCn: '加载', key: 'loading' },
      { name: 'Modal', nameCn: '模态框', key: 'modal' },
      { name: 'Popover', nameCn: '气泡', key: 'popover' }
    ]
  },
  {
    label: '其它组件',
    labelEn: 'Others',
    key: 'cmp_others',
    children: [
      { name: 'Exception', nameCn: '缺省页', key: 'exception' },
      { name: 'Avatar', nameCn: '头像', key: 'avatar' },
      { name: 'Icon', nameCn: '图标', key: 'icon' },
      { name: 'ActionSheet', nameCn: '上滑列表组件', key: 'actionsheet' },
      { name: 'MiniPicker', nameCn: 'mini选择器', key: 'minipicker' },
      { name: 'UserHead', nameCn: '用户头像', key: 'user-head' }
    ]
  }
]
