import { svg } from '@opentiny/vue-common'
import TextAlign from '@opentiny/vue-theme-saas/svgs/text-align.svg'

const iconFn = () => svg({ name: 'IconTextAlign', component: TextAlign, filledComponent: TextAlign })()

iconFn.__flag = { 'svgName': 'text-align', 'hasFill': false }
export default iconFn
