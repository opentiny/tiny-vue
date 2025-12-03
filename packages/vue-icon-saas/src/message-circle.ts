import { svg } from '@opentiny/vue-common'
import MessageCircle from '@opentiny/vue-theme-saas/svgs/message-circle.svg'
import MessageCircleFilled from '@opentiny/vue-theme-saas/svgs/message-circle-filled.svg'

export default () =>
  svg({ name: 'IconMessageCircle', component: MessageCircle, filledComponent: MessageCircleFilled })()
