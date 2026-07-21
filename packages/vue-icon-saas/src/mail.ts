import { svg } from '@opentiny/vue-common'
import Mail from '@opentiny/vue-theme-saas/svgs/mail.svg'

const iconFn = () => svg({ name: 'IconMail', component: Mail, filledComponent: Mail })()

iconFn.__flag = { 'svgName': 'mail', 'hasFill': false }
export default iconFn
