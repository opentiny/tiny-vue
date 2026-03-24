import { svg } from '@opentiny/vue-common'
import FontSize from '@opentiny/vue-theme-saas/svgs/font-size.svg'

const iconFn = () => svg({ name: 'IconFontSize', component: FontSize, filledComponent: FontSize })()

iconFn.__flag = { 'svgName': 'font-size', 'hasFill': false }
export default iconFn
