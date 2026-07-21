import { svg } from '@opentiny/vue-common'
import AIWrite from '@opentiny/vue-theme-saas/svgs/a-i-write.svg'
import AIWriteFilled from '@opentiny/vue-theme-saas/svgs/a-i-write-filled.svg'

const iconFn = () => svg({ name: 'IconAIWrite', component: AIWrite, filledComponent: AIWriteFilled })()
iconFn.__flag = { 'svgName': 'a-i-write', 'hasFill': true }
export default iconFn
