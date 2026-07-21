import { svg } from '@opentiny/vue-common'
import ProProduce from '@opentiny/vue-theme-saas/svgs/pro-produce.svg'

const iconFn = () => svg({ name: 'IconProProduce', component: ProProduce, filledComponent: ProProduce })()

iconFn.__flag = { 'svgName': 'pro-produce', 'hasFill': false }
export default iconFn
