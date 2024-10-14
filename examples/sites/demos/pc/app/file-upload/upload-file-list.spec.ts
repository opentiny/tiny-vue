import { test, expect } from '@playwright/test'

test('文件列表', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#upload-file-list')

  const container = page.locator('#upload-file-list')
  const upload = container.getByRole('button', { name: '点击上传' })
  const items = container.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const { width, height } = await items.nth(0).boundingBox()

  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(width).toBeGreaterThanOrEqual(height)
  await expect(height).toBeGreaterThanOrEqual(22, 0)
  await expect(items).toHaveCount(2)
  await expect(items).toHaveText([/test1/, /test2/])
  await fileChooser.setFiles(currentPath)
  await container.getByText('测试.jpg').isVisible()
  await expect(items).toHaveText([/test1/, /test2/])
})
