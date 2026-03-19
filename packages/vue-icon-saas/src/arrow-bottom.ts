import { svg } from '@opentiny/vue-common'
import ArrowBottom from '@opentiny/vue-theme-saas/svgs/arrow-bottom.svg'

const iconFn = () => svg({ name: 'IconArrowBottom', component: ArrowBottom, filledComponent: ArrowBottom })()

iconFn.__flag = { 'svgName': 'arrow-bottom', 'hasFill': false }
export default iconFn
