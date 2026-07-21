import { svg } from '@opentiny/vue-common'
import JustitfyFlexStart from '@opentiny/vue-theme-saas/svgs/justitfy-flex-start.svg'

const iconFn = () =>
  svg({ name: 'IconJustitfyFlexStart', component: JustitfyFlexStart, filledComponent: JustitfyFlexStart })()

iconFn.__flag = { 'svgName': 'justitfy-flex-start', 'hasFill': false }
export default iconFn
