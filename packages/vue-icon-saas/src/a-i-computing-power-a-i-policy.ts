import { svg } from '@opentiny/vue-common'
import AIComputingPowerAIPolicy from '@opentiny/vue-theme-saas/svgs/a-i-computing-power-a-i-policy.svg'
import AIComputingPowerAIPolicyFilled from '@opentiny/vue-theme-saas/svgs/a-i-computing-power-a-i-policy-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconAIComputingPowerAIPolicy',
    component: AIComputingPowerAIPolicy,
    filledComponent: AIComputingPowerAIPolicyFilled
  })()
iconFn.__flag = { 'svgName': 'a-i-computing-power-a-i-policy', 'hasFill': true }
export default iconFn
