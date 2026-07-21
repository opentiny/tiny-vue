import { svg } from '@opentiny/vue-common'
import HelpCircle from '@opentiny/vue-theme-saas/svgs/help-circle.svg'

const iconFn = () => svg({ name: 'IconHelpCircle', component: HelpCircle, filledComponent: HelpCircle })()

iconFn.__flag = { 'svgName': 'help-circle', 'hasFill': false }
export default iconFn
