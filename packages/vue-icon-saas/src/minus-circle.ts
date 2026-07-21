import { svg } from '@opentiny/vue-common'
import MinusCircle from '@opentiny/vue-theme-saas/svgs/minus-circle.svg'
import MinusCircleFilled from '@opentiny/vue-theme-saas/svgs/minus-circle-filled.svg'

const iconFn = () => svg({ name: 'IconMinusCircle', component: MinusCircle, filledComponent: MinusCircleFilled })()
iconFn.__flag = { 'svgName': 'minus-circle', 'hasFill': true }
export default iconFn
