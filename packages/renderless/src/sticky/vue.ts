import { useRect } from '../common/deps/useRect'
import { useWindowSize } from '../common/deps/useWindowSize'
import { useEventListener } from '../common/deps/useEventListener'
import { useScrollParent } from '../common/deps/dom'
import { computedRootStyle, computedStickyStyle, updateRoot, unitToPx, getRootRect, getTarget } from './index'

export const api = ['state']

export const renderless = (props, hooks, { vm, emit }) => {
  const { reactive, computed, unref, ref, toRef, onMounted, watch } = hooks

  const state = reactive({
    root: null,
    target: null,
    windowHeight: 0,
    windowWidth: 0,
    rootHeight: 0,
    rootWidth: 0,
    rootTop: 0,
    rootBottom: 0,
    isFixed: false,
    scrollTop: 0,
    transform: 0,
    scrollParent: null,
    targetRect: null,
    offset: 0,
    rootStyle: computed(() => api.computedRootStyle()),
    stickyStyle: computed(() => api.computedStickyStyle())
  })

  const api = {}

  Object.assign(api, {
    state,
    computedRootStyle: computedRootStyle({ props, state }),
    computedStickyStyle: computedStickyStyle({ props, state }),
    updateRoot: updateRoot({ props, state, emit, api }),
    getRootRect: getRootRect({ vm, state, api }),
    getTarget: getTarget({ props, state, api }),
    useEventListener: useEventListener(hooks),
    useScrollParent: useScrollParent(hooks),
    useWindowSize: useWindowSize(ref),
    useRect: useRect(unref),
    unitToPx: unitToPx()
  })

  watch(
    () => state.isFixed,
    (value) => {
      emit('change', value)
    }
  )

  watch(
    () => props.offset,
    (value) => {
      state.offset = api.unitToPx(value)
      api.updateRoot()
    },
    { immediate: true }
  )

  const { width, height } = api.useWindowSize()

  state.windowHeight = height
  state.windowWidth = width
  state.scrollParent = api.useScrollParent(toRef(state, 'root'))

  api.useEventListener('scroll', api.updateRoot, { target: toRef(state, 'scrollParent'), passive: true })

  onMounted(() => {
    state.root = vm.$refs.root

    setTimeout(() => {
      api.getTarget()
      api.getRootRect()
      api.updateRoot()
    })
  })

  return api
}
