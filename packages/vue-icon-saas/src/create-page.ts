import { svg } from '@opentiny/vue-common'
import CreatePage from '@opentiny/vue-theme-saas/svgs/create-page.svg'
import CreatePageFilled from '@opentiny/vue-theme-saas/svgs/create-page-filled.svg'

const iconFn = () => svg({ name: 'IconCreatePage', component: CreatePage, filledComponent: CreatePageFilled })()
iconFn.__flag = { 'svgName': 'create-page', 'hasFill': true }
export default iconFn
