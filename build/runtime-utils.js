/**
 * 打包运行时通用配置
 *
 * 全量运行时（组件分组）
 * 运行时版本号
 * 运行时外部依赖路径
 */
const fs = require('fs-extra')
const { getVersion, pathJoin, logRed } = require('./utils')
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
    'TopBox',
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
    'Crop'
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
  business: ['UserContact', 'Wizard'],
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
  external: ['CardTemplate', 'CreditCard', 'CreditCardForm', 'SvgIcon', 'AutonaviMap', 'ChartWordcloud', 'ChartLiquidfill']
}

const echartsVersion = getVersion('echarts')
const auroraVueVersion = getVersion('@opentiny/vue')
const echartsSource = 'lib/echarts.min.js' + echartsVersion
const dependencies = {
  vue: 'node_modules/vue/dist/vue.min.js',
  'vue-i18n': 'node_modules/vue-i18n/dist/vue-i18n.min.js',
  axios: 'node_modules/axios/dist/axios.min.js',
  'axios-mock-adapter': 'node_modules/axios-mock-adapter/dist/axios-mock-adapter.min.js',
  '@vue/composition-api': 'node_modules/@vue/composition-api/dist/vue-composition-api.prod.js',
  '@opentiny/core': 'node_modules/@opentiny/core/dist/aurora.min.js',
  '@opentiny/service': 'node_modules/@opentiny/service/dist/aurora.service.min.js',
  cropperjs: 'node_modules/cropperjs/dist/cropper.min.js',
  vue3: 'example/node_modules/vue/dist/vue.global.prod.js',
  'vue3-i18n': 'example/node_modules/vue-i18n/dist/vue-i18n.global.js'
}

const runtimeDeps = {
  base: {
    vue: 'lib/vue.min.js' + getVersion('vue'),
    axios: 'lib/axios.min.js' + getVersion('axios'),
    'vue-i18n': 'lib/vue-i18n.min.js' + getVersion('vue-i18n'),
    'axios-mock-adapter': 'lib/axios-mock-adapter.min.js' + getVersion('axios-mock-adapter')
  },
  aurora: {
    '@opentiny/core': 'lib/aurora.min.js' + getVersion('@opentiny/core'),
    '@opentiny/service': 'lib/aurora.service.min.js' + getVersion('@opentiny/service')
  },
  tiny3Lib: {
    '@vue/composition-api': 'lib/vue-composition-api.prod.js' + getVersion('@vue/composition-api'),
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
    cropperjs: 'lib/cropper.min.js' + getVersion('cropperjs'),
    '@opentiny/vue-renderless-common': 'tiny/common/renderless.js' + getVersion('@opentiny/vue-renderless')
  },
  tiny3Component: {
    '@opentiny/vue-locale': 'COMPONENT_DIR/locale.js' + auroraVueVersion,
    '@opentiny/vue-icon': 'COMPONENT_DIR/icon.js' + auroraVueVersion,
    '@opentiny/vue-common': 'COMPONENT_DIR/common.js' + auroraVueVersion
  }
}

const getPartDeps = (keys = []) => {
  const tempDeps = {}

  for (let key in runtimeDeps) {
    if (Object.prototype.hasOwnProperty.call(runtimeDeps, key)) {
      keys.includes(key) && Object.assign(tempDeps, runtimeDeps[key])
    }
  }

  return tempDeps
}

const getAllDeps = () => getPartDeps(Object.keys(runtimeDeps))

const getAllComponents = () => {
  const componentMap = moduleUtils.getPcComponents(true)
  const systemMap = {}

  for (let i = 0, len = componentMap.length; i < len; i++) {
    const libName = componentMap[i].LowerName
    const libEntry = componentMap[i].path
    let version = auroraVueVersion

    try {
      version = '?v=' + require('../' + libEntry.replace('index.js', 'package.json')).version.replace(/[\^|~]/g, '')
    } catch (e) {
      logRed(e)
    }

    systemMap[componentMap[i].importName] = 'COMPONENT_DIR/' + libName + '.js' + version
  }

  return systemMap
}

const getFullRuntimeDeps = () => ({ ...getAllDeps(), ...getAllComponents() })

const getComponentRuntimeDeps = () => ({
  ...getPartDeps(['theme', 'tiny3Lib', 'tiny3Component']),
  ...getAllComponents()
})

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
    const runtimeExport = fs.readFileSync(RENDERLESS_PATH).toString('UTF-8')

    EXTERNAL_RENDERLESS = runtimeExport.match(/import(.*)from(.*)/g) || []

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
