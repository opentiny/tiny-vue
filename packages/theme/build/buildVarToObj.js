import fs from 'node:fs'

export default () => {
  let varsString = fs.readFileSync('../src/base/vars.less', { encoding: 'utf-8' })

  const startIndex = varsString.indexOf('{')

  varsString =
    'export const mapVar = ' +
    varsString
      .slice(startIndex)
      .replaceAll('  --tv', '  "--tv')
      .replaceAll(': ', ':')
      .replaceAll(':', '": "')
      .replaceAll(';', '",')

  fs.writeFileSync('./mapVar.js', varsString)
}
