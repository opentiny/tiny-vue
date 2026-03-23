import { svg } from '@opentiny/vue-common'
import Calculator from '@opentiny/vue-theme-saas/svgs/calculator.svg'
import CalculatorFilled from '@opentiny/vue-theme-saas/svgs/calculator-filled.svg'

const iconFn = () => svg({ name: 'IconCalculator', component: Calculator, filledComponent: CalculatorFilled })()
iconFn.__flag = { 'svgName': 'calculator', 'hasFill': true }
export default iconFn
