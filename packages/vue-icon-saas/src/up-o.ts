import { svg } from '@opentiny/vue-common'
import UpO from '@opentiny/vue-theme-saas/svgs/up-o.svg'

const iconFn = () => svg({ name: 'IconUpO', component: UpO, filledComponent: UpO })()

iconFn.__flag = { 'svgName': 'up-o', 'hasFill': false }
export default iconFn
