import { svg } from '@opentiny/vue-common'
import CustomsDeclarationList from '@opentiny/vue-theme-saas/svgs/customs-declaration-list.svg'
import CustomsDeclarationListFilled from '@opentiny/vue-theme-saas/svgs/customs-declaration-list-filled.svg'

export default () =>
  svg({
    name: 'IconCustomsDeclarationList',
    component: CustomsDeclarationList,
    filledComponent: CustomsDeclarationListFilled
  })()
