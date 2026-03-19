import { svg } from '@opentiny/vue-common'
import PageWeaknet from '@opentiny/vue-theme-saas/svgs/page-weaknet.svg'

const iconFn = () => svg({ name: 'IconPageWeaknet', component: PageWeaknet, filledComponent: PageWeaknet })()

iconFn.__flag = { 'svgName': 'page-weaknet', 'hasFill': false }
export default iconFn
