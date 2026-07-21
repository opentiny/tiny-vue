import { svg } from '@opentiny/vue-common'
import Pause from '@opentiny/vue-theme-saas/svgs/pause.svg'
import PauseFilled from '@opentiny/vue-theme-saas/svgs/pause-filled.svg'

const iconFn = () => svg({ name: 'IconPause', component: Pause, filledComponent: PauseFilled })()
iconFn.__flag = { 'svgName': 'pause', 'hasFill': true }
export default iconFn
