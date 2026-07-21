import { svg } from '@opentiny/vue-common'
import ProLanguage from '@opentiny/vue-theme-saas/svgs/pro-language.svg'

const iconFn = () => svg({ name: 'IconProLanguage', component: ProLanguage, filledComponent: ProLanguage })()

iconFn.__flag = { 'svgName': 'pro-language', 'hasFill': false }
export default iconFn
