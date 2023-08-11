import { $split } from '@/tools/utils'

export const transformIdSelector = (idStr) => {
  if (typeof idStr === 'string') {
    return idStr.replace(/(\*|\.|\?|\+|\$|\^|\[|\]|\(|\)|\{|\}|\||\/|\%|\\)/g, (str) => {
      return '\\' + str
    })
  } else {
    return idStr
  }
}

// 从npm 仓库的位置，引入所有md. 统一用文件名做key
const docMDs = {}
const mds = import.meta.glob('@demos/webdoc/**.md')

for (const path in mds) {
  if (Object.prototype.hasOwnProperty.call(mds, path)) {
    const key = $split(path, '/', -1)
    docMDs[key] = mds[path]
  }
}

export default docMDs
