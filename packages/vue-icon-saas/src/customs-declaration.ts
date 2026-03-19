import { svg } from '@opentiny/vue-common'
import CustomsDeclaration from '@opentiny/vue-theme-saas/svgs/customs-declaration.svg'
import CustomsDeclarationFilled from '@opentiny/vue-theme-saas/svgs/customs-declaration-filled.svg'

const iconFn = () =>
  svg({ name: 'IconCustomsDeclaration', component: CustomsDeclaration, filledComponent: CustomsDeclarationFilled })()
iconFn.__flag = { 'svgName': 'customs-declaration', 'hasFill': true }
export default iconFn
