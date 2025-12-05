import { svg } from '@opentiny/vue-common'
import MaintainPayrollProfile from '@opentiny/vue-theme-saas/svgs/maintain-payroll-profile.svg'
import MaintainPayrollProfileFilled from '@opentiny/vue-theme-saas/svgs/maintain-payroll-profile-filled.svg'

export default () =>
  svg({
    name: 'IconMaintainPayrollProfile',
    component: MaintainPayrollProfile,
    filledComponent: MaintainPayrollProfileFilled
  })()
