import { svg } from '@opentiny/vue-common'
import AISmartTranslation from '@opentiny/vue-theme-saas/svgs/a-i-smart-translation.svg'
import AISmartTranslationFilled from '@opentiny/vue-theme-saas/svgs/a-i-smart-translation-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAISmartTranslation', component: AISmartTranslation, filledComponent: AISmartTranslationFilled })()
iconFn.__flag = { 'svgName': 'a-i-smart-translation', 'hasFill': true }
export default iconFn
