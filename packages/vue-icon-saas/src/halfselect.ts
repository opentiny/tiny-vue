import { svg } from '@opentiny/vue-common'
import Halfselect from '@opentiny/vue-theme-saas/svgs/halfselect.svg'

const iconFn = () => svg({ name: 'IconHalfselect', component: Halfselect, filledComponent: Halfselect })()

iconFn.__flag = { 'svgName': 'halfselect', 'hasFill': false }
export default iconFn
