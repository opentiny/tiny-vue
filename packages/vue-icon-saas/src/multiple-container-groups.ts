import { svg } from '@opentiny/vue-common'
import MultipleContainerGroups from '@opentiny/vue-theme-saas/svgs/multiple-container-groups.svg'
import MultipleContainerGroupsFilled from '@opentiny/vue-theme-saas/svgs/multiple-container-groups-filled.svg'

export default () =>
  svg({
    name: 'IconMultipleContainerGroups',
    component: MultipleContainerGroups,
    filledComponent: MultipleContainerGroupsFilled
  })()
