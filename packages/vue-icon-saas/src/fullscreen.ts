import { svg } from '@opentiny/vue-common'
import Fullscreen from '@opentiny/vue-theme-saas/svgs/fullscreen.svg'
import FullscreenFilled from '@opentiny/vue-theme-saas/svgs/fullscreen-filled.svg'

const iconFn = () => svg({ name: 'IconFullscreen', component: Fullscreen, filledComponent: FullscreenFilled })()
iconFn.__flag = { 'svgName': 'fullscreen', 'hasFill': true }
export default iconFn
