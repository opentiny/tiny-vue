import { svg } from '@opentiny/vue-common'
import Busy from '@opentiny/vue-theme-saas/svgs/busy.svg'

const iconFn = () => svg({ name: 'IconBusy', component: Busy, filledComponent: Busy })()

iconFn.__flag = { 'svgName': 'busy', 'hasFill': false }
export default iconFn
