import { toogleRecord, handleConfirm, watchModelValue, renderAudioGraph, unmounted, resetRecord } from './index'

export const api = ['state', 'toogleRecord', 'handleConfirm']

const initState = ({ api, reactive, computed }) => {
  const state = reactive({
    record: {
      status: 'ready',
      currentTime: 0
    },
    recodeTime: computed(() => {
      const time = parseInt(state.record.currentTime)
      const minute = Math.floor(time / 60)
      const second = Math.floor(time % 60)
      return `${minute.toString().padStart(2, 0)}:${second.toString().padStart(2, 0)}`
    })
  })

  Object.assign(api, { state })

  return state
}

const initApi = ({ api, state, emit, vm, constants }) => {
  Object.assign(api, {
    toogleRecord: toogleRecord({ state, api, emit, constants }),
    handleConfirm: handleConfirm({ state, emit }),
    watchModelValue: watchModelValue({ api }),
    renderAudioGraph: renderAudioGraph({ vm, state }),
    unmounted: unmounted({ api }),
    resetRecord: resetRecord({ state, constants })
  })
}

const initWatch = ({ watch, props, api }) => {
  watch(() => props.modelValue, api.watchModelValue, { immediate: true })
}

export const renderless = (props, { reactive, watch, computed, onUnmounted }, { emit, vm, constants }) => {
  const api = {}

  const state = initState({ api, reactive, computed })
  initApi({ api, state, emit, vm, constants })
  initWatch({ watch, props, api })

  onUnmounted(() => api.unmounted)

  return api
}
