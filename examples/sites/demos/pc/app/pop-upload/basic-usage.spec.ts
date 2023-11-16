import { test, expect } from '@playwright/test'

test('PopUpload 基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pop-upload#basic-usage')

  const preview = page.locator('#preview')
  const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
  const modal = page.locator('.tiny-modal')
  const selectFilesBtn = modal.getByRole('button', { name: '选择文件' })
  const uploadsBtn = modal.getByRole('button', { name: '开始上传' })
  const cancelBtn = modal.getByRole('button', { name: '取消' })
  const lists = modal.locator('.tiny-popupload__dialog-table-item')
  const deleteIcon = lists.locator('.delIcon')
  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  // 点击选择文件按钮，上传弹窗弹出
  await modalAppearBtn.click()
  await expect(modal).toBeVisible()
  await expect(selectFilesBtn).toBeVisible()

  // 没有文件被选择时，开始上传按钮禁用
  await expect(lists).toHaveCount(0)
  await expect(uploadsBtn).toBeDisabled()

  // 点击选择文件后，文件被选择，开始上传按钮启用
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
  await fileChooser.setFiles(currentPath)
  await expect(lists).toHaveCount(1)
  await expect(uploadsBtn).not.toBeDisabled()

  // 文件被选择后，点击垃圾桶图标删除文件
  await expect(lists).toHaveCount(1)
  await deleteIcon.click()
  await expect(lists).toHaveCount(0)
  await expect(uploadsBtn).toBeDisabled()

  // 点击取消按钮，上传弹窗消失
  await cancelBtn.click()
  await expect(modal).not.toBeVisible()
})
