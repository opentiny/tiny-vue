import { svg } from '@opentiny/vue-common'
import AITechnicalInsightsQA from '@opentiny/vue-theme-saas/svgs/a-i-technical-insights-q-a.svg'
import AITechnicalInsightsQAFilled from '@opentiny/vue-theme-saas/svgs/a-i-technical-insights-q-a-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconAITechnicalInsightsQA',
    component: AITechnicalInsightsQA,
    filledComponent: AITechnicalInsightsQAFilled
  })()
iconFn.__flag = { 'svgName': 'a-i-technical-insights-q-a', 'hasFill': true }
export default iconFn
