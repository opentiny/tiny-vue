/**
 * 生成 UUID，兼容性降级处理
 * 优先使用 crypto.randomUUID()，失败则使用 Math.random() 降级方案
 * @returns 返回 UUID 的后 8 位
 */
export function generateUUID(): string {
    try {
        return crypto.randomUUID().slice(-8)
    } catch (e) {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0
            const v = c === 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        }).slice(-8)
    }
}