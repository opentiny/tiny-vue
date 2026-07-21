import { svg } from '@opentiny/vue-common'
import Male from '@opentiny/vue-theme-saas/svgs/male.svg'
import MaleFilled from '@opentiny/vue-theme-saas/svgs/male-filled.svg'

const iconFn = () => svg({ name: 'IconMale', component: Male, filledComponent: MaleFilled })()
iconFn.__flag = { 'svgName': 'male', 'hasFill': true }
export default iconFn
