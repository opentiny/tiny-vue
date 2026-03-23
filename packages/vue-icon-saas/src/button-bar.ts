import { svg } from '@opentiny/vue-common'
import ButtonBar from '@opentiny/vue-theme-saas/svgs/button-bar.svg'
import ButtonBarFilled from '@opentiny/vue-theme-saas/svgs/button-bar-filled.svg'

const iconFn = () => svg({ name: 'IconButtonBar', component: ButtonBar, filledComponent: ButtonBarFilled })()
iconFn.__flag = { 'svgName': 'button-bar', 'hasFill': true }
export default iconFn
