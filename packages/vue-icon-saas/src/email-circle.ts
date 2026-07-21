import { svg } from '@opentiny/vue-common'
import EmailCircle from '@opentiny/vue-theme-saas/svgs/email-circle.svg'
import EmailCircleFilled from '@opentiny/vue-theme-saas/svgs/email-circle-filled.svg'

const iconFn = () => svg({ name: 'IconEmailCircle', component: EmailCircle, filledComponent: EmailCircleFilled })()
iconFn.__flag = { 'svgName': 'email-circle', 'hasFill': true }
export default iconFn
