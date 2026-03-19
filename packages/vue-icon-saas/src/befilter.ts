import { svg } from '@opentiny/vue-common'
import Befilter from '@opentiny/vue-theme-saas/svgs/befilter.svg'
import BefilterFilled from '@opentiny/vue-theme-saas/svgs/befilter-filled.svg'

const iconFn = () => svg({ name: 'IconBefilter', component: Befilter, filledComponent: BefilterFilled })()
iconFn.__flag = { 'svgName': 'befilter', 'hasFill': true }
export default iconFn
