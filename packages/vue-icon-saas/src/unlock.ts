import { svg } from '@opentiny/vue-common'
import Unlock from '@opentiny/vue-theme-saas/svgs/unlock.svg'
import UnlockFilled from '@opentiny/vue-theme-saas/svgs/unlock-filled.svg'

const iconFn = () => svg({ name: 'IconUnlock', component: Unlock, filledComponent: UnlockFilled })()
iconFn.__flag = { 'svgName': 'unlock', 'hasFill': true }
export default iconFn
