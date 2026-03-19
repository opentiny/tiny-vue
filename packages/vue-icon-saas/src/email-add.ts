import { svg } from '@opentiny/vue-common'
import EmailAdd from '@opentiny/vue-theme-saas/svgs/email-add.svg'
import EmailAddFilled from '@opentiny/vue-theme-saas/svgs/email-add-filled.svg'

const iconFn = () => svg({ name: 'IconEmailAdd', component: EmailAdd, filledComponent: EmailAddFilled })()
iconFn.__flag = { 'svgName': 'email-add', 'hasFill': true }
export default iconFn
