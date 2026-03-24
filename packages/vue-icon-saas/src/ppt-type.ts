import { svg } from '@opentiny/vue-common'
import PptType from '@opentiny/vue-theme-saas/svgs/ppt-type.svg'
import PptTypeFilled from '@opentiny/vue-theme-saas/svgs/ppt-type-filled.svg'

const iconFn = () => svg({ name: 'IconPptType', component: PptType, filledComponent: PptTypeFilled })()
iconFn.__flag = { 'svgName': 'ppt-type', 'hasFill': true }
export default iconFn
