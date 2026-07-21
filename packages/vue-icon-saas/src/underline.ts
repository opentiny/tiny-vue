import { svg } from '@opentiny/vue-common'
import Underline from '@opentiny/vue-theme-saas/svgs/underline.svg'

const iconFn = () => svg({ name: 'IconUnderline', component: Underline, filledComponent: Underline })()

iconFn.__flag = { 'svgName': 'underline', 'hasFill': false }
export default iconFn
