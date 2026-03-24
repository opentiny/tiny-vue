import { svg } from '@opentiny/vue-common'
import ProMatter from '@opentiny/vue-theme-saas/svgs/pro-matter.svg'

const iconFn = () => svg({ name: 'IconProMatter', component: ProMatter, filledComponent: ProMatter })()

iconFn.__flag = { 'svgName': 'pro-matter', 'hasFill': false }
export default iconFn
