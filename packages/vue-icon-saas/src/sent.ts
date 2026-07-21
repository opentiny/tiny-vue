import { svg } from '@opentiny/vue-common'
import Sent from '@opentiny/vue-theme-saas/svgs/sent.svg'

const iconFn = () => svg({ name: 'IconSent', component: Sent, filledComponent: Sent })()

iconFn.__flag = { 'svgName': 'sent', 'hasFill': false }
export default iconFn
