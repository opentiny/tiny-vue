import { test, expect } from '@playwright/test'

test('PopUpload 基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pop-upload#basic-usage')

  const preview = page.locator('.all-demos-container')
  const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
  const uploadModal = page.locator('.tiny-popupload__modal')
  const selectFilesBtn = page.getByRole('button', { name: '选择文件' }).nth(1)
  const uploadName = uploadModal.locator('input.tiny-upload__input')
  const uploadsBtn = uploadModal.getByRole('button', { name: '开始上传' })
  const cancelBtn = uploadModal.getByRole('button', { name: '取消' })
  const lists = uploadModal.locator('.tiny-popupload__dialog-table-item')
  const deleteIcon = lists.locator('.delIcon')
  const path = require('node:path')
  const path1 = path.resolve(__dirname, '测试.jpg')
  const path2 = path.resolve(__dirname, '测试.png')

  // 点击选择文件按钮
  await modalAppearBtn.click()

  // 没有文件被选择时，开始上传按钮禁用
  await lists.isHidden()
  await expect(uploadsBtn).toBeDisabled()

  // 判断弹窗中的uploadName属性是否生效
  await page.waitForTimeout(200)
  await expect(uploadName).toHaveAttribute('name', 'inputName')

  // 点击选择文件后，文件被选择，开始上传按钮启用
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
  await fileChooser.setFiles(path1)
  await expect(lists).toHaveCount(1)

  // 文件被选择后，点击垃圾桶图标删除文件
  await expect(lists).toHaveCount(1)
  await deleteIcon.click()
  await expect(lists).toHaveCount(0)
  await expect(uploadsBtn).toBeDisabled()
  await fileChooser.setFiles(path1)
  await fileChooser.setFiles(path2)
  await expect(uploadsBtn).not.toBeDisabled()
  const [request] = await Promise.all([page.waitForEvent('request'), uploadsBtn.click()])

  // 上传时附带的额外参数: 获取请求体
  const body = await request.postData()
  await expect(body).toBeNull()

  // 点击取消按钮，上传弹窗消失
  await cancelBtn.click()
  await uploadModal.isHidden()
})
