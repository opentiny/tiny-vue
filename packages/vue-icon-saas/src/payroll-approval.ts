import { svg } from '@opentiny/vue-common'
import PayrollApproval from '@opentiny/vue-theme-saas/svgs/payroll-approval.svg'
import PayrollApprovalFilled from '@opentiny/vue-theme-saas/svgs/payroll-approval-filled.svg'

const iconFn = () =>
  svg({ name: 'IconPayrollApproval', component: PayrollApproval, filledComponent: PayrollApprovalFilled })()
iconFn.__flag = { 'svgName': 'payroll-approval', 'hasFill': true }
export default iconFn
