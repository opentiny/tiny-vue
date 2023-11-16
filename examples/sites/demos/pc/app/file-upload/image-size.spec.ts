import { test, expect } from '@playwright/test'

test('获取上传的片的原始尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#image-size')

  const upload = page.getByRole('button', { name: '选取文件' })
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const modal = page.locator('.tiny-modal')

  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await fileChooser.setFiles(currentPath)
  await expect(modal).toHaveText(/宽：\d+ 高：\d+/)
})
