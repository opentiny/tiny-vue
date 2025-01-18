import { type } from '@opentiny/utils'

export const toPxStyle = (value: string | number): undefined | string => {
  if (type.isNull(value)) {
    return undefined
  }

  if (type.isNumber(value)) {
    return `${value}px`
  }

  return String(value)
}
