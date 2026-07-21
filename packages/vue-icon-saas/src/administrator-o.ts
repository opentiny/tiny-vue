import { svg } from '@opentiny/vue-common'
import AdministratorO from '@opentiny/vue-theme-saas/svgs/administrator-o.svg'

const iconFn = () => svg({ name: 'IconAdministratorO', component: AdministratorO, filledComponent: AdministratorO })()

iconFn.__flag = { 'svgName': 'administrator-o', 'hasFill': false }
export default iconFn
