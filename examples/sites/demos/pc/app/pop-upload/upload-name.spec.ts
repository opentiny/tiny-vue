import { test, expect } from '@playwright/test'

test.describe('PopUpload 上传的文件字段名和发送 cookie 凭证信息', () => {
  const path = require('node:path')
  const currentPath = path.resolve(__dirname, '测试.jpg')

  test('PopUpload 上传的文件字段名', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('pop-upload#upload-name1')

    const preview = page.locator('#preview')
    const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
    const uploadModal = page.locator('.tiny-modal')
    const selectFilesBtn = uploadModal.getByRole('button', { name: '选择文件' })
    const uploadsBtn = uploadModal.getByRole('button', { name: '开始上传' })

    await modalAppearBtn.click()
    const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
    await fileChooser.setFiles(currentPath)

    const [request] = await Promise.all([page.waitForEvent('request'), uploadsBtn.click()])
    const headers = await request.headers()

    await expect(headers).not.toBeNull()
  })

  test(' 发送 cookie 凭证信息', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('pop-upload#upload-name')

    const preview = page.locator('#preview')
    const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })
    const uploadModal = page.locator('.tiny-modal')
    const selectFilesBtn = uploadModal.getByRole('button', { name: '选择文件' })
    const uploadsBtn = uploadModal.getByRole('button', { name: '开始上传' })

    await modalAppearBtn.click()
    const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), selectFilesBtn.click()])
    await fileChooser.setFiles(currentPath)

    const [request] = await Promise.all([page.waitForEvent('request'), uploadsBtn.click()])
    const header = await request.headers()

    await expect(header).not.toBeNull()
  })
})
