import { svg } from '@opentiny/vue-common'
import TurnOn from '@opentiny/vue-theme-saas/svgs/turn-on.svg'
import TurnOnFilled from '@opentiny/vue-theme-saas/svgs/turn-on-filled.svg'

const iconFn = () => svg({ name: 'IconTurnOn', component: TurnOn, filledComponent: TurnOnFilled })()
iconFn.__flag = { 'svgName': 'turn-on', 'hasFill': true }
export default iconFn
