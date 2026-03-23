import { svg } from '@opentiny/vue-common'
import HelpSolid from '@opentiny/vue-theme-saas/svgs/help-solid.svg'

const iconFn = () => svg({ name: 'IconHelpSolid', component: HelpSolid, filledComponent: HelpSolid })()

iconFn.__flag = { 'svgName': 'help-solid', 'hasFill': false }
export default iconFn
