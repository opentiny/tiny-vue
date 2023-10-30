import { iconWarning } from '@opentiny/vue-icon'

export default {
  icons: {
    warning: iconWarning()
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
