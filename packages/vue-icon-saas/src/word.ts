import { svg } from '@opentiny/vue-common'
import Word from '@opentiny/vue-theme-saas/svgs/word.svg'

const iconFn = () => svg({ name: 'IconWord', component: Word, filledComponent: Word })()

iconFn.__flag = { 'svgName': 'word', 'hasFill': false }
export default iconFn
