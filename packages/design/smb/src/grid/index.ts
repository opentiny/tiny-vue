import { iconError, iconExpand, iconPutAway } from '@opentiny/vue-icon'

export default {
  validConfig: {
    icon: iconError()
  },
  minWidth: 72,
  treeConfig: {
    renderIcon(h, { active }) {
      const IconExpand = iconExpand()
      const IconPutAway = iconPutAway()
      return active ? h(IconExpand) : h(IconPutAway)
    }
  }
}
