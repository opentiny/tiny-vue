import { createShepherd, mounted } from './index'

export const api = ['state']

export const renderless = (props, { reactive, onMounted, watch }, { designConfig }, { Shepherd, offset }) => {
  const state = reactive({
    tour: null,
    tour1: null,
    showStep: false,
    domData: props.domData || null,
    mainAxis: props.mainAxis,
    crossAxis: props.crossAxis,
    alignmentAxis: props.alignmentAxis,
    popPosition: props.popPosition,
    modalOverlayOpeningPadding: props.modalOverlayOpeningPadding,
    modalOverlayOpeningRadius: props.modalOverlayOpeningRadius,
    arrow: props.arrow,
    lightClass: props.lightClass
  })

  let baseApi = {
    state,
    createShepherd: createShepherd({ state, props, Shepherd, offset, designConfig })
  }

  const api = {
    ...baseApi,
    mounted: mounted({ state, api: baseApi })
  }

  watch(() => props.showStep, api.createShepherd)

  onMounted(api.mounted)
  return api
}
