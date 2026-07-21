import { svg } from '@opentiny/vue-common'
import HelpQuery from '@opentiny/vue-theme-saas/svgs/help-query.svg'

const iconFn = () => svg({ name: 'IconHelpQuery', component: HelpQuery, filledComponent: HelpQuery })()

iconFn.__flag = { 'svgName': 'help-query', 'hasFill': false }
export default iconFn
