import { test, expect } from '@playwright/test'

test('PopUpload 覆盖默认请求', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pop-upload#http-request')

  const preview = page.locator('.all-demos-container')
  const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
  const uploadModal = page.locator('.tiny-popupload__modal')
  const selectFilesBtn = uploadModal.getByRole('button', { name: '选择文件' })
  const uploadsBtn = uploadModal.getByRole('button', { name: '开始上传' })
  const lists = uploadModal.locator('.tiny-popupload__dialog-table-item')
  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await modalAppearBtn.click()
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveCount(1)

  // 自定义上传行为
  await uploadsBtn.click()
  await page.getByText('上传成功').isVisible()
})
