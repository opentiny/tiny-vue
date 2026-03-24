import { svg } from '@opentiny/vue-common'
import AIMemorySpace from '@opentiny/vue-theme-saas/svgs/a-i-memory-space.svg'
import AIMemorySpaceFilled from '@opentiny/vue-theme-saas/svgs/a-i-memory-space-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAIMemorySpace', component: AIMemorySpace, filledComponent: AIMemorySpaceFilled })()
iconFn.__flag = { 'svgName': 'a-i-memory-space', 'hasFill': true }
export default iconFn
