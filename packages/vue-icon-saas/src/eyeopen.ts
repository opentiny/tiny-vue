import { svg } from '@opentiny/vue-common'
import Eyeopen from '@opentiny/vue-theme-saas/svgs/eyeopen.svg'
import EyeopenFilled from '@opentiny/vue-theme-saas/svgs/eyeopen-filled.svg'

const iconFn = () => svg({ name: 'IconEyeopen', component: Eyeopen, filledComponent: EyeopenFilled })()
iconFn.__flag = { 'svgName': 'eyeopen', 'hasFill': true }
export default iconFn
