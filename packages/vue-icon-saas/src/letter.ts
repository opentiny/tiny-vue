import { svg } from '@opentiny/vue-common'
import Letter from '@opentiny/vue-theme-saas/svgs/letter.svg'
import LetterFilled from '@opentiny/vue-theme-saas/svgs/letter-filled.svg'

const iconFn = () => svg({ name: 'IconLetter', component: Letter, filledComponent: LetterFilled })()
iconFn.__flag = { 'svgName': 'letter', 'hasFill': true }
export default iconFn
