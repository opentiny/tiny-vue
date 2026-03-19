import { svg } from '@opentiny/vue-common'
import Chooser from '@opentiny/vue-theme-saas/svgs/chooser.svg'
import ChooserFilled from '@opentiny/vue-theme-saas/svgs/chooser-filled.svg'

const iconFn = () => svg({ name: 'IconChooser', component: Chooser, filledComponent: ChooserFilled })()
iconFn.__flag = { 'svgName': 'chooser', 'hasFill': true }
export default iconFn
