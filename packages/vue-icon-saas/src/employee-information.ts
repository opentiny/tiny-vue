import { svg } from '@opentiny/vue-common'
import EmployeeInformation from '@opentiny/vue-theme-saas/svgs/employee-information.svg'
import EmployeeInformationFilled from '@opentiny/vue-theme-saas/svgs/employee-information-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEmployeeInformation', component: EmployeeInformation, filledComponent: EmployeeInformationFilled })()
iconFn.__flag = { 'svgName': 'employee-information', 'hasFill': true }
export default iconFn
