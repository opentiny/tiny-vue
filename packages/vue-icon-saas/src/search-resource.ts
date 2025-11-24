import { svg } from '@opentiny/vue-common'
import SearchResource from '@opentiny/vue-theme-saas/svgs/search-resource.svg'
import SearchResourceFilled from '@opentiny/vue-theme-saas/svgs/search-resource-filled.svg'

export default () =>
  svg({ name: 'IconSearchResource', component: SearchResource, filledComponent: SearchResourceFilled })()
