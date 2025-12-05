import { svg } from '@opentiny/vue-common'
import EmployeeInformation from '@opentiny/vue-theme-saas/svgs/employee-information.svg'
import EmployeeInformationFilled from '@opentiny/vue-theme-saas/svgs/employee-information-filled.svg'

export default () =>
  svg({ name: 'IconEmployeeInformation', component: EmployeeInformation, filledComponent: EmployeeInformationFilled })()
