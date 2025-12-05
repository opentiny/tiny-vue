import { svg } from '@opentiny/vue-common'
import MessageTemplate from '@opentiny/vue-theme-saas/svgs/message-template.svg'
import MessageTemplateFilled from '@opentiny/vue-theme-saas/svgs/message-template-filled.svg'

export default () =>
  svg({ name: 'IconMessageTemplate', component: MessageTemplate, filledComponent: MessageTemplateFilled })()
