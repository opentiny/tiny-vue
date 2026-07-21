import { svg } from '@opentiny/vue-common'
import StaticIndex from '@opentiny/vue-theme-saas/svgs/static-index.svg'
import StaticIndexFilled from '@opentiny/vue-theme-saas/svgs/static-index-filled.svg'

const iconFn = () => svg({ name: 'IconStaticIndex', component: StaticIndex, filledComponent: StaticIndexFilled })()
iconFn.__flag = { 'svgName': 'static-index', 'hasFill': true }
export default iconFn
