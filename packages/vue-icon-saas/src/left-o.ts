import { svg } from '@opentiny/vue-common'
import LeftO from '@opentiny/vue-theme-saas/svgs/left-o.svg'

const iconFn = () => svg({ name: 'IconLeftO', component: LeftO, filledComponent: LeftO })()

iconFn.__flag = { 'svgName': 'left-o', 'hasFill': false }
export default iconFn
