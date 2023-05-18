import { iconWarningTriangle } from '@opentiny/vue-icon'

export default {
  icons: {
    warning: iconWarningTriangle()
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
