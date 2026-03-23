import { svg } from '@opentiny/vue-common'
import AgendaView from '@opentiny/vue-theme-saas/svgs/agenda-view.svg'
import AgendaViewFilled from '@opentiny/vue-theme-saas/svgs/agenda-view-filled.svg'

const iconFn = () => svg({ name: 'IconAgendaView', component: AgendaView, filledComponent: AgendaViewFilled })()
iconFn.__flag = { 'svgName': 'agenda-view', 'hasFill': true }
export default iconFn
