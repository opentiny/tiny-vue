import fs from 'fs-extra'
import { pathFromWorkspaceRoot } from '../../config/vite'

const pathFromExamples = (...args) => pathFromWorkspaceRoot('examples', ...args)

const playWrightConfigPath = pathFromExamples('vue3/playwright.config.js')

export const releaseE2EConfig = ({ origin }) => {
  const content = fs.readFileSync(playWrightConfigPath).toString('UTF-8' as BufferEncoding)
  const result = origin
    ? content.replace('http://localhost:3101/tiny-vue', origin).replace('pnpm run -w site', '')
    : content

  fs.writeFileSync(playWrightConfigPath, result)
}
