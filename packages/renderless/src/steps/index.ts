import { omitText } from '../common/string'
import type { IStepsRenderlessParams, IStepsVisibleConfig, IStepsNodePosConfig } from '@/types'

export const updateStartIndex =
  ({ state, props }: Pick<IStepsRenderlessParams, 'state' | 'props'>) =>
  (): void => {
    const { visibleNum, active } = props
    const maxStartIndex = Math.min(props.data.length - visibleNum, active - Math.floor(visibleNum / 2))

    state.startIndex = Math.max(0, maxStartIndex)
  }

export const isVisibleHandler =
  ({ state, props }: Pick<IStepsRenderlessParams, 'state' | 'props'>) =>
  (index: number): IStepsVisibleConfig => {
    if (index < state.startIndex) {
      return 'hidden-left'
    } else if (index >= state.startIndex + props.visibleNum) {
      return 'hidden-right'
    } else {
      return 'visible'
    }
  }

export const computedRightNodePos =
  ({ state, props }: Pick<IStepsRenderlessParams, 'state' | 'props'>) =>
  (): IStepsNodePosConfig[] => {
    const { data } = props
    const { endIndex } = state
    const dataLength = data.length
    const nodesLength = dataLength - 1 - endIndex

    return Array.from({ length: nodesLength }).map((item, index) => ({
      zIndex: dataLength - index,
      right: -(index + 1) * 4 + 'px'
    }))
  }

export const handleMouseenter =
  ({ state, vm }: Pick<IStepsRenderlessParams, 'state' | 'vm'>) =>
  (e: MouseEvent, placement: string) => {
    const ele = e.target as HTMLElement
    const text = ele.textContent
    const font = window.getComputedStyle(ele).font
    const rect = ele.getBoundingClientRect()
    const res = omitText(text, font, rect.width)
    const popover = vm.$refs.popover

    if (res.o) {
      popover.state.referenceElm = ele
      popover.state.popperElm && (popover.state.popperElm.style.display = 'none')
      popover.doDestroy()

      state.popoverContent = text
      state.popoverVisible = true
      state.popoverPlacement = placement

      setTimeout(popover.updatePopper, 20)
    }
  }

export const handleMouseleave = (state: IStepsRenderlessParams['state']) => (): void => {
  state.popoverVisible = false
}

export const computedSpace = ({ props }: Pick<IStepsRenderlessParams, 'props'>): number | string => {
  const { space = '' } = props
  if (/^\d+$/.test(String(space))) {
    return `${space}px`
  }

  return space
}
