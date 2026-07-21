import { svg } from '@opentiny/vue-common'
import Versiontree from '@opentiny/vue-theme-saas/svgs/versiontree.svg'
import VersiontreeFilled from '@opentiny/vue-theme-saas/svgs/versiontree-filled.svg'

const iconFn = () => svg({ name: 'IconVersiontree', component: Versiontree, filledComponent: VersiontreeFilled })()
iconFn.__flag = { 'svgName': 'versiontree', 'hasFill': true }
export default iconFn
