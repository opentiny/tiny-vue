import { svg } from '@opentiny/vue-common'
import AITakingPhotos from '@opentiny/vue-theme-saas/svgs/a-i-taking-photos.svg'
import AITakingPhotosFilled from '@opentiny/vue-theme-saas/svgs/a-i-taking-photos-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAITakingPhotos', component: AITakingPhotos, filledComponent: AITakingPhotosFilled })()
iconFn.__flag = { 'svgName': 'a-i-taking-photos', 'hasFill': true }
export default iconFn
