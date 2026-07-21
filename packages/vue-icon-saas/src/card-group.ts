import { svg } from '@opentiny/vue-common'
import CardGroup from '@opentiny/vue-theme-saas/svgs/card-group.svg'
import CardGroupFilled from '@opentiny/vue-theme-saas/svgs/card-group-filled.svg'

const iconFn = () => svg({ name: 'IconCardGroup', component: CardGroup, filledComponent: CardGroupFilled })()
iconFn.__flag = { 'svgName': 'card-group', 'hasFill': true }
export default iconFn
