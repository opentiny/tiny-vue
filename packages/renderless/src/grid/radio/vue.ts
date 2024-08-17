import type { ISharedRenderlessParamHooks } from '@/types'

export const api = ['state']

export const renderless = (props, context: ISharedRenderlessParamHooks, { vm }): any => {
  const { reactive, computed } = context

  const api = {}

  const state = reactive({
    vSize: computed(() => props.size || vm.$parent.size || vm.$parent.vSize)
  })

  Object.assign(api, {
    state
  })

  return api
}
