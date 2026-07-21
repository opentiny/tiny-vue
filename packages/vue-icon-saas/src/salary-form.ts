import { svg } from '@opentiny/vue-common'
import SalaryForm from '@opentiny/vue-theme-saas/svgs/salary-form.svg'
import SalaryFormFilled from '@opentiny/vue-theme-saas/svgs/salary-form-filled.svg'

const iconFn = () => svg({ name: 'IconSalaryForm', component: SalaryForm, filledComponent: SalaryFormFilled })()
iconFn.__flag = { 'svgName': 'salary-form', 'hasFill': true }
export default iconFn
