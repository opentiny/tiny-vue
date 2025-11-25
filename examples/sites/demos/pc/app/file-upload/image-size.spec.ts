import { test, expect } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('获取图片的原始尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#image-size')

  const upload = page.getByRole('button', { name: '点击上传' })
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const modal = page.locator('.tiny-modal')

  const currentPath = path.resolve(__dirname, '测试.jpg')

  await fileChooser.setFiles(currentPath)
  await expect(modal.nth(1)).toHaveText(/宽：\d+ 高：\d+/)
})
