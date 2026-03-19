import { svg } from '@opentiny/vue-common'
import AIWriting from '@opentiny/vue-theme-saas/svgs/a-i-writing.svg'
import AIWritingFilled from '@opentiny/vue-theme-saas/svgs/a-i-writing-filled.svg'

const iconFn = () => svg({ name: 'IconAIWriting', component: AIWriting, filledComponent: AIWritingFilled })()
iconFn.__flag = { 'svgName': 'a-i-writing', 'hasFill': true }
export default iconFn
