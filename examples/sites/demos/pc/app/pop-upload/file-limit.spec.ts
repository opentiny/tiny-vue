import { test, expect } from '@playwright/test'

test('PopUpload 最大上传文件数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pop-upload#file-limit')

  const preview = page.locator('#preview')
  const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
  const uploadModal = page.locator('.tiny-modal').nth(0)
  const alert = uploadModal.locator('.tiny-alert')
  const selectFilesBtn = uploadModal.getByRole('button', { name: '选择批量文件' })
  const lists = uploadModal.locator('.tiny-popupload__dialog-table-item')
  const path = require('node:path')
  const path1 = path.resolve(__dirname, '测试.jpg')
  const path2 = path.resolve(__dirname, '测试.png')
  const path3 = path.resolve(__dirname, '测试.svg')
  const path4 = path.resolve(__dirname, '测试.svg')

  await modalAppearBtn.click()
  await expect(alert.getByText('上传文件数限制为:3')).toBeVisible()
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
  await fileChooser.setFiles(path1)
  await fileChooser.setFiles(path2)
  await fileChooser.setFiles(path3)
  await expect(lists).toHaveCount(3)

  await fileChooser.setFiles(path4)
  await expect(lists).toHaveCount(3)
  await expect(alert.getByText('上传文件数量超出限制,已取消该操作')).toBeVisible()
})
