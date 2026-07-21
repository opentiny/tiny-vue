import { svg } from '@opentiny/vue-common'
import DiscountSup from '@opentiny/vue-theme-saas/svgs/discount-sup.svg'

const iconFn = () => svg({ name: 'IconDiscountSup', component: DiscountSup, filledComponent: DiscountSup })()

iconFn.__flag = { 'svgName': 'discount-sup', 'hasFill': false }
export default iconFn
