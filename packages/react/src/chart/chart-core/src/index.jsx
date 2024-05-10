import { $prefix, useSetup, useVm, $props, vc } from '@opentiny/react-common'

import { renderless, api } from '@opentiny/vue-renderless/chart-core/vue'
import * as echarts from 'echarts/core'
import { TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components'
import * as echartsLib from 'echarts'
import { useRef, useEffect } from 'react'

echarts.use([TooltipComponent, LegendComponent, TitleComponent])
export default function ChartCore({ props, chartHandler, chartLib, prepareBoxplotData, name }) {
  const {
    changeDelay = 0,
    data = () => {
      return {}
    },
    height = '400px',
    initOptions = () => {
      return {}
    },
    judgeWidth = true,
    legendVisible = true,
    resizeDelay = 200,
    resizeable,
    setOptionOpts,
    settings = () => {
      return {}
    },
    tooltipVisible = true,
    width = '100%',
    widthChangeDelay = 300,
    colorMode = '',
    hasDataHandler = false,
    dataEmpty,
    loading,
    hasResize
  } = props

  const defaultProps = {
    ...$props,
    ...props,
    changeDelay,

    data,
    height,
    initOptions,
    judgeWidth,
    legendVisible,
    resizeDelay,
    resizeable,
    setOptionOpts,
    settings,
    tooltipVisible,
    width,
    widthChangeDelay,
    colorMode,
    hasDataHandler
  }

  const ref = useRef()
  const { parent, current: vm } = useVm()
  const canvas = useRef()
  const { state, camelToKebab, dataHandler, resize } = useSetup({
    props: defaultProps,
    api,
    renderless,
    vm,
    parent,
    mono: true,
    extendOptions: { echartsLib },
    doms: [canvas],
    chartHandler,
    chartLib,
    ref,
    prepareBoxplotData

    // constants: _constants
  })
  useEffect(() => {
    if (hasDataHandler) dataHandler()
  }, [hasDataHandler])

  useEffect(() => {
    if (hasResize) resize()
  }, [hasResize])
  return (
    <div style={state.canvasStyle} ref={ref} className={vc(['tiny-chart', camelToKebab(name || $prefix)])}>
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
      {props.children}
    </div>
  )
}
