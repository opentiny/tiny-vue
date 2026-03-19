import { svg } from '@opentiny/vue-common'
import Draft from '@opentiny/vue-theme-saas/svgs/draft.svg'

const iconFn = () => svg({ name: 'IconDraft', component: Draft, filledComponent: Draft })()

iconFn.__flag = { 'svgName': 'draft', 'hasFill': false }
export default iconFn
