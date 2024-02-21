import { test, expect } from '@playwright/test'

test('使用小红点代替具体数值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#message-count-type')
  const messageBox = page.locator('.tiny-user-head__message')
  await expect(messageBox).toHaveCSS('background-color', 'rgb(255, 0, 0)')
})
