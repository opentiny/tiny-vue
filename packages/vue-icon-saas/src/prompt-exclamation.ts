import { svg } from '@opentiny/vue-common'
import PromptExclamation from '@opentiny/vue-theme-saas/svgs/prompt-exclamation.svg'

const iconFn = () =>
  svg({ name: 'IconPromptExclamation', component: PromptExclamation, filledComponent: PromptExclamation })()

iconFn.__flag = { 'svgName': 'prompt-exclamation', 'hasFill': false }
export default iconFn
