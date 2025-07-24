import type { SpaceProps } from '@/types'

const sizeMap = {
  small: '8px',
  medium: '16px',
  large: '24px'
} as const

const parseGap = (gap: string | number): string => {
  if (typeof gap === 'number') return `${gap}px`
  if (gap in sizeMap) return sizeMap[gap as keyof typeof sizeMap]
  if (typeof gap === 'string') return gap
  return '0px'
}

export const getGapStyle = (props: SpaceProps) => {
  const gapProp = props.size

  if (Array.isArray(gapProp)) {
    const [horizontal, vertical] = gapProp
    return {
      gap: `${parseGap(vertical)} ${parseGap(horizontal)}`
    }
  }

  return {
    gap: parseGap(gapProp)
  }
}

export const getAlignStyle = (props: SpaceProps) => ({
  alignItems: props.align || 'flex-start'
})

export const getJustifyStyle = (props: SpaceProps) => ({
  justifyContent: props.justify || 'flex-start'
})

export const getWrapStyle = (props: SpaceProps) => ({
  flexWrap: props.wrap ? 'wrap' : 'nowrap'
})

export const getDirectionStyle = (props: SpaceProps) => ({
  flexDirection: props.direction || 'row'
})

export const getSpaceStyle = (props: SpaceProps) => ({
  display: 'flex',
  ...getDirectionStyle(props),
  ...getGapStyle(props),
  ...getAlignStyle(props),
  ...getJustifyStyle(props),
  ...getWrapStyle(props)
})
