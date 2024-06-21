import { $prefix } from '../common/util'
import { isObject } from '../common/type'
import setExtend from '../common/extend'
import { DEFAULT_COLORS, SAAS_DEFAULT_COLORS, SAAS_DEFAULT_SAME_COLORS, DEFAULT_THEME } from '../common/constants'
import IntegrateChart from '../base'
import BaiduMapChart from '../base/components/BaiduMapChart'
import AutonaviMapChart from '../base/components/AutonaviMapChart'
import '@opentiny/vue-theme/chart-core/index.less'

export default {
  name: $prefix + 'ChartCore',
  emits: ['ready', 'readyOnce', 'handle-color'],
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    settings: {
      type: Object,
      default() {
        return {}
      }
    },
    width: { type: String, default: 'auto' },
    height: { type: String, default: '400px' },
    events: { type: Object, default() {} },
    initOptions: {
      type: Object,
      default() {
        return {}
      }
    },
    tooltipVisible: { type: Boolean, default: true },
    legendVisible: { type: Boolean, default: true },
    legendPosition: { type: String },
    theme: Object,
    themeName: [Object, String],
    judgeWidth: {
      type: Boolean,
      default: false
    },
    widthChangeDelay: {
      type: Number,
      default: 200
    },
    resizeable: {
      type: Boolean,
      default: true
    },
    changeDelay: { type: Number, default: 0 },
    dataEmpty: Boolean,

    beforeConfig: {
      type: Function
    },
    afterConfig: {
      type: Function
    },
    afterSetOption: {
      type: Function
    },
    afterSetOptionOnce: {
      type: Function
    },

    loading: {
      type: Boolean,
      default: false
    },
    extend: {
      type: Object,
      default() {}
    },
    tooltipFormatter: { type: Function },

    markArea: {
      type: Object
    },
    markLine: {
      type: Object
    },
    markPoint: {
      type: Object
    },

    grid: { type: [Object, Array] },
    colors: {
      type: Array
    },
    visualMap: [Object, Array],
    dataZoom: [Object, Array],
    toolbox: [Object, Array],
    title: Object,
    legend: [Object, Array],
    xAxis: [Object, Array],
    yAxis: [Object, Array],
    radar: Object,
    tooltip: Object,
    axisPointer: Object,
    brush: [Object, Array],
    geo: Object,
    timeline: [Object, Array],
    graphic: [Object, Array],
    series: [Object, Array],
    backgroundColor: [Object, String],
    textStyle: Object,
    animation: Object,
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    cancelResizeCheck: {
      type: Boolean,
      default: false
    },
    setOptionOpts: {
      type: Object,
      default() {}
    },
    colorMode: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      option: {},
      eChartOption: {},
      renderOption: {},
      initOpts: {},
      watchToPropsEchartOptions: [],
      selfChart: ['BaiduMapChart', 'AutonaviMapChart'],
      isSelfChart: false,
      chartList: [],
      once: {},
      store: {}
    }
  },
  computed: {
    // 图表延时的集合
    delay() {
      return {
        widthChangeDelay: this.widthChangeDelay,
        resizeDelay: this.resizeDelay
      }
    },

    size() {
      return {
        width: this.width,
        height: this.height
      }
    },

    // 图表参数的集合
    setting() {
      return {
        data: this.data,
        settings: this.settings,
        extend: this.extend,
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible
      }
    }
  },
  watch: {
    options: {
      handler() {
        this.refreshChart()
      },
      deep: true
    },
    setting: {
      handler() {
        this.refreshChart()
      },
      deep: true
    },
    events: {
      handler(val, oldVal) {
        this.addEvents(val)
        this.removeEvents(oldVal)
      },
      deep: true
    },
    initOptions: {
      handler(val) {
        this.initOpts = {
          ...this.initOpts,
          ...val
        }
        this.renderChart(this.option)
      },
      deep: true
    },
    judgeWidth: {
      handler(val) {
        this.initOpts.domResize = val
        this.renderChart(this.option)
      }
    },
    delay: {
      handler(val) {
        this.initOpts.resizeThrottle = val
        this.renderChart(this.option)
      },
      deep: true
    },
    resizeable: {
      handler(val) {
        this.initOpts.windowResize = val
        this.renderChart(this.option)
      }
    },
    setOptionOpts: {
      handler(val) {
        this.renderOption = val
      },
      deep: true
    },
    loading(val) {
      this.$nextTick(() => {
        if (val) {
          this.integrateChart.showLoading()
        } else {
          this.integrateChart.closeLoading()
        }
      })
    },
    dataEmpty(val) {
      this.$nextTick(() => {
        if (val) {
          this.integrateChart.showEmpty()
        } else {
          this.integrateChart.closeEmpty()
        }
      })
    },

    size: {
      handler(val) {
        this.$nextTick(() => {
          this.integrateChart && this.integrateChart.echartsIns && this.integrateChart.echartsIns.resize()
        })
      }
    }
  },
  methods: {
    selfSetting(options) {
      const echartsSettings = [
        'grid',
        'dataZoom',
        'visualMap',
        'toolbox',
        'title',
        'legend',
        'xAxis',
        'yAxis',
        'radar',
        'tooltip',
        'axisPointer',
        'brush',
        'geo',
        'timeline',
        'graphic',
        'series',
        'backgroundColor',
        'textStyle'
      ]
      echartsSettings.forEach((setting, index) => {
        const unwatch = this.watchToPropsEchartOptions[index]
        if (this[setting]) {
          if (!options.extend) {
            options.extend = {}
          }

          options.extend[setting] = this[setting]
          !unwatch &&
            this.$watch(
              setting,
              () => {
                this.refreshChart()
              },
              {
                deep: true
              }
            )
        } else {
          unwatch && unwatch()
        }
      })
    },
    setAnimation(options) {
      if (this.animation) {
        Object.keys(this.animation).forEach((key) => {
          options.extend[key] = this.animation[key]
        })
      }
    },
    applyMarks(options) {
      // MarkArea、markLine、markPoint 判断
      if (this.markArea || this.markLine || this.markPoint) {
        const marks = {
          markArea: this.markArea,
          markLine: this.markLine,
          markPoint: this.markPoint
        }
        const { series } = options
        const setMark = (seriesItem, marks) => {
          Object.keys(marks).forEach((key) => {
            if (marks[key]) {
              seriesItem[key] = marks[key]
            }
          })
        }

        if (Array.isArray(series)) {
          series.forEach((item) => {
            setMark(item, marks)
          })
        } else if (isObject(series)) {
          setMark(series, marks)
        }
      }
    },
    applyExtend(option) {
      if (this.extend) {
        return setExtend({
          option,
          extend: this.extend
        })
      }
    },
    refreshChart() {
      const { data } = this
      if (Object.keys(this.options).length === 0) {
        this.updateChart(data)
      } else {
        this.option = cloneDeep(this.options)
      }
      let { option } = this
      clearTimeout(this.timer)
      this.timer = null
      this.timer = setTimeout(() => {
        if (this.afterConfig) {
          option = this.afterConfig(option)
        }

        this.selfSetting(option)
        this.setAnimation(option)
        this.applyMarks(this.integrateChart.eChartOption)
        this.integrateChart.refresh(option)
        if (this.colorMode !== 'default') {
          option.color = this.computedChartColor()
        }
        if (this.extend && Object.keys(this.extend).length !== 0) {
          option.extend = this.applyExtend(this.integrateChart.eChartOption)
          this.integrateChart.refresh(option)
        }
        this.$emit('handle-color', option.color)
        if (this.afterSetOption) {
          this.afterSetOption(this.integrateChart.echartsIns)
        }
        this.$emit('ready', this.integrateChart.echartsIns, option)
      }, this.changeDelay)
      this.eChartOption = this.integrateChart.eChartOption
    },
    renderChart(option) {
      const plugins = this.plugins || {}
      if (this.isSelfChart) {
        this.integrateChart.init(this.$refs.chartRef)
        if (this.colorMode !== 'default') {
          option.color = this.computedChartColor()
        }
        this.integrateChart.setSimpleOption(this.chartList[this.iChartName], option, plugins)
        this.$emit('handle-color', option.color)
        this.integrateChart.render()
      } else {
        this.selfSetting(option)
        this.setAnimation(option)
        const themeName = this.themeName || this.theme || DEFAULT_THEME
        this.integrateChart.init(this.$refs.chartRef, themeName, this.initOpts)
        if (this.colorMode !== 'default') {
          option.color = this.computedChartColor()
        }
        this.integrateChart.setSimpleOption(this.iChartName, option, plugins)
        this.$emit('handle-color', option.color)
        this.applyMarks(this.integrateChart.eChartOption)
      }
      if (this.extend && Object.keys(this.extend).length !== 0) {
        option.extend = this.applyExtend(this.integrateChart.eChartOption)
        this.integrateChart.setSimpleOption(this.iChartName, option, plugins)
      }
      this.integrateChart.render(this.renderOption)
      this.$emit('ready', this.integrateChart.echartsIns)
      if (!this.once['ready-once']) {
        this.once['ready-once'] = true
        this.$emit('ready', this.integrateChart.echartsIns)
      }
      this.eChartOption = this.integrateChart.eChartOption
    },
    addEvents(val) {
      if (typeof val === 'object' && val !== null && Object.keys(val).length > 0) {
        const events = Object.keys(val)
        this.$nextTick(() => {
          events.forEach((item) => {
            this.integrateChart.on(item, val[item])
          })
        })
      }
    },
    removeEvents(oldVal) {
      if (typeof oldVal === 'object' && oldVal !== null && Object.keys(oldVal).length > 0) {
        const events = Object.keys(oldVal)
        this.$nextTick(() => {
          events.forEach((item) => {
            this.integrateChart.on(item, oldVal[item])
          })
        })
      }
    },
    resize() {
      if (!this.cancelResizeCheck) {
        this.integrateChart.echartsIns.resize()
      }
    },
    afterConfigFn(option) {
      if (this.afterConfig) {
        option = this.afterConfig(option)
        this.option = option
      }
      return option
    },
    beforeConfigFn(data) {
      if (this.beforeConfig) {
        data = this.beforeConfig(data)
      }
      return data
    },
    isStack() {
      let {
        settings: { stack },
        data: { columns }
      } = this
      let flag = false

      if (typeof stack !== 'object' || !Array.isArray(columns)) return flag

      Object.keys(stack).forEach((key) => {
        stack[key].forEach((stackItem) => {
          const isExist = columns.includes(stackItem)
          if (isExist) {
            flag = true
          }
        })
      })

      return flag
    },
    calcColors({ len, type, isStack }) {
      let SAAS_COLOR = SAAS_DEFAULT_COLORS
      let lastColor = '#1B3F86'
      if (isStack && type === '') {
        return len && len > 6 ? [lastColor].concat(SAAS_COLOR.slice(0, len - 1)) : SAAS_COLOR.slice(0, [len || 8])
      }
      if (!isStack && type === '') {
        type = 'default'
      }
      if (type === 'blue' || type === 'green') {
        SAAS_COLOR = SAAS_DEFAULT_SAME_COLORS[type]
          .slice(0, len)
          .sort((a, b) => a.idx - b.idx)
          .map((item) => item.color)
      }
      return len && len > 6 ? SAAS_COLOR.slice(0, len - 1).concat([lastColor]) : SAAS_COLOR.slice(0, [len || 8])
    },
    computedChartColor() {
      let defaultColors = DEFAULT_COLORS

      let flag = this.isStack()

      if (this.data && (Array.isArray(this.data.rows) || Array.isArray(this.data.columns))) {
        const { columns, rows } = this.data
        const len = Math.max(columns ? columns.length : 0, rows ? rows.length : 0)
        defaultColors = this.calcColors({ len, type: this.colorMode, isStack: flag })
      } else if (Array.isArray(this.data)) {
        defaultColors = this.calcColors({ len: this.data.length, type: this.colorMode, isStack: flag })
      } else if (this.extend && this.extend.series && Array.isArray(this.extend.series.data)) {
        defaultColors = this.calcColors({ len: this.extend.series.data.length, type: this.colorMode, isStack: flag })
      } else if (this.extend && Array.isArray(this.extend.series)) {
        defaultColors = this.calcColors({ len: this.extend.series.length, type: this.colorMode, isStack: flag })
      }
      return this.colors || (this.theme && this.theme.color) || defaultColors
    }
  },
  created() {
    this.option = {}
    if (!this.selfChart.includes(this.iChartName)) {
      this.isSelfChart = false
      this.integrateChart = new IntegrateChart()
    } else {
      this.isSelfChart = true
      this.chartList = {
        BaiduMapChart,
        AutonaviMapChart
      }
      this.integrateChart = new this.chartList[this.iChartName]()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.addEvents(this.events)
      this.loading && this.integrateChart.showLoading()

      this.dataEmpty && this.integrateChart.showEmpty()
    })
    this.initOpts = {
      ...this.initOptions,
      domResize: this.judgeWidth,
      resizeThrottle: this.widthChangeDelay
    }
    let { data } = this
    data = this.beforeConfigFn(data)
    if (Object.keys(this.options).length === 0) {
      this.updateChart(data)
    } else {
      this.option = cloneDeep(this.options)
    }
    let { option } = this
    option = this.afterConfigFn(option)

    this.renderChart(option)

    this.afterSetOption && this.afterSetOption(this.integrateChart.echartsIns)

    this.afterSetOptionOnce && this.afterSetOptionOnce(this.integrateChart.echartsIns)
  },
  beforeUnmount() {
    this.watchToPropsEchartOptions.forEach((unwatch) => {
      unwatch && unwatch()
    })
  }
}
