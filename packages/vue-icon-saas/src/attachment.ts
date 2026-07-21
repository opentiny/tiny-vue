import { svg } from '@opentiny/vue-common'
import Attachment from '@opentiny/vue-theme-saas/svgs/attachment.svg'
import AttachmentFilled from '@opentiny/vue-theme-saas/svgs/attachment-filled.svg'

const iconFn = () => svg({ name: 'IconAttachment', component: Attachment, filledComponent: AttachmentFilled })()
iconFn.__flag = { 'svgName': 'attachment', 'hasFill': true }
export default iconFn
