import { svg } from '@opentiny/vue-common'
import LocalePanel from '@opentiny/vue-theme-saas/svgs/locale-panel.svg'

const iconFn = () => svg({ name: 'IconLocalePanel', component: LocalePanel, filledComponent: LocalePanel })()

iconFn.__flag = { 'svgName': 'locale-panel', 'hasFill': false }
export default iconFn
