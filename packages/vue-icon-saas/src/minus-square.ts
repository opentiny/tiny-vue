import { svg } from '@opentiny/vue-common'
import MinusSquare from '@opentiny/vue-theme-saas/svgs/minus-square.svg'
import MinusSquareFilled from '@opentiny/vue-theme-saas/svgs/minus-square-filled.svg'

const iconFn = () => svg({ name: 'IconMinusSquare', component: MinusSquare, filledComponent: MinusSquareFilled })()
iconFn.__flag = { 'svgName': 'minus-square', 'hasFill': true }
export default iconFn
