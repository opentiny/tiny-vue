import { isServer } from './dom'

function getIsIOS() {
  if (isServer) return false
  return (
    window.navigator &&
    window.navigator.userAgent &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
      // https://github.com/vueuse/vueuse/issues/3577
      (window.navigator.maxTouchPoints > 2 && /iPad|Macintosh/.test(window.navigator.userAgent)))
  )
}

export const useUserAgent = () => {
  const isIOS = getIsIOS()
  return { isIOS }
}
