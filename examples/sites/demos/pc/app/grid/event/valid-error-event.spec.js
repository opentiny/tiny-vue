import { test, expect } from '@playwright/test'

test('校验不通过事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-valid-error-event')
  const demo = page.locator('#event-valid-error-event')
  await demo.getByText('GFD 科技 YX 公司').first().click()
  const input = demo.locator('.tiny-grid-default-input')
  await input.clear()
  await input.press('Enter')
  await expect(page.getByText('触发校验不通过事件').first()).toBeVisible()
})
