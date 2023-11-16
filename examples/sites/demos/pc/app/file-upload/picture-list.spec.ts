import { test, expect } from '@playwright/test'

test('图片列表缩略图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#picture-list')

  const upload = page.locator('.tiny-upload')
  const lists = page.locator('.tiny-upload-list__item')
  const item1 = page.getByText('test1按 delete 键可删除')
  const item2 = page.getByText('test2按 delete 键可删除')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const { width, height } = await item1.boundingBox()
  const images = page.locator('.tiny-upload-list__item-thumbnail')
  const triangles = page.locator('.tiny-upload-list__item-status-label')

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(width).toEqual(771)
  await expect(height).toEqual(56)
  await expect(lists).toHaveCount(2)
  await fileChooser.setFiles(currentPath)
  await expect(images.nth(0)).toHaveCSS('width', '56px')
  await expect(images.nth(0)).toHaveCSS('height', '56px')
  await expect(images.nth(0)).toHaveAttribute('src', '/static/images/fruit.jpg')
  await expect(images.nth(1)).toHaveAttribute('src', '/static/images/book.jpg')
  await expect(triangles.nth(0)).toHaveCSS('transform', 'matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)')
})
