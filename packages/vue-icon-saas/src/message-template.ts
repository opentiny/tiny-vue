import { svg } from '@opentiny/vue-common'
import MessageTemplate from '@opentiny/vue-theme-saas/svgs/message-template.svg'
import MessageTemplateFilled from '@opentiny/vue-theme-saas/svgs/message-template-filled.svg'

const iconFn = () =>
  svg({ name: 'IconMessageTemplate', component: MessageTemplate, filledComponent: MessageTemplateFilled })()
iconFn.__flag = { 'svgName': 'message-template', 'hasFill': true }
export default iconFn
