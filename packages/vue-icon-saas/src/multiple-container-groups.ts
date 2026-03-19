import { svg } from '@opentiny/vue-common'
import MultipleContainerGroups from '@opentiny/vue-theme-saas/svgs/multiple-container-groups.svg'
import MultipleContainerGroupsFilled from '@opentiny/vue-theme-saas/svgs/multiple-container-groups-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconMultipleContainerGroups',
    component: MultipleContainerGroups,
    filledComponent: MultipleContainerGroupsFilled
  })()
iconFn.__flag = { 'svgName': 'multiple-container-groups', 'hasFill': true }
export default iconFn
