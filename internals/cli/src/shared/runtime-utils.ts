/**
 * 打包运行时通用配置
 *
 * 全量运行时（组件分组）
 * 运行时版本号
 * 运行时外部依赖路径
 */
const fs = require('fs-extra')
const { getVersion, pathJoin, getComponentVersion } = require('./utils')
const moduleUtils = require('./module-utils')

const runtimeComponents = {
  core: [
    'Common',
    'Icon',
    'Locale',
    'Alert',
    'Col',
    'Container',
    'DialogBox',
    'Layout',
    'Loading',
    'Popover',
    'Row',
    'Tooltip',
    'Carousel',
    'CarouselItem',
    'Collapse',
    'CollapseItem',
    'Split',
    'TimeLine',
    'Milestone',
    'Floatbar',
    'Steps',
    'TabItem',
    'Tabs',
    'Breadcrumb',
    'BreadcrumbItem',
    'FallMenu',
    'NavMenu',
    'Rate',
    'Tag',
    'Notify',
    'Image',
    'ImageViewer',
    'ScrollText',
    'Scrollbar',
    'UserHead',
    'SlideBar',
    'Slider',
    'Link',
    'Progress',
    'Crop',
    'RichText'
  ],
  base: [
    'Autocomplete',
    'BulletinBoard',
    'Button',
    'ButtonGroup',
    'Calendar',
    'Cascader',
    'CascaderMenu',
    'CascaderNode',
    'CascaderPanel',
    'Checkbox',
    'CheckboxButton',
    'CheckboxGroup',
    'DatePanel',
    'DatePicker',
    'DateRange',
    'DateTable',
    'DetailPage',
    'DropTimes',
    'FileUpload',
    'Form',
    'FormItem',
    'Grid',
    'GridColumn',
    'GridManager',
    'GridToolbar',
    'Input',
    'IpAddress',
    'LinkMenu',
    'Modal',
    'MonthRange',
    'MonthTable',
    'Numeric',
    'Option',
    'OptionGroup',
    'Pager',
    'PagerItem',
    'Picker',
    'PopUpload',
    'Popeditor',
    'Radio',
    'RadioButton',
    'RadioGroup',
    'Search',
    'Select',
    'SelectDropdown',
    'Switch',
    'Table',
    'TextPopup',
    'Time',
    'TimePanel',
    'TimePicker',
    'TimeRange',
    'TimeSelect',
    'TimeSpinner',
    'ToggleMenu',
    'Transfer',
    'TransferPanel',
    'Tree',
    'TreeMenu',
    'Upload',
    'UploadDragger',
    'UploadList',
    'YearTable'
  ],
  business: [
    'Amount',
    'Area',
    'Company',
    'Country',
    'Dept',
    'Espace',
    'Hrapprover',
    'Locales',
    'LogonUser',
    'Logout',
    'Roles',
    'User',
    'UserAccount',
    'UserLink',
    'UserContact',
    'Wizard',
    'Currency',
    'DropRoles'
  ],
  chart: [
    'BaiduMap',
    'ChartBar',
    'ChartCandle',
    'ChartCore',
    'ChartFunnel',
    'ChartGauge',
    'ChartWaterfall',
    'ChartGraph',
    'ChartHeatmap',
    'ChartHistogram',
    'ChartLine',
    'ChartMap',
    'ChartPie',
    'ChartRadar',
    'ChartRing',
    'ChartSankey',
    'ChartScatter',
    'ChartSunburst',
    'ChartTree',
    'Chart',
    'ChartBoxplot'
  ],
  external: [
    'CardTemplate',
    'SvgIcon',
    'AutonaviMap',
    'ChartWordcloud',
    'ChartLiquidfill'
  ]
}

const echartsVersion = getVersion({ name: 'echarts' })
const echartsSource = 'lib/echarts.min.js' + echartsVersion
const dependencies = {
  vue: 'node_modules/vue/dist/vue.min.js',
  'vue-i18n': 'node_modules/vue-i18n/dist/vue-i18n.min.js',
  axios: 'node_modules/axios/dist/axios.min.js',
  'axios-mock-adapter': 'node_modules/axios-mock-adapter/dist/axios-mock-adapter.min.js',
  '@vue/composition-api': 'node_modules/@vue/composition-api/dist/vue-composition-api.prod.js',
  quill: 'node_modules/quill/dist/quill.min.js',
  echarts: 'node_modules/echarts/dist/echarts.min.js',
  cropperjs: 'node_modules/cropperjs/dist/cropper.min.js',
  vue3: 'example/node_modules/vue/dist/vue.global.prod.js',
  'vue3-i18n': 'example/node_modules/vue-i18n/dist/vue-i18n.global.js',
  systemjs: 'node_modules/@opentiny/systemjs/dist/system.min.js',
  'es6-promise': 'node_modules/es6-promise/dist/es6-promise.auto.min.js'
}

