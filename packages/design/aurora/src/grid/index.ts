import { IconTriangleUp, IconTriangleDown } from '@opentiny/vue-icon'

export default {
  validConfig: {
    icon: ''
  },
  minWidth: 40,
  treeConfig: {
    renderIcon: false
  },
  icons: {
    // aurora不需要默认排序图标
    sortDefault: null,
    sortAsc: IconTriangleUp(),
    sortDesc: IconTriangleDown()
  },
  stripe: true
}
