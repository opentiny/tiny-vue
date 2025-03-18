/** 生成字节流或字符串的sha256编码
 * @param message - 需要计算哈希值的消息（字符串或ArrayBuffer）
 * @returns 返回消息的SHA-256哈希值（十六进制字符串）
 */
export async function sha256(message: ArrayBuffer | string): Promise<string> {
  // 判断输入是否为ArrayBuffer类型
  const isArrayBuffer: boolean = Object.prototype.toString.call(message) === '[object ArrayBuffer]'
  // 编码为（utf-8）Uint8Array，确保输入符合BufferSource类型要求
  const msgUint8: ArrayBuffer = isArrayBuffer ? (message as ArrayBuffer) : new TextEncoder().encode(message as string) // 编码为（utf-8）Uint8Array
  // 计算消息的哈希值
  const hashBuffer: ArrayBuffer = await globalThis.crypto.subtle.digest('SHA-256', msgUint8)
  // 将缓冲区转换为字节数组
  const hashArray: number[] = Array.from(new Uint8Array(hashBuffer))
  // 将字节数组转换为十六进制字符串
  const hashHex: string = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')

  return hashHex
}
