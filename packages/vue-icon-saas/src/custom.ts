import { svg } from '@opentiny/vue-common'
import Custom from '@opentiny/vue-theme-saas/svgs/custom.svg'
import CustomFilled from '@opentiny/vue-theme-saas/svgs/custom-filled.svg'

const iconFn = () => svg({ name: 'IconCustom', component: Custom, filledComponent: CustomFilled })()
iconFn.__flag = { 'svgName': 'custom', 'hasFill': true }
export default iconFn
