import { getWindow } from '../window'

const crypto = getWindow().crypto
let randomWordsArray: any

if (crypto) {
  randomWordsArray = (mBytes: number) => {
    const words = []

    for (let i = 0; i < mBytes; i += 4) {
      words.push(crypto.getRandomValues(new Uint32Array(1))[0])
    }

    return new WordArray(words, mBytes)
  }
} else {
  // Because there is no global crypto property in this context, cryptographically unsafe Math.random() is used.

  randomWordsArray = (mBytes: number) => {
    const words = []

    const r = (m_w: any) => {
      let _m_w = m_w
      let _m_z = 0x3ade68b1
      const _m_k = 0xffffffff

      return () => {
        _m_z = (0x9069 * (_m_z & 0xffff) + (_m_z >> 0x10)) & _m_k
        _m_w = (0x4650 * (_m_w & 0xffff) + (_m_w >> 0x10)) & _m_k
        let result = ((_m_z << 0x10) + _m_w) & _m_k
        result /= 0x100000000
        result += 0.5
        return result * (Math.random() > 0.5 ? 1 : -1)
      }
    }

    for (let i = 0, rcache; i < mBytes; i += 4) {
      const _r = r((rcache || Math.random()) * 0x100000000)

      rcache = _r() * 0x3ade67b7
      words.push((_r() * 0x100000000) | 0)
    }

    return new WordArray(words, mBytes)
  }
}

export class Base {
  // @ts-ignore
  static create(...args) {
    // @ts-ignore
    return new this(...args)
  }

  clone() {
    // @ts-ignore
    const clone = new this.constructor()
    Object.assign(clone, this)
    return clone
  }

  mixIn(properties: any) {
    return Object.assign(this, properties)
  }
}

export class WordArray extends Base {
  words
  sigBytes

  constructor(words: Array<any> = [], sigBytes = words.length * 4) {
    super()

    let arrayTyped: any = words
    // Convert buffers to uint8
    if (arrayTyped instanceof ArrayBuffer) {
      arrayTyped = new Uint8Array(arrayTyped)
    }

    // Convert other array views to uint8
    if (
      arrayTyped instanceof Int8Array ||
      arrayTyped instanceof Uint8ClampedArray ||
      arrayTyped instanceof Int16Array ||
      arrayTyped instanceof Uint16Array ||
      arrayTyped instanceof Int32Array ||
      arrayTyped instanceof Uint32Array ||
      arrayTyped instanceof Float32Array ||
      arrayTyped instanceof Float64Array
    ) {
      arrayTyped = new Uint8Array(arrayTyped.buffer, arrayTyped.byteOffset, arrayTyped.byteLength)
    }

    // Handle Uint8Array
    if (arrayTyped instanceof Uint8Array) {
      // Shortcut
      const typedArrayByteLength = arrayTyped.byteLength

      // Extract bytes
      const _words: Array<any> = []
      for (let i = 0; i < typedArrayByteLength; i += 1) {
        _words[i >>> 2] |= arrayTyped[i] << (24 - (i % 4) * 8)
      }

      this.words = _words
      this.sigBytes = typedArrayByteLength
    } else {
      this.words = words
      this.sigBytes = sigBytes
    }
  }

  static random = randomWordsArray

  toString(encoder = Hex) {
    return encoder.stringify(this)
  }

  concat(wordArray: any) {
    // Shortcuts
    const _words = this.words
    const arrayWords = wordArray.words
    const _sigBytes = this.sigBytes
    const wordSigBytes = wordArray.sigBytes

    // Clamp excess bits
    this.clamp()

    // Concat
    if (_sigBytes % 4) {
      // Copy one byte at a time
      for (let i = 0; i < wordSigBytes; i += 1) {
        const thatByte = (arrayWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff
        _words[(_sigBytes + i) >>> 2] |= thatByte << (24 - ((_sigBytes + i) % 4) * 8)
      }
    } else {
      // Copy one word at a time
      for (let i = 0; i < wordSigBytes; i += 4) {
        _words[(_sigBytes + i) >>> 2] = arrayWords[i >>> 2]
      }
    }
    this.sigBytes += wordSigBytes

    // Chainable
    return this
  }

  clone() {
    const clone = super.clone.call(this)
    clone.words = this.words.slice(0)

    return clone
  }

  clamp() {
    // Shortcuts
    const { words, sigBytes } = this

    words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8)
    words.length = Math.ceil(sigBytes / 4)
  }
}

