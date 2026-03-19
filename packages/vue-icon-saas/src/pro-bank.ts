import { svg } from '@opentiny/vue-common'
import ProBank from '@opentiny/vue-theme-saas/svgs/pro-bank.svg'

const iconFn = () => svg({ name: 'IconProBank', component: ProBank, filledComponent: ProBank })()

iconFn.__flag = { 'svgName': 'pro-bank', 'hasFill': false }
export default iconFn
