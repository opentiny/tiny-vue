import { svg } from '@opentiny/vue-common'
import JusitfySpaceBetween from '@opentiny/vue-theme-saas/svgs/jusitfy-space-between.svg'

const iconFn = () =>
  svg({ name: 'IconJusitfySpaceBetween', component: JusitfySpaceBetween, filledComponent: JusitfySpaceBetween })()

iconFn.__flag = { 'svgName': 'jusitfy-space-between', 'hasFill': false }
export default iconFn
