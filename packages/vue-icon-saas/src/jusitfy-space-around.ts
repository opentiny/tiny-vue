import { svg } from '@opentiny/vue-common'
import JusitfySpaceAround from '@opentiny/vue-theme-saas/svgs/jusitfy-space-around.svg'

const iconFn = () =>
  svg({ name: 'IconJusitfySpaceAround', component: JusitfySpaceAround, filledComponent: JusitfySpaceAround })()

iconFn.__flag = { 'svgName': 'jusitfy-space-around', 'hasFill': false }
export default iconFn
