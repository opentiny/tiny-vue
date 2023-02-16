const { randomBytes } = await import('node:crypto')

export const randomValues = (global) => {
  global.crypto = {}
  global.crypto.getRandomValues = function getRandomValues(buf) {
    const bytes = randomBytes(buf.length)
    buf.set(bytes)
    return buf
  }
}
