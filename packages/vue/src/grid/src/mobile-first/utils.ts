import type { Field, FieldConfig } from './type'

export const fnField = (field: Field): string => (typeof field === 'string' ? field : field[0])
export const fnFields = (fields: Array<Field>): Array<string> => fields.map(fnField)
export const fnFieldConfig = (field: Field): FieldConfig => (Array.isArray(field) && field.length > 1 ? field[1] : {})
