import { svg } from '@opentiny/vue-common'
import Config from '@opentiny/vue-theme-saas/svgs/config.svg'

const iconFn = () => svg({ name: 'IconConfig', component: Config, filledComponent: Config })()

iconFn.__flag = { 'svgName': 'config', 'hasFill': false }
export default iconFn
