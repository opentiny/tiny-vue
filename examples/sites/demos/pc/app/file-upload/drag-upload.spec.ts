import { test, expect } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('是否可以拖拽上传', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#drag-upload')

  const drag = page.locator('.tiny-upload-dragger')
  const lists = page.locator('.tiny-upload-list__item')
  const input = page.locator('.tiny-upload__input')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), drag.click()])

  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(drag).toHaveCSS('width', '100px')
  await expect(drag).toHaveCSS('height', '100px')
  await fileChooser.setFiles(currentPath)
  await lists.getByText('测试.jpg').isVisible()
  await expect(input).toHaveAttribute('accept', '.png,.jpeg,.jpg')
})
