import { test, expect } from '@playwright/test'

test('手动关闭通知', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#manual-close')

  const demo = page.locator('.pc-demo')
  const buttons = demo.locator('.tiny-button')
  const notifys = page.locator('.tiny-notify')

  await buttons.nth(0).click()
  await buttons.nth(1).click()
  await buttons.nth(2).click()

  await expect(notifys).toHaveCount(5)
  await page.waitForTimeout(4100)
  await expect(notifys).toHaveCount(0)
})
