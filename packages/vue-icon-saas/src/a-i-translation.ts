import { svg } from '@opentiny/vue-common'
import AITranslation from '@opentiny/vue-theme-saas/svgs/a-i-translation.svg'
import AITranslationFilled from '@opentiny/vue-theme-saas/svgs/a-i-translation-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAITranslation', component: AITranslation, filledComponent: AITranslationFilled })()
iconFn.__flag = { 'svgName': 'a-i-translation', 'hasFill': true }
export default iconFn
