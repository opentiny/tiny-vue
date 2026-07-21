import { svg } from '@opentiny/vue-common'
import InfoSolid from '@opentiny/vue-theme-saas/svgs/info-solid.svg'

const iconFn = () => svg({ name: 'IconInfoSolid', component: InfoSolid, filledComponent: InfoSolid })()

iconFn.__flag = { 'svgName': 'info-solid', 'hasFill': false }
export default iconFn
