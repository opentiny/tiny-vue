import { WordArray, Hasher } from './core'

// Initialization and round constants tables
const H: Array<any> = []
const K: Array<any> = []
const W: Array<any> = []

let n = 2
let mPrime = 0

const isPrime = (n: number) => {
  const sqrtN = Math.sqrt(n)
  for (let fact = 2; fact <= sqrtN; fact += 1) {
    if (!(n % fact)) {
      return false
    }
  }

  return true
}

const getFractionalBits = (n: number) => ((n - (n | 0)) * 0x100000000) | 0

while (mPrime < 64) {
  if (isPrime(n)) {
    if (mPrime < 8) {
      H[mPrime] = getFractionalBits(n ** (1 / 2))
    }
    K[mPrime] = getFractionalBits(n ** (1 / 3))

    mPrime += 1
  }

  n += 1
}

export class SHA256Algo extends Hasher {
  _hash: any
  declare _data: any

  _doReset() {
    this._hash = new WordArray(H.slice(0))
  }

  _doProcessBlock(N: Array<any>, offset: number) {
    // Shortcut
    const _W = this._hash.words

    // Working variables
    let a = _W[0]
    let b = _W[1]
    let c = _W[2]
    let d = _W[3]
    let e = _W[4]
    let f = _W[5]
    let g = _W[6]
    let h = _W[7]

    // Computation
    for (let i = 0; i < 64; i += 1) {
      if (i < 16) {
        W[i] = N[offset + i] | 0
      } else {
        const alpha0x = W[i - 15]
        const alpha0 = ((alpha0x << 25) | (alpha0x >>> 7)) ^ ((alpha0x << 14) | (alpha0x >>> 18)) ^ (alpha0x >>> 3)

        const alpha1x = W[i - 2]
        const alpha1 = ((alpha1x << 15) | (alpha1x >>> 17)) ^ ((alpha1x << 13) | (alpha1x >>> 19)) ^ (alpha1x >>> 10)

        W[i] = alpha0 + W[i - 7] + alpha1 + W[i - 16]
      }

      const sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22))
      const sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25))

      const ch = (e & f) ^ (~e & g)
      const maj = (a & b) ^ (a & c) ^ (b & c)

      const g1 = h + sigma1 + ch + K[i] + W[i]
      const g2 = sigma0 + maj

      h = g
      g = f
      f = e
      e = (d + g1) | 0
      d = c
      c = b
      b = a
      a = (g1 + g2) | 0
    }

    // Intermediate hash value
    _W[0] = (_W[0] + a) | 0
    _W[1] = (_W[1] + b) | 0
    _W[2] = (_W[2] + c) | 0
    _W[3] = (_W[3] + d) | 0
    _W[4] = (_W[4] + e) | 0
    _W[5] = (_W[5] + f) | 0
    _W[6] = (_W[6] + g) | 0
    _W[7] = (_W[7] + h) | 0
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data
    const dataWords = data.words

    const _nBitsTotal = this._nDataBytes * 8
    const _nBitsLeft = data.sigBytes * 8

    // Add padding
    dataWords[_nBitsLeft >>> 5] |= 0x80 << (24 - (_nBitsLeft % 32))
    dataWords[(((_nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(_nBitsTotal / 0x100000000)
    dataWords[(((_nBitsLeft + 64) >>> 9) << 4) + 15] = _nBitsTotal
    data.sigBytes = dataWords.length * 4

    this._process()

    return this._hash
  }

  clone() {
    const clone = super.clone.call(this)
    clone._hash = this._hash.clone()

    return clone
  }
}

export const SHA256 = Hasher._createHelper(SHA256Algo)
