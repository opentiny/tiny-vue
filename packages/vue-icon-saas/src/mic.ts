import { svg } from '@opentiny/vue-common'
import Mic from '@opentiny/vue-theme-saas/svgs/mic.svg'
import MicFilled from '@opentiny/vue-theme-saas/svgs/mic-filled.svg'

const iconFn = () => svg({ name: 'IconMic', component: Mic, filledComponent: MicFilled })()
iconFn.__flag = { 'svgName': 'mic', 'hasFill': true }
export default iconFn
