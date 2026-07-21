import { svg } from '@opentiny/vue-common'
import HotEn from '@opentiny/vue-theme-saas/svgs/hot-en.svg'
import HotEnFilled from '@opentiny/vue-theme-saas/svgs/hot-en-filled.svg'

const iconFn = () => svg({ name: 'IconHotEn', component: HotEn, filledComponent: HotEnFilled })()
iconFn.__flag = { 'svgName': 'hot-en', 'hasFill': true }
export default iconFn
