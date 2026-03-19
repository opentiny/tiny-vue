import { svg } from '@opentiny/vue-common'
import AIBrowsingHistory from '@opentiny/vue-theme-saas/svgs/a-i-browsing-history.svg'
import AIBrowsingHistoryFilled from '@opentiny/vue-theme-saas/svgs/a-i-browsing-history-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAIBrowsingHistory', component: AIBrowsingHistory, filledComponent: AIBrowsingHistoryFilled })()
iconFn.__flag = { 'svgName': 'a-i-browsing-history', 'hasFill': true }
export default iconFn
