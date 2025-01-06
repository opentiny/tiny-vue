import { test, expect } from '@playwright/test'

test('水印和加密弹窗', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#encrypt-config')

  const upload = page.getByRole('button', { name: '点击上传' })
  const dialogBox = page.locator('.tiny-file-upload > .tiny-dialog-box__wrapper')
  const header = page.getByText('水印及加密设置')
  const footer = page.getByRole('button', { name: '选择文件' })
  const lists = page.locator('.tiny-upload-list__li')
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await upload.click()
  await dialogBox.isVisible()
  await header.isVisible()
  await footer.isVisible()
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), footer.click()])

  await fileChooser.setFiles(currentPath)
  await page.getByText('测试.jpg').isVisible()
  await expect(lists).toHaveText('测试.jpg按 delete 键可删除')
})
