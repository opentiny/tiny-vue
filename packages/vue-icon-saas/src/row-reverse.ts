import { svg } from '@opentiny/vue-common'
import RowReverse from '@opentiny/vue-theme-saas/svgs/row-reverse.svg'

const iconFn = () => svg({ name: 'IconRowReverse', component: RowReverse, filledComponent: RowReverse })()

iconFn.__flag = { 'svgName': 'row-reverse', 'hasFill': false }
export default iconFn
