import { getWindow } from '../window'

/** 生成字节流或字符串的sha256编码 */
export async function sha256(message: ArrayBuffer | string) {
  const isArrayBuffer = Object.prototype.toString.call(message) === '[object ArrayBuffer]'
  const msgUint8 = isArrayBuffer ? message : new TextEncoder().encode(message as string) // 编码为（utf-8）Uint8Array
  const hashBuffer = await getWindow().crypto.subtle.digest('SHA-256', msgUint8) // 计算消息的哈希值
  const hashArray = Array.from(new Uint8Array(hashBuffer)) // 将缓冲区转换为字节数组
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('') // 将字节数组转换为十六进制字符串

  return hashHex
}

export default { sha256 }
