import { svg } from '@opentiny/vue-common'
import Refres from '@opentiny/vue-theme-saas/svgs/refres.svg'

const iconFn = () => svg({ name: 'IconRefres', component: Refres, filledComponent: Refres })()

iconFn.__flag = { 'svgName': 'refres', 'hasFill': false }
export default iconFn
