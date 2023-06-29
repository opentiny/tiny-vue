import {
  toogleRecord,
  handleConfirm,
  watchModelValue,
  renderAudioGraph,
  unmounted,
  resetRecord,
  handleCancel,
  triggerClick,
  watchRecordStatus,
  calcRecordTime
} from './index'

export const api = ['state', 'toogleRecord', 'handleConfirm', 'handleCancel']

const initState = ({ vm, api, reactive, computed }) => {
  const state = reactive({
    listeners: vm.$listeners,
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

const initApi = ({ api, state, emit, vm, constants, props, nextTick }) => {
  Object.assign(api, {
    toogleRecord: toogleRecord({ state, api, emit, constants, props }),
    handleConfirm: handleConfirm({ state, emit, props, constants, api }),
    watchModelValue: watchModelValue({ api }),
    renderAudioGraph: renderAudioGraph({ vm, nextTick, state, props }),
    unmounted: unmounted({ api }),
    resetRecord: resetRecord({ state, constants }),
    handleCancel: handleCancel({ emit, props, constants, api, state }),
    triggerClick: triggerClick({ state }),
    watchRecordStatus: watchRecordStatus({ api, props, constants, state }),
    calcRecordTime: calcRecordTime({ state })
  })
}

const initWatch = ({ watch, props, api, state }) => {
  watch(() => props.modelValue, api.watchModelValue, { immediate: true })
  watch(() => state.record.status, api.watchRecordStatus)
}

export const renderless = (props, { reactive, watch, computed, onUnmounted, nextTick }, { emit, vm, constants }) => {
  const api = {}

  const state = initState({ vm, api, reactive, computed })
  initApi({ api, state, emit, vm, constants, props, nextTick })
  initWatch({ watch, props, api, state })

  onUnmounted(api.unmounted)

  return api
}
