import { svg } from '@opentiny/vue-common'
import CrossOrganizationWarehousingList from '@opentiny/vue-theme-saas/svgs/cross-organization-warehousing-list.svg'
import CrossOrganizationWarehousingListFilled from '@opentiny/vue-theme-saas/svgs/cross-organization-warehousing-list-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconCrossOrganizationWarehousingList',
    component: CrossOrganizationWarehousingList,
    filledComponent: CrossOrganizationWarehousingListFilled
  })()
iconFn.__flag = { 'svgName': 'cross-organization-warehousing-list', 'hasFill': true }
export default iconFn
