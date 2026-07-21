import { svg } from '@opentiny/vue-common'
import StretchUpright from '@opentiny/vue-theme-saas/svgs/stretch-upright.svg'

const iconFn = () => svg({ name: 'IconStretchUpright', component: StretchUpright, filledComponent: StretchUpright })()

iconFn.__flag = { 'svgName': 'stretch-upright', 'hasFill': false }
export default iconFn
