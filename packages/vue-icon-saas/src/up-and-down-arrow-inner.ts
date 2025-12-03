import { svg } from '@opentiny/vue-common'
import UpAndDownArrowInner from '@opentiny/vue-theme-saas/svgs/up-and-down-arrow-inner.svg'
import UpAndDownArrowInnerFilled from '@opentiny/vue-theme-saas/svgs/up-and-down-arrow-inner-filled.svg'

export default () =>
  svg({ name: 'IconUpAndDownArrowInner', component: UpAndDownArrowInner, filledComponent: UpAndDownArrowInnerFilled })()
