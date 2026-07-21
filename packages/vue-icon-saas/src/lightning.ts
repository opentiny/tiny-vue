import { svg } from '@opentiny/vue-common'
import Lightning from '@opentiny/vue-theme-saas/svgs/lightning.svg'

const iconFn = () => svg({ name: 'IconLightning', component: Lightning, filledComponent: Lightning })()

iconFn.__flag = { 'svgName': 'lightning', 'hasFill': false }
export default iconFn
