import { svg } from '@opentiny/vue-common'
import ConfirmPayrollProfile from '@opentiny/vue-theme-saas/svgs/confirm-payroll-profile.svg'
import ConfirmPayrollProfileFilled from '@opentiny/vue-theme-saas/svgs/confirm-payroll-profile-filled.svg'

export default () =>
  svg({
    name: 'IconConfirmPayrollProfile',
    component: ConfirmPayrollProfile,
    filledComponent: ConfirmPayrollProfileFilled
  })()
