import {
  buildOption,
  getRenderNode,
  getRenderLink,
  getRenderIcon,
  getRenderLege,
  getTooltip,
  getMarkLine,
  setChartOption,
  setListeners,
  setRiverRgbaOpacity,
  lightUp,
  setRiverIconStyle,
  style,
  computeCanvasStyle,
  getContainerWidth,
  resizeListener
} from './index'
import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'

export const api = ['state', 'lightUp', 'style']

export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, reactive },
  { vm, emit, parent },
  { echarts }
) => {
  const state = reactive({
    myChart: null,
    markLineShow: false,
    lighting: [],
    nameInfo: null,
    styling: [],
    option: null,
    canvasStyle: computed(() => api.computeCanvasStyle()),
    canvasWidth: null,
    canvasTransformOrigin: 'left top',
    canvasTransform: null
  })

  const api = {
    state,
    getRenderLege: getRenderLege(),
    getTooltip: getTooltip(),
    getMarkLine: getMarkLine(),
    setChartOption: setChartOption(state),
    setRiverRgbaOpacity: setRiverRgbaOpacity({ props, state }),
    setRiverIconStyle: setRiverIconStyle(state),
    computeCanvasStyle: computeCanvasStyle({ props, state }),
    getContainerWidth: getContainerWidth(state),
    resizeListener: resizeListener({ props, state })
  }

  Object.assign(api, {
    buildOption: buildOption({ api, emit, props, state, vm }),
    getRenderNode: getRenderNode({ api, echarts }),
    getRenderLink: getRenderLink({ api, echarts }),
    getRenderIcon: getRenderIcon({ api }),
    setListeners: setListeners({ api, emit, state }),
    lightUp: lightUp({ api, state }),
    style: style({ api, state })
  })

  onMounted(() => {
    state.myChart = echarts.init(vm.$el)
    state.containerEl = parent.$parent.$el
    const option = (state.option = api.buildOption())

    api.setChartOption(option)
    api.setListeners(option)

    state.containerEl && addResizeListener(state.containerEl, api.resizeListener)
  })

  onBeforeUnmount(() => {
    state.myChart.off('mousemove')
    state.myChart.getZr().off('mousemove')
    state.myChart.off('click')

    state.myChart = null

    state.containerEl && removeResizeListener(state.containerEl, api.resizeListener)

    state.containerEl = null
  })

  return api
}
