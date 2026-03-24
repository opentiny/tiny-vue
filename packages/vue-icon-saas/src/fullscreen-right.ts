import { svg } from '@opentiny/vue-common'
import FullscreenRight from '@opentiny/vue-theme-saas/svgs/fullscreen-right.svg'

const iconFn = () =>
  svg({ name: 'IconFullscreenRight', component: FullscreenRight, filledComponent: FullscreenRight })()

iconFn.__flag = { 'svgName': 'fullscreen-right', 'hasFill': false }
export default iconFn
