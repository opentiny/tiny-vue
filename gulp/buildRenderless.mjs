import gulp from 'gulp'
import minimist from 'minimist'
import shell from 'shelljs'

const build = gulp.series(tsup, release, publish)
build.description = '构建 @opentiny/renderless'
build.flags = {
  '--ver': '设置版本号，比如  --ver 3.8.7',
  '--publish -p': '自动发布（提前修改好用户下的.npmrc）'
}
export default build

function tsup(cb) {
  shell.cd('packages/renderless')
  shell.rm('-rf', 'dist')
  shell.exec('npx tsup')
  cb()
}

function release(cb) {
  const argv = minimist(process.argv.slice(2))
  if (!argv.ver) {
    cb(new Error('必须填写 --ver 参数'))
  }

  shell.cp('README.md', 'dist/README.md')

  const pck = JSON.parse(shell.cat('package.json'))
  delete pck.exports
  delete pck.private
  pck.version = argv.ver

  shell.ShellString(JSON.stringify(pck, null, '  ')).to('dist/package.json')

  cb()
}

function publish(cb) {
  const argv = minimist(process.argv.slice(2))
  if (argv.p || argv.publish) {
    shell.cd('dist')
    shell.exec('npm publish')
  }
  cb()
}
