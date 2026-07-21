import { svg } from '@opentiny/vue-common'
import CardMode from '@opentiny/vue-theme-saas/svgs/card-mode.svg'

const iconFn = () => svg({ name: 'IconCardMode', component: CardMode, filledComponent: CardMode })()

iconFn.__flag = { 'svgName': 'card-mode', 'hasFill': false }
export default iconFn
