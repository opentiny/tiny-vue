import { svg } from '@opentiny/vue-common'
import OtherType from '@opentiny/vue-theme-saas/svgs/other-type.svg'
import OtherTypeFilled from '@opentiny/vue-theme-saas/svgs/other-type-filled.svg'

const iconFn = () => svg({ name: 'IconOtherType', component: OtherType, filledComponent: OtherTypeFilled })()
iconFn.__flag = { 'svgName': 'other-type', 'hasFill': true }
export default iconFn
