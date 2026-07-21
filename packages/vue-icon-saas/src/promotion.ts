import { svg } from '@opentiny/vue-common'
import Promotion from '@opentiny/vue-theme-saas/svgs/promotion.svg'
import PromotionFilled from '@opentiny/vue-theme-saas/svgs/promotion-filled.svg'

const iconFn = () => svg({ name: 'IconPromotion', component: Promotion, filledComponent: PromotionFilled })()
iconFn.__flag = { 'svgName': 'promotion', 'hasFill': true }
export default iconFn
