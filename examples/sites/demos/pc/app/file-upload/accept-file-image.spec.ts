import { test, expect } from '@playwright/test'

test('限制文件类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#accept-file-image')

  const upload = page.getByRole('button', { name: '点击上传' })
  const lists = page.locator('.tiny-upload-list__li')
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  const path = require('node:path')
  const path1 = path.resolve(__dirname, '测试.jpg')
  const path2 = path.resolve(__dirname, '测试.svg')
  const path3 = path.resolve(__dirname, '测试.png')
  const path4 = path.resolve(__dirname, '测试.txt')

  await fileChooser.setFiles(path1)
  await fileChooser.setFiles(path2)
  await fileChooser.setFiles(path3)
  await fileChooser.setFiles(path4)
  await page.getByText('格式（.txt）暂不支持').isVisible()

  await page.getByText('测试.jpg').isVisible()
  await page.getByText('测试.svg').isVisible()
  await page.getByText('测试.png').isVisible()
})
