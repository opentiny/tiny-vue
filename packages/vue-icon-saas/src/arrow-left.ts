import { svg } from '@opentiny/vue-common'
import ArrowLeft from '@opentiny/vue-theme-saas/svgs/arrow-left.svg'
import ArrowLeftFilled from '@opentiny/vue-theme-saas/svgs/arrow-left-filled.svg'

const iconFn = () => svg({ name: 'IconArrowLeft', component: ArrowLeft, filledComponent: ArrowLeftFilled })()
iconFn.__flag = { 'svgName': 'arrow-left', 'hasFill': true }
export default iconFn
