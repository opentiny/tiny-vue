import { svg } from '@opentiny/vue-common'
import ArrowRight from '@opentiny/vue-theme-saas/svgs/arrow-right.svg'
import ArrowRightFilled from '@opentiny/vue-theme-saas/svgs/arrow-right-filled.svg'

const iconFn = () => svg({ name: 'IconArrowRight', component: ArrowRight, filledComponent: ArrowRightFilled })()
iconFn.__flag = { 'svgName': 'arrow-right', 'hasFill': true }
export default iconFn
