import type { Field, OptionList } from '../ts'
import { isOptionGroupArray } from './optGroupUtils'

export const filterFieldsByComparator = (field: Field, fields: OptionList<Field>, operator: string) => {
  if (!field.comparator) {
    const filterOutSameName = (fd: Field) => fd.name !== field.name
    if (isOptionGroupArray(fields)) {
      return fields.map((ogs) => ({
        ...ogs,
        options: ogs.options.filter(filterOutSameName)
      }))
    }
    return fields.filter(filterOutSameName)
  }

  const filterByComparator = (fieldToCompare: Field) => {
    if (field.name === fieldToCompare.name) {
      return false
    }
    if (typeof field.comparator === 'string') {
      return field[field.comparator] === fieldToCompare[field.comparator]
    }
    return field.comparator!(fieldToCompare, operator)
  }

  if (isOptionGroupArray(fields)) {
    return fields
      .map((ogs) => ({ ...ogs, options: ogs.options.filter(filterByComparator) }))
      .filter((ogs) => ogs.options.length > 0)
  }

  return fields.filter(filterByComparator)
}
