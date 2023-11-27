import { test, expect } from '@playwright/test'

test('变更事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('switch#event-change')

  const demo = page.locator('#event-change')
  const switchBtn = demo.locator('.tiny-switch')
  const modal = page.locator('.tiny-modal')

  await switchBtn.click()
  await expect(modal.getByText('true')).toBeVisible()
  await switchBtn.click()
  await expect(modal.getByText('开关值：false')).toBeVisible()
})
