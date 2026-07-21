import { svg } from '@opentiny/vue-common'
import Unfreeze from '@opentiny/vue-theme-saas/svgs/unfreeze.svg'
import UnfreezeFilled from '@opentiny/vue-theme-saas/svgs/unfreeze-filled.svg'

const iconFn = () => svg({ name: 'IconUnfreeze', component: Unfreeze, filledComponent: UnfreezeFilled })()
iconFn.__flag = { 'svgName': 'unfreeze', 'hasFill': true }
export default iconFn
