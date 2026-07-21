import { svg } from '@opentiny/vue-common'
import PendingReview from '@opentiny/vue-theme-saas/svgs/pending-review.svg'
import PendingReviewFilled from '@opentiny/vue-theme-saas/svgs/pending-review-filled.svg'

const iconFn = () =>
  svg({ name: 'IconPendingReview', component: PendingReview, filledComponent: PendingReviewFilled })()
iconFn.__flag = { 'svgName': 'pending-review', 'hasFill': true }
export default iconFn
