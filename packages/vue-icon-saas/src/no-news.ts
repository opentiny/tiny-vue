import { svg } from '@opentiny/vue-common'
import NoNews from '@opentiny/vue-theme-saas/svgs/no-news.svg'

const iconFn = () => svg({ name: 'IconNoNews', component: NoNews, filledComponent: NoNews })()

iconFn.__flag = { 'svgName': 'no-news', 'hasFill': false }
export default iconFn
