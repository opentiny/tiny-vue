import { svg } from '@opentiny/vue-common'
import FontWeight from '@opentiny/vue-theme-saas/svgs/font-weight.svg'

const iconFn = () => svg({ name: 'IconFontWeight', component: FontWeight, filledComponent: FontWeight })()

iconFn.__flag = { 'svgName': 'font-weight', 'hasFill': false }
export default iconFn
