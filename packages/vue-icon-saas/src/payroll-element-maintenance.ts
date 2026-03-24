import { svg } from '@opentiny/vue-common'
import PayrollElementMaintenance from '@opentiny/vue-theme-saas/svgs/payroll-element-maintenance.svg'
import PayrollElementMaintenanceFilled from '@opentiny/vue-theme-saas/svgs/payroll-element-maintenance-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconPayrollElementMaintenance',
    component: PayrollElementMaintenance,
    filledComponent: PayrollElementMaintenanceFilled
  })()
iconFn.__flag = { 'svgName': 'payroll-element-maintenance', 'hasFill': true }
export default iconFn
