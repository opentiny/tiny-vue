import { test, expect } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('图片列表缩略图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#picture-list')

  const container = page.locator('#picture-list')
  const upload = container.locator('.tiny-upload')
  const lists = container.locator('.tiny-upload-list__item')
  const item1 = container.getByText('test1按 delete 键可删除')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const { width, height } = await item1.boundingBox()
  const images = container.locator('.tiny-upload-list__item-thumbnail')

  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(width).toBeGreaterThanOrEqual(height)
  await expect(height).toBeGreaterThanOrEqual(56)
  await expect(lists).toHaveCount(2)
  await fileChooser.setFiles(currentPath)
  await expect(images.nth(0)).toHaveCSS('width', '56px')
  await expect(images.nth(0)).toHaveCSS('height', '56px')
  await expect(images.nth(0)).toHaveAttribute('src', /\/fruit.jpg/)
  await expect(images.nth(1)).toHaveAttribute('src', /\/book.jpg/)
})
