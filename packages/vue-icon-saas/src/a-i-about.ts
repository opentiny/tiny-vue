import { svg } from '@opentiny/vue-common'
import AIAbout from '@opentiny/vue-theme-saas/svgs/a-i-about.svg'
import AIAboutFilled from '@opentiny/vue-theme-saas/svgs/a-i-about-filled.svg'

const iconFn = () => svg({ name: 'IconAIAbout', component: AIAbout, filledComponent: AIAboutFilled })()
iconFn.__flag = { 'svgName': 'a-i-about', 'hasFill': true }
export default iconFn
