import { svg } from '@opentiny/vue-common'
import Radioselected from '@opentiny/vue-theme-saas/svgs/radioselected.svg'
import RadioselectedFilled from '@opentiny/vue-theme-saas/svgs/radioselected-filled.svg'

const iconFn = () =>
  svg({ name: 'IconRadioselected', component: Radioselected, filledComponent: RadioselectedFilled })()
iconFn.__flag = { 'svgName': 'radioselected', 'hasFill': true }
export default iconFn
