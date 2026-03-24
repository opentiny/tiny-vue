import { svg } from '@opentiny/vue-common'
import AIImageBasedTextRecognition from '@opentiny/vue-theme-saas/svgs/a-i-image-based-text-recognition.svg'
import AIImageBasedTextRecognitionFilled from '@opentiny/vue-theme-saas/svgs/a-i-image-based-text-recognition-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconAIImageBasedTextRecognition',
    component: AIImageBasedTextRecognition,
    filledComponent: AIImageBasedTextRecognitionFilled
  })()
iconFn.__flag = { 'svgName': 'a-i-image-based-text-recognition', 'hasFill': true }
export default iconFn
