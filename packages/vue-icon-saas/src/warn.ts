import { svg } from '@opentiny/vue-common'
import Warn from '@opentiny/vue-theme-saas/svgs/warn.svg'

const iconFn = () => svg({ name: 'IconWarn', component: Warn, filledComponent: Warn })()

iconFn.__flag = { 'svgName': 'warn', 'hasFill': false }
export default iconFn
