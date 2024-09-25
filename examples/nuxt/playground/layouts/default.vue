<template>
  <div class="container">
    <div class="treeMenu">
      <tiny-tree-menu :data="treeData" default-expand-all></tiny-tree-menu>
    </div>
    <div class="index">
      <NuxtPage class="page"></NuxtPage>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TreeMenu as TinyTreeMenu } from '@opentiny/vue'

const treeData = ref([
  {
    id: 100,
    label: '基础',
    children: [
      { id: 101, label: 'Button 按钮', url: '/Button' },
      { id: 102, label: 'ButtonGroup 按钮组', url: 'ButtonGroup' },
      { id: 103, label: 'Color 色彩', url: 'Color' },
      { id: 104, label: 'Container 容器布局', url: 'Container' },
      { id: 105, label: 'Font 字体', url: 'Font' },
      { id: 106, label: 'Icon 图标', url: 'Icon' },
      { id: 107, label: 'Layout 栅格布局', url: 'Layout' },
      { id: 108, label: 'Link 链接', url: 'Link' },
      { id: 109, label: 'Divider 分割线', url: 'Divider' }
    ]
  },
  {
    id: 200,
    label: '导航',
    children: [
      { id: 201, label: 'ActionMenu 动作菜单', url: 'ActionMenu' },
      { id: 202, label: 'Anchor 锚点', url: 'Anchor' },
      { id: 203, label: 'Breadcrumb 面包屑', url: 'Breadcrumb' },
      { id: 204, label: 'Dropdown 下拉菜单', url: 'Dropdown' },
      { id: 205, label: 'FallMenu 瀑布菜单', url: 'FallMenu' },
      { id: 206, label: 'LinkMenu 收藏夹菜单', url: 'LinkMenu' },
      { id: 207, label: 'NavMenu 导航菜单', url: 'NavMenu' },
      { id: 208, label: 'Pager 分页', url: 'Pager' },
      { id: 209, label: 'Steps 步骤条', url: 'Steps' },
      { id: 210, label: 'ToggleMenu 收缩菜单', url: 'ToggleMenu' },
      { id: 211, label: 'TreeMenu 树形菜单', url: 'TreeMenu' }
    ]
  },
  {
    id: 300,
    label: '表单',
    children: [
      { id: 301, label: 'AutoComplete 自动完成', url: 'AutoComplete' },
      { id: 302, label: 'Cascader 级联选择器', url: 'Cascader' },
      { id: 303, label: 'CascaderPanel 级联面板', url: 'CascaderPanel' },
      { id: 304, label: 'Checkbox 多选框', url: 'Checkbox' },
      { id: 305, label: 'ColorPicker 颜色选择器', url: 'ColorPicker' },
      { id: 306, label: 'ColorSelectPanel 颜色选择面板', url: 'ColorSelectPanel' },
      { id: 307, label: 'DatePicker 日期选择器', url: 'DatePicker' },
      { id: 308, label: 'DropTimes 下拉时间', url: 'DropTimes' },
      { id: 309, label: 'FileUpload 文件上传', url: 'FileUpload' },
      { id: 310, label: 'Form 表单', url: 'Form' },
      { id: 311, label: 'Input 输入框', url: 'Input' },
      { id: 312, label: 'IpAddress 树形菜单', url: 'IpAddress' },
      { id: 313, label: 'Numeric 数字输入框', url: 'Numeric' },
      { id: 314, label: 'PopEditor 弹出编辑', url: 'PopEditor' },
      { id: 315, label: 'PopUpload 弹出上传', url: 'PopUpload' },
      { id: 316, label: 'Radio 单选框', url: 'Radio' },
      { id: 317, label: 'Rate 评分', url: 'Rate' },
      { id: 318, label: 'Search 搜索', url: 'Search' },
      { id: 319, label: 'Select 选择器', url: 'Select' },
      { id: 320, label: 'Slider 滑块', url: 'Slider' },
      { id: 321, label: 'Switch 开关', url: 'Switch' },
      { id: 322, label: 'TimePicker 时间选择器', url: 'TimePicker' },
      { id: 323, label: 'TimeSelect 时间选择', url: 'TimeSelect' },
      { id: 324, label: 'Transfer 穿梭框', url: 'Transfer' }
    ]
  },
  {
    id: 400,
    label: '表格',
    children: [
      { id: 401, label: '基本用法', url: 'GridBase' },
      { id: 402, label: '序号列', url: 'GridSerialColumn' },
      { id: 403, label: '操作列', url: 'GridOperationColumn' },
      { id: 404, label: '空数据', url: 'GridEmpty' },
      { id: 405, label: '数据源', url: 'GridDataSource' },
      { id: 406, label: '大数据', url: 'GridLargeData' },
      { id: 407, label: '分页', url: 'GridPager' },
      { id: 408, label: '编辑', url: 'GridEdit' },
      { id: 409, label: '工具栏', url: 'GridToolbar' },
      { id: 410, label: '加载中', url: 'GridLoading' },
      { id: 411, label: '宽高尺寸', url: 'GridSize' },
      { id: 412, label: '外观设置', url: 'GridAppearanceSettings' },
      { id: 413, label: '高亮', url: 'GridHighlight' },
      { id: 414, label: '提示', url: 'GridTip' },
      { id: 415, label: '对齐方式', url: 'GridAlign' },
      { id: 416, label: '表头', url: 'GridHeader' },
      { id: 417, label: '表尾', url: 'GridFooter' },
      { id: 418, label: '自定义样式', url: 'GridCustomStyle' },
      { id: 419, label: '排序', url: 'GridSort' },
      { id: 420, label: '筛选', url: 'GridFilter' },
      { id: 421, label: '冻结', url: 'GridFixed' },
      { id: 422, label: '合并', url: 'GridSpan' },
      { id: 423, label: '拖拽', url: 'GridDrag' },
      { id: 424, label: '右键菜单', url: 'GridContextMenu' },
      { id: 425, label: '编辑器', url: 'GridEditor' },
      { id: 426, label: '表格校验', url: 'GridValidation' },
      { id: 427, label: '事件', url: 'GridEvent' },
      { id: 428, label: '插槽', url: 'GridSlot' },
      { id: 429, label: '个性化', url: 'GridCustom' },
      { id: 430, label: '树表', url: 'GridTreeTable' },
      { id: 431, label: '展开行', url: 'GridExpand' },
      { id: 432, label: '导入导出', url: 'GridIO' },
      { id: 433, label: '鼠标和键盘配置', url: 'GridMouseKeyboard' }
    ]
  },
  {
    id: 500,
    label: '数据展示',
    children: [
      { id: 501, label: 'Badge 标记', url: 'Badge' },
      { id: 502, label: 'Calendar 日历', url: 'Calendar' },
      { id: 503, label: 'CalendarView 日历视图', url: 'CalendarView' },
      { id: 504, label: 'Carousel 走马灯', url: 'Carousel' },
      { id: 505, label: 'Collapse 折叠面板', url: 'Collapse' },
      { id: 506, label: 'FlowChart 流程图', url: 'FlowChart' },
      { id: 507, label: 'Guide 引导', url: 'Guide' },
      { id: 508, label: 'Image 图片', url: 'Image' },
      { id: 509, label: 'InfiniteScroll 无限滚动', url: 'InfiniteScroll' },
      { id: 510, label: 'Milestone 里程碑', url: 'Milestone' },
      { id: 511, label: 'QrCode 二维码', url: 'QrCode' },
      { id: 512, label: 'Statistic 统计数值', url: 'Statistic' },
      { id: 513, label: 'Tag 标签', url: 'Tag' },
      { id: 514, label: 'TagGroup 标签组', url: 'TagGroup' },
      { id: 515, label: 'Timeline 时间线', url: 'Timeline' },
      { id: 516, label: 'Tree 树形控件', url: 'Tree' },
      { id: 517, label: 'Wizard 流程图', url: 'Wizard' }
    ]
  },
  {
    id: 600,
    label: '反馈',
    children: [
      { id: 601, label: 'Alert 警告', url: 'Alert' },
      { id: 602, label: 'DialogBox 对话框', url: 'DialogBox' },
      { id: 603, label: 'Drawer 抽屉', url: 'Drawer' },
      { id: 604, label: 'Loading 加载', url: 'Loading' },
      { id: 605, label: 'Modal 模态框', url: 'Modal' },
      { id: 606, label: 'Notify 通知', url: 'Notify' },
      { id: 607, label: 'PopConfirm 气泡确认框', url: 'PopConfirm' },
      { id: 608, label: 'Progress 进度条', url: 'Progress' },
      { id: 609, label: 'Popover 气泡卡片', url: 'Popover' },
      { id: 610, label: 'Skeleton 骨架屏', url: 'Skeleton' },
      { id: 611, label: 'Tooltip 文字提示', url: 'Tooltip' }
    ]
  },
  {
    id: 700,
    label: '图表',
    children: [
      { id: 701, label: 'LineChart 折线图', url: 'LineChart' },
      { id: 702, label: 'BarChart 对话框', url: 'BarChart' },
      { id: 703, label: 'PieChart 饼图', url: 'PieChart' },
      { id: 704, label: 'RingChart 环图', url: 'RingChart' },
      { id: 705, label: 'WaterfallChart 瀑布图', url: 'WaterfallChart' },
      { id: 706, label: 'RadarChart 雷达图', url: 'RadarChart' },
      { id: 707, label: 'TreeChart 树图', url: 'TreeChart' },
      { id: 708, label: 'ProcessChart 进度图', url: 'ProcessChart' }
    ]
  },
  {
    id: 800,
    label: '其他',
    children: [
      { id: 801, label: 'Crop 图片裁剪', url: 'Crop' },
      { id: 802, label: 'DialogSelect 弹窗选择', url: 'DialogSelect' },
      { id: 803, label: 'FilterPanel 过滤器面板', url: 'FilterPanel' },
      { id: 804, label: 'Fullscreen 全屏', url: 'Fullscreen' },
      { id: 805, label: 'ScrollText 文字滚动', url: 'ScrollText' },
      { id: 806, label: 'Split 面板分割', url: 'Split' },
      { id: 807, label: 'TextPopup 输入框', url: 'TextPopup' },
      { id: 808, label: 'Watermark 水印', url: 'Watermark' }
    ]
  },
  {
    id: 900,
    label: '自定义指令',
    children: [{ id: 901, label: 'AutoTip 超出隐藏', url: 'AutoTip' }]
  }
])
</script>

<style>
.container {
  display: flex;
  height: 100vh;
}
.treeMenu {
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
}
.index {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
}
.page {
  width: 80%;
  margin-left: 200px;
}
</style>
