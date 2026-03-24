import { svg } from '@opentiny/vue-common'
import MinscreenLeft from '@opentiny/vue-theme-saas/svgs/minscreen-left.svg'
import MinscreenLeftFilled from '@opentiny/vue-theme-saas/svgs/minscreen-left-filled.svg'

const iconFn = () =>
  svg({ name: 'IconMinscreenLeft', component: MinscreenLeft, filledComponent: MinscreenLeftFilled })()
iconFn.__flag = { 'svgName': 'minscreen-left', 'hasFill': true }
export default iconFn
