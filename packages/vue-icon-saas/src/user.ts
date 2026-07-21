import { svg } from '@opentiny/vue-common'
import User from '@opentiny/vue-theme-saas/svgs/user.svg'

const iconFn = () => svg({ name: 'IconUser', component: User, filledComponent: User })()

iconFn.__flag = { 'svgName': 'user', 'hasFill': false }
export default iconFn
