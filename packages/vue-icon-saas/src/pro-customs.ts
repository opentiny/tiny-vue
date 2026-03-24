import { svg } from '@opentiny/vue-common'
import ProCustoms from '@opentiny/vue-theme-saas/svgs/pro-customs.svg'

const iconFn = () => svg({ name: 'IconProCustoms', component: ProCustoms, filledComponent: ProCustoms })()

iconFn.__flag = { 'svgName': 'pro-customs', 'hasFill': false }
export default iconFn
