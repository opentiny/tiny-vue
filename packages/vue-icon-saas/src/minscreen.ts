import { svg } from '@opentiny/vue-common'
import Minscreen from '@opentiny/vue-theme-saas/svgs/minscreen.svg'
import MinscreenFilled from '@opentiny/vue-theme-saas/svgs/minscreen-filled.svg'

const iconFn = () => svg({ name: 'IconMinscreen', component: Minscreen, filledComponent: MinscreenFilled })()
iconFn.__flag = { 'svgName': 'minscreen', 'hasFill': true }
export default iconFn
