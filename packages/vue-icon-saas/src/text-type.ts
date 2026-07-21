import { svg } from '@opentiny/vue-common'
import TextType from '@opentiny/vue-theme-saas/svgs/text-type.svg'
import TextTypeFilled from '@opentiny/vue-theme-saas/svgs/text-type-filled.svg'

const iconFn = () => svg({ name: 'IconTextType', component: TextType, filledComponent: TextTypeFilled })()
iconFn.__flag = { 'svgName': 'text-type', 'hasFill': true }
export default iconFn
