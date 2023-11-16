import { test, expect } from '@playwright/test'

test('dialogBox 自定义内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#custom-dialog-content')

  const preview = page.locator('#preview')
  const button = preview.getByRole('button', { name: '弹出Dialog' })
  const dialogBox = preview.locator('.tiny-dialog-box')
  const body = dialogBox.locator('.tiny-dialog-box__body')

  await button.click()
  await expect(dialogBox).toBeVisible()
  await expect(body.locator('span').filter({ hasText: /^dialog-box内容$/ })).toHaveCount(0)
  await expect(body.locator('.tiny-alert--success')).toBeVisible()
})
