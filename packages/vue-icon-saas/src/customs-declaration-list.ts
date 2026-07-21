import { svg } from '@opentiny/vue-common'
import CustomsDeclarationList from '@opentiny/vue-theme-saas/svgs/customs-declaration-list.svg'
import CustomsDeclarationListFilled from '@opentiny/vue-theme-saas/svgs/customs-declaration-list-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconCustomsDeclarationList',
    component: CustomsDeclarationList,
    filledComponent: CustomsDeclarationListFilled
  })()
iconFn.__flag = { 'svgName': 'customs-declaration-list', 'hasFill': true }
export default iconFn
