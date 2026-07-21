import { svg } from '@opentiny/vue-common'
import AISearchPeople from '@opentiny/vue-theme-saas/svgs/a-i-search-people.svg'
import AISearchPeopleFilled from '@opentiny/vue-theme-saas/svgs/a-i-search-people-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAISearchPeople', component: AISearchPeople, filledComponent: AISearchPeopleFilled })()
iconFn.__flag = { 'svgName': 'a-i-search-people', 'hasFill': true }
export default iconFn
