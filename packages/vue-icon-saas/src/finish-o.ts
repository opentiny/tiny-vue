import { svg } from '@opentiny/vue-common'
import FinishO from '@opentiny/vue-theme-saas/svgs/finish-o.svg'

const iconFn = () => svg({ name: 'IconFinishO', component: FinishO, filledComponent: FinishO })()

iconFn.__flag = { 'svgName': 'finish-o', 'hasFill': false }
export default iconFn
