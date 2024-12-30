import * as _nanoid from './nanoid'
import { isWeb, getWindow } from '../window'

type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array
type GetRandomValues = (array: TypedArray) => TypedArray
type Nanoid = (size?: number) => string
type CustomAlphabet = (alphabet: string, defaultSize?: number) => Nanoid
type Random = (p?: void) => number

interface API {
  urlAlphabet: string
  nanoid: Nanoid
  customAlphabet: CustomAlphabet
}

function isIE(window: any): boolean {
  return isWeb() && (window.document.all || window.document.documentMode) && !window.crypto && window.msCrypto
}

function initForIE(window: any): void {
  if (isIE(window)) {
    window.crypto = window.msCrypto

    const getRandomValuesDef: GetRandomValues = window.crypto.getRandomValues

    window.crypto.getRandomValues = function (array: TypedArray): Array<number> {
      const values: TypedArray = getRandomValuesDef.call(window.crypto, array)
      const result: Array<number> = []

      for (let i = 0; i < array.length; i++) {
        result[i] = values[i]
      }

      return result
    }
  }
}

const _win: any = getWindow()

initForIE(_win)

const MAX_UINT32_PLUS_ONE = 4294967296

const urlAlphabet: string = _nanoid.urlAlphabet
const nanoid: Nanoid = _nanoid.nanoid
const customAlphabet: CustomAlphabet = _nanoid.customAlphabet

export const random: Random = () => {
  if (!isWeb()) {
    return 0
  }

  return _win.crypto.getRandomValues(new _win.Uint32Array(1))[0] / MAX_UINT32_PLUS_ONE
}

export const api: API = {
  urlAlphabet,
  nanoid,
  customAlphabet
}

export default api
