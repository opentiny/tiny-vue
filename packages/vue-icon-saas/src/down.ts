import { svg } from '@opentiny/vue-common'
import Down from '@opentiny/vue-theme-saas/svgs/down.svg'

const iconFn = () => svg({ name: 'IconDown', component: Down, filledComponent: Down })()

iconFn.__flag = { 'svgName': 'down', 'hasFill': false }
export default iconFn
