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

export const computedSpace = ({ props }: Pick<IStepsRenderlessParams, 'props'>): number | string => {
  const { space } = props
  if (/^\d+$/.test(space)) {
    return `${space}px`
  }

  return space
}
