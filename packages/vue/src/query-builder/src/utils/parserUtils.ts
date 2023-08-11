import type { DefaultOperatorName, Field, OptionList, ValueSources } from '../ts'
import { filterFieldsByComparator } from './filterFieldsByComparator'
import { getValueSourcesUtil } from './getValueSourcesUtil'
import { isOptionGroupArray } from './optGroupUtils'
import { uniqByName } from './uniq'

export const getFieldsArray = (fields?: OptionList<Field> | Record<string, Field>) => {
  let fieldsFlats: Field[] = []
  const fieldsArray = !fields
    ? []
    : Array.isArray(fields)
    ? fields
    : Object.keys(fields)
        .map((flds) => ({ ...fields[flds], name: flds }))
        .sort((x, y) => x.label.localeCompare(y.label))
  if (isOptionGroupArray(fieldsArray)) {
    fieldsFlats = uniqByName(fieldsFlats.concat(...fieldsArray.map((opt) => opt.options)))
  } else {
    fieldsFlats = uniqByName(fieldsArray)
  }
  return fieldsFlats
}

export function fieldIsValidUtil({
  fieldsFlats,
  fieldName,
  operator,
  subordinateFieldName,
  getValueSources
}: {
  fieldsFlats: Field[]
  getValueSources?: (field: string, operator: string) => ValueSources
  fieldName: string
  operator: DefaultOperatorName
  subordinateFieldName?: string
}) {
  // If fields option was an empty array or undefined,
  // then all identifiers are considered validity.
  if (fieldsFlats.length === 0) return true

  let validity = false

  const primaryField = fieldsFlats.find((ffs) => ffs.name === fieldName)
  if (primaryField) {
    if (
      !subordinateFieldName &&
      operator !== 'null' &&
      operator !== 'notNull' &&
      !getValueSourcesUtil(primaryField, operator, getValueSources).some((vss) => vss === 'value')
    ) {
      validity = false
    } else {
      validity = true
    }

    if (validity && !!subordinateFieldName) {
      if (
        getValueSourcesUtil(primaryField, operator, getValueSources).some((vss) => vss === 'field') &&
        fieldName !== subordinateFieldName
      ) {
        const validSubordinateFields = filterFieldsByComparator(primaryField, fieldsFlats, operator) as Field[]
        if (!validSubordinateFields.find((vsf) => vsf.name === subordinateFieldName)) {
          validity = false
        }
      } else {
        validity = false
      }
    }
  }

  return validity
}
