import { svg } from '@opentiny/vue-common'
import EditorVideo from '@opentiny/vue-theme-saas/svgs/editor-video.svg'
import EditorVideoFilled from '@opentiny/vue-theme-saas/svgs/editor-video-filled.svg'

const iconFn = () => svg({ name: 'IconEditorVideo', component: EditorVideo, filledComponent: EditorVideoFilled })()
iconFn.__flag = { 'svgName': 'editor-video', 'hasFill': true }
export default iconFn
