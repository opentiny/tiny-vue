import { test, expect } from '@playwright/test'

test('PopUpload 阻止上传文件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pop-upload#before-upload')

  const preview = page.locator('#preview')
  const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
  const uploadModal = page.locator('.tiny-modal').nth(0)
  const messageModal = page.locator('.tiny-modal').nth(1)
  const selectFilesBtn = uploadModal.getByRole('button', { name: '选择文件' })
  const uploadsBtn = uploadModal.getByRole('button', { name: '开始上传' })
  const lists = uploadModal.locator('.tiny-popupload__dialog-table-item')
  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await modalAppearBtn.click()
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveCount(1)

  // 点击开始上传文件按钮，信息提示弹窗出现
  await uploadsBtn.click()
  await expect(messageModal).toBeVisible()
})
