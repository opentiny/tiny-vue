import { svg } from '@opentiny/vue-common'
import FontStyle from '@opentiny/vue-theme-saas/svgs/font-style.svg'

const iconFn = () => svg({ name: 'IconFontStyle', component: FontStyle, filledComponent: FontStyle })()

iconFn.__flag = { 'svgName': 'font-style', 'hasFill': false }
export default iconFn
