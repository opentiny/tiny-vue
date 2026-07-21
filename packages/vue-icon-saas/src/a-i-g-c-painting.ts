import { svg } from '@opentiny/vue-common'
import AIGCPainting from '@opentiny/vue-theme-saas/svgs/a-i-g-c-painting.svg'
import AIGCPaintingFilled from '@opentiny/vue-theme-saas/svgs/a-i-g-c-painting-filled.svg'

const iconFn = () => svg({ name: 'IconAIGCPainting', component: AIGCPainting, filledComponent: AIGCPaintingFilled })()
iconFn.__flag = { 'svgName': 'a-i-g-c-painting', 'hasFill': true }
export default iconFn
