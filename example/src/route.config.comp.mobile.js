const router = [
  {
    path: 'alert',
    meta: { title: 'MobileAlert 提示组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/alert/mobilealert.md')
  },
  {
    path: 'alert/custom-close',
    meta: { title: 'MobileAlert 提示组件 - 自定义关闭', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/alert/custom-close.md')
  },
  {
    path: 'alert/icon',
    meta: { title: 'MobileAlert 提示组件 - 自定义提示图标', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/alert/icon.md')
  },
  {
    path: 'alert/size',
    meta: { title: 'MobileAlert 提示组件 - 不同尺寸', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/alert/size.md')
  },
  {
    path: 'alert/slot-default',
    meta: { title: 'MobileAlert 提示组件 - 自定义提示内容', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/alert/slot-default.md')
  },
  {
    path: 'mobile-avatar',
    meta: { title: 'MobileAvatar 头像组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mobileavatar.md')
  },
  {
    path: 'mobile-avatar/avatar-size',
    meta: { title: 'MobileAvatar 头像组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/avatar/avatar-size.md')
  },
  {
    path: 'mobile-avatar/avatar-src-set',
    meta: { title: 'MobileAvatar 头像组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/avatar/avatar-src-set.md')
  },
  {
    path: 'mobile-icon',
    meta: { title: 'MobileIcon图标组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mobileicon.md')
  },
  {
    path: 'mobile-icon/icon-set',
    meta: { title: 'MobileIcon 图标组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/icon/icon-set.md')
  },
  {
    path: 'progress',
    meta: { title: 'progress 进度条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/progress/basic-usage.md')
  },
  {
    path: 'progress/custom-color',
    meta: { title: 'progress 进度条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/progress/custom-color.md')
  },
  {
    path: 'progress/dynamic-control-changes',
    meta: { title: 'progress 进度条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/progress/dynamic-control-changes.md')
  },
  {
    path: 'progress/format',
    meta: { title: 'progress 进度条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/progress/format.md')
  },
  {
    path: 'progress/width',
    meta: { title: 'progress 进度条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/progress/width.md')
  },
  {
    path: 'progress/format-text',
    meta: { title: 'progress 进度条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/progress/format-text.md')
  },
  {
    path: 'progress/progress-status',
    meta: { title: 'progress 进度条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/progress/progress-status.md')
  },
  {
    path: 'progress/progress-type',
    meta: { title: 'progress 进度条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/progress/progress-type.md')
  },
  {
    path: 'progress/progress-width',
    meta: { title: 'progress 进度条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/progress/progress-width.md')
  },
  {
    path: 'progress/text-inside-or-no-text',
    meta: { title: 'progress 进度条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/progress/text-inside-or-no-text.md')
  },
  {
    path: 'progress/dynamic-progress',
    meta: { title: 'progress 进度条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/progress/dynamic-progress.md')
  },
  {
    path: 'slider',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/basic-usage.md')
  },
  {
    path: 'slider/about-step',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/about-step.md')
  },
  {
    path: 'slider/dynamic-disable',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/dynamic-disable.md')
  },
  {
    path: 'slider/shortcut-operation',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/shortcut-operation.md')
  },
  {
    path: 'slider/format-tooltip',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/format-tooltip.md')
  },
  {
    path: 'slider/max-min',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/max-min.md')
  },
  {
    path: 'slider/range-select',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/range-select.md')
  },
  {
    path: 'slider/show-input',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/show-input.md')
  },
  {
    path: 'slider/show-tip',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/show-tip.md')
  },
  {
    path: 'slider/slider-events',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/slider-events.md')
  },
  {
    path: 'slider/slider-slot',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/slider-slot.md')
  },
  {
    path: 'slider/vertical-mode',
    meta: { title: 'slider 滑条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/slider/vertical-mode.md')
  },
  {
    path: 'pull-refresh',
    meta: { title: 'pull-refresh 刷新', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/pull-refresh/base.md')
  },
  {
    path: 'pull-refresh/animation-duration',
    meta: { title: 'pull-refresh 刷新', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/pull-refresh/animation-duration.md')
  },
  {
    path: 'pull-refresh/disabled',
    meta: { title: 'pull-refresh 刷新', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/pull-refresh/disabled.md')
  },
  {
    path: 'pull-refresh/head-height',
    meta: { title: 'pull-refresh 刷新', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/pull-refresh/head-height.md')
  },
  {
    path: 'pull-refresh/loosing-text',
    meta: { title: 'pull-refresh 刷新', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/pull-refresh/loosing-text.md')
  },
  {
    path: 'pull-refresh/pull-refresh-slot',
    meta: { title: 'pull-refresh 刷新', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/pull-refresh/pull-refresh-slot.md')
  },
  {
    path: 'pull-refresh/enhance',
    meta: { title: 'pull-refresh 刷新', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/pull-refresh/enhance.md')
  },
  {
    path: 'pull-refresh/pulling-text',
    meta: { title: 'pull-refresh 刷新', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/pull-refresh/pulling-text.md')
  },
  {
    path: 'pull-refresh/success-duration',
    meta: { title: 'pull-refresh 刷新', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/pull-refresh/success-duration.md')
  },
  {
    path: 'pull-refresh/result-text',
    meta: { title: 'pull-refresh 刷新', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/pull-refresh/result-text.md')
  },
  {
    path: 'form',
    meta: { title: 'form 表单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/form/base.md')
  },
  {
    path: 'form/only-read',
    meta: { title: 'form 表单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/form/only-read.md')
  },
  {
    path: 'form/hide-required-asterisk',
    meta: { title: 'form 表单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/form/hide-required-asterisk.md')
  },
  {
    path: 'form/form-select',
    meta: { title: 'form 表单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/form/form-select.md')
  },
  {
    path: 'form/label-width',
    meta: { title: 'form 表单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/form/label-width.md')
  },
  {
    path: 'form/validate',
    meta: { title: 'form 表单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/form/validate.md')
  },
  {
    path: 'form/form-writeone',
    meta: { title: 'form 表单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/form/form-writeone.md')
  },
  {
    path: 'form/form-writetwo',
    meta: { title: 'form 表单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/form/form-writetwo.md')
  },
  {
    path: 'form/form-tabselect',
    meta: { title: 'form 表单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/form/form-tabselect.md')
  },
  {
    path: 'form/validate-position',
    meta: { title: 'form 表单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/form/validate-position.md')
  },
  {
    path: 'form/auto-wordwrap',
    meta: { title: 'form 表单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/form/auto-wordwrap.md')
  },
  {
    path: 'badge',
    meta: { title: 'mobileBadge 徽章组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/badge/mobilebadge.md')
  },
  {
    path: 'badge/is-dot',
    meta: { title: 'mobileBadge 徽章组件 - 小圆点标记', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/badge/is-dot.md')
  },
  {
    path: 'badge/is-mini',
    meta: { title: 'mobileBadge 徽章组件 - 小尺寸', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/badge/is-mini.md')
  },
  {
    path: 'badge/type',
    meta: { title: 'mobileBadge 徽章组件 - 不同主题', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/badge/type.md')
  },
  {
    path: 'badge/hidden',
    meta: { title: 'mobileBadge 徽章组件 - 隐藏徽标', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/badge/hidden.md')
  },
  {
    path: 'badge/href-target',
    meta: { title: 'mobileBadge 徽章组件 - 跳转链接', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/badge/href-target.md')
  },
  {
    path: 'badge/content',
    meta: { title: 'mobileBadge 徽章组件 - 自定义提示内容', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/badge/content.md')
  },
  {
    path: 'loading',
    meta: { title: '提示组件-Loading 加载', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/loading/mobileloading.md')
  },
  {
    path: 'loading/type',
    meta: { title: '提示组件-Loading 加载-设置加载类型', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/loading/type.md')
  },
  {
    path: 'button',
    meta: { title: 'mobileButton 按钮组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/button/mobilebutton.md')
  },
  {
    path: 'button/icon',
    meta: { title: 'mobileButton 按钮组件 - 图标按钮', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/button/icon.md')
  },
  {
    path: 'button/native-type',
    meta: { title: 'mobileButton 按钮组件 - 朴素按钮', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/button/native-type.md')
  },
  {
    path: 'button/reset-time',
    meta: { title: 'mobileButton 按钮组件 - 朴素按钮', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/button/reset-time.md')
  },
  {
    path: 'button/plain',
    meta: { title: 'mobileButton 按钮组件 - 按钮属性', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/button/plain.md')
  },
  {
    path: 'button/round',
    meta: { title: 'mobileButton 按钮组件 - 圆角按钮', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/button/round.md')
  },
  {
    path: 'button/text',
    meta: { title: 'mobileButton 按钮组件 - 文字按钮', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/button/text.md')
  },
  {
    path: 'button/size',
    meta: { title: 'mobileButton 按钮组件 - 不同尺寸', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/button/size.md')
  },
  {
    path: 'button/loading',
    meta: { title: 'mobileButton 按钮组件 - 加载中', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/button/loading.md')
  },
  {
    path: 'button/event-click',
    meta: { title: 'mobileButton 按钮组件 - 单击事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/button/event-click.md')
  },
  {
    path: 'checkbox',
    meta: { title: 'mobileCheckbox 复选框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/checkbox/mobilecheckbox.md')
  },
  {
    path: 'checkbox/indeterminate',
    meta: { title: 'mobileCheckbox 复选框组件 - 全选与半选', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/checkbox/indeterminate.md')
  },
  {
    path: 'checkbox/label',
    meta: { title: 'mobileCheckbox 复选框组件 - 选中值设置', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/checkbox/label.md')
  },
  {
    path: 'checkbox/event-change',
    meta: { title: 'mobileCheckbox 复选框组件 - 事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/checkbox/event-change.md')
  },
  {
    path: 'checkbox/default',
    meta: { title: 'mobileCheckbox 复选框组件 - 插槽', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/checkbox/default.md')
  },
  {
    path: 'checkbox-group',
    meta: { title: 'monileCheckboxGroup 复选框组组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/checkbox-group/monilecheckboxgroup.md')
  },
  {
    path: 'checkbox-group/min-max',
    meta: { title: 'monileCheckboxGroup 复选框组组件 - 可选数量', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/checkbox-group/min-max.md')
  },
  {
    path: 'checkbox-group/disabled',
    meta: { title: 'monileCheckboxGroup 复选框组组件 - 是否禁用', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/checkbox-group/disabled.md')
  },
  {
    path: 'checkbox-group/vertical',
    meta: { title: 'monileCheckboxGroup 复选框组组件 - 垂直排列', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/checkbox-group/vertical.md')
  },
  {
    path: 'checkbox-group/event-change',
    meta: { title: 'monileCheckboxGroup 复选框组组件 - 事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/checkbox-group/event-change.md')
  },
  {
    path: 'dialog-box',
    meta: { title: 'mobileDialogBox 提示框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dialog-box/mobiledialogbox.md')
  },
  {
    path: 'dialog-box/close-on-click-modal',
    meta: { title: 'mobileDialogBox 提示框组件 - 单击遮罩层不关闭', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dialog-box/close-on-click-modal.md')
  },
  {
    path: 'dialog-box/lock-scroll',
    meta: { title: 'mobileDialogBox 提示框组件 - 弹出时禁用滚动', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dialog-box/lock-scroll.md')
  },
  {
    path: 'dialog-box/slot-footer',
    meta: { title: 'mobileDialogBox 提示框组件 -自定义底部', lang: 'zh-CN' },
    name: 'component-mobileDialogBox 提示框组件 - 自定义底部',
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dialog-box/slot-footer.md')
  },
  {
    path: 'dialog-box/show-header',
    meta: { title: 'mobileDialogBox 提示框组件 - 不显示标题', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dialog-box/show-header.md')
  },
  {
    path: 'dialog-box/with-input',
    meta: { title: 'mobileDialogBox 提示框组件 - 输入类提示框', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dialog-box/with-input.md')
  },
  {
    path: 'dialog-box/slot-title',
    meta: { title: 'mobileDialogBox 提示框组件 - 自定义标题', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dialog-box/slot-title.md')
  },
  {
    path: 'dialog-box/events-open-close',
    meta: { title: 'mobileDialogBox 提示框组件 - 打开与关闭事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dialog-box/events-open-close.md')
  },
  {
    path: 'dialog-box/cancel-confirm',
    meta: { title: 'mobileDialogBox 提示框组件 - 取消与确认事件的回调', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dialog-box/cancel-confirm.md')
  },
  {
    path: 'image-viewer',
    meta: { title: 'mobileImageViewer 图片预览组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/image-viewer/mobileimageviewer.md')
  },
  {
    path: 'image-viewer/image-full-current',
    meta: { title: 'mobileImageViewer 图片预览组件 - 全屏显示', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/image-viewer/image-full-current.md')
  },
  {
    path: 'image-viewer/start-position',
    meta: { title: 'mobileImageViewer 图片预览组件 - 初始起始位置', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/image-viewer/start-position.md')
  },
  {
    path: 'image-viewer/slot-index',
    meta: { title: 'mobileImageViewer 图片预览组件 - 自定义下标', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/image-viewer/slot-index.md')
  },
  {
    path: 'image-viewer/events-change-close',
    meta: { title: 'mobileImageViewer 图片预览组件 - 切换与关闭事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/image-viewer/events-change-close.md')
  },
  {
    path: 'list',
    meta: { title: 'mobileList 列表组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/list/mobilelist.md')
  },
  {
    path: 'list/slots',
    meta: { title: 'mobileList 列表组件 - 自定义列表内容', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/list/slots.md')
  },
  {
    path: 'list/single-line',
    meta: { title: 'mobileList 列表组件 - 单行', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/list/single-line.md')
  },
  {
    path: 'list/double-list',
    meta: { title: 'mobileList 列表组件 - 双行列表', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/list/doublelist.md')
  },
  {
    path: 'list//imformation-list',
    meta: { title: 'mobileList 列表组件 - 资讯类列表', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/list/imformationlist.md')
  },
  {
    path: 'input',
    meta: { title: 'mobileInput 输入框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/mobileinput.md')
  },
  {
    path: 'input/type-form',
    meta: { title: 'mobileInput 输入框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/type-be-form.md')
  },
  {
    path: 'input/slot-content',
    meta: { title: 'mobileInput 头部插槽', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/slot-content.md')
  },
  {
    path: 'input/props',
    meta: { title: 'mobileInput 输入框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/props.md')
  },
  {
    path: 'input/validate-event',
    meta: { title: 'mobileInput 输入框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/validate-event.md')
  },
  {
    path: 'input/blur-focus',
    meta: { title: 'mobileInput 输入框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/blur-focus.md')
  },
  {
    path: 'input/autofocus',
    meta: { title: 'mobileInput 输入框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/autofocus.md')
  },
  {
    path: 'input/mobile-tips',
    meta: { title: 'mobileInput 输入框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/type-be-form-tips.md')
  },
  {
    path: 'input/isselect-and-selectmenu',
    meta: { title: 'mobileInput 输入框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/type-be-form.md')
  },
  {
    path: 'input/autosize',
    meta: { title: 'mobileInput 输入框组件 - 自适应内容高度', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/autosize.md')
  },
  {
    path: 'input/clearable',
    meta: { title: 'mobileInput 输入框组件 - 可清空', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/clearable.md')
  },
  {
    path: 'input/counter',
    meta: { title: 'mobileInput 输入框组件 - 计数与输入统计', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/counter.md')
  },
  {
    path: 'input/max-min-length',
    meta: { title: 'mobileInput 输入框组件 - 输入长度限制', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/max-min-length.md')
  },
  {
    path: 'input/show-password',
    meta: { title: 'mobileInput 输入框组件 - 密码框', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/show-password.md')
  },
  {
    path: 'input/slots-append-prepend',
    meta: { title: 'mobileInput 输入框组件 - 复合型输入框', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/slots-append-prepend.md')
  },
  {
    path: 'input/suffix-icon',
    meta: { title: 'mobileInput 输入框组件 - 自定义后置图标', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/suffix-icon.md')
  },
  {
    path: 'input/events',
    meta: { title: 'mobileInput 输入框组件 - 事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/events.md')
  },
  {
    path: 'input/method-select',
    meta: { title: 'mobileInput 输入框组件 - 选中输入框文本', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/input/method-select.md')
  },
  {
    path: 'nav-bar',
    meta: { title: 'mobileNavBar 导航栏框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/nav-bar/mobilenavbar.md')
  },
  {
    path: 'nav-bar/left-right-arrow',
    meta: { title: 'mobileNavBar 导航栏框组件 - 显示左右箭头', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/nav-bar/left-right-arrow.md')
  },
  {
    path: 'nav-bar/z-index',
    meta: { title: 'mobileNavBar 导航栏框组件 - 设置层级', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/nav-bar/z-index.md')
  },
  {
    path: 'nav-bar/left-right-text',
    meta: { title: 'mobileNavBar 导航栏框组件 - 指定左右文本', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/nav-bar/left-right-text.md')
  },
  {
    path: 'nav-bar/slots',
    meta: { title: 'mobileNavBar 导航栏框组件 - 自定义左右侧内容', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/nav-bar/slots.md')
  },
  {
    path: 'radio',
    meta: { title: 'mobileRadio 单选框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/radio/mobileradio.md')
  },
  {
    path: 'radio/border',
    meta: { title: 'mobileRadio 单选框组件 - 显示边框', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/radio/border.md')
  },
  {
    path: 'radio/disabled',
    meta: { title: 'mobileRadio 单选框组件 - 是否禁用', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/radio/disabled.md')
  },
  {
    path: 'radio/event-change',
    meta: { title: 'mobileRadio 单选框组件 - 值改变事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/radio/event-change.md')
  },
  {
    path: 'search',
    meta: { title: 'mobileSearch 搜索框组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/search/mobilesearch.md')
  },
  {
    path: 'search/button-text',
    meta: { title: 'mobileSearch 搜索框组件 - 自定义搜索按钮文本', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/search/button-text.md')
  },
  {
    path: 'search/default-value',
    meta: { title: 'mobileSearch 搜索框组件 - 默认搜索', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/search/default-value.md')
  },
  {
    path: 'search/events',
    meta: { title: 'mobileSearch 搜索框组件 - 事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/search/events.md')
  },
  {
    path: 'switch',
    meta: { title: 'mobileSwitch 开关组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/switch/mobileswitch.md')
  },
  {
    path: 'switch/true-false-value',
    meta: { title: 'mobileSwitch 开关组件 - 自定义打开关闭的值', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/switch/true-false-value.md')
  },
  {
    path: 'switch/disabled',
    meta: { title: 'mobileSwitch 开关组件 - 是否禁用', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/switch/disabled.md')
  },
  {
    path: 'switch/event-change',
    meta: { title: 'mobileSwitch 开关组件 - 值改变事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/switch/event-change.md')
  },
  {
    path: 'switch/scenario',
    meta: { title: 'mobileSwitch 开关组件 - 应用场景', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/switch/scenario.md')
  },
  {
    path: 'tabbar',
    meta: { title: 'mobileTabbar 标签栏组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabbar/mobiletabbar.md')
  },
  {
    path: 'tabbar/onlytext',
    meta: { title: 'mobileTabbar 标签栏组件 - 纯文本', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabbar/onlytext.md')
  },
  {
    path: 'tabbar/active-inactive-color',
    meta: { title: 'mobileTabbar 标签栏组件 - 自定义颜色', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabbar/active-inactive-color.md')
  },
  {
    path: 'tabbar/badge',
    meta: { title: 'mobileTabbar 标签栏组件 - 徽标提示', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabbar/badge.md')
  },
  {
    path: 'tabbar/border',
    meta: { title: 'mobileTabbar 标签栏组件 - 无边框', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabbar/border.md')
  },
  {
    path: 'tabbar/event-change',
    meta: { title: 'mobileTabbar 标签栏组件 - 切换事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabbar/event-change.md')
  },
  {
    path: 'tabbar/route',
    meta: { title: 'mobileTabbar 标签栏组件 - 路由跳转', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabbar/route.md')
  },
  {
    path: 'tabbar/slot-icon',
    meta: { title: 'mobileTabbar 标签栏组件 - 自定义图标', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabbar/slot-icon.md')
  },
  {
    path: 'mobileTabs',
    meta: { title: 'mobileTabs 选项卡组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mobiletabs.md')
  },
  {
    path: 'tabs/swipe',
    meta: { title: 'mobileTabs 选项卡组件 - 内容滑动切换标签页', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabs/swipe.md')
  },
  {
    path: 'tabs/events',
    meta: { title: 'mobileTabs 选项卡组件 - 事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabs/tabs-event.md')
  },
  {
    path: 'tabs/before-leave',
    meta: { title: 'mobileTabs 选项卡组件 - 切换标签页前的钩子', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabs/before-leave.md')
  },
  {
    path: 'tabs/with-add',
    meta: { title: 'mobileTabs 选项卡组件 - 新增标签页', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabs/with-add.md')
  },
  {
    path: 'tabs/expand',
    meta: { title: 'mobileTabs 选项卡组件 - 可展开标签页', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabs/expand.md')
  },
  {
    path: 'tabs/three-level',
    meta: { title: 'mobileTabs 选项卡组件 - 嵌套标签页', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabs/three-level.md')
  },
  {
    path: 'tabs/active-color',
    meta: { title: 'mobileTabs 选项卡组件 - 自定义当前标签页颜色', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/tabs/active-color.md')
  },
  {
    path: 'time-line',
    meta: { title: 'mobileTimeLine 时间轴组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mobiletimeline.md')
  },
  {
    path: 'time-line/slot',
    meta: { title: 'mobileTimeLine 时间轴组件 - 插槽', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/time-line/slot.md')
  },
  {
    path: 'time-line/space',
    meta: { title: 'mobileTimeLine 时间轴组件 - 高度', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/time-line/space.md')
  },
  {
    path: 'time-line/steps',
    meta: { title: 'mobileTimeLine 时间轴组件 - 步骤条', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/time-line/steps.md')
  },
  {
    path: 'dropdown-menu',
    meta: { title: 'mobileDropdownMenu 筛选排序组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mobiledropdownmenu.md')
  },
  {
    path: 'dropdown-menu/screen-funnel',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 筛选漏斗', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/screen-funnel.md')
  },
  {
    path: 'dropdown-menu/overlay',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 遮罩层', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/overlay.md')
  },
  {
    path: 'dropdown-menu/activeColor',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 自定义选中项颜色', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/activeColor.md')
  },
  {
    path: 'dropdown-menu/duration',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 动画时长', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/duration.md')
  },
  {
    path: 'dropdown-menu/type',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 筛选类型', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/type.md')
  },
  {
    path: 'dropdown-menu/item-disabled',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 是否禁用', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/item-disabled.md')
  },
  {
    path: 'dropdown-menu/icon',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 自定义icon', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/icon.md')
  },
  {
    path: 'dropdown-menu/direction',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 菜单弹出位置', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/direction.md')
  },
  {
    path: 'dropdown-menu/closeOnClickOverlay',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 点击遮罩层关闭菜单项', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/closeOnClickOverlay.md')
  },
  {
    path: 'dropdown-menu/closeOnClickOutside',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 点击外部元素关闭菜单', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/closeOnClickOutside.md')
  },
  {
    path: 'dropdown-menu/slot',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 插槽', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/slot.md')
  },
  {
    path: 'dropdown-menu/event',
    meta: { title: 'mobileDropdownMenu 筛选排序组件 - 事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/dropdown-menu/event.md')
  },
  {
    path: 'exception',
    meta: { title: 'mobileexception 缺省页组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mobileexception.md')
  },
  {
    path: 'exception/message',
    meta: { title: 'mobileexception 缺省页组件 - 文本内容', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/exception/message.md')
  },
  {
    path: 'exception/subMessage',
    meta: { title: 'mobileexception 缺省页组件 - 副文本内容', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/exception/subMessage.md')
  },
  {
    path: 'exception/buttonText',
    meta: { title: 'mobileexception 缺省页组件 - 按钮文本', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/exception/buttonText.md')
  },
  {
    path: 'exception/exceptionClass',
    meta: { title: 'mobileexception 缺省页组件 - 类名', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/exception/exceptionClass.md')
  },
  {
    path: 'action-sheet',
    meta: { title: 'actionSheet 上滑列表组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/action-sheet/actionsheet.md')
  },
  {
    path: 'action-sheet/ellipsis',
    meta: { title: 'actionSheet 上滑列表组件 - 内容超出显示省略号', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/action-sheet/ellipsis.md')
  },
  {
    path: 'action-sheet/slot',
    meta: { title: 'actionSheet 上滑列表组件 - 插槽', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/action-sheet/slot.md')
  },
  {
    path: 'action-sheet/click-item',
    meta: { title: 'actionSheet 上滑列表组件 - 点击列表是事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/action-sheet/clickitem.md')
  },
  {
    path: 'mini-picker',
    meta: { title: 'miniPicker 选择器组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/minipicker.md')
  },
  {
    path: 'mini-picker/toolbar',
    meta: { title: 'miniPicker 选择器组件-插槽', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/toolbar.md')
  },
  {
    path: 'mini-picker/cascad',
    meta: { title: 'miniPicker 选择器组件 - 级联选择', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/cascad.md')
  },
  {
    path: 'mini-picker/cancel-button-text',
    meta: { title: 'miniPicker 选择器组件 - 取消按钮内容', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/cancel-button-text.md')
  },
  {
    path: 'mini-picker/cancel',
    meta: { title: 'miniPicker 选择器组件 - 事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/cancel.md')
  },
  {
    path: 'mini-picker/methods',
    meta: { title: 'miniPicker 选择器组件 - 方法', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/methods.md')
  },
  {
    path: 'mini-picker/multicolumn',
    meta: { title: 'miniPicker 选择器组件 - 多列选择', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/multicolumn.md')
  },
  {
    path: 'mini-picker/defaultindex',
    meta: { title: 'miniPicker 选择器组件 - 初始值索引', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/defaultindex.md')
  },
  {
    path: 'mini-picker/visibleitemcount',
    meta: { title: 'miniPicker 选择器组件 - 可见选项个数', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/visibleitemcount.md')
  },
  {
    path: 'mini-picker/itemheight',
    meta: { title: 'miniPicker 选择器组件 - 选项高度', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/itemheight.md')
  },
  {
    path: 'mini-picker',
    meta: { title: 'miniPicker 选择器组件 - 选项高度', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/itemheight.md')
  },
  {
    path: 'mini-picker/change',
    meta: { title: 'miniPicker 选择器组件 - change事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/mini-picker/change.md')
  },
  {
    path: 'file-upload',
    meta: { title: '表单组件-FileUpload 文件上传', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/basic-usage.md')
  },
  {
    path: 'file-upload/size',
    meta: { title: '设置组件的大小，只对使用Tiny的Button组件有效', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/size.md')
  },
  {
    path: 'file-upload/data',
    meta: { title: '设置组件的大小，只对使用Tiny的Button组件有效', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/data.md')
  },
  {
    path: 'file-upload/only-exist-mobile',
    meta: { title: '表单组件-FileUpload 文件上传-可上传的文件类型', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/only-exist-mobile.md')
  },
  {
    path: 'file-upload/accept-file-type',
    meta: { title: '表单组件-FileUpload 文件上传-可上传的文件类型', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/accept-file-type.md')
  },
  {
    path: 'file-upload/manual-upload',
    meta: { title: '表单组件-FileUpload 文件上传-手动上传', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/manual-upload.md')
  },
  {
    path: 'file-upload/prevent-delete-file',
    meta: { title: '表单组件-FileUpload 文件上传-阻止删除文件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/prevent-delete-file.md')
  },
  {
    path: 'file-upload/prevent-upload-file',
    meta: { title: '表单组件-FileUpload 文件上传-阻止上传文件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/prevent-upload-file.md')
  },
  {
    path: 'file-upload/upload-request',
    meta: { title: '表单组件-FileUpload 文件上传-上传请求', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/upload-request.md')
  },
  {
    path: 'file-upload/upload-file-list',
    meta: { title: '表单组件-FileUpload 文件上传-上传的文件列表', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/upload-file-list.md')
  },
  {
    path: 'file-upload/custom-upload-request',
    meta: { title: '表单组件-FileUpload 文件上传-自定义上传请求', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/custom-upload-request.md')
  },
  {
    path: 'file-upload/upload-limit',
    meta: { title: '表单组件-FileUpload 文件上传-最大上传限制', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/upload-limit.md')
  },
  {
    path: 'file-upload/picture-card',
    meta: { title: '表单组件-FileUpload 文件上传-照片墙', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/picture-card.md')
  },
  {
    path: 'file-upload/file-picture-card',
    meta: { title: '表单组件-FileUpload 文件上传-文件缩略图', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/file-picture-card.md')
  },
  {
    path: 'file-upload/dynamic-disable',
    meta: { title: '表单组件-FileUpload 文件上传-文件缩略图', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/dynamic-disable.md')
  },
  {
    path: 'file-upload/max-file-count',
    meta: { title: '表单组件-FileUpload 文件上传-最大上传文件数', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/max-file-count.md')
  },
  {
    path: 'file-upload/mini-mode',
    meta: { title: '表单组件-FileUpload 文件上传-迷你模式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/mini-mode.md')
  },
  {
    path: 'file-upload/multiple-file',
    meta: { title: '表单组件-FileUpload 文件上传-文件多选', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/multiple-file.md')
  },
  {
    path: 'file-upload/custom-prefix',
    meta: { title: '表单组件-FileUpload 文件上传-钩子函数', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/custom-prefix.md')
  },
  {
    path: 'file-upload/upload-events',
    meta: { title: '表单组件-FileUpload 文件上传-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/upload-events.md')
  },
  {
    path: 'file-upload/with-credentials',
    meta: { title: '表单组件-FileUpload 文件上传-支持发送 cookie 凭证信息', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/with-credentials.md')
  },
  {
    path: 'file-upload/clear-files',
    meta: { title: '表单组件-FileUpload 文件上传-手动清空已上传文件列表', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/clear-files.md')
  },
  {
    path: 'file-upload/abort-quest',
    meta: { title: '表单组件-FileUpload 文件上传-手动取消上传请求', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/abort-quest.md')
  },
  {
    path: 'file-upload/custom-upload-tip',
    meta: { title: '表单组件-FileUpload 文件上传-自定义上传提示', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/custom-upload-tip.md')
  },
  {
    path: 'file-upload/custom-trigger',
    meta: { title: '表单组件-FileUpload 文件上传-自定义触发文件选项框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/custom-trigger.md')
  },
  {
    path: 'file-upload/upload-user-head',
    meta: { title: '表单组件-FileUpload 文件上传-用户头像上传', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/upload-user-head.md')
  },
  {
    path: 'file-upload/image-size',
    meta: { title: '表单组件-FileUpload 文件上传-用户头像上传', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'mobileComp' */ './docs/mobile/file-upload/image-size.md')
  },
  {
    path: 'numeric',
    meta: { title: 'numeric 计数器组件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/numeric/numeric.md')
  },
  {
    path: 'numeric/step',
    meta: { title: 'numeric 计数器组件 - 步长', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/numeric/step.md')
  },
  {
    path: 'numeric/circulate',
    meta: { title: 'numeric 计数器组件 - 循环', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/numeric/circulate.md')
  },
  {
    path: 'numeric/max',
    meta: { title: 'numeric 计数器组件 - 最大值最小值', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/numeric/max.md')
  },
  {
    path: 'numeric/size',
    meta: { title: 'numeric 计数器组件 - 尺寸', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/numeric/size.md')
  },
  {
    path: 'numeric/controls',
    meta: { title: 'numeric 计数器组件 - 控制按钮', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/numeric/controls.md')
  },
  {
    path: 'numeric/controlsposition',
    meta: { title: 'numeric 计数器组件 - 控制按钮显示位置', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/numeric/controlsposition.md')
  },
  {
    path: 'numeric/precision',
    meta: { title: 'numeric 计数器组件 - 数值精度', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/numeric/precision.md')
  },
  {
    path: 'numeric/event',
    meta: { title: 'numeric 计数器组件 - 事件', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/numeric/event.md')
  },
  {
    path: 'numeric/automaticprice',
    meta: { title: 'numeric 计数器组件 - 根据商品数量自动计算价格。', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/numeric/automaticprice.md')
  },
  {
    path: 'exception/type',
    meta: { title: 'mobileexception 缺省页组件 - 类型', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/exception/type.md')
  },
  {
    path: 'mobile-popover',
    meta: { title: 'mobilepopover 气泡组件 - 类型', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/popover/base.md')
  },
  {
    path: 'mobile-popover/direction',
    meta: { title: 'mobilepopover 气泡组件 - 类型', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/popover/direction.md')
  },
  {
    path: 'multi-select',
    meta: { title: 'multi-select 选择器', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/multi-select/basic-usage.md')
  },
  {
    path: 'user-head',
    meta: { title: '其他组件-UserHead 用户头像', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-user-head' */ './docs/zh-CN/user-head/basic-usage.md')
  },
  {
    path: 'user-head/min-user-head',
    meta: { title: '其他组件-UserHead 用户头像-小头像', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-user-head' */ './docs/zh-CN/user-head/min-user-head.md')
  },
  {
    path: 'user-head/round-user-head',
    meta: { title: '其他组件-UserHead 用户头像-圆形头像', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-user-head' */ './docs/zh-CN/user-head/round-user-head.md')
  },
  {
    path: 'user-head/label-user-head',
    meta: { title: '其他组件-UserHead 用户头像-文字头像', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-user-head' */ './docs/zh-CN/user-head/label-user-head.md')
  },
  {
    path: 'user-head/icon-user-head',
    meta: { title: '其他组件-UserHead 用户头像-图标头像', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-user-head' */ './docs/zh-CN/user-head/icon-user-head.md')
  },
  {
    path: 'user-head/image-user-head',
    meta: { title: '其他组件-UserHead 用户头像-图片头像', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-user-head' */ './docs/zh-CN/user-head/image-user-head.md')
  },
  {
    path: 'user-head/message-count',
    meta: { title: '其他组件-UserHead 用户头像-消息计数', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-user-head' */ './docs/zh-CN/user-head/message-count.md')
  },
  {
    path: 'user-head/custom-color',
    meta: { title: '其他组件-UserHead 用户头像-自定义颜色', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-user-head' */ './docs/zh-CN/user-head/custom-color.md')
  },
  {
    path: 'user-head/custom-background-color',
    meta: { title: '其他组件-UserHead 用户头像-自定义背景颜色', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-user-head' */ './docs/zh-CN/user-head/custom-background-color.md')
  },
  {
    path: 'user-head/custom-user-head-content',
    meta: { title: '其他组件-UserHead 用户头像-自定义图像内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-user-head' */ './docs/zh-CN/user-head/custom-user-head-content.md')
  },
  {
    path: 'user-head/render-user-head-in-grid',
    meta: { title: '其他组件-UserHead 用户头像-Grid单元格展示头像', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-user-head' */ './docs/zh-CN/user-head/render-user-head-in-grid.md')
  },
  {
    path: 'table',
    meta: { title: 'table 表格组件 - 类型', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/table/base.md')
  },
  {
    path: 'modal',
    meta: { title: 'modal 反馈弹窗组件 - 类型', lang: 'zh-CN' },
    component: () => import(/* webpackChunkName: "mobileComp" */ './docs/mobile/modal/basic-usage.md')
  },
  {
    path: 'modal/modal-fullscreen',
    meta: { title: '模态框组件-最大化显示', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-fullscreen.md')
  },
  {
    path: 'modal/modal-esc-closable',
    meta: { title: '模态框组件-按 Esc 键关闭窗口', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-esc-closable.md')
  },
  {
    path: 'modal/modal-duration',
    meta: { title: '模态框组件-自动关闭延时', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-duration.md')
  },
  {
    path: 'modal/modal-id',
    meta: { title: '模态框组件-防止重复提示', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-id.md')
  },
  {
    path: 'modal/modal-lock-scroll',
    meta: { title: '模态框组件-锁住滚动条', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-lock-scroll.md')
  },
  {
    path: 'modal/modal-lock-view',
    meta: { title: '模态框组件-锁住页面', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-lock-view.md')
  },
  {
    path: 'modal/modal-mask',
    meta: { title: '模态框组件-显示遮罩层', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-mask.md')
  },
  {
    path: 'modal/modal-mask-closable',
    meta: { title: '模态框组件-点击遮罩层关闭窗口', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-mask-closable.md')
  },
  {
    path: 'modal/modal-message',
    meta: { title: '模态框组件-自定义内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-message.md')
  },
  {
    path: 'modal/modal-resize',
    meta: { title: '模态框组件-拖动调整窗口大小', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-resize.md')
  },
  {
    path: 'modal/modal-showHeader',
    meta: { title: '模态框组件-不显示头部', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-showHeader.md')
  },
  {
    path: 'modal/modal-showFooter',
    meta: { title: '模态框组件-不显示底部', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-showFooter.md')
  },
  {
    path: 'modal/modal-status',
    meta: { title: '模态框组件-消息状态', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-status.md')
  },
  {
    path: 'modal/modal-title',
    meta: { title: '模态框组件-标题', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-title.md')
  },
  {
    path: 'modal/modal-top',
    meta: { title: '模态框组件-距离顶部的位置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-top.md')
  },
  {
    path: 'modal/modal-type',
    meta: { title: '模态框组件-窗口类型', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-type.md')
  },
  {
    path: 'modal/modal-value',
    meta: { title: '模态框组件-绑定值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-value.md')
  },
  {
    path: 'modal/modal-zIndex',
    meta: { title: '模态框组件-自定义堆叠顺序', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-zIndex.md')
  },
  {
    path: 'modal/modal-event',
    meta: { title: '模态框组件-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-event.md')
  },
  {
    path: 'modal/modal-slots',
    meta: { title: '模态框组件-插槽', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/zh-CN/modal/modal-slots.md')
  },
  {
    path: 'index-bar',
    meta: { title: '索引', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/mobile/index-bar/base.md')
  },
  {
    path: 'index-bar/event',
    meta: { title: '索引组件-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-modal' */ './docs/mobile/index-bar/event.md')
  }
]

export default router
