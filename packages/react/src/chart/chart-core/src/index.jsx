import { $prefix, useSetup, useVm, $props } from '@opentiny/react-common'

import { renderless, api } from '@opentiny/vue-renderless/chart-core/vue'
import * as echarts from 'echarts/core'
import { TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components'
import * as echartsLib from 'echarts'
import { useRef } from 'react'

echarts.use([TooltipComponent, LegendComponent, TitleComponent])
export default function ChartCore({ props, chartHandler, chartLib, prepareBoxplotData, name }) {
  const {
    afterConfig,
    afterSetOption,
    afterSetOptionOnce,
    animation,
    axisPointer,
    backgroundColor,
    beforeConfig,
    brush,
    cancelResizeCheck,
    changeDelay = 0,
    colors,
    data = () => {
      return {}
    },
    dataEmpty,
    dataZoom,
    events,
    extend,
    geo,
    graphic,
    grid,
    height = '400px',
    initOptions = () => {
      return {}
    },
    judgeWidth = true,
    legend,
    legendPosition,
    legendVisible = true,
    loading,
    markArea,
    markLine,
    markPoint,
    notSetUnchange,
    radar,
    resizeDelay = 200,
    resizeable = true,
    series,
    setOptionOpts = true,
    settings = () => {
      return {}
    },
    textStyle,
    // theme = () => {
    //   const ctx = appProperties()

    //   return ctx.tiny_chart_theme ? ctx.tiny_chart_theme.value : null
    // },
    theme,
    themeName,
    timeline,
    title,
    toolbox,
    tooltip,
    tooltipFormatter,
    tooltipVisible = true,
    visualMap,
    width = 'auto',
    widthChangeDelay = 300,
    xAxis,
    yAxis,
    colorMode = ''
  } = props

  const defaultProps = {
    ...$props,
    afterConfig,
    afterSetOption,
    afterSetOptionOnce,
    animation,
    axisPointer,
    backgroundColor,
    beforeConfig,
    brush,
    cancelResizeCheck,
    changeDelay,
    colors,
    data,
    dataEmpty,
    dataZoom,
    events,
    extend,
    geo,
    graphic,
    grid,
    height,
    initOptions,
    judgeWidth,
    legend,
    legendPosition,
    legendVisible,
    loading,
    markArea,
    markLine,
    markPoint,
    notSetUnchange,
    radar,
    resizeDelay,
    resizeable,
    series,
    setOptionOpts,
    settings,
    textStyle,
    theme,
    themeName,
    timeline,
    title,
    toolbox,
    tooltip,
    tooltipFormatter,
    tooltipVisible,
    visualMap,
    width,
    widthChangeDelay,
    xAxis,
    yAxis,
    colorMode
  }

  const ref = useRef()
  const { parent, current: vm } = useVm()
  const canvas = useRef()

  const { state, camelToKebab } = useSetup({
    props: defaultProps,
    api,
    renderless,
    vm,
    parent,
    mono: true,
    extendOptions: { echartsLib },
    dom: canvas,
    chartHandler,
    chartLib,
    ref,
    prepareBoxplotData

    // constants: _constants
  })
  return (
    <div style={state.canvasStyle} ref={ref} className={camelToKebab(name || $prefix)}>
      <div
        ref={canvas}
        v-ref="canvas"
        className={{ 'tiny-chart-mask-status': dataEmpty || loading }}
        style={state.canvasStyle}></div>
      <div className="tiny-chart-data-empty" style={{ display: dataEmpty ? '' : 'none' }}>
        暂无数据
      </div>
      <div className="tiny-chart-component-loading" style={{ display: loading ? '' : 'none' }}>
        <div className="loader">
          <div className="loading-spinner">
            <svg className="circular" viewBox="25 25 50 50">
              <circle className="path" cx="50" cy="50" r="20" fill="none" />
            </svg>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  )
}
