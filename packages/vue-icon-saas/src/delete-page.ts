import { svg } from '@opentiny/vue-common'
import DeletePage from '@opentiny/vue-theme-saas/svgs/delete-page.svg'
import DeletePageFilled from '@opentiny/vue-theme-saas/svgs/delete-page-filled.svg'

const iconFn = () => svg({ name: 'IconDeletePage', component: DeletePage, filledComponent: DeletePageFilled })()
iconFn.__flag = { 'svgName': 'delete-page', 'hasFill': true }
export default iconFn
