import { svg } from '@opentiny/vue-common'
import CustomSclearance from '@opentiny/vue-theme-saas/svgs/custom-sclearance.svg'
import CustomSclearanceFilled from '@opentiny/vue-theme-saas/svgs/custom-sclearance-filled.svg'

const iconFn = () =>
  svg({ name: 'IconCustomSclearance', component: CustomSclearance, filledComponent: CustomSclearanceFilled })()
iconFn.__flag = { 'svgName': 'custom-sclearance', 'hasFill': true }
export default iconFn
