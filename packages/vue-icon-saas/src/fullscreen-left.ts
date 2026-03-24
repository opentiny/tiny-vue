import { svg } from '@opentiny/vue-common'
import FullscreenLeft from '@opentiny/vue-theme-saas/svgs/fullscreen-left.svg'
import FullscreenLeftFilled from '@opentiny/vue-theme-saas/svgs/fullscreen-left-filled.svg'

const iconFn = () =>
  svg({ name: 'IconFullscreenLeft', component: FullscreenLeft, filledComponent: FullscreenLeftFilled })()
iconFn.__flag = { 'svgName': 'fullscreen-left', 'hasFill': true }
export default iconFn
