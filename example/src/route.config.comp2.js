export default [
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
    path: 'select/optimization',
    meta: { title: '表单组件-Select 选择器-虚拟滚动', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/optimization.md')
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
    path: 'select/searchable',
    meta: { title: '表单组件-Select 选择器-下拉面板显示搜索框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-select' */ './docs/zh-CN/select/searchable.md')
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
  },
  {
    path: 'user',
    meta: {
      title: '业务组件-User 用户',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/basic-usage.md')
  },
  {
    path: 'user/multiple-users',
    meta: {
      title: '业务组件-User 用户-多用户',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/multiple-users.md')
  },
  {
    path: 'user/tag-copy',
    meta: {
      title: '业务组件-User 用户-多用户',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/tag-copy.md')
  },
  {
    path: 'user/tag-copy-all',
    meta: {
      title: '业务组件-User 用户-多用户',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/tag-copy-all.md')
  },
  {
    path: 'user/dynamic-disable',
    meta: {
      title: '业务组件-User 用户-禁用状态',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/dynamic-disable.md')
  },
  {
    path: 'user/custom-placeholder',
    meta: {
      title: '业务组件-User 用户-文本框',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/custom-placeholder.md')
  },
  {
    path: 'user/value-split',
    meta: {
      title: '业务组件-User 用户-值分隔符',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/value-split.md')
  },
  {
    path: 'user/value-field',
    meta: {
      title: '业务组件-User 用户-取值字段映射',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/value-field.md')
  },
  {
    path: 'user/text-field',
    meta: {
      title: '业务组件-User 用户-显示字段映射',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/text-field.md')
  },
  {
    path: 'user/user-options',
    meta: {
      title: '业务组件-User 用户-自定义选项文本',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/user-options.md')
  },
  {
    path: 'user/cache-users',
    meta: {
      title: '业务组件-User 用户-缓存用户',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/cache-users.md')
  },
  {
    path: 'user/delay-load',
    meta: {
      title: '业务组件-User 用户-延时加载',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/delay-load.md')
  },
  {
    path: 'user/load-after-input-the-length',
    meta: {
      title: '业务组件-User 用户-输入完指定长度后加载',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/load-after-input-the-length.md')
  },
  {
    path: 'user/event-change',
    meta: {
      title: '业务组件-User 用户-通过该事件获取用户类型',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/event-change.md')
  },
  {
    path: 'user/collapse-show-overflow-tooltip',
    meta: {
      title: '业务组件-User 用户-tooltip提示',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/collapse-show-overflow-tooltip.md')
  },
  {
    path: 'user/collapse-tags',
    meta: {
      title: '业务组件-User 是否显示所有标签',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/collapse-tags.md')
  },
  {
    path: 'user/custom-service',
    meta: {
      title: '业务组件-User 用户-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/custom-service.md')
  },
  {
    path: 'user/custom-sort',
    meta: {
      title: '业务组件-User 用户-自定义排序',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/custom-sort.md')
  },
  {
    path: 'user/user-select-size',
    meta: {
      title: '业务组件-User 用户-尺寸设置',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/user/user-select-size.md')
  },
  {
    path: 'user-account',
    meta: {
      title: '业务组件-UserAccount 用户账号',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user-account' */ './docs/zh-CN/user-account/basic-usage.md')
  },
  {
    path: 'user-account/custom-service',
    meta: {
      title: '业务组件-UserAccount 用户账号-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user-account' */ './docs/zh-CN/user-account/custom-service.md')
  },
  {
    path: 'user-account/custom-operation',
    meta: {
      title: '业务组件-UserAccount 用户账号-自定义功能',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user-account' */ './docs/zh-CN/user-account/custom-operation.md')
  },
  {
    path: 'user-link',
    meta: {
      title: '业务组件-UserLink 用户信息链接',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user-link' */ './docs/zh-CN/user-link/basic-usage.md')
  },
  {
    path: 'user-link/text-field',
    meta: {
      title: '业务组件-UserLink 用户信息链接-显示字段映射',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user-link' */ './docs/zh-CN/user-link/text-field.md')
  },
  {
    path: 'user-link/value',
    meta: {
      title: '业务组件-UserLink 用户信息链接-设置默认值',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user-link' */ './docs/zh-CN/user-link/value.md')
  },
  {
    path: 'user-link/text-split',
    meta: {
      title: '业务组件-UserLink 用户信息链接-自定义文本分隔符',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user-link' */ './docs/zh-CN/user-link/text-split.md')
  },
  {
    path: 'user-link/value-field',
    meta: {
      title: '业务组件-UserLink 用户信息链接-值字段映射',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user-link' */ './docs/zh-CN/user-link/value-field.md')
  },
  {
    path: 'user-link/value-split',
    meta: {
      title: '业务组件-UserLink 用户信息链接-自定义值分隔符',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user-link' */ './docs/zh-CN/user-link/value-split.md')
  },
  {
    path: 'user-link/custom-service',
    meta: {
      title: '业务组件-UserLink 用户信息链接-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user-link' */ './docs/zh-CN/user-link/custom-service.md')
  },
  {
    path: 'user-link/cache-users',
    meta: {
      title: '业务组件-UserLink 用户信息链接-用户数据缓存',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user-link' */ './docs/zh-CN/user-link/cache-users.md')
  },
  {
    path: 'company',
    meta: {
      title: '业务组件-Company 公司',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-company' */ './docs/zh-CN/company/basic-usage.md')
  },
  {
    path: 'company/custom-show-num',
    meta: {
      title: '业务组件-Company 公司-自定义数据显示数量',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-company' */ './docs/zh-CN/company/custom-show-num.md')
  },
  {
    path: 'company/custom-service',
    meta: {
      title: '业务组件-Company 公司-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-company' */ './docs/zh-CN/company/custom-service.md')
  },
  {
    path: 'country',
    meta: {
      title: '业务组件-Country 国家/地区',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-country' */ './docs/zh-CN/country/basic-usage.md')
  },
  {
    path: 'country/custom-service',
    meta: {
      title: '业务组件-Country 国家/地区-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-country' */ './docs/zh-CN/country/custom-service.md')
  },
  {
    path: 'currency',
    meta: {
      title: '业务组件-Currency 币种',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-currency' */ './docs/zh-CN/currency/basic-usage.md')
  },
  {
    path: 'currency/currency-disabled',
    meta: {
      title: '业务组件-Currency 禁用',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-currency' */ './docs/zh-CN/currency/currency-disabled.md')
  },
  {
    path: 'currency/custom-service',
    meta: {
      title: '业务组件-Currency 币种-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-currency' */ './docs/zh-CN/currency/custom-service.md')
  },
  {
    path: 'currency/size',
    meta: {
      title: '业务组件-Currency 币种-设置组件大小',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-currency' */ './docs/zh-CN/currency/size.md')
  },
  {
    path: 'dept',
    meta: {
      title: '业务组件-Dept 部门',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-dept' */ './docs/zh-CN/dept/basic-usage.md')
  },
  {
    path: 'dept/dept-events',
    meta: {
      title: '业务组件-Dept 部门-事件',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-dept' */ './docs/zh-CN/dept/dept-events.md')
  },
  {
    path: 'dept/size',
    meta: {
      title: '设置组件大小，可以设置为：medium，small，mini',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-dept' */ './docs/zh-CN/dept/size.md')
  },
  {
    path: 'dept/before-confirm',
    meta: {
      title: 'before-confirm（确认前回调事件）,方法里面 return true/false，表示是否关闭弹框',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-dept' */ './docs/zh-CN/dept/before-confirm.md')
  },
  {
    path: 'dept/auto-select',
    meta: {
      title: '业务组件-Dept 自动-补全',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-dept' */ './docs/zh-CN/dept/auto-select.md')
  },
  {
    path: 'dept/custom-service',
    meta: {
      title: '业务组件-Dept 部门-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-dept' */ './docs/zh-CN/dept/custom-service.md')
  },
  {
    path: 'dept/dynamic-disable',
    meta: {
      title: '业务组件-Dept 部门-禁用',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-dept' */ './docs/zh-CN/dept/dynamic-disable.md')
  },
  {
    path: 'dept/title',
    meta: {
      title: '业务组件-Dept 部门-弹出框标题',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-dept' */ './docs/zh-CN/dept/title.md')
  },
  {
    path: 'dept/slot-hrapprover',
    meta: {
      title: '业务组件-Dept 部门-插槽',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-dept' */ './docs/zh-CN/dept/slot-hrapprover.md')
  },
  {
    path: 'drop-roles',
    meta: {
      title: '业务组件-DropRoles 下拉角色',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-drop-roles' */ './docs/zh-CN/drop-roles/basic-usage.md')
  },
  {
    path: 'drop-roles/change-role-event',
    meta: {
      title: '业务组件-DropRoles 下拉角色-角色切换事件',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-drop-roles' */ './docs/zh-CN/drop-roles/change-role-event.md')
  },
  {
    path: 'drop-roles/size',
    meta: {
      title: '设置组件的大小，可以设置为：medium，small，mini',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-drop-roles' */ './docs/zh-CN/drop-roles/size.md')
  },
  {
    path: 'drop-roles/custom-service',
    meta: {
      title: '业务组件-DropRoles 下拉角色-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-drop-roles' */ './docs/zh-CN/drop-roles/custom-service.md')
  },
  {
    path: 'hrapprover',
    meta: {
      title: '业务组件-Hrapprover 权签人',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-hrapprover' */ './docs/zh-CN/hrapprover/basic-usage.md')
  },
  {
    path: 'hrapprover/category-type',
    meta: {
      title: '业务组件-Hrapprover 权签人-权签类别',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-hrapprover' */ './docs/zh-CN/hrapprover/category-type.md')
  },
  {
    path: 'hrapprover/disabled-value-hrapprover',
    meta: {
      title: '业务组件-Hrapprover 权签人-禁用',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-hrapprover' */ './docs/zh-CN/hrapprover/disabled-value-hrapprover.md')
  },
  {
    path: 'hrapprover/custom-service',
    meta: {
      title: '业务组件-Hrapprover 权签人-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-hrapprover' */ './docs/zh-CN/hrapprover/custom-service.md')
  },
  {
    path: 'locales',
    meta: {
      title: '业务组件-Locales 语言选择',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-locales' */ './docs/zh-CN/locales/basic-usage.md')
  },
  {
    path: 'locales/custom-service',
    meta: {
      title: '业务组件-Locales 语言选择-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-locales' */ './docs/zh-CN/locales/custom-service.md')
  },
  {
    path: 'locales/change-lang',
    meta: {
      title: '业务组件-Locales 语言选择-语言切换',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-locales' */ './docs/zh-CN/locales/change-lang.md')
  },
  {
    path: 'logon-user',
    meta: {
      title: '业务组件-LogonUser 登录用户',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-logon-user' */ './docs/zh-CN/logon-user/basic-usage.md')
  },
  {
    path: 'logon-user/custom-service',
    meta: {
      title: '业务组件-LogonUser 登录用户-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-logon-user' */ './docs/zh-CN/logon-user/custom-service.md')
  },
  {
    path: 'logout',
    meta: {
      title: '业务组件-Logout 注销',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-logout' */ './docs/zh-CN/logout/basic-usage.md')
  },
  {
    path: 'logout/custom-service',
    meta: {
      title: '业务组件-logout 注销-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-logout' */ './docs/zh-CN/logout/custom-service.md')
  },
  {
    path: 'logout/redirect-url',
    meta: {
      title: '业务组件-logout 注销-自定义配置注销后跳转地址',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-logout' */ './docs/zh-CN/logout/redirect-url.md')
  },
  {
    path: 'amount',
    meta: {
      title: '业务组件-Amount 金额',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-amount' */ './docs/zh-CN/amount/basic-usage.md')
  },
  {
    path: 'amount/set-date',
    meta: {
      title: '业务组件-Amount 金额-设置日期',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-amount' */ './docs/zh-CN/amount/set-date.md')
  },
  {
    path: 'amount/custom-currency',
    meta: {
      title: '业务组件-Amount 金额-指定币种',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-amount' */ './docs/zh-CN/amount/custom-currency.md')
  },
  {
    path: 'amount/digits-maxlen',
    meta: {
      title: '业务组件-Amount 金额-金额设置',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-amount' */ './docs/zh-CN/amount/digits-maxlen.md')
  },
  {
    path: 'amount/custom-service',
    meta: {
      title: '业务组件-Amount 金额-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-amount' */ './docs/zh-CN/amount/custom-service.md')
  },
  {
    path: 'amount/size',
    meta: {
      title: '设置组件大小，可以设置为：medium，small，mini',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-amount' */ './docs/zh-CN/amount/size.md')
  },
  {
    path: 'amount/amount-disable',
    meta: {
      title: '设置组件大小，可以设置为：medium，small，mini',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-amount' */ './docs/zh-CN/amount/amount-disable.md')
  },
  {
    path: 'area',
    meta: {
      title: '业务组件-Area 片区',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-area' */ './docs/zh-CN/area/basic-usage.md')
  },
  {
    path: 'area/disabled',
    meta: {
      title: '业务组件-Area 片区-禁用',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-area' */ './docs/zh-CN/area/disabled.md')
  },
  {
    path: 'area/custom-service',
    meta: {
      title: '业务组件-Area 片区-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-area' */ './docs/zh-CN/area/custom-service.md')
  },
  {
    path: 'area/size',
    meta: {
      title: '设置组件大小，可选值：medium，samll，mini',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-area' */ './docs/zh-CN/area/size.md')
  },
  {
    path: 'area/area-events',
    meta: {
      title: '业务组件-Area 片区-事件',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-area' */ './docs/zh-CN/area/area-events.md')
  },
  {
    path: 'espace',
    meta: {
      title: '业务组件-Espace 消息弹框',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-espace' */ './docs/zh-CN/espace/basic-usage.md')
  },
  {
    path: 'espace/use-in-usercontact',
    meta: {
      title: '业务组件-Espace 消息弹框-用户联系人连接 eSpace',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-espace' */ './docs/zh-CN/espace/use-in-usercontact.md')
  },
  {
    path: 'roles',
    meta: {
      title: '业务组件-Roles 角色切换',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/roles/basic-usage.md')
  },
  {
    path: 'roles/fetch-role',
    meta: {
      title: '业务组件-Roles 角色切换-自定义服务',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-user' */ './docs/zh-CN/roles/fetch-role.md')
  },
  {
    path: 'chart/attributes',
    meta: {
      title: '图表组件-公共属性',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/attributes.md')
  },
  {
    path: 'chart/data-config',
    meta: {
      title: '图表组件-数据',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/data-config.md')
  },
  {
    path: 'chart/events',
    meta: {
      title: '图表组件-数据',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/events.md')
  },
  {
    path: 'chart/question',
    meta: {
      title: '图表组件-常见问题示例',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/question.md')
  },
  {
    path: 'chart/attributes-demo',
    meta: {
      title: '图表组件-属性配置示例',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/attributes-demo.md')
  },
  {
    path: 'chart',
    meta: {
      title: '图表组件-折线图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/base.md')
  },
  {
    path: 'chart/line',
    meta: {
      title: '图表组件-折线图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/line.md')
  },
  {
    path: 'chart/histogram',
    meta: {
      title: '图表组件-柱状图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/histogram.md')
  },
  {
    path: 'chart/bar',
    meta: {
      title: '图表组件-条形图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/bar.md')
  },
  {
    path: 'chart/pie',
    meta: {
      title: '图表组件-饼图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/pie.md')
  },
  {
    path: 'chart/ring',
    meta: {
      title: '图表组件-环图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/ring.md')
  },
  {
    path: 'chart/waterfall',
    meta: {
      title: '图表组件-瀑布图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/waterfall.md')
  },
  {
    path: 'chart/funnel',
    meta: {
      title: '图表组件-漏斗图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/funnel.md')
  },
  {
    path: 'chart/radar',
    meta: {
      title: '图表组件-雷达图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/radar.md')
  },
  {
    path: 'chart/map',
    meta: {
      title: '图表组件-地图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/map.md')
  },
  {
    path: 'chart/sankey',
    meta: {
      title: '图表组件-桑基图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/sankey.md')
  },
  {
    path: 'chart/heatmap',
    meta: {
      title: '图表组件-热力图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/heatmap.md')
  },
  {
    path: 'chart/scatter',
    meta: {
      title: '图表组件-散点图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/scatter.md')
  },
  {
    path: 'chart/candle',
    meta: {
      title: '图表组件-K线图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/candle.md')
  },
  {
    path: 'chart/gauge',
    meta: {
      title: '图表组件-仪表盘',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/gauge.md')
  },
  {
    path: 'chart/tree',
    meta: {
      title: '图表组件-树图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/tree.md')
  },
  {
    path: 'chart/liquidfill',
    meta: {
      title: '图表组件-水球图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/liquidfill.md')
  },
  {
    path: 'chart/wordcloud',
    meta: {
      title: '图表组件-词云图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/wordcloud.md')
  },
  {
    path: 'chart/sunburst',
    meta: {
      title: '图表组件-旭日图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/sunburst.md')
  },
  {
    path: 'chart/graph',
    meta: {
      title: '图表组件-拓扑图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/graph.md')
  },
  {
    path: 'chart/baidu-map',
    meta: {
      title: '图表组件-百度地图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/baidu-map.md')
  },
  {
    path: 'chart/autonavi-map',
    meta: {
      title: '图表组件-高德地图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/autonavi-map.md')
  },
  {
    path: 'chart/boxplot',
    meta: {
      title: '图表组件-箱形图',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-charts' */ './docs/zh-CN/charts/boxplot.md')
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
    path: 'dropdown/multi-level',
    meta: { title: '导航组件-Dropdown 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/dropdown/multi-level.md')
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
    path: 'dropdown/options',
    meta: { title: '导航组件-Dropdown 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/dropdown/options.md')
  },
  {
    path: 'dropdown/events',
    meta: { title: '导航组件-Dropdown 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/dropdown/events.md')
  },
  {
    path: 'action-menu',
    meta: { title: '导航组件-ActionMenu 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/action-menu/basic-usage.md')
  },
  {
    path: 'action-menu/text-field',
    meta: { title: '导航组件-ActionMenu 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/action-menu/text-field.md')
  },
  {
    path: 'action-menu/slot-item',
    meta: { title: '导航组件-ActionMenu 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/action-menu/slot-item.md')
  },
  {
    path: 'action-menu/disabled',
    meta: { title: '导航组件-ActionMenu 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/action-menu/disabled.md')
  },
  {
    path: 'action-menu/item-click',
    meta: { title: '导航组件-ActionMenu 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/action-menu/item-click.md')
  },
  {
    path: 'action-menu/more-click',
    meta: { title: '导航组件-ActionMenu 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/action-menu/more-click.md')
  },
  {
    path: 'action-menu/more-text',
    meta: { title: '导航组件-ActionMenu 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/action-menu/more-text.md')
  },
  {
    path: 'action-menu/spacing',
    meta: { title: '导航组件-ActionMenu 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/action-menu/spacing.md')
  },
  {
    path: 'action-menu/popper-class',
    meta: { title: '导航组件-ActionMenu 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/action-menu/popper-class.md')
  },
  {
    path: 'action-menu/max-show-num',
    meta: { title: '导航组件-ActionMenu 下拉菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dropdown' */ './docs/zh-CN/action-menu/max-show-num.md')
  },
  {
    path: 'notify',
    meta: {
      title: '提示组件-Notify 通知组件',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-notify' */ './docs/zh-CN/notify/basic-usage.md')
  },
  {
    path: 'notify/debounce-delay',
    meta: {
      title: '提示组件-Notify 通知组件',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-notify' */ './docs/zh-CN/notify/debounce-delay.md')
  },
  {
    path: 'notify/vertical-offset',
    meta: {
      title: '提示组件-Notify 通知组件',
      lang: 'zh-CN',
      sign: 'component'
    },
    component: () => import(/* webpackChunkName: 'v3-notify' */ './docs/zh-CN/notify/vertical-offset.md')
  },
  {
    path: 'modal/modal-is-form-reset',
    meta: { title: '模态框组件-自定义堆叠顺序', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-is-form-reset.md')
  },
  {
    path: 'tooltip/visible-show',
    meta: { title: '提示组件-Tooltip 文字提示-智能出现', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tooltip' */ './docs/zh-CN/tooltip/visible-show.md')
  }
]
