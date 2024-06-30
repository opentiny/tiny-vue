import tips from './util/tips'
import merge from './util/merge'
import * as echarts from 'echarts'
import Theme from './feature/token'
import throttle from './util/throttle'
import axistip from './feature/axistip'
import { mergeExtend } from './util/merge'
import BaseChart from './components/BaseChart'
import readScreen from './feature/readScreen'
import MediaScreen from './feature/mediaScreen'

const SELF_CHART = [
  'FlowChart',
  'WaveChart',
  'RiverChart',
  'GanttChart',
  'BaiduMapChart',
  'HoneycombChart',
  'OrganizationChart',
  'AutonaviMapChart',
  'SnowFlakeChart',
  'TimelineChart',
  'MilestoneChart'
]

// 图表核心对象，按需引入图表 class 给 CoreChart 渲染，打包容量较小
export default class CoreChart extends BaseChart {
  constructor() {
    super()
    // 图表echarts实例
    this.echartsIns = null
    // 图表icharts实例
    this.ichartsIns = null
    // 图表echarts配置项
    this.eChartOption = null
    // 图表icharts配置项
    this.iChartOption = null
    // 图表所在容器
    this.dom = null
    // 图表类型
    this.chartClass = null
    // 图表依赖的三方插件
    this.plugins = {}
    // 图表还没有执行render()方法
    this.hasRender = false
    // 图表渲染完毕的回调
    this.renderCallBack = null
    // 图表resize节流时间
    this.resizeThrottle = 0
    // 图表容器的宽高变化监听器
    this.resizeObserver = null
    // 响应式布局的监听器
    this.mediaScreenObserver = undefined
  }

  // 注册主题
  static registerTheme(name, config) {
    if (!config) {
      tips.error('The second parameter config is required')
      return
    }
    Theme.set(name, config)
  }

  // 注册配置
  static registerConfig(name, config) {
    if (!config) {
      tips.error('The second parameter config is required')
      return
    }
    Theme.setConfig(name, config)
  }

  // 设置主题
  static theme(name) {
    Theme.setDefaultTheme(name)
  }

  static resetThemeCongfig() {
    Theme.resetThemeCongfig()
  }

  // 开启响应式布局（类媒体查询效果）
  mediaScreen(dom, screenOption) {
    this.mediaScreenObserver = new MediaScreen(dom, screenOption, (option) => {
      this.setSimpleOption(this.chartClass, option, this.plugins, false)
      this.render()
    })
  }

  // 初始化echarts，并同时监听容器和窗口的大小变化
  init(chartDom, theme = {}, initOpts) {
    const defaultInit = {
      domResize: true,
      windowResize: true,
      resizeThrottle: this.resizeThrottle
    }
    initOpts = merge(defaultInit, initOpts)
    this.dom = chartDom
    this.echartsIns = echarts.init(chartDom, theme, initOpts)
    // resize节流函数
    this.throttleResize =
      initOpts.resizeThrottle === 0
        ? this.setResize.bind(this)
        : throttle(initOpts.resizeThrottle, this.setResize.bind(this))
    // 容器大小变化监听
    initOpts.domResize && this.setResizeObserver()
    // 页面大小变化监听
    initOpts.windowResize && window.addEventListener('resize', this.throttleResize)
  }

  setResizeObserver() {
    this.resizeObserver = new ResizeObserver((entries) => {
      window.requestAnimationFrame(() => {
        this.throttleResize()
      })
    })
    this.resizeObserver.observe(this.dom)
  }

  // 图表宽高自适应
  setResize() {
    this.mediaScreenObserver && this.mediaScreenObserver.observe()
    this.echartsIns && this.echartsIns.resize && this.echartsIns.resize({ width: 'auto' })
    this.ichartsIns && this.ichartsIns.resize && this.ichartsIns.resize()
  }

  // 传入简化后的icharts-option
  setSimpleOption(ChartClass, iChartOption, plugins = {}, isInit = true) {
    if (isInit) {
      Theme.setDefaultTheme(iChartOption.theme)
      this.mediaScreenObserver && this.mediaScreenObserver.setInitOption(iChartOption)
    }
    if (iChartOption.readScreen) {
      readScreen(this.dom, iChartOption.readScreen)
    }
    if (this.isSelfChart(ChartClass)) {
      this.redirectSelfChart(ChartClass, iChartOption)
      return
    }
    this.plugins = plugins
    this.chartClass = ChartClass
    this.iChartOption = iChartOption
    this.ichartsIns = new ChartClass(iChartOption, this.echartsIns, this.plugins)
    this.eChartOption = this.ichartsIns.getOption()
    this.iChartOption.axistip && axistip(this.dom, this.echartsIns, this.eChartOption)
    mergeExtend(this.iChartOption, this.eChartOption)
  }

