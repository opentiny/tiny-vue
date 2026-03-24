import { svg } from '@opentiny/vue-common'
import ProTransport from '@opentiny/vue-theme-saas/svgs/pro-transport.svg'

const iconFn = () => svg({ name: 'IconProTransport', component: ProTransport, filledComponent: ProTransport })()

iconFn.__flag = { 'svgName': 'pro-transport', 'hasFill': false }
export default iconFn
