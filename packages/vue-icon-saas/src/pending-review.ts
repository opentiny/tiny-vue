import { svg } from '@opentiny/vue-common'
import PendingReview from '@opentiny/vue-theme-saas/svgs/pending-review.svg'
import PendingReviewFilled from '@opentiny/vue-theme-saas/svgs/pending-review-filled.svg'

export default () =>
  svg({ name: 'IconPendingReview', component: PendingReview, filledComponent: PendingReviewFilled })()
