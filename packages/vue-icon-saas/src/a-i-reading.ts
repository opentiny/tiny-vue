import { svg } from '@opentiny/vue-common'
import AIReading from '@opentiny/vue-theme-saas/svgs/a-i-reading.svg'
import AIReadingFilled from '@opentiny/vue-theme-saas/svgs/a-i-reading-filled.svg'

const iconFn = () => svg({ name: 'IconAIReading', component: AIReading, filledComponent: AIReadingFilled })()
iconFn.__flag = { 'svgName': 'a-i-reading', 'hasFill': true }
export default iconFn
