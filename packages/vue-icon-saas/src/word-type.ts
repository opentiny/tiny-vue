import { svg } from '@opentiny/vue-common'
import WordType from '@opentiny/vue-theme-saas/svgs/word-type.svg'
import WordTypeFilled from '@opentiny/vue-theme-saas/svgs/word-type-filled.svg'

const iconFn = () => svg({ name: 'IconWordType', component: WordType, filledComponent: WordTypeFilled })()
iconFn.__flag = { 'svgName': 'word-type', 'hasFill': true }
export default iconFn
