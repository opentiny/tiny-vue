import { svg } from '@opentiny/vue-common'
import TableMode from '@opentiny/vue-theme-saas/svgs/table-mode.svg'
import TableModeFilled from '@opentiny/vue-theme-saas/svgs/table-mode-filled.svg'

const iconFn = () => svg({ name: 'IconTableMode', component: TableMode, filledComponent: TableModeFilled })()
iconFn.__flag = { 'svgName': 'table-mode', 'hasFill': true }
export default iconFn
