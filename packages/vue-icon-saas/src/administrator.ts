import { svg } from '@opentiny/vue-common'
import Administrator from '@opentiny/vue-theme-saas/svgs/administrator.svg'
import AdministratorFilled from '@opentiny/vue-theme-saas/svgs/administrator-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAdministrator', component: Administrator, filledComponent: AdministratorFilled })()
iconFn.__flag = { 'svgName': 'administrator', 'hasFill': true }
export default iconFn
