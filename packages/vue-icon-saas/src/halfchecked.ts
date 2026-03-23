import { svg } from '@opentiny/vue-common'
import Halfchecked from '@opentiny/vue-theme-saas/svgs/halfchecked.svg'

const iconFn = () => svg({ name: 'IconHalfchecked', component: Halfchecked, filledComponent: Halfchecked })()

iconFn.__flag = { 'svgName': 'halfchecked', 'hasFill': false }
export default iconFn
