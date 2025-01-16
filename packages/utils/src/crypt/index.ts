import { WordArray } from './core'
import { SHA256 } from './sha256'

async function digestMessage(algo: string, message: any) {
  const isArrayBuffer = Object.prototype.toString.call(message) === '[object ArrayBuffer]'
  const msgUint8 = isArrayBuffer ? message : new TextEncoder().encode(message) // 编码为（utf-8）Uint8Array
  const hashBuffer = await window.crypto.subtle.digest(algo, msgUint8) // 计算消息的哈希值
  const hashArray = Array.from(new Uint8Array(hashBuffer)) // 将缓冲区转换为字节数组
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('') // 将字节数组转换为十六进制字符串

  return hashHex
}

export function sha256(message: any) {
  if (window.crypto.subtle) {
    return digestMessage('SHA-256', message)
  } else {
    const isArrayBuffer = Object.prototype.toString.call(message) === '[object ArrayBuffer]'
    if (isArrayBuffer) {
      return SHA256(new WordArray(message), '').toString()
    } else {
      return SHA256(message, '').toStrsha256
    }
  }
}
