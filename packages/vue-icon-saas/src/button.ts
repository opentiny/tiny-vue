import { svg } from '@opentiny/vue-common'
import Button from '@opentiny/vue-theme-saas/svgs/button.svg'
import ButtonFilled from '@opentiny/vue-theme-saas/svgs/button-filled.svg'

const iconFn = () => svg({ name: 'IconButton', component: Button, filledComponent: ButtonFilled })()
iconFn.__flag = { 'svgName': 'button', 'hasFill': true }
export default iconFn
