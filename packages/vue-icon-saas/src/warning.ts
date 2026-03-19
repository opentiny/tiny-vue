import { svg } from '@opentiny/vue-common'
import Warning from '@opentiny/vue-theme-saas/svgs/warning.svg'

const iconFn = () => svg({ name: 'IconWarning', component: Warning, filledComponent: Warning })()

iconFn.__flag = { 'svgName': 'warning', 'hasFill': false }
export default iconFn
