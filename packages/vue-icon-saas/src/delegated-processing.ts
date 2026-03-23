import { svg } from '@opentiny/vue-common'
import DelegatedProcessing from '@opentiny/vue-theme-saas/svgs/delegated-processing.svg'
import DelegatedProcessingFilled from '@opentiny/vue-theme-saas/svgs/delegated-processing-filled.svg'

const iconFn = () =>
  svg({ name: 'IconDelegatedProcessing', component: DelegatedProcessing, filledComponent: DelegatedProcessingFilled })()
iconFn.__flag = { 'svgName': 'delegated-processing', 'hasFill': true }
export default iconFn
