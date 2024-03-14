import { iconPutAway, iconExpand } from '@opentiny/vue-icon'

export default {
  icons: {
    // 在 showLine=true时，才要切换的图标。 并不是设置正常模式下的图标
    expanded: iconExpand(),
    collapse: iconPutAway()
  }
}
