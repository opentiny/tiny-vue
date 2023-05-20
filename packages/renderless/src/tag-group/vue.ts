import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'
import debounce from '../common/deps/debounce'
import { getHiddenTags } from './index'

export const api = ['state']

export const renderless = (props, { onMounted, onBeforeUnmount, reactive }, { vm }) => {
  const delay = 100

  const state = reactive({
    showMore: false,
    hiddenTags: []
  })

  const api = {
    state,
    getHiddenTags: getHiddenTags({ props, vm, state })
  }

  onMounted(() => {
    api.getHiddenTags()
    api.debouncedGetHiddenTags = debounce(delay, api.getHiddenTags)
    addResizeListener(vm.$refs.tagGroup, debounce(delay, api.debouncedGetHiddenTags))
  })

  onBeforeUnmount(() => {
    removeResizeListener(vm.$refs.tagGroup, api.debouncedGetHiddenTags)
  })

  return api
}
