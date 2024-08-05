import { addComponent, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@opentiny/nuxt',
    configKey: 'tiny-vue'
  },
  defaults: {
    prefix: '',
    components: true
  },
  hooks: {},
  setup(options) {
    addComponent({
      name: 'iconBoat',
      filePath: '@opentiny/vue-icon'
    })
    addComponent({
      name: 'iconWarningTriangle',
      filePath: '@opentiny/vue-icon'
    })
    addComponent({
      name: 'TinyButton',
      filePath: '@opentiny/vue-button'
    })
    addComponent({
      name: 'TinyRow',
      filePath: '@opentiny/vue-row'
    })
    addComponent({
      name: 'TinyLayout',
      filePath: '@opentiny/vue-layout'
    })
    addComponent({
      name: 'TinyButtonGroup',
      filePath: '@opentiny/vue-button-group'
    })
    addComponent({
      name: 'TinyCol',
      filePath: '@opentiny/vue-col'
    })
    addComponent({
      name: 'TinyContainer',
      filePath: '@opentiny/vue-container'
    })
    addComponent({
      name: 'TinyRadio',
      filePath: '@opentiny/vue-radio'
    })
    addComponent({
      name: 'TinyRadioButton',
      filePath: '@opentiny/vue-radio-button'
    })
    addComponent({
      name: 'TinyRadioGroup',
      filePath: '@opentiny/vue-radio-group'
    })
    addComponent({
      name: 'TinyLink',
      filePath: '@opentiny/vue-link'
    })
    addComponent({
      name: 'TinyDivider',
      filePath: '@opentiny/vue-divider'
    })
    addComponent({
      name: 'TinyActionMenu',
      filePath: '@opentiny/vue-action-menu'
    })
    addComponent({
      name: 'TinyAnchor',
      filePath: '@opentiny/vue-anchor'
    })
    addComponent({
      name: 'TinyBreadcrumb',
      filePath: '@opentiny/vue-breadcrumb'
    })
    addComponent({
      name: 'TinyBreadcrumbItem',
      filePath: '@opentiny/vue-breadcrumb-item'
    })
    addComponent({
      name: 'Notify',
      filePath: '@opentiny/vue-notify'
    })
    addComponent({
      name: 'TinyDropdown',
      filePath: '@opentiny/vue-dropdown'
    })
    addComponent({
      name: 'TinyDropdownItem',
      filePath: '@opentiny/vue-dropdown-item'
    })
    addComponent({
      name: 'TinyDropdownMenu',
      filePath: '@opentiny/vue-dropdown-menu'
    })
    addComponent({
      name: 'TinyFallMenu',
      filePath: '@opentiny/vue-fall-menu'
    })
    addComponent({
      name: 'TinyLinkMenu',
      filePath: '@opentiny/vue-link-menu'
    })
    addComponent({
      name: 'TinyNavMenu',
      filePath: '@opentiny/vue-nav-menu'
    })
    addComponent({
      name: 'TinyPager',
      filePath: '@opentiny/vue-pager'
    })
    addComponent({
      name: 'TinyPagerItem',
      filePath: '@opentiny/vue-pager-item'
    })
    addComponent({
      name: 'TinySteps',
      filePath: '@opentiny/vue-steps'
    })
    addComponent({
      name: 'TinyTabs',
      filePath: '@opentiny/vue-tabs'
    })
    addComponent({
      name: 'TinyTabItem',
      filePath: '@opentiny/vue-tab-item'
    })
    addComponent({
      name: 'TinyToggleMenu',
      filePath: '@opentiny/vue-toggle-menu'
    })
    addComponent({
      name: 'TinyTreeMenu',
      filePath: '@opentiny/vue-tree-menu'
    })
    addComponent({
      name: 'TinyAutocomplete',
      filePath: '@opentiny/vue-autocomplete'
    })
    addComponent({
      name: 'TinyCascader',
      filePath: '@opentiny/vue-cascader'
    })
    addComponent({
      name: 'TinyCascaderPanel',
      filePath: '@opentiny/vue-cascader-panel'
    })
    addComponent({
      name: 'TinyCheckbox',
      filePath: '@opentiny/vue-checkbox'
    })
    addComponent({
      name: 'TinyCheckboxButton',
      filePath: '@opentiny/vue-checkbox-button'
    })
    addComponent({
      name: 'TinyCheckboxGroup',
      filePath: '@opentiny/vue-checkbox-group'
    })
    addComponent({
      name: 'TinyTooltip',
      filePath: '@opentiny/vue-tooltip'
    })
    addComponent({
      name: 'TinyColorPicker',
      filePath: '@opentiny/vue-color-picker'
    })
    addComponent({
      name: 'TinyColorSelectPanel',
      filePath: '@opentiny/vue-color-select-panel'
    })
    addComponent({
      name: 'TinyDatePicker',
      filePath: '@opentiny/vue-date-picker'
    })
    addComponent({
      name: 'TinyDropTimes',
      filePath: '@opentiny/vue-drop-times'
    })
    addComponent({
      name: 'TinyFileUpload',
      filePath: '@opentiny/vue-file-upload'
    })
    addComponent({
      name: 'TinyForm',
      filePath: '@opentiny/vue-form'
    })
    addComponent({
      name: 'TinyFormItem',
      filePath: '@opentiny/vue-form-item'
    })
    addComponent({
      name: 'TinyInput',
      filePath: '@opentiny/vue-input'
    })
    addComponent({
      name: 'TinyNumeric',
      filePath: '@opentiny/vue-numeric'
    })
    addComponent({
      name: 'TinyIpAddress',
      filePath: '@opentiny/vue-ip-address'
    })
    addComponent({
      name: 'TinyPopeditor',
      filePath: '@opentiny/vue-popeditor'
    })
    addComponent({
      name: 'TinySelect',
      filePath: '@opentiny/vue-select'
    })
    addComponent({
      name: 'TinyPopUpload',
      filePath: '@opentiny/vue-pop-upload'
    })
    addComponent({
      name: 'TinyRate',
      filePath: '@opentiny/vue-rate'
    })
    addComponent({
      name: 'TinyRichTextEditor',
      filePath: '@opentiny/vue-rich-text-editor'
    })
    addComponent({
      name: 'TinySearch',
      filePath: '@opentiny/vue-search'
    })
    addComponent({
      name: 'TinyOption',
      filePath: '@opentiny/vue-option'
    })
    addComponent({
      name: 'TinyOptionGroup',
      filePath: '@opentiny/vue-option-group'
    })
    addComponent({
      name: 'TinyTag',
      filePath: '@opentiny/vue-tag'
    })
    addComponent({
      name: 'TinyTagGroup',
      filePath: '@opentiny/vue-tag-group'
    })
    addComponent({
      name: 'TinySlider',
      filePath: '@opentiny/vue-slider'
    })
    addComponent({
      name: 'TinySwitch',
      filePath: '@opentiny/vue-switch'
    })
    addComponent({
      name: 'TinyTimePicker',
      filePath: '@opentiny/vue-time-picker'
    })
    addComponent({
      name: 'TinyTimeSelect',
      filePath: '@opentiny/vue-time-select'
    })
    addComponent({
      name: 'TinyTransfer',
      filePath: '@opentiny/vue-transfer'
    })
    addComponent({
      name: 'TinyTransferPanel',
      filePath: '@opentiny/vue-transfer-panel'
    })
    addComponent({
      name: 'TinyGrid',
      filePath: '@opentiny/vue-grid'
    })
    addComponent({
      name: 'TinyGridColumn',
      filePath: '@opentiny/vue-grid-column'
    })
    addComponent({
      name: 'TinyGridManager',
      filePath: '@opentiny/vue-grid-manager'
    })
    addComponent({
      name: 'TinyGridToolbar',
      filePath: '@opentiny/vue-grid-toolbar'
    })
    addComponent({
      name: 'TinyPopover',
      filePath: '@opentiny/vue-popover'
    })
    addComponent({
      name: 'TinyModal',
      filePath: '@opentiny/vue-modal'
    })
    addComponent({
      name: 'TinyBadge',
      filePath: '@opentiny/vue-badge'
    })
    addComponent({
      name: 'TinyCalendar',
      filePath: '@opentiny/vue-calendar'
    })
    addComponent({
      name: 'TinyCalendarBar',
      filePath: '@opentiny/vue-calendar-bar'
    })
    addComponent({
      name: 'TinyCalendarView',
      filePath: '@opentiny/vue-calendar-view'
    })
    addComponent({
      name: 'TinyCard',
      filePath: '@opentiny/vue-card'
    })
    addComponent({
      name: 'TinyCardGroup',
      filePath: '@opentiny/vue-card-group'
    })
    addComponent({
      name: 'TinyCarousel',
      filePath: '@opentiny/vue-carousel'
    })
    addComponent({
      name: 'TinyCarouselItem',
      filePath: '@opentiny/vue-carousel-item'
    })
    addComponent({
      name: 'TinyDialogBox',
      filePath: '@opentiny/vue-dialog-box'
    })
    addComponent({
      name: 'TinyCollapse',
      filePath: '@opentiny/vue-collapse'
    })
    addComponent({
      name: 'TinyCollapseItem',
      filePath: '@opentiny/vue-collapse-item'
    })
    addComponent({
      name: 'TinyCollapseTransition',
      filePath: '@opentiny/vue-collapse-transition'
    })
    addComponent({
      name: 'TinyFlowchart',
      filePath: '@opentiny/vue-flowchart'
    })
    addComponent({
      name: 'TinyGuide',
      filePath: '@opentiny/vue-guide'
    })
    addComponent({
      name: 'TinyAlert',
      filePath: '@opentiny/vue-alert'
    })
    addComponent({
      name: 'TinyImage',
      filePath: '@opentiny/vue-image'
    })
    addComponent({
      name: 'TinyImageViewer',
      filePath: '@opentiny/vue-image-viewer'
    })
    addComponent({
      name: 'TinyMilestone',
      filePath: '@opentiny/vue-milestone'
    })
    addComponent({
      name: 'TinyMindMap',
      filePath: '@opentiny/vue-mind-map'
    })
    addComponent({
      name: 'TinyQrCode',
      filePath: '@opentiny/vue-qr-code'
    })
    addComponent({
      name: 'TinyStatistic',
      filePath: '@opentiny/vue-statistic'
    })
    addComponent({
      name: 'TinyTimeLine',
      filePath: '@opentiny/vue-time-line'
    })
    addComponent({
      name: 'TinyTimelineItem',
      filePath: '@opentiny/vue-timeline-item'
    })
    addComponent({
      name: 'TinyTree',
      filePath: '@opentiny/vue-tree'
    })
    addComponent({
      name: 'TinyUserHead',
      filePath: '@opentiny/vue-user-head'
    })
    addComponent({
      name: 'TinyUserHeadGroup',
      filePath: '@opentiny/vue-user-head-group'
    })
    addComponent({
      name: 'TinyWizard',
      filePath: '@opentiny/vue-wizard'
    })
    addComponent({
      name: 'TinyDrawer',
      filePath: '@opentiny/vue-drawer'
    })
    addComponent({
      name: 'Loading',
      filePath: '@opentiny/vue-loading'
    })
    addComponent({
      name: 'TinyPopconfirm',
      filePath: '@opentiny/vue-popconfirm'
    })
    addComponent({
      name: 'TinyProgress',
      filePath: '@opentiny/vue-progress'
    })
    addComponent({
      name: 'TinySkeleton',
      filePath: '@opentiny/vue-skeleton'
    })
    addComponent({
      name: 'TinySkeletonItem',
      filePath: '@opentiny/vue-skeleton-item'
    })
    addComponent({
      name: 'TinyNotify',
      filePath: '@opentiny/vue-notify'
    })
    addComponent({
      name: 'TinyAutonaviMap',
      filePath: '@opentiny/vue-autonavi-map'
    })
    addComponent({
      name: 'TinyChartBar',
      filePath: '@opentiny/vue-chart-bar'
    })
    addComponent({
      name: 'TinyChart',
      filePath: '@opentiny/vue-chart'
    })
    addComponent({
      name: 'TinyBaiduMap',
      filePath: '@opentiny/vue-baidu-map'
    })
    addComponent({
      name: 'TinyChartBoxplot',
      filePath: '@opentiny/vue-chart-boxplot'
    })
    addComponent({
      name: 'TinyChartCandle',
      filePath: '@opentiny/vue-chart-candle'
    })
    addComponent({
      name: 'TinyChartCore',
      filePath: '@opentiny/vue-chart-core'
    })
    addComponent({
      name: 'TinyChartFunnel',
      filePath: '@opentiny/vue-chart-funnel'
    })
    addComponent({
      name: 'TinyChartGauge',
      filePath: '@opentiny/vue-chart-gauge'
    })
    addComponent({
      name: 'TinyChartHeatmap',
      filePath: '@opentiny/vue-chart-heatmap'
    })
    addComponent({
      name: 'TinyChartHistogram',
      filePath: '@opentiny/vue-chart-histogram'
    })
    addComponent({
      name: 'TinyChartLine',
      filePath: '@opentiny/vue-chart-line'
    })
    addComponent({
      name: 'TinyChartLiquidfill',
      filePath: '@opentiny/vue-chart-liquidfill'
    })
    addComponent({
      name: 'TinyChartMap',
      filePath: '@opentiny/vue-chart-map'
    })
    addComponent({
      name: 'TinyChartPie',
      filePath: '@opentiny/vue-chart-pie'
    })
    addComponent({
      name: 'TinyChartProcess',
      filePath: '@opentiny/vue-chart-process'
    })
    addComponent({
      name: 'TinyChartRadar',
      filePath: '@opentiny/vue-chart-radar'
    })
    addComponent({
      name: 'TinyChartRing',
      filePath: '@opentiny/vue-chart-ring'
    })
    addComponent({
      name: 'TinyChartSankey',
      filePath: '@opentiny/vue-chart-sankey'
    })
    addComponent({
      name: 'TinyChartScatter',
      filePath: '@opentiny/vue-chart-scatter'
    })
    addComponent({
      name: 'TinyChartSunburst',
      filePath: '@opentiny/vue-chart-sunburst'
    })
    addComponent({
      name: 'TinyChartTree',
      filePath: '@opentiny/vue-chart-tree'
    })
    addComponent({
      name: 'TinyChartWaterfall',
      filePath: '@opentiny/vue-chart-waterfall'
    })
    addComponent({
      name: 'TinyChartWordcloud',
      filePath: '@opentiny/vue-chart-wordcloud'
    })
    addComponent({
      name: 'TinyChartGraph',
      filePath: '@opentiny/vue-chart-graph'
    })
    addComponent({
      name: 'TinyBulletinBoard',
      filePath: '@opentiny/vue-bulletin-board'
    })
    addComponent({
      name: 'TinyConfigProvider',
      filePath: '@opentiny/vue-config-provider'
    })
    addComponent({
      name: 'TinyCrop',
      filePath: '@opentiny/vue-crop'
    })
    addComponent({
      name: 'TinyDialogSelect',
      filePath: '@opentiny/vue-dialog-select'
    })
    addComponent({
      name: 'TinyFilter',
      filePath: '@opentiny/vue-filter'
    })
    addComponent({
      name: 'TinyFilterBar',
      filePath: '@opentiny/vue-filter-bar'
    })
    addComponent({
      name: 'TinyFilterBox',
      filePath: '@opentiny/vue-filter-box'
    })
    addComponent({
      name: 'TinyFilterPanel',
      filePath: '@opentiny/vue-filter-panel'
    })
    addComponent({
      name: 'TinyFloatbar',
      filePath: '@opentiny/vue-floatbar'
    })
    addComponent({
      name: 'TinyFullscreen',
      filePath: '@opentiny/vue-fullscreen'
    })
    addComponent({
      name: 'TinyScrollText',
      filePath: '@opentiny/vue-scroll-text'
    })
    addComponent({
      name: 'TinySplit',
      filePath: '@opentiny/vue-split'
    })
    addComponent({
      name: 'TinyTextPopup',
      filePath: '@opentiny/vue-text-popup'
    })
    addComponent({
      name: 'TinyUserContact',
      filePath: '@opentiny/vue-text-popup'
    })
    addComponent({
      name: 'TinyWatermark',
      filePath: '@opentiny/vue-watermark'
    })
  }
})
