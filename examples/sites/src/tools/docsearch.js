import { isSaas } from '../const'

const OPEN_TINY_URL = 'https://opentiny.design'

export const doSearchEverySite = () => {
  window.handleGlobalSearchData = (resolve) => {
    return (data) => {
      if (typeof data.content === 'string') {
        data.content = data.content.replaceAll(OPEN_TINY_URL, window.location.origin)
      }

      if (isSaas) {
        data.content = data.content.replace('/tiny-vue/', '/tiny-vue-saas/')
      }

      resolve(data)
    }
  }
}
