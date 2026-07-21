import { svg } from '@opentiny/vue-common'
import CardModeline from '@opentiny/vue-theme-saas/svgs/card-modeline.svg'
import CardModelineFilled from '@opentiny/vue-theme-saas/svgs/card-modeline-filled.svg'

const iconFn = () => svg({ name: 'IconCardModeline', component: CardModeline, filledComponent: CardModelineFilled })()
iconFn.__flag = { 'svgName': 'card-modeline', 'hasFill': true }
export default iconFn
