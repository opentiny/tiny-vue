import router1 from './route.config.comp1'
import router2 from './route.config.comp2'

const routers = [
  {
    path: 'overview',
    component: () => import('./docs/zh-CN/overview/component-overview.md')
  },
  {
    path: 'credit-card-form',
    meta: { title: '其他组件-CreditCardForm 信用卡表单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-breadcrumb' */ './docs/zh-CN/credit-card-form/basic-usage.md')
  },
  {
    path: 'credit-card-form/background-image',
    meta: { title: '其他组件-CreditCardForm 信用卡表单-背景图片', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-breadcrumb' */ './docs/zh-CN/credit-card-form/background-image.md')
  },
  {
    path: 'credit-card-form/credit-card-form-events',
    meta: { title: '其他组件-CreditCardForm 信用卡表单-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-breadcrumb' */ './docs/zh-CN/credit-card-form/credit-card-form-events.md')
  },
  {
    path: 'crop',
    meta: { title: '其他组件-Crop 图片裁剪', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/basic-usage.md')
  },
  {
    path: 'crop/aspect-ratio',
    meta: { title: '其他组件-Crop 图片裁剪-裁剪框宽高比', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/aspect-ratio.md')
  },
  {
    path: 'crop/min-crop-box-width-height',
    meta: { title: '其他组件-Crop 图片裁剪-裁剪框最小宽高', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/min-crop-box-width-height.md')
  },
  {
    path: 'crop/no-background',
    meta: { title: '其他组件-Crop 图片裁剪-不显示网格背景', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/no-background.md')
  },
  {
    path: 'crop/no-guides',
    meta: { title: '其他组件-Crop 图片裁剪-不显示虚线', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/no-guides.md')
  },
  {
    path: 'crop/no-modal',
    meta: { title: '其他组件-Crop 图片裁剪-不显示模态', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/no-modal.md')
  },
  {
    path: 'crop/view-mode',
    meta: { title: '其他组件-Crop 图片裁剪-视图模式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/view-mode.md')
  },
  {
    path: 'crop/drag-mode',
    meta: { title: '其他组件-Crop 图片裁剪-拖拽模式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/drag-mode.md')
  },
  {
    path: 'crop/auto-crop-area',
    meta: { title: '其他组件-Crop 图片裁剪-自动裁剪面积', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/auto-crop-area.md')
  },
  {
    path: 'crop/get-container-data',
    meta: { title: '其他组件-Crop 图片裁剪-获取容器数据', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/get-container-data.md')
  },
  {
    path: 'crop/get-crop-box-data',
    meta: { title: '其他组件-Crop 图片裁剪-获取剪切框数据', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/get-crop-box-data.md')
  },
  {
    path: 'crop/get-cropped-canvas',
    meta: { title: '其他组件-Crop 图片裁剪-获取裁剪后的图片数据', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/get-cropped-canvas.md')
  },
  {
    path: 'crop/get-data',
    meta: { title: '其他组件-Crop 图片裁剪-获取裁剪区域数据', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/get-data.md')
  },
  {
    path: 'crop/get-image-data',
    meta: { title: '其他组件-Crop 图片裁剪-获取图像数据', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/get-image-data.md')
  },
  {
    path: 'crop/replace-image',
    meta: { title: '其他组件-Crop 图片裁剪-替换图片', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/replace-image.md')
  },
  {
    path: 'crop/wheel-zoom-ratio',
    meta: { title: '其他组件-Crop 图片裁剪-鼠标滚轮缩放图像时比例', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/wheel-zoom-ratio.md')
  },
  {
    path: 'crop/zoom-on-wheel',
    meta: { title: '其他组件-Crop 图片裁剪-禁用鼠标滚轮缩放图像', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/zoom-on-wheel.md')
  },
  {
    path: 'crop/crop-events',
    meta: { title: '其他组件-Crop 图片裁剪-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-crop' */ './docs/zh-CN/crop/crop-events.md')
  },
  {
    path: 'anchor',
    meta: { title: '导航组件-anchor 锚点', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-anchor' */ './docs/zh-CN/anchor/basic-usage.md')
  },
  {
    path: 'anchor/basic-usage',
    meta: { title: '导航组件-anchor 锚点-基本用法', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-anchor' */ './docs/zh-CN/anchor/basic-usage.md')
  },
  {
    path: 'anchor/is-affix',
    meta: { title: '导航组件-anchor 锚点-基本用法', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-anchor' */ './docs/zh-CN/anchor/is-affix.md')
  },
  {
    path: 'anchor/set-container',
    meta: { title: '导航组件-anchor 锚点-滚动容器', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-anchor' */ './docs/zh-CN/anchor/set-container.md')
  },
  {
    path: 'anchor/on-change',
    meta: { title: '导航组件-anchor 锚点-onChange事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-anchor' */ './docs/zh-CN/anchor/on-change.md')
  },
  {
    path: 'breadcrumb',
    meta: { title: '导航组件-Breadcrumb 面包屑', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-breadcrumb' */ './docs/zh-CN/breadcrumb/normal-item.md')
  },
  {
    path: 'breadcrumb/custom-item',
    meta: { title: '导航组件-Breadcrumb 面包屑-自定义节点', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-breadcrumb' */ './docs/zh-CN/breadcrumb/custom-item.md')
  },
  {
    path: 'breadcrumb/custom-separator',
    meta: { title: '导航组件-Breadcrumb 面包屑-自定义分隔符', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-breadcrumb' */ './docs/zh-CN/breadcrumb/custom-separator.md')
  },
  {
    path: 'breadcrumb/options',
    meta: { title: '导航组件-Breadcrumb 面包屑-显示字段映射', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-breadcrumb' */ './docs/zh-CN/breadcrumb/options.md')
  },
  {
    path: 'fall-menu',
    meta: { title: '导航组件-FallMenu 瀑布菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-fall-menu' */ './docs/zh-CN/fall-menu/basic-usage.md')
  },
  {
    path: 'fall-menu/data-resource',
    meta: { title: '导航组件-FallMenu 瀑布菜单-数据源', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-fall-menu' */ './docs/zh-CN/fall-menu/data-resource.md')
  },
  {
    path: 'toggle-menu',
    meta: { title: '导航组件-ToggleMenu 收缩菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-toggle-menu' */ './docs/zh-CN/toggle-menu/basic-usage.md')
  },
  {
    path: 'toggle-menu/custom-icon',
    meta: { title: '导航组件-ToggleMenu 收缩菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-toggle-menu' */ './docs/zh-CN/toggle-menu/custom-icon.md')
  },
  {
    path: 'toggle-menu/get-menu-data-sync',
    meta: { title: '导航组件-ToggleMenu 自定义服务', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-toggle-menu' */ './docs/zh-CN/toggle-menu/get-menu-data-sync.md')
  },
  {
    path: 'toggle-menu/toggle-props',
    meta: { title: '导航组件-ToggleMenu 选项配置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-toggle-menu' */ './docs/zh-CN/toggle-menu/toggle-props.md')
  },
  {
    path: 'toggle-menu/default-expand-all',
    meta: { title: '导航组件-ToggleMenu 收缩菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-toggle-menu' */ './docs/zh-CN/toggle-menu/default-expand-all.md')
  },
  {
    path: 'toggle-menu/dragable',
    meta: { title: '导航组件-ToggleMenu 收缩菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-toggle-menu' */ './docs/zh-CN/toggle-menu/dragable.md')
  },
  {
    path: 'toggle-menu/show-filter',
    meta: { title: '导航组件-ToggleMenu 收缩菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-toggle-menu' */ './docs/zh-CN/toggle-menu/show-filter.md')
  },
  {
    path: 'toggle-menu/events',
    meta: { title: '导航组件-ToggleMenu 收缩菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-toggle-menu' */ './docs/zh-CN/toggle-menu/events.md')
  },
  {
    path: 'link-menu',
    meta: { title: '导航组件-LinkMenu 收藏夹菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-link-menu' */ './docs/zh-CN/link-menu/basic-usage.md')
  },
  {
    path: 'link-menu/data-resource',
    meta: { title: '导航组件-LinkMenu 收藏夹菜单-数据源', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-link-menu' */ './docs/zh-CN/link-menu/data-resource.md')
  },
  {
    path: 'link-menu/get-menu-data-sync',
    meta: { title: '导航组件-LinkMen 自定义菜单数据服务', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-link-menu' */ './docs/zh-CN/link-menu/get-menu-data-sync.md')
  },
  {
    path: 'link-menu/menu-items',
    meta: { title: '导航组件-LinkMenu 收藏夹菜单-可收藏栏目数', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-link-menu' */ './docs/zh-CN/link-menu/menu-items.md')
  },
  {
    path: 'link-menu/custom-icon',
    meta: { title: '导航组件-LinkMenu 收藏夹菜单-自定义折叠展开图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-link-menu' */ './docs/zh-CN/link-menu/custom-icon.md')
  },
  {
    path: 'link-menu/custom-foot',
    meta: { title: '导航组件-LinkMenu 收藏夹菜单-自定义菜单弹窗底部', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-link-menu' */ './docs/zh-CN/link-menu/custom-foot.md')
  },
  {
    path: 'nav-menu',
    meta: { title: '导航组件-NavMenu 导航菜单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-nav-menu' */ './docs/zh-CN/nav-menu/basic-usage.md')
  },
  {
    path: 'nav-menu/data-resource',
    meta: { title: '导航组件-NavMenu 导航菜单-数据源', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-nav-menu' */ './docs/zh-CN/nav-menu/data-resource.md')
  },
  {
    path: 'nav-menu/overflow',
    meta: { title: '导航组件-NavMenu 导航菜单-显示策略', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-nav-menu' */ './docs/zh-CN/nav-menu/overflow.md')
  },
  {
    path: 'nav-menu/slot-logo',
    meta: { title: '导航组件-NavMenu 导航菜单-插槽', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-nav-menu' */ './docs/zh-CN/nav-menu/slot-logo.md')
  },
  {
    path: 'nav-menu/before-skip',
    meta: { title: '导航组件-NavMenu 导航菜单-菜单跳转处理', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-nav-menu' */ './docs/zh-CN/nav-menu/before-skip.md')
  },
  {
    path: 'nav-menu/custom-service',
    meta: { title: '导航组件-NavMenu 导航菜单-自定义服务', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-nav-menu' */ './docs/zh-CN/nav-menu/custom-service.md')
  },
  {
    path: 'fall-menu/custom-slider-icon',
    meta: { title: '导航组件-FallMenu 瀑布菜单-自定义左右侧滑动图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-fall-menu' */ './docs/zh-CN/fall-menu/custom-slider-icon.md')
  },
  {
    path: 'fall-menu/custom-menuitem',
    meta: { title: '导航组件-FallMenu 瀑布菜单-自定义菜单内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-fall-menu' */ './docs/zh-CN/fall-menu/custom-menuitem.md')
  },
  {
    path: 'floatbar',
    meta: { title: '导航组件-Floatbar 浮动块', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-floatbar' */ './docs/zh-CN/floatbar/basic-usage.md')
  },
  {
    path: 'floatbar/custom-style',
    meta: { title: '导航组件-Floatbar 浮动块-自定义样式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-floatbar' */ './docs/zh-CN/floatbar/custom-style.md')
  },
  {
    path: 'floatbar/custom-floatbar-item',
    meta: { title: '导航组件-Floatbar 浮动块-自定义浮动块内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-floatbar' */ './docs/zh-CN/floatbar/custom-floatbar-item.md')
  },
  {
    path: 'steps',
    meta: { title: '导航组件-Steps 步骤条', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-steps' */ './docs/zh-CN/steps/basic-usage.md')
  },
  {
    path: 'steps/data-resource',
    meta: { title: '导航组件-Steps 步骤条-数据源', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-steps' */ './docs/zh-CN/steps/data-resource.md')
  },
  {
    path: 'steps/normal-steps',
    meta: { title: '导航组件-Steps 步骤条-普通步骤条', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-steps' */ './docs/zh-CN/steps/normal-steps.md')
  },
  {
    path: 'steps/advanced-steps',
    meta: { title: '导航组件-Steps 步骤条-高级向导', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-steps' */ './docs/zh-CN/steps/advanced-steps.md')
  },
  {
    path: 'steps/timeline-steps',
    meta: { title: '导航组件-Steps 步骤条-时间线步骤条', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-steps' */ './docs/zh-CN/steps/timeline-steps.md')
  },
  {
    path: 'steps/custom-steps-item',
    meta: { title: '导航组件-Steps 步骤条-自定义数据项', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-steps' */ './docs/zh-CN/steps/custom-steps-item.md')
  },
  {
    path: 'steps/order-progress',
    meta: { title: '导航组件-Steps 步骤条-订单流程', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-steps' */ './docs/zh-CN/steps/order-progress.md')
  },
  {
    path: 'steps/steps-event',
    meta: { title: '导航组件-Steps 步骤条-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-steps' */ './docs/zh-CN/steps/steps-event.md')
  },
  {
    path: 'steps/steps-slot',
    meta: { title: '导航组件-Steps 步骤条-插槽', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-steps' */ './docs/zh-CN/steps/steps-slot.md')
  },
  {
    path: 'tabs',
    meta: { title: '导航组件-Tabs 标签页', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tabs' */ './docs/zh-CN/tabs/basic-usage.md')
  },
  {
    path: 'tabs/tab-style',
    meta: { title: '导航组件-Tabs 标签页-风格类型', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tabs' */ './docs/zh-CN/tabs/tab-style.md')
  },
  {
    path: 'tabs/with-add',
    meta: { title: '导航组件-Tabs 标签页-自定义增加标签页触发器', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tabs' */ './docs/zh-CN/tabs/with-add.md')
  },
  {
    path: 'tabs/with-close',
    meta: { title: '导航组件-Tabs 标签页-标签页可关闭', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tabs' */ './docs/zh-CN/tabs/with-close.md')
  },
  {
    path: 'tabs/position',
    meta: { title: '导航组件-Tabs 标签页-显示位置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tabs' */ './docs/zh-CN/tabs/position.md')
  },
  {
    path: 'tabs/before-leave',
    meta: { title: '导航组件-Tabs 标签页-切换标签页前的钩子', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tabs' */ './docs/zh-CN/tabs/before-leave.md')
  },
  {
    path: 'tabs/stretch-wh',
    meta: { title: '导航组件-Tabs 标签页-标签页宽度自适应', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tabs' */ './docs/zh-CN/tabs/stretch-wh.md')
  },
  {
    path: 'tabs/tabs-events',
    meta: { title: '导航组件-Tabs 标签页-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tabs' */ './docs/zh-CN/tabs/tabs-events.md')
  },
  {
    path: 'tabs/custom-tab-title',
    meta: { title: '导航组件-Tabs 标签页-自定义标签页标题', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tabs' */ './docs/zh-CN/tabs/custom-tab-title.md')
  },
  {
    path: 'tabs/show-different-grid-data',
    meta: { title: '导航组件-Tabs 标签页-切换标签页查询不同 Grid 数据', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-tabs' */ './docs/zh-CN/tabs/show-different-grid-data.md')
  },
  {
    path: 'time-line',
    meta: { title: '导航组件-TimeLine 时间线-基本用法', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-line' */ './docs/zh-CN/time-line/basic-usage.md')
  },
  {
    path: 'time-line/custom-normal-step',
    meta: { title: '导航组件-TimeLine 时间线-自定义横向时间线', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-line' */ './docs/zh-CN/time-line/custom-normal-step.md')
  },
  {
    path: 'time-line/event',
    meta: { title: '导航组件-TimeLine 时间线-自定义横向时间线', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-line' */ './docs/zh-CN//time-line/event.md')
  },
  {
    path: 'time-line/custom-vertical-step',
    meta: { title: '导航组件-TimeLine 时间线-自定义竖向时间线', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-line' */ './docs/zh-CN/time-line/custom-vertical-step.md')
  },
  {
    path: 'time-line/different-data',
    meta: { title: '导航组件-TimeLine 时间线-数据映射', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-line' */ './docs/zh-CN/time-line/different-data.md')
  },
  {
    path: 'time-line/set-start-value',
    meta: { title: '导航组件-TimeLine 时间线-设置序号起始值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-line' */ './docs/zh-CN/time-line/set-start-value.md')
  },
  {
    path: 'time-line/set-step-width',
    meta: { title: '导航组件-TimeLine 时间线-宽度设置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-line' */ './docs/zh-CN/time-line/set-step-width.md')
  },
  {
    path: 'time-line/show-status',
    meta: { title: '导航组件-TimeLine 时间线-组件内部状态', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-line' */ './docs/zh-CN/time-line/show-status.md')
  },
  {
    path: 'time-line/show-number',
    meta: { title: '导航组件-TimeLine 时间线-未完成的序号显示', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-line' */ './docs/zh-CN/time-line/show-number.md')
  },
  {
    path: 'time-line/vertical-step',
    meta: { title: '导航组件-TimeLine 时间线-竖向时间线', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-line' */ './docs/zh-CN/time-line/vertical-step.md')
  },
  {
    path: 'carousel',
    meta: { title: '容器组件-Carousel 走马灯', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-carousel' */ './docs/zh-CN/carousel/basic-usage.md')
  },
  {
    path: 'carousel/indicator-trigger',
    meta: { title: '容器组件-Carousel 走马灯-指示器和触发方式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-carousel' */ './docs/zh-CN/carousel/indicator-trigger.md')
  },
  {
    path: 'carousel/manual-play',
    meta: { title: '容器组件-Carousel 走马灯-手动轮播', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-carousel' */ './docs/zh-CN/carousel/manual-play.md')
  },
  {
    path: 'carousel/close-loop',
    meta: { title: '容器组件-Carousel 走马灯-关闭循环轮播', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-carousel' */ './docs/zh-CN/carousel/close-loop.md')
  },
  {
    path: 'carousel/autoplay',
    meta: { title: '容器组件-Carousel 走马灯-自动切换', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-carousel' */ './docs/zh-CN/carousel/autoplay.md')
  },
  {
    path: 'carousel/play-interval',
    meta: { title: '容器组件-Carousel 走马灯-轮播间隔时间', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-carousel' */ './docs/zh-CN/carousel/play-interval.md')
  },
  {
    path: 'carousel/up-down-carousel',
    meta: { title: '容器组件-Carousel 走马灯-纵向轮播', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-carousel' */ './docs/zh-CN/carousel/up-down-carousel.md')
  },
  {
    path: 'carousel/show-title',
    meta: { title: '容器组件-Carousel 走马灯-显示标题', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-carousel' */ './docs/zh-CN/carousel/show-title.md')
  },
  {
    path: 'carousel/carousel-arrow',
    meta: { title: '容器组件-Carousel 走马灯-左右切换箭头', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-carousel' */ './docs/zh-CN/carousel/carousel-arrow.md')
  },
  {
    path: 'carousel/card-mode',
    meta: { title: '容器组件-Carousel 走马灯-卡片化展示', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-carousel' */ './docs/zh-CN/carousel/card-mode.md')
  },
  {
    path: 'dialog-box',
    meta: { title: '容器组件-DialogBox 对话框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/basic-usage.md')
  },
  {
    path: 'dialog-box/secondary-dialog',
    meta: { title: '容器组件-DialogBox 对话框-二级弹窗', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/secondary-dialog.md')
  },
  {
    path: 'dialog-box/custom-dialog-title',
    meta: { title: '容器组件-DialogBox 对话框-自定义弹窗标题', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/custom-dialog-title.md')
  },
  {
    path: 'dialog-box/custom-dialog-content',
    meta: { title: '容器组件-DialogBox 对话框-自定义弹窗内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/custom-dialog-content.md')
  },
  {
    path: 'dialog-box/custom-dialog-footer',
    meta: { title: '容器组件-DialogBox 对话框-自定义弹窗底部', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/custom-dialog-footer.md')
  },
  {
    path: 'dialog-box/hidden-close-buttons',
    meta: { title: '容器组件-DialogBox 对话框-隐藏关闭按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/hidden-close-buttons.md')
  },
  {
    path: 'dialog-box/close-on-press-escape',
    meta: { title: '容器组件-DialogBox 对话框-禁用 ESC 关闭', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/close-on-press-escape.md')
  },
  {
    path: 'dialog-box/dialog-top-height',
    meta: { title: '容器组件-DialogBox 对话框-弹窗距离顶部的高度', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/dialog-top-height.md')
  },
  {
    path: 'dialog-box/dialog-width',
    meta: { title: '容器组件-DialogBox 对话框-弹窗的宽度', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/dialog-width.md')
  },
  {
    path: 'dialog-box/close-on-click-modal',
    meta: { title: '容器组件-DialogBox 对话框-点击遮罩层不关闭', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/close-on-click-modal.md')
  },
  {
    path: 'dialog-box/no-modal',
    meta: { title: '容器组件-DialogBox 对话框-不启用遮罩层', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/no-modal.md')
  },
  {
    path: 'dialog-box/right-dialog',
    meta: { title: '容器组件-DialogBox 对话框-右侧弹窗', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/right-dialog.md')
  },
  {
    path: 'dialog-box/hidden-header',
    meta: { title: '容器组件-DialogBox 对话框-隐藏弹窗头部', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/hidden-header.md')
  },
  {
    path: 'dialog-box/lock-scroll',
    meta: { title: '容器组件-DialogBox 对话框-弹出时禁用滚动', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/lock-scroll.md')
  },
  {
    path: 'dialog-box/center',
    meta: { title: '容器组件-DialogBox 对话框-弹窗头部和底部内容居中', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/center.md')
  },
  {
    path: 'dialog-box/draggable',
    meta: { title: '容器组件-DialogBox 对话框-可拖拽', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/draggable.md')
  },
  {
    path: 'dialog-box/fullscreen',
    meta: { title: '容器组件-DialogBox 对话框-全屏弹窗', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/fullscreen.md')
  },
  {
    path: 'dialog-box/open-close-events',
    meta: { title: '容器组件-DialogBox 对话框-弹出与关闭事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/open-close-events.md')
  },
  {
    path: 'dialog-box/form-in-dialog',
    meta: { title: '容器组件-DialogBox 对话框-弹窗表单', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-dialog-box' */ './docs/zh-CN/dialog-box/form-in-dialog.md')
  },
  {
    path: 'split',
    meta: { title: '容器组件-Split 面板分割', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-split' */ './docs/zh-CN/split/basic-usage.md')
  },
  {
    path: 'split/split-threshold',
    meta: { title: '容器组件-Split 面板分割-面板阈值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-split' */ './docs/zh-CN/split/split-threshold.md')
  },
  {
    path: 'split/split-mode',
    meta: { title: '容器组件-Split 面板分割-分割方式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-split' */ './docs/zh-CN/split/split-mode.md')
  },
  {
    path: 'split/split-events',
    meta: { title: '容器组件-Split 面板分割-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-split' */ './docs/zh-CN/split/split-events.md')
  },
  {
    path: 'split/split-slot',
    meta: { title: '容器组件-Split 面板分割-插槽', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-split' */ './docs/zh-CN/split/split-slot.md')
  },
  {
    path: 'split/nested-use',
    meta: { title: '容器组件-Split 面板分割-嵌套使用', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-split' */ './docs/zh-CN/split/nested-use.md')
  },
  {
    path: 'split/collapsible',
    meta: { title: '容器组件-Split 面板分割-可折叠', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-split' */ './docs/zh-CN/split/collapsible.md')
  },
  {
    path: 'autocomplete',
    meta: { title: '表单组件-Autocomplete 自动完成', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/basic-usage.md')
  },
  {
    path: 'autocomplete/cust-template',
    meta: { title: '表单组件-Autocomplete 自动完成-自定义模板', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/cust-template.md')
  },
  {
    path: 'autocomplete/append-prepend',
    meta: { title: '表单组件-Autocomplete 输入框前/后置内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/append-prepend.md')
  },
  {
    path: 'autocomplete/disabled',
    meta: { title: '表单组件-Autocomplete 禁用', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/disabled.md')
  },
  {
    path: 'autocomplete/size',
    meta: { title: '设置输入框大小，可选值为：medium，small，mini', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/size.md')
  },
  {
    path: 'autocomplete/remote-search',
    meta: { title: '表单组件-Autocomplete 自动完成-远程搜索', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/remote-search.md')
  },
  {
    path: 'autocomplete/select-event',
    meta: { title: '表单组件-Autocomplete 自动完成-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/select-event.md')
  },
  {
    path: 'autocomplete/clearable',
    meta: { title: '表单组件-Autocomplete 自动完成-可清除', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/clearable.md')
  },
  {
    path: 'autocomplete/custom-icon',
    meta: { title: '表单组件-Autocomplete 自动完成-自定义图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/custom-icon.md')
  },
  {
    path: 'autocomplete/debounce',
    meta: { title: '表单组件-Autocomplete 自动完成-去抖延时', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/debounce.md')
  },
  {
    path: 'autocomplete/hide-loading',
    meta: { title: '表单组件-Autocomplete 自动完成-隐藏加载图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/hide-loading.md')
  },
  {
    path: 'autocomplete/value-key',
    meta: { title: '表单组件-Autocomplete 自动完成-指定显示的键名', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/value-key.md')
  },
  {
    path: 'autocomplete/popper-class',
    meta: { title: '表单组件-Autocomplete 自动完成-自定义列表样式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/popper-class.md')
  },
  {
    path: 'autocomplete/placement',
    meta: { title: '表单组件-Autocomplete 自动完成-设置菜单弹出位置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/placement.md')
  },
  {
    path: 'autocomplete/highlight-first-item',
    meta: { title: '表单组件-Autocomplete 自动完成-高亮显示第一项', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/highlight-first-item.md')
  },
  {
    path: 'autocomplete/no-trigger-on-focus',
    meta: { title: '表单组件-Autocomplete 自动完成-聚焦不显示建议列表', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-autocomplete' */ './docs/zh-CN/autocomplete/no-trigger-on-focus.md')
  },
  {
    path: 'button',
    meta: { title: '表单组件-Button 按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/basic-usage.md')
  },
  {
    path: 'button/text-button',
    meta: { title: '表单组件-Button 按钮-文字按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/text-button.md')
  },
  {
    path: 'button/round',
    meta: { title: '表单组件-Button 按钮-是否圆角', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/round.md')
  },
  {
    path: 'button/autofocus',
    meta: { title: '表单组件-Button 是否默认聚焦', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/autofocus.md')
  },
  {
    path: 'button/icon-button',
    meta: { title: '表单组件-Button 按钮-图标按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/icon-button.md')
  },
  {
    path: 'button/img-button',
    meta: { title: '表单组件-Button 按钮-图片按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/img-button.md')
  },
  {
    path: 'button/button-style',
    meta: { title: '表单组件-Button 按钮-主题样式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/button-style.md')
  },
  {
    path: 'button/show-loading',
    meta: { title: '表单组件-Button 按钮-显示加载中', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/show-loading.md')
  },
  {
    path: 'button/button-size',
    meta: { title: '表单组件-Button 按钮-尺寸', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/button-size.md')
  },
  {
    path: 'button/circle-button',
    meta: { title: '表单组件-Button 按钮-圆形按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/circle-button.md')
  },
  {
    path: 'button/plain-button',
    meta: { title: '表单组件-Button 按钮-朴素按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/plain-button.md')
  },
  {
    path: 'button/reset-time',
    meta: { title: '表单组件-Button 按钮-防止表单重复提交', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/reset-time.md')
  },
  {
    path: 'button/default-focus',
    meta: { title: '表单组件-Button 按钮-默认聚焦', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/default-focus.md')
  },
  {
    path: 'button/button-events',
    meta: { title: '表单组件-Button 按钮-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/button-events.md')
  },
  {
    path: 'button/dynamic-disable-button',
    meta: { title: '表单组件-Button 按钮-动态禁用按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-button' */ './docs/zh-CN/button/dynamic-disable-button.md')
  },
  {
    path: 'date-picker',
    meta: { title: '表单组件-DatePicker 日期选择器', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/basic-usage.md')
  },
  {
    path: 'date-picker/time-zone',
    meta: { title: '表单组件-DatePicker 日期选择器-选择日带快捷选项', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/time-zone.md')
  },
  {
    path: 'date-picker/date-shortcuts',
    meta: { title: '表单组件-DatePicker 日期选择器-选择日带快捷选项', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/date-shortcuts.md')
  },
  {
    path: 'date-picker/focus',
    meta: { title: '表单组件-DatePicker 获取焦点', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/focus.md')
  },
  {
    path: 'date-picker/utc8',
    meta: { title: '表单组件-DatePicker 显示东八区时间', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/utc8.md')
  },
  {
    path: 'date-picker/other-picker-type',
    meta: { title: '表单组件-DatePicker 日期选择器-其他日期单位', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/other-picker-type.md')
  },
  {
    path: 'date-picker/date-range',
    meta: { title: '表单组件-DatePicker 日期选择器-选择日期范围', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/date-range.md')
  },
  {
    path: 'date-picker/date-range-shortcuts',
    meta: { title: '表单组件-DatePicker 日期选择器-日期范围快捷选项', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/date-range-shortcuts.md')
  },
  {
    path: 'date-picker/default-time-of-range',
    meta: { title: '表单组件-DatePicker 日期选择器-日期范围默认时刻', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/default-time-of-range.md')
  },
  {
    path: 'date-picker/month-range',
    meta: { title: '表单组件-DatePicker 日期选择器-选择月份范围', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/month-range.md')
  },
  {
    path: 'date-picker/month-range-shortcuts',
    meta: { title: '表单组件-DatePicker 日期选择器-月份范围快捷选项', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/month-range-shortcuts.md')
  },
  {
    path: 'date-picker/max-min',
    meta: { title: '表单组件-DatePicker 日期选择器-最大最小值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/max-min.md')
  },
  {
    path: 'date-picker/align',
    meta: { title: '表单组件-DatePicker 日期选择器-对齐方式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/align.md')
  },
  {
    path: 'date-picker/set-size',
    meta: { title: '表单组件-DatePicker 日期选择器-尺寸设置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/set-size.md')
  },
  {
    path: 'date-picker/about-clear',
    meta: { title: '表单组件-DatePicker 日期选择器-清除输入', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/about-clear.md')
  },
  {
    path: 'date-picker/about-format',
    meta: { title: '表单组件-DatePicker 日期选择器-格式化相关', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/about-format.md')
  },
  {
    path: 'date-picker/custom-suffix-icon',
    meta: { title: '表单组件-DatePicker 日期选择器-自定义后置图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/custom-suffix-icon.md')
  },
  {
    path: 'date-picker/custom-range',
    meta: { title: '表单组件-DatePicker 日期选择器-范围选择自定义相关', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/custom-range.md')
  },
  {
    path: 'date-picker/unlink-panels',
    meta: { title: '表单组件-DatePicker 日期选择器-范围选择取消面板联动', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/unlink-panels.md')
  },
  {
    path: 'date-picker/default-value',
    meta: { title: '表单组件-DatePicker 日期选择器-选择器打开时默认时间设置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/default-value.md')
  },
  {
    path: 'date-picker/editable',
    meta: { title: '表单组件-DatePicker 日期选择器-文本框不可输入', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/editable.md')
  },
  {
    path: 'date-picker/date-picker-events',
    meta: { title: '表单组件-DatePicker 日期选择器-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/date-picker-events.md')
  },
  {
    path: 'date-picker/time-arrow-control',
    meta: { title: '表单组件-DatePicker 日期选择器-箭头按钮控制时间选择', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/time-arrow-control.md')
  },
  {
    path: 'date-picker/validate-event',
    meta: { title: '表单组件-DatePicker 日期选择器-不触发表单校验', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-date-picker' */ './docs/zh-CN/date-picker/validate-event.md')
  },
  {
    path: 'time-picker',
    meta: { title: '表单组件-TimePicker 时间选择器', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/basic-usage.md')
  },
  {
    path: 'time-picker/selectable-range',
    meta: { title: '表单组件-TimePicker 时间选择器-选择范围', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/basic-usage.md')
  },
  {
    path: 'time-picker/arrow-control',
    meta: { title: '表单组件-TimePicker 时间选择器-选择范围', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/arrow-control.md')
  },
  {
    path: 'time-picker/default-time-of-range',
    meta: { title: '表单组件-TimePicker 时间选择器-时间范围默认时刻', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/default-time-of-range.md')
  },
  {
    path: 'time-picker/picker-options',
    meta: { title: '表单组件-TimePicker 时间选择器-选择范围', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/picker-options.md')
  },
  {
    path: 'time-picker/format',
    meta: { title: '表单组件-TimePicker 时间选择器-时间格式化', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/format.md')
  },
  {
    path: 'time-picker/clear-icon',
    meta: { title: '表单组件-TimePicker 时间选择器-清除图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/clear-icon.md')
  },
  {
    path: 'time-picker/is-range',
    meta: { title: '表单组件-TimePicker 时间选择器-时间范围选择', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/is-range.md')
  },
  {
    path: 'time-picker/suffix-icon',
    meta: { title: '表单组件-TimePicker 时间选择器-自定义后置图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/suffix-icon.md')
  },
  {
    path: 'time-picker/default-value',
    meta: { title: '表单组件-TimePicker 时间选择器-选择器打开时默认时间设置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/default-value.md')
  },
  {
    path: 'time-picker/editable',
    meta: { title: '表单组件-TimePicker 时间选择器-文本框不可输入', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/editable.md')
  },
  {
    path: 'time-picker/disabled',
    meta: { title: '表单组件-TimePicker 时间选择器-禁用', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/disabled.md')
  },
  {
    path: 'time-picker/time-low',
    meta: { title: '表单组件-TimePicker 时间选择器-显示格式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/time-low.md')
  },
  {
    path: 'time-picker/date',
    meta: { title: '表单组件-TimePicker 时间选择器-显示格式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/date.md')
  },
  {
    path: 'time-picker/set-size',
    meta: { title: '表单组件-TimePicker 时间选择器-尺寸设置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/set-size.md')
  },
  {
    path: 'time-picker/time-picker-events',
    meta: { title: '表单组件-TimePicker 时间选择器-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-picker' */ './docs/zh-CN/time-picker/time-picker-events.md')
  },
  {
    path: 'drop-times',
    meta: { title: '表单组件-DropTimes 下拉时间', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-drop-times' */ './docs/zh-CN/drop-times/basic-usage.md')
  },
  {
    path: 'drop-times/start-end-step',
    meta: { title: '表单组件-DropTimes 下拉时间-步长与时间区间', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-drop-times' */ './docs/zh-CN/drop-times/start-end-step.md')
  },
  {
    path: 'drop-times/size',
    meta: { title: '设置组件大小，可设置为：medium，small，mini', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-drop-times' */ './docs/zh-CN/drop-times/size.md')
  },
  {
    path: 'input',
    meta: { title: '表单组件-Input 输入框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/basic-usage.md')
  },
  {
    path: 'input/disabled-readonly',
    meta: { title: '表单组件-Input 输入框-禁用和只读', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/disabled-readonly.md')
  },
  {
    path: 'input/clearable',
    meta: { title: '表单组件-Input 输入框-可清空', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/clearable.md')
  },
  {
    path: 'input/show-password',
    meta: { title: '表单组件-Input 输入框-密码框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/show-password.md')
  },
  {
    path: 'input/input-size',
    meta: { title: '表单组件-Input 输入框-尺寸', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/input-size.md')
  },
  {
    path: 'input/custom-prefix-suffix-icon',
    meta: { title: '表单组件-Input 输入框-自定义输入框前后图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/custom-prefix-suffix-icon.md')
  },
  {
    path: 'input/resize-textarea',
    meta: { title: '表单组件-Input 输入框-可缩放文本域', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/resize-textarea.md')
  },
  {
    path: 'input/textarea-limit-rows',
    meta: { title: '表单组件-Input 输入框-文本域限制输入行数', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/textarea-limit-rows.md')
  },
  {
    path: 'input/autosize-textarea',
    meta: { title: '表单组件-Input 输入框-可自适应文本高度的文本域', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/autosize-textarea.md')
  },
  {
    path: 'input/complicated-input',
    meta: { title: '表单组件-Input 输入框-复合型输入框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/complicated-input.md')
  },
  {
    path: 'input/max-min',
    meta: { title: '表单组件-Input 输入框-最大最小值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/max-min.md')
  },
  {
    path: 'input/max-min-length',
    meta: { title: '表单组件-Input 输入框-输入长度限制', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/max-min-length.md')
  },
  {
    path: 'input/counter',
    meta: { title: '表单组件-Input 输入框-输入计数器', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/counter.md')
  },
  {
    path: 'input/step',
    meta: { title: '表单组件-Input 输入框-输入字段的合法数字间隔', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/step.md')
  },
  {
    path: 'input/validate-event',
    meta: { title: '表单组件-Input 输入框-输入时触发表单校验', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/validate-event.md')
  },
  {
    path: 'input/autofocus',
    meta: { title: '表单组件-Input 输入框-自动获取焦点', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/autofocus.md')
  },
  {
    path: 'input/input-events',
    meta: { title: '表单组件-Input 输入框-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/input-events.md')
  },
  {
    path: 'input/input-methods',
    meta: { title: '表单组件-Input 输入框-方法', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-input' */ './docs/zh-CN/input/input-methods.md')
  },
  {
    path: 'ip-address',
    meta: { title: '表单组件-IpAddress 输入框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-ip-address' */ './docs/zh-CN/ip-address/basic-usage.md')
  },
  {
    path: 'ip-address/type',
    meta: { title: '表单组件-IpAddress 输入框-IPv4 类型', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-ip-address' */ './docs/zh-CN/ip-address/type.md')
  },
  {
    path: 'ip-address/readonly',
    meta: { title: '表单组件-IpAddress 文本只读', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-ip-address' */ './docs/zh-CN/ip-address/readonly.md')
  },
  {
    path: 'ip-address/size',
    meta: { title: '设置组件大小，可以设置为：medium，small，mini', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-ip-address' */ './docs/zh-CN/ip-address/size.md')
  },
  {
    path: 'ip-address/custom-delimiter',
    meta: { title: '表单组件-IpAddress 输入框-自定义分隔符', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-ip-address' */ './docs/zh-CN/ip-address/custom-delimiter.md')
  },
  {
    path: 'ip-address/ipaddress-events',
    meta: { title: '表单组件-IpAddress 输入框-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-ip-address' */ './docs/zh-CN/ip-address/ipaddress-events.md')
  },
  {
    path: 'numeric',
    meta: { title: '表单组件-Numeric 计数器', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-numeric' */ './docs/zh-CN/numeric/basic-usage.md')
  },
  {
    path: 'numeric/allow-empty',
    meta: { title: '表单组件-Numeric 计数器-可清空输入', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-numeric' */ './docs/zh-CN/numeric/allow-empty.md')
  },
  {
    path: 'numeric/about-step',
    meta: { title: '表单组件-Numeric 计数器-步长', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-numeric' */ './docs/zh-CN/numeric/about-step.md')
  },
  {
    path: 'numeric/max-min',
    meta: { title: '表单组件-Numeric 计数器-最大最小值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-numeric' */ './docs/zh-CN/numeric/max-min.md')
  },
  {
    path: 'numeric/dynamic-disabled',
    meta: { title: '表单组件-Numeric 计数器-禁用', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-numeric' */ './docs/zh-CN/numeric/dynamic-disabled.md')
  },
  {
    path: 'numeric/numeric-size',
    meta: { title: '表单组件-Numeric 计数器-尺寸', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-numeric' */ './docs/zh-CN/numeric/numeric-size.md')
  },
  {
    path: 'numeric/controls',
    meta: { title: '表单组件-Numeric 计数器-控制按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-numeric' */ './docs/zh-CN/numeric/controls.md')
  },
  {
    path: 'numeric/precision',
    meta: { title: '表单组件-Numeric 计数器-数值精度', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-numeric' */ './docs/zh-CN/numeric/precision.md')
  },
  {
    path: 'numeric/mouse-wheel',
    meta: { title: '表单组件-Numeric 计数器-鼠标滚轮滚动改变值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-numeric' */ './docs/zh-CN/numeric/mouse-wheel.md')
  },
  {
    path: 'numeric/numeric-events',
    meta: { title: '表单组件-Numeric 计数器-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-numeric' */ './docs/zh-CN/numeric/numeric-events.md')
  },
  {
    path: 'numeric/calculate-according-to-num-of-goods',
    meta: { title: '表单组件-Numeric 计数器-根据商品数量自动计算价格', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-numeric' */ './docs/zh-CN/numeric/calculate-according-to-num-of-goods.md')
  },
  {
    path: 'pop-editor',
    meta: { title: '表单组件-PopEditor 弹出编辑', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/basic-usage.md')
  },
  {
    path: 'pop-editor/size',
    meta: { title: '设置组件大小，可以设置为：medium，small，mini', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/size.md')
  },
  {
    path: 'pop-editor/show-overflow',
    meta: { title: '设置数据类容过长时对数据超出部分隐藏', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/show-overflow.md')
  },
  {
    path: 'pop-editor/trigger',
    meta: { title: 'trigger配置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/trigger.md')
  },
  {
    path: 'pop-editor/slot',
    meta: { title: 'slot配置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/slot.md')
  },
  {
    path: 'pop-editor/custom-conditions',
    meta: { title: '表单组件-PopEditor 弹出编辑-自定义查询条件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/custom-conditions.md')
  },
  {
    path: 'pop-editor/before-reset',
    meta: { title: '重置前的钩子函数', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/before-reset.md')
  },
  {
    path: 'pop-editor/draggable',
    meta: { title: '表单组件-PopEditor 弹出编辑-窗口拖动', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/draggable.md')
  },
  {
    path: 'pop-editor/show-clear-btn',
    meta: { title: '表单组件-PopEditor 弹出编辑-可清除', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/show-clear-btn.md')
  },
  {
    path: 'pop-editor/resize',
    meta: { title: '表单组件-PopEditor 弹出编辑-可清除', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/resize.md')
  },
  {
    path: 'pop-editor/table-edit',
    meta: { title: '表单组件-PopEditor 弹出编辑-表格编辑', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/table-edit.md')
  },
  {
    path: 'pop-editor/width-height',
    meta: { title: '表单组件-PopEditor 弹出编辑-宽高', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/width-height.md')
  },
  {
    path: 'pop-editor/custom-icon',
    meta: { title: '表单组件-PopEditor 弹出编辑-自定义图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/custom-icon.md')
  },
  {
    path: 'pop-editor/multi-selected',
    meta: { title: '表单组件-PopEditor 弹出编辑-多选', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/multi-selected.md')
  },
  {
    path: 'pop-editor/remote-search',
    meta: { title: '表单组件-PopEditor 弹出编辑-远程搜索', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/remote-search.md')
  },
  {
    path: 'pop-editor/render-text',
    meta: { title: '表单组件-PopEditor 渲染反查', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/render-text.md')
  },
  {
    path: 'pop-editor/clearable',
    meta: { title: '表单组件-PopEditor 支持在搜索表单配置清除按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/clearable.md')
  },
  {
    path: 'pop-editor/popeditor-events',
    meta: { title: '表单组件-PopEditor 弹出编辑-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/popeditor-events.md')
  },
  {
    path: 'pop-editor/dynamic-readonly',
    meta: { title: '表单组件-PopEditor 弹出编辑-只读', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/dynamic-readonly.md')
  },
  {
    path: 'pop-editor/dynamic-disabled',
    meta: { title: '表单组件-PopEditor 弹出编辑-禁用', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/dynamic-disabled.md')
  },
  {
    path: 'pop-editor/text-field',
    meta: { title: '表单组件-PopEditor 弹出编辑-显示字段映射', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/text-field.md')
  },
  {
    path: 'pop-editor/value-field',
    meta: { title: '表单组件-PopEditor 弹出编辑-提交字段映射', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/value-field.md')
  },
  {
    path: 'pop-editor/custom-title',
    meta: { title: '表单组件-PopEditor 弹出编辑-自定义标题', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/custom-title.md')
  },
  {
    path: 'pop-editor/pager',
    meta: { title: '表单组件-PopEditor 弹出编辑-分页', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/pager.md')
  },
  {
    path: 'pop-editor/tree-edit',
    meta: { title: '表单组件-PopEditor 弹出编辑-分页', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/tree-edit.md')
  },
  {
    path: 'pop-editor/single-select-radio',
    meta: { title: '表单组件-PopEditor 弹出编辑-树模式单选', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/single-select-radio.md')
  },
  {
    path: 'pop-editor/show-history',
    meta: { title: '表单组件-PopEditor 弹出编辑-设置历史记录标签页', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-editor' */ './docs/zh-CN/pop-editor/show-history.md')
  },
  {
    path: 'pop-upload',
    meta: { title: '表单组件-PopUpload 弹出框上传', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-upload' */ './docs/zh-CN/pop-upload/basic-usage.md')
  },
  {
    path: 'pop-upload/custom-request-headers',
    meta: { title: '表单组件-PopUpload 弹出框上传-自定义请求头', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-upload' */ './docs/zh-CN/pop-upload/custom-request-headers.md')
  },
  {
    path: 'pop-upload/fill-button-text',
    meta: { title: '设置组件大小，可设置为：medium，small，mini', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-upload' */ './docs/zh-CN/pop-upload/fill-button-text.md')
  },
  {
    path: 'pop-upload/upload-name',
    meta: { title: '设置组件字段名，该属性的默认值为 file', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-upload' */ './docs/zh-CN/pop-upload/upload-name.md')
  },
  {
    path: 'pop-upload/http-request',
    meta: { title: '通过配置 http-request ，覆盖默认的上传行为，可以自定义上传的实现', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-upload' */ './docs/zh-CN/pop-upload/http-request.md')
  },
  {
    path: 'pop-upload/size',
    meta: { title: '设置组件大小，可设置为：medium，small，mini', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-upload' */ './docs/zh-CN/pop-upload/size.md')
  },
  {
    path: 'pop-upload/file-limit',
    meta: { title: '表单组件-PopUpload 弹出框上传-最大上传文件数', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-upload' */ './docs/zh-CN/pop-upload/file-limit.md')
  },
  {
    path: 'pop-upload/file-type',
    meta: { title: '表单组件-PopUpload 弹出框上传-可上传文件类型', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-upload' */ './docs/zh-CN/pop-upload/file-type.md')
  },
  {
    path: 'pop-upload/max-upload-file-size',
    meta: { title: '表单组件-PopUpload 弹出框上传-可上传文件大小', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-upload' */ './docs/zh-CN/pop-upload/max-upload-file-size.md')
  },
  {
    path: 'pop-upload/before-remove-file',
    meta: { title: '表单组件-PopUpload 弹出框文件-移除前事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-pop-upload' */ './docs/zh-CN/pop-upload/prevent-delete-file.md')
  },
  {
    path: 'search',
    meta: { title: '表单组件-Search 搜索', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-search' */ './docs/zh-CN/search/basic-usage.md')
  },
  {
    path: 'search/clearable',
    meta: { title: '表单组件-Search 搜索可清除', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-search' */ './docs/zh-CN/search/clearable.md')
  },
  {
    path: 'search/mini-mode',
    meta: { title: '表单组件-Search 搜索-Mini 模式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-search' */ './docs/zh-CN/search/mini-mode.md')
  },
  {
    path: 'search/transparent-mode',
    meta: { title: '表单组件-Search 搜索-透明模式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-search' */ './docs/zh-CN/search/transparent-mode.md')
  },
  {
    path: 'search/default-value',
    meta: { title: '表单组件-Search 搜索-默认搜索', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-search' */ './docs/zh-CN/search/default-value.md')
  },
  {
    path: 'search/search-types',
    meta: { title: '表单组件-Search 搜索-搜索类型', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-search' */ './docs/zh-CN/search/search-types.md')
  },
  {
    path: 'search/custom-search-types',
    meta: { title: '表单组件-Search 搜索-自定义搜索类型的内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-search' */ './docs/zh-CN/search/custom-search-types.md')
  },
  {
    path: 'search/show-selected-types',
    meta: { title: '表单组件-Search 搜索-自定义搜索类型选择后的展示', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-search' */ './docs/zh-CN/search/show-selected-types.md')
  },
  {
    path: 'search/search-events',
    meta: { title: '表单组件-Search 搜索-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-search' */ './docs/zh-CN/search/search-events.md')
  },
  // {
  //   path: 'search/search-in-navigation-menu',
  //   meta: { title: '表单组件-Search 搜索-导航菜单搜索功能', lang: 'zh-CN', sign: 'component' },
  //   component: () => import(/* webpackChunkName: 'v3-search' */ './docs/zh-CN/search/search-in-navigation-menu.md')
  // },
  {
    path: 'radio',
    meta: { title: '表单组件-Radio 单选框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/basic-usage.md')
  },
  {
    path: 'radio/with-border',
    meta: { title: '表单组件-Radio 单选框-带有边框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/with-border.md')
  },
  {
    path: 'radio/radio-default',
    meta: { title: '表单组件-Radio 单选框-带有边框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/radio-default.md')
  },
  {
    path: 'radio/radio-value',
    meta: { title: '表单组件-Radio 单选框-带有边框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/radio-value.md')
  },
  {
    path: 'radio/radio-text',
    meta: { title: '表单组件-Radio 单选框-带有边框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/radio-text.md')
  },
  {
    path: 'radio/dynamic-disable',
    meta: { title: '表单组件-Radio 单选框-禁用状态', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/dynamic-disable.md')
  },
  {
    path: 'radio/vertical',
    meta: { title: '表单组件-Radio 单选框-垂直布局', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/vertical.md')
  },
  {
    path: 'radio/active-color',
    meta: { title: '表单组件-Radio 单选框-颜色设置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/active-color.md')
  },
  {
    path: 'radio/radio-size',
    meta: { title: '表单组件-Radio 单选框-尺寸设置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/radio-size.md')
  },
  {
    path: 'radio/radio-events',
    meta: { title: '表单组件-Radio 单选框-单选框事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/radio-events.md')
  },
  {
    path: 'radio/group-options',
    meta: { title: '表单组件-Radio 单选框-单选框事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/group-options.md')
  },
  {
    path: 'radio/active-color',
    meta: { title: '表单组件-Radio 单选框-单选框事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/active-color.md')
  },
  {
    path: 'radio/dynamic-disable',
    meta: { title: '表单组件-Radio 单选框-单选框事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/dynamic-disable.md')
  },
  {
    path: 'radio/basic-usage',
    meta: { title: '表单组件-Radio 单选框-单选框事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/basic-usage.md')
  },
  {
    path: 'radio/vertical',
    meta: { title: '表单组件-Radio 单选框-单选框事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-radio' */ './docs/zh-CN/radio/vertical.md')
  },
  {
    path: 'cascader',
    meta: { title: '表单组件-Cascader 级联选择器', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader' */ './docs/zh-CN/cascader/basic-usage.md')
  },
  {
    path: 'cascader/disabled-items',
    meta: { title: '表单组件-Cascader 级联选择器-禁用选项', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader' */ './docs/zh-CN/cascader/disabled-items.md')
  },
  {
    path: 'cascader/props-children',
    meta: { title: '表单组件-Cascader 指定选项的子选项为选项对象的某个属性值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader' */ './docs/zh-CN/cascader/props-children.md')
  },
  {
    path: 'cascader/clearable',
    meta: { title: '表单组件-Cascader 级联选择器-可清空', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader' */ './docs/zh-CN/cascader/clearable.md')
  },
  {
    path: 'cascader/default-multiple',
    meta: { title: '表单组件-Cascader 级联选择器-多选', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader' */ './docs/zh-CN/cascader/default-multiple.md')
  },
  {
    path: 'cascader/check-strictly',
    meta: { title: '表单组件-Cascader 级联选择器-父子级不相关联', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader' */ './docs/zh-CN/cascader/check-strictly.md')
  },
  {
    path: 'cascader/auto-load',
    meta: { title: '表单组件-Cascader 级联选择器-动态加载', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader' */ './docs/zh-CN/cascader/auto-load.md')
  },
  {
    path: 'cascader/filterable',
    meta: { title: '表单组件-Cascader 级联选择器-可搜索', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader' */ './docs/zh-CN/cascader/filterable.md')
  },
  {
    path: 'cascader/show-all-levels',
    meta: { title: '表单组件-Cascader 级联选择器-仅显示最后一级', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader' */ './docs/zh-CN/cascader/show-all-levels.md')
  },
  {
    path: 'cascader/events',
    meta: { title: '表单组件-Cascader 级联选择器-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader' */ './docs/zh-CN/cascader/events.md')
  },
  {
    path: 'cascader-panel',
    meta: { title: '表单组件-CascaderPanel 级联面板', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader-panel' */ './docs/zh-CN/cascader-panel/basic-usage.md')
  },
  {
    path: 'cascader-panel/change',
    meta: { title: '表单组件-CascaderPanel change', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader-panel' */ './docs/zh-CN/cascader-panel/change.md')
  },
  {
    path: 'cascader-panel/custom-option-content',
    meta: { title: '表单组件-Cascader 级联选择器-自定义节点内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader' */ './docs/zh-CN/cascader-panel/custom-option-content.md')
  },
  {
    path: 'cascader-panel/cascader-panel-props',
    meta: { title: '表单组件-CascaderPanel props 选项', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-cascader-panel' */ './docs/zh-CN/cascader-panel/cascader-panel-props.md')
  },
  {
    path: 'checkbox',
    meta: { title: '表单组件-Checkbox 复选框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/basic-usage.md')
  },
  {
    path: 'checkbox/with-border',
    meta: { title: '表单组件-Checkbox 复选框-尺寸', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/with-border.md')
  },
  {
    path: 'checkbox/indeterminate',
    meta: { title: '表单组件-Checkbox 复选框-全选与半选', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/indeterminate.md')
  },
  {
    path: 'checkbox/text',
    meta: { title: '表单组件-Checkbox 复选框-全选与半选', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/text.md')
  },
  {
    path: 'checkbox/content-overflow',
    meta: { title: '表单组件-Checkbox 复选框-内容超出时的提示信息', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/content-overflow.md')
  },
  {
    path: 'checkbox/dynamic-create-checkbox',
    meta: { title: '表单组件-Checkbox 复选框-动态生成复选框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/dynamic-create-checkbox.md')
  },
  {
    path: 'checkbox/checkbox-slot',
    meta: { title: '表单组件-Checkbox 复选框-插槽', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/checkbox-slot.md')
  },
  {
    path: 'checkbox/checkbox-group',
    meta: { title: '表单组件-Checkbox 复选框-复选框组', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/checkbox-group.md')
  },
  {
    path: 'checkbox/checkbox-button',
    meta: { title: '表单组件-Checkbox 复选框-按钮形式复选框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/checkbox-button.md')
  },
  {
    path: 'checkbox/vertical-checkbox',
    meta: { title: '表单组件-Checkbox 复选框-垂直布局', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/vertical-checkbox.md')
  },
  {
    path: 'checkbox/min-max',
    meta: { title: '表单组件-Checkbox 复选框-可选数量限制', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/min-max.md')
  },
  {
    path: 'checkbox/checkbox-events',
    meta: { title: '表单组件-Checkbox 复选框-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-checkbox' */ './docs/zh-CN/checkbox/checkbox-events.md')
  },
  {
    path: 'slider',
    meta: { title: '表单组件-Slider 滑块', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slider' */ './docs/zh-CN/slider/basic-usage.md')
  },
  {
    path: 'slider/vertical-mode',
    meta: { title: '表单组件-Slider 滑块-竖向模式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slider' */ './docs/zh-CN/slider/vertical-mode.md')
  },
  {
    path: 'slider/max-min',
    meta: { title: '表单组件-Slider 滑块-最大最小值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slider' */ './docs/zh-CN/slider/max-min.md')
  },
  {
    path: 'slider/range-select',
    meta: { title: '表单组件-Slider 滑块-范围选择', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slider' */ './docs/zh-CN/slider/range-select.md')
  },
  {
    path: 'slider/show-input',
    meta: { title: '表单组件-Slider 滑块-输入框模式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slider' */ './docs/zh-CN/slider/show-input.md')
  },
  {
    path: 'slider/shortcut-operation',
    meta: { title: '表单组件-Slider 滑块-快捷键操作', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slider' */ './docs/zh-CN/slider/shortcut-operation.md')
  },
  {
    path: 'slider/dynamic-disable',
    meta: { title: '表单组件-Slider 滑块-禁用', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slider' */ './docs/zh-CN/slider/dynamic-disable.md')
  },
  {
    path: 'slider/show-tip',
    meta: { title: '表单组件-Slider 滑块-提示', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slider' */ './docs/zh-CN/slider/show-tip.md')
  },
  {
    path: 'slider/about-step',
    meta: { title: '表单组件-Slider 滑块-步长', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slider' */ './docs/zh-CN/slider/about-step.md')
  },
  {
    path: 'slider/slider-events',
    meta: { title: '表单组件-Slider 滑块-事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slider' */ './docs/zh-CN/slider/slider-events.md')
  },
  {
    path: 'slider/slider-slot',
    meta: { title: '表单组件-Slider 滑块-自定义插槽', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-slider' */ './docs/zh-CN/slider/slider-slot.md')
  },
  {
    path: 'switch',
    meta: { title: '表单组件-Switch 开关', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-switch' */ './docs/zh-CN/switch/basic-usage.md')
  },
  {
    path: 'switch/mini-mode',
    meta: { title: '表单组件-Switch 开关-mini 模式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-switch' */ './docs/zh-CN/switch/mini-mode.md')
  },
  {
    path: 'switch/custom-open-close',
    meta: { title: '表单组件-Switch 开关-自定义开关的显示', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-switch' */ './docs/zh-CN/switch/custom-open-close.md')
  },
  {
    path: 'switch/custom-true-false-value',
    meta: { title: '表单组件-Switch 开关-自定义开关的取值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-switch' */ './docs/zh-CN/switch/custom-true-false-value.md')
  },
  {
    path: 'switch/dynamic-disable',
    meta: { title: '表单组件-Switch 开关-禁用', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-switch' */ './docs/zh-CN/switch/dynamic-disable.md')
  },
  {
    path: 'switch/enent',
    meta: { title: '表单组件-Switch 开关-自定义开关的取值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-switch' */ './docs/zh-CN/switch/enent.md')
  },
  {
    path: 'switch/before-change',
    meta: { title: '表单组件-Switch 开关-开关切换前的回调', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-switch' */ './docs/zh-CN/switch/before-change.md')
  },
  {
    path: 'time-select',
    meta: { title: '表单组件-time-select 时间选择', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/basic-usage.md')
  },
  {
    path: 'time-select/range-placeholder',
    meta: { title: '表单组件-time-select-range-placeholder 占位符范围', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/range-placeholder.md')
  },
  {
    path: 'time-select/suffix-icon',
    meta: { title: '表单组件-time-select-suffix-icon 后置图标', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/suffix-icon.md')
  },
  {
    path: 'time-select/picker-options',
    meta: { title: '表单组件-time-select-picker-options 指定时间范围', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/picker-options.md')
  },
  {
    path: 'time-select/clear-icon',
    meta: { title: '表单组件-time-select-clear-icon 清除按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/clear-icon.md')
  },
  {
    path: 'time-select/default-value',
    meta: { title: '表单组件-time-select-default-value 默认值', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/default-value.md')
  },
  {
    path: 'time-select/event',
    meta: { title: '表单组件-time-select-event 事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/event.md')
  },
  {
    path: 'time-select/editable',
    meta: { title: '表单组件-time-select-editable 不可编辑', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/editable.md')
  },
  {
    path: 'time-select/disabled',
    meta: { title: '表单组件-time-select-disabled 禁用', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/disabled.md')
  },
  {
    path: 'time-select/popper-class',
    meta: { title: '表单组件-time-select-popper-class 自定义类名', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/popper-class.md')
  },
  {
    path: 'time-select/size',
    meta: { title: '表单组件-time-select-size 尺寸', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/size.md')
  },
  {
    path: 'time-select/focus',
    meta: { title: '表单组件-time-select-focus 手动获取焦点', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-time-select' */ './docs/zh-CN/time-select/focus.md')
  },
  {
    path: 'transfer/panel-slot',
    meta: { title: '表单组件-Transfer 自定义面板内容', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/panel-slot.md')
  },
  {
    path: 'transfer',
    meta: { title: '表单组件-Transfer 穿梭框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/basic-usage.md')
  },
  {
    path: 'transfer/data-source',
    meta: { title: '表单组件-Transfer 穿梭框-数据源', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/data-source.md')
  },
  {
    path: 'transfer/show-all-btn',
    meta: { title: '表单组件-Transfer 穿梭框-展示全部移动按钮', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/show-all-btn.md')
  },
  {
    path: 'transfer/custom-transfer-titles',
    meta: { title: '表单组件-Transfer 穿梭框-自定义列表标题', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/custom-transfer-titles.md')
  },
  {
    path: 'transfer/custom-button-texts',
    meta: { title: '表单组件-Transfer 穿梭框-自定义按钮文案', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/custom-button-texts.md')
  },
  {
    path: 'transfer/filter-placeholder',
    meta: { title: '表单组件-Transfer 穿梭框-搜索框占位符', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/filter-placeholder.md')
  },
  {
    path: 'transfer/custom-filter-method',
    meta: { title: '表单组件-Transfer 穿梭框-自定义搜索方法', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/custom-filter-method.md')
  },
  {
    path: 'transfer/default-checked',
    meta: { title: '表单组件-Transfer 穿梭框-默认勾选项', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/default-checked.md')
  },
  {
    path: 'transfer/custom-render-content',
    meta: { title: '表单组件-Transfer 穿梭框-自定义数据项渲染', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/custom-render-content.md')
  },
  {
    path: 'transfer/checked-format-text',
    meta: { title: '表单组件-Transfer 穿梭框-列表顶部勾选状态文案', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/checked-format-text.md')
  },
  {
    path: 'transfer/filterable',
    meta: { title: '表单组件-Transfer 穿梭框-可搜索', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/filterable.md')
  },
  {
    path: 'transfer/props-of-data-source',
    meta: { title: '表单组件-Transfer 穿梭框-数据源的字段别名', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/props-of-data-source.md')
  },
  {
    path: 'transfer/target-order',
    meta: { title: '表单组件-Transfer 穿梭框-右侧排序策略', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/target-order.md')
  },
  {
    path: 'transfer/drop-config',
    meta: { title: '表单组件-Transfer 穿梭框-左右拖拽', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/drop-config.md')
  },
  {
    path: 'transfer/transfer-events',
    meta: { title: '表单组件-Transfer 穿梭框-穿梭框事件', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/transfer-events.md')
  },
  {
    path: 'transfer/manual-clear-query',
    meta: { title: '表单组件-Transfer 穿梭框-手动清空搜索框', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/manual-clear-query.md')
  },
  {
    path: 'transfer/custom-footer',
    meta: { title: '表单组件-Transfer 穿梭框-自定义列表底部', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/custom-footer.md')
  },
  {
    path: 'transfer/nested-table',
    meta: { title: '表单组件-Transfer 穿梭框-嵌套表格', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/nested-table.md')
  },
  {
    path: 'transfer/nested-tree',
    meta: { title: '表单组件-Transfer 穿梭框-嵌套树', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/nested-tree.md')
  },
  {
    path: 'transfer/before-transfer',
    meta: { title: '表单组件-Transfer 穿梭框-穿梭前的回调', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-transfer' */ './docs/zh-CN/transfer/before-transfer.md')
  },
  {
    path: 'grid',
    meta: { title: '表格组件-导入导出', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/grid-basic-usage.md')
  },
  {
    path: 'grid/serial-column/default-serial-column',
    meta: { title: '表格组件-序号列-默认序号列', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/serial-column/default-serial-column.md')
  },
  {
    path: 'grid/serial-column/custom-serial-column',
    meta: { title: '表格组件-序号列-自定义序号列', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/serial-column/custom-serial-column.md')
  },
  {
    path: 'grid/operation-column/radio-operation-column',
    meta: { title: '表格组件-操作列-单选', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/operation-column/radio-operation-column.md')
  },
  {
    path: 'grid/operation-column/checkbox-operation-column',
    meta: { title: '表格组件-操作列-多选', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/operation-column/checkbox-operation-column.md')
  },
  {
    path: 'grid/operation-column/column-key',
    meta: { title: '表格组件-操作列-列key属性', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/operation-column/column-key.md')
  },
  {
    path: 'grid/operation-column/custom-operation-column',
    meta: { title: '表格组件-操作列-自定义操作列', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/operation-column/custom-operation-column.md')
  },
  {
    path: 'grid/empty-data-tip',
    meta: { title: '表格组件-空数据', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/empty-data-tip.md')
  },
  {
    path: 'grid/data-source/static-data',
    meta: { title: '表格组件-数据源-静态数据', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/data-source/static-data.md')
  },
  {
    path: 'grid/data-source/request-service',
    meta: { title: '表格组件-数据源-请求服务', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/data-source/request-service.md')
  },
  {
    path: 'grid/data-source/auto-load',
    meta: { title: '表格组件-数据源-自动加载数据', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/data-source/auto-load.md')
  },
  {
    path: 'grid/data-source/columns',
    meta: { title: '表格组件-数据源-列数据配置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/data-source/columns.md')
  },
  {
    path: 'grid/data-source/column-asyn-rendering',
    meta: { title: '表格组件-数据源-列异步渲染', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/data-source/column-asyn-rendering.md')
  },
  {
    path: 'grid/large-data/scroll-paging',
    meta: { title: '表格组件-大数据-滚动分页', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/large-data/scroll-paging.md')
  },
  {
    path: 'grid/large-data/virtual-rolling',
    meta: { title: '表格组件-大数据-虚拟滚动', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/large-data/virtual-rolling.md')
  },
  {
    path: 'grid/large-data/full-data-loading',
    meta: { title: '表格组件-大数据-全量加载', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/large-data/full-data-loading.md')
  },
  {
    path: 'grid/large-data/load-column',
    meta: { title: '表格组件-大数据-生成 1000 列', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/large-data/load-column.md')
  },
  {
    path: 'grid/large-data/scroll-to',
    meta: { title: '表格组件-大数据-滚动到指定位置', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/large-data/scroll-to.md')
  },
  {
    path: 'grid/pager/inner-pager',
    meta: { title: '表格组件-分页-内置分页', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/pager/inner-pager.md')
  },
  {
    path: 'grid/pager/custom-pager',
    meta: { title: '表格组件-分页-自定义分页', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/pager/custom-pager.md')
  },
  {
    path: 'grid/edit/row-editing',
    meta: { title: '表格组件-编辑-行编辑', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/edit/row-editing.md')
  },
  {
    path: 'grid/edit/cell-editing',
    meta: { title: '表格组件-编辑-单元格编辑', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/edit/cell-editing.md')
  },
  {
    path: 'grid/edit/format-value',
    meta: { title: '表格组件-编辑-格式化单元格编辑器', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/edit/format-value.md')
  },
  {
    path: 'grid/edit/custom-editing',
    meta: { title: '表格组件-编辑-自定义编辑', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/edit/custom-editing.md')
  },
  {
    path: 'grid/edit/status-of-editing',
    meta: { title: '表格组件-编辑-编辑状态', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/edit/status-of-editing.md')
  },
  {
    path: 'grid/edit/trigger-mode-for-editing',
    meta: { title: '表格组件-编辑-触发方式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/edit/trigger-mode-for-editing.md')
  },
  {
    path: 'grid/toolbar/insert-delete-update',
    meta: { title: '表格组件-工具栏-增删改', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/toolbar/insert-delete-update.md')
  },
  {
    path: 'grid/toolbar/save-data',
    meta: { title: '表格组件-工具栏-服务端数据保存方法', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/toolbar/save-data.md')
  },
  {
    path: 'grid/toolbar/copy-row-data',
    meta: { title: '表格组件-工具栏-复制行', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/toolbar/copy-row-data.md')
  },
  {
    path: 'grid/toolbar/import-and-export',
    meta: { title: '表格组件-工具栏-导入导出', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/toolbar/import-and-export.md')
  },
  {
    path: 'grid/toolbar/refresh-grid',
    meta: { title: '表格组件-工具栏-刷新', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/toolbar/refresh-grid.md')
  },
  {
    path: 'grid/toolbar/grid-full-screen',
    meta: { title: '表格组件-工具栏-全屏', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/toolbar/grid-full-screen.md')
  },
  {
    path: 'grid/toolbar/custom-toolbar',
    meta: { title: '表格组件-工具栏-自定义工具栏', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/toolbar/custom-toolbar.md')
  },
  {
    path: 'grid/toolbar/toolbar-op-config',
    meta: { title: '表格组件-工具栏-配置式', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/toolbar/toolbar-op-config.md')
  },
  {
    path: 'grid/grid-loading-tip',
    meta: { title: '表格组件-加载中', lang: 'zh-CN', sign: 'component' },
    component: () => import(/* webpackChunkName: 'v3-grid' */ './docs/zh-CN/grid/grid-loading-tip.md')
  }
]

routers.push(...router1, ...router2)

export default routers
