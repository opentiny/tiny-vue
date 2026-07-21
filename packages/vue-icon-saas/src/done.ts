import { svg } from '@opentiny/vue-common'
import Done from '@opentiny/vue-theme-saas/svgs/done.svg'

const iconFn = () => svg({ name: 'IconDone', component: Done, filledComponent: Done })()

iconFn.__flag = { 'svgName': 'done', 'hasFill': false }
export default iconFn
