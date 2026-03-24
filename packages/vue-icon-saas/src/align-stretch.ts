import { svg } from '@opentiny/vue-common'
import AlignStretch from '@opentiny/vue-theme-saas/svgs/align-stretch.svg'

const iconFn = () => svg({ name: 'IconAlignStretch', component: AlignStretch, filledComponent: AlignStretch })()

iconFn.__flag = { 'svgName': 'align-stretch', 'hasFill': false }
export default iconFn
