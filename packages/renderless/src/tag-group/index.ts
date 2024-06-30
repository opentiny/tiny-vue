import type { ITagGroupDataItem, ITagGroupRenderlessParamUtils, ITagGroupRenderlessParams } from '@/types'

export const handelItemClick =
  ({ emit }: Pick<ITagGroupRenderlessParamUtils, 'emit'>) =>
  (item: ITagGroupDataItem, index: number, $event: MouseEvent) => {
    emit('item-click', item, index, $event)
  }

export const getHiddenTags =
  ({ props, vm, state }: Pick<ITagGroupRenderlessParams, 'props' | 'vm' | 'state'>) =>
  () => {
    if (!props.data.length) return
    const tagGroup = vm.$refs.tagGroup || {}
    const tags = tagGroup.children
    const moreDom = vm.$refs.more || {}
    const extrasHeightMap = {
      mini: 4,
      small: 2,
      medium: 0
    }
    const height = tags[0] && tags[0].getBoundingClientRect().height + extrasHeightMap[props.size] + 'px'

    if (tagGroup.style) {
      tagGroup.style.height = height
    }

    if (moreDom.style) {
      moreDom.style.height = height
    }

    state.hiddenTags = []

    Array.from(tags).forEach((el, index) => {
      const item = props.data[index] as ITagGroupDataItem
      const element = el as HTMLElement
      if (element.offsetTop >= element.offsetHeight && item) {
        state.hiddenTags.push({ ...item })
      }
    })

    state.showMore = !!state.hiddenTags.length
  }
