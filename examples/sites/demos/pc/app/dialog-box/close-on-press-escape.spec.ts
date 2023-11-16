import { test, expect } from '@playwright/test'

test('dialogBox 禁用 ESC 关闭', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#close-on-press-escape')

  const preview = page.locator('#preview')
  const button = preview.getByRole('button', { name: '弹出Dialog' })
  const dialogBox = preview.locator('.tiny-dialog-box')

  // dialogBox弹出后，禁用 ESC 关闭
  await button.click()
  await expect(dialogBox).toBeVisible()
  await page.locator('body').press('Escape')
  await expect(dialogBox).toBeVisible()
})
