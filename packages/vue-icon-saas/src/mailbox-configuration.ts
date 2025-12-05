import { svg } from '@opentiny/vue-common'
import MailboxConfiguration from '@opentiny/vue-theme-saas/svgs/mailbox-configuration.svg'
import MailboxConfigurationFilled from '@opentiny/vue-theme-saas/svgs/mailbox-configuration-filled.svg'

export default () =>
  svg({
    name: 'IconMailboxConfiguration',
    component: MailboxConfiguration,
    filledComponent: MailboxConfigurationFilled
  })()
