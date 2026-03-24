import { svg } from '@opentiny/vue-common'
import StarDisable from '@opentiny/vue-theme-saas/svgs/star-disable.svg'
import StarDisableFilled from '@opentiny/vue-theme-saas/svgs/star-disable-filled.svg'

const iconFn = () => svg({ name: 'IconStarDisable', component: StarDisable, filledComponent: StarDisableFilled })()
iconFn.__flag = { 'svgName': 'star-disable', 'hasFill': true }
export default iconFn
