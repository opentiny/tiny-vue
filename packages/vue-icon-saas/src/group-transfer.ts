import { svg } from '@opentiny/vue-common'
import GroupTransfer from '@opentiny/vue-theme-saas/svgs/group-transfer.svg'
import GroupTransferFilled from '@opentiny/vue-theme-saas/svgs/group-transfer-filled.svg'

const iconFn = () =>
  svg({ name: 'IconGroupTransfer', component: GroupTransfer, filledComponent: GroupTransferFilled })()
iconFn.__flag = { 'svgName': 'group-transfer', 'hasFill': true }
export default iconFn
