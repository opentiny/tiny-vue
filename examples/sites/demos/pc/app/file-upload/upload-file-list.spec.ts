import { test, expect } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('文件列表', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#upload-file-list')

  const container = page.locator('#upload-file-list')
  const upload = container.getByRole('button', { name: '点击上传' })
  const items = container.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const { width, height } = await items.nth(0).boundingBox()

  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(width).toBeGreaterThanOrEqual(height)
  // 行高取 1.5，计算结果是 21
  await expect(height).toBeGreaterThanOrEqual(21, 0)
  await expect(items).toHaveCount(2)
  await expect(items).toHaveText([/test1/, /test2/])
  await fileChooser.setFiles(currentPath)
  await container.getByText('测试.jpg').isVisible()
  await expect(items).toHaveText([/test1/, /test2/])
})
