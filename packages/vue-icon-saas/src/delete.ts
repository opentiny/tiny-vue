import { svg } from '@opentiny/vue-common'
import Delete from '@opentiny/vue-theme-saas/svgs/delete.svg'

const iconFn = () => svg({ name: 'IconDelete', component: Delete, filledComponent: Delete })()

iconFn.__flag = { 'svgName': 'delete', 'hasFill': false }
export default iconFn
