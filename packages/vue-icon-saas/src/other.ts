import { svg } from '@opentiny/vue-common'
import Other from '@opentiny/vue-theme-saas/svgs/other.svg'
import OtherFilled from '@opentiny/vue-theme-saas/svgs/other-filled.svg'

const iconFn = () => svg({ name: 'IconOther', component: Other, filledComponent: OtherFilled })()
iconFn.__flag = { 'svgName': 'other', 'hasFill': true }
export default iconFn
