import { test, expect } from '@playwright/test'

test('PopUpload 可上传文件类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pop-upload#file-type')

  const preview = page.locator('#preview')
  const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
  const uploadModal = page.locator('.tiny-modal').nth(0)
  const alert = uploadModal.locator('.tiny-alert')
  const selectFilesBtn = uploadModal.getByRole('button', { name: '选择文件' })
  const uploadsBtn = uploadModal.getByRole('button', { name: '开始上传' })
  const lists = uploadModal.locator('.tiny-popupload__dialog-table-item')
  const path = require('node:path')
  const path1 = path.resolve(__dirname, '测试.jpg')
  const path2 = path.resolve(__dirname, '测试.png')
  const path3 = path.resolve(__dirname, '测试.svg')

  await modalAppearBtn.click()
  await expect(alert.getByText('上传文件类型限制为:.png,.jpg')).toBeVisible()
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
  await fileChooser.setFiles(path1)
  await fileChooser.setFiles(path2)
  await fileChooser.setFiles(path3)
  await expect(lists).toHaveCount(3)
  await uploadsBtn.click()
  await expect(alert.getByText('测试.svg:上传文件类型不匹配')).toBeVisible()
})
