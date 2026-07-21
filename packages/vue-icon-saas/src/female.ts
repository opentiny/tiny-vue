import { svg } from '@opentiny/vue-common'
import Female from '@opentiny/vue-theme-saas/svgs/female.svg'
import FemaleFilled from '@opentiny/vue-theme-saas/svgs/female-filled.svg'

const iconFn = () => svg({ name: 'IconFemale', component: Female, filledComponent: FemaleFilled })()
iconFn.__flag = { 'svgName': 'female', 'hasFill': true }
export default iconFn
