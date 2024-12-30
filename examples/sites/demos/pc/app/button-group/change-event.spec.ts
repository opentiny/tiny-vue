import { test, expect } from '@playwright/test'

test('按钮组 change 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#change-event')

  const demo = page.locator('#change-event')
  const btn = demo.locator('.tiny-button-group button')
  const modal = page.locator('.tiny-modal')

  await btn.nth(1).click()
  await expect(modal.filter({ hasText: 'change 事件触发了，选中值为 Button2' })).toBeVisible()
  await btn.nth(2).click()
  await expect(modal.filter({ hasText: 'change 事件触发了，选中值为 Button3' })).toBeVisible()
})
