import { svg } from '@opentiny/vue-common'
import AISearch from '@opentiny/vue-theme-saas/svgs/a-i-search.svg'
import AISearchFilled from '@opentiny/vue-theme-saas/svgs/a-i-search-filled.svg'

const iconFn = () => svg({ name: 'IconAISearch', component: AISearch, filledComponent: AISearchFilled })()
iconFn.__flag = { 'svgName': 'a-i-search', 'hasFill': true }
export default iconFn