const runtimeDeps = {
  base: {
    vue: 'lib/vue.min.js' + getVersion({ name: 'vue' }),
    axios: 'lib/axios.min.js' + getVersion({ name: 'axios' }),
    'vue-i18n': 'lib/vue-i18n.min.js' + getVersion({ name: 'vue-i18n' })
  },
  opentiny: {},
  tiny3Lib: {
    '@vue/composition-api': 'lib/vue-composition-api.prod.js' + getVersion({ name: '@vue/composition-api' }),
    echarts: echartsSource,
    'echarts/lib/echarts': echartsSource,
    'echarts/lib/chart/bar': echartsSource,
    'echarts/lib/chart/boxplot': echartsSource,
    'echarts/lib/chart/candlestick': echartsSource,
    'echarts/lib/chart/chord': echartsSource,
    'echarts/lib/chart/custom': echartsSource,
    'echarts/lib/chart/effectScatter': echartsSource,
    'echarts/lib/chart/funnel': echartsSource,
    'echarts/lib/chart/gauge': echartsSource,
    'echarts/lib/chart/graph': echartsSource,
    'echarts/lib/chart/heatmap': echartsSource,
    'echarts/lib/chart/line': echartsSource,
    'echarts/lib/chart/lines': echartsSource,
    'echarts/lib/chart/map': echartsSource,
    'echarts/lib/chart/parallel': echartsSource,
    'echarts/lib/chart/pictorialBar': echartsSource,
    'echarts/lib/chart/pie': echartsSource,
    'echarts/lib/chart/radar': echartsSource,
    'echarts/lib/chart/sankey': echartsSource,
    'echarts/lib/chart/scatter': echartsSource,
    'echarts/lib/chart/sunburst': echartsSource,
    'echarts/lib/chart/themeRiver': echartsSource,
    'echarts/lib/chart/tree': echartsSource,
    'echarts/lib/chart/treemap': echartsSource,
    'echarts/lib/component/legend': echartsSource,
    'echarts/lib/component/tooltip': echartsSource,
    'echarts/lib/component/dataZoom': echartsSource,
    'echarts/lib/component/visualMap': echartsSource,
    quill: 'lib/quill.min.js' + getVersion({ name: 'quill' }),
    cropperjs: 'lib/cropper.min.js' + getVersion({ name: 'cropperjs' })
  }
}

const getAllDeps = () => {
  return getPartDeps(Object.keys(runtimeDeps))
}

const getAllComponents = (isVue2 = false) => {
  const componentMap = moduleUtils.getPcComponents(true, true)
  const renderlessVersion = getVersion({ name: '@opentiny/vue-renderless', isVue2: false }) // 只发布 4.x
  const systemMap = {
    '@opentiny/vue-renderless-common': 'tiny/renderless.js' + renderlessVersion
  }

  for (let i = 0, len = componentMap.length; i < len; i++) {
    const libName = componentMap[i].LowerName
    const version = getComponentVersion({ name: libName, isVue2 })

    systemMap[componentMap[i].importName] = 'tiny/ui/' + libName + '.js' + version
  }

  return systemMap
}

const getPartDeps = (keys = []) => {
  const tempDeps = {}

  for (let key in runtimeDeps) {
    keys.includes(key) && Object.assign(tempDeps, runtimeDeps[key])
  }

  return tempDeps
}

const getFullRuntimeDeps = (isVue2) => {
  return Object.assign({}, getAllDeps(), getAllComponents(isVue2))
}

const getComponentRuntimeDeps = (isVue2) => {
  return Object.assign({}, getPartDeps(['theme', 'tiny3Lib', 'tiny3Component']), getAllComponents(isVue2))
}

const getFullRuntime = (name) => {
  const arr = typeof name === 'string' ? [name] : name || Object.keys(runtimeComponents)

  return [].concat(...arr.map((key) => runtimeComponents[key]))
}

/**
 * 提取 @opentiny/vue-renderless 中的公共代码，打成独立包（避免组件运行不正常）
 */
const getRenderlessExports = () => {
  const RENDERLESS_PATH = pathJoin('..', 'node_modules', '@opentiny', 'renderless', 'common', 'runtime.js')

  let EXTERNAL_RENDERLESS = []

  // 获取需要排除的依赖
  if (fs.existsSync(RENDERLESS_PATH)) {
    const runtime_export = fs.readFileSync(RENDERLESS_PATH).toString('UTF-8')

    EXTERNAL_RENDERLESS = runtime_export.match(/import(.*)from(.*)/g) || []

    EXTERNAL_RENDERLESS = EXTERNAL_RENDERLESS.map((item) => {
      let moduleLine = item.replace(/^import\s+/g, '').split(/\s+from\s+/)

      return {
        libraryName: moduleLine.pop().replace(/'/g, '').replace(';', ''),
        exportName: moduleLine.pop().split(/\s/).pop()
      }
    })
  }

  return {
    EXTERNAL_RENDERLESS,
    RENDERLESS_PATH
  }
}

module.exports = {
  dependencies,
  getAllDeps,
  getPartDeps,
  getFullRuntime,
  getAllComponents,
  getFullRuntimeDeps,
  getRenderlessExports,
  getComponentRuntimeDeps,
  getExternalComponents: () => runtimeComponents.external
}
