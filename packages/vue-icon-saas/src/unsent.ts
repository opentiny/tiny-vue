import { svg } from '@opentiny/vue-common'
import Unsent from '@opentiny/vue-theme-saas/svgs/unsent.svg'
import UnsentFilled from '@opentiny/vue-theme-saas/svgs/unsent-filled.svg'

const iconFn = () => svg({ name: 'IconUnsent', component: Unsent, filledComponent: UnsentFilled })()
iconFn.__flag = { 'svgName': 'unsent', 'hasFill': true }
export default iconFn
