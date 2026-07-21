import { svg } from '@opentiny/vue-common'
import DialogBox from '@opentiny/vue-theme-saas/svgs/dialog-box.svg'
import DialogBoxFilled from '@opentiny/vue-theme-saas/svgs/dialog-box-filled.svg'

const iconFn = () => svg({ name: 'IconDialogBox', component: DialogBox, filledComponent: DialogBoxFilled })()
iconFn.__flag = { 'svgName': 'dialog-box', 'hasFill': true }
export default iconFn
