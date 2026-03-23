import { svg } from '@opentiny/vue-common'
import Association from '@opentiny/vue-theme-saas/svgs/association.svg'
import AssociationFilled from '@opentiny/vue-theme-saas/svgs/association-filled.svg'

const iconFn = () => svg({ name: 'IconAssociation', component: Association, filledComponent: AssociationFilled })()
iconFn.__flag = { 'svgName': 'association', 'hasFill': true }
export default iconFn
