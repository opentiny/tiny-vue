import TinyIconActivation from '@opentiny/vue-icon/activation/index.ts'
import TinyIconShare from '@opentiny/vue-icon/share/index.ts'
import TinyIconDel from '@opentiny/vue-icon/del/index.ts'
import TinyIconWriting from '@opentiny/vue-icon/writing/index.ts'
import TinyIconAscending from '@opentiny/vue-icon/ascending/index.ts'
import TinyIconClockWork from '@opentiny/vue-icon/clock-work/index.ts'
import './icon.less'

export default function () {
  return (
    <div className="icon-demo">
      <TinyIconActivation></TinyIconActivation>
      <TinyIconShare></TinyIconShare>
      <TinyIconDel></TinyIconDel>
      <TinyIconWriting></TinyIconWriting>
      <TinyIconAscending></TinyIconAscending>
      <TinyIconClockWork></TinyIconClockWork>
    </div>
  )
}
