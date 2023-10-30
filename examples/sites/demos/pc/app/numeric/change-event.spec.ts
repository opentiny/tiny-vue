import { test, expect } from '@playwright/test'

test('值改变事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#change-event')

  const increaseBtn = page.locator('.tiny-numeric__increase')
  await increaseBtn.click()
  await expect(page.getByText('新值：2，旧值：1')).toBeVisible()
})
