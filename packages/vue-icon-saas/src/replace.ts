import { svg } from '@opentiny/vue-common'
import Replace from '@opentiny/vue-theme-saas/svgs/replace.svg'
import ReplaceFilled from '@opentiny/vue-theme-saas/svgs/replace-filled.svg'

const iconFn = () => svg({ name: 'IconReplace', component: Replace, filledComponent: ReplaceFilled })()
iconFn.__flag = { 'svgName': 'replace', 'hasFill': true }
export default iconFn
