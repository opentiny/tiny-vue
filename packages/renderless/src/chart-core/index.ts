/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { on, off } from '../common/deps/dom'
import {
  DEFAULT_COLORS,
  DEFAULT_THEME,
  STATIC_PROPS,
  ECHARTS_SETTINGS,
  SAAS_DEFAULT_COLORS_10,
  SAAS_DEFAULT_COLORS_18,
  DEFAULT_CONFIG
} from './deps/constants'
import { getType, debounce, isObject, cloneDeep, isEqual, htmlHandler } from './deps/utils'
import setAnimation from './modules/animation'
import setExtend from './modules/extend'
import setMark from './modules/mark'

export const computedCanvasStyle = (props) => () => ({
  width: props.width,
  height: props.height,
  position: 'relative'
})

const calcColors = (data) => (data.length <= 10 ? SAAS_DEFAULT_COLORS_10 : SAAS_DEFAULT_COLORS_18)

export const computedChartColor = (props) => () => {
  let defaultColors = DEFAULT_COLORS
  let { data } = props
  const { extend } = props

  if (data && Array.isArray(data.rows)) {
    defaultColors = calcColors(data.rows)
  } else if (Array.isArray(data)) {
    defaultColors = calcColors(data)
  } else if (extend && Array.isArray(extend.series)) {
    defaultColors = calcColors(extend.series)
  } else if (extend && extend.series && Array.isArray(extend.series.data)) {
    defaultColors = calcColors(extend.series.data)
  }

  return props.colors || (props.theme && props.theme.color) || defaultColors
}

export const dataHandler =
  ({ api, props, state, echartsLib, t, vm }) =>
  () => {
    if (!api.chartHandler) {
      return
    }

    let data = props.data
    let isBoxplot = false

    if (vm.prepareBoxplotData && Array.isArray(data)) {
      isBoxplot = true
      const obj = vm.prepareBoxplotData(data)

      data = {
        columns: obj.axisData,
        rows: obj.boxData,
        outliers: obj.outliers
      }
    }

    let { columns = [], rows = [] } = data

    const extra = {
      tooltipVisible: props.tooltipVisible,
      legendVisible: props.legendVisible,
      echarts: state.echarts,
      color: state.chartColor,
      tooltipFormatter: props.tooltipFormatter,
      _once: state.once,
      echartsLib,
      t,
      vm
    }

    columns = htmlHandler(columns)
    rows = htmlHandler(rows)

    if (isBoxplot) {
      extra.outliers = data.outliers
    }

    if (props.beforeConfig) {
      data = props.beforeConfig(data)
    }

    let options = api.chartHandler(columns, rows, props.settings, extra)

    if (options) {
      if (typeof options.then === 'function') {
        options.then(api.optionsHandler)
      } else {
        api.optionsHandler(options)
      }
    }
  }

export const nextTickResize =
  ({ api, nextTick }) =>
  () =>
    nextTick(api.resize)

export const resize =
  ({ props, vm, api }) =>
  () => {
    if (!props.cancelResizeCheck) {
      if (vm.$el && vm.$el.clientWidth && vm.$el.clientHeight) {
        api.echartsResize()
      }
    } else {
      api.echartsResize()
    }
  }

export const echartsResize = (state) => () => state.echarts && state.echarts.resize()

const setOptionsLegend = ({ props, options }) => {
  if (props.legendPosition && options.legend) {
    options.legend[props.legendPosition] = 10

    if (~['left', 'right'].indexOf(props.legendPosition)) {
      options.legend.top = 'middle'
      options.legend.orient = 'vertical'
    }
  }
}

const selfSetting = ({ props, options }) => {
  ECHARTS_SETTINGS.forEach((setting) => {
    if (props[setting]) {
      options[setting] = props[setting]
    }
  })
}

