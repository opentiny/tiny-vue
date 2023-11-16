import { test, expect } from '@playwright/test'

test('照片墙', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#picture-card')

  const upload = page.locator('.tiny-upload')
  const lists = page.locator('.tiny-upload-list__item')
  const first = lists.nth(0)
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const delButton = page
    .getByRole('listitem')
    .filter({ hasText: 'fruit按 delete 键可删除' })
    .locator('svg')
    .nth(4)
    .first()
  const prevPic = page.getByTitle('预览文件').first()
  const prevImg = page.locator('.tiny-dialog-box__body > img')
  const dialogClose = page.getByRole('button', { name: 'Close' })
  const { width, height } = await first.boundingBox()

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(width).toEqual(148)
  await expect(height).toEqual(148)
  await expect(lists).toHaveCount(1)
  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveCount(2)
  await first.hover()
  await prevPic.click()
  await expect(prevImg).toHaveAttribute('src', '/static/images/fruit.jpg')
  await dialogClose.click()
  await first.hover()
  await delButton.click()
  await expect(lists).toHaveCount(1)
})
