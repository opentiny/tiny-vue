import TreeNode from './src/tree-node'
import TimeSpinner from './src/time-spinner'
import TimeRange from './src/time-range'
import Time from './src/time-spinner'
import UploadList from './src/upload-list'
import Milestone from './src/milestone'
import TransferPanel from './src/transfer-panel'
import { version } from './package.json'

export default {
  name: 'smb',
  version,
  components: {
    TreeNode,
    TimeSpinner,
    TimeRange,
    Time,
    UploadList,
    Milestone,
    TransferPanel
  }
}
