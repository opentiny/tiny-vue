import { svg } from '@opentiny/vue-common'
import ColReverse from '@opentiny/vue-theme-saas/svgs/col-reverse.svg'

const iconFn = () => svg({ name: 'IconColReverse', component: ColReverse, filledComponent: ColReverse })()

iconFn.__flag = { 'svgName': 'col-reverse', 'hasFill': false }
export default iconFn
