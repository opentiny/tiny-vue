import { svg } from '@opentiny/vue-common'
import SwitchCard from '@opentiny/vue-theme-saas/svgs/switch-card.svg'
import SwitchCardFilled from '@opentiny/vue-theme-saas/svgs/switch-card-filled.svg'

const iconFn = () => svg({ name: 'IconSwitchCard', component: SwitchCard, filledComponent: SwitchCardFilled })()
iconFn.__flag = { 'svgName': 'switch-card', 'hasFill': true }
export default iconFn
