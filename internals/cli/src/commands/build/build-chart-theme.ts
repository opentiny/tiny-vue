import fs from 'node:fs'
import path from 'node:path'

const changeTheme = () => {
  const THEMES = {
    dark: 'dark',
    light: 'light',
    bpit: 'bpit-light',
    bpit_dark: 'bpit-dark',
    cloud_dark: 'cloud-dark',
    cloud: 'cloud-light',
    hdesign: 'hdesign-light',
    hdesign_dark: 'hdesign-dark'
  }

  // 获取命令行参数
  const theme = THEMES[process.argv[3]] || process.argv[3] || THEMES.bpit

  // 确保提供了正确的主题参数
  if (!theme) {
    process.exit(1)
  }

  // 你想要替换的文件
  const filePath = path.join(__dirname, '../../../../../packages/vue/src/huicharts/huicharts-core/src/chart-core.ts')

  // 读取文件内容
  let content = fs.readFileSync(filePath, 'utf-8')

  // 替换 process.env.VAR_NAME 为对应主题的值
  content = content.replace(/option\.theme\s=\s'[a-zA-Z_-]+'/g, `option.theme = '${theme}'`)

  // 写入新内容到文件
  fs.writeFileSync(filePath, content, 'utf-8')
}

export const chartTheme = () => {
  changeTheme()
}
