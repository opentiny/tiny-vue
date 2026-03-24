import { svg } from '@opentiny/vue-common'
import Loading from '@opentiny/vue-theme-saas/svgs/loading.svg'
import LoadingFilled from '@opentiny/vue-theme-saas/svgs/loading-filled.svg'

const iconFn = () => svg({ name: 'IconLoading', component: Loading, filledComponent: LoadingFilled })()
iconFn.__flag = { 'svgName': 'loading', 'hasFill': true }
export default iconFn
