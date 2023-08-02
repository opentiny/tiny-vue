export const tinyBaseAuroraTheme = {
  /* 1.1品牌色 */
  /* 品牌主色 */
  'ti-base-color-brand-6': '#1890ff' /* 主色蓝 */,
  /* 主色衍生色 */
  'ti-base-color-brand-8': '#096dd9', // 品牌色-8  active
  'ti-base-color-brand-7': '#0c82f0', // 品牌色-7
  'ti-base-color-brand-5': '#40a9ff', // 品牌色-5 // hover active
  'ti-base-color-brand-4': '#000', // 品牌色-4
  'ti-base-color-brand-3': '#8cc7f7', // 品牌色-3
  'ti-base-color-brand-2': '#e6f7ff', // 品牌色-2
  'ti-base-color-brand-1': '#f2f5fc', // 品牌色-1

  /* 1.2中立色 */
  /* 公用灰色系，用于文本、图标、线条、背景色 */
  'ti-base-color-common-9': '#181818', // 中立色-9
  'ti-base-color-common-8': '#2e3243', // 中立色-8 导航条背景
  'ti-base-color-common-7': '#333', // 中立色-7 默认文本色
  'ti-base-color-common-6': '#464c59', // 中立色-6
  'ti-base-color-common-5': '#666', // 中立色-5  次要文本
  'ti-base-color-common-4': '#54657e', // 中立色-4
  'ti-base-color-common-3': '#8a8e99', // 中立色-3
  'ti-base-color-common-2': '#666', // 中立色-2  文本禁用使用
  'ti-base-color-common-1': '#d9d9d9', // 中立色-1  分隔线，disabled

  /* 1.3背景色 */
  // 不变，前3个用不到， 后面的看不太出来。
  'ti-base-color-bg-9': '#cf1322', // 背景-9
  'ti-base-color-bg-8': '#f5222d', // 背景-8
  'ti-base-color-bg-7': '#ff4d4f', // 背景-7
  'ti-base-color-bg-6': '#eef0f5', // 背景-6
  'ti-base-color-bg-5': '#f5f5f5', // 背景-5
  'ti-base-color-bg-4': '#fafafa', // 背景-4
  'ti-base-color-bg-3': '#ffffff', // 背景-3
  'ti-base-color-bg-2': '#ffffff', // 背景-2
  'ti-base-color-bg-1': '#ffffff', // 背景-1

  /* 1.4功能色 */
  'ti-base-color-error-4': '#cf1322', // 错误-4
  'ti-base-color-error-3': '#f5222d', // 错误-3
  'ti-base-color-error-2': '#ff4d4f', // 错误-2
  'ti-base-color-error-1': '#d8bab5', // 错误-1

  'ti-base-color-success-4': '#389e0d', // 成功-4
  'ti-base-color-success-3': '#52c41a', // 成功-3
  'ti-base-color-success-2': '#73d13d', // 成功-2
  'ti-base-color-success-1': '#a6c3b9', // 成功-1

  'ti-base-color-warn-5': '#ffc53d', // 告警-5  文本色使用
  'ti-base-color-warn-4': '#faad14', // 告警-4  图标色使用
  'ti-base-color-warn-3': '#ffc53d', // 告警-3  未使用到, 补一个色
  'ti-base-color-warn-2': '#ffc53d', //  告警-2  border使用
  'ti-base-color-warn-1': '#d3c6a2', // 告警-1  背景使用

  /* 2.公共色：此处颜色为组件场景色，根据使用场景分为以下几大类，具体组件引用以下颜色，如在使用过程中有问题，请自行按类别添加 */
  /**
   * 2.1 基础色
   **/
  'ti-common-color-transparent': 'var(--ti-base-color-transparent)',
  'ti-common-color-light': '#fff',
  'ti-common-color-dark': '#000',

  /**
   * 2.2 提示类型颜色
   * 用于 alert组件、Modal（message）组件、Tag 标签组件、Notify 通知组件涉及功能提示的背景、文字、图标等的颜色使用
   **/
  'ti-common-color-text-success': '#333', // 成功-文字色
  'ti-common-color-success-bg': '#f6ffed', // 成功-背景色
  'ti-common-color-success-border': '#95de64', // 成功-边框色

  'ti-common-color-error-text': 'var(--ti-base-color-error-3)', // 错误-文字色
  'ti-common-color-error-bg': '#fff1f0', // 错误-背景色/校验背景色
  'ti-common-color-error-border': '#ff7875', // 错误-校验边框色

  'ti-common-color-info': '#909399', // 信息-图标色/状态图标-信息
  'ti-common-color-info-text': '#909399', // 信息-文字色
  'ti-common-color-info-bg': 'rgba(51, 51, 51, 0.06)', // 信息-背景色
  'ti-common-color-info-border': 'rgba(51,51,51,.15)', // 信息-边框色

  'ti-common-color-warn-text': '#333', // 告警-文字色
  'ti-common-color-warn-bg': '#fffbe6', // 告警-背景色
  'ti-common-color-warn-border': '#ffd666', // 告警-边框色

  'ti-common-color-prompt-text': '#333', // 提示-图标色
  'ti-common-color-prompt-bg': '#e6f7ff', // 提示-背景色
  'ti-common-color-prompt-border': '#91d5ff', // 提示-边框色

  /**
   * 2.3 交互类型颜色
   * 用于涉及 primary / success / warning / danger / info 类型区分，拥有状态或交互的组件（没有边框）
   * 例如：Button组件、Badge 标记、Link 文字链接，需要标识一些交互的状态颜色：hover、active、disabled
   **/
  'ti-common-color-primary-active': 'var(--ti-base-color-brand-8)',
  'ti-common-color-primary-disabled': '#bfbfbf',
  'ti-common-color-primary-disabled-bgcolor': '#d9d9d9',
  'ti-common-color-primary-disabled-border': '#bfbfbf',
  'ti-common-color-primary-disabled-text': '#fff',

  'ti-common-color-success-disabled-bgcolor': '#a6c3b9',
  'ti-common-color-success-active': 'var(--ti-base-color-success-4)',
  'ti-common-color-success-disabled': 'var(--ti-base-color-success-1)', // 禁用背景色
  'ti-common-color-success-disabled-border': 'var(--ti-base-color-success-1)', // 禁用边框色
  'ti-common-color-success-disabled-text': '#fff', // 禁用文本色

  'ti-common-color-warning-disabled': '#d3c6a2',
  'ti-common-color-warning-disabled-bgcolor': '#d3c6a2',
  'ti-common-color-warning-disabled-border': '#d3c6a2',
  'ti-common-color-warning-disabled-text': '#fff',

  'ti-common-color-danger-disabled': '#d8bab5',
  'ti-common-color-danger-disabled-bgcolor': '#d8bab5',
  'ti-common-color-danger-disabled-border': '#d8bab5',
  'ti-common-color-danger-disabled-text': '#fff',

  'ti-common-color-info-disabled': '#bfbfbf',
  'ti-common-color-info-disabled-bgcolor': '#bfbfbf',
  'ti-common-color-info-disabled-border': '#bfbfbf',
  'ti-common-color-info-disabled-text': '#fff',

  /**
   * 2.4 文本色
   **/
  'ti-common-color-text-primary': 'var(--ti-base-color-common-7)', // 一级文本色-重要信息/标题颜色/输入类文本颜色
  'ti-common-color-text-secondary': '#666', // 二级文本色-次要信息
  'ti-common-color-text-weaken': 'var(--ti-base-color-common-3)', // 三级文本色-弱化信息/说明文字 未使用
  'ti-common-color-text-disabled': '#999', // 文本禁用信息
  'ti-common-color-text-darkbg': 'var(--ti-base-color-common-2)', // 深色背景下文本信息 未使用
  'ti-common-color-text-darkbg-disabled': 'var(--ti-base-color-common-5)', // 深色背景下文本信息禁用色 未使用
  'ti-common-color-text-link': '#606266', // 链接色
  'ti-common-color-text-link-hover': '#40a9ff', // 链接悬浮色
  'ti-common-color-text-link-darkbg': 'var(--ti-base-color-brand-4)', // 深色背景链接色
  'ti-common-color-text-link-darkbg-hover': 'var(--ti-base-color-brand-3)', // 深色背景链接悬浮色
  'ti-common-color-text-highlight': 'var(--ti-base-color-brand-6)', // 文本高亮色
  'ti-common-color-text-white': 'var(--ti-base-color-white)', // 深色背景或图标上文字色
  'ti-common-color-text-gray': 'var(--ti-base-color-white)', // 深色背景下的文本色，用于tip
  'ti-common-color-text-gray-disabled': 'var(--ti-base-color-common-4)', // 深色背景下的灰色文本禁用色，用于tab页签中
  'ti-common-color-text-important': 'var(--ti-base-color-error-4)', // 文本_金额
  'ti-common-color-placeholder': '#999', // NewCssVar 占位/禁用文本颜色
  'ti-common-color-selected-text-color': '#333', // 默认/选中时的文本颜色

  /**
   * 2.5 图标色
   **/

  // 浅底背景图标色
  'ti-common-color-icon-normal': 'var(--ti-base-color-brand-6)',
  'ti-common-color-icon-hover': 'var(--ti-base-color-brand-6)',
  'ti-common-color-icon-active': 'var(--ti-base-color-brand-6)',
  'ti-common-color-icon-disabled': '#999', // 图标禁用色/状态图标-禁用、停止
  'ti-common-color-icon-white': 'var(--ti-base-color-white)',

  // 灰色背景下图标色
  'ti-common-color-icon-graybg-normal': '#999',
  'ti-common-color-icon-graybg-hover': '#999',
  'ti-common-color-icon-graybg-active': 'var(--ti-base-color-brand-6)',
  'ti-common-color-icon-graybg-disabled': '#999',

  // 深底背景图标色
  'ti-common-color-icon-darkbg-normal': 'var(--ti-base-color-common-2)',
  'ti-common-color-icon-darkbg-hover': 'var(--ti-base-color-brand-5)',
  'ti-common-color-icon-darkbg-active': 'var(--ti-base-color-brand-5)',
  'ti-common-color-icon-darkbg-disabled': 'var(--ti-base-color-common-5)',

  // 状态图标背景色
  'ti-common-color-icon-info': 'var(--ti-base-color-icon-info)', // 状态图标-常规、信息提示

  /**
   * 2.6 背景色
   **/
  /* 基础背景色 各状态色 */
  'ti-common-color-bg-normal': 'var(--ti-base-color-bg-6)', // 通用背景-页面背景色/下拉搜索框背景色/标签背景色
  'ti-common-color-bg-emphasize': 'var(--ti-base-color-brand-6)', // 背景高亮色
  'ti-common-color-bg-disabled': '#f5f5f5',
  'ti-common-color-bg-hover': 'var(--ti-base-color-brand-8)', // 主色背景悬浮色
  'ti-common-color-bg-gray': 'var(--ti-base-color-bg-4)', // 新区域组件-悬浮背景色
  'ti-common-color-bg-secondary': 'var(--ti-base-color-common-2)', // 开关组件-关闭状态-背景色

  /* 重要背景色，主要用于重要按钮场景。仅用于NG的button组件 */
  'ti-common-bg-primary': 'var(--ti-base-color-bg-8)', // 重要按钮背景色
  'ti-common-bg-primary-hover': 'var(--ti-base-color-bg-7)', // 重要按钮背景悬浮、focus色
  'ti-common-bg-primary-active': 'var(--ti-base-color-bg-9)', // 重要按钮背景色按下色

  /* 次要背景色，主要用于次要按钮场景 */
  'ti-common-bg-minor': 'var(--ti-base-color-bg-2)', // 次要按钮背景色
  'ti-common-bg-minor-hover': 'var(--ti-base-color-bg-1)', // 次要按钮背景悬浮、focus色
  'ti-common-bg-minor-active': 'var(--ti-base-color-bg-3)', // 次要按钮背景色按下色

  /* 白底背景状态色 */
  'ti-common-color-bg-white-normal': 'var(--ti-base-color-white)', // 白色背景，用于输入框背景
  'ti-common-color-bg-white-emphasize': 'var(--ti-base-color-brand-1)', // 白色hover或强调色，如表头背景、表格悬浮、下拉选项悬浮背景

  /* 浅底背景状态色 */
  'ti-common-color-bg-light-normal': 'var(--ti-base-color-brand-2)', // 滑块slider-背景色/多选快buttongroup-默认背景色/树组件选中背景色
  'ti-common-color-bg-light-emphasize': 'var(--ti-base-color-brand-3)', // 浅背景hover或强调色，开关组件“开”禁用背景色

  /* 深色底背景状态色 */
  'ti-common-color-bg-dark-normal': 'var(--ti-base-color-common-6)', // 一级tab页签背景色
  'ti-common-color-bg-dark-emphasize': 'var(--ti-base-color-common-4)', // 一级tab页签背景-悬浮色
  'ti-common-color-bg-dark-active': 'var(--ti-common-color-bg-normal)', // 一级tab页签背景-激活/focus状态背景色
  'ti-common-color-bg-dark-deep': 'var(--ti-base-color-common-6)', // tip、alert提示背景色
  'ti-common-color-bg-dark-disabled': 'var(--ti-base-color-common-1)', // 深色背景禁用色，开关组件“关”禁用背景色

  /* 顶部导航背景色,用于navMenu */
  'ti-common-color-bg-navigation': '#2e3243', // 深色导航背景色
  'ti-common-color-bg-dark-select': 'var(--ti-base-color-common-9)', // 顶部导航下拉背景色

  /**
   * 这里类选择组件都使用这里的状态颜色：Select、Autocomplete、Cascader、DatePicker、DropTimes、Search、TimePicker、Roles
   * TimeSelect、Amount、Area、Company、Country、Currency、Dept、DropRoles、Hrapprover、User、Calendar
   **/
  'ti-common-color-selected-background': '#f5f5f5', // 选中高亮背景色
  'ti-common-color-hover-background': '#e6f7ff', //  NewCssVar 组件或者组件下拉选项hover时的背景色

  /**
   * 2.7 图表色
   **/
  'ti-common-color-data-1': 'var(--ti-base-color-success-3)', // 图表数据色-1
  'ti-common-color-data-2': 'var(--ti-base-color-icon-info)', // 图表数据色-2
  'ti-common-color-data-3': 'var(--ti-base-color-data-3)', // 图表数据色-3
  'ti-common-color-data-4': 'var(--ti-base-color-data-4)', // 图表数据色-4
  'ti-common-color-data-5': 'var(--ti-base-color-data-5)', // 图表数据色-5
  'ti-common-color-data-6': 'var(--ti-base-color-warn-3)', // 图表数据色-6
  'ti-common-color-data-7': 'var(--ti-base-color-warn-4)', // 图表数据色-7
  'ti-common-color-data-8': 'var(--ti-base-color-error-3)', // 图表数据色-8

  /**
   * 2.8 行高
   * TinyNG只有一个1.5倍的行高,其余行高抽出来是为了适配AUI，但是全局都是1.5倍行高可以保持风格统一
   */

  'ti-common-line-height-number': '1.5', // 文字行高倍数，建议组件中设置行高使用该变量，如有特殊情况，请自行定义
  'ti-common-line-height-base': '12px', // NewCssVar 跟字号保持一致
  'ti-common-line-height-1': '14px', // NewCssVar
  'ti-common-line-height-2': '16px', // NewCssVar
  'ti-common-line-height-3': '18px', // NewCssVar
  'ti-common-line-height-4': '20px', // NewCssVar
  'ti-common-line-height-5': '24px', // NewCssVar
  'ti-common-line-height-6': '32px', // NewCssVar
  'ti-common-line-height-7': '36px', // NewCssVar

  /**
   * 2.9 间距
   * 适用于组件中的margin、padding
   **/

  /* 基础间距 */
  'ti-common-space-base': '4px',
  'ti-common-space-2x': 'calc(var(--ti-common-space-base) * 2)', // 间距-2
  'ti-common-space-3x': 'calc(var(--ti-common-space-base) * 3)', // 间距-3
  'ti-common-space-4x': 'calc(var(--ti-common-space-base) * 4)', // 间距-4
  'ti-common-space-5x': 'calc(var(--ti-common-space-base) * 5)', // 间距-5
  'ti-common-space-6x': 'calc(var(--ti-common-space-base) * 6)', // 间距-6
  'ti-common-space-8x': 'calc(var(--ti-common-space-base) * 8)', // 间距-7
  'ti-common-space-10x': 'calc(var(--ti-common-space-base) * 10)', // 间距-8

  /* 其他间距 */
  'ti-common-space-0': '0px', // 其他间距-1
  'ti-common-space-1': '1px', // 其他间距-2
  'ti-common-space-6': '6px', // 其他间距-3
  'ti-common-space-10': '10px', // 其他间距-4
  'ti-common-dropdown-gap': '2px', // NewCssVar 下拉面板距离上部输入框的间距

  /**
   * 2.10 阴影
   **/
  'ti-common-shadow-1-up': '0 -1px 4px 0 rgba(0, 0, 0, 0.1)', // 阴影-1 上
  'ti-common-shadow-1-down': '0 1px 4px 0 rgba(0, 0, 0, 0.1)', // 阴影-1 下
  'ti-common-shadow-1-left': '-1px 0px 4px 0 rgba(0, 0, 0, 0.1)', // 阴影-1 左
  'ti-common-shadow-1-right': '1px 0px 4px 0 rgba(0, 0, 0, 0.1)', // 阴影-1 右
  'ti-common-shadow-2-up': '0 -2px 8px 0 rgba(0, 0, 0, 0.2)', // 阴影-2 上
  'ti-common-shadow-2-down': '0 2px 12px rgba(0, 0, 0, 0.1)', // 阴影-2 下 select 等下拉弹框的阴影
  'ti-common-shadow-2-left': '-2px 0 8px 0 rgba(238, 10, 10, 0.2)', // 阴影-2 左
  'ti-common-shadow-2-right': '2px 0 8px 0 rgba(252, 5, 5, 0.2)', // 阴影-2 右
  'ti-common-shadow-3-up': '0 -4px 16px 0 rgba(0, 0, 0, 0.2)', // 阴影-3 上
  'ti-common-shadow-3-down': '0 4px 16px 0 rgba(0, 0, 0, 0.2)', // 阴影-3 下
  'ti-common-shadow-3-left': '-4px 0 16px 0 rgba(0, 0, 0, 0.2)', // 阴影-3 左
  'ti-common-shadow-3-right': '4px 0 16px 0 rgba(0, 0, 0, 0.2)', // 阴影-3 右
  'ti-common-shadow-4-up': '0 -8px 40px 0 rgba(0, 0, 0, 0.2)', // 阴影-4 上
  'ti-common-shadow-4-down': '0 8px 40px 0 rgba(0, 0, 0, 0.2)', // 阴影-4 下
  'ti-common-shadow-4-left': '-8px 0 40px 0 rgba(0, 0, 0, 0.2)', // 阴影-4 左
  'ti-common-shadow-4-right': '0 0 10px 0 rgba(0, 0, 0, 0.2)', // 阴影-4 右  modal等弹窗的阴影

  /* 提示类阴影 */
  'ti-common-shadow-error': '0 1px 3px 0 rgba(199, 54, 54, 0.25)', // 错误
  'ti-common-shadow-warn': '0 1px 3px 0 rgba(204, 100, 20, 0.25)', // 告警
  'ti-common-shadow-prompt': '0 1px 3px 0 rgba(70, 94, 184, 0.25)', // 提示
  'ti-common-shadow-success': '0 1px 3px 0 rgba(39, 176, 128, 0.25)', // 成功

  /**
   * 2.11 字体
   **/
  'ti-common-font-family': 'Helvetica, Arial, microsoft yahei',

  /**
   * 2.12 字号
   **/
  'ti-common-font-size-base': '12px', // NewCssVar 正文-常规
  'ti-common-font-size-1': '14px', // NewCssVar 标题-小
  'ti-common-font-size-2': '16px', // NewCssVar 标题-中
  'ti-common-font-size-3': '18px', // NewCssVar 标题-大
  'ti-common-font-size-4': '20px', // NewCssVar 字号-4
  'ti-common-font-size-5': '24px', // NewCssVar 字号-5
  'ti-common-font-size-6': '32px', // NewCssVar 字号-6
  'ti-common-font-size-7': '36px', // NewCssVar 字号-7

  /**
   * 2.13 字重
   **/
  'ti-common-font-weight-1': '100', // 极细
  'ti-common-font-weight-2': '200', // 纤细
  'ti-common-font-weight-3': '300', // 细体
  'ti-common-font-weight-4': 'normal', // 常规
  'ti-common-font-weight-5': '500', // 中等
  'ti-common-font-weight-6': '600', // 半粗
  'ti-common-font-weight-7': 'bold', // 粗体
  'ti-common-font-weight-8': '800', // 中黑
  'ti-common-font-weight-9': '900', // 黑体
  'ti-common-font-weight-bold': '700', // NewCssVar

  /**
   * 2.14 线颜色
   * 用于边框，分割线等的颜色使用
   **/
  'ti-common-color-line-normal': 'var(--ti-base-color-common-1)', // 边框默认色
  'ti-common-color-line-hover': 'var(--ti-base-color-brand-6)', // 边框悬浮色
  'ti-common-color-line-active': 'var(--ti-base-color-brand-6)',
  'ti-common-color-line-disabled': 'var(--ti-base-color-common-1)', // 边框禁用色
  'ti-common-color-line-dividing': 'var(--ti-base-color-common-1)', // 分割线颜色
  /* 虚线 */
  'ti-common-color-dash-line-normal': 'var(--ti-base-color-common-5)',
  'ti-common-color-dash-line-hover': 'var(--ti-base-color-brand-7)',
  /* 待整改后删除 */
  'ti-common-color-border': 'var(--ti-base-color-common-1)', // 边框默认色
  'ti-common-color-border-hover': 'var(--ti-base-color-brand-6)', // 边框悬浮色

  /**
   * 2.15 线粗细
   **/
  'ti-common-border-weight-normal': '1px', // 常规
  'ti-common-border-weight-1': '2px', // 较粗
  'ti-common-border-weight-2': '3px', // 粗

  /**
   * 2.16 线样式
   **/
  'ti-common-border-style-dashed': 'dasehd', // 虚线
  'ti-common-border-style-dotted': 'dotted', // 点线
  'ti-common-border-style-solid': 'solid', // 实线

  /**
   * 2.17 圆角
   **/
  'ti-common-border-radius-normal': '2px', // 常规
  'ti-common-border-radius-0': '0px', // 直角 未使用
  'ti-common-border-radius-1': '4px', // 圆角-1
  'ti-common-border-radius-2': '8px', // 圆角-2
  'ti-common-border-radius-3': '50%', // 圆形

  /**
   * 2.18 尺寸
   **/
  'ti-common-size-base': '4px', // 基础尺寸
  'ti-common-size-2x': 'calc(var(--ti-common-size-base) * 2)', // 尺寸-2
  'ti-common-size-3x': 'calc(var(--ti-common-size-base) * 3)', // 尺寸-3
  'ti-common-size-4x': 'calc(var(--ti-common-size-base) * 4)', // 尺寸-4
  'ti-common-size-5x': 'calc(var(--ti-common-size-base) * 5)', // 尺寸-5
  'ti-common-size-6x': 'calc(var(--ti-common-size-base) * 6)', // 尺寸-6
  'ti-common-size-7x': 'calc(var(--ti-common-size-base) * 7)', // 尺寸-7
  'ti-common-size-8x': 'calc(var(--ti-common-size-base) * 8)', // 尺寸-8
  'ti-common-size-9x': 'calc(var(--ti-common-size-base) * 9)', // 尺寸-9
  'ti-common-size-10x': 'calc(var(--ti-common-size-base) * 10)', // 尺寸-10
  'ti-common-size-11x': 'calc(var(--ti-common-size-base) * 11)', // 尺寸-11
  'ti-common-size-12x': 'calc(var(--ti-common-size-base) * 12)', // 尺寸-12
  'ti-common-size-13x': 'calc(var(--ti-common-size-base) * 13)', // 尺寸-13
  'ti-common-size-14x': 'calc(var(--ti-common-size-base) * 14)', // 尺寸-14
  'ti-common-size-15x': 'calc(var(--ti-common-size-base) * 15)', // 尺寸-15
  'ti-common-size-16x': 'calc(var(--ti-common-size-base) * 16)', // 尺寸-16
  'ti-common-size-17x': 'calc(var(--ti-common-size-base) * 17)', // 尺寸-17
  'ti-common-size-18x': 'calc(var(--ti-common-size-base) * 18)', // 尺寸-18
  'ti-common-size-19x': 'calc(var(--ti-common-size-base) * 19)', // 尺寸-19
  'ti-common-size-20x': 'calc(var(--ti-common-size-base) * 20)', // 尺寸-20
  'ti-common-size-21x': 'calc(var(--ti-common-size-base) * 21)', // 尺寸-21
  'ti-common-size-22x': 'calc(var(--ti-common-size-base) * 22)', // 尺寸-22
  'ti-common-size-23x': 'calc(var(--ti-common-size-base) * 23)', // 尺寸-23
  'ti-common-size-24x': 'calc(var(--ti-common-size-base) * 24)', // 尺寸-24
  'ti-common-size-25x': 'calc(var(--ti-common-size-base) * 25)', // 尺寸-25
  'ti-common-size-26x': 'calc(var(--ti-common-size-base) * 26)', // 尺寸-26
  'ti-common-size-27x': 'calc(var(--ti-common-size-base) * 27)', // 尺寸-27
  'ti-common-size-28x': 'calc(var(--ti-common-size-base) * 28)', // 尺寸-28
  'ti-common-size-29x': 'calc(var(--ti-common-size-base) * 29)', // 尺寸-29
  'ti-common-size-30x': 'calc(var(--ti-common-size-base) * 30)', // 尺寸-30
  'ti-common-size-31x': 'calc(var(--ti-common-size-base) * 31)', // 尺寸-31
  'ti-common-size-32x': 'calc(var(--ti-common-size-base) * 32)', // 尺寸-32
  'ti-common-size-33x': 'calc(var(--ti-common-size-base) * 33)', // 尺寸-33
  'ti-common-size-34x': 'calc(var(--ti-common-size-base) * 34)', // 尺寸-34
  'ti-common-size-35x': 'calc(var(--ti-common-size-base) * 35)', // 尺寸-35
  'ti-common-size-36x': 'calc(var(--ti-common-size-base) * 36)', // 尺寸-36
  'ti-common-size-37x': 'calc(var(--ti-common-size-base) * 37)', // 尺寸-37
  'ti-common-size-38x': 'calc(var(--ti-common-size-base) * 38)', // 尺寸-38
  'ti-common-size-39x': 'calc(var(--ti-common-size-base) * 39)', // 尺寸-39
  'ti-common-size-40x': 'calc(var(--ti-common-size-base) * 40)', // 尺寸-40
  'ti-common-size-41x': 'calc(var(--ti-common-size-base) * 41)', // 尺寸-41
  'ti-common-size-42x': 'calc(var(--ti-common-size-base) * 42)', // 尺寸-42
  'ti-common-size-43x': 'calc(var(--ti-common-size-base) * 43)', // 尺寸-43
  'ti-common-size-44x': 'calc(var(--ti-common-size-base) * 44)', // 尺寸-44
  'ti-common-size-45x': 'calc(var(--ti-common-size-base) * 45)', // 尺寸-45
  'ti-common-size-46x': 'calc(var(--ti-common-size-base) * 46)', // 尺寸-46
  'ti-common-size-47x': 'calc(var(--ti-common-size-base) * 47)', // 尺寸-47
  'ti-common-size-48x': 'calc(var(--ti-common-size-base) * 48)', // 尺寸-48
  'ti-common-size-49x': 'calc(var(--ti-common-size-base) * 49)', // 尺寸-49
  'ti-common-size-50x': 'calc(var(--ti-common-size-base) * 50)', // 尺寸-50

  /*  其他尺寸 */
  'ti-common-size-0': '0px', // 其他尺寸-1
  'ti-common-size-auto': 'auto', // 其他尺寸-2

  /* 以下变量是因为AUI拥有大量的large、medium、normal、minor、samll、mini尺寸， 所以下方是一些抽象尺寸、为了更好的适配AUI (button、tag、alert组件) */
  'ti-common-size-width-large': 'var(--ti-common-size-33x)', // NewCssVar
  'ti-common-size-width-medium': 'var(--ti-common-size-30x)', // NewCssVar
  'ti-common-size-width-normal': 'var(--ti-common-size-20x)', // NewCssVar
  'ti-common-size-width-minor': '30px', // NewCssVar 待删除

  'ti-common-size-height-large': 'var(--ti-common-size-12x)', // NewCssVar
  'ti-common-size-height-medium': 'var(--ti-common-size-10x)', // NewCssVar
  'ti-common-size-height-small': 'var(--ti-common-size-8x)', // NewCssVar
  'ti-common-size-height-normal': '30px', // NewCssVar 基本高度值（Button、Input）
  'ti-common-size-height-mini': 'var(--ti-common-size-6x)' // NewCssVar
}

export * from './component'
