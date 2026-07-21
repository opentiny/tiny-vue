import { svg } from '@opentiny/vue-common'
import Deleted from '@opentiny/vue-theme-saas/svgs/deleted.svg'
import DeletedFilled from '@opentiny/vue-theme-saas/svgs/deleted-filled.svg'

const iconFn = () => svg({ name: 'IconDeleted', component: Deleted, filledComponent: DeletedFilled })()
iconFn.__flag = { 'svgName': 'deleted', 'hasFill': true }
export default iconFn