const applyMarks = ({ props, options }) => {
  if (props.markArea || props.markLine || props.markPoint) {
    const marks = {
      markArea: props.markArea,
      markLine: props.markLine,
      markPoint: props.markPoint
    }

    const series = options.series

    if (Array.isArray(series)) {
      series.forEach((item) => {
        setMark(item, marks)
      })
    } else if (isObject(series)) {
      setMark(series, marks)
    }
  }
}

const afterConfig = ({ props, options }) => {
  if (props.afterConfig) {
    options = props.afterConfig(options)
  }

  return options
}

const mapChartNotMerge = (props) => {
  let setOptionOpts = props.setOptionOpts

  if ((props.settings.bmap || props.settings.amap) && !isObject(setOptionOpts)) {
    setOptionOpts = false
  }

  return setOptionOpts
}

const afterSetOption = ({ props, state, options, echartsLib }) => {
  if (props.afterSetOption) {
    props.afterSetOption(state.echarts, options, echartsLib)
  }
}

const afterSetOptionOnce = ({ props, state, options, echartsLib }) => {
  if (props.afterSetOptionOnce && !state.once.afterSetOptionOnce) {
    state.once.afterSetOptionOnce = true
    props.afterSetOptionOnce(state.echarts, options, echartsLib)
  }
}

export const judgeWidthHandler =
  ({ props, api, vm, nextTick }) =>
  () => {
    if (!props.judgeWidth) {
      return
    }

    if (vm.$el.clientWidth || vm.$el.clientHeight) {
      api.resize()
    } else {
      nextTick(() => {
        if (vm.$el.clientWidth || vm.$el.clientHeight) {
          api.resize()
        } else {
          setTimeout(() => {
            api.resize()
          }, props.widthChangeDelay)
        }
      })
    }
  }

const setOption = ({ state, options, setOptionOpts, emit, api, props, echartsLib }) => {
  state.echarts.setOption(options, setOptionOpts)
  emit('ready', state.echarts, options, echartsLib)
  if (!state.once['ready-once']) {
    state.once['ready-once'] = true
    emit('ready-once', state.echarts, options, echartsLib)
  }
  api.judgeWidthHandler(options)
  afterSetOption({ props, state, options, echartsLib })
  afterSetOptionOnce({ props, state, options, echartsLib })
}

export const optionsHandler =
  ({ props, state, emit, echartsLib, api, vm }) =>
  (options) => {
    if (options.tooltip) {
      const defaultTooltip = DEFAULT_CONFIG.tooltip || {}
      options.tooltip = { ...defaultTooltip, ...options.tooltip }
    }
    if (options.legend) {
      const defaultLegend = DEFAULT_CONFIG.legend || {}
      options.legend = { ...defaultLegend, ...options.legend }
    }
    setOptionsLegend({ props, options })
    options.color = state.chartColor
    selfSetting({ props, options })
    setAnimation({ options, animation: props.animation })
    applyMarks({ props, options })
    if (props.extend) {
      setExtend({ options, extend: props.extend })
      options.series.label = { show: false, ...options.series.label }
      options.series.radius = ['25%', '100%']
    }
    options = afterConfig({ props, options })
    let setOptionOpts = mapChartNotMerge(props)
    if (props.notSetUnchange && props.notSetUnchange.length) {
      props.notSetUnchange.forEach((item) => {
        const value = options[item]
        if (value) {
          if (isEqual(value, state.store[item])) {
            options[item] = undefined
          } else {
            state.store[item] = cloneDeep(value)
          }
        }
      })
      if (isObject(setOptionOpts)) {
        setOptionOpts.notMerge = false
      } else {
        setOptionOpts = false
      }
    }
    if (vm._isDestroyed) {
      return
    }
    setOption({ state, options, setOptionOpts, emit, api, props, echartsLib })
  }

export const resizeableHandler =
  ({ api, state }) =>
  (resizeable) => {
    if (resizeable && !state.once.onresize) {
      api.addResizeListener()
    }

    if (!resizeable && state.once.onresize) {
      api.removeResizeListener()
    }
  }

