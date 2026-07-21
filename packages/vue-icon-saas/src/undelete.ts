import { svg } from '@opentiny/vue-common'
import Undelete from '@opentiny/vue-theme-saas/svgs/undelete.svg'
import UndeleteFilled from '@opentiny/vue-theme-saas/svgs/undelete-filled.svg'

const iconFn = () => svg({ name: 'IconUndelete', component: Undelete, filledComponent: UndeleteFilled })()
iconFn.__flag = { 'svgName': 'undelete', 'hasFill': true }
export default iconFn
