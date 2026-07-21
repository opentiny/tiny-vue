import { svg } from '@opentiny/vue-common'
import ZoomOut from '@opentiny/vue-theme-saas/svgs/zoom-out.svg'
import ZoomOutFilled from '@opentiny/vue-theme-saas/svgs/zoom-out-filled.svg'

const iconFn = () => svg({ name: 'IconZoomOut', component: ZoomOut, filledComponent: ZoomOutFilled })()
iconFn.__flag = { 'svgName': 'zoom-out', 'hasFill': true }
export default iconFn
