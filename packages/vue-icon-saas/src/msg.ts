import { svg } from '@opentiny/vue-common'
import Msg from '@opentiny/vue-theme-saas/svgs/msg.svg'
import MsgFilled from '@opentiny/vue-theme-saas/svgs/msg-filled.svg'

const iconFn = () => svg({ name: 'IconMsg', component: Msg, filledComponent: MsgFilled })()
iconFn.__flag = { 'svgName': 'msg', 'hasFill': true }
export default iconFn
