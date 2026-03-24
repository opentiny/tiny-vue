import { svg } from '@opentiny/vue-common'
import Train from '@opentiny/vue-theme-saas/svgs/train.svg'
import TrainFilled from '@opentiny/vue-theme-saas/svgs/train-filled.svg'

const iconFn = () => svg({ name: 'IconTrain', component: Train, filledComponent: TrainFilled })()
iconFn.__flag = { 'svgName': 'train', 'hasFill': true }
export default iconFn
