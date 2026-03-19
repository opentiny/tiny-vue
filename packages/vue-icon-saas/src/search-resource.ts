import { svg } from '@opentiny/vue-common'
import SearchResource from '@opentiny/vue-theme-saas/svgs/search-resource.svg'
import SearchResourceFilled from '@opentiny/vue-theme-saas/svgs/search-resource-filled.svg'

const iconFn = () =>
  svg({ name: 'IconSearchResource', component: SearchResource, filledComponent: SearchResourceFilled })()
iconFn.__flag = { 'svgName': 'search-resource', 'hasFill': true }
export default iconFn
