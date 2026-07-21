import { svg } from '@opentiny/vue-common'
import Finish from '@opentiny/vue-theme-saas/svgs/finish.svg'

const iconFn = () => svg({ name: 'IconFinish', component: Finish, filledComponent: Finish })()

iconFn.__flag = { 'svgName': 'finish', 'hasFill': false }
export default iconFn
