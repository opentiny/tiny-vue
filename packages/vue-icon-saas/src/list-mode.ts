import { svg } from '@opentiny/vue-common'
import ListMode from '@opentiny/vue-theme-saas/svgs/list-mode.svg'
import ListModeFilled from '@opentiny/vue-theme-saas/svgs/list-mode-filled.svg'

const iconFn = () => svg({ name: 'IconListMode', component: ListMode, filledComponent: ListModeFilled })()
iconFn.__flag = { 'svgName': 'list-mode', 'hasFill': true }
export default iconFn
