import { svg } from '@opentiny/vue-common'
import AlignJustify from '@opentiny/vue-theme-saas/svgs/align-justify.svg'

const iconFn = () => svg({ name: 'IconAlignJustify', component: AlignJustify, filledComponent: AlignJustify })()

iconFn.__flag = { 'svgName': 'align-justify', 'hasFill': false }
export default iconFn
