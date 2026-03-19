import { svg } from '@opentiny/vue-common'
import Close from '@opentiny/vue-theme-saas/svgs/close.svg'
import CloseFilled from '@opentiny/vue-theme-saas/svgs/close-filled.svg'

const iconFn = () => svg({ name: 'IconClose', component: Close, filledComponent: CloseFilled })()
iconFn.__flag = { 'svgName': 'close', 'hasFill': true }
export default iconFn
