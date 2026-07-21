import { svg } from '@opentiny/vue-common'
import Frown from '@opentiny/vue-theme-saas/svgs/frown.svg'

const iconFn = () => svg({ name: 'IconFrown', component: Frown, filledComponent: Frown })()

iconFn.__flag = { 'svgName': 'frown', 'hasFill': false }
export default iconFn
