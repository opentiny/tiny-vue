const HIT_CLASS = 'DocSearch-Hit'

const findUrlLink = (target) => {
  if (target?.nodeName?.toLocaleLowerCase?.() === 'a') {
    return target.getAttribute('href')
  } else if (target?.parentElement) {
    return findUrlLink(target.parentElement)
  }
}

const isAlgoliaHitDom = (dom) =>
  dom?.className?.includes?.(HIT_CLASS) || dom?.parentElement?.className?.includes?.(HIT_CLASS)

export const doSearchEverySite = () => {
  window.addEventListener('click', (event) => {
    const target = event.target
    if (isAlgoliaHitDom(target)) {
      const openUrl = findUrlLink(target)
      if (openUrl) {
        const urlObj = new URL(openUrl)
        event.preventDefault()
        window.location.href = openUrl.replace(urlObj.origin, window.location.origin)
      }
    }
  })
}
