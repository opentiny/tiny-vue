import { svg } from '@opentiny/vue-common'
import LightningLine from '@opentiny/vue-theme-saas/svgs/lightning-line.svg'

const iconFn = () => svg({ name: 'IconLightningLine', component: LightningLine, filledComponent: LightningLine })()

iconFn.__flag = { 'svgName': 'lightning-line', 'hasFill': false }
export default iconFn
