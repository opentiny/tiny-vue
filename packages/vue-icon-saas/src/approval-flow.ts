import { svg } from '@opentiny/vue-common'
import ApprovalFlow from '@opentiny/vue-theme-saas/svgs/approval-flow.svg'
import ApprovalFlowFilled from '@opentiny/vue-theme-saas/svgs/approval-flow-filled.svg'

const iconFn = () => svg({ name: 'IconApprovalFlow', component: ApprovalFlow, filledComponent: ApprovalFlowFilled })()
iconFn.__flag = { 'svgName': 'approval-flow', 'hasFill': true }
export default iconFn
