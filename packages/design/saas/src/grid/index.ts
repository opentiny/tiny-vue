import { IconTriangleDown, IconTriangleUp } from '@opentiny/vue-icon-saas'

export default {
  validConfig: {
    icon: ''
  },
  minWidth: 40,
  treeConfig: {
    renderIcon: false
  },
  icons: {
    // saas不需要默认排序图标
    sortDefault: null,
    sortAsc: IconTriangleUp(),
    sortDesc: IconTriangleDown()
  }
}
