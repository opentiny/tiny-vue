import { typeOf } from './type'

// deepCopy
export function deepCopy(val) {
  let o
  const t = typeOf(val)

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return val
  }

  if (t === 'array') {
    for (let i = 0; i < val.length; i++) {
      o.push(deepCopy(val[i]))
    }
  } else if (t === 'object') {
    Object.keys(val).forEach((i) => {
      o[i] = deepCopy(val[i])
    })
  }
  return o
}