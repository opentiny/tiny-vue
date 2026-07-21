import { svg } from '@opentiny/vue-common'
import Meh from '@opentiny/vue-theme-saas/svgs/meh.svg'
import MehFilled from '@opentiny/vue-theme-saas/svgs/meh-filled.svg'

const iconFn = () => svg({ name: 'IconMeh', component: Meh, filledComponent: MehFilled })()
iconFn.__flag = { 'svgName': 'meh', 'hasFill': true }
export default iconFn
