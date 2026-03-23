import { svg } from '@opentiny/vue-common'
import Acceptance from '@opentiny/vue-theme-saas/svgs/acceptance.svg'
import AcceptanceFilled from '@opentiny/vue-theme-saas/svgs/acceptance-filled.svg'

const iconFn = () => svg({ name: 'IconAcceptance', component: Acceptance, filledComponent: AcceptanceFilled })()
iconFn.__flag = { 'svgName': 'acceptance', 'hasFill': true }
export default iconFn
