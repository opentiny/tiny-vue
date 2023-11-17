import { mounted, reRenderWatermark, unmounted, watchProps } from './index'
import { IWatermarkApi } from 'types/watermark.type'

export const api = ['reRenderWatermark']

export const renderless = (props, { onMounted, reactive, watch, computed, onUnmounted }, { constants, vm }) => {
  const api = {} as IWatermarkApi

  const state = reactive({
    watermarkDiv: null,
    observerInstance: null,
    flag: 0,
    font: computed(() => Object.assign(constants.font, props.font))
  })

  Object.assign(api, {
    state,
    reRenderWatermark: reRenderWatermark({ state }),
    mounted: mounted({ vm, state, props }),
    unmounted: unmounted({ state }),
    watchProps: watchProps({ state, vm, props })
  })

  onMounted(api.mounted)
  onUnmounted(api.unmounted)

  watch([props, () => state.flag], api.watchProps)

  return api
}
