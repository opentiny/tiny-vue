import { svg } from '@opentiny/vue-common'
import Dialog from '@opentiny/vue-theme-saas/svgs/dialog.svg'
import DialogFilled from '@opentiny/vue-theme-saas/svgs/dialog-filled.svg'

const iconFn = () => svg({ name: 'IconDialog', component: Dialog, filledComponent: DialogFilled })()
iconFn.__flag = { 'svgName': 'dialog', 'hasFill': true }
export default iconFn
