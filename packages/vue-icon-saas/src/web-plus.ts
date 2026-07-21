import { svg } from '@opentiny/vue-common'
import WebPlus from '@opentiny/vue-theme-saas/svgs/web-plus.svg'
import WebPlusFilled from '@opentiny/vue-theme-saas/svgs/web-plus-filled.svg'

const iconFn = () => svg({ name: 'IconWebPlus', component: WebPlus, filledComponent: WebPlusFilled })()
iconFn.__flag = { 'svgName': 'web-plus', 'hasFill': true }
export default iconFn
