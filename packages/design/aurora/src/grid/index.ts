import { iconChevronUp, iconChevronDown } from '@opentiny/vue-icon'

export default {
  icons: {
    // aurora不需要默认排序图标
    sortDefault: null,
    sortAsc: iconChevronUp(),
    sortDesc: iconChevronDown(),
  },
  stripe: true
}
