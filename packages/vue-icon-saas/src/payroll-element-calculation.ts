import { svg } from '@opentiny/vue-common'
import PayrollElementCalculation from '@opentiny/vue-theme-saas/svgs/payroll-element-calculation.svg'
import PayrollElementCalculationFilled from '@opentiny/vue-theme-saas/svgs/payroll-element-calculation-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconPayrollElementCalculation',
    component: PayrollElementCalculation,
    filledComponent: PayrollElementCalculationFilled
  })()
iconFn.__flag = { 'svgName': 'payroll-element-calculation', 'hasFill': true }
export default iconFn
