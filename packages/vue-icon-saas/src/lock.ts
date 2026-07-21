import { svg } from '@opentiny/vue-common'
import Lock from '@opentiny/vue-theme-saas/svgs/lock.svg'
import LockFilled from '@opentiny/vue-theme-saas/svgs/lock-filled.svg'

const iconFn = () => svg({ name: 'IconLock', component: Lock, filledComponent: LockFilled })()
iconFn.__flag = { 'svgName': 'lock', 'hasFill': true }
export default iconFn
