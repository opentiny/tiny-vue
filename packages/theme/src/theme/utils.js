export function flattenObject(obj) {
  const result = {}

  Object.entries(obj).forEach(([key, val]) => {
    if (val && typeof val === 'object')
      Object.assign(result, val)
    else
      result[key] = val
  })

  return result
}
