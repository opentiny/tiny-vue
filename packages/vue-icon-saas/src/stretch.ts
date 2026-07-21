import { svg } from '@opentiny/vue-common'
import Stretch from '@opentiny/vue-theme-saas/svgs/stretch.svg'

const iconFn = () => svg({ name: 'IconStretch', component: Stretch, filledComponent: Stretch })()

iconFn.__flag = { 'svgName': 'stretch', 'hasFill': false }
export default iconFn
