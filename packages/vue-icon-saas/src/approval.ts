import { svg } from '@opentiny/vue-common'
import Approval from '@opentiny/vue-theme-saas/svgs/approval.svg'
import ApprovalFilled from '@opentiny/vue-theme-saas/svgs/approval-filled.svg'

const iconFn = () => svg({ name: 'IconApproval', component: Approval, filledComponent: ApprovalFilled })()
iconFn.__flag = { 'svgName': 'approval', 'hasFill': true }
export default iconFn
