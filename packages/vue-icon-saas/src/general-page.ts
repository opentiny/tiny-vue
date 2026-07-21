import { svg } from '@opentiny/vue-common'
import GeneralPage from '@opentiny/vue-theme-saas/svgs/general-page.svg'
import GeneralPageFilled from '@opentiny/vue-theme-saas/svgs/general-page-filled.svg'

const iconFn = () => svg({ name: 'IconGeneralPage', component: GeneralPage, filledComponent: GeneralPageFilled })()
iconFn.__flag = { 'svgName': 'general-page', 'hasFill': true }
export default iconFn