export const Latin1 = {
  stringify(wordArray: any) {
    // Shortcuts
    const { words, sigBytes } = wordArray

    // Convert
    const latin1Chars = []
    for (let m = 0; m < sigBytes; m += 1) {
      const bite = (words[m >>> 2] >>> (24 - (m % 4) * 8)) & 0xff
      latin1Chars.push(String.fromCharCode(bite))
    }

    return latin1Chars.join('')
  },

  parse(latin1Str: any) {
    // Shortcut
    const latin1StrLength = latin1Str.length

    // Convert
    const words: Array<any> = []
    for (let n = 0; n < latin1StrLength; n += 1) {
      words[n >>> 2] |= (latin1Str.charCodeAt(n) & 0xff) << (24 - (n % 4) * 8)
    }

    return new WordArray(words, latin1StrLength)
  }
}

export const Hex = {
  stringify(wordArray: any) {
    // Shortcuts
    const { words, sigBytes } = wordArray

    // Convert
    const hexChars = []
    for (let m = 0; m < sigBytes; m += 1) {
      const bite = (words[m >>> 2] >>> (24 - (m % 4) * 8)) & 0xff
      hexChars.push((bite >>> 4).toString(16))
      hexChars.push((bite & 0x0f).toString(16))
    }

    return hexChars.join('')
  },

  parse(hexStr: any) {
    // Shortcut
    const hexStrLength = hexStr.length

    // Convert
    const words: Array<any> = []
    for (let n = 0; n < hexStrLength; n += 2) {
      words[n >>> 3] |= parseInt(hexStr.substr(n, 2), 16) << (24 - (n % 8) * 4)
    }

    return new WordArray(words, hexStrLength / 2)
  }
}

export const UTF8 = {
  stringify(wordArray: any) {
    try {
      return decodeURIComponent(escape(Latin1.stringify(wordArray)))
    } catch (e) {
      throw new Error('The UTF-8 data format is incorrect.')
    }
  },

  parse(utf8Str: any) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)))
  }
}

export class BufferedBlockAlgorithm extends Base {
  _minBufferSize
  _nDataBytes: number = 0
  _data: any
  blockSize: number = 0

  constructor() {
    super()
    this._minBufferSize = 0
  }

  _append(data: any) {
    let m_data = data

    if (typeof m_data === 'string') {
      m_data = UTF8.parse(m_data)
    }

    this._data.concat(m_data)
    this._nDataBytes += m_data.sigBytes
  }

  reset() {
    this._data = new WordArray()
    this._nDataBytes = 0
  }

  _process(doFlush: any) {
    let processedWords
    const { _data: data, blockSize } = this
    const dataWords = data.words
    const dataSigBytes = data.sigBytes
    const blockSizeBytes = blockSize * 4

    let mBlocksReady = dataSigBytes / blockSizeBytes
    if (doFlush) {
      mBlocksReady = Math.ceil(mBlocksReady)
    } else {
      mBlocksReady = Math.max((mBlocksReady | 0) - this._minBufferSize, 0)
    }

    const mWordsReady = mBlocksReady * blockSize
    const mBytesReady = Math.min(mWordsReady * 4, dataSigBytes)

    if (mWordsReady) {
      for (let offset = 0; offset < mWordsReady; offset += blockSize) {
        // @ts-ignore
        this._doProcessBlock(dataWords, offset)
      }

      processedWords = dataWords.splice(0, mWordsReady)
      data.sigBytes -= mBytesReady
    }

    return new WordArray(processedWords, mBytesReady)
  }

  clone() {
    const clone = super.clone.call(this)
    clone._data = this._data.clone()

    return clone
  }
}

export class Hasher extends BufferedBlockAlgorithm {
  cfg
  _process: any

  constructor(cfg: any) {
    super()

    this.cfg = Object.assign(new Base(), cfg)
    this.blockSize = 512 / 32

    this.reset()
  }

  static _createHelper(SubHasher: any) {
    return (message: any, cfg: any) => new SubHasher(cfg).finalize(message)
  }

  update(messageUpdate: any) {
    this._append(messageUpdate)
    this._process()

    return this
  }

  reset() {
    super.reset.call(this)
    // @ts-ignore
    this._doReset()
  }

  finalize(messageUpdate: any) {
    if (messageUpdate) {
      this._append(messageUpdate)
    }

    // @ts-ignore
    const hash = this._doFinalize()

    return hash
  }
}
