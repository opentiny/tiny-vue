import { svg } from '@opentiny/vue-common'
import UnderReview from '@opentiny/vue-theme-saas/svgs/under-review.svg'
import UnderReviewFilled from '@opentiny/vue-theme-saas/svgs/under-review-filled.svg'

const iconFn = () => svg({ name: 'IconUnderReview', component: UnderReview, filledComponent: UnderReviewFilled })()
iconFn.__flag = { 'svgName': 'under-review', 'hasFill': true }
export default iconFn
