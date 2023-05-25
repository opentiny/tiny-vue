import { iconWarningTriangle, iconPromptExclamation } from '@opentiny/vue-icon'

export default {
  icons: {
    warning: iconWarningTriangle(),
    info: iconPromptExclamation()
  },
  renderless: (props, hooks, { emit }, api) => {
    const state = api.state
    return {
      close() {
        state.show = false
        emit('close')
      }
    }
  }
}
