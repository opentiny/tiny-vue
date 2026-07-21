import { svg } from '@opentiny/vue-common'
import Switch from '@opentiny/vue-theme-saas/svgs/switch.svg'
import SwitchFilled from '@opentiny/vue-theme-saas/svgs/switch-filled.svg'

const iconFn = () => svg({ name: 'IconSwitch', component: Switch, filledComponent: SwitchFilled })()
iconFn.__flag = { 'svgName': 'switch', 'hasFill': true }
export default iconFn
