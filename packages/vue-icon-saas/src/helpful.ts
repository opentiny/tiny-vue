import { svg } from '@opentiny/vue-common'
import Helpful from '@opentiny/vue-theme-saas/svgs/helpful.svg'
import HelpfulFilled from '@opentiny/vue-theme-saas/svgs/helpful-filled.svg'

const iconFn = () => svg({ name: 'IconHelpful', component: Helpful, filledComponent: HelpfulFilled })()
iconFn.__flag = { 'svgName': 'helpful', 'hasFill': true }
export default iconFn
