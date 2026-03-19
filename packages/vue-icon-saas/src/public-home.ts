import { svg } from '@opentiny/vue-common'
import PublicHome from '@opentiny/vue-theme-saas/svgs/public-home.svg'
import PublicHomeFilled from '@opentiny/vue-theme-saas/svgs/public-home-filled.svg'

const iconFn = () => svg({ name: 'IconPublicHome', component: PublicHome, filledComponent: PublicHomeFilled })()
iconFn.__flag = { 'svgName': 'public-home', 'hasFill': true }
export default iconFn
