import { hooks as Vue } from '@opentiny/vue-common'
import { computedEager } from '@vueuse/core'
import { isServer } from '@opentiny/utils'

const { inject, getCurrentInstance, unref } = Vue
export interface TyIdInjectionContext {
  prefix: string | number
  current: number
}
interface useIdParams {
  nameSpace?: string
  length?: number
  deterministicId?: Vue.Ref<string> | string
}
/**
 * 用于Vue provide/inject的注入键，共享ID生成器状态。
 */
export const ID_INJECTION_KEY: Vue.InjectionKey<TyIdInjectionContext> = Symbol('tiny-vue-id-injection')

/**
 * 默认的ID注入上下文，当provide未提供时使用。
 */
const defaultIdInjection: TyIdInjectionContext = {
  prefix: Math.floor(Math.random() * 1000000),
  current: 0
}

/**
 * 获取ID注入上下文的组合式函数，会尝试从组件树中注入，若失败则返回默认上下文。
 */
export const useIdInjection = (): TyIdInjectionContext => {
  return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection
}

/**
 * 生成唯一的ID，支持SSR，避免水合不匹配。
 *
 * @param {useIdParams} options - 配置选项。
 * @param {string} [options.nameSpace] - ID命名空间。
 * @param {number} [options.length] - ID中数字部分的长度。
 * @param {Ref<string> | string} [options.deterministicId] - 一个确定的ID，如果提供，则直接返回该ID。
 * @returns {string} 生成的唯一ID。
 */
let useIdFromVue: (() => string) | null = null
export const useId = ({ nameSpace = '', length = 8, deterministicId }: useIdParams): string => {
  // 判断vue自身是否有useId(vue3.5+）
  const hasVueUseId = parseFloat(Vue.version) >= 3.5
  // 如果vue自身有useId，则优先使用vue自身的useId
  if (!useIdFromVue && hasVueUseId) {
    try {
      // eslint-disable-next-line dot-notation
      useIdFromVue = (Vue as any)?.['useId'] || null
    } catch (e) {
      useIdFromVue = null
    }
  }
  const idFromVue = useIdFromVue ? useIdFromVue() : null
  const idInjection = useIdInjection()
  // 在SSR期间，如果使用的是默认ID注入上下文，会发出警告。
  // 随机前缀会导致客户端与服务端ID不一致，从而引发水合错误。
  if (isServer && idInjection === defaultIdInjection) {
    console.warn(
      'IdInjection',
      `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`
    )
  }

  const current = idInjection.current++
  const currentStr = String(current)
  // 如果数字长度小于指定长度，前面补0
  const paddedCurrent =
    idFromVue || (currentStr.length >= length ? currentStr : '0'.repeat(length - currentStr.length) + currentStr)
  const idRef = computedEager(() => unref(deterministicId) || `${nameSpace}id-${idInjection.prefix}-${paddedCurrent}`)
  return idRef.value
}
