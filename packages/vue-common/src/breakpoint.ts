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
  const activeBreakpoint = hooks.ref('')
  const prefixes = ['2xl', 'xl', 'lg', 'md', 'sm']
  function createMatchMedia(mediaQueryString) {
    if (isServer) {
      return {
        matches: false,
        media: mediaQueryString,
        addEventListener: () => {},
        removeEventListener: () => {}
      }
    } else {
      return window.matchMedia(mediaQueryString)
    }
  }
  const mediaQuerys = {
    '2xl': createMatchMedia('(min-width:1536px)'),
    'xl': createMatchMedia('(min-width:1280px)'),
    'lg': createMatchMedia('(min-width:1024px)'),
    'md': createMatchMedia('(min-width:768px)'),
    'sm': createMatchMedia('(min-width:640px)')
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
