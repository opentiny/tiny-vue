import { $prefix } from '../common/util'
import { isObject } from '../common/type'
import setExtend from '../common/extend'
import IntegrateChart from '../base'

export default {
  name: $prefix + 'ChartCore',
  emits: ['ready', 'readyOnce'],
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
    events: { type: Object, default: () => { } },
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
      type: Function,
    },
    afterConfig: {
      type: Function,
    },
    afterSetOption: {
      type: Function,
    },
    afterSetOptionOnce: {
      type: Function
    },



    loading: {
      type: Boolean,
      default: false
    },
    extend: Object,
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
      type: Array,
      default() {
        return ['#114411']
      }
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
  },
  data() {
    return {
      option: {},
      renderOption: {},
      initOpts: {},
      watchToPropsEchartOptions: [],
      selfChart: [
        // 'FlowChart',
        // 'WaveChart',
        // 'RiverChart',
        // 'GanttChart',
        // 'HoneycombChart',
        // 'OrganizationChart',
        // 'AutonaviMapChart',
      ],
      isSelfChart: false,
      chartList: []
    }
  },
  computed: {
    delay() {
      return {
        widthChangeDelay: this.widthChangeDelay,
        resizeDelay: this.resizeDelay
      }
    }
  },
  watch: {
    data: {
      handler(val) {
        this.refreshChart()
      },
      deep: true
    },
    events: {
      handler(val, oldVal) {
        this.addEvents(val)
        this.removeEvents(oldVal)
      },
      deep: true,
    },
    initOptions: {
      handler(val) {
        this.initOpts = {
          ...initOpts,
          ...val
        }
        this.renderChart(this.option)
      },
      deep: true,
    },
    tooltipVisible: {
      handler() {
        this.refreshChart()
      }
    },
    legendVisible: {
      handler() {
        this.refreshChart()
      },
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
      },
    },
    setOptionOpts: {
      handler(val) {
        this.renderOption = val
        this.renderChart(this.option)
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
  },
  methods: {
    selfSetting(options) {
      const echartsSettings = [
        'grid', 'dataZoom', 'visualMap', 'toolbox', 'title', 'legend', 'xAxis',
        'yAxis', 'radar', 'tooltip', 'axisPointer', 'brush', 'geo',
        'timeline', 'graphic', 'series', 'backgroundColor', 'textStyle'
      ]
      echartsSettings.forEach((setting, index) => {
        const unwatch = this.watchToPropsEchartOptions[index]
        if (this[setting]) {
          if (!options.extend) {
            options.extend = {}
          }
          options.extend[setting] = this[setting]
          !unwatch && this.$watch(setting, () => {
            this.refreshChart()
          }, {
            deep: true
          })
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
      if (this.markArea || this.markLine || this.markPoint) {
        const marks = {
          markArea: this.markArea,
          markLine: this.markLine,
          markPoint: this.markPoint
        }
        const series = options.series
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
      let data = this.data
      this.updateChart(data)
      let option = this.option
      setTimeout(() => {
        if (this.afterConfig) {
          option = this.afterConfig(option)
        }
        this.selfSetting(option)
        this.setAnimation(option)
        this.applyMarks(this.integrateChart.eChartOption)
        this.integrateChart.refresh(option)
        this.applyExtend(this.integrateChart.eChartOption)
        option.extend = this.integrateChart.eChartOption
        this.integrateChart.refresh(option)
        if (this.afterSetOption) {
          this.afterSetOption(this.integrateChart.echartsIns)
        }
        this.$emit('ready', this.integrateChart.echartsIns)
      }, this.changeDelay)
    },
    renderChart(option) {
      if (!this.isSelfChart) {
        this.selfSetting(option)
        this.setAnimation(option)
        this.integrateChart.init(this.$refs.chartRef, this.initOpts)
        this.integrateChart.setSimpleOption(this.iChartName, option)
        this.applyMarks(this.integrateChart.eChartOption)
        this.applyExtend(this.integrateChart.eChartOption)
        this.integrateChart.render(this.renderOption)
      } else {
        this.integrateChart.init(this.$refs.chartRef);
        this.integrateChart.setSimpleOption(this.chartList[this.iChartName], option, {});
        this.integrateChart.render();
      }
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
    }
  },
  created() {
    this.option = {}
    if (this.selfChart.indexOf(this.iChartName) === -1) {
      this.isSelfChart = false
      this.integrateChart = new IntegrateChart()
    } else {
      this.isSelfChart = true
      this.chartList = {}
      this.integrateChart = new this.chartList[this.iChartName]()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.addEvents(this.events)
      if (this.loading) {
        this.integrateChart.showLoading()
      }
      if (this.dataEmpty) {
        this.integrateChart.showEmpty()
      }
    })
    this.initOpts = {
      ...this.initOptions,
      domResize: this.judgeWidth,
      resizeThrottle: this.widthChangeDelay,

    }
    let data = this.data
    if (this.beforeConfig) {
      data = this.beforeConfig(data)
    }
    this.updateChart(data)
    let option = this.option
    if (this.afterConfig) {
      option = this.afterConfig(option)
      this.option = option
    }
    this.renderChart(option)
    if (this.afterSetOption) {
      this.afterSetOption(this.integrateChart.echartsIns)
    }
    if (this.afterSetOptionOnce) {
      this.afterSetOptionOnce(this.integrateChart.echartsIns)
    }
    this.$emit('ready', this.integrateChart.echartsIns)
  },
  beforeUnmount() {
    this.watchToPropsEchartOptions.forEach(unwatch => {
      unwatch && unwatch()
    })
  }
}