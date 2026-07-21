import { svg } from '@opentiny/vue-common'
import AILabelExtraction from '@opentiny/vue-theme-saas/svgs/a-i-label-extraction.svg'
import AILabelExtractionFilled from '@opentiny/vue-theme-saas/svgs/a-i-label-extraction-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAILabelExtraction', component: AILabelExtraction, filledComponent: AILabelExtractionFilled })()
iconFn.__flag = { 'svgName': 'a-i-label-extraction', 'hasFill': true }
export default iconFn
