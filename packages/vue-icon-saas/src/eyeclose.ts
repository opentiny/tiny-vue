import { svg } from '@opentiny/vue-common'
import Eyeclose from '@opentiny/vue-theme-saas/svgs/eyeclose.svg'
import EyecloseFilled from '@opentiny/vue-theme-saas/svgs/eyeclose-filled.svg'

const iconFn = () => svg({ name: 'IconEyeclose', component: Eyeclose, filledComponent: EyecloseFilled })()
iconFn.__flag = { 'svgName': 'eyeclose', 'hasFill': true }
export default iconFn
