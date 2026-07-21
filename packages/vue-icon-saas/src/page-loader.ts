import { svg } from '@opentiny/vue-common'
import PageLoader from '@opentiny/vue-theme-saas/svgs/page-loader.svg'
import PageLoaderFilled from '@opentiny/vue-theme-saas/svgs/page-loader-filled.svg'

const iconFn = () => svg({ name: 'IconPageLoader', component: PageLoader, filledComponent: PageLoaderFilled })()
iconFn.__flag = { 'svgName': 'page-loader', 'hasFill': true }
export default iconFn
