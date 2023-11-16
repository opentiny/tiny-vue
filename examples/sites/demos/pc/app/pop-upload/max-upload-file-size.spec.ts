import { test, expect } from '@playwright/test'

test('PopUpload 可上传文件大小', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pop-upload#max-upload-file-size')

  const preview = page.locator('#preview')
  const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
  const uploadModal = page.locator('.tiny-modal').nth(0)
  const alert = uploadModal.locator('.tiny-alert')
  const selectFilesBtn = uploadModal.getByRole('button', { name: '选择文件' })
  const uploadsBtn = uploadModal.getByRole('button', { name: '开始上传' })
  const lists = uploadModal.locator('.tiny-popupload__dialog-table-item')
  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await modalAppearBtn.click()
  await expect(alert.getByText('上传文件大小不超过:9KB')).toBeVisible()
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveCount(1)
  await uploadsBtn.click()
  await expect(alert.getByText('测试.jpg:上传文件大小超出限制')).toBeVisible()
})
