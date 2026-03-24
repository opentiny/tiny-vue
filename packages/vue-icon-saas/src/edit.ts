import { svg } from '@opentiny/vue-common'
import Edit from '@opentiny/vue-theme-saas/svgs/edit.svg'
import EditFilled from '@opentiny/vue-theme-saas/svgs/edit-filled.svg'

const iconFn = () => svg({ name: 'IconEdit', component: Edit, filledComponent: EditFilled })()
iconFn.__flag = { 'svgName': 'edit', 'hasFill': true }
export default iconFn
