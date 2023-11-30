import { test, expect } from '@playwright/test'

test('是否可以拖拽上传', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#drag-upload')

  const drag = page.locator('.tiny-upload-dragger')
  const lists = page.locator('.tiny-upload-list__item')
  const input = page.locator('.tiny-upload__input')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), drag.click()])

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(drag).toHaveCSS('width', '360px')
  await expect(drag).toHaveCSS('height', '180px')
  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveText(/测试.jpg/)
  await expect(input).toHaveAttribute('accept', '.png,.jpeg,.jpg')
})
