function readScreen(dom, readScreenText) {
  if (readScreenText) {
    dom.setAttribute('tabindex', '0')
    dom.setAttribute('aria-label', readScreenText)
  }
}

export default readScreen
