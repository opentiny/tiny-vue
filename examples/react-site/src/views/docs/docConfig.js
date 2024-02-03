import { $split } from '@/tools/utils';
// 从npm 仓库的位置，引入所有md. 统一用文件名做key
const docMDs = {};
const mds = import.meta.globEager('@demos/webdoc/**.md');

for (const path in mds) {
  if (Object.prototype.hasOwnProperty.call(mds, path)) {
    const key = $split(path, '/', -1);
    docMDs[key] = mds[path].default;
  }
}

export default docMDs;