export const init =
  ({ state, props, api, refs, echartsLib, markRaw }) =>
  () => {
    if (state.echarts) {
      return
    }

    const ictThemeName = {}
    const { settings } = props
    if (settings.line) {
      ictThemeName.line = settings.line
    }

    const themeName = props.themeName || props.theme || DEFAULT_THEME
    state.echarts = markRaw(echartsLib.init(refs.canvas, { ...themeName, ...ictThemeName }, props.initOptions))

    if (props.data) {
      api.changeHandler()
    }

    api.createEventProxy()

    if (props.resizeable) {
      api.addResizeListener()
    }
  }

export const addResizeListener =
  ({ state, api }) =>
  () => {
    on(window, 'resize', api.resizeHandler)
    state.once.onresize = true
  }

export const removeResizeListener =
  ({ state, api }) =>
  () => {
    off(window, 'resize', api.resizeHandler)
    state.once.onresize = false
  }

export const addWatchToProps =
  ({ props, watch, api }) =>
  () => {
    Object.keys(props).forEach((prop) => {
      if (!~STATIC_PROPS.indexOf(prop)) {
        const opts = {}

        if (~['[object Object]', '[object Array]'].indexOf(getType(props[prop]))) {
          opts.deep = true
        } else {
          opts.immediate = true
        }

        watch(
          () => prop,
          () => {
            api.changeHandler()
          },
          opts
        )
      }
    })
  }

/*
 * 只要用户使用 on 方法绑定的事件都做一层代理，
 * 是否真正执行相应的事件方法取决于该方法是否仍然存在 events 中
 * 实现 events 的动态响应
 */
export const createEventProxy =
  ({ props, state }) =>
  () => {
    const keys = Object.keys(props.events || {})

    keys.length &&
      keys.forEach((event) => {
        if (!state.registeredEvents.includes(event)) {
          state.registeredEvents.push(event)

          state.echarts.on(
            event,
            (
              (event) =>
              (...args) => {
                if (event in props.events) {
                  props.events[event].apply(null, args)
                }
              }
            )(event)
          )
        }
      })
  }

export const themeChange =
  ({ api, state }) =>
  () => {
    api.clean()
    state.echarts = null
    api.init()
  }

export const clean =
  ({ props, state, api }) =>
  () => {
    if (props.resizeable) {
      api.removeResizeListener()
    }

    state.echarts.dispose()
  }

export const watchOnMounted = ({ api, vm, watch, props, t }) => {
  watch(
    () => props.data,
    (value) => value && api.changeHandler(),
    { deep: true }
  )

  watch(
    () => props.settings,
    (value) => {
      if (value.type && vm.chartLib) {
        api.chartHandler = vm.chartLib[value.type]
      }

      api.changeHandler()
    },
    { deep: true }
  )

  watch(
    () => [props.width, props.height],
    () => api.nextTickResize()
  )

  watch(
    () => props.events,
    () => api.createEventProxy(),
    { deep: true }
  )

  watch(
    () => [props.theme, props.themeName],
    () => api.themeChange()
  )

  watch(
    () => props.resizeable,
    () => api.resizeableHandler()
  )

  // NEXT 。。
  watch(
    () => t('ui.chart.emptyText'),
    () => api.changeHandler()
  )

  watch(
    () => props.extend,
    () => api.changeHandler(),
    { deep: true }
  )
}

export const mounted =
  ({ state, api, vm, props, watch, t }) =>
  () => {
    state.echarts = null
    state.registeredEvents = []
    state.once = {}
    state.store = {}

    api.chartHandler = vm.chartHandler
    api.resizeHandler = debounce(api.resize, props.resizeDelay)
    api.changeHandler = debounce(api.dataHandler, props.changeDelay)

    api.addWatchToProps()
    api.init()
    watchOnMounted({ watch, props, api, vm, t })
  }

export const changeHandler =
  ({ api, props }) =>
  () =>
    debounce(api.dataHandler, props.changeDelay)

export const resizeHandler =
  ({ api, props }) =>
  () =>
    debounce(api.resize, props.resizeDelay)
