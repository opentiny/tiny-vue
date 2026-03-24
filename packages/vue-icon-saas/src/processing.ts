import { svg } from '@opentiny/vue-common'
import Processing from '@opentiny/vue-theme-saas/svgs/processing.svg'

const iconFn = () => svg({ name: 'IconProcessing', component: Processing, filledComponent: Processing })()

iconFn.__flag = { 'svgName': 'processing', 'hasFill': false }
export default iconFn
