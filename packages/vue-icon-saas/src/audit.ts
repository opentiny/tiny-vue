import { svg } from '@opentiny/vue-common'
import Audit from '@opentiny/vue-theme-saas/svgs/audit.svg'
import AuditFilled from '@opentiny/vue-theme-saas/svgs/audit-filled.svg'

const iconFn = () => svg({ name: 'IconAudit', component: Audit, filledComponent: AuditFilled })()
iconFn.__flag = { 'svgName': 'audit', 'hasFill': true }
export default iconFn
