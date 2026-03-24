import { svg } from '@opentiny/vue-common'
import Pirplane from '@opentiny/vue-theme-saas/svgs/pirplane.svg'
import PirplaneFilled from '@opentiny/vue-theme-saas/svgs/pirplane-filled.svg'

const iconFn = () => svg({ name: 'IconPirplane', component: Pirplane, filledComponent: PirplaneFilled })()
iconFn.__flag = { 'svgName': 'pirplane', 'hasFill': true }
export default iconFn
