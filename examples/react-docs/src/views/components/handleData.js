export function getFileName(path = '', type = 0, demo) {
  let path2 = path
  if (path.includes('chart')) {
    path = 'chart'
  }
  return [
    '../../../demos/pc/app/' + path + '/webdoc/' + path2 + '.cn.md',
    `../../../demos/pc/app/${path}/webdoc/${path2}.js`,
    `../../../demos/apis/${path}.js`,
    `../../../demos/pc/app/${path}/${demo?.codeFiles[0]}`,
    `${path}/${demo?.codeFiles[0]}`
  ][type]
}
