import { test, expect } from '@playwright/test'

test('只能上传的图片文件类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#accept-file-image')

  const upload = page.getByRole('button', { name: '点击上传' })
  const lists = page.locator('.tiny-upload-list__item')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  const path = require('node:path')
  const path1 = path.resolve(__dirname, '测试.jpg')
  const path2 = path.resolve(__dirname, '测试.svg')
  const path3 = path.resolve(__dirname, '测试.png')

  await fileChooser.setFiles(path1)
  await fileChooser.setFiles(path2)
  await fileChooser.setFiles(path3)
  await expect(lists).toHaveCount(3)
  await expect(lists).toHaveText([/测试.jpg/, /测试.svg/, /测试.png/])
})
