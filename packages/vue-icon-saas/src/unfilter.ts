import { svg } from '@opentiny/vue-common'
import Unfilter from '@opentiny/vue-theme-saas/svgs/unfilter.svg'
import UnfilterFilled from '@opentiny/vue-theme-saas/svgs/unfilter-filled.svg'

const iconFn = () => svg({ name: 'IconUnfilter', component: Unfilter, filledComponent: UnfilterFilled })()
iconFn.__flag = { 'svgName': 'unfilter', 'hasFill': true }
export default iconFn
