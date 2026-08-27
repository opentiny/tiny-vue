import { addResizeListener, removeResizeListener } from '@opentiny/utils'
import { debounce } from '@opentiny/utils'
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
  { onMounted, onBeforeUnmount, reactive, watch }: ISharedRenderlessParamHooks,
  { vm, emit }: ITagGroupRenderlessParamUtils
): ITagGroupApi => {
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
    const delay = 100
    api.debouncedGetHiddenTags = debounce(delay, api.getHiddenTags)
    api.debouncedGetHiddenTags()

    addResizeListener(vm.$refs.tagGroup, api.debouncedGetHiddenTags)
  })

  // Tiny 新增，当标签组的数量发生变化也需要动态计算tip框中的tag标签数量
  watch(
    () => props.data.length,
    () => {
      api.debouncedGetHiddenTags?.()
    }
  )

  onBeforeUnmount(() => {
    removeResizeListener(vm.$refs.tagGroup, api.debouncedGetHiddenTags)
  })

  return api
}
