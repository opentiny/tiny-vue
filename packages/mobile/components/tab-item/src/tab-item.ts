export const $constants = {}

export const tabItemProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  title: String,
  name: String,
  withClose: Boolean,
  disabled: Boolean,
  lazy: Boolean,
  selected: Boolean,
  renderTitle: Function,
  renderSetting: Function
}
