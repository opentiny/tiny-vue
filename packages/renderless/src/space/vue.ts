// @opentiny/vue-renderless/space/vue/index.ts
import type { ISpaceProps } from '@/types'
import { getGapStyle } from './index'

export const api = ['state']

export const renderless = (props: ISpaceProps, hooks, { constants }) => {
  const { reactive, computed } = hooks

  const state = reactive({
    gapStyle: computed(() => getGapStyle(props))
  })

  return { state }
}
