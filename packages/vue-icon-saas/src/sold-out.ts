import { svg } from '@opentiny/vue-common'
import SoldOut from '@opentiny/vue-theme-saas/svgs/sold-out.svg'

const iconFn = () => svg({ name: 'IconSoldOut', component: SoldOut, filledComponent: SoldOut })()

iconFn.__flag = { 'svgName': 'sold-out', 'hasFill': false }
export default iconFn
