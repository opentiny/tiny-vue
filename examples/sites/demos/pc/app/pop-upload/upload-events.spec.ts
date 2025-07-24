import { test, expect } from '@playwright/test'

test('事件是否正常触发', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pop-upload#upload-events')

  const preview = page.locator('.all-demos-container')
  const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
  const uploadModal = page.locator('.tiny-popupload__modal')
  const selectFilesBtn = uploadModal.getByRole('button', { name: '选择批量文件' })
  const uploadsBtn = page.getByRole('button', { name: '开始上传' })
  const lists = uploadModal.locator('.tiny-popupload__dialog-table-item')
  const deleteIcon = lists.locator('.del-col')
  const path = require('node:path')
  const currentPath1 = path.resolve(__dirname, '测试.jpg')
  const currentPath2 = path.resolve(__dirname, '测试.png')
  const currentPath3 = path.resolve(__dirname, '测试.svg')

  // 点击选择文件按钮，上传弹窗弹出
  await modalAppearBtn.click()

  // 没有文件被选择时，开始上传按钮禁用
  await expect(lists).toHaveCount(0)
  await expect(uploadsBtn).toBeDisabled()

  // 点击选择文件后，文件被选择，开始上传按钮启用
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
  await fileChooser.setFiles([currentPath1, currentPath2, currentPath3])
  await page.getByText('触发文件超出个数限制回调事件').isVisible()

  await fileChooser.setFiles(currentPath1)
  await deleteIcon.click()
  await page.getByText('触发删除文件回调事件').isVisible()

  await page.waitForTimeout(200)
  await fileChooser.setFiles(currentPath2)
  await uploadsBtn.click()
  await page.getByText('文件上传失败回调').first().isVisible()
})
