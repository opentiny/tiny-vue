import { svg } from '@opentiny/vue-common'
import Produce from '@opentiny/vue-theme-saas/svgs/produce.svg'
import ProduceFilled from '@opentiny/vue-theme-saas/svgs/produce-filled.svg'

const iconFn = () => svg({ name: 'IconProduce', component: Produce, filledComponent: ProduceFilled })()
iconFn.__flag = { 'svgName': 'produce', 'hasFill': true }
export default iconFn
