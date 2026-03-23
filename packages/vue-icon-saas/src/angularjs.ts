import { svg } from '@opentiny/vue-common'
import Angularjs from '@opentiny/vue-theme-saas/svgs/angularjs.svg'

const iconFn = () => svg({ name: 'IconAngularjs', component: Angularjs, filledComponent: Angularjs })()

iconFn.__flag = { 'svgName': 'angularjs', 'hasFill': false }
export default iconFn
