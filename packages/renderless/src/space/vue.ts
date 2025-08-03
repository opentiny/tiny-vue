// @opentiny/vue-renderless/space/vue/index.ts
import type { ISpaceProps } from '@/types'
import { getGapStyle } from './index'

export const api = ['state']

export const renderless = (props: ISpaceProps, hooks, { constants }) => {
  const { watch, reactive } = hooks

  const state = reactive({
    gapStyle: getGapStyle(props)
  })

  watch(
    () => props.size,
    () => {
      state.gapStyle = getGapStyle(props)
    },
    { immediate: true }
  )

  return { state }
}
