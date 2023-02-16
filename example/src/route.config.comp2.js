export default [
  {
    path: 'alert',
    meta: { title: '提示组件-Alert 警告', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/basic-usage.md')
  },
  {
    path: 'alert/alert-type',
    meta: { title: '提示组件-Alert 警告-类型', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/alert-type.md')
  },
  {
    path: 'alert/large-size',
    meta: { title: '提示组件-Alert 警告-大尺寸', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/large-size.md')
  },
  {
    path: 'alert/custom-title',
    meta: { title: '提示组件-Alert 警告-自定义标题', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/custom-title.md')
  },
  {
    path: 'alert/align-center',
    meta: { title: '提示组件-Alert 警告-文字居中', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/align-center.md')
  },
  {
    path: 'alert/custom-close-text',
    meta: { title: '提示组件-Alert 警告-自定义关闭按钮文本', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/custom-close-text.md')
  },
  {
    path: 'alert/custom-alert-icon',
    meta: { title: '提示组件-Alert 警告-自定义警告图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/custom-alert-icon.md')
  },
  {
    path: 'alert/not-closable',
    meta: { title: '提示组件-Alert 警告-不可关闭', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/not-closable.md')
  },
  {
    path: 'alert/custom-description',
    meta: { title: '提示组件-Alert 警告-自定义提示内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/custom-description.md')
  },
  {
    path: 'alert/interactive-operation',
    meta: { title: '提示组件-Alert 警告-自定义交互操作', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/interactive-operation.md')
  },
  {
    path: 'alert/alert-close-event',
    meta: { title: '提示组件-Alert 警告-关闭事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/alert-close-event.md')
  },
  {
    path: 'alert/feedback-of-result',
    meta: { title: '提示组件-Alert 警告-表单提交结果反馈', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/feedback-of-result.md')
  },
  {
    path: 'alert/show-icon',
    meta: { title: '提示组件-Alert 警告-显示图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-alert' */ './docs/zh-CN/alert/show-icon.md')
  },
  {
    path: 'tree/render-content',
    meta: { title: '数据组件-Tree 树形控件-自定义内容区渲染', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/render-content.md')
  },
  {
    path: 'tree/show-checkbox',
    meta: { title: '数据组件-Tree 树形控件-节点可被选择', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/show-checkbox.md')
  },
  {
    path: 'tree/node-draggable',
    meta: { title: '数据组件-Tree 树形控件-可拖拽节点', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/node-draggable.md')
  },
  {
    path: 'tree/allow-drag',
    meta: { title: '数据组件-Tree 树形控件-自定义节点能否被拖拽', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/allow-drag.md')
  },
  {
    path: 'tree/allow-drop',
    meta: { title: '数据组件-Tree 树形控件-自定义目标节点能否被放置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/allow-drop.md')
  },
  {
    path: 'tree/node-props-config',
    meta: { title: '数据组件-Tree 树形控件-数据节点属性配置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/node-props-config.md')
  },
  {
    path: 'tree/lazy-load-node',
    meta: { title: '数据组件-Tree 树形控件-懒加载子节点', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/lazy-load-node.md')
  },
  {
    path: 'tree/highlight-current',
    meta: { title: '数据组件-Tree 树形控件-高亮当前选中节点', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/highlight-current.md')
  },
  {
    path: 'tree/filter-node',
    meta: { title: '数据组件-Tree 树形控件-节点过滤', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/filter-node.md')
  },
  {
    path: 'tree/accordion-mode',
    meta: { title: '数据组件-Tree 树形控件-手风琴模式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/accordion-mode.md')
  },
  {
    path: 'tree/indent',
    meta: { title: '数据组件-Tree 树形控件-水平缩进', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/indent.md')
  },
  {
    path: 'tree/contextmenu',
    meta: { title: '数据组件-Tree 树形控件-自定义右键菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/contextmenu.md')
  },
  {
    path: 'tree/custom-node-icon',
    meta: { title: '数据组件-Tree 树形控件-自定义展开折叠图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/custom-node-icon.md')
  },
  {
    path: 'tree/show-radio',
    meta: { title: '数据组件-Tree 树形控件-单选', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tree' */ './docs/zh-CN/tree/single-select-radio.md')
  },
  {
    path: 'select',
    meta: { title: '表单组件-Select 选择器', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/basic-usage.md')
  },
  {
    path: 'select/multi-select',
    meta: { title: '表单组件-Select 选择器-多选', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/multi-select.md')
  },
  {
    path: 'select/dynamic-disable',
    meta: { title: '表单组件-Select 选择器-禁用', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/dynamic-disable.md')
  },
  {
    path: 'select/is-drop-inherit-width',
    meta: { title: '表单组件-Select 选择器-下拉跟随输入框宽度', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/is-drop-inherit-width.md')
  },
  {
    path: 'select/select-size',
    meta: { title: '表单组件-Select 选择器-尺寸', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/select-size.md')
  },
  {
    path: 'select/clear-options',
    meta: { title: '表单组件-Select 选择器-选项可清除', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/clear-options.md')
  },
  {
    path: 'select/tag-copy',
    meta: { title: '表单组件-Select 选择器-选项可清除', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/tag-copy.md')
  },
  {
    path: 'select/tag-copy-all',
    meta: { title: '表单组件-Select 选择器-选项可清除', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/tag-copy-all.md')
  },
  {
    path: 'select/binding-obj',
    meta: { title: '表单组件-Select 选择器-绑定值为对象', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/binding-obj.md')
  },
  {
    path: 'select/filterable',
    meta: { title: '表单组件-Select 选择器-可搜索', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/filterable.md')
  },
  {
    path: 'select/allow-create',
    meta: { title: '表单组件-Select 选择器-创建条目', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/allow-create.md')
  },
  {
    path: 'select/slot-select',
    meta: { title: '表单组件-Select 选择器-插槽', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/slot-select.md')
  },
  {
    path: 'select/remote-filter',
    meta: { title: '表单组件-Select 选择器-远程搜索', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/remote-filter.md')
  },
  {
    path: 'select/custom-no-result-text',
    meta: { title: '表单组件-Select 选择器-自定义无匹配搜索文字', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/custom-no-result-text.md')
  },
  {
    path: 'select/custom-empty-data-text',
    meta: { title: '表单组件-Select 选择器-自定义空数据显示文字', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/custom-empty-data-text.md')
  },
  {
    path: 'select/popup-style-position',
    meta: { title: '表单组件-Select 选择器-弹出框样式与定位', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/popup-style-position.md')
  },
  {
    path: 'select/automatic-select',
    meta: { title: '表单组件-Select 选择器-获取焦点即弹出下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/automatic-select.md')
  },
  {
    path: 'select/select-events',
    meta: { title: '表单组件-Select 选择器-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/select-events.md')
  },
  {
    path: 'select/custom-prefix',
    meta: { title: '表单组件-Select 选择器-自定义头部内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/custom-prefix.md')
  },
  // {
  //   path: 'select/custom-suffix',
  //   meta: { title: '表单组件-Select 选择器-自定义输入框右侧图标', lang: 'zh-CN', sign: 'component' },
  //   component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/custom-suffix.md')
  // },
  {
    path: 'select/custom-options',
    meta: { title: '表单组件-Select 选择器-自定义下拉内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/custom-options.md')
  },
  {
    path: 'select/option-group',
    meta: { title: '表单组件-Select 选择器-分组', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/option-group.md')
  },
  {
    path: 'select/show-alloption',
    meta: { title: '表单组件-Select 选择器-不展示全选按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/show-alloption.md')
  },
  {
    path: 'select/hide-select-input-border',
    meta: { title: '表单组件-Select 选择器-隐藏搜索框边框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/hide-select-input-border.md')
  },
  {
    path: 'select/manual-focus-blur',
    meta: { title: '表单组件-Select 选择器-手动获取或失去焦点', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/manual-focus-blur.md')
  },
  {
    path: 'select/show-tip',
    meta: { title: '表单组件-Select 选择器-Tip 提示', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/show-tip.md')
  },
  {
    path: 'select/set-input-value',
    meta: { title: '表单组件-Select 选择器-改变输入框的值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/set-input-value.md')
  },
  {
    path: 'select/nest-grid',
    meta: { title: '表单组件-Select 选择器-嵌套 Grid', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/nest-grid.md')
  },
  {
    path: 'select/nest-tree',
    meta: { title: '表单组件-Select 选择器-嵌套 Tree', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/nest-tree.md')
  },
  {
    path: 'select/cache-usage',
    meta: { title: '表单组件-Select 选择器-嵌套 Tree', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/cache-usage.md')
  },
  {
    path: 'dropdown',
    meta: { title: '导航组件-Dropdown 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/dropdown/basic-usage.md')
  },
  {
    path: 'dropdown/split-button',
    meta: { title: '导航组件-Dropdown 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/dropdown/split-button.md')
  },
  {
    path: 'dropdown/trigger',
    meta: { title: '导航组件-Dropdown 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/dropdown/trigger.md')
  },
  {
    path: 'dropdown/hide-on-click',
    meta: { title: '导航组件-Dropdown 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/dropdown/hide-on-click.md')
  },
  {
    path: 'dropdown/disabled',
    meta: { title: '导航组件-Dropdown 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/dropdown/disabled.md')
  },
  {
    path: 'dropdown/size',
    meta: { title: '导航组件-Dropdown 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/dropdown/size.md')
  },
  {
    path: 'dropdown/events',
    meta: { title: '导航组件-Dropdown 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/dropdown/events.md')
  },
  {
    path: 'select/optimization',
    meta: { title: '表单组件-Select 选择器-虚拟滚动', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/optimization.md')
  },
  {
    path: 'select/upgrade-guide',
    meta: { title: '表单组件-Select 选择器-升级指导', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/upgrade-guide.md')
  },
  {
    path: 'file-upload',
    meta: { title: '表单组件-FileUpload 文件上传', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/basic-usage.md')
  },
  {
    path: 'file-upload/size',
    meta: { title: '设置组件的大小，只对使用Tiny的Button组件有效', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/size.md')
  },
  {
    path: 'file-upload/jalor-request',
    meta: { title: '表单组件-FileUpload 文件上传-可上传的文件类型', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/jalor-request.md')
  },
  {
    path: 'file-upload/accept-file-type',
    meta: { title: '表单组件-FileUpload 文件上传-可上传的文件类型', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/accept-file-type.md')
  },
  {
    path: 'file-upload/manual-upload',
    meta: { title: '表单组件-FileUpload 文件上传-手动上传', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/manual-upload.md')
  },
  {
    path: 'file-upload/prevent-delete-file',
    meta: { title: '表单组件-FileUpload 文件上传-阻止删除文件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/prevent-delete-file.md')
  },
  {
    path: 'file-upload/prevent-upload-file',
    meta: { title: '表单组件-FileUpload 文件上传-阻止上传文件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/prevent-upload-file.md')
  },
  {
    path: 'file-upload/upload-request',
    meta: { title: '表单组件-FileUpload 文件上传-上传请求', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/upload-request.md')
  },
  {
    path: 'file-upload/drag-upload',
    meta: { title: '表单组件-FileUpload 文件上传-拖拽上传', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/drag-upload.md')
  },
  {
    path: 'file-upload/drag-select-file',
    meta: { title: '表单组件-FileUpload 文件上传-拖拽选择文件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/drag-select-file.md')
  },
  {
    path: 'file-upload/upload-file-list',
    meta: { title: '表单组件-FileUpload 文件上传-上传的文件列表', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/upload-file-list.md')
  },
  {
    path: 'file-upload/custom-upload-request',
    meta: { title: '表单组件-FileUpload 文件上传-自定义上传请求', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/custom-upload-request.md')
  },
  {
    path: 'file-upload/upload-limit',
    meta: { title: '表单组件-FileUpload 文件上传-最大上传限制', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/upload-limit.md')
  },
  {
    path: 'file-upload/picture-card',
    meta: { title: '表单组件-FileUpload 文件上传-照片墙', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/picture-card.md')
  },
  {
    path: 'file-upload/file-picture-card',
    meta: { title: '表单组件-FileUpload 文件上传-文件缩略图', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/file-picture-card.md')
  },
  {
    path: 'file-upload/picture-list',
    meta: { title: '表单组件-FileUpload 文件上传-图片列表缩略图', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/picture-list.md')
  },
  {
    path: 'file-upload/max-file-count',
    meta: { title: '表单组件-FileUpload 文件上传-最大上传文件数', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/max-file-count.md')
  },
  {
    path: 'file-upload/mini-mode',
    meta: { title: '表单组件-FileUpload 文件上传-迷你模式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/mini-mode.md')
  },
  {
    path: 'file-upload/multiple-file',
    meta: { title: '表单组件-FileUpload 文件上传-文件多选', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/multiple-file.md')
  },
  {
    path: 'file-upload/custom-prefix',
    meta: { title: '表单组件-FileUpload 文件上传-钩子函数', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/custom-prefix.md')
  },
  {
    path: 'file-upload/upload-events',
    meta: { title: '表单组件-FileUpload 文件上传-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/upload-events.md')
  },
  {
    path: 'file-upload/with-credentials',
    meta: { title: '表单组件-FileUpload 文件上传-支持发送 cookie 凭证信息', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/with-credentials.md')
  },
  {
    path: 'file-upload/clear-files',
    meta: { title: '表单组件-FileUpload 文件上传-手动清空已上传文件列表', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/clear-files.md')
  },
  {
    path: 'file-upload/abort-quest',
    meta: { title: '表单组件-FileUpload 文件上传-手动取消上传请求', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/abort-quest.md')
  },
  {
    path: 'file-upload/custom-upload-tip',
    meta: { title: '表单组件-FileUpload 文件上传-自定义上传提示', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/custom-upload-tip.md')
  },
  {
    path: 'file-upload/custom-trigger',
    meta: { title: '表单组件-FileUpload 文件上传-自定义触发文件选项框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/custom-trigger.md')
  },
  {
    path: 'file-upload/upload-user-head',
    meta: { title: '表单组件-FileUpload 文件上传-用户头像上传', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/upload-user-head.md')
  },
  {
    path: 'file-upload/image-size',
    meta: { title: '表单组件-FileUpload 文件上传-用户头像上传', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-file-upload' */ './docs/zh-CN/file-upload/image-size.md')
  },
  {
    path: 'slide-bar',
    meta: { title: '其他组件-SlideBar 滚动块', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slide-bar' */ './docs/zh-CN/slide-bar/basic-usage.md')
  },
  {
    path: 'slide-bar/wheel-blocks',
    meta: { title: '其他组件-SlideBar 滚动块-每次滚动块数', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slide-bar' */ './docs/zh-CN/slide-bar/wheel-blocks.md')
  },
  {
    path: 'slide-bar/custom-content',
    meta: { title: '其他组件-SlideBar 滚动块-自定义滚动块内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slide-bar' */ './docs/zh-CN/slide-bar/custom-content.md')
  },
  {
    path: 'slide-bar/custom-tag',
    meta: { title: '其他组件-SlideBar 滚动块-自定义 DOM 标签', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slide-bar' */ './docs/zh-CN/slide-bar/custom-tag.md')
  },
  {
    path: 'slide-bar/slide-bar-events',
    meta: { title: '其他组件-SlideBar 滚动块-滚动块事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slide-bar' */ './docs/zh-CN/slide-bar/slide-bar-events.md')
  },
  {
    path: 'floatbar/operation-floatbar-item',
    meta: { title: '导航组件-Floatbar 浮动块-操作浮动块内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-floatbar' */ './docs/zh-CN/floatbar/operation-floatbar-item.md')
  },
  {
    path: 'fullscreen',
    meta: { title: '全屏显示-Fullscreen 全屏显示', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-fullscreen' */ './docs/zh-CN/fullscreen/basic-usage.md')
  }
]
