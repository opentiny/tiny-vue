import { svg } from '@opentiny/vue-common'
import ListPage from '@opentiny/vue-theme-saas/svgs/list-page.svg'
import ListPageFilled from '@opentiny/vue-theme-saas/svgs/list-page-filled.svg'

const iconFn = () => svg({ name: 'IconListPage', component: ListPage, filledComponent: ListPageFilled })()
iconFn.__flag = { 'svgName': 'list-page', 'hasFill': true }
export default iconFn
