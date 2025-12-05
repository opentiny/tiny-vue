import { svg } from '@opentiny/vue-common'
import PayrollApproval from '@opentiny/vue-theme-saas/svgs/payroll-approval.svg'
import PayrollApprovalFilled from '@opentiny/vue-theme-saas/svgs/payroll-approval-filled.svg'

export default () =>
  svg({ name: 'IconPayrollApproval', component: PayrollApproval, filledComponent: PayrollApprovalFilled })()
