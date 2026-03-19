import { svg } from '@opentiny/vue-common'
import MultidimensionalChangeList from '@opentiny/vue-theme-saas/svgs/multidimensional-change-list.svg'
import MultidimensionalChangeListFilled from '@opentiny/vue-theme-saas/svgs/multidimensional-change-list-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconMultidimensionalChangeList',
    component: MultidimensionalChangeList,
    filledComponent: MultidimensionalChangeListFilled
  })()
iconFn.__flag = { 'svgName': 'multidimensional-change-list', 'hasFill': true }
export default iconFn
