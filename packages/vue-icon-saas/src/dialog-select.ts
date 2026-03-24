import { svg } from '@opentiny/vue-common'
import DialogSelect from '@opentiny/vue-theme-saas/svgs/dialog-select.svg'
import DialogSelectFilled from '@opentiny/vue-theme-saas/svgs/dialog-select-filled.svg'

const iconFn = () => svg({ name: 'IconDialogSelect', component: DialogSelect, filledComponent: DialogSelectFilled })()
iconFn.__flag = { 'svgName': 'dialog-select', 'hasFill': true }
export default iconFn
