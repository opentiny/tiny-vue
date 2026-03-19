import { svg } from '@opentiny/vue-common'
import Generating from '@opentiny/vue-theme-saas/svgs/generating.svg'
import GeneratingFilled from '@opentiny/vue-theme-saas/svgs/generating-filled.svg'

const iconFn = () => svg({ name: 'IconGenerating', component: Generating, filledComponent: GeneratingFilled })()
iconFn.__flag = { 'svgName': 'generating', 'hasFill': true }
export default iconFn
