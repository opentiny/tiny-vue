import { svg } from '@opentiny/vue-common'
import AlignCenter from '@opentiny/vue-theme-saas/svgs/align-center.svg'

const iconFn = () => svg({ name: 'IconAlignCenter', component: AlignCenter, filledComponent: AlignCenter })()

iconFn.__flag = { 'svgName': 'align-center', 'hasFill': false }
export default iconFn
