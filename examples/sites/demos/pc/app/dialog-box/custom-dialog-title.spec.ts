import { test, expect } from '@playwright/test'

test('dialogBox 自定义标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#custom-dialog-title')

  const preview = page.locator('#preview')
  const button = preview.getByRole('button', { name: '弹出Dialog' })
  const dialogBox = preview.locator('.tiny-dialog-box')
  const header = dialogBox.locator('.tiny-dialog-box__header')
  const customTitle = header.getByText('自定义title区域')
  const defaultTitle = header.getByText('消息')

  await button.click()
  await expect(dialogBox).toBeVisible()
  await expect(defaultTitle).toHaveCount(0)
  await expect(customTitle).toBeVisible()
})
