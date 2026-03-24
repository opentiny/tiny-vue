import { svg } from '@opentiny/vue-common'
import Replies from '@opentiny/vue-theme-saas/svgs/replies.svg'
import RepliesFilled from '@opentiny/vue-theme-saas/svgs/replies-filled.svg'

const iconFn = () => svg({ name: 'IconReplies', component: Replies, filledComponent: RepliesFilled })()
iconFn.__flag = { 'svgName': 'replies', 'hasFill': true }
export default iconFn
