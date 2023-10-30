import { test, expect } from '@playwright/test'

test.describe('PopUpload 自定义按钮的文本', () => {
  test('PopUpload 文件上传弹框中取消按钮的文本', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('pop-upload#fill-button-text1')

    const modalAppearBtn = page.getByRole('button', { name: '自定义按钮文本' })
    const modal = page.locator('.tiny-modal')
    const cancelBtn = modal.getByRole('button', { name: '自定义取消按钮' })

    await modalAppearBtn.click()
    await expect(cancelBtn).toHaveText(/自定义取消按钮/)
  })

  test('PopUpload 文件上传弹框中提交按钮的文本', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('pop-upload#fill-button-text2')

    const modalAppearBtn = page.getByRole('button', { name: '自定义按钮文本' })
    const modal = page.locator('.tiny-modal')
    const uploadsBtn = modal.getByRole('button', { name: '自定义提交按钮文本' })

    await modalAppearBtn.click()
    await expect(uploadsBtn).toHaveText(/自定义提交按钮文本/)
  })

  test('PopUpload 打开弹出框的按钮的文本', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('pop-upload#fill-button-text4')

    const modalAppearBtn = page.getByRole('button', { name: '自定义按钮文本' })
    const modal = page.locator('.tiny-modal')

    await expect(modalAppearBtn).toHaveText(/自定义按钮文本/)
    await modalAppearBtn.click()
    await expect(modal).toBeVisible()
  })
})
