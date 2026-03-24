import { svg } from '@opentiny/vue-common'
import RightO from '@opentiny/vue-theme-saas/svgs/right-o.svg'

const iconFn = () => svg({ name: 'IconRightO', component: RightO, filledComponent: RightO })()

iconFn.__flag = { 'svgName': 'right-o', 'hasFill': false }
export default iconFn
