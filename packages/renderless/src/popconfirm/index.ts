import type { IPopconfirmRenderlessParams } from '@/types'

export const hide =
  ({ state, emit }: Pick<IPopconfirmRenderlessParams, 'state' | 'emit'>) =>
  () => {
    state.isLock = true
    setTimeout(() => {
      state.isLock = false
    }, 300)

    state.showPopover = false
  }

export const show =
  ({ state, props, emit }: Pick<IPopconfirmRenderlessParams, 'state' | 'props' | 'emit'>) =>
  (trigger) => {
    if ((trigger ? props.trigger !== trigger : !props.reference) || state.isLock || state.showPopover) {
      return
    }

    state.showPopover = true
  }

export const confirm =
  ({ state, api }: Pick<IPopconfirmRenderlessParams, 'state' | 'api'>) =>
  () => {
    state.showPopover = false
    api.handleEmit('confirm')
  }

export const handleEmit =
  ({ state, emit, vm }: Pick<IPopconfirmRenderlessParams, 'state' | 'emit' | 'vm'>) =>
  (type) => {
    let { events = {} } = vm

    if (events[type]) {
      events[type].call(vm, { $modal: vm, type })
    } else {
      emit(type, state)
    }
  }