  // 若自研图表，走自研图表路径，并更改this指向
  redirectSelfChart(SelfChart, option, plugins) {
    const stateDom = this.dom.getElementsByClassName('huicharts-state-container')[0]
    this.uninstall()
    this.dom.innerHTML = ''
    const instance = new SelfChart()
    instance.init(this.dom)
    instance.setSimpleOption(SelfChart, option, plugins)
    instance.renderCallBack = this.renderCallBack
    if (stateDom) {
      this.dom.appendChild(stateDom)
    }
    Object.setPrototypeOf(this, instance)
    for (const key in this) {
      if (Object.hasOwnProperty.call(this, key)) {
        delete this[key]
      }
    }
  }

  // 判断是否为若自研图表
  isSelfChart(chartClass) {
    return SELF_CHART.includes(chartClass.name)
  }

  // 渲染图表
  render(option) {
    // 已经开始渲染
    this.hasRender = true
    // 第一次渲染
    this.setOption(this.eChartOption, option)
    // 第二次渲染
    this.setOptionAgain(this.eChartOption)
    // 图表渲染完成时回调
    this.renderCallBack && this.renderCallBack(this.echartsIns)
  }

  // 第一次渲染: 调用echarts原生的setOption
  setOption(eChartOption, option) {
    option = merge({ notMerge: true }, option)
    eChartOption && this.echartsIns.setOption(eChartOption, option)
  }

  // 第二次渲染: 有些图表需要根据第一次渲染出来的结果进行二次计算
  setOptionAgain() {
    if (this.ichartsIns && this.ichartsIns.updateOptionAgain) {
      const YAxiMax = this.getYAxisMaxValue(0)
      const YAxiMin = this.getYAxisMinValue(0)
      // 根据网格重新计算option
      this.ichartsIns.updateOptionAgain(YAxiMax, YAxiMin)
      // 再次渲染
      this.setOption(this.eChartOption)
    }
  }

  // 图表刷新，包括刷新配置和数据
  refresh(iChartOption) {
    this.iChartOption = iChartOption
    this.setSimpleOption(this.chartClass, iChartOption, this.plugins)
    this.render()
  }

  // 图表刷新，仅刷新数据
  refreshData(data) {
    this.iChartOption.data = data
    this.refresh(this.iChartOption)
  }

  // 图表渲染完成时回调
  onRenderReady(callback) {
    this.renderCallBack = callback
  }

  // 给echarts单独绑定事件
  on(...rest) {
    this.echartsIns && this.echartsIns.on(...rest)
  }

  // 给echarts单独解绑事件
  off(...rest) {
    this.echartsIns && this.echartsIns.off(...rest)
  }

  // 给echarts实例绑定事件
  bindEvents(events) {
    if (events && events.length !== 0) {
      events.forEach((item) => {
        if (item.query) {
          this.off(item.eventName, item.handler)
          this.on(item.eventName, item.query, item.handler)
        } else {
          this.off(item.eventName, item.handler)
          this.on(item.eventName, item.handler)
        }
      })
    }
  }

  // 批量给echarts实例解绑事件
  unbindEvents(events) {
    if (events && events.length !== 0) {
      events.forEach((item) => {
        if (item.handler) {
          this.off(item.eventName, item.handler)
        } else {
          this.off(item.eventName)
        }
      })
    }
  }

  // 卸载图表时,
  uninstall() {
    // 卸载window resize监听功能
    window.removeEventListener('resize', this.throttleResize)
    // 卸载container容器变化监听
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.dom)
      this.resizeObserver.disconnect()
      this.resizeObserver = null
    }
    // 销毁ECharts实例
    if (this.echartsIns && !this.echartsIns.isDisposed()) {
      this.echartsIns.dispose()
    }
    this.echartsIns = null
  }

  // 获取到ECharts实例
  getEchartsInstance() {
    return this.echartsIns
  }

  // 直接传入ECharts的原生配置项
  setEchartsOption(option) {
    option && (this.eChartOption = option)
  }

  // 获取到ECharts配置项
  getEchartsOption() {
    return this.eChartOption
  }

  /**
   * 图表渲染完毕后，获得y刻度的最大值
   * @param {index为yAxis数组下标} index
   * _extent是一个数组，_extent[0]为该轴上最小值，_extent[1]为该轴上最大值
   */
  getYAxisMaxValue(index) {
    return this.echartsIns.getModel().getComponent('yAxis', index)?.axis.scale._extent[1]
  }

  /**
   * 图表渲染完毕后，获得y轴刻度的最小值
   * @param {index为yAxis数组下标} index
   * _extent是一个数组，_extent[0]为该轴上最小值，_extent[1]为该轴上最大值
   */
  getYAxisMinValue(index) {
    return this.echartsIns.getModel().getComponent('yAxis', index)?.axis.scale._extent[0]
  }
}
