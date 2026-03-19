import { svg } from '@opentiny/vue-common'
import AIOfficeDataSearch from '@opentiny/vue-theme-saas/svgs/a-i-office-data-search.svg'
import AIOfficeDataSearchFilled from '@opentiny/vue-theme-saas/svgs/a-i-office-data-search-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAIOfficeDataSearch', component: AIOfficeDataSearch, filledComponent: AIOfficeDataSearchFilled })()
iconFn.__flag = { 'svgName': 'a-i-office-data-search', 'hasFill': true }
export default iconFn
