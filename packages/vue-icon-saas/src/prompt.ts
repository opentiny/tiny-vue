import { svg } from '@opentiny/vue-common'
import Prompt from '@opentiny/vue-theme-saas/svgs/prompt.svg'

const iconFn = () => svg({ name: 'IconPrompt', component: Prompt, filledComponent: Prompt })()

iconFn.__flag = { 'svgName': 'prompt', 'hasFill': false }
export default iconFn
