import { svg } from '@opentiny/vue-common'
import Unsubmitted from '@opentiny/vue-theme-saas/svgs/unsubmitted.svg'

const iconFn = () => svg({ name: 'IconUnsubmitted', component: Unsubmitted, filledComponent: Unsubmitted })()

iconFn.__flag = { 'svgName': 'unsubmitted', 'hasFill': false }
export default iconFn
