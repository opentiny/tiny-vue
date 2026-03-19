import { svg } from '@opentiny/vue-common'
import PushpinSolid from '@opentiny/vue-theme-saas/svgs/pushpin-solid.svg'

const iconFn = () => svg({ name: 'IconPushpinSolid', component: PushpinSolid, filledComponent: PushpinSolid })()

iconFn.__flag = { 'svgName': 'pushpin-solid', 'hasFill': false }
export default iconFn
