import type { IDividerStyle, IDividerRenderlessParams } from '@/types'

export const computedRootStyle =
  ({ state, props }: Pick<IDividerRenderlessParams, 'state' | 'props'>) =>
  (): IDividerStyle => {
    return {
      height: props.height || state.height,
      margin: props.margin || state.margin,
      fontSize: props.fontSize
    }
  }
export const computedLineStyle =
  ({ props }: Pick<IDividerRenderlessParams, 'props'>) =>
  (): IDividerStyle => {
    const lineStyle = {
      borderTopStyle: props.borderStyle
    }

    if (props.color) {
      Object.assign(lineStyle, { borderTopColor: props.color })
    }

    return lineStyle
  }

export const computedTextStyle =
  ({ props }: Pick<IDividerRenderlessParams, 'props'>) =>
  (): IDividerStyle => {
    const textStyle = {
      left: 'unset',
      right: 'unset'
    }
    const defaultOffset = '5%'

    if (props.contentPosition === 'left') {
      textStyle.left = props.offset || defaultOffset
    } else if (props.contentPosition === 'right') {
      textStyle.right = props.offset || defaultOffset
    }

    return textStyle
  }

export const setDividerHeight =
  ({ state, props, vm, nextTick }: Pick<IDividerRenderlessParams, 'state' | 'props' | 'vm' | 'nextTick'>) =>
  (): void => {
    const verticalHeight = '12px'

    if (props.direction === 'vertical') {
      state.height = props.height || verticalHeight
    } else {
      nextTick(() => {
        const offsetHeight = vm.$refs.text && vm.$refs.text.offsetHeight
        state.height = props.height || offsetHeight ? offsetHeight + 'px' : 'auto'
      })
    }
  }
