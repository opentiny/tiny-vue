import { hooks } from '@opentiny/vue-common'

const { ref, watch, isRef } = hooks

/** 慢加载的 v-show 的办法， 灵感来自于: https://github.com/antfu/v-lazy-show
 *  适用场景： 存在初始加载时，不需要显示的区域，但又需要用v-show切换显示。 比如 tabs\collapse\dropdown\cascader\carousel等
 * @example
 * const isShow = ref(false)
 * const { lazyShow: lazyShowPopper } = useLazyShow(isShow)
 *
 * <div v-if="lazyShowPopper" v-show="isShow">
 *   isShow 第一次为true时，才会加载该DOM
 * </div>
 */
export const useLazyShow = (show) => {
  const lazyShow = ref(isRef(show) ? show.value : show)

  if (!lazyShow.value) {
    const stop = watch(show, (v) => v && (lazyShow.value = true) && stop(), { flush: 'sync' })
  }
  return { lazyShow }
}
