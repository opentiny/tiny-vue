const OPEN_TINY_URL = 'https://opentiny.design'

export const doSearchEverySite = () => {
  window.handleGlobalSearchData = (resolve) => {
    return (data) => {
      if (typeof data.content === 'string') {
        data.content = data.content.replaceAll(OPEN_TINY_URL, window.location.origin)
      }

      resolve(data)
    }
  }
}
