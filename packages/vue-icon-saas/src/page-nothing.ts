import { svg } from '@opentiny/vue-common'
import PageNothing from '@opentiny/vue-theme-saas/svgs/page-nothing.svg'

const iconFn = () => svg({ name: 'IconPageNothing', component: PageNothing, filledComponent: PageNothing })()

iconFn.__flag = { 'svgName': 'page-nothing', 'hasFill': false }
export default iconFn
