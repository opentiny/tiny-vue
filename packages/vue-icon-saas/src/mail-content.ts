import { svg } from '@opentiny/vue-common'
import MailContent from '@opentiny/vue-theme-saas/svgs/mail-content.svg'
import MailContentFilled from '@opentiny/vue-theme-saas/svgs/mail-content-filled.svg'

const iconFn = () => svg({ name: 'IconMailContent', component: MailContent, filledComponent: MailContentFilled })()
iconFn.__flag = { 'svgName': 'mail-content', 'hasFill': true }
export default iconFn
