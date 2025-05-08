import { test, expect } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('覆盖默认请求', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#http-request')

  const upload = page.getByRole('button', { name: '点击上传' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const modal = page.locator('.tiny-modal')

  const currentPath = path.resolve(__dirname, '测试.jpg')

  await fileChooser.setFiles(currentPath)
  await modal.waitFor({ state: 'attached', timeout: 600 })
  await expect(lists).toHaveCount(1)
  await expect(lists).toHaveText(/测试.jpg/)
})
