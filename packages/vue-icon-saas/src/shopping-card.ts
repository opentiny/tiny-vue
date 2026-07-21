import { svg } from '@opentiny/vue-common'
import ShoppingCard from '@opentiny/vue-theme-saas/svgs/shopping-card.svg'
import ShoppingCardFilled from '@opentiny/vue-theme-saas/svgs/shopping-card-filled.svg'

const iconFn = () => svg({ name: 'IconShoppingCard', component: ShoppingCard, filledComponent: ShoppingCardFilled })()
iconFn.__flag = { 'svgName': 'shopping-card', 'hasFill': true }
export default iconFn
