import { svg } from '@opentiny/vue-common'
import DeleteL from '@opentiny/vue-theme-saas/svgs/delete-l.svg'

const iconFn = () => svg({ name: 'IconDeleteL', component: DeleteL, filledComponent: DeleteL })()

iconFn.__flag = { 'svgName': 'delete-l', 'hasFill': false }
export default iconFn
