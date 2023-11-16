import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#event-blur')
  await page.getByPlaceholder('选择时间范围').click()
  const focusDiv = page.locator('div').filter({ hasText: 'focus事件' }).nth(1)
  await expect(focusDiv).toBeVisible()
  await page.getByText('10:00').click()
  const change = page.locator('div:nth-child(9) > .tiny-modal__box')
  await expect(change).toBeVisible
  const blurDiv = page.locator('div').filter({ hasText: 'blur事件' }).nth(1)
  await expect(blurDiv).toBeVisible()
})
