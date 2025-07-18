import { computed } from 'vue'

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

export const getGapStyle = ({ props }) => {
  return computed(() => {
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
  })
}

export const getAlignStyle = ({ props }) =>
  computed(() => ({
    alignItems: props.align || 'flex-start'
  }))

export const getJustifyStyle = ({ props }) =>
  computed(() => ({
    justifyContent: props.justify || 'flex-start'
  }))

export const getWrapStyle = ({ props }) =>
  computed(() => ({
    flexWrap: props.wrap ? 'wrap' : 'nowrap'
  }))

export const getDirectionStyle = ({ props }) =>
  computed(() => ({
    flexDirection: props.direction || 'row'
  }))

export const getSpaceStyle = ({ api }) =>
  computed(() => ({
    display: 'flex',
    ...api.getDirectionStyle.value,
    ...api.getGapStyle.value,
    ...api.getAlignStyle.value,
    ...api.getJustifyStyle.value,
    ...api.getWrapStyle.value
  }))
