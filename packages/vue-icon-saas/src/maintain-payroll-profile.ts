import { svg } from '@opentiny/vue-common'
import MaintainPayrollProfile from '@opentiny/vue-theme-saas/svgs/maintain-payroll-profile.svg'
import MaintainPayrollProfileFilled from '@opentiny/vue-theme-saas/svgs/maintain-payroll-profile-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconMaintainPayrollProfile',
    component: MaintainPayrollProfile,
    filledComponent: MaintainPayrollProfileFilled
  })()
iconFn.__flag = { 'svgName': 'maintain-payroll-profile', 'hasFill': true }
export default iconFn
