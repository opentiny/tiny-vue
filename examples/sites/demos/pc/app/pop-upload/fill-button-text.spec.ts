import { test, expect } from '@playwright/test'

test('PopUpload 定义按钮和标题的文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pop-upload#fill-button-text')

  const modalAppearBtn = page.getByRole('button', { name: '自定义按钮文本' })
  const modal = page.locator('.tiny-popupload__modal')
  const cancelBtn = modal.getByRole('button', { name: '自定义取消按钮' })
  const uploadsBtn = modal.getByRole('button', { name: '自定义提交按钮文本' })
  const title = modal.getByRole('button', { name: '自定义提交按钮文本' })
  const selectBtn = modal.getByRole('button', { name: '自定义按钮文本' })

  await modalAppearBtn.click()
  await title.isVisible()
  await cancelBtn.isVisible()
  await uploadsBtn.isVisible()
  await selectBtn.isVisible()
})
