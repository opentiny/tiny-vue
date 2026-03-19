import { svg } from '@opentiny/vue-common'
import PositionManagement from '@opentiny/vue-theme-saas/svgs/position-management.svg'
import PositionManagementFilled from '@opentiny/vue-theme-saas/svgs/position-management-filled.svg'

const iconFn = () =>
  svg({ name: 'IconPositionManagement', component: PositionManagement, filledComponent: PositionManagementFilled })()
iconFn.__flag = { 'svgName': 'position-management', 'hasFill': true }
export default iconFn
