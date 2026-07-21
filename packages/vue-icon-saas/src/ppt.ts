import { svg } from '@opentiny/vue-common'
import Ppt from '@opentiny/vue-theme-saas/svgs/ppt.svg'

const iconFn = () => svg({ name: 'IconPpt', component: Ppt, filledComponent: Ppt })()

iconFn.__flag = { 'svgName': 'ppt', 'hasFill': false }
export default iconFn
