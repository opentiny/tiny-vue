import { svg } from '@opentiny/vue-common'
import JusitfyCenter from '@opentiny/vue-theme-saas/svgs/jusitfy-center.svg'

const iconFn = () => svg({ name: 'IconJusitfyCenter', component: JusitfyCenter, filledComponent: JusitfyCenter })()

iconFn.__flag = { 'svgName': 'jusitfy-center', 'hasFill': false }
export default iconFn
