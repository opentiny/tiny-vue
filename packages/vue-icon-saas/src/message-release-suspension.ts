import { svg } from '@opentiny/vue-common'
import MessageReleaseSuspension from '@opentiny/vue-theme-saas/svgs/message-release-suspension.svg'
import MessageReleaseSuspensionFilled from '@opentiny/vue-theme-saas/svgs/message-release-suspension-filled.svg'

export default () =>
  svg({
    name: 'IconMessageReleaseSuspension',
    component: MessageReleaseSuspension,
    filledComponent: MessageReleaseSuspensionFilled
  })()
