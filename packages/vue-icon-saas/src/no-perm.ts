import { svg } from '@opentiny/vue-common'
import NoPerm from '@opentiny/vue-theme-saas/svgs/no-perm.svg'

const iconFn = () => svg({ name: 'IconNoPerm', component: NoPerm, filledComponent: NoPerm })()

iconFn.__flag = { 'svgName': 'no-perm', 'hasFill': false }
export default iconFn
