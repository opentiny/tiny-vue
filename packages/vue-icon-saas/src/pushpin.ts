import { svg } from '@opentiny/vue-common'
import Pushpin from '@opentiny/vue-theme-saas/svgs/pushpin.svg'
import PushpinFilled from '@opentiny/vue-theme-saas/svgs/pushpin-filled.svg'

const iconFn = () => svg({ name: 'IconPushpin', component: Pushpin, filledComponent: PushpinFilled })()
iconFn.__flag = { 'svgName': 'pushpin', 'hasFill': true }
export default iconFn
