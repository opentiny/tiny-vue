export default {
  api: ['close', 'show', 'toggle'],
  renderless: (props, hooks, { emit }, api) => {
    return {
      close() {
        api.doClose()
      },
      show() {
        api.doShow()
      },
      toggle() {
        api.doToggle()
      }
    }
  }
}
