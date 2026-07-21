import { svg } from '@opentiny/vue-common'
import ProTender from '@opentiny/vue-theme-saas/svgs/pro-tender.svg'

const iconFn = () => svg({ name: 'IconProTender', component: ProTender, filledComponent: ProTender })()

iconFn.__flag = { 'svgName': 'pro-tender', 'hasFill': false }
export default iconFn
