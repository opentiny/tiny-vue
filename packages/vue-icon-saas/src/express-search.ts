import { svg } from '@opentiny/vue-common'
import ExpressSearch from '@opentiny/vue-theme-saas/svgs/express-search.svg'
import ExpressSearchFilled from '@opentiny/vue-theme-saas/svgs/express-search-filled.svg'

const iconFn = () =>
  svg({ name: 'IconExpressSearch', component: ExpressSearch, filledComponent: ExpressSearchFilled })()
iconFn.__flag = { 'svgName': 'express-search', 'hasFill': true }
export default iconFn
