import { test, expect } from '@playwright/test'

test('PopUpload 阻止删除文件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pop-upload#prevent-delete-file')

  const preview = page.locator('#preview')
  const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
  const uploadModal = page.locator('.tiny-modal').nth(0)
  const deleteModal = page.locator('.tiny-modal').nth(1)
  const selectFilesBtn = uploadModal.getByRole('button', { name: '选择文件' })
  const lists = uploadModal.locator('.tiny-popupload__dialog-table-item')
  const deleteIcon = lists.locator('.delIcon')
  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  await modalAppearBtn.click()
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveCount(1)
  await deleteIcon.click()
  await expect(deleteModal).toBeVisible()
})
