import fs from 'node:fs'
import path from 'node:path'

const changeTheme = () => {
  const THEMES = {
    dark: 'DARK',
    light: 'LIGHT',
    bpit: 'BPIT_LIGHT',
    bpit_dark: 'BPIT_DARK',
    cloud_dark: 'CLOUD_DARK',
    cloud: 'CLOUD_LIGHT',
    hdesign: 'HDESIGN_LIGHT',
    hdesign_dark: 'HDESIGN_DARK'
  }

  // 获取命令行参数
  const theme = THEMES[process.argv[3]] || process.argv[3] || THEMES.bpit

  // 确保提供了正确的主题参数
  if (!theme) {
    process.exit(1)
  }

  // 你想要替换的文件
  const filePath = path.join(
    __dirname,
    '../../../../../packages/vue/src/chart/chart-core/base/feature/token/constants.ts'
  )

  // 读取文件内容
  let content = fs.readFileSync(filePath, 'utf-8')

  // 替换 process.env.VAR_NAME 为对应主题的值
  content = content.replace(
    /const\sDEFAULT_THEME_NAME\s=\sTHEMES\.[a-zA-Z_]+/g,
    `const DEFAULT_THEME_NAME = THEMES.${theme}`
  )

  // 写入新内容到文件
  fs.writeFileSync(filePath, content, 'utf-8')
}

export const chartTheme = () => {
  changeTheme()
}
