import hooks from './adapter'
import { isServer } from '@opentiny/vue-renderless/common/deps/dom'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'

/**
 * 组合使用 Tailwind 的响应性断点状态
 *
 * @example
 * const breakpoint = useBreakpoint()
 * watch(breakpoint.current, (current) => { console.log(current) })
 */
export const useBreakpoint = () => {
  if (isServer) return

  const activeBreakpoint = hooks.ref('')
  const prefixes = ['2xl', 'xl', 'lg', 'md', 'sm']
  const mediaQuerys = {
    '2xl': window.matchMedia('(min-width:1536px)'),
    'xl': window.matchMedia('(min-width:1280px)'),
    'lg': window.matchMedia('(min-width:1024px)'),
    'md': window.matchMedia('(min-width:768px)'),
    'sm': window.matchMedia('(min-width:640px)')
  }

  type MediaQuerysKey = keyof typeof mediaQuerys

  const setActiveBreakpoint = () => {
    for (let i = 0; i < prefixes.length; i++) {
      const key = prefixes[i]

      if (mediaQuerys[key as MediaQuerysKey].matches) {
        activeBreakpoint.value = key
        return
      }
    }

    activeBreakpoint.value = 'default'
  }

  const mediaQueryListener: any = debounce(0, () => setActiveBreakpoint())

  setActiveBreakpoint()

  prefixes.forEach((key) => mediaQuerys[key as MediaQuerysKey].addEventListener('change', mediaQueryListener))

  hooks.onBeforeUnmount(() => {
    prefixes.forEach((key) => mediaQuerys[key as MediaQuerysKey].removeEventListener('change', mediaQueryListener))
  })

  return { current: activeBreakpoint }
}
