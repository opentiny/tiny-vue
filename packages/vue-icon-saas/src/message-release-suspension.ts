import { svg } from '@opentiny/vue-common'
import MessageReleaseSuspension from '@opentiny/vue-theme-saas/svgs/message-release-suspension.svg'
import MessageReleaseSuspensionFilled from '@opentiny/vue-theme-saas/svgs/message-release-suspension-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconMessageReleaseSuspension',
    component: MessageReleaseSuspension,
    filledComponent: MessageReleaseSuspensionFilled
  })()
iconFn.__flag = { 'svgName': 'message-release-suspension', 'hasFill': true }
export default iconFn
