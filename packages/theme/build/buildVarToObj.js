import fs from 'node:fs'

export default () => {
  let varsString = fs.readFileSync('../src/base/vars.less', {encoding: 'utf-8'})

  varsString = varsString.replace(':root', 'export const mapVar =')
  .replaceAll('  --tv', '  "--tv')
  .replaceAll(': ', ':')
  .replaceAll(':', '": "')
  .replaceAll(';', '",')

  fs.writeFileSync('./mapVar.js', varsString)
}
