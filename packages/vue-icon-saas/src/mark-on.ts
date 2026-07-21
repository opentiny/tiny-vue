import { svg } from '@opentiny/vue-common'
import MarkOn from '@opentiny/vue-theme-saas/svgs/mark-on.svg'
import MarkOnFilled from '@opentiny/vue-theme-saas/svgs/mark-on-filled.svg'

const iconFn = () => svg({ name: 'IconMarkOn', component: MarkOn, filledComponent: MarkOnFilled })()
iconFn.__flag = { 'svgName': 'mark-on', 'hasFill': true }
export default iconFn
