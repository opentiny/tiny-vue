import { test, expect } from '@playwright/test'

test('校验不通过事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-valid-error-event')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await page.locator('.tiny-grid-default-input').clear()
  await page.waitForTimeout(400)
  await expect(page.getByText('触发校验不通过事件').first()).toBeVisible()
})
