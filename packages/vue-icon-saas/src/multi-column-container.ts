import { svg } from '@opentiny/vue-common'
import MultiColumnContainer from '@opentiny/vue-theme-saas/svgs/multi-column-container.svg'
import MultiColumnContainerFilled from '@opentiny/vue-theme-saas/svgs/multi-column-container-filled.svg'

export default () =>
  svg({
    name: 'IconMultiColumnContainer',
    component: MultiColumnContainer,
    filledComponent: MultiColumnContainerFilled
  })()
