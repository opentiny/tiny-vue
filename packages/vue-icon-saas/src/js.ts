import { svg } from '@opentiny/vue-common'
import Js from '@opentiny/vue-theme-saas/svgs/js.svg'

const iconFn = () => svg({ name: 'IconJs', component: Js, filledComponent: Js })()

iconFn.__flag = { 'svgName': 'js', 'hasFill': false }
export default iconFn
