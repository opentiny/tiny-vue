import { svg } from '@opentiny/vue-common'
import PayrollElementCalculation from '@opentiny/vue-theme-saas/svgs/payroll-element-calculation.svg'
import PayrollElementCalculationFilled from '@opentiny/vue-theme-saas/svgs/payroll-element-calculation-filled.svg'

export default () =>
  svg({
    name: 'IconPayrollElementCalculation',
    component: PayrollElementCalculation,
    filledComponent: PayrollElementCalculationFilled
  })()
