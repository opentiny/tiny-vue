import { onUnmounted, ref, type MaybeRef } from 'vue'

/** 延时触发的通用定时器。  setTimeout/ debounce 的地方均由该函数代替。
 *  比如按钮禁用， 1秒后修改disable为false
 * 1、 防止连续触发
 * 2、 组件卸载时，自动取消
 * @example
 * const {start: resetDisabled } = useTimer(()=> state.disabled=false,  1000)
 * resetDisabled();
 *
 * const {start: debounceQuery } = useTimer((page)=> grid.query(page),  500)
 * debounceQuery(1);
 * debounceQuery(2);  // 仅请求第2页
 */
export function useTimer(cb: (...args: any[]) => void, delay: MaybeRef<number>) {
  let timerId = 0
  const $delay = ref(delay)

  function start(...args: any[]) {
    clear()
    timerId = setTimeout(() => {
      cb(...args)
      timerId = 0
    }, $delay.value)
  }
  function clear() {
    if (timerId) {
      clearTimeout(timerId)
      timerId = 0
    }
  }

  onUnmounted(() => clear())

  return { start, clear, delay: $delay }
}
