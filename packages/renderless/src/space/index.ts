import type { ISpaceProps } from '@/types'

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

export const getGapStyle = (props: ISpaceProps) => {
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
