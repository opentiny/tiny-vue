import { svg } from '@opentiny/vue-common'
import PayrollApplication from '@opentiny/vue-theme-saas/svgs/payroll-application.svg'
import PayrollApplicationFilled from '@opentiny/vue-theme-saas/svgs/payroll-application-filled.svg'

export default () =>
  svg({ name: 'IconPayrollApplication', component: PayrollApplication, filledComponent: PayrollApplicationFilled })()
