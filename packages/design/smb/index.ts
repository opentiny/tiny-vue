import TreeNode from './src/tree-node'

import UploadList from './src/upload-list'
import Milestone from './src/milestone'
import TransferPanel from './src/transfer-panel'
import { version } from './package.json'

export default {
  name: 'smb',
  version,
  components: {
    TreeNode,
    UploadList,
    Milestone,
    TransferPanel
  }
}
