import { svg } from '@opentiny/vue-common'
import Search from '@opentiny/vue-theme-saas/svgs/search.svg'
import SearchFilled from '@opentiny/vue-theme-saas/svgs/search-filled.svg'

const iconFn = () => svg({ name: 'IconSearch', component: Search, filledComponent: SearchFilled })()
iconFn.__flag = { 'svgName': 'search', 'hasFill': true }
export default iconFn
