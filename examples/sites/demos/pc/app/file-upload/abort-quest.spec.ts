import { test, expect } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('手动取消上传请求', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#abort-quest')

  const upload = page.getByRole('button', { name: '点击上传' })
  const item = page.locator('.tiny-upload-list__li').nth(0)
  const modal = page.locator('.tiny-modal')
  const button = page.locator('button').filter({ hasText: '取消上传' })
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  const currentPath = path.resolve(__dirname, '测试.jpg')

  await fileChooser.setFiles(currentPath)
  await item.isVisible()
  await button.click()
  await expect(modal.nth(1)).toHaveText('手动取消上传')
  await item.isHidden()
  await expect(fileChooser.isMultiple()).toBe(false)
})
