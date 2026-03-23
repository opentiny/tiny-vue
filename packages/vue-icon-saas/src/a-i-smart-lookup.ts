import { svg } from '@opentiny/vue-common'
import AISmartLookup from '@opentiny/vue-theme-saas/svgs/a-i-smart-lookup.svg'
import AISmartLookupFilled from '@opentiny/vue-theme-saas/svgs/a-i-smart-lookup-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAISmartLookup', component: AISmartLookup, filledComponent: AISmartLookupFilled })()
iconFn.__flag = { 'svgName': 'a-i-smart-lookup', 'hasFill': true }
export default iconFn
