import { svg } from '@opentiny/vue-common'
import ZoomIn from '@opentiny/vue-theme-saas/svgs/zoom-in.svg'
import ZoomInFilled from '@opentiny/vue-theme-saas/svgs/zoom-in-filled.svg'

const iconFn = () => svg({ name: 'IconZoomIn', component: ZoomIn, filledComponent: ZoomInFilled })()
iconFn.__flag = { 'svgName': 'zoom-in', 'hasFill': true }
export default iconFn
