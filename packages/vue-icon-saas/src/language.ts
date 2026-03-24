import { svg } from '@opentiny/vue-common'
import Language from '@opentiny/vue-theme-saas/svgs/language.svg'

const iconFn = () => svg({ name: 'IconLanguage', component: Language, filledComponent: Language })()

iconFn.__flag = { 'svgName': 'language', 'hasFill': false }
export default iconFn
