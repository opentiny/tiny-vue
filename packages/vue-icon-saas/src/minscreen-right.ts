import { svg } from '@opentiny/vue-common'
import MinscreenRight from '@opentiny/vue-theme-saas/svgs/minscreen-right.svg'
import MinscreenRightFilled from '@opentiny/vue-theme-saas/svgs/minscreen-right-filled.svg'

const iconFn = () =>
  svg({ name: 'IconMinscreenRight', component: MinscreenRight, filledComponent: MinscreenRightFilled })()
iconFn.__flag = { 'svgName': 'minscreen-right', 'hasFill': true }
export default iconFn
