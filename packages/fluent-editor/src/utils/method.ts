/** Detect free variable `global` from Node.js. */
const freeGlobal =
  typeof global === 'object' &&
  global !== null &&
  global.Object === Object &&
  global

/** Detect free variable `globalThis` */
const freeGlobalThis =
  typeof globalThis === 'object' &&
  globalThis !== null &&
  globalThis.Object == Object &&
  globalThis

/** Detect free variable `self`. */
const freeSelf =
  typeof self === 'object' && self !== null && self.Object === Object && self

/** Used as a reference to the global object. */
export const root =
  freeGlobalThis || freeGlobal || freeSelf || Function('return this')()

export function isObject(value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export function compareArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

export function compareObject(object1, object2) {
  let o1keys = Object.keys(object1)
  let o2keys = Object.keys(object2)
  if (o2keys.length !== o1keys.length) return false
  for (let i = 0; i <= o1keys.length - 1; i++) {
    let key = o1keys[i]
    if (!o2keys.includes(key)) return false
    if (!compare(object2[key], object1[key])) return false
  }
  return true
}

export function compare(value, other) {
  if (value === other) {
    return true
  }
  if (value instanceof Array && other instanceof Array) {
    return compareArray(value, other)
  }
  if (value instanceof Function || other instanceof Function) {
    return false
  }
  if (value instanceof Object && other instanceof Object) {
    return compareObject(value, other)
  }
  return false
}

export function unshiftString(str: string, targetLength: number, addString: string): string {
  targetLength = targetLength > 0 ? targetLength : 0;
  addString = String((typeof addString !== 'undefined' && typeof addString !== 'object') ? addString : ' ');
  str = (str === undefined || str === null) ? '' : String(str);
  if (str.length >= targetLength) {
    return String(str);
  } else {
    targetLength = targetLength - str.length;
    if (targetLength > addString.length) {
      addString += addString.repeat(targetLength / addString.length);
    }
    return addString.slice(0, targetLength) + String(str);
  }
}
