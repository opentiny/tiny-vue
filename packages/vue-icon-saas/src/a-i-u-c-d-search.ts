import { svg } from '@opentiny/vue-common'
import AIUCDSearch from '@opentiny/vue-theme-saas/svgs/a-i-u-c-d-search.svg'
import AIUCDSearchFilled from '@opentiny/vue-theme-saas/svgs/a-i-u-c-d-search-filled.svg'

const iconFn = () => svg({ name: 'IconAIUCDSearch', component: AIUCDSearch, filledComponent: AIUCDSearchFilled })()
iconFn.__flag = { 'svgName': 'a-i-u-c-d-search', 'hasFill': true }
export default iconFn
