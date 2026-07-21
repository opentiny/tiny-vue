import { svg } from '@opentiny/vue-common'
import View from '@opentiny/vue-theme-saas/svgs/view.svg'

const iconFn = () => svg({ name: 'IconView', component: View, filledComponent: View })()

iconFn.__flag = { 'svgName': 'view', 'hasFill': false }
export default iconFn
