import { svg } from '@opentiny/vue-common'
import Heartempty from '@opentiny/vue-theme-saas/svgs/heartempty.svg'
import HeartemptyFilled from '@opentiny/vue-theme-saas/svgs/heartempty-filled.svg'

const iconFn = () => svg({ name: 'IconHeartempty', component: Heartempty, filledComponent: HeartemptyFilled })()
iconFn.__flag = { 'svgName': 'heartempty', 'hasFill': true }
export default iconFn
