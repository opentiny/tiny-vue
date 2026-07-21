import { svg } from '@opentiny/vue-common'
import ConfirmPayrollProfile from '@opentiny/vue-theme-saas/svgs/confirm-payroll-profile.svg'
import ConfirmPayrollProfileFilled from '@opentiny/vue-theme-saas/svgs/confirm-payroll-profile-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconConfirmPayrollProfile',
    component: ConfirmPayrollProfile,
    filledComponent: ConfirmPayrollProfileFilled
  })()
iconFn.__flag = { 'svgName': 'confirm-payroll-profile', 'hasFill': true }
export default iconFn
