import { test, expect } from '@playwright/test'

test('最大上传数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#max-file-count')

  const upload = page.getByRole('button', { name: '点击上传' })
  const lists = page.locator('.tiny-upload-list__li')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const modal = page.locator('.tiny-modal').getByText(/文件数不能超过/)

  const path = require('node:path')
  const path1 = path.resolve(__dirname, '测试.jpg')
  const path2 = path.resolve(__dirname, '测试.png')

  await fileChooser.setFiles([path1, path2])
  await modal.isVisible()
  await fileChooser.setFiles(path1)
  await expect(lists).toHaveCount(1)
  await upload.isHidden()
})
