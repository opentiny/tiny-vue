import { test, expect } from '@playwright/test'

test.describe('PopEditor 自定义标题和提交字段映射', () => {
  test('PopEditor 自定义标题', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popeditor#title')

    const preview = page.locator('#title')
    const textBox = preview.getByRole('textbox')
    const dialogBox = page.locator('.tiny-dialog-box')
    const customTitle = dialogBox.getByText('自定义弹窗标题')

    // 自定义标题
    await textBox.click()
    await expect(dialogBox).toBeVisible()
    await expect(customTitle).toBeVisible()
  })

  test('PopEditor 提交字段映射', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popeditor#title1')

    const preview = page.locator('#title1')
    const textBox = preview.getByRole('textbox')
    const dialogBox = page.locator('.tiny-dialog-box')
    const confirmBtn = dialogBox.getByRole('button', { name: '确 认' })
    const seletItem = dialogBox.getByRole('row', { name: '1 GFD科技YX公司 福建 福州' }).locator('span')

    // 显示公司的字段映射
    await textBox.click()
    await expect(dialogBox).toBeVisible()
    await seletItem.nth(0).check()
    await confirmBtn.click()
    await expect(textBox).toHaveValue('GFD科技YX公司')
  })
})
