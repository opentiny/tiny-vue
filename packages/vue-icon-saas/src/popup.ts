import { svg } from '@opentiny/vue-common'
import Popup from '@opentiny/vue-theme-saas/svgs/popup.svg'

const iconFn = () => svg({ name: 'IconPopup', component: Popup, filledComponent: Popup })()

iconFn.__flag = { 'svgName': 'popup', 'hasFill': false }
export default iconFn
