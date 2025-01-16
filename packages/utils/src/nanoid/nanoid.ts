import { getWindow } from '../window'

const _win: any = getWindow()
const reverseUrlAlphabet = 'tcirzywvqlkjhgfbZQG_FLOWHSUBDNIMYREVKCAJxp57XP043891T62-modnaesu'
const urlAlphabet: string = reverseUrlAlphabet.split('').reverse().join('')

let buffer: Uint8Array
let bufferOffset: number

const allocBuffer = (bytes: number): Uint8Array => new Uint8Array(new ArrayBuffer(bytes))

const randomFill = (buffer: Uint8Array): Uint8Array => _win.crypto.getRandomValues(buffer)

const defFillPool = (bytes: number) => {
  if (!buffer || buffer.length < bytes) {
    buffer = allocBuffer(bytes * 128)

    randomFill(buffer)

    bufferOffset = 0
  } else if (bufferOffset + bytes > buffer.length) {
    randomFill(buffer)

    bufferOffset = 0
  }

  bufferOffset += bytes
}

const nanoid = (size = 21) => {
  defFillPool((size -= 0))

  let uniq = ''

  for (let i: number = bufferOffset - size; i < bufferOffset; i++) {
    uniq += urlAlphabet[buffer[i] & 63]
  }

  return uniq
}

const defRandomFunc = (bytes: number) => {
  defFillPool((bytes -= 0))

  return buffer.subarray(bufferOffset - bytes, bufferOffset)
}

const defCustomRandom = (alphabet: string, defaultSize: number, randomFunc: (bytes: number) => Uint8Array) => {
  const mask: number = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
  const step: number = Math.ceil((1.6 * mask * defaultSize) / alphabet.length)

  return (size: number = defaultSize) => {
    let uniq = ''

    while (true) {
      const bytes: Uint8Array = randomFunc(step)
      let i: number = step

      while (i--) {
        uniq += alphabet[bytes[i] & mask] || ''

        if (uniq.length === size) return uniq
      }
    }
  }
}

const customAlphabet = (alphabet: string, defaultSize = 21) => defCustomRandom(alphabet, defaultSize, defRandomFunc)

export { urlAlphabet, nanoid, customAlphabet }
