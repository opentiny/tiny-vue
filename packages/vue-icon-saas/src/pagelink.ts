import { svg } from '@opentiny/vue-common'
import Pagelink from '@opentiny/vue-theme-saas/svgs/pagelink.svg'
import PagelinkFilled from '@opentiny/vue-theme-saas/svgs/pagelink-filled.svg'

const iconFn = () => svg({ name: 'IconPagelink', component: Pagelink, filledComponent: PagelinkFilled })()
iconFn.__flag = { 'svgName': 'pagelink', 'hasFill': true }
export default iconFn
