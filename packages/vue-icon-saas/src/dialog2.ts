import { svg } from '@opentiny/vue-common'
import Dialog2 from '@opentiny/vue-theme-saas/svgs/dialog2.svg'

const iconFn = () => svg({ name: 'IconDialog2', component: Dialog2, filledComponent: Dialog2 })()

iconFn.__flag = { 'svgName': 'dialog2', 'hasFill': false }
export default iconFn
