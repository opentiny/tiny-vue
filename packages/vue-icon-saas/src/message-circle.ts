import { svg } from '@opentiny/vue-common'
import MessageCircle from '@opentiny/vue-theme-saas/svgs/message-circle.svg'
import MessageCircleFilled from '@opentiny/vue-theme-saas/svgs/message-circle-filled.svg'

const iconFn = () =>
  svg({ name: 'IconMessageCircle', component: MessageCircle, filledComponent: MessageCircleFilled })()
iconFn.__flag = { 'svgName': 'message-circle', 'hasFill': true }
export default iconFn
