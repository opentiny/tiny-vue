import { svg } from '@opentiny/vue-common'
import PauseCircle from '@opentiny/vue-theme-saas/svgs/pause-circle.svg'
import PauseCircleFilled from '@opentiny/vue-theme-saas/svgs/pause-circle-filled.svg'

const iconFn = () => svg({ name: 'IconPauseCircle', component: PauseCircle, filledComponent: PauseCircleFilled })()
iconFn.__flag = { 'svgName': 'pause-circle', 'hasFill': true }
export default iconFn
