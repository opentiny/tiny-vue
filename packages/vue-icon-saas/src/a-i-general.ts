import { svg } from '@opentiny/vue-common'
import AIGeneral from '@opentiny/vue-theme-saas/svgs/a-i-general.svg'
import AIGeneralFilled from '@opentiny/vue-theme-saas/svgs/a-i-general-filled.svg'

const iconFn = () => svg({ name: 'IconAIGeneral', component: AIGeneral, filledComponent: AIGeneralFilled })()
iconFn.__flag = { 'svgName': 'a-i-general', 'hasFill': true }
export default iconFn
