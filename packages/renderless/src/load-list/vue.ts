import { clickList, check, clickErrorText } from './index'
import { getScrollParent } from '../common/deps/dom'
import { useRect } from '../common/deps/useRect'
import { useEventListener } from '../common/deps/useEventListener'
import debounce from '../common/deps/debounce'
import type { ILoadListProps, ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from '@/types'

export const api = ['state', 'clickList', 'check', 'clickErrorText']

export const renderless = (
  props: ILoadListProps,
  {
    inject,
    reactive,
    computed,
    onMounted,
    unref,
    watch,
    onUpdated,
    isRef,
    onUnmounted,
    onActivated,
    onDeactivated,
    toRef
  }: ISharedRenderlessParamHooks,
  { emit, vm, nextTick }: ISharedRenderlessParamUtils
) => {
  const api = {}
  const state = reactive({
    loading: props.loading,
    tabStatus: inject('TabStatus', null),
    scrollParent: null,
    scroller: computed(() => props.scroller || state.scrollParent)
  })

  Object.assign(api, {
    state,
    clickList: clickList({ emit, props }),
    useRect: useRect(unref),
    check: debounce(+props.delay, check({ api, emit, props, state, vm })),
    clickErrorText: clickErrorText({ api, emit }),
    useEventListener: useEventListener({
      unref,
      isRef,
      watch,
      nextTick,
      onMounted,
      onUnmounted,
      onActivated,
      onDeactivated
    })
  })

  watch(
    () => [props.loading, props.finished, props.error],
    () => api.check()
  )

  watch(
    () => state.tabStatus,
    (tabActive) => tabActive && api.check()
  )

  api.useEventListener('scroll', api.check, { target: toRef(state, 'scroller'), passive: true })

  onUpdated(() => {
    state.loading = props.loading
  })

  onMounted(() => {
    state.scrollParent = getScrollParent(vm.$el)

    if (props.immediateCheck) {
      api.check()
    }
  })

  return api
}
