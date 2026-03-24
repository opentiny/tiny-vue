import { svg } from '@opentiny/vue-common'
import Audio from '@opentiny/vue-theme-saas/svgs/audio.svg'
import AudioFilled from '@opentiny/vue-theme-saas/svgs/audio-filled.svg'

const iconFn = () => svg({ name: 'IconAudio', component: Audio, filledComponent: AudioFilled })()
iconFn.__flag = { 'svgName': 'audio', 'hasFill': true }
export default iconFn
