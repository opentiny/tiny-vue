import { iconDownWard } from '@opentiny/vue-icon'

export default {
  icons: {
    dropdownIcon: iconDownWard()
  },
  state: {
    sizeMap: {
      default: 32,
      mini: 24,
      small: 36,
      medium: 40
    },
    spacingHeight: 0,
    initialInputHeight: 32
  }
}
