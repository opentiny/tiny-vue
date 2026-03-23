import { svg } from '@opentiny/vue-common'
import ProSearch from '@opentiny/vue-theme-saas/svgs/pro-search.svg'

const iconFn = () => svg({ name: 'IconProSearch', component: ProSearch, filledComponent: ProSearch })()

iconFn.__flag = { 'svgName': 'pro-search', 'hasFill': false }
export default iconFn
