import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'
import debounce from '../common/deps/debounce'
import { getHiddenTags, handelItemClick } from './index'
import type {
  ISharedRenderlessParamHooks,
  ITagGroupApi,
  ITagGroupProps,
  ITagGroupRenderlessParamUtils,
  ITagGroupState
} from '@/types'

export const api = ['state', 'handelItemClick']

export const renderless = (
  props: ITagGroupProps,
  { onMounted, onBeforeUnmount, reactive }: ISharedRenderlessParamHooks,
  { vm, emit }: ITagGroupRenderlessParamUtils
): ITagGroupApi => {
  const delay = 100

  const state = reactive<ITagGroupState>({
    showMore: false,
    hiddenTags: []
  })

  const api: ITagGroupApi = {
    state,
    getHiddenTags: getHiddenTags({ props, vm, state }),
    handelItemClick: handelItemClick({ emit })
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
