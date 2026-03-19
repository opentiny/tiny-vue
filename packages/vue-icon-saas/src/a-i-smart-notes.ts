import { svg } from '@opentiny/vue-common'
import AISmartNotes from '@opentiny/vue-theme-saas/svgs/a-i-smart-notes.svg'
import AISmartNotesFilled from '@opentiny/vue-theme-saas/svgs/a-i-smart-notes-filled.svg'

const iconFn = () => svg({ name: 'IconAISmartNotes', component: AISmartNotes, filledComponent: AISmartNotesFilled })()
iconFn.__flag = { 'svgName': 'a-i-smart-notes', 'hasFill': true }
export default iconFn
