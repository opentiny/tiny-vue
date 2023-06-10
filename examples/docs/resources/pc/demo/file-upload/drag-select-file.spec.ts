import { test, expect } from '@playwright/test'

test('拖拽上传', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/file-upload/drag-select-file')

  const drag = page.locator('.tiny-upload-dragger')
  const lists = page.locator('.tiny-upload-list__item')
  const input = page.locator('.tiny-upload__input')
  const server = page.getByRole('button', { name: '上传到服务器' })
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), drag.click()])

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(drag).toHaveCSS('width', '360px')
  await expect(drag).toHaveCSS('height', '180px')
  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveText(/测试.jpg/)
  await input.isVisible()
  await server.click()
  await lists.waitFor({ state: 'hidden', timeout: 3000 })
  await expect(lists).toHaveCount(0)
})
