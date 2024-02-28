import BaseChart from '../BaseChart'
import * as echarts from 'echarts/lib/echarts'

// 常规的调用方法
// integrateChart.init(chartRef.current);
// integrateChart.setSimpleOption(AutonaviMapChart, option, {});
// integrateChart.render();
let amapPromise = null

export default class AutonaviMapChart extends BaseChart {
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

    // 图表渲染容器
    this.dom = null
    // 图表配置项
    this.option = null
  }

  getAmap(option) {
    if (!amapPromise) {
      const key = option.key
      const url = option.url
      const version = option.version || option.ver || option.v
      amapPromise = new Promise((resolve) => {
        const cbName = 'amap' + Date.now()
        let script = document.createElement('script')
        window[cbName] = resolve
        let src = `${url}?v=${version}&key=${key}`
        if (option.plugin) {
          src += `&plugin=${option.plugin}`
        }
        script.src = `${src}&callback=${cbName}`
        script.onload = () => resolve()
        document.body.appendChild(script)
      })
    }
    return amapPromise
  }

  // 初始化图表渲染容器
  init(dom) {
    this.uninstall()
    this.dom = dom
    this.echartsIns = echarts.init(this.dom)
  }

  // 初始化图表渲染配置
  setSimpleOption(chartName, option) {
    this.option = option
    this.getAmap(this.option).then(() => {
      this.echartsIns.setOption(this.option)
      this.setResizeObserver()
    })
  }

  // 图表渲染回调
  render() {
    this.initDom() // 渲染dom
    this.renderCallBack && this.renderCallBack(this)
  }

  // 图表渲染完成时回调
  onRenderReady(callback) {
    this.renderCallBack = callback
  }

  // 渲染dom
  initDom() {}

  // 监听容器变化
  setResizeObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
      this.resizeObserver = null
    }
    this.resizeObserver = new ResizeObserver((entries) => {
      this.resizeDom()
    })
    this.resizeObserver.observe(this.dom)
  }

  resizeDom() {
    this.echartsIns && this.echartsIns.resize && this.echartsIns.resize()
  }

  // 图表刷新，刷新配置项
  refresh(option) {
    this.iChartOption = option
    this.setSimpleOption('AutonaviMapChart', this.iChartOption)
    this.resizeDom()
  }

  // 图表刷新，仅刷新数据
  refreshData(data) {
    this.iChartOption.series[0].data = data
    this.refresh(this.iChartOption)
  }

  // 刷新图表自适应宽度
  setResize() {
    this.resizeDom()
  }

  // 销毁图表
  uninstall() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
      this.resizeObserver = null
    }
    // 销毁ECharts实例
    if (this.echartsIns && !this.echartsIns.isDisposed()) {
      this.echartsIns.dispose()
    }
    this.echartsIns = null
    this.dom = null
  }

  // 获取到ECharts实例
  getEchartsInstance() {
    return this.echartsIns
  }

  // 获取到ECharts配置项
  getEchartsOption() {
    return this.echartsIns.getOption()
  }

  // 获取 ECharts 高德地图组件
  getAmapComponent() {
    return this.echartsIns.getModel().getComponent('amap')
  }

  // 获取高德地图实例
  getAmapInstance() {
    return this.getAmapComponent().getAMap()
  }
}
